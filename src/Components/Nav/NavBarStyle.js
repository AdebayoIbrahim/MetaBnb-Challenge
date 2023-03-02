import styled from "styled-components";

const StyledNav = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  gap: 2rem;
  padding: 1rem 6rem;
`;
const Ul = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;
const Li = styled.li`
  //   background: ${(props) => props.state === "active" && "rgba(0,0,0,.5)"};
  //   &:hover {
  //     background: rgba(0, 0, 0, 0.8);
  //   }
  display: inline;
  margin-right: 2em;
`;

const Button = styled.button`
  display: inline-block;
  font-family: poppins;
  padding: ${({ state }) =>
    state === "search" ? "0.5rem 1.3rem" : "0.5rem 1.3rem"};
  color: white;
  border: none;
  border-radius: ${({ state }) =>
    state === "search" ? "0px 5px 5px 0px" : "5px"};
  background: #91083cde;
  width: ${({ state }) => (state === "search" ? "100%" : "")}; ;
`;

export { StyledNav, Ul, Li, Button };
