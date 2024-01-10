let yourscore = 0;
let opposcore = 0;

let maxscore = 5;

let evt = document.querySelectorAll('.choice');
function myChoice(urchoice) {
    console.log(urchoice);
    const result = document.getElementById('result')

    const choice = ['Stone', 'Scissor', 'Paper'];
    const cmpchoice = choice[Math.floor(Math.random() * 3)]
    console.log(cmpchoice)
    if (urchoice === cmpchoice) {
        result.textContent = ('tie');

        result.style.backgroundColor = 'yellow'
    } else if ((urchoice == 'Stone' && cmpchoice == 'Scissor') ||
        (urchoice == 'Paper' && cmpchoice == 'Stone') ||
        (urchoice == 'Scissor' && cmpchoice == 'paper')) {
        yourscore++;
    }
    else {
        opposcore++;
    }

    if (yourscore === maxscore) {
        result.textContent = 'you won';
        result.style.backgroundColor = 'lightgreen';
        for(let i of evt){
            i.style.pointerEvents = 'none'
        }
    } else if (opposcore === maxscore) {
        result.textContent = 'computer win';
        result.style.backgroundColor = 'red';

        for(let i of evt){
            i.style.pointerEvents = 'none'
        }
    }
    document.getElementById("your-score").innerText = yourscore;
    document.getElementById("opponent-score").innerText = opposcore;

} 
function reset(){
 yourscore = 0;
 opposcore = 0;
 result.textContent = '';
        result.style.backgroundColor = 'white';
        document.getElementById("your-score").innerText = 0;
        document.getElementById("opponent-score").innerText = 0;
        for(let i of evt){
            i.style.pointerEvents = 'all'
        }
}