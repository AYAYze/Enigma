class Rotor {
    private rotor : Array<Array<string>> = [
        Array.from("EKMFLGDQVZNTOWYHXUSPAIBRCJ"),
        Array.from("AJDKSIRUXBLHWTMCQGZNPYFVOE"),
        Array.from("BDFHJLCPRTXVZNYEIWGAKMUSQO"),
        Array.from("ESOVPZJAYQUIRHXLNFTGKDCMWB"),
        Array.from("VZBRGITYUPSDNHLXAWMJQOFECK"),
        Array.from("JPGVOUMFYQBENHZRDKASXLICTW"),
        Array.from("NZJHGRCXMYSWBOUFAIVLPEKQDT"),
        Array.from("FKQHTLXOCBJSPDZRAMEWNIUYGV")
    ]

    private selectRotor : Array<Array<string>> = [
        Array.from("0"), 
        Array.from("0"), 
        Array.from("0")
    ]

    private rotateFlag : Array<string>;

    private notch : Array<number> = [
        18,6,23,11,1,14,14,14
    ]

    private encodeRotor : Array<Array<string>> = [
        Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
        Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
        Array.from("BCDEFGHIJKLMNOPQRSTUVWXYZA")
    ]

    selectRotate(rotorIn : Array<number>) : void {
        for(let i = 0; i < 3; i++){
            this.selectRotor[i] = this.rotor[rotorIn[i] - 1];
        }
    }
    selectRotateFlag(th : number, rotorIn : Array<number>) : void {
        let n = th;
        for(let i = 0; i < 3; i++){
            while(n - 1) {
                this.reverseRotate(this.selectRotor[i])
                this.rotate(this.encodeRotor[i])
                n--;
            }
            this.rotateFlag[i] = this.selectRotor[i][this.notch[i] - 1];
        }
        
    }
    setFirstRoterPosition() : void {

    }
    plugToRotor(alpha : {text:string}) : void {
        
    }
    reflectorToRotor(alpha : {text:string}) : void {

    }
    rotate(rotor : Array<string>) : void{

    }
    reverseRotate(rotor : Array<string>) : void{

    }
    encodeWord(rotor : {0: string} , encodeRotor : {0: string}, alpha : string) {

    }
}