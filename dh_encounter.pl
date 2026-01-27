#!/usr/bin/perl -w
#
# A script to help generate encounters for an upcoming Heart of the Witherwild
# campaign within the Daggerheart RPG ruleset.
#
# Created 2026-01 by Poetics

use strict;

# Initial party size
my $player_count = 5;                   # Party size, default 5

# Encounter limit formula from DH core rules
my $encounter_size = (3 * $player_count) + 2;

# Adversary Tracker
# [Name]: [Points, Count, Wither Count]
my %enemies = (
        "Minions" => { 'points' => 1, 'count' => 0, 'w_count' => 0 },
        "Social" => { 'points' => 1, 'count' => 0, 'w_count' => 0 },
        "Support" => { 'points' => 1, 'count' => 0, 'w_count' => 0 },
        "Horde" => { 'points' => 2, 'count' => 0, 'w_count' => 0 },
        "Ranged" => { 'points' => 2, 'count' => 0, 'w_count' => 0 },
        "Skulk" => { 'points' => 2, 'count' => 0, 'w_count' => 0 },
        "Standard" => { 'points' => 2, 'count' => 0, 'w_count' => 0 },
        "Leader" => { 'points' => 3, 'count' => 0, 'w_count' => 0 },
        "Bruiser" => { 'points' => 4, 'count' => 0, 'w_count' => 0 },
        "Solo" => { 'points' => 5, 'count' => 0, 'w_count' => 0 }
);

# Additional Rules
# These are rules suggested by the Daggerheart team for altering an
# encounter's point value/difficulty. Some are able to be automated within
# this script, some are up to the GM to implement themselves (generally
# by adding or subtracting a 1-point enemy like Minions, Social, or Support)
#
# - Subtract 2 points if 2+ Solos [automated]
# - Add 1 point if no Bruisers, Hordes, Leaders, or Solos [automated]
# - "Withered" enemies are +1 points each [automated]
# - Add 2 points to make a fight harder [manual]
# - Subtract 1 point to make a fight easier [manual]
# - Subtract 2 points and give all enemies +1d4/+2 to damage [manual]

# Run the encounter calculator
&encounter($encounter_size);

# If Additional Rule 2 is triggered, re-run the calculator with a limit of 1
&encounter(1) unless ( $enemies{'Bruiser'}{'count'} + $enemies{'Bruiser'}{'w_count'} + $enemies{'Horde'}{'count'} + $enemies{'Horde'}{'w_count'} + $enemies{'Leader'}{'count'} + $enemies{'Leader'}{'w_count'} + $enemies{'Solo'}{'count'} + $enemies{'Solo'}{'w_count'} > 0 );

# Print the output
print "Party size: $player_count ($encounter_size points)\n";

# Generic variables to make the printf statements cleaner
my $count;
my $point;

foreach my $name (keys %enemies) {
        if ( $enemies{$name}{'count'} > 0 ) {
                $count = $enemies{$name}{'count'};
                $point = $enemies{$name}{'points'} * $count ;
                printf("%-23s%s\n","- $count" . "x $name", "[$point pts]");
        }
        if ( $enemies{$name}{'w_count'} > 0 ) {
                $count = $enemies{$name}{'w_count'};
                $point = ($enemies{$name}{'points'} + 1) * $count ;
                printf("%-23s%s\n","- $count" . "x $name (Wither)", "[$point pts]");
        }
}

# The bulk of the labor
sub encounter {

        my $e_limit = shift(@_);
        my $solos = 0;                  # Required for solo-check rule
        my $cost = 0;
        my $withered = 0;
        my $monster;
        my @monsters = keys %enemies;

        while ($e_limit > 0) {

                # First step, draw a monster and check for wither (25%)
                # "Standard" monsters have a 30%+ chance of being drawn
                if (rand(1) < 0.30) { $monster = 'Standard'; }
                else { $monster = $monsters[rand(@monsters)]; }

                $cost = $enemies{$monster}{'points'};
                if (rand(1) < 0.25) {
                        $withered = 1;
                        $cost++;
                };

                # Next, check for capacity left in the encounter
                next unless ($e_limit - $cost >= 0);

                # Special check to deal with the Solos rule, above
                # We only add the bonus cost when the # of solos equals 2
                if ($monster eq 'Solo') {
                        $solos++;
                        if ($solos == 2) { $cost += 2; }
                        next unless ($e_limit - $cost >= 0);
                };

                # If those checks pass, we add the monster tally
                # and subtract their cost from the encounter limit
                if ($withered) { $enemies{$monster}{'w_count'}++; }
                else { $enemies{$monster}{'count'}++; };
                $e_limit -= $cost;

                # Clean up variables used this loop (explicitly /not/ $solos)
                $withered = 0;
                $cost = 0;

        };

};


__END__

## Changelog

2026-01-27 : Rewrote from scratch with better logic and results display
2026-01-26 : Initial release. Very hacky and with roughshod logic
