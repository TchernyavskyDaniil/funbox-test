import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 30px;
  line-height: 30px;
  padding: 5px;
  margin: 20px 5px;
  color: black;
`;

const Desc = styled.span`
  font-size: 20px;
  line-height: 20px;
  padding: 10px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  padding: 5px;
  min-width: 180px;
  justify-content: space-around;
  font-size: 20px;
  line-height: 20px;
`;

const ToLvl = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: #4fc08d;
  border-radius: 40px;
  transition: all 0.15s ease;
  padding: 10px 20px;
  margin: 0 10px;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #4fc08d;
    background-color: white;
    color: #4fc08d;
  }
`;

export default () => (
  <React.Fragment>
    <Helmet>
      <title>FunBox test menu</title>
    </Helmet>
    <Container>
      <Title> Выполненное задание для FunBox </Title>
      <Desc> Для перехода к определенному уровню нажмите кнопку: </Desc>
      <Buttons>
        <ToLvl to="/lvl_one">Level I</ToLvl>
        <ToLvl to="/lvl_two">Level II</ToLvl>
      </Buttons>
    </Container>
  </React.Fragment>
);
