import Game from "./game.js";

window.addEventListener('load', function(){
    const canvas = document.getElementById('main-canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 700;

    let game = new Game(canvas.width, canvas.height);
   
    let lastTime = 0;
    function animate(timeStamp){
        let deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate(0);
});
