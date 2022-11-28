
function decodeMorse(morseCode){
    outPut = "";

    for (var i = 0; i < morseCode.split(" ").length; i++) {  
        outPut += MORSE_CODE[morseCode.split(" ")[i]];

    }
    return outPut;
}


console.log(decodeMorse('.... . -.--   .--- ..- -.. .') === 'HEY JUDE');
