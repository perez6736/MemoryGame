import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";

const App = () => (
  <Wrapper>
    <Title>Friends List</Title>
    <FriendCard
      name={friends[0].name}
      image={friends[0].image}
      isClicked={friends[0].isClicked}
    />
    <FriendCard
      name={friends[1].name}
      image={friends[1].image}
      isClicked={friends[1].isClicked}
    />
    <FriendCard
      name={friends[2].name}
      image={friends[2].image}
      isClicked={friends[2].isClicked}
    />
  </Wrapper>
);

export default App;
