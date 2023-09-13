import Player from '../scripts/models/player.js';
import Background from './utils/background.js';

export default class Game{
    constructor(gameWidth, gameHeight){
        this.player = new Player(gameWidth, gameHeight, this);
        this.background = new Background(gameWidth, gameHeight);
    }

    update(deltaTime){
        this.player.update(deltaTime);
        this.background.update();
    }

    draw(ctx){
        this.background.draw(ctx);
        this.player.draw(ctx);
    }
}