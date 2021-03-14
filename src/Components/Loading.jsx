import React from 'react' 
import styled from 'styled-components';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function Loading() {
  
    return (
      <StyledContainer className="loader">
      <StyledH1>📰 Content is loading 📰</StyledH1>
  
      	<Loader type="Grid"     color="#7FB069"height={100} width={100} />
      </StyledContainer>
    )
}

export default Loading;

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;

`
const StyledH1 = styled.h1``

