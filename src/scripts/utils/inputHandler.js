export default class InputHandler{
    constructor(){
        this.inputs = [];
        window.addEventListener('keydown', (e) => {
            if(this.keysCondition(e) && this.inputs.indexOf(e.key) === -1){
                this.inputs.push(e.key);
            }
        });
        
        window.addEventListener('keyup', (e) => {
            if(this.keysCondition(e)){
                this.inputs.splice(this.inputs.indexOf(e.key), 1);
            }
        });
    }

    keysCondition(e){
        return e.key === 'ArrowUp' ||
                e.key === 'ArrowDown' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight'
    }
}