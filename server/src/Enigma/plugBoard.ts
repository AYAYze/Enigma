class PlugBoard {
    private plugArr = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    
    alpha : string; //키보드에서 받은 암호문

    keyboardToPlug(alpha : {text : string}) : void {
        alpha.text = this.plugArr[alpha.text.charCodeAt(0) - 65];
        console.log(`plug board : ${alpha.text}`)
    }
    setPlugBoard(obj : {[key:string]:string}) : void {
        let length = Object.keys(obj).length;

        for(let i = 0; i < length; i++){
            let key : string = Object.keys(obj)[i];
            let a : string = key;
            let b : string = obj[key];
            let temp : string = a;
            this.plugArr[65 - a.charCodeAt(0)] = this.plugArr[65 - b.charCodeAt(0)];
            this.plugArr[65 - b.charCodeAt(0)] = temp;
        }
    }

}

export default PlugBoard;