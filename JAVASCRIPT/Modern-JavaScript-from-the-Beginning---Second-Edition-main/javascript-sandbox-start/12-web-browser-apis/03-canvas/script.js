const canvas = document.getElementById('my-canvas');
const ctx = canvas.getContext('2d');

// Draw Rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);

// Draw circle
ctx.arc(300, 300, 100, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();

// Draw Lines
ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.lineWidth = 5;
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();

// Draw Text
ctx.font = '30px Arial';
ctx.fillStyle = 'blue';
ctx.lineWidth = 1;
ctx.fillText('Hello World', 300, 100, 300);
ctx.strokeText('Hello World', 300, 500, 400);
