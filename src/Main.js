import React from "react";
import styled from "styled-components";
import ProfileImageSrc from "./ProfileImage.jpg";

export default function Main() {
  // https://unsplash.com/photos/WNoLnJo7tS8
  return (
    <div>
      <MainWrapper>
        <MainImage>
          <MainTitle>
            Bishop on Chessboard - Frontend Machine Coding | HTML, CSS, JS
          </MainTitle>
          <Profile>
            <ProfileImage src={ProfileImageSrc} />
            asdfasdfasdfasdfasdfasdf
          </Profile>
        </MainImage>
      </MainWrapper>
      {/* <MainImage src="chess.jpg" /> */}
    </div>
  );
}

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const Profile = styled.div`
  color: white;
  width: 1500px;
`;

const MainWrapper = styled.div`
  overflow: hidden;
`;

const MainTitle = styled.div`
  font-size: 55px;
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
  height: 570px;
  background-image: url("https://d2yjqys1j7uhg1.cloudfront.net/images/blog/chess-bishop-moves.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
