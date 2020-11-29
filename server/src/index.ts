import plugBoard from './Enigma/plugBoard';

let pb = new plugBoard();

let str = {
    text : "H"
}
let plug = {
    "z" : "a",
    "b" : "i"
}

pb.setPlugBoard(plug);
pb.keyboardToPlug(str);


console.log(str);