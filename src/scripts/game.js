import Player from './models/player.js';
import Enemy from './models/enemy.js';
import Background from './utils/background.js';
import InputHandler from './utils/inputHandler.js';

export default class Game{
    constructor(gameWidth, gameHeight){
        this.player = new Player(gameWidth, gameHeight, this);
        this.enemy = new Enemy(gameWidth, gameHeight);
        this.background = new Background(gameWidth, gameHeight);
        this.input = new InputHandler();
    }

    update(deltaTime){
        this.player.update(deltaTime, this.input);
        this.background.update();
    }

    draw(ctx){
        this.background.draw(ctx);
        this.player.draw(ctx);
        this.enemy.draw(ctx);
    }
}