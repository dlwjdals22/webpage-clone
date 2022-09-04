import React from "react";
import styled from "styled-components";
import { BsHeart } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { GiEarthAmerica } from "react-icons/gi";

export default function Main2() {
  let extraImages = [
    [
      `${process.env.PUBLIC_URL}/images/Main2_extra_1.jpg`,
      "Practice Data Structures & Algorithms",
    ],
    [
      `${process.env.PUBLIC_URL}/images/Main2_extra_2.jpg`,
      "Interview Prep Resources",
    ],
    [
      `${process.env.PUBLIC_URL}/images/Main2_extra_3.jpg`,
      "Join our community",
    ],
  ];

  let related = [
    [
      "https://d2yjqys1j7uhg1.cloudfront.net/images/blog/frontend-star-rating.jpg",
      "Star Rating Component - Frontend Machine Coding | HTML, CSS, JS",
    ],
    [
      "https://d2yjqys1j7uhg1.cloudfront.net/images/blogs/modal-banner.png",
      "Create a modal - Frontend Machine Coding | HTML, CSS, JS",
    ],
    [
      "https://d2yjqys1j7uhg1.cloudfront.net/images/blog/nested-comments.jpg",
      "Nested Comments - Fronted Machine Coding | HTML, CSS, JS",
    ],
  ];

  return (
    <Body>
      <Main2_Article>
        <SocialAndArticle>
          <SocialPart>
            <Gathering>
              <HeartIcon>
                <BsHeart />
              </HeartIcon>
              <SocialIcons>
                <SocialIcon>
                  <FaLinkedinIn />
                </SocialIcon>
                <SocialIcon>
                  <FaFacebookF />
                </SocialIcon>
                <SocialIcon>
                  <AiOutlineTwitter />
                </SocialIcon>
              </SocialIcons>
            </Gathering>
          </SocialPart>
          <ArticlePart>
            <ArticleContent>
              <Title>
                Create a chess board which highlights the squares being attacked
                by a bishop.
              </Title>
              <Text>
                Display a chessboard on your webpage. Below is an example of
                what a chessboard looks like.
              </Text>
              <Picture
                src={`${process.env.PUBLIC_URL}/images/ChessBoard.jpg`}
              />
              <Text>
                When the user hovers on any square of the chessboard:
                <ul>
                  <li>Change the color of the square to light blue.</li>
                  <li>
                    Change the color of the squares that would be attacked by a
                    bishop to dark blue. A bishop attacks along its diagonals.
                  </li>
                </ul>
                An example of hover state is shown below.
              </Text>
              <Picture
                src={`${process.env.PUBLIC_URL}/images/ChessBoard.jpg`}
              />
              <Text>
                Implement the above chessboard using HTML, CSS and JS.
              </Text>
            </ArticleContent>
          </ArticlePart>
        </SocialAndArticle>
        <Main2_Bottom>
          <AuthorSection>
            <ProfilePicture
              src={`${process.env.PUBLIC_URL}/images/ProfileImage.jpg`}
            />
            <ProfileContents>
              <ProfileName>Sagar Jain</ProfileName>
              <ProfileContent>
                Sagar is the co-founder of workat.tech and has previously worked
                at Uber and Media.net. He is aiming to contribute to the future
                of tech education through workat.tech.
              </ProfileContent>
              <ProfileSocial>
                <GiEarthAmerica />
                <FaLinkedinIn />
              </ProfileSocial>
            </ProfileContents>
          </AuthorSection>
          <RelatedSection>
            <RelatedContentTitle>Related Content</RelatedContentTitle>
            <RelatedContents>
              {related.map((e, i) => {
                return (
                  <RelatedContent key={i}>
                    <RelatedImageBox>
                      <RelatedImage src={e[0]} />
                    </RelatedImageBox>
                    <RelatedText>{e[1]}</RelatedText>
                  </RelatedContent>
                );
              })}
            </RelatedContents>
          </RelatedSection>
        </Main2_Bottom>
      </Main2_Article>
      <Main2_Extra>
        <Extra_Sticky>
          {extraImages.map((e, i) => {
            return (
              <ImageBox key={i}>
                <Image src={e[0]} />
                <ImageText>{e[1]}</ImageText>
              </ImageBox>
            );
          })}
        </Extra_Sticky>
      </Main2_Extra>
    </Body>
  );
}

const ImageText = styled.div`
  @media screen and (max-width: 1700px) {
    padding: 25px 10px;
  }
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 17px;
  padding: 15px 10px;
  margin-top: -10px;
  /* margin-bottom: 45px; */
  background-color: rgba(200, 200, 200, 0.2);
`;
const RelatedImage = styled.img`
  @media screen and (max-width: 1000px) {
    /* object-fit: none; */
    /* max-width: 100%; */
    width: 100%;
    /* min-height: 35rem; */
    height: 100%;
  }
  width: 100%;
  height: 190px;
  object-fit: cover;
`;

const RelatedText = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 17px;
  padding: 25px 10px;
  margin-top: -10px;
  background-color: rgba(200, 200, 200, 0.2);
`;

const RelatedContent = styled.div`
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
  }

  /* min-width: 100%; */
`;

const RelatedContents = styled.div`
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
    width: 100%;
    height: 100%;
    /* object-fit: cover; */
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  width: 975px;
`;

const RelatedContentTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 25px;
`;

const ProfileName = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 9px;
`;
const ProfileContent = styled.div`
  font-size: 16px;
  max-width: 730px;
  margin-bottom: 9px;
  color: gray;
`;
const ProfileSocial = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50px;
  color: gray;
  cursor: pointer;
`;

const ProfilePicture = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;
const ProfileContents = styled.div`
  margin-left: 20px;
`;

const Main2_Bottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 70px;
`;

const ArticlePart = styled.div`
  margin-left: 10px;
`;

const RelatedSection = styled.section`
  margin-top: 40px;
`;
const AuthorSection = styled.section`
  display: flex;
`;

const SocialIcons = styled.div`
  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
    /* display: flex;
    flex-direction: row; */
  }
`;

const SocialIcon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin: 10px 0;
  width: 40px;
  height: 40px;
`;

const SocialPart = styled.div`
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  width: 50px;
`;

const Gathering = styled.div`
  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    flex-direction: row;
    width: 100%;
    position: static;
    margin: 0;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  position: sticky;
  top: 140px;
  width: fit-content;
`;
const HeartIcon = styled.div`
  @media screen and (max-width: 1200px) {
    margin: 0;
  }

  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  margin-bottom: 40px;
  width: 40px;
  height: 40px;
`;

const ArticleContent = styled.div`
  /* max-width: 100%; */
  /* width : 100%; */
  /* padding: 100px; */
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

const ImageBox = styled.div`
  @media screen and (max-width: 1700px) and (min-width: 1000px) {
    width: 311px;
    height: 190px;
    object-fit: cover;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 70%;
    margin: 10px 0;
  }
  margin: 80px 0;
  width: 380px;
  height: 220px;
`;

const Extra_Sticky = styled.div`
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    position: static;
    margin-top: 30px;
  }

  @media screen and (max-width: 1700px) and (min-width: 1000px) {
    max-width: 975px;
    display: grid;
    grid-template-columns: auto auto auto;
    grid-column-gap: 20px;
  }
  position: sticky;
  top: 140px;
`;

const Main2_Extra = styled.div`
  @media screen and (max-width: 1700px) {
    margin-top: -50px;
  }

  margin: 50px 0;
`;

const Picture = styled.img`
  max-width: 100%;
  /* object-fit: cover; */
  height: fit-content;
`;

const Text = styled.div`
  max-width: 100%;
  font-size: 25px;
  margin: 40px 0;
`;

const Title = styled.div`
  max-width: 100%;
  /* max-width: 1000px; */
  font-size: 40px;
  font-weight: bold;
  margin: 30px 0;
`;

const Body = styled.div`
  @media screen and (max-width: 1200px) {
    padding: 0;
  }
  @media screen and (max-width: 1700px) {
    display: flex;

    flex-direction: column;
    /* align-items: center; */
  }
  /* display: flex;
  justify-content: space-around; */
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 30px;
  padding: 0 210px;
`;

const Main2_Article = styled.div`
  @media screen and (max-width: 1700px) {
    padding-right: 0;
    margin-left: 0;
    max-width: 100%;
  }
  max-width: 1060px;
  /* display: grid; */
`;

const SocialAndArticle = styled.div`
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column-reverse;
  }
  display: grid;
  grid-template-columns: auto 1fr;
`;

const RelatedImageBox = styled.div`
  @media screen and (max-width: 1000px) {
    height: 500px;
    width: 100%;
    /* outline: 1px solid blue; */
    overflow: hidden;
  }
`;
