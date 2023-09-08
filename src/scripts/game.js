import Player from '../scripts/models/player.js';

export default class Game{
    constructor(gameWidth, gameHeight){
        this.player = new Player(gameWidth, gameHeight, this);
    }

    update(deltaTime){}

    draw(ctx){
        this.player.draw(ctx);
    }
}