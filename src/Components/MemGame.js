import React from 'react'; // Import the React module from React.
import '../App.css'; // Import App stylesheet.
import Card from './Card.js';
import emblem01 from './01.png';
import emblem02 from './02.png';
import emblem03 from './03.png';
import emblem04 from './04.png';
import GameRes from './gameRes.js';

// Array of objects: each object within the array represents a card.
const emblems = [emblem01,emblem01,emblem02,emblem02,emblem03,emblem03,emblem04,emblem04];

// MemGame creates 8 cards and has three state objects: ActiveCards, MatchedCards and numberOfClicks.
// ActiveCards is updated when a card is flipped.
// MatchedCards is updated when a two cards match.
// numberOfClicks is updated once the user clicks on a card.
/* The flipCard method takes in two parameters (card, index) taken from the emblems array
*/

class MemGame extends React.Component {
    constructor(props) {
      super(props);
      this.restartGame = this.restartGame.bind(this);
      this.flipCard = this.flipCard.bind(this);
      this.flipBack = this.flipBack.bind(this);
      this.checkGameRes = this.checkGameRes.bind(this);
      
      // Memgame state.
      this.state = {ActiveCards: "", // Cards that have been flipped before being matched or not matched.
                    ActiveIndex: 0, // Index of cards that have been flipped before being matched or not matched.
                    MatchedCards: [], // An Array of matched cards.
                    numberOfClicks: 0, // Number clicks by the user.
                    gameRes: "",
                    gameOver: false,
                    TotalNumberOC: 0
                   };
    }
    
    // This particular method will refresh the window and restart the game.
    restartGame(){
        window.location.reload();
    }

    flipCard(card, index){ // The current card and its index set as parameters.
        let totalClick = this.state.TotalNumberOC +1;
        let clicks = this.state.numberOfClicks; // Store numberOfClicks state in clicks.
        if(clicks === 0){ // If clicks = zero then execute code below:
          this.setState(
              {numberOfClicks: 1, ActiveCards: card, ActiveIndex: index, TotalNumberOC: totalClick} // State is updated after the first click.
            )
        }else if(clicks === 1){
            let active = this.state.ActiveCards; // Store ActiveCards state in active.
            if(active === card){ // If ActiveCards = current card then execute code below:
                let arr = this.state.MatchedCards; // Store matched cards in variable arr.
                arr.push(card); // card is pushed into MatchedCards. 
                arr.push(active); // ActiveCards(active) is pushed into MatchedCards.
                console.log("Matched array: " + arr)
                // State is updated after the second click with a card match.
                this.setState({MatchedCards: arr, ActiveCards: "", numberOfClicks: 0, ActiveIndex: null, TotalNumberOC: totalClick}) 
                console.log(arr.index)
                this.checkGameRes();
            }else{ // State is updated after the second click with a no card match.
                //setTimeout(() => this.setState({ActiveCards: "", numberOfClicks: 0, ActiveIndex: null}), 1000);
                this.setState({numberOfClicks: 2, ActiveIndex: index, TotalNumberOC: totalClick}); // State is updated after the first click.
                this.checkGameRes();
            } 
        }
    }
    
    // This shuffles the array every time the render method is invoked.
    componentDidMount(){
      for (let i = emblems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = emblems[i];
        emblems[i] = emblems[j];  
        emblems[j] = temp;
    }
    }

    checkGameRes(){
      if(this.state.TotalNumberOC >= 20) { 
        // If the user number of clicks is greater then 15 this code will execute.
        this.setState({ gameRes: "You lose✖️", gameOver: true });
        // You lose! Revelant state is updated.
      }else if (this.state.MatchedCards.length === emblems.length) {
        // If the user has matched all the cards this code will execute.
        this.setState({ gameRes: "You win!", gameOver: true });
      }else{
        return null; // return the intentional absence of any object value.
      }
    }

    flipBack(){
      this.setState({ActiveCards: "", numberOfClicks: 0, ActiveIndex: null}); // 
    }

        render(){
            let found; // Declare found.
            let clicks = this.state.numberOfClicks; // Store numberOfClicks state in clicks.
            let active = this.state.ActiveCards; // Store ActiveCards state in active.
            let matched = this.state.MatchedCards; // Store MatchedCards state in matched.
            let actIdx = this.state.ActiveIndex; // Store ActiveIndex state in actIdx.
            if (clicks === 2 && active) {
              found = true; 
              setTimeout(() => this.flipBack(), 1500);
            }

            
              /*let div = document.getElementById("gameres");
              let gameRes = this.state.gameRes;
              if(gameRes === ""){
                div.style = hidden;
              };*/
        
        let cardItems = emblems.map((item, index) => { // This maps through the emblems array and passes item(card name) and index as parameters.
             // found passed down as probs = false.
            found = false; 
            console.log("Clicks: " + clicks);

            
      
            if(active === item) { // If ActiveCards(active) = item -> proceed with code below.
                if(clicks === 1 && actIdx === index){ // If clicks = 1 and ActiveIndex = index -> then proceed.
                  found = true; // found = true;
                  console.log(actIdx); 
                  console.log(index);
                }
                else if(clicks === 2 && actIdx === index){ // If clicks = 1 and ActiveIndex = index -> then proceed.
                  found = true; // found = true;
                  console.log(actIdx); 
                  console.log(index);
                }   
            }else if(active !== item){ // If ActiveCards(active) is not = item -> proceed with code below.
                    if(clicks === 2 && actIdx === index){ // If clicks = 1 and ActiveIndex = index -> then proceed.
                    found = true; // found = true;
                  }
            }

            for (let i = 0; i < matched.length; i++) { // Loop through MatchedCards.
                if (matched[i] === item) { // If matched[i] = current item -> found = true.
                    console.log(matched[i]);
                    found = true;
                }
            }

            return(
                <div key={index}> {/* Card index a unique key. */}
                  <Card 
                  cardName = {item} // Image name.
                  cardId = {index} // Image index within emblems array.
                  onCardFlip = {this.flipCard} // flipCard method within this component.
                  cardFound = {found} // The boolean value of this prop determines if it should be flipped or not.
                  />
                </div>
          )})
          return(
            <div id="cards">
                <div id="cardItems">
                  {cardItems} {/* Renders cardItems. */}
                </div>
                <div>
                  {this.state.gameOver ? <GameRes gameRes={this.state.gameRes}/> : null}
                </div>
                <button id="btn" onClick={this.restartGame}><b>New Game</b></button> {/* Restart game button refreshes the window. */}
            </div>
      );
    }
  }

  export default MemGame; // MemGame component exported. 

/*
Constructor
Render
ComponentDidMount(only executed once)

If a method changes the state with a this.setState
Render

If a method changes the state directly, ie. no setState.
No render
*/