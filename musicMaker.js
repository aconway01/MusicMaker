function songKey() {
    var major_minor = document.getElementById("majorMinor").value;
    var chrom_scale = ["C","C# or Db","D","D# or Eb","E","F","F# or Gb","G","G# or Ab","A","A# or Bb","B"];
    var start_key = document.getElementById("startKey").value;
    var key_index = chrom_scale.indexOf(start_key);
    document.getElementById("myStart").innerHTML = "Your song key is " + start_key + " " + major_minor;
    var end_key = [];
    var chords_in_key;
    if (major_minor == "Major") {
        var major_scale_steps = [0, 2, 4, 5, 7, 9, 11, 12];
        for (i = 0; i < major_scale_steps.length - 1; i++) {
            end_key.push(chrom_scale[(major_scale_steps[i]+key_index)%12]);
        }
        chords_in_key = (end_key[0] + " Major" + "<br>" + end_key[1] + " Minor" + "<br>" + end_key[2] + " Minor" + "<br>" + end_key[3] + " Major" + "<br>" + end_key[4] + " Major" + "<br>" + end_key[5] + " Minor" + "<br>" + end_key[6] + " Diminished");
    }
    else if (major_minor == "Minor") {
        var minor_scale_steps = [0, 2, 3, 5, 7, 8, 10, 12];
        for (i = 0; i < minor_scale_steps.length - 1; i++) {
            end_key.push(chrom_scale[(minor_scale_steps[i]+key_index)%12]);
        }
        chords_in_key = (end_key[0] + " Minor" + "<br>" + end_key[1] + " Diminished" + "<br>" + end_key[2] + " Major" + "<br>" + end_key[3] + " Minor" + "<br>" + end_key[4] + " Minor" + "<br>" + end_key[5] + " Major" + "<br>" + end_key[6] + " Major");
        document.getElementById("chords").innerHTML = "The chords in this key are: " + "<br>" + chords_in_key;
    }
    document.getElementById("text_before_scale").innerHTML = "The notes in the " + start_key + " " + major_minor + " scale are: ";
    var scale = "";
    for (i = 0; i < end_key.length; i++) {
        if (i != end_key.length - 1) {
            scale += end_key[i] + ", ";
        }
        else {
            scale += end_key[i];
        }
    }
    document.getElementById("Scale").innerHTML = scale;
    document.getElementById("chords").innerHTML = "The chords in this key are: " + "<br>" + chords_in_key;
}

function chordConstructor() {
    var chordType = document.getElementById("chordType").value;
    var chrom_scale = ["C","C# or Db","D","D# or Eb","E","F","F# or Gb","G","G# or Ab","A","A# or Bb","B"];
    var start_key = document.getElementById("startKey").value;
    var key_index = chrom_scale.indexOf(start_key);
    var end_key = [];
    var notes_in_chord;
    if (chordType == "Major") {
        var major_scale_steps = [0, 2, 4, 5, 7, 9, 11, 12];
        for (i = 0; i < major_scale_steps.length - 1; i++) {
            end_key.push(chrom_scale[(major_scale_steps[i]+key_index)%12]);
        }
        notes_in_chord = (end_key[0] + ", " + end_key[2] + ", "  + end_key[4]);
    }
    
    else if (chordType == "Minor") {
        var minor_scale_steps = [0, 2, 3, 5, 7, 8, 10, 12];
        for (i = 0; i < minor_scale_steps.length - 1; i++) {
            end_key.push(chrom_scale[(minor_scale_steps[i]+key_index)%12]);
        }
        notes_in_chord = (end_key[0] + ", " + end_key[2] + ", " + end_key[4]);
    }
    else if (chordType == "Diminished") {
        notes_in_chord = (chrom_scale[key_index%12] + ", " + chrom_scale[(key_index + 3)%12] + ", "  + chrom_scale[(key_index + 6)%12]);
    }
    document.getElementById("notes").innerHTML = "The notes in this chord are: " + "<br>" + notes_in_chord;
}

var click;
function metronome() {
    var times = document.getElementById("times").value;
    document.getElementById("start").style.display = "none";
    var bpm = (60/times) * 1000;
    click = setInterval(function() {counter() },bpm);
}


var count = 0;
function counter() {
    if (count > 3) {
        count = 0;
    }
    if (count%2 == 1) {
        document.getElementById("contain").style.background = "#000";
    }
    else if (count%2 == 0) {
        document.getElementById("contain").style.background = "#0000ff";
    }
    count += 1;
    document.getElementById("snap").play();
}

function stopMetronome() {
    clearInterval(click);
    document.getElementById("start").style.display = "initial";
    document.getElementById("contain").style.background = "#0000ff";
}
