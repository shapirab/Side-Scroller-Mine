export default class Enemy{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 160;
        this.height = 119;
        this.position = {
            x: this.gameWidth -50,
            y: this.gameHeight - this.width
        }

        this.frameX = 0;
        this.maxFrames = 5;
    }

    update(){}

    draw(ctx){
        ctx.drawImage(enemy, this.frameX * this.width,
            0, this.width, this.height, this.position.x, 
            this.position.y, this.width, this.height);
    }

}