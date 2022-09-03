import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Nav() {
  const [navScroll, setNavScroll] = useState(0);

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
      "Backend Development",
      "Frontend Development",
      "Project Ideas for Software Developers",
      "Core Computer Science",
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
                <MenuList key={i}>
                  <Menu>{menu} &#9660;</Menu>
                  <ContentsList>
                    {dropdown[i].map((e, j) => {
                      return <Contents key={j}>{e}</Contents>;
                    })}
                  </ContentsList>
                </MenuList>
              );
            })}
            <Menu>Online IDE</Menu>
            <Login>Login</Login>
          </Menus>
        </LogoAndMenu>
      </Body>
      <Body2 topPadding={navScroll <= 750 ? "" : "103px"}></Body2>
    </>
  );
}
const Body2 = styled.div`
  padding-top: ${(props) => props.topPadding};
`;

const Body = styled.div`
  background-color: white;
  position: ${(props) => props.pst};
  width: 100%;
  z-index: 1;
`;

const LogoAndMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Menus = styled.div`
  @media screen and (max-width: 1200px) {
    display: none;
  }
  display: flex;
  align-items: center;
  position: relative;
`;

const ContentsList = styled.ul`
  display: none;
  position: absolute;
  top: 25px;
  padding: 0;
  background-color: rgb(246, 248, 250);
  &:hover {
    display: block;
  }
`;

const Contents = styled.div`
  text-align: left;
  padding: 0 20px;
  line-height: 44px;
  user-select: none;
  &:hover {
    background-color: rgb(238, 238, 238);
    color: blue;
    cursor: pointer;
  }
`;

const Menu = styled.div`
  cursor: pointer;
  margin: 0px 14px;
  padding: 10px 0;

  &:hover + ${ContentsList} {
    display: block;
  }
  &:hover {
    color: blue;
  }
`;

const MenuList = styled.div``;

const Login = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: rgb(39, 110, 241);
  color: white;
  margin: 0px 5px;
  padding: 8px;
  border-radius: 8px;
`;
