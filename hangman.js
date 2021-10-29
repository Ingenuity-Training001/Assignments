let modal = document.getElementById('modal');
 let close = document.getElementById('close');
 let rules = document.getElementById('rules');
 let words = ["grain", "wheat", "train", "plane", "car", "dog", "var", "let", "const", "group", "learn", "sweat", "orange", "host", "list", "group", "word", "role", "alien", "ufo", "space", "bread", "destroy", "humans"];
 let randomWord = Math.floor(Math.random() * words.length);
 let chosenWord = words[randomWord];
 let arrWord = chosenWord.split(", ");
 let rightWord = [];
 let wrongWord = [];
 let underScore = [];
 let guessAmount = 7;
 let domUnderScore = document.getElementsByClassName('underscore');
 let domRightGuess = document.getElementsByClassName('rightguess');
 let domWrongGuess = document.getElementsByClassName('wrongguess');



let base = document.getElementById('base');
let pic1 = document.getElementById('gallow1');
let pic2 = document.getElementById('gallow2');
let pic3 = document.getElementById('gallow3');
let pic4 = document.getElementById('gallow4');
let pic5 = document.getElementById('gallow5');
let pic6 = document.getElementById('gallow6');


 //create underscore based on length of words
 let generateUnderScore = () => 
    {
     for(let i = 0; i < chosenWord.length; i++){
         underScore.push("_");
        }
        return underScore;
    }
    
    generateUnderScore();
  


//-------------------------------------------------------------Main Game--------------------------------------------------------//
document.addEventListener('keypress', (event) => {
    
    
            let keyword = String.fromCharCode(event.keyCode);
            console.log("the keyword is: " + keyword);
        //if Users guess is right
                    if(chosenWord.indexOf(keyword) > -1)
                    {
                     
                            rightWord.push(keyword);
                       
                    }else
                                {
                                    wrongWord.push(keyword);
                                    guessAmount -= 1;
                                  
                                }
            //replace underscore with right or wrong letter
                                                    underScore[chosenWord.indexOf(keyword)] = keyword;
                                                    domUnderScore[0].innerHTML = underScore.join(' ');
                                                    domRightGuess[0].innerHTML = rightWord;
                                                    domWrongGuess[0].innerHTML = wrongWord;
                                                  console.log("keyword in replace un score: " + keyword);
                                                  console.log("rightword in replace un score: " + rightWord);
                                                  console.log("wrongword in replace un score: " + wrongWord);
                
                //check to see if user word matches guess
                let checkWin = () => 
                {
                    // value
                    if(underScore.value === chosenWord.value && rightWord.length === chosenWord.length)
                    {
                        setTimeout(function(){alert('you win')}, 100);
                        return;
                    }
                    if(guessAmount <= 0)
                    {
                        setTimeout(function(){alert('you lose')}, 500);
                    }
                }
               
                changePic();
                checkWin();
            });
            
            console.log(chosenWord);


            let changePic = () => 
            {
                // I would think about how you could DRY this up!
                    if(guessAmount === 5)
                    {
                        base.style.display = 'none';
                        pic1.style.display = 'block';

                    }
                    if(guessAmount === 4)
                    {
                        pic1.style.display = 'none';
                        pic2.style.display = 'block';

                    }
                    if(guessAmount === 3)
                    {
                        pic2.style.display = 'none';
                        pic3.style.display = 'block';

                    }
                    if(guessAmount === 2)
                    {
                        pic3.style.display = 'none';
                        pic4.style.display = 'block';

                    }
                    if(guessAmount === 1)
                    {
                        pic4.style.display = 'none';
                        pic5.style.display = 'block';

                    }
                    if(guessAmount === 0)
                    {
                        pic5.style.display = 'none';
                        pic6.style.display = 'block';
                        pic6.style.zIndex = 2;
                    }
                    
            }


                
rules.addEventListener('click', () => {modal.style.display = 'block'});
                
                
close.addEventListener('click', () => {modal.style.display = 'none'});
                   
                    
                    
                    
