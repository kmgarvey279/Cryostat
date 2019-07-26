import React from 'react';
import playerStandNorth from '../../assets/images/player/playerStandNorth.png';
import playerStandEast from '../../assets/images/player/playerStandEast.png';
import playerStandSouth from '../../assets/images/player/playerStandSouth.png';
import playerStandWest from '../../assets/images/player/playerStandWest.png';
import playerWalkNorth from '../../assets/images/player/playerWalkNorth.png';
import playerWalkEast from '../../assets/images/player/playerWalkEast.png';
import playerWalkSouth from '../../assets/images/player/playerWalkSouth.png';
import playerWalkWest from '../../assets/images/player/playerWalkWest.png';
import playerAttackNorth from '../../assets/images/player/playerAttackNorth.png';
import playerAttackEast from '../../assets/images/player/playerAttackEast.png';
import playerAttackSouth from '../../assets/images/player/playerAttackSouth.png';
import playerAttackWest from '../../assets/images/player/playerAttackWest.png';

//Constants
export const UPDATE_PLAYER_HEALTH = "UPDATE_PLAYER_HEALTH";
export const UPDATE_PLAYER_LOCATION = "UPDATE_PLAYER_LOCATION";
export const UPDATE_PLAYER_DIRECTION = "UPDATE_PLAYER_DIRECTION";

//Action Creators
export function updatePlayerHealth(newHealth) {
  return {
    type: UPDATE_PLAYER_HEALTH,
    health: newHealth
  };
}
export function updatePlayerLocation(newLocation) {
  return {
    type: UPDATE_PLAYER_LOCATION,
    location: newLocation
  };
}
export function updatePlayerDirection(newDirection) {
  return {
    type: UPDATE_PLAYER_DIRECTION,
    direction: newDirection
  };
}

//Initial State
const playerSpriteList = {
  stand: {
    north: <img id="player" src={playerStandNorth} width="55" height="55"/>,
    east: <img id="player" src={playerStandEast} width="55" height="55"/>,
    south: <img id="player" src={playerStandSouth} width="55" height="55"/>,
    west: <img id="player" src={playerStandWest} width="55" height="55"/>,
  },
  walk: {
    north: <img id="player" src={playerWalkNorth} width="50" height="55"/>,
    east: <img id="player" src={playerWalkEast} width="50" height="55"/>,
    south: <img id="player" src={playerWalkSouth} width="50" height="55"/>,
    west: <img id="player" src={playerWalkWest} width="50" height="55"/>,
  },
  knockback: {
    north: <img id="player" src={playerStandNorth} width="50" height="50"/>,
    east: <img id="player" src={playerStandEast} width="50" height="50"/>,
    south: <img id="player" src={playerStandSouth} width="50" height="50"/>,
    west: <img id="player" src={playerStandWest} width="50" height="50"/>,
  },
  attack: {
    north: <img id="player" src={playerAttackNorth} width="50" height="50" />,
    east: <img id="player" src={playerAttackEast} width="50" height="50" />,
    south: <img id="player" src={playerAttackSouth} width="50" height="50" />,
    west: <img id="player" src={playerAttackWest} width="50" height="50" />,
  },
  fall: <img id="player" src={playerStandEast} width="50" height="50"/>,
  victory: <img id="player" src={playerStandEast} width="50" height="50"/>
};

//Reducer
const playerReducer = (state = initialState.player, action) => {
  let newState;
  const { health, location, direction } = action;

  switch (action.type) {
    case UPDATE_PLAYER_HEALTH:
        newState = Object.assign({}, state, {
          health: health
        });
        return newState;
    case UPDATE_PLAYER_LOCATION:
        newState = Object.assign({}, state, {
          location: location
        });
        return newState;
    case UPDATE_PLAYER_DIRECTION:
        newState = Object.assign({}, state, {
          direction: direction
        });
        return newState;
    default:
        return state;
      }
    };

export default playerReducer;