import styled from "styled-components";
// import { fontFamily, fontSize, gray2 } from '../../../../styles/global';
// Fonts
export const fontFamily = "'Segoe UI', 'Helvetica Neue',sansserif";
export const fontSize = "15px";
export const gray2 = "#565555";

const List = styled.ul`
  list-style: none;
  padding: 0px 10px;
  background-color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`;

const ListItem = styled.li`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  display: block;
  cursor: pointer;
  :hover {
    background-color: black;
  }
`;

const Container = styled.div`
  width: 400px;
  margin: 10px auto;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  color: ${gray2};
  height: 100%;
`;

const Title = styled.span`
  color: #8c8c8c;
  font-weight: 500;
  font-size: 1.4rem;
`;

export { List, ListItem, Container, Title };
