const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.rect(50, 50, 100, 100);
ctx.arc(200, 200, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath(); //색을 칠하고 싶으면 beginPath를 만들어라. (레이어개념)
ctx.fillStyle = "blue";
ctx.arc(180, 190, 15, Math.PI, 2 * Math.PI);
ctx.arc(220, 190, 15, 0, 2 * Math.PI);
ctx.fill();
