class PlugBoard {
    private plugArr = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    
    alpha : string; 

    keyboardToPlug(alpha : string) : void {
        alpha = this.plugArr[parseInt(alpha) - 65];
        
    }

}