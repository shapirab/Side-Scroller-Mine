import Game from "./game.js";

window.addEventListener('load', function(){
    const canvas = document.getElementById('main-canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = this.window.innerHeight;

    let game = new Game(canvas.width, canvas.height);
   
    let lastTime = 0;
    function animate(timeStamp){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        game.update(deltaTime);
        game.draw(ctx);
        requestAnimationFrame(animate);
    }

    animate(0);
});
