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
  text-align: center;
  height: 100%;
  font-family: 'Indie Flower', cursive;
`;

export const Row = styled.div`
	display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
`;

export const Column = styled.div`
	flex: ${props => props.flex};
`;

export const Header = styled.h1`
  color: #fff;
  font-size: 48px;
  padding-bottom: 30px;

  @media (max-width: 660px) {
		font-size: 24px;
	}
`;

export const HeaderTwo = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding-top: 30px;
`;

export const CarlText = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const CarlImage = styled.img`
  position: relative;
  animation: ${imageAnimation} infinite 2.5s linear;
  padding-bottom: 40px;
`;

class App extends Component {
  renderIframe = () => {
    const width = window.innerWidth || document.body.clientWidth;

    if (width > 660) {
      return (
        <iframe title="Cheeseburg" width="560" height="315" src="https://www.youtube.com/embed/jTNB09HY52U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
      );
    } else {
      return (
        <iframe title="Cheeseburg" width="360" height="215" src="https://www.youtube.com/embed/jTNB09HY52U" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen />
      );
    }
  };

  render() {
    return (
      <Container>
        <div style={{ backgroundColor: "#61dafb" }}>
          <Row>
            <Column flex={1}>
              <Header>Welcome to CheeseburgersOnCarlsBelly.com</Header>
            </Column>
          </Row>
          <Row style={{ paddingBottom: 30 }}>
            <Column flex={1}>
              <CarlImage src="/burgerguy.jpg" alt="Burger Guy Carl" />
            </Column>
            <Column flex={3}>
              <CarlText>
                Hi! My names Carl and I'm just a regular guy who loves his cheeseburgers!
                <br /><br />
                This is a site dedicated to cheeseburgers on my (Carl's) belly. Due to popular demand from the comments 
                on <a href="carlsmeats.com" target="_blank">CarlsMeats.com</a> I had to dedicate a whole new site to this! Ha ha how neat is that?
                <br /><br />
                Anywhoooo, I'm looking for my partner in crime to have cheeseburger belly photos together. Must love: a good patty melt, healthy skin care regiment, and an ice cold crispy coors lite.
                <br /><br />
                Please send applications to the coolest house on the block (mine). Don't mind the three-legged cat on the porch, that's just Carl Junior and he's cool.
              </CarlText>
            </Column>
          </Row>
        </div>
        <Row style={{ backgroundColor: '#fff' }}>
          <Column flex={1}>
            <HeaderTwo>
              Oh man! That's the wrong place to put cheeseburgers! <br />
              I know a way better place ha ha
            </HeaderTwo>
            <br /><br />
            <div>
              {this.renderIframe()}
            </div>
          </Column>
        </Row>
        <div style={{ paddingTop: 50 }}>Copyright © 2018 Cheeseburger Carl Inc</div>
      </Container>
    );
  }
}

export default App;
