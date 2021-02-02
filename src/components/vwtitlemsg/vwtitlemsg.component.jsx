import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";

const TitleMsg = styled.h1`
  font-family: Verdana, sans-serif;
  position: absolute;
  width: 100%;
  top: 28rem;
  z-index: 1;
  margin-top: -128px;
  text-align: center;
  strong {
    font-size: 1.26em;
  }
  div {
    color: #111111;
    font-weight: 100;
    letter-spacing: 6px;
    .main {
      font-size: 60px;
    }
    .subtitle {
      font-size: 28px;
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
                strings: ["Computing Student.", "Developer.", "Designer.", "Gamer.", "badminton Lover.", "Kar啊oke enthusiast."],
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
