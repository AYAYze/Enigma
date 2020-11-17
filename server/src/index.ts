import plugBoard from './Enigma/plugBoard';

let pb = new plugBoard();

let str = {
    text : "H"
}

pb.keyboardToPlug(str);

console.log(str);