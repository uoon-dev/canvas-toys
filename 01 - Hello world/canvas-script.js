// Definitions
const canvas = document.querySelector('#hello-world-canvas');
const context = canvas.getContext('2d');

// Blue rectangle
context.fillStyle = 'blue';
context.fillRect(10, 40, 30, 70);

// Yellow rectangle
context.fillStyle = 'yellow';
context.fillRect(50, 30, 60, 30);