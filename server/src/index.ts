import plugBoard from './Enigma/plugBoard';
import reflector from './Enigma/reflector';
import rotor from './Enigma/rotor';

let rt = new rotor();
let pb = new plugBoard();
let refl = new reflector();



/*    입력단     */
//연결할 문자
let plug = {
    "a":"z"
}
//로터 선택 3개
let rotors : number[]= [1,1,1];
//로터의 링 세팅
let rotorRing : number[] = [1,1,1];
//로터의 초기위치 설정
let rotorInitial : number[] = [2,2,2];
//암호화할 문자
let alpha = {
    text : "A"
}

pb.setPlugBoard(plug);
rt.selectRotate(rotors);
rt.selectRotateFlag(rotorRing);
rt.setFirstRoterPosition(rotorInitial);

pb.keyboardToPlug(alpha);
rt.plugToRotor(alpha);
refl.rotorToUkwb(alpha);
rt.reflectorToRotor(alpha);
pb.keyboardToPlug(alpha);


console.log(alpha);
