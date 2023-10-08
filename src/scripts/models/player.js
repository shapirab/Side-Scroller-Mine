export default class Player{
    constructor(gameWidth, gameHeight, game){
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.game = game;
        this.width = 200;
        this.height = 200;
        this.x = 100;
        this.ground = this.gameHeight - this.height
        this.y = this.ground;
        this.frameX = 0;
        this.frameY = 0;
        this.maxFrames = 8;
        this.frameTimer = 0;
        this.framesPerSecond = 20;
        this.frameInterval = 1000/ this.framesPerSecond;
        this.speed = {
            x: 0,
            y: 0
        }  
        this.gravity = 1;
    }

    outOfBounds(){
        if(this.x > this.ground){
            this.x = this.ground;
        }
        if(this.x < 0 + this.width){
            this.x = 0 + this.width;
        }

        if(this.y > this.ground){
            this.y = this.ground;
        }
    }

    isOnGround(){
        return this.y === this.ground;
    }

    jump(input){
        if(input.inputs.indexOf('ArrowUp') > -1 &&
            this.isOnGround()){
                this.speed.y -= 32;
        }
        else if(input.inputs.indexOf('ArrowUp') === -1 &&
        !this.isOnGround()){
            this.speed.y += this.gravity;
        }           
    }

    update(deltaTime, input){
        this.animateSprites(deltaTime);
        this.jump(input);
        this.y += this.speed.y;

        this.outOfBounds();
        
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