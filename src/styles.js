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
  margin-top: 30px;
  margin-left: 30px;
`;

export const Score = styled.h1`
  color: ${(props) => props.theme.mainColor};
  text-align: center;
  font-size: 100px;
`;

export const Description = styled.h4`
  color: ${(props) => props.theme.mainColor};
  text-align: center;
  font-size: 100%;
  margin-top: -80px; 
  margin-bottom: 15px; 
  }
`;

export const UpgradesTitle = styled.h4`
  color: ${(props) => props.theme.mainColor};
  text-align: left;
  font-size: 170%;
  margin-top: -50px; 
  margin-bottom: 15px; 
  margin-left: 45px; 
  }
`;

export const Credit = styled.h4`
  color: ${(props) => props.theme.mainColor};
  text-align: right;
  font-size: 250%;
  margin-top: -100px; 
  margin-right: 45px; 
  }
`;

export const CurrentRate = styled.p`
  color: ${(props) => props.theme.secondaryColor};
  text-align: center;
  margin-top: 10px; 

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
  display: "flex"
  justify-content: space-around;
  margin-top: 100px;
  }
`;

export const PurchasesStyled = styled.div`
  display: "flex"
  justify-content: space-around;
 
  }
`;
