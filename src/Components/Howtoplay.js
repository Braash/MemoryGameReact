import React from 'react'; // Import the React module from React.
import '../App.css'; // Import App stylesheet.

function Howtoplay(){ // How to play BRALE.
    return(
        <div id="rules">
            <h3 id="title"><b>How to play BRALE</b></h3>
            <hr/>
            <p>
            Firstly, the player has a certain amount of clicks(which results in the flipping of the selected card, the click triggers the flip event) to match all 8 cards.<br/>

            The player clicks on a card and this event will flip the card over. Be sure not to click on the surrounding cards to quickly, allow the card finsih flipping.<br/>

            The player then selects another card and turns it over. If the two cards are a match, then the matched cards will remain flipped.<br/>

            If the cards are not a match they are flipped back over.<br/>
            </p>
            <br/>
            <p>
            Winning the Game: Once the player has matched all the cards without exceeding the limited amount of clicks(20), the player wins the game.
            </p>
            <br/>
            <p>
            Losing the Game: If the player exceeds the limited amount of clicks without matching all the cards, the player loses the game.
            <br/>
            <br/>
            </p>
            <hr/>
            <h2><b>BRALE</b></h2>
        </div>  
    )
};

export default Howtoplay; // Export Howtoplay component.