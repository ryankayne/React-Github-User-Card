import React from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

const Section = styled.section`
  background-color: #282c34;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Card = styled.div`
  width: 30%;
  margin-bottom: 5%;
  color: white;
  text-shadow: 1px 1px 2px black;
  font-size: 1.5rem;
`;

const Card2 = styled.div`
  width: 30%;
  margin-bottom: 5%;
`;

const Profile = styled.img`
  width: 200px;
  height: 200px;
  border: solid black 1px;
  box-shadow: 5px 5px 5px black;
`;

const FollowContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: slategrey;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      friends: []
    };
  };

  componentDidMount(){
    axios.get('https://api.github.com/users/ryankayne')
    .then(response => {
      console.log(response)
      this.setState({ user: response.data });
    })
    .catch(error => {
      console.log(error)
    })
  
 
  axios.get('https://api.github.com/users/ryankayne/followers')
  .then(response => {
    console.log(response)
    this.setState({ friends: response.data });
  })
  .catch(error => {
    console.log(error)
  })
  }

  render() {
    return (
      <div className="App">
        <Section>

          <Card>
            <h1>Name: {this.state.user.name}</h1>
            <Profile src={this.state.user.avatar_url} />
          </Card>
          <FollowContainer>
          {this.state.friends.map(friends => (
          <Card2>
            <h1>Name: {friends.login}</h1> 
            <Profile src={friends.avatar_url} />
          </Card2>
          ))}
          </FollowContainer>
        </Section>
      </div>
    );
  }
  }
 

export default App;
