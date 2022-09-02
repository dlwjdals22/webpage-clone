import React from "react";
import styled from "styled-components";

export default function Main2() {
  let extraImages = [
    `${process.env.PUBLIC_URL}/images/Main2_extra_1.jpg`,
    `${process.env.PUBLIC_URL}/images/Main2_extra_2.jpg`,
    `${process.env.PUBLIC_URL}/images/Main2_extra_3.jpg`,
  ];
  return (
    <Body>
      <Main2_article>
        <Title>
          Create a chess board which highlights the squares being attacked by a
          bishop.
        </Title>
        <Text>
          Display a chessboard on your webpage. Below is an example of what a
          chessboard looks like.
        </Text>
        <Picture src={`${process.env.PUBLIC_URL}/images/ChessBoard.jpg`} />
        <Text>
          When the user hovers on any square of the chessboard:
          <ul>
            <li>Change the color of the square to light blue.</li>
            <li>
              Change the color of the squares that would be attacked by a bishop
              to dark blue. A bishop attacks along its diagonals.
            </li>
          </ul>
          An example of hover state is shown below.
        </Text>
        <Picture src={`${process.env.PUBLIC_URL}/images/ChessBoard.jpg`} />
        <Text>Implement the above chessboard using HTML, CSS and JS.</Text>
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

const Main2_article = styled.div``;
const Main2_extra = styled.div`
  margin: 50px;

  /* display: flex;
  flex-direction: column; */
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  /* width: fit-content; */
`;
const Picture = styled.img`
  height: 1500px;
  /* background-size: cover; */
`;

const Text = styled.div``;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
