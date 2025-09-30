// main.js
// Entry point for DogSoulDev Portfolio web app
// Loads mainController after DOM is ready

function startMatrixRain() {
	const canvas = document.querySelector('.matrix');
	if (!canvas) return;
	const ctx = canvas.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
	const fontSize = 18;
	const columns = Math.floor(canvas.width / fontSize);
	const drops = Array(columns).fill(1);

	function draw() {
		ctx.fillStyle = 'rgba(10,10,10,0.7)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);
		ctx.font = fontSize + 'px Fira Mono, Consolas, monospace';
		ctx.fillStyle = '#39ff14';
		for (let i = 0; i < drops.length; i++) {
			const text = letters[Math.floor(Math.random() * letters.length)];
			ctx.fillText(text, i * fontSize, drops[i] * fontSize);
			if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
				drops[i] = 0;
			}
			drops[i]++;
		}
	}
	setInterval(draw, 50);
	window.addEventListener('resize', () => {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
	});
}

function setupNeonBg() {
	// Already handled by CSS, but can animate or add more effects here if needed
}

function setupChibiAvatar() {
	const avatarDiv = document.getElementById('chibi-avatar');
	if (!avatarDiv) return;
	const mainImg = avatarDiv.getAttribute('data-main') || 'aresitosChibi.png';
	const easterImg = avatarDiv.getAttribute('data-easter') || 'optimusChibi.png';
	let showingEaster = false;
	avatarDiv.innerHTML = `<img src="img/${mainImg}" alt="Aresitos Chibi" id="chibi-img">`;
	const imgEl = document.getElementById('chibi-img');
	avatarDiv.addEventListener('mouseenter', () => {
		avatarDiv.classList.add('active');
	});
	avatarDiv.addEventListener('mouseleave', () => {
		avatarDiv.classList.remove('active');
	});
	avatarDiv.addEventListener('click', () => {
		avatarDiv.classList.toggle('active');
	});
	avatarDiv.addEventListener('dblclick', () => {
		showingEaster = !showingEaster;
		imgEl.src = showingEaster ? `img/${easterImg}` : `img/${mainImg}`;
		imgEl.alt = showingEaster ? 'Optimus Chibi' : 'Aresitos Chibi';
	});
}

document.addEventListener('DOMContentLoaded', function() {
	setupNeonBg();
	setupChibiAvatar();
	if (window.initApp) {
		window.initApp();
	}
});
