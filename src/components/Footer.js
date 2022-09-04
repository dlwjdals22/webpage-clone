import React from "react";
import styled from "styled-components";
import { MdEmail } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Footer() {
  let footerpages = ["About", "FAQs", "Terms", "Privacy"];
  let FooterTitle = ["Blog", "Practice Questions", "Online Compilers (IDE)"];
  let FooterTitle2 = [
    "Topic-wise Problems",
    "Company-wise Problems",
    "DSA Sheets (Curated Lists)",
  ];
  let FooterList = [
    [
      "Career Advice and Roadmaps",
      "Data Structures & Algorithms",
      "Machine Coding Round (LLD)",
      "System Design & Architecture",
      "Backend Development",
      "Frontend Development",
      "Awesome Project Ideas",
      "Core Computer Science",
    ],
    [
      "Machine Coding (LLD) Questions",
      "Topic-wise DSA Questions",
      "Company-wise DSA Questions",
      "DSA Sheets (Curated Lists)",
      "JavaScript Interview Questions",
      "Frontend UI Machine Coding Questions",
    ],
    [
      "Online Java Compiler",
      "Online C++ Compiler",
      "Online C Compiler",
      "Online Python Compiler",
      "Online JavaScript Compiler",
    ],
  ];

  let FooterList2 = [
    [
      "Dynamic Programming Interview Questions",
      "Linked List Interview Questions",
      "Graph Interview Questions",
      "Backtracking Interview Questions",
      "Arrays Interview Questions",
      "Trees Interview Questions",
    ],
    [
      "Amazon Interview Questions",
      "Microsoft Interview Questions",
      "Google Interview Questions",
      "Flipkart Interview Questions",
      "Adobe Interview Questions",
      "Facebook Interview Questions",
    ],
    [
      "Top Interview Questions",
      "FAANG Interview Questions",
      "Most Asked Interview Questions",
      "6 month DSA Practice Sheet",
      "3 month DSA Practice Sheet",
      "Last minute DSA Practice Sheet",
    ],
  ];
  return (
    <Body>
      <FooterMain>
        <FooterPages>
          {footerpages.map((e, i) => {
            return <FooterPage key={i}>{e}</FooterPage>;
          })}
        </FooterPages>
        <FooterMail>
          <MailAdress>
            <MdEmail style={{ marginRight: "10px" }} />
            hi@workat.tech
          </MailAdress>
        </FooterMail>
        <FooterSocial>
          <BsDiscord style={{ marginRight: "25px", cursor: "pointer" }} />
          <FaLinkedinIn style={{ marginRight: "25px", cursor: "pointer" }} />
          <FaFacebookF style={{ marginRight: "25px", cursor: "pointer" }} />
          <AiOutlineTwitter
            style={{ marginRight: "25px", cursor: "pointer" }}
          />
          <AiFillGithub style={{ marginRight: "25px", cursor: "pointer" }} />
          <AiOutlineInstagram
            style={{ marginRight: "25px", cursor: "pointer" }}
          />
        </FooterSocial>
      </FooterMain>
      {/* ----------------------------------------구분선------------------------------------------ */}
      <HR></HR>
      <FooterLinksRow>
        {FooterTitle.map((title, i) => {
          return (
            <FooterLinksColumn key={i}>
              <FooterLinksColumnTitle>{title}</FooterLinksColumnTitle>
              {FooterList[i].map((list, j) => {
                return (
                  <FooterLinksColumnList key={j}>{list}</FooterLinksColumnList>
                );
              })}
            </FooterLinksColumn>
          );
        })}
      </FooterLinksRow>
      {/* ----------------------------------------구분선------------------------------------------ */}
      <HR></HR>
      <FooterLinksRow>
        {FooterTitle2.map((title, i) => {
          return (
            <FooterLinksColumn key={i}>
              <FooterLinksColumnTitle>{title}</FooterLinksColumnTitle>
              {FooterList2[i].map((list, j) => {
                return (
                  <FooterLinksColumnList key={j}>{list}</FooterLinksColumnList>
                );
              })}
            </FooterLinksColumn>
          );
        })}
      </FooterLinksRow>
      {/* ----------------------------------------구분선------------------------------------------ */}
      <HR2></HR2>
      <FooterCopyright>
        © 2020-2022 WORKATTECH TECHNOLOGIES PVT LTD | ALL RIGHTS RESERVED
      </FooterCopyright>
    </Body>
  );
}

const FooterCopyright = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
`;

const FooterLinksColumn = styled.div`
  margin-bottom: 20px;
`;
const FooterLinksColumnTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  margin: 20px 0;
`;
const FooterLinksColumnList = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  margin: 7px 0;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const FooterLinksRow = styled.div`
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
  color: white;
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
`;

const Body = styled.div`
  @media screen and (max-width: 1700px) {
    padding: 30px 150px;
  }
  @media screen and (max-width: 1200px) {
    padding: 30px 100px;
  }
  @media screen and (max-width: 1000px) {
    padding: 30px 20px;
  }
  padding: 30px 200px;
  background-color: rgba(17, 34, 51, 1);
  margin-top: 50px;
`;

const FooterMain = styled.div`
  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  color: white;
  margin: 20px 0 50px 0;
`;

const FooterPages = styled.div`
  @media screen and (max-width: 1000px) {
    width: 100%;
    justify-content: space-around;
  }
  display: flex;
`;

const FooterSocial = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 17px;
`;

const FooterMail = styled.div`
  @media screen and (max-width: 1000px) {
    margin: 20px 0;
  }
  display: flex;
  justify-content: center;
  font-size: 17px;
`;

const MailAdress = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const FooterPage = styled.div`
  @media screen and (max-width: 1000px) {
    margin: 0;
  }
  margin-right: 40px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const HR = styled.hr`
  @media screen and (max-width: 1000px) {
    border: 0;
  }
`;
const HR2 = styled.hr`
  width: 100%;
`;
