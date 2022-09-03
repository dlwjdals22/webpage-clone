import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Nav() {
  const [navScroll, setNavScroll] = useState(0);
  const [show, setShow] = useState([false, false, false, false]);

  function scrollFixed() {
    setNavScroll(window.pageYOffset);
  }

  function inMouseShow(index) {
    let newShow = [...show];
    newShow[index] = true;
    setShow(newShow);
  }

  function outMouseShow(index) {
    let newShow = [...show];
    newShow[index] = false;
    setShow(newShow);
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
                <>
                  <Menu
                    onMouseOver={() => inMouseShow(i)}
                    onMouseOut={() => outMouseShow(i)}
                  >
                    {menu} &#9660;
                  </Menu>
                  <DropDownBox move={i}>
                    {dropdown[i].map((e) => {
                      return <DropDown show={show[i]}>{e}</DropDown>;
                    })}
                  </DropDownBox>
                </>
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
  display: flex;
  position: relative;
  outline: 1px solid green;
`;

const Menu = styled.span`
  cursor: pointer;
  margin: 0px 14px;
  &:hover {
    color: blue;
  }
  outline: 1px solid blue;
`;

const DropDownBox = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50px;
  /* transform: translateX(${(props) => props.move}%); */
  transform: ${(props) => `translateX${props.move * 10}%`};
  background-color: white;
`;
const DropDown = styled.li`
  /* display: none; */
  /* position: absolute; */
  display: ${(props) => (props.show === true ? "block" : "none")};
  flex-direction: column;
  /* background-color: green; */
  outline: 1px black solid;
  width: fit-content;

  /* height: fit-content; */
`;

const Login = styled.span`
  background-color: rgb(39, 110, 241);
  color: white;
  margin: 0px 5px;
  padding: 8px;
  border-radius: 8px;
`;
