
            function getInput() {
return document.getElementById("answer").value;
}

var submitButton = document.getElementById("submit").addEventListener("click", mySubmit);

function mySubmit() {
var text;
var database = [
    {answer: "help", clue: "info, credits, run_[insert program name], experimental"},
    {answer: "info", clue: "made by: SkyKrye"},
    {answer: "credits", clue: "For totally legal reasons i have to tell you that the code was taken from megaboi, thanks a lot mega <3,\n StackOverflow, W3Schools, Discord,\n •https://stackoverflow.com/questions/38244336/add-a-user-variable-to-a-link-in-html, \n •https://stackoverflow.com/questions/12491297/input-field-disabled-until-radio-button-is-checked-html#12491511, \n •https://www.codingnepalweb.com/draggable-div-element-in-javascript/"},
    {answer: "run", clue: "unspecified program: run_[insert program name]"},
    {answer: "run_", clue: "unspecified program: run_[insert program name]"},
    {answer: "run_notes", clue: "notes"},
    {answer: "experimental", clue: "Andromeda theme UI: CLIos/CLIos-ThemeAndromeda.html, C|L):"},
    {answer: "altnum_report", clue: "notes    æ☺☻♥♠♣♦•8◘○◘◘•♦♣M╛╡ñ┴≡¡Hy┘ì╠╛<)┬┬XI◙♣♠♦◘○☺UEΘI$╚;-m♥6≡£fr]ƒ☺☻♠♣♦8X╝ƒ#ÄM£èKêÊ▄j▌w   w╫╫╫¡mP↓↓ ↓468Px╝☻☺♣♦◘○♠♥ \nds       "}

];
for(var i=0;i<database.length;i++){
    if(database[i].answer === getInput()){
        text = database[i].clue;
        console.log(text);
    }
}

if(!text) {
    text = "Syntax Error";
}

document.getElementById("demo").innerText = text;
}
