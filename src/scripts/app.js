import Game from "./game.js";

window.addEventListener('load', function(){
    const canvas = document.getElementById('main-canvas');
    let ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = this.window.innerHeight;

    let game = new Game(canvas.width, canvas.height);

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Enter'){
            if(game.hit){
                console.log('restart event was called');
                game.restart();
                animate(0);
            }
        }
    });
   
    let lastTime = 0;
    function animate(timeStamp){
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        game.update(deltaTime);
        game.draw(ctx);
        if(!game.hit){
            requestAnimationFrame(animate);
        }       
    }

    animate(0);
});
