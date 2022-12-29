var canvas = document.createElement("canvas");
canvas.style.height = "100%";
canvas.style.width = "100%";
document.body.append(canvas);

document.body.style.background = "#1e1e1f";
document.body.style.margin = 0;

var screen = {
	width: window.innerWidth,
	height: window.innerHeight
};

console.log("screen", screen);

// var canvas = document.getElementById("canvas");
canvas.width = screen.width;
canvas.height = screen.height;
var context = canvas.getContext("2d");

var snowflakes = [];
var snowflakes_ground = [];

var w = 5;
var h = 5;
var speed = 1;

function Snow(x, y, w, h, speed, speedX, color) {
	this.w = w;
	this.h = h;
	this.x = x;
	this.y = y;
	this.speed = speed;
	this.speedX = speedX;
	this.color = color;
	this.checkCollision = true;
	this.draw = function () {
		context.beginPath();
		context.arc(
			this.x - this.w / 2,
			this.y - this.h / 2,
			this.w,
			0,
			2 * Math.PI,
			false
		);
		context.fillStyle = color;
		context.fill();
	};
	this.update = function () {
		if (this.checkCollision && !checkCollision(this.x, this.y)) {
			// if (this.y < screen.height) {
			this.y += this.speed;
			this.x += this.speedX;
		} else {
			this.checkCollision = false;
		}
		this.draw();
	};
}

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function checkCollision(x, y) {
	if (
		y < screen.height &&
		snowflakes_ground.findIndex(
			(snow) => snow.y === y + 5 && Math.floor(snow.x) === Math.floor(x)
		) === -1
	) {
		return false;
	}
	return true;
}

for (var i = 0; i < 30; i++) {
	var x = Math.floor(Math.random() * screen.width);
	var y = -h;
	var speedX = getRandomArbitrary(0, 1) / 2 - 0.5;
	// var y = Math.floor(Math.random() * screen.height);
	snowflakes.push(new Snow(x, y, w, h, speed, speedX, "#fff"));
}

requestAnimationFrame(animate);

var swap = false;
function animate(time) {
	// var fps = Math.floor(1000 / (time - lastFrame));
	lastFrame = time;
	requestAnimationFrame(animate);
	context.clearRect(0, 0, screen.width, screen.height);

	if (Math.floor(time / 1000) % 2 === 0) {
		if (!swap) {
			for (var i = 0; i < snowflakes.length; i++) {
				snowflakes[i].speedX *= -1;
			}
		}
		swap = true;
	} else {
		swap = false;
	}

	for (var i = 0; i < snowflakes.length; i++) {
		snowflakes[i].update();
		if (checkCollision(snowflakes[i].x, snowflakes[i].y)) {
			snowflakes_ground.push(snowflakes[i]);
			snowflakes.splice(i, 1);
		}
	}
	for (var i = 0; i < snowflakes_ground.length; i++) {
		snowflakes_ground[i].update();
	}
	var x = Math.floor(Math.random() * screen.width);
	var y = -h;
	var speedX = getRandomArbitrary(0, 1) / 2 - 0.5;
	snowflakes.push(new Snow(x, y, w, h, speed, speedX, "#fff"));
}

var snowman = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="auto" fill="none" viewBox="0 0 1372 1415">
  <circle cx="693" cy="1015" r="392" fill="#D9D9D9" stroke="#000" stroke-width="16"/>
  <path fill="#D9D9D9" stroke="#000" stroke-width="16" d="M935 493c0 133.653-108.347 242-242 242-133.653 0-242-108.347-242-242 0-133.653 108.347-242 242-242 133.653 0 242 108.347 242 242Z"/>
  <path fill="#D9D9D9" d="M1080 1015c0 213.73-173.266 387-387 387s-387-173.27-387-387c0-213.734 173.266-387 387-387s387 173.266 387 387Z"/>
  <circle cx="693" cy="866" r="30" fill="#000"/>
  <circle cx="765" cy="402" r="30" fill="#000"/>
  <circle cx="590" cy="402" r="30" fill="#000"/>
  <circle cx="605" cy="554" r="15" fill="#000"/>
  <circle cx="765" cy="554" r="15" fill="#000"/>
  <circle cx="711" cy="584" r="15" fill="#000"/>
  <circle cx="648" cy="584" r="15" fill="#000"/>
  <circle cx="693" cy="701" r="30" fill="#000"/>
  <path fill="#000" stroke="#000" stroke-linecap="round" stroke-width="5" d="m682.788 684.822.726.682.997-.004 23.5-.102.984-.004.717-.674c20.744-19.494 50.151-43.273 71.346-51.932 5.275-2.155 9.845-3.288 13.529-3.288 3.617 0 6.195 1.077 7.942 3.187 1.822 2.199 3.082 5.927 3.094 11.924.012 5.968-1.214 13.886-4.033 24.124l-.276 1.003.517.903c5.353 9.348 9.977 19.619 11.979 28.863 2.023 9.341 1.238 16.953-3.222 21.787-4.465 4.839-13.409 7.761-29.895 5.708-16.386-2.041-39.589-8.932-71.702-22.794l-.48-.207-.522.002-23.5.102-.511.002-.469.202c-32.113 13.863-55.316 20.753-71.702 22.794-16.486 2.053-25.43-.869-29.895-5.707-4.46-4.834-5.245-12.446-3.222-21.787 2.002-9.244 6.626-19.515 11.979-28.864l.517-.903-.276-1.003c-2.819-10.237-4.045-18.156-4.033-24.123.012-5.997 1.272-9.725 3.094-11.925 1.747-2.109 4.325-3.186 7.942-3.186 3.684 0 8.254 1.132 13.529 3.287 21.195 8.659 50.602 32.439 71.346 51.933Z"/>
  <circle cx="693" cy="1066" r="30" fill="#000"/>
  <circle cx="693" cy="966" r="30" fill="#000"/>
  <path stroke="#000" stroke-width="30" d="m436.869 860.69-326-146"/>
  <path fill="#000" d="M101.325 616.55c-2.458-7.912-10.864-12.332-18.775-9.875-7.912 2.458-12.332 10.864-9.875 18.775l28.65-8.9Zm-28.65 8.9 32 103 28.65-8.9-32-103-28.65 8.9Z"/>
  <path fill="#000" d="M32.322 659.855c-7.465-3.591-16.429-.451-20.02 7.014-3.591 7.466-.451 16.429 7.014 20.02l13.006-27.034Zm-13.006 27.034 97.194 46.76 13.006-27.034-97.194-46.76-13.006 27.034Z"/>
  <path fill="#000" d="M11.633 732.499c-7.936 2.379-12.44 10.741-10.06 18.676 2.378 7.935 10.74 12.439 18.675 10.06l-8.616-28.736Zm8.615 28.736 103.313-30.975-8.616-28.736-103.313 30.975 8.616 28.736Z"/>
  <path stroke="#000" stroke-width="30" d="M966.698 872.145 1264.2 674.446"/>
  <path fill="#000" d="M1352.28 718.773c8 2.146 16.22-2.602 18.37-10.603 2.15-8.002-2.6-16.228-10.6-18.373l-7.77 28.976Zm7.77-28.976-104.18-27.935-7.77 28.977 104.18 27.934 7.77-28.976Z"/>
  <path fill="#000" d="M1352.5 637.307c7.02-4.394 9.15-13.65 4.76-20.672-4.4-7.023-13.65-9.153-20.67-4.758l15.91 25.43Zm-15.91-25.43-91.43 57.216 15.91 25.431 91.43-57.217-15.91-25.43Z"/>
  <path fill="#000" d="M1302.12 581.029c2.23-7.98-2.44-16.253-10.42-18.478-7.98-2.225-16.25 2.44-18.47 10.42l28.89 8.058Zm-28.89-8.058-28.97 103.894 28.9 8.057 28.96-103.893-28.89-8.058Z"/>
  <path fill="#F38707" d="m492.804 490.207 203.431-63.855S715.856 449.448 718 467.5c2.281 19.205-13.445 47.664-13.445 47.664l-211.751-24.957Z"/>
  <ellipse cx="632.768" cy="282.151" fill="#000" rx="224" ry="70.295" transform="rotate(-17.13 632.768 282.151)"/>
  <path fill="#000" stroke="#000" d="M738 260.5c-59.6 46-163.166 61.833-207.5 64 0 0-13.366-90-110.5-199-17.366-16.5-18.889-40 0-55C430.197 62.402 480.104 26 543.5 11 607-.5 649 0 670.5 3s46 10 32 58.5C692 145 738 260.5 738 260.5Z"/>
  <path fill="#D9D9D9" d="M725.5 225c-40 69.2-151.333 77.167-202 72.5-2.8-15.2-9.167-29-12-34 50.667 4.667 164.5-5.3 204.5-74.5l9.5 36Z"/>
</svg>`;

var div = document.createElement("div");
div.style.position = "absolute";
div.style.bottom = 0;
div.style.left = "15rem";
div.style.width = "10rem";
div.innerHTML = snowman;
document.body.append(div);
