class PlugBoard {
    private plugArr = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    
    alpha : string; //키보드에서 받은 암호문

    keyboardToPlug(alpha : {text : string}) : void {
        console.log(alpha.text.charCodeAt(0));
        console.log(this.plugArr);
        alpha.text = this.plugArr[alpha.text.charCodeAt(0) - 65];
    }

}

export default PlugBoard;