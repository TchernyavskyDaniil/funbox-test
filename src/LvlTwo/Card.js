import React, { Component } from "react";
import styled from "styled-components";
import catImg from "./img/cat.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 480px;
`;

const Title = styled.p`
  font-size: 16px;
  color: #666666;
  line-height: 20px;
  background-color: white;
  margin: 0 0 0 50px;
  padding: 20px 5px 5px 5px;
  position: relative;
  border-top: 4px solid #1698d9;
  border-right: 4px solid #1698d9;
  font-weight: 600;
  border-top-right-radius: 12px;

  &:before {
    content: "";
    position: absolute;
    top: -4px;
    left: -50px;
    z-index: -1;
    width: 50px;
    height: 50px;
    background-color: white;
    border-left: 4px solid #1698d9;
    transform-origin: bottom left;
    transform: skew(-45deg, 0deg);
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: white;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom: 4px solid #1698d9;
  border-left: 4px solid #1698d9;
  border-right: 4px solid #1698d9;
  min-height: 427px;
  justify-content: space-between;
`;

const NameCard = styled.div`
  margin-left: 48px;
  padding: 5px 10px 5px 8px;
`;

const MainTitle = styled.h2`
  font-size: 40px;
  line-height: 48px;
  font-weight: 800;
  margin: 0;
`;

const Desc = styled.span`
  font-size: 24px;
  font-weight: 800;
`;

const Total = styled.div`
  margin: 10px 0 12px 0;
  font-size: 14px;
  color: #666666;
`;

const Count = styled.span``;

const Present = styled.p`
  margin: 0;
`;

const Review = styled.span``;

const CardImg = styled.img``;

const Price = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #1698d9;
  color: white;
`;

const PriceNumb = styled.span`
  font-size: 42px;
`;

const PriceDesc = styled.span``;

const Wrapper = styled.div`
  width: 320px;
`;

const DescCard = styled.div`
  font-size: 13px;
  color: white;
  margin-top: 10px;
  margin-bottom: 8px;
  padding: 2px;
  text-align: center;
`;

const BtnBuy = styled.button`
  border: transparent;
  background-color: transparent;
  color: #1698d9;
  text-decoration: none;
  border-bottom: 1px dashed #1698d9;
  padding: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

class Card extends Component {
  constructor() {
    super();
  }

  setDeclensionsWords = count => {
    let totalResult;
    if (count > 1 && count < 5) {
      totalResult = `${count} мыши в подарок`;
    } else if (count >= 5) {
      totalResult = `${count} мышей в подарок`;
    } else {
      totalResult = `мышь в подарок`;
    }

    return totalResult;
  };

  render() {
    const { name, count, mouses, isGood, price, isActive } = this.props;

    return (
      <Wrapper>
        <Container>
          <Title> Сказочное заморское яство </Title>
          <Main>
            <NameCard>
              <MainTitle>Нямнушка</MainTitle>
              <Desc>с {name}</Desc>
              <Total>
                <Count>{count} порций</Count>
                <Present>{this.setDeclensionsWords(mouses)}</Present>
                {isGood ? <Review> заказчик доволен </Review> : null}
              </Total>
            </NameCard>
            <CardImg src={catImg} />
            <Price>
              <PriceNumb>
                {" "}
                {price < 1 ? String(price).replace(".", ",") : price}{" "}
              </PriceNumb>
              <PriceDesc> КГ </PriceDesc>
            </Price>
          </Main>
        </Container>
        {isActive ? (
          <DescCard>Головы щучьи с чесноком да свежайшая семгушка.</DescCard>
        ) : (
          <DescCard>
            Чего сидишь? Порадуй котэ, <BtnBuy> купи </BtnBuy>
          </DescCard>
        )}
      </Wrapper>
    );
  }
}

export default Card;
