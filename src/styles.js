import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.backgroundColor};
    font-family: ${(props) => props.theme.fontFamily};
}
`;

export const LogoImage = styled.img`
  height: 130px;
  width: Auto;
  margin-top: 35px;
  margin-left: 35px;
  margin-bottom: 30px;
`;

export const Score = styled.h1`
  color: ${(props) => props.theme.mainColor};
  text-align: center;
  font-size: 350%;
`;

export const Description = styled.h4`
  color: ${(props) => props.theme.mainColor};
  text-align: center;
  font-size: 100%;
  margin-top: -40px; 
  }
`;

export const CurrentRate = styled.p`
  color: ${(props) => props.theme.secondaryColor};
  text-align: center;

  }
`;

export const GameWrapper = styled.div`
  display: block; /* allows us to use Flexbox */
  button {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const PurchasesWrapper = styled.div`
  display: flex; /* allows us to use Flexbox */
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 150px;
  }
`;

export const Purchase = styled.div`
   display: "flex"
  align-content: center;
  margin-left: auto;
  margin-right: auto;
  }
`;
