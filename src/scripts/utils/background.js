export default class Background{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 2400;
        this.height = 720;
        this.x = 0;
        this.y = 0;
        this.speedX = 7;
    }

    update(){
        this.x -= this.speedX;
        if(this.x < 0 - this.width){
            this.x = 0;
        }
    }

    draw(ctx){
        ctx.drawImage(background, this.x, this.y, this.width, this.height);
        ctx.drawImage(background, this.x + this.width - this.speedX, this.y, this.width, this.height);
    }
}