/* eslint-disable no-nested-ternary */
import React, { Component } from "react";
import styled from "styled-components";
import onClickOutside from "react-onclickoutside";
import styledMap from "styled-map";
import catImg from "./img/cat.png";

// for styledMap
const toggleColorBorder = {
  default: "4px solid #1698d9",
  active: "4px solid #D91667",
  disable: "4px solid #b3b3b3"
};

const toggleColorText = {
  default: "#666666",
  disable: "#b3b3b3"
};

const toggleColorMainText = {
  default: "black",
  disable: "#b3b3b3"
};

const toggleHoverColor = {
  hover: "#2ea8e6",
  hoverSelected: "#e62e7a",
  noHover: "#b3b3b3"
};

const toggleHoverBorder = {
  hover: "4px solid #2ea8e6",
  hoverSelected: "4px solid #e62e7a",
  noHover: "4px solid #b3b3b3"
};

const Title = styled.p`
  font-size: 16px;
  color: ${styledMap({
    default: "#666666",
    disable: "#b3b3b3",
    activeSelected: "#e62e7a"
  })};
  line-height: 20px;
  background-color: white;
  margin: 0 0 0 50px;
  padding: 20px 5px 5px 5px;
  position: relative;
  border-top: ${styledMap(toggleColorBorder)};
  border-right: ${styledMap(toggleColorBorder)};
  font-weight: 600;
  border-top-right-radius: 12px;

  &:after {
    content: "";
    position: absolute;
    top: -4px;
    left: -50px;
    z-index: -1;
    width: 50px;
    height: 50px;
    background-color: white;
    border-left: ${styledMap(toggleColorBorder)};
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
  border-bottom: ${styledMap(toggleColorBorder)};
  border-left: ${styledMap(toggleColorBorder)};
  border-right: ${styledMap(toggleColorBorder)};
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
  overflow: hidden;
  white-space: normal;
  text-overflow: ellipsis;
  margin: 0;
  color: ${styledMap(toggleColorMainText)};
`;

const Desc = styled.span`
  font-size: 24px;
  font-weight: 800;
      max-height: 40px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
}
  color: ${styledMap(toggleColorMainText)};
`;

const Total = styled.div`
  margin: 10px 0 12px 0;
  font-size: 14px;
  color: ${styledMap(toggleColorText)};
`;

const Count = styled.span``;

const Present = styled.p`
  margin: 0;
`;

const Review = styled.span``;

const CardImg = styled.img`
  opacity: ${styledMap({ default: "1", disable: "0.5" })};
`;

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
  background-color: ${styledMap({
    default: "#1698d9",
    active: "#D91667",
    disable: "#b3b3b3"
  })};
  color: white;
`;

const PriceNumb = styled.span`
  font-size: 42px;
`;

const PriceDesc = styled.span``;

const Wrapper = styled.div`
  width: 320px;

  @media screen and (max-width: 350px) {
    width: 300px;
  }
`;

const DescCard = styled.div`
  font-size: 13px;
  color: ${styledMap({ default: "white", disable: "#ffff66" })};
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 480px;
  cursor: pointer;
  user-select: none;

  &:hover {
    ${Title} {
      border-top: ${styledMap(toggleHoverBorder)};
      border-right: ${styledMap(toggleHoverBorder)};

      &:after {
        border-left: ${styledMap(toggleHoverBorder)};
      }
    }

    ${Main} {
      border-bottom: ${styledMap(toggleHoverBorder)};
      border-left: ${styledMap(toggleHoverBorder)};
      border-right: ${styledMap(toggleHoverBorder)};
    }

    ${Price} {
      background-color: ${styledMap(toggleHoverColor)};
    }
  }
`;

class Card extends Component {
  constructor() {
    super();
    this.state = {
      isSelected: null,
      isHover: false,
      title: "Сказочное заморское яство"
    };
  }

  componentWillMount() {
    const { isSelected } = this.props;
    this.setState({ isSelected });
  }

  handleClickOutside = () => {
    this.setState({ isHover: false });
  };

  // set the text
  onMouseover = () => {
    this.setState({ title: "Котэ не одобряет?", isHover: true });
  };

  // clear the text
  onMouseout = () => {
    this.setState({ title: "Сказочное заморское яство", isHover: false });
  };

  getPrice = price => {
    if (price < 1) {
      return String(price).replace(".", ",");
    }

    return price;
  };

  setDeclensionsWords = count => {
    let totalResult;
    if (count > 1 && count < 5) {
      totalResult = (
        <Present>
          <b>{count}</b> мыши в подарок
        </Present>
      );
    } else if (count >= 5) {
      totalResult = (
        <Present>
          <b>{count}</b> мыши в подарок
        </Present>
      );
    } else {
      totalResult = <Present> мыши в подарок</Present>;
    }

    return totalResult;
  };

  changeActiveState = () => {
    const { isDisabled } = this.props;

    if (!isDisabled) {
      this.setState(prevState => ({
        isSelected: !prevState.isSelected,
        isHover: true
      }));
    }
  };

  render() {
    const {
      name,
      count,
      mouses,
      isGood,
      price,
      activeText,
      isDisabled
    } = this.props;
    const { isSelected, isHover, title } = this.state;

    return (
      <Wrapper>
        {/* Если элемент имеет состояние дизейбл,
          то отобразим определенный фрагмент,
          иначе "else if" с проверкой на активное состоение.
          То есть, проверка Disable -> Acitve -> Normal */}
        {isDisabled ? (
          <Container noHover>
            <Title disable> Сказочное заморское яство </Title>{" "}
            <Main disable>
              <NameCard>
                <MainTitle disable>Нямнушка</MainTitle>
                <Desc disable>с {name}</Desc>
                <Total disable>
                  <Count>
                    {" "}
                    <b>{count}</b> порций
                  </Count>
                  {this.setDeclensionsWords(mouses)}
                  {isGood ? <Review> заказчик доволен </Review> : null}
                </Total>
              </NameCard>
              <CardImg disable src={catImg} />
              <Price disable>
                <PriceNumb> {this.getPrice(price)} </PriceNumb>
                <PriceDesc> КГ </PriceDesc>
              </Price>
            </Main>
          </Container>
        ) : isSelected ? (
          <Container
            onClick={this.changeActiveState}
            hoverSelected
            onMouseEnter={this.onMouseover}
            onMouseLeave={this.onMouseout}
          >
            {isHover ? (
              <Title active activeSelected>
                {" "}
                {title}{" "}
              </Title>
            ) : (
              <Title active default>
                {" "}
                {title}{" "}
              </Title>
            )}
            <Main active>
              <NameCard>
                <MainTitle>Нямнушка</MainTitle>
                <Desc>с {name}</Desc>
                <Total>
                  <Count>
                    <b>{count}</b> порций
                  </Count>
                  {this.setDeclensionsWords(mouses)}
                  {isGood ? <Review> заказчик доволен </Review> : null}
                </Total>
              </NameCard>
              <CardImg src={catImg} />
              <Price active>
                <PriceNumb> {this.getPrice(price)} </PriceNumb>
                <PriceDesc> КГ </PriceDesc>
              </Price>
            </Main>
          </Container>
        ) : (
          <Container onClick={this.changeActiveState} hover>
            <Title> Сказочное заморское яство </Title>
            <Main>
              <NameCard>
                <MainTitle>Нямнушка</MainTitle>
                <Desc>с {name}</Desc>
                <Total>
                  <Count>
                    <b>{count}</b> порций
                  </Count>
                  {this.setDeclensionsWords(mouses)}
                  {isGood ? <Review> заказчик доволен </Review> : null}
                </Total>
              </NameCard>
              <CardImg src={catImg} />
              <Price>
                <PriceNumb> {this.getPrice(price)} </PriceNumb>
                <PriceDesc> КГ </PriceDesc>
              </Price>
            </Main>
          </Container>
        )}
        {!isDisabled ? (
          isSelected ? (
            <DescCard>{activeText}</DescCard>
          ) : (
            <DescCard>
              Чего сидишь? Порадуй котэ,{" "}
              <BtnBuy onClick={this.changeActiveState}> купи </BtnBuy>
            </DescCard>
          )
        ) : (
          <DescCard disable>Печалька, с курой закончился.</DescCard>
        )}
      </Wrapper>
    );
  }
}

export default onClickOutside(Card);
