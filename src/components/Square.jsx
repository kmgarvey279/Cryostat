import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Square(props){
  if (props.player.invincibility == true && props.content == 'player') {
    return (
      <div>
        <style jsx>{`
          @keyframes flash {
            10%  {background-color:red;}
            30%  {background-color:red;}
            50%  {background-color:red;}
            70%  {background-color:red;}
            90%  {background-color:red;}
          }
          div#spriteFlash{
            right: 4px;
            bottom: 5px;
            z-index: 100;
            position: absolute;
            animation-name: flash;
            animation-duration: 2s;
          }
        `}</style>
        <div id="spriteFlash">{props.sprite}</div>
        <div id="tile">{props.tileImage}</div>
      </div>
    )
  } else if (props.transition !== '' && props.value == 'P') {
    return (
      <div>
        <style jsx>{`
          @keyframes fall {
            0%  {transform: rotate(20deg) scale(1.0);}
            25%  {transform: rotate(40deg) scale(0.7);}
            50%  {transform: rotate(60deg) scale(0.4);}
            75%  {transform: rotate(100deg) scale(0.1);}
          }
          div#spriteFall{
            right: 4px;
            bottom: 5px;
            z-index: 100;
            position: absolute;
            animation-name: fall;
            animation-duration: 1s;
          }
        `}</style>
        <div id="spriteFall">{props.sprite}</div>
        <div id="tile">{props.tileImage}</div>
      </div>
    )
  } else if (props.transition === 'north') {
    return (
      <div>
        <style jsx>{`
          @keyframes move {
            0%  {bottom: 10px;}
            25%  {bottom: 20px;}
            50%  {bottom: 30px;}
            75%  {bottom: 40px;}
          }
          div#spriteNorth{
            right: 4px;
            bottom: 5px;
            z-index: 100;
            position: absolute;
            animation-name: move;
            animation-duration: 1s;
          }
        `}</style>
        <div id="spriteNorth">{props.sprite}</div>
        <div id="tile">{props.tileImage}</div>
      </div>
    )
  } else if (props.transition === 'east') {
      return (
        <div>
          <style jsx>{`
            @keyframes move {
              0%  {left: 10px;}
              25%  {left: 20px;}
              50%  {left: 30px;}
              75%  {left: 40px;}
            }
            div#spriteEast{
              bottom: 5px;
              z-index: 100;
              position: absolute;
              animation-name: move;
              animation-duration: 1s;
            }
          `}</style>
          <div id="spriteEast">{props.sprite}</div>
          <div id="tile">{props.tileImage}</div>
        </div>
      )
    } else if (props.transition === 'south') {
      return (
        <div>
          <style jsx>{`
            @keyframes move {
              0%  {top: 10px;}
              25%  {top: 20px;}
              50%  {top: 30px;}
              75%  {top: 40px;}
            }
            div#spriteSouth{
              bottom: 5px;
              z-index: 100;
              position: absolute;
              animation-name: move;
              animation-duration: 1s;
            }
          `}</style>
          <div id="spriteSouth">{props.sprite}</div>
          <div id="tile">{props.tileImage}</div>
        </div>
      )
    } else if (props.transition === 'west') {
      return (
        <div>
          <style jsx>{`
            @keyframes move {
              0%  {right: 10px;}
              25%  {right: 20px;}
              50%  {right: 30px;}
              75%  {right: 40px;}
            }
            div#spriteWest{
              bottom: 5px;
              z-index: 100;
              position: absolute;
              animation-name: move;
              animation-duration: 1s;
            }
          `}</style>
          <div id="spriteWest">{props.sprite}</div>
          <div id="tile">{props.tileImage}</div>
        </div>
      )
  } else {
    return (
      <div>
        <style jsx>{`
          div#sprite{
            z-index: 100;
            position: absolute;
            bottom: 5px;
          }
          `}</style>
          <div id="sprite">{props.sprite}</div>
          <div id="tile">{props.tileImage}</div>
        </div>
      )
    }
  }

Square.propTypes = {
  value: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  contentId: PropTypes.string.isRequired,
  squareId: PropTypes.number.isRequired,
  tileImage: PropTypes.object.isRequired,
  sprite: PropTypes.object,
  transition: PropTypes.string,
  player: PropTypes.object
};

export default connect()(Square);
