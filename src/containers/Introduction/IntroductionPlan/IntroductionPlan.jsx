import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import './IntroductionPlan.scss';

const IntroductionPlan = ({ image, isArrow }) => {
  const deviceWidth = useSelector((state) => state.uiReducer.device.width);
  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);

  const settings = {
    width: isMobile ? window.innerWidth : 696,
    height: 534,
  };

  const init = () => {
    // requestAnimFrame shim
    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          window.setTimeout(callback);
        }
      );
    })();

    // get dimensions of window and resize the canvas to fit
    var width = settings.width,
      height = settings.height,
      canvas = document.getElementById('c'),
      mousex = width / 2 + 400,
      mousey = 0;
    canvas.width = width;
    canvas.height = height;

    // get 2d graphics context and set global alpha
    var G = canvas.getContext('2d');
    G.globalAlpha = 0.25;

    // setup aliases
    var Rnd = Math.random,
      Sin = Math.sin,
      Floor = Math.floor;

    // constants and storage for objects that represent star positions
    var warpZ = 12,
      units = 1000,
      stars = [],
      Z = 0.05; // Z range 0.01 -> 0.5
    /**
      modify mouseX, mouseY to change vanishing point
      modify Z to affect the speed
    **/
    // function to reset a star object

    function resetstar(a) {
      a.x = (Rnd() * width - width * 0.5) * warpZ;
      a.y = (Rnd() * height - height * 0.5) * warpZ;
      a.z = warpZ;
      a.px = 0;
      a.py = 0;
    }

    // initial star setup
    for (var i = 0; i < units; i++) {
      setTimeout(function () {
        var n = {};
        resetstar(n);
        stars.push(n);
      }, 20 * i);
    }

    // star rendering anim function
    var rf = function () {
      // clear background
      G.clearRect(0, 0, width, height);

      // position of vanishing point
      var cx = mousex - width / 2 + width / 2,
        cy = mousey - height / 2 + height / 2;

      // update all stars
      var sat = Floor(Z * 500);
      if (sat > 100) sat = 100;
      G.strokeStyle = 'rgba(255,255,255,' + sat * 0.1 + ')';

      for (var i = 0; i < units; i++) {
        var n = stars[i]; // the star
        if (!n) continue;
        var xx = n.x / n.z, // star position
          yy = n.y / n.z,
          e = Math.pow(2.0 / n.z + 1, 2); // size i.e. z

        if (n.px !== 0) {
          G.lineWidth = e;
          G.beginPath();
          G.moveTo(xx + cx, yy + cy);
          n.px && n.py && G.lineTo(n.px + cx, n.py + cy);
          G.stroke();
        }

        // update star position values with new settings
        n.px = xx;
        n.py = yy;
        n.z -= Z;

        // reset when star is out of the view field
        if (n.z < Z || n.px > width || n.py > height) {
          // reset star
          resetstar(n);
        }
      }

      requestAnimFrame(rf);
    };

    requestAnimFrame(rf);
  };

  useEffect(() => {
    init();
  }, [deviceWidth]);

  return (
    <div className="IntroductionPlan">
      <div className="header">
        <p className="center v-center plane-container">
          <canvas id="c"></canvas>

          <div className={classNames('plane-wrapper', { 'arrow': isArrow })}>
            <img src={image} className="plane" alt="" />
          </div>
        </p>
      </div>
    </div>
  );
};

export default IntroductionPlan;
