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
        this.maxFrames = 8;
        this.frameTimer = 0;
        this.framesPerSecond = 20;
        this.frameInterval = 1000/ this.framesPerSecond;
    }

    update(deltaTime){
        this.animateSprites(deltaTime);
    }

    draw(ctx){
        ctx.drawImage(player, this.frameX * this.width, this.frameY * this.height, 
                        this.width, this.height, this.x, this.y, this.width, this.height);
    }

    animateSprites(deltaTime){
        if(this.frameTimer > this.frameInterval){
            //reset timer
            this.frameTimer = 0;
            //animate one frame
            if(this.frameX >= this.maxFrames){
                this.frameX = 0;
            }
            else{
                this.frameX++;
            }
        }
        else{
            this.frameTimer += deltaTime;
        }
    }
}