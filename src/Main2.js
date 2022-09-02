import React from "react";
import styled from "styled-components";
import { BsHeart } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Main2() {
  let extraImages = [
    `${process.env.PUBLIC_URL}/images/Main2_extra_1.jpg`,
    `${process.env.PUBLIC_URL}/images/Main2_extra_2.jpg`,
    `${process.env.PUBLIC_URL}/images/Main2_extra_3.jpg`,
  ];
  return (
    <Body>
      <Main2_article>
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
              Display a chessboard on your webpage. Below is an example of what
              a chessboard looks like.
            </Text>
            <Picture src={`${process.env.PUBLIC_URL}/images/ChessBoard.jpg`} />
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
            <Picture src={`${process.env.PUBLIC_URL}/images/ChessBoard.jpg`} />
            <Text>Implement the above chessboard using HTML, CSS and JS.</Text>
          </ArticleContent>
        </ArticlePart>
        <Main2_Bottom>
          <AuthorSection>
            작가구역작가구역작가구역작가구역작가구역작가구역작가구역작가구역작가구역
          </AuthorSection>
          <RelatedContent>
            릴레이티드컨텐츠 구역릴레이티드컨텐츠 구역릴레이티드컨텐츠
            구역릴레이티드컨텐츠 구역
          </RelatedContent>
        </Main2_Bottom>
      </Main2_article>

      <Main2_extra>
        <Extra_Sticky>
          {extraImages.map((e) => {
            return (
              <ImageBox>
                <Image src={e} />
              </ImageBox>
            );
          })}
        </Extra_Sticky>
      </Main2_extra>
    </Body>
  );
}
const Main2_Bottom = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray;
  grid-column-start: 1;
  grid-column-end: 3;
`;
const RelatedContent = styled.section``;
const AuthorSection = styled.section``;

const SocialIcons = styled.div``;
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

const Gathering = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const HeartIcon = styled.div`
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
  /* padding: 100px; */
`;

const ArticlePart = styled.div``;
const SocialPart = styled.div``;

const Extra_Sticky = styled.div`
  position: sticky;
  top: 140px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;

const ImageBox = styled.div`
  margin: 50px;
  width: 400px;
  height: 250px;
`;

const Main2_article = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
`;

const Main2_extra = styled.div`
  margin: 50px;
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const Picture = styled.img`
  width: 100%;
  height: fit-content;
`;

const Text = styled.div``;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
