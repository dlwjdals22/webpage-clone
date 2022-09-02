import React from "react";
import styled from "styled-components";
import { GiEarthAmerica } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa";

export default function Main() {
  return (
    <>
      <MainWrapper>
        <MainImage>
          <MainTitle>
            Bishop on Chessboard - Frontend Machine Coding | HTML, CSS, JS
          </MainTitle>
          <Profile>
            <ProfileImage
              src={`${process.env.PUBLIC_URL}/images/ProfileImage.jpg`}
            />
            {/* <ProfileImage src={ProfileImageSrc} /> */}
            <ProfileNameAndIcon>
              <ProfileName>Sagar Jain</ProfileName>
              <ProfileIcon>
                <GiEarthAmerica
                  style={{
                    marginRight: "19px",
                  }}
                />
                <FaLinkedinIn
                  style={{
                    marginRight: "19px",
                  }}
                />
              </ProfileIcon>
            </ProfileNameAndIcon>
          </Profile>
        </MainImage>
      </MainWrapper>
    </>
  );
}

const ProfileIcon = styled.div`
  margin-top: 4px;
`;

const ProfileName = styled.div`
  text-shadow: 1px 1px 2px rgb(0 0 0 / 50%), -1px -1px 2px rgb(0 0 0 / 50%);
`;

const ProfileNameAndIcon = styled.div`
  margin-left: 20px;
  font-size: 20px;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  color: white;
  width: 1500px;
`;

const MainWrapper = styled.div``;

const MainTitle = styled.div`
  font-size: 55px;
  margin-top: 120px;
  text-shadow: 1px 1px 2px rgb(0 0 0 / 50%), -1px -1px 2px rgb(0 0 0 / 50%);
  color: white;
  width: 1500px;
`;

const MainImage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 700px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)),
    url("https://d2yjqys1j7uhg1.cloudfront.net/images/blog/chess-bishop-moves.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
