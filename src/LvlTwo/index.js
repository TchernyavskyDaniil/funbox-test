import React, { Component } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Card from "./Card";
import bgImg from "./img/bg.png";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:before {
    position: absolute;
    width: 100%;
    height: 20%;
    bottom: 0;
    left: 0;
    top: 0;
    z-index: -10;
    content: "";
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }

  &:after {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -10;
    width: 100%;
    height: 30%;
    content: "";
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
  }

  @media screen and (max-width: 1024px) {
    height: auto;
    position: relative;
  }

  @media screen and (max-width: 710px) {
    height: 100%;
  }
`;

const Menu = styled.section`
  margin: 10px;
  width: 1120px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    width: 95%;
  }
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
  flex-wrap: wrap;
  padding: 0;
  min-height: 520px;

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const CardContainer = styled.li`
  list-style: none;
  min-height: 550px;

  @media screen and (max-width: 1024px) {
    margin-right: 20px;
  }

  @media screen and (max-width: 600px) {
    margin-right: 0;
  }
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
          isSelected: false,
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
          isSelected: true,
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
          isSelected: false,
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
                    isSelected={card.isSelected}
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
