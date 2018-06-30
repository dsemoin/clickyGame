import React, { Component } from 'react';
// import './App.css';
import Button from './Button';
import matches from "../matches.json";

class Clickygame extends Component {
  // state is an object that can be changed.(see matches/json)
  state = {
    matches, 
    clicked:[],
    score: 0
  }
  // this is to update the score
updateScore = () => {
  const newScore = this.state.score + 1;
  this.setState({
    score : newScore
  })
  this.shuffler(this.state.matches);
}
resetGame = () => {
  this.setState({
    clicked: [],
    score:0
  })
  this.shuffler(this.state.matches);
}
// this is to shuffle the images/clickers
shuffler = (array) => {
  for (let i = array.length-1; i>0; i--){
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
  }
  this.setState({
    matches: array
  })
}
whenClicked = id => {
  // -1 = not clicked or not found in array
  if (this.state.clicked.indexOf(id) === -1){
    // this add the clicked image to the array.
    console.log("clicked");
      this.updateScore();
      this.setState({clicked: this.state.clicked.concat(id)
      });
  }
  else {
    // reset the game.
   this.resetGame();
  }

}
  createButtons = matches => {
    // map affects all the objects in the match.json
    return matches.map(match => {
      return (
      <Button
           id={match.id}
           key={match.id}
           image={match.image}
           whenClicked = {this.whenClicked} 
          />
      )
    })
  }
  render() {
    // let matches = this.state.matches
    return (
      <div className="Clickygame">
        <div className="jumbotron">
       Clicky Game
       <div>
         Current Score: {this.state.score}
       </div>
       </div>
       {/* This is for styling the clickers */}
       <div className="gameboard">
        {/* this will show all the clickers */}
        {this.createButtons(this.state.matches)}
        </div>
      </div>
    );
  }
}

export default Clickygame;