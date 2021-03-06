import React from 'react' 
import styled from 'styled-components';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
function Loading() {
  
    return (
      <StyledContainer className="loader">
      <StyledH1>📰Content is loading...📰</StyledH1>
      <Loader
        type="Puff"
        color="#7FB069"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      </StyledContainer>
    )
}

export default Loader;

const StyledContainer = styled.div`

`
const StyledH1 = styled.h1``

const StyledH2 = styled.h2`
font-size: 4rem;
animation: rotation 5s;

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
`