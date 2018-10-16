import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import './App.css';

const imageAnimation = keyframes`
  0% {
    top: 30px;
  }
  50% {
    top: -15px;
  }
  100% {
    top: 30px;
  }
`;

const Container = styled.div`
  background-color: #61dafb;
  text-align: center;
  height: 100%;
  font-family: 'Indie Flower', cursive;
  padding: 0px 30px 0px 30px;
`;

export const Row = styled.div`
	display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
	padding-bottom: 30px;
`;

export const Column = styled.div`
	flex: ${props => props.flex};
	padding-right: 15px;
`;

export const Header = styled.h1`
  color: #fff;
  font-size: 48px;
`;

export const CarlText = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const CarlImage = styled.img`
  position: relative;
  animation: ${imageAnimation} infinite 2.5s linear;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Column flex={1}>
            <Header>Welcome to CheeseburgersOnCarlsBelly.com</Header>
          </Column>
        </Row>
        <Row>
          <Column flex={1}>
            <CarlImage src="/burgerguy.jpg" alt="Burger Guy Carl" />
          </Column>
          <Column flex={1}>
            <CarlText>
              Hi! My names Carl and I'm just a regular guy who loves his cheeseburgers!
              <br /><br />
              This is a site dedicated to cheeseburgers on my (Carl's) belly. Due to popular demand from the comments on 
              <a href="carlsmeats.com" target="_blank"> CarlsMeats.com</a> I had to dedicate a whole new site to this! Ha ha how neat is that?
              <br /><br />
              Anywhoooo, I'm looking for my partner in crime to have cheeseburger belly photos together. Must love: a good patty melt, healthy skin care regiment, and an ice cold crispy coors lite.
              <br /><br />
              Please send applications to the coolest house on the block (mine). Don't mind the three-legged cat on the porch, that's just Carl Junior and he's cool.
            </CarlText>
          </Column>
        </Row>
      </Container>
    );
  }
}

export default App;
