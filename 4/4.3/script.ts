const canvas = document.getElementById('smiley')!! as HTMLCanvasElement;
const context = canvas.getContext("2d")!!;

// Kopf zeichnen
context.beginPath();
context.arc(100, 100, 100, 0, 360)
context.stroke();
// Augen zeichnen
context.beginPath();
context.arc(75, 75, 10, 0, 360);
context.stroke();

context.beginPath();
context.arc(75, 75, 1, 0, 360);
context.stroke();

context.beginPath();
context.arc(125, 75, 10, 0, 360);
context.stroke();

context.beginPath();
context.arc(125, 75, 1, 0, 360);
context.stroke();
// Mund zeichnen
context.beginPath();
context.arc(100, 75, 70, Math.PI - 1, 2 * Math.PI + 1, true);
context.closePath();
context.stroke();