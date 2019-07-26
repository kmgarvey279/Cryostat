import levelReducer from './level';
import gameReducer from './game';
import playerReducer from './player';
import projectileReducer from './projectiles';
import enemyReducer from './enemies';
import blockReducer from './blocks';
import doorReducer from './doors';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  player: playerReducer,
  currentLevel: levelReducer,
  game: gameReducer,
  projectiles: projectileReducer,
  enemies: enemyReducer,
  doors: doorReducer,
  blocks: blockReducer
});

export default rootReducer;