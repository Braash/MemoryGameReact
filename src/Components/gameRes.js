import React from 'react'; // Import the React module from React.
import '../App.css'; // Import App stylesheet.


  class GameRes extends React.Component {
    constructor(props) {
        super(props); 
    }

    render(){
        const result = this.props.gameRes;
         return(
            <div>
                <div id="gameres">
                        <h1><b>{result}</b></h1> {/* Game result. */}
                </div>
            </div>  
        );
    }
}
  
  
  export default GameRes; // Export Display component.