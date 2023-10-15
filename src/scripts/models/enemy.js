export default class Enemy{
    constructor(gameWidth, gameHeight){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.width = 160;
        this.height = 119;
        this.position = {
            x: this.gameWidth,
            y: this.gameHeight - this.height
        }

        this.speedX = 8;

        this.frameX = 0;
        this.maxFrames = 5;
        this.frameTimer = 0;
        this.framesPerSecond = 20;
        this.frameInterval = 1000 / this.framesPerSecond;
        this.markedForDeletion = false;
    }

    animateSprites(deltaTime){
        if(this.frameTimer > this.frameInterval){
            if(this.frameX >= this.maxFrames){
                this.frameX = 0;
            }
            else{
                this.frameX++;
            }
            this.frameTimer = 0;
        }
        else{
            this.frameTimer += deltaTime;            
        }
    }

    update(deltaTime){
        this.animateSprites(deltaTime);
        if(this.position.x < 0 - this.width){
            this.markedForDeletion = true;
        }
        this.position.x -= this.speedX;
    }

    draw(ctx){
        ctx.drawImage(enemy, this.frameX * this.width,
            0, this.width, this.height, this.position.x, 
            this.position.y, this.width, this.height);
    }

}