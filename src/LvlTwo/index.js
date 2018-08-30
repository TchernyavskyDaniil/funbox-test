import React, { Component } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Card from "./Card";
import bgImg from "./img/bg.png";

const Container = styled.div`
  position: relative;
  height: 100vh;
`;

const Menu = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1120px;
  margin: 10px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: white;
  text-align: center;
  font-weight: 400;
  line-height: 40px;
`;

const Cards = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
`;

const CardContainer = styled.li`
  list-style: none;
`;

class LvlTwo extends Component {
  constructor() {
    super();
    this.state = {
      cards: [
        {
          id: 1,
          name: "фуа-гра",
          count: 10,
          mouses: 1,
          isGood: false,
          price: 0.5,
          isActive: false,
          isDisabled: false,
          activeText: "Печень утки разварная с артишоками."
        },
        {
          id: 2,
          name: "рыбой",
          count: 40,
          mouses: 2,
          isGood: false,
          price: 2,
          isActive: true,
          isDisabled: false,
          activeText: "Головы щучьи с чесноком да свежайшая семгушка."
        },
        {
          id: 3,
          name: "курой",
          count: 100,
          mouses: 5,
          isGood: true,
          price: 5,
          isActive: false,
          isDisabled: true,
          activeText: "Печень утки разварная с артишоками."
        }
      ]
    };
  }

  render() {
    const { cards } = this.state;

    return (
      <React.Fragment>
        <Helmet bodyAttributes={{ style: `background-image : url(${bgImg})` }}>
          <title>Level II</title>
        </Helmet>
        <Container>
          <Menu>
            <Title> Ты сегодня покормил кота ? </Title>
            <Cards>
              {cards.map(card => (
                <CardContainer key={card.id}>
                  <Card
                    name={card.name}
                    count={card.count}
                    mouses={card.mouses}
                    isGood={card.isGood}
                    price={card.price}
                    isActive={card.isActive}
                    activeText={card.activeText}
                    isDisabled={card.isDisabled}
                  />
                </CardContainer>
              ))}
            </Cards>
          </Menu>
        </Container>
      </React.Fragment>
    );
  }
}

export default LvlTwo;
