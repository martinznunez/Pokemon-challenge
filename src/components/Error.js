import React from "react";

import styled from "@emotion/styled";

const MensajeError = styled.p`
  font-size: 2rem;
  margin-top: 20px;
  background-color: red;
  padding: 5px;
  color: #fff;
`;

const Error = ({ error }) => {
  return (
    <MensajeError>
      {" "}
      {error === true ? "Algo a fallado, intentelo de nuevo..." : null}
    </MensajeError>
  );
};

export default Error;
