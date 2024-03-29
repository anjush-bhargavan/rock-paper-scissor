let result='';
          computerMove='';
          playerMove='';
          score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
          };

          updateScore();

      function playGame(playerMove){
        pickComputerMove();
        if(playerMove==='rock'){
          if(computerMove==='rock'){
            result='tie';
          }else if(computerMove==='paper'){
            result='You lose';
          }else if (computerMove==='scissors'){
            result='You win';
          }
        } else if(playerMove==='paper'){
            if(computerMove==='rock'){
              result='You win';
            }else if(computerMove==='paper'){
              result='Tie';
            }else if (computerMove==='scissors'){
              result='You lose';
            }
        } else if(playerMove=='scissors'){
          if(computerMove==='rock'){
            result='You lose';
          }else if(computerMove==='paper'){
            result='You win';
          }else if (computerMove==='scissors'){
            result='Tie';
          }
        }

        if(result==='You win'){
          score.wins += 1;
        } else if (result === 'You lose'){
          score.losses += 1;
        }else if(result==='Tie'){
          score.ties += 1; 
        }

        localStorage.setItem('score',JSON.stringify(score));

        updateScore();

        document.querySelector('.js-moves').innerHTML= `You <img style="height:100px" src="images/${playerMove}-emoji.png"> - <img style="height:100px" src="images/${computerMove}-emoji.png"> Computer`;

        document.querySelector('.js-result').innerHTML = `${result}`;
      }

      function updateScore(){
        document.querySelector('.js-score').  innerHTML = 
        ` Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;
      }

      function pickComputerMove(){
        const randomNumber = Math.random();
        if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
        } else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
        } else if(randomNumber >= 2/3 && randomNumber < 1){
        computerMove= 'scissors';
        }
      }