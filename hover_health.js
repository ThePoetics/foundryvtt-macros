// This script sets all on-scene tokens to display health only on hover
// Caution using on scenes with linked tokens, as this will change it for all instances

canvas.tokens.updateAll({displayBars: CONST.TOKEN_DISPLAY_MODES.OWNER_HOVER});
