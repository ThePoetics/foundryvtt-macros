#!/usr/bin/perl -w
#
# A script to help generate encounters for an upcoming Heart of the Witherwild
# campaign with the Daggerheart ruleset. This is going to be quick and dirty
# at first, with many potential areas of improvement.
#
# Created 2026-01 by Poetics

use strict;

my $players = 5;
# Improvement: overwrite via command arg?

# Basic encounter formula from rulebook
my $encounter_size = (3 * $players) + 2;

# Additional Rules:
#       Subtract 2 points if 2+ Solos [automated]
#       Add 1 point if no Bruisers, Hordes, Leaders, or Solos [automated, ish]
#       Suggest adding 2 points for harder fights
#       (Also can do -2 points by adding +1d4/+2 to all enemy damage)
#       Suggest subtracting 1 point for easier fights
#       Withered enemies are +1 point each [custom]

# Enemies by point value
my %enemies = (
        "minions" => "1",       # Group equal to the party size
        "social" => "1",
        "support" => "1",
        "horde" => "2",
        "ranged" => "2",
        "skulk" => "2",
        "standard" => "2",
        "leader" => "3",
        "bruiser" => "4",
        "solo" => "5"
);

# Hold the count of each in a hash in order to properly track how many of
# which types we've drawn, and to apply adjustments (for multiple solos or
# none of the second listed groups).

my %fight_makeup = (
        "minions" => "0", "minions_w" => "0",
        "social" => "0", "social_w" => "0",
        "support" => "0", "support_w" => "0",
        "horde" => "0", "horde_w" => "0",
        "ranged" => "0", "ranged_w" => "0",
        "skulk" => "0", "skulk_w" => "0",
        "standard" => "0", "standard_w" => "0",
        "leader" => "0", "leader_w" => "0",
        "bruiser" => "0", "bruiser_w" => "0",
        "solo" => "0", "solo_w" => "0"
);

# Now the trick. Start an infinite loop and a base count equal to
# $encounter_size. On each loop, see if there's enough $e_s to subtract, and
# if so, add that monster to the loop and decrement. If not, re-draw.
#
# Additional factors: consider a 25% chance to have a Withered enemy
# Future Improvement: make "Standard" more likely?

# Run the subroutine
my $base = &encounter($encounter_size);

# Re-run encounter with 1 point to account for additional rule #2
my $rule2 = $fight_makeup{'bruiser'} + $fight_makeup{'bruiser_w'} + $fight_makeup{'horde'} + $fight_makeup{'horde_w'} + $fight_makeup{'leader'} + $fight_makeup{'leader_w'} + $fight_makeup{'solo'} + $fight_makeup{'solo_w'};

if ($rule2 == 0) { &encounter(1); }


# Display results
foreach (keys %fight_makeup) {
        print "$_ x" . $fight_makeup{$_} . "\n" if $fight_makeup{$_} > 0;
}

# Debugging text
#print "--Base Points: $base\n";

sub encounter {
        my $e_limit = shift(@_);
        my $solos = 0;
        my $withered = 0;
        my $basepoints = 0;

        while ($e_limit > 0) {

                # Put the monster types into an array and pull one randomly
                my @monsters = keys %enemies;
                my $monster = $monsters[rand(@monsters)];

                # Check to see if there's enough size left for this monster
                next unless ($e_limit - $enemies{$monster} >= 0);

                # The limit gets lowered if there's more than one Solo
                # So before adding an additional one, we need to check to
                # see if there's room, including the lowered limit
                if ($monster eq 'solo') {
                        if ($solos > 1) {
                                next unless ($e_limit - $enemies{$monster} >= 2);
                        }
                        $solos++;
                        # We do not deduct more than once
                        if ($solos == 2) { $e_limit -= 2; }
                }

                # Now check for wither and whether there's capacity
                if ((rand(1) < 0.25) && ($e_limit - $enemies{$monster} >= 1)) {
                        $withered = 1;
                        $e_limit -= 1;
                }

                # If no withered trigger, push the monster
                if (!$withered) {
                        $fight_makeup{$monster}++;
                }
                # Otherwise, add the _w, push the monster
                else {
                        $fight_makeup{$monster . "_w"}++;
                }

                # Clear withered and decrement size
                $withered = "";
                $e_limit -= $enemies{$monster};
                $basepoints += $enemies{$monster};
        };

        return $basepoints;
};


exit;


__END__
