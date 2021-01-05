import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const TitleMsg = styled.h1`
  font-family: Verdana, sans-serif;
  position: absolute;
  width: 100%;
  top: 28rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .subtitle {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const VWTitleMsg = () => {
  return (
    <TitleMsg>
      <div className="titleMsg">
        <div className="heading">
          <div className="main text-center mb-3">
            <h1>Hi there! I am</h1>
            <span>
              <strong>Vincent Wang.</strong>
            </span>
            <br />
            <br />
            <h1>I am also a</h1>
          </div>
          <div className="subtitle">
            <Typewriter
              options={{
                strings: ["Computing Student.", "Developer.", "Programmer.", "Gamer.", "Music Lover."],
                autoStart: true,
                loop: true,
                delay: 66,
              }}
            />
          </div>
        </div>
      </div>
    </TitleMsg>
  );
};

export default VWTitleMsg;
