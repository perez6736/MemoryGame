import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import Body from "./components/Body";


class App extends Component{
  constructor(props) {
    super(props);
    // these are the variables we will use for the app. 
    this.state = {
        friends,
        score: 0,
        highScore: 0,
        clicked: false
    };
  } 

  // this method is a shuffle method from stackoverflow. 
  //
  // Shuffles array in place. ES6 version
  // @param {Array} a items An array containing the items.
  shuffle(friends) {
    for (let i = friends.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [friends[i], friends[j]] = [friends[j], friends[i]];
    }
    return friends;
  }


  //this will reset the isClicked property 
  resetClick(){
    const friends = this.state.friends.map(friend => friend.isClicked = false);
				this.setState({friends});
  }

  // psuedo code -- 
  // will have a method that sees when a card is clicked
  // if the card has a class of clicked then game is over and we reset score. 
  // if the card isnt clicked then we will give the user a score - check to see if the score is a new high score if it is change the new high score 
  // and shuffle the cards again using the shuffle method 
  //

  //when we mount we need to shuffle. 
  componentWillMount() {
    // this.renderStatus();
    this.shuffle(friends);
  }

  render(){
    return(
      <Wrapper>
      <Title>
        <div>
					<span>Score: </span>
					<span>High Score: </span>
				</div>
      </Title>
      <Body>
        {this.state.friends.map(friend => 
        <FriendCard
          key={friend.id}
          id={friend.id}
          name={friend.name}
          image={friend.image}/>)}
			</Body>
    </Wrapper>
    )
  }
} 

export default App;
