function myChoice(urchoice){
    console.log(urchoice);
    const result= document.getElementById('result')
    
    const choice= ['Stone','Scissor','Paper'];
    const cmpchoice = choice[Math.floor(Math.random()*3)]
    console.log(cmpchoice)
  if(urchoice ===cmpchoice){
    result.textContent=('tie');
    result.style.backgroundColor = 'yellow'
  }else if((urchoice=='Stone' && cmpchoice=='Scissor')||
        (urchoice=='Paper' && cmpchoice=='Stone')||
        (urchoice=='Scissor' && cmpchoice=='paper'))

    {
     result.textContent=('you won'); 
     result.style.backgroundColor = 'lightgreen'
    }
    else{
        result.textContent=('computer win');
        result.style.backgroundColor = 'red'
    }
    
    
}