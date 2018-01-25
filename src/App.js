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
        active: false
    };
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
      <Body className="cards">
        {this.state.friends.map(friend => 
        <FriendCard
          pickCard={this.pickCard}
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
