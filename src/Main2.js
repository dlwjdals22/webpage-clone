import React from "react";
import styled from "styled-components";

export default function Main2() {
  return (
    <>
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
    </>
  );
}
const Picture = styled.img`
  height: 1500px;
  /* background-size: cover; */
`;

const Text = styled.div``;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
