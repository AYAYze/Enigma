class Reflector {
    private ukwb = Array.from("YRUHQSLDPXNGOKMIEBFZCWVJAT");

    alpha : { text: string}; //플러그보드와 로터를 한번거친 암호
    
    rotorToUkwb(alpha : { text : string}) : void {
        alpha.text = this.ukwb[alpha.text.charCodeAt(0) - 65];
        console.log(`Reflector : ${alpha.text}`)
    }
}