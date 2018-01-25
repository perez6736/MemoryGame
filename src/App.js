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
