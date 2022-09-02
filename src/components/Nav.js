import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Nav() {
  const [navScroll, setNavScroll] = useState(0);
  const [navPadding, setNavPadding] = useState(0);

  function scrollFixed() {
    setNavScroll(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollFixed);
    return () => {
      window.removeEventListener("scroll", scrollFixed);
    };
  });

  let menu = ["Programs", "Practice", "Resources", "Companies"];
  let dropdown = [
    [
      "Learn To Code in C/C++",
      "Object Oriented Programming in Java",
      "Object Oriented Programming in C++",
    ],
    [
      "Data Structures and Algorithms",
      "Machine Coding Round (LLD)",
      "Fronted UI Machine Coding",
    ],
    [
      "Career Advice and Roadmaps",
      "Data Structures and Algorithms",
      "Machine Coding Round (LLD)",
      "System Design & Architecture (HLD)",
    ],
    ["SDE Jobs & Internships", "Interview Questions", "Compare Companies"],
  ];

  return (
    <>
      <Body pst={navScroll <= 750 ? "none" : "fixed"}>
        <LogoAndMenu>
          <Logo>
            work<AtSign>@</AtSign>tech
          </Logo>
          <Menus>
            {menu.map((menu, i) => {
              return (
                <>
                  <Menu>{menu} &#9660;</Menu>
                  {/* {dropdown.map((e, i) => {
                  return <DropDown>{e[i]}</DropDown>;
                })} */}
                </>
              );
            })}
            <Menu>Online IDE</Menu>
            <Login>Login</Login>
          </Menus>
        </LogoAndMenu>
      </Body>
      <Body2 pd={navScroll <= 750 ? "" : "103px"}></Body2>
    </>
  );
}
const Body2 = styled.div`
  padding-top: ${(props) => props.pd};
`;

const Body = styled.div`
  background-color: white;
  position: ${(props) => props.pst};
  width: 100%;
  z-index: 1;
  /* padding: 130px 0; */
`;

const LogoAndMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* outline: 1px solid black; */
  box-shadow: 0 0.1px 20px 0.1px gray;
  padding: 25px 10vw;
`;

const Logo = styled.div`
  user-select: none;
  font-size: 40px;
  cursor: pointer;
`;

const AtSign = styled.span`
  background-color: rgb(39, 110, 241);
  color: white;
  padding: 1px 10px 4px 10px;
  border-radius: 50%;
`;

const Menus = styled.div``;

const Menu = styled.span`
  cursor: pointer;
  margin: 0px 14px;
  &:hover {
    color: blue;
  }
`;

const DropDown = styled.div`
  /* display: none; */
  &:hover {
    display: flex;
    flex-direction: column;
    background-color: green;
  }

  /* position: absolute; */
  height: 20px;
`;

const DropDown2 = styled.div`
  height: fit-content;
  background-color: green;
`;

const Login = styled.span`
  background-color: rgb(39, 110, 241);
  color: white;
  margin: 0px 5px;
  padding: 8px;
  border-radius: 8px;
`;
