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

    update(deltaTime){
        this.handleEnemies(deltaTime);
        this.player.update(deltaTime, this.input);
        this.background.update();
        this.enemies.forEach(enemy => enemy.update(deltaTime));
    }

    draw(ctx){
        this.background.draw(ctx);
        this.player.draw(ctx);
        this.enemies.forEach(enemy => enemy.draw(ctx));
    }
}