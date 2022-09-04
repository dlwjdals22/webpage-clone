import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbBuildingCastle } from "react-icons/tb";
import { FaBook } from "react-icons/fa";
import { TiDeviceDesktop } from "react-icons/ti";
import { FaTerminal } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { BsFillBagPlusFill } from "react-icons/bs";

export default function Nav() {
  const [navScroll, setNavScroll] = useState(0);
  const [modal, setModal] = useState(false);

  function scrollDisable() {
    document.body.style.overflow = "hidden";
    return;
  }

  function scrollEnable() {
    document.body.style.overflow = "unset";
    return;
  }

  function navFixed() {
    setNavScroll(window.pageYOffset);
    return;
  }

  useEffect(() => {
    window.addEventListener("scroll", navFixed);
    return () => {
      window.removeEventListener("scroll", navFixed);
    };
  });

  let modalIcon = [
    { icon: <TbBuildingCastle />, text: "Programs" },
    { icon: <FaBook />, text: "Resources" },
    { icon: <TiDeviceDesktop />, text: "Practice" },
    { icon: <FaTerminal />, text: "Online IDE" },
    { icon: <FaChartPie />, text: "Compare Companies" },
    { icon: <BsFillBagPlusFill />, text: "Jobs" },
  ];

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
      <Body move={modal} pst={navScroll <= 750 ? "none" : "fixed"}>
        <ModalBackground
          show={modal}
          onClick={() => {
            setModal(false);
            scrollEnable();
          }}
        >
          <Modal show={modal}>
            <ModalNav>
              <Logo2>
                work<AtSign>@</AtSign>tech
              </Logo2>
            </ModalNav>
            <ModalLogin>Login</ModalLogin>
            <ModalList>
              {modalIcon.map((el, i) => {
                return (
                  <ModalMenu key={i}>
                    <MenuItemIcon>{el.icon}</MenuItemIcon>
                    <MenuItemText>{el.text}</MenuItemText>
                  </ModalMenu>
                );
              })}
            </ModalList>
            <ModalClose
              onClick={() => {
                setModal(false);
                scrollEnable();
              }}
            >
              X
            </ModalClose>
          </Modal>
        </ModalBackground>
        <LogoAndMenu>
          <Hamburger
            onClick={() => {
              setModal(true);
              scrollDisable();
            }}
          >
            <GiHamburgerMenu />
          </Hamburger>
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

const ModalList = styled.div``;
const ModalMenu = styled.div`
  display: grid;
  grid-template-columns: 70px auto;
  height: 50px;
  cursor: pointer;
`;
const MenuItemIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;
const MenuItemText = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const ModalLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: rgb(39, 110, 241);
  margin: 10px;
  height: 40px;
  border-radius: 7px;
`;

const ModalNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  height: 100px;
`;
const ModalBackground = styled.div`
  display: ${(props) => (props.show === true ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
`;
const Modal = styled.div`
  display: ${(props) => (props.show === true ? "block" : "none")};
  position: fixed;
  width: 70%;
  max-width: 460px;
  height: 100vh;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 1;
`;

const ModalClose = styled.div`
  font-size: 40px;
  color: white;
  position: fixed;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const Hamburger = styled.div`
  @media screen and (min-width: 1200px) {
    display: none;
  }
  margin-left: 15px;
  font-size: 40px;
  display: block;
  cursor: pointer;
`;

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
  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 40px auto 40px;
    padding: 25px 0;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.1px 20px 0.1px gray;
  padding: 25px 10vw;
`;

const Logo2 = styled.div`
  user-select: none;
  font-size: 40px;
  cursor: pointer;
  color: white;
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
