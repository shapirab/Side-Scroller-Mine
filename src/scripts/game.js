import Player from './models/player.js';
import Enemy from './models/enemy.js';
import Background from './utils/background.js';
import InputHandler from './utils/inputHandler.js';

export default class Game{
    constructor(gameWidth, gameHeight){
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.player = new Player(gameWidth, gameHeight, this);
        //this.enemy = new Enemy(gameWidth, gameHeight);
        this.background = new Background(gameWidth, gameHeight);
        this.input = new InputHandler();
        this.enemies = [];
        this.enemyInterval = 1000;//This is the max time interval between enemies
        this.enemyTimer = 0;//This times the time passed between enemies
        this.hit = false;
        this.score = 0;
    }

    handleEnemies(deltaTime){
        let randomInterval = Math.random() * 1000 + 500;
        if(this.enemyTimer > this.enemyInterval + randomInterval){
            this.enemies.push(new Enemy(this.gameWidth, this.gameHeight));
            this.enemyTimer = 0;
        }
        else{
            this.enemyTimer += deltaTime;
        }
    }

    handleHits(){
        this.enemies.forEach(enemy => {
            let distanceX = (enemy.position.x + enemy.width / 2) - 
                            (this.player.x + enemy.width / 2);

            let distanceY = (enemy.position.y + enemy.height / 2) - 
                            (this.player.y + enemy.height / 2);

            let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

            if(distance < this.player.width / 2 + enemy.width / 2){
                this.hit = true;
            }
        });
    }

    handleScore(){
        this.enemies.forEach(enemy => {
            if(enemy.position.x == 0){
                this.score++;
            }
        });
    }

    displayScoreText(ctx){
        let scoreText = 'Score: ' + this.score;
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = "#fff";
        ctx.fillText(scoreText, 100, 150);
    }

    update(deltaTime){
        this.handleEnemies(deltaTime);
        this.player.update(deltaTime, this.input);
        this.background.update();
        this.enemies.forEach((enemy, index) => {
            enemy.update(deltaTime);
            if(enemy.markedForDeletion){
                this.enemies.splice(index, 1);
            };                   
        });
        this.handleHits();
        this.handleScore();
    }

    draw(ctx){
        this.background.draw(ctx);
        this.player.draw(ctx);
        this.enemies.forEach(enemy => enemy.draw(ctx));
        this.displayScoreText(ctx);
    }
}