export default class Player{
    constructor(gameWidth, gameHeight, game){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.game = game;
        this.width = 200;
        this.height = 200;
        this.x = 100;
        this.y = this.gameHeight - this.height;
        this.frameX = 0;
        this.frameY = 0;
    }

    update(deltaTime){}

    draw(ctx){
        ctx.drawImage(player, this.frameX * this.width, this.frameY * this.height, 
                        this.width, this.height, this.x, this.y, this.width, this.height);
    }
}