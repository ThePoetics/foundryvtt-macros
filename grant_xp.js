// For the D&D 5e system, this will take the current combat encounter
// and generate total XP value for all defeated enemies, then present 
// the Award dialogue box.
// by Michael
const totalXP = game.combat.combatants
  .filter(i => i.isDefeated && i.token.disposition == -1)
  .reduce((acc, i) => acc + (i.actor?.system.details.xp.value ?? 0), 0);
dnd5e.applications.Award.handleAward(`/award ${totalXP}xp`);
