import React from 'react'; // Import the React module from React.
import '../App.css'; // Import App stylesheet.
import ReactCardFlip from 'react-card-flip'; // Import external Card component.
import image from './back.png'; // Import image for the backside.

// Card creates a card component that was imported from npm which has the flip animation built in. 
// Card has the state of isFlipped which is a boolean value. The value of isFlipped determines what side of the card is visible.
// handleClick is an onClick event that flips the card from back to front and calls the method this.props.onCardFlip which invokes flipCard in Memgame.js.
// componentDidMount is executed after the render method.
class Card extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this); // Bind handleclick to the Card class.
        this.state = {
            isFlipped: false
           }; 
    }
    
    handleClick() {
       this.setState(prevState => ({ isFlipped: !prevState.isFlipped })); // Flip the card over. Back to front or front to back.  
       this.props.onCardFlip(this.props.cardName, this.props.cardId); // this invokes flipCard(card, index) passed as props. 
    }
    
    render(){
        const flip = this.props.cardFound; // Store cardFound prop in flip.
        console.log("Render:" + flip);
        return(
            <div id="emcard">
                <ReactCardFlip isFlipped={flip} flipDirection="horizontal" cardZIndex={(this.props.cardId.toString())}>
            
                    <div className="back" id={this.props.cardId} name={this.props.cardName} onClick={this.handleClick}>
                        <img src={image}/> {/* Image imported. */}
                    </div>
                    
                    <div className="front">
                        <img src={this.props.cardName}/> {/* The image name imported inside the MemGame component. */}
                    </div>
            
                </ReactCardFlip>
            </div>
        );
    }
}

export default Card; // Export Card component.