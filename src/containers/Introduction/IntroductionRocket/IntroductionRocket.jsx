import React, { useEffect } from 'react';

import ImageRocketVector from '@/assets/images/image-rocket-vector.png';

import './IntroductionRocket.scss';

const IntroductionRocket = () => {
  const init = () => {
    var c = document.getElementById('fire'),
      ctx = c.getContext('2d'),
      cw = (c.width = 300),
      ch = (c.height = 300),
      parts = [],
      partCount = 200,
      partsFull = false,
      hueRange = 50,
      globalTick = 0,
      rand = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };

    var Part = function () {
      this.reset();
    };

    Part.prototype.reset = function () {
      this.startRadius = rand(1, 25);
      this.radius = this.startRadius;
      this.x = cw / 2 + (rand(0, 6) - 3);
      this.y = 250;
      this.vx = 0;
      this.vy = 0;
      this.hue = 210;
      this.saturation = rand(50, 100);
      this.lightness = rand(20, 70);
      this.startAlpha = rand(1, 10) / 100;
      this.alpha = this.startAlpha;
      this.decayRate = 0.1;
      this.startLife = 7;
      this.life = this.startLife;
      this.lineWidth = rand(1, 3);
    };

    Part.prototype.update = function () {
      this.vx += (rand(0, 200) - 100) / 1500;
      this.vy -= this.life / 50;
      this.x += this.vx;
      this.y += this.vy;
      this.alpha = this.startAlpha * (this.life / this.startLife);
      this.radius = this.startRadius * (this.life / this.startLife);
      this.life -= this.decayRate;
      if (
        this.x > cw + this.radius ||
        this.x < -this.radius ||
        this.y > ch + this.radius ||
        this.y < -this.radius ||
        this.life <= this.decayRate
      ) {
        this.reset();
      }
    };

    Part.prototype.render = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = ctx.strokeStyle =
        'hsla(' + this.hue + ', ' + this.saturation + '%, ' + this.lightness + '%, ' + this.alpha + ')';
      ctx.lineWidth = this.lineWidth;
      ctx.fill();
      ctx.stroke();
    };

    var createParts = function () {
      if (!partsFull) {
        if (parts.length > partCount) {
          partsFull = true;
        } else {
          parts.push(new Part());
        }
      }
    };

    var updateParts = function () {
      var i = parts.length;
      while (i--) {
        parts[i].update();
      }
    };

    var renderParts = function () {
      var i = parts.length;
      while (i--) {
        parts[i].render();
      }
    };

    var clear = function () {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'hsla(0, 0%, 0%, .3)';
      ctx.fillRect(0, 0, cw, ch);
      ctx.globalCompositeOperation = 'lighter';
    };

    var loop = function () {
      window.requestAnimFrame(loop, c);
      clear();
      createParts();
      updateParts();
      renderParts();
      globalTick++;
    };

    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (a) {
          window.setTimeout(a, 1e3 / 60);
        }
      );
    })();

    loop();

    //galaxy

    particlesJS('stars', {
      particles: {
        number: { value: 200, density: { enable: true, value_area: 800 } },
        color: { value: '#8FDDEF' },
        shape: {
          type: 'circle',
          stroke: { width: 0, color: '#000000' },
          polygon: { nb_sides: 5 },
          image: { src: '', width: 100, height: 100 },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: false, speed: 50, size_min: 0.1, sync: false },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 15,
          direction: 'right',
          random: true,
          straight: true,
          out_mode: 'out',
          bounce: false,
          attract: { enable: false, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: 'window',
        events: {
          onhover: { enable: false, mode: 'repulse' },
          onclick: { enable: false, mode: 'push' },
          resize: true,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: true,
    });
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="IntroductionRocket">
      <div class="center">
        <div class="fix-rocket" style={{ position: 'relative' }}>
          <canvas id="fire" style={{ position: 'absolute', zIndex: 1 }}></canvas>
          <img src={ImageRocketVector} alt="" id="rocket" class="plane" style={{ position: 'absolute', zIndex: 2 }} />
        </div>
        <div id="stars"></div>
      </div>
    </div>
  );
};

export default IntroductionRocket;
