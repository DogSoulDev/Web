// particleView.js// particleView.js// particleView.js// particleView.js

// View rendering for animated particles/circuit background

// View rendering for animated particles/circuit background

export function renderParticles() {

  let canvas = document.getElementById('particle-bg');// View rendering for animated particles/circuit background// View rendering for animated particles/circuit background

  if (!canvas) {

    canvas = document.createElement('canvas');export function renderParticles() {

    canvas.id = 'particle-bg';

    canvas.style.position = 'fixed';  let canvas = document.getElementById('particle-bg');

    canvas.style.top = '0';

    canvas.style.left = '0';  if (!canvas) {

    canvas.style.width = '100vw';

    canvas.style.height = '100vh';    canvas = document.createElement('canvas');export function renderParticles() {export function renderParticles() {

    canvas.style.zIndex = '-1';

    document.body.appendChild(canvas);    canvas.id = 'particle-bg';

  }

  const ctx = canvas.getContext('2d');    canvas.style.position = 'fixed';  let canvas = document.getElementById('particle-bg');  let canvas = document.getElementById('particle-bg');

  canvas.width = window.innerWidth;

  canvas.height = window.innerHeight;    canvas.style.top = '0';

  const particles = Array.from({length: 60}, () => ({

    x: Math.random() * canvas.width,    canvas.style.left = '0';  if (!canvas) {  if (!canvas) {

    y: Math.random() * canvas.height,

    r: Math.random() * 2 + 1,    canvas.style.width = '100vw';

    dx: (Math.random() - 0.5) * 0.7,

    dy: (Math.random() - 0.5) * 0.7    canvas.style.height = '100vh';    canvas = document.createElement('canvas');    canvas = document.createElement('canvas');

  }));

  function draw() {    canvas.style.zIndex = '-1';

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#39ff14';    document.body.appendChild(canvas);    canvas.id = 'particle-bg';    canvas.id = 'particle-bg';

    ctx.globalAlpha = 0.5;

    for (let i = 0; i < particles.length; i++) {  }

      const p = particles[i];

      ctx.beginPath();  const ctx = canvas.getContext('2d');    canvas.style.position = 'fixed';    canvas.style.position = 'fixed';

      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

      ctx.fillStyle = '#39ff14';  canvas.width = window.innerWidth;

      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {  canvas.height = window.innerHeight;    canvas.style.top = '0';    canvas.style.top = '0';

        const p2 = particles[j];

        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);  const particles = Array.from({length: 60}, () => ({

        if (dist < 120) {

          ctx.beginPath();    x: Math.random() * canvas.width,    canvas.style.left = '0';    canvas.style.left = '0';

          ctx.moveTo(p.x, p.y);

          ctx.lineTo(p2.x, p2.y);    y: Math.random() * canvas.height,

          ctx.stroke();

        }    r: Math.random() * 2 + 1,    canvas.style.width = '100vw';    canvas.style.width = '100vw';

      }

      p.x += p.dx;    dx: (Math.random() - 0.5) * 0.7,

      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;    dy: (Math.random() - 0.5) * 0.7    canvas.style.height = '100vh';    canvas.style.height = '100vh';

      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    }  }));

    requestAnimationFrame(draw);

  }  function draw() {    canvas.style.zIndex = '-1';    canvas.style.zIndex = '-1';

  draw();

  window.addEventListener('resize', () => {    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;    ctx.strokeStyle = '#39ff14';    document.body.appendChild(canvas);    document.body.appendChild(canvas);

  });

}    ctx.globalAlpha = 0.5;


    for (let i = 0; i < particles.length; i++) {  }  }

      const p = particles[i];

      ctx.beginPath();  const ctx = canvas.getContext('2d');  const ctx = canvas.getContext('2d');

      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

      ctx.fillStyle = '#39ff14';  canvas.width = window.innerWidth;  canvas.width = window.innerWidth;

      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {  canvas.height = window.innerHeight;  canvas.height = window.innerHeight;

        const p2 = particles[j];

        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);  const particles = Array.from({length: 60}, () => ({  const particles = Array.from({length: 60}, () => ({

        if (dist < 120) {

          ctx.beginPath();    x: Math.random() * canvas.width,    x: Math.random() * canvas.width,

          ctx.moveTo(p.x, p.y);

          ctx.lineTo(p2.x, p2.y);    y: Math.random() * canvas.height,    y: Math.random() * canvas.height,

          ctx.stroke();

        }    r: Math.random() * 2 + 1,    r: Math.random() * 2 + 1,

      }

      p.x += p.dx;    dx: (Math.random() - 0.5) * 0.7,    dx: (Math.random() - 0.5) * 0.7,

      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;    dy: (Math.random() - 0.5) * 0.7    dy: (Math.random() - 0.5) * 0.7

      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    }  }));  }));

    requestAnimationFrame(draw);

  }  function draw() {  function draw() {

  draw();

  window.addEventListener('resize', () => {    ctx.clearRect(0, 0, canvas.width, canvas.height);    ctx.clearRect(0, 0, canvas.width, canvas.height);

    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;    ctx.strokeStyle = '#39ff14';    ctx.strokeStyle = '#39ff14';

  });

}    ctx.globalAlpha = 0.5;    ctx.globalAlpha = 0.5;


    for (let i = 0; i < particles.length; i++) {    for (let i = 0; i < particles.length; i++) {

      const p = particles[i];      const p = particles[i];

      ctx.beginPath();      ctx.beginPath();

      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);

      ctx.fillStyle = '#39ff14';      ctx.fillStyle = '#39ff14';

      ctx.fill();      ctx.fill();

      for (let j = i + 1; j < particles.length; j++) {      for (let j = i + 1; j < particles.length; j++) {

        const p2 = particles[j];        const p2 = particles[j];

        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);        const dist = Math.hypot(p.x - p2.x, p.y - p2.y);

        if (dist < 120) {        if (dist < 120) {

          ctx.beginPath();          ctx.beginPath();

          ctx.moveTo(p.x, p.y);          ctx.moveTo(p.x, p.y);

          ctx.lineTo(p2.x, p2.y);          ctx.lineTo(p2.x, p2.y);

          ctx.stroke();          ctx.stroke();

        }        }

      }      }

      p.x += p.dx;      p.x += p.dx;

      p.y += p.dy;      p.y += p.dy;

      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;

      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    }    }

    requestAnimationFrame(draw);    requestAnimationFrame(draw);

  }  }

  draw();  draw();

  window.addEventListener('resize', () => {  window.addEventListener('resize', () => {

    canvas.width = window.innerWidth;    canvas.width = window.innerWidth;

    canvas.height = window.innerHeight;    canvas.height = window.innerHeight;

  });  });

}}

