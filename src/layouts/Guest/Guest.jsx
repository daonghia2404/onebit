import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Navigation from '@/containers/Navigation';
import NavigationMobile from '@/containers/NavigationMobile';
import NavigationMobileList from '@/containers/NavigationMobile/NavigationMobileList';

import './Guest.scss';

const Guest = ({ children }) => {
  const isMobile = useSelector((state) => state.uiReducer.device.isMobile);
  const [visibleMenu, setVisibleMenu] = useState(false);

  const handleToggleVisibleMenu = () => {
    setVisibleMenu(!visibleMenu);
  };

  const initBackgroundAnimate = () => {
    /*
      Bouncing Balls by Rob Glazebrook
      An update of my earlier Pen which did something similar using DOM elements. This is my first foray into using sketch.js.
    */
    var particles = [],
      particleCount = 5;
    var Particle = function (x, y) {
      this.x = x;
      this.y = y;
      this.radius = random(10, 150);
      var colors = ['rgba(252,160,22)', 'rgba(252,22,91)', 'rgba(37,174,247)', 'rgba(96,22,252)'];
      this.rgba = colors[(Math.random() * colors.length) | 0];
      this.vx = random(-2, 2);
      this.vy = random(-2, 2);
      // Draw our particle to the canvas.
      this.draw = function (ctx) {
        ctx.fillStyle = this.rgba;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, TWO_PI);
        ctx.fill();
      };
      // Update our position.
      this.update = function (ctx) {
        this.x += this.vx;
        this.y += this.vy;
        // Bounce off edges.
        if (this.x + this.radius > ctx.width) {
          this.vx *= -1;
          this.x = ctx.width - this.radius;
        }
        if (this.x - this.radius < 0) {
          this.vx *= -1;
          this.x = this.radius;
        }
        if (this.y + this.radius > ctx.height) {
          this.vy *= -1;
          this.y = ctx.height - this.radius;
        }
        if (this.y - this.radius < 0) {
          this.vy *= -1;
          this.y = this.radius;
        }
      };
    };
    var sketch = Sketch.create({
      setup: function () {
        var i = particleCount;
        while (i--) {
          var p = new Particle(random(0, this.width), random(0, this.height));
          particles.push(p);
        }
      },
      update: function () {
        var i = particleCount;
        while (i--) {
          particles[i].update(this);
        }
      },
      draw: function () {
        var i = particleCount;
        while (i--) {
          particles[i].draw(this);
        }
      },
    });
  };

  useEffect(() => {
    // if (typeof Sketch !== 'undefined') initBackgroundAnimate();
  }, []);

  return (
    <div className="Guest">
      {isMobile ? (
        <>
          <NavigationMobileList visibleMenu={visibleMenu} />
          <div className="Guest-sidebar-mobile">
            <NavigationMobile visibleMenu={visibleMenu} onOpenMenu={handleToggleVisibleMenu} />
          </div>
        </>
      ) : (
        <div className="Guest-sidebar">
          <Navigation />
        </div>
      )}

      <div className="Guest-main">
        <div className="Guest-header"></div>
        <div className="Guest-body">{children}</div>
      </div>
    </div>
  );
};

export default Guest;
