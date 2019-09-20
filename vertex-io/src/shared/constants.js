module.exports = Object.freeze({
  PLAYER_RADIUS: 20,
  PLAYER_MAX_HP: 100,
  PLAYER_SPEED: 300,
  PLAYER_FIRE_COOLDOWN: 0.25,
  
  PLAYER_REGEN_PER_SECOND: 1,
  PLAYER_REGEN_PER_DAMAGE: 0.2,
  
  BULLET_RADIUS: 4,
  BULLET_SPEED: 800,
  BULLET_DAMAGE: 10,
  BULLET_DAMAGE_CRIT: 0,

  SCORE_BULLET_HIT: 20,
  SCORE_PER_SECOND: 1,

  MAP_SIZE: 5000,
  MSG_TYPES: {
    JOIN_GAME: 'join_game',
    GAME_UPDATE: 'update',
    INPUT: 'input',
    GAME_OVER: 'dead',
  },
});