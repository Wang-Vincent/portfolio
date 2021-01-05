import React from "react";
import styled from "styled-components";

const ScrollDown = styled.div`
  position: relative;
  z-index: 1;
  bottom: 1.6em;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: transparent;
  font-weight: bold;
  text-shadow: 1px 1px #45a29e;
  color: #eeeeee;
  .turn {
    cursor: pointer;
    transform: rotate(90deg);
  }
`;

const VWScrollDown = () => {
  return (
    <ScrollDown>
      <div className="turn">
        <span> &gt; </span>
      </div>
    </ScrollDown>
  );
};

export default VWScrollDown;