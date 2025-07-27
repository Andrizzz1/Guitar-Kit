const buttons = document.querySelectorAll("button");


buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{

    
    const letter = button.innerHTML;
        playSound(letter);
   
    })
})

document.addEventListener("keydown", (event)=>{
    const keysbtn = event.key;
    if (keysbtn === "a" || keysbtn === "A"){
        playSound("Am");
    }else if (keysbtn === "e" || keysbtn === "E"){
        playSound("Em")
    }else{
        playSound(keysbtn.toUpperCase());
    }

   
})

function playSound(key){
        switch (key) {
        case "C":
            const C_chord = new Audio("./sounds/C_major.wav");
            C_chord.play()
            break;
        case "G":
            const G_chord = new Audio("./sounds/G_major.wav");
            G_chord.play()
            break;
        case "D":
            const D_chord = new Audio("./sounds/guitar-chord-d-minor_140bpm_D_minor-[AudioTrimmer.com].wav");
            D_chord.play()
            break;
        case "Em":
            const Em_chord = new Audio("./sounds/E Minor Chord On Guitar _ Diagram & Sound-[AudioTrimmer.com].mp3");
            Em_chord.play();
            break;
        case "Am":
            const Am_chord = new Audio("./sounds/guitar-chord-a-minor_140bpm_A_minor-[AudioTrimmer.com].wav");
            Am_chord.play()
            break;
        case "F":
            const F_chord = new Audio("./sounds/guitar-chord-f-major_F_major-[AudioTrimmer.com].wav");
            F_chord.play()
            break;
        default:
            break;
    }
}
