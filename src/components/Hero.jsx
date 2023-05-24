import React from 'react';
import styled from 'styled-components';
import logo from '../assets/Logo.png';
import logoimg from '../assets/image.svg';
import Brightness from '../assets/Brightness.svg';

const StyledHero = styled.div`
   position: relative;
`;

const StyledGroup = styled.div`
   max-width: 960px;
   align-items: center;
   margin: auto;

   .Content {
      display: flex;
      margin: 30px 0px;
      padding: 60px 0px;
      align-items: center;
   }
`;

const StyledNav = styled.nav`
   display: flex;
   margin-top: 19px;
   justify-content: space-between;

   img {
      width: 48px;
      height: 48px;
   }

   div {
      display: flex;
      align-items: center;
   }

   ul {
      display: flex;
      align-items: flex-end;
      list-style: none;
   }

   li {
      margin-right: 40px;
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;

      &:hover {
         cursor: pointer;
         color: #722ed1;
      }
   }
`;

const Button = styled.button`
   padding: 12px 24px;
   border-radius: 23px;
   border: 1px solid #722ed1;
   color: #722ed1;
   background-color: #ffffff;
`;

const StyledButton = styled(Button)`
   color: ${(props) => (props.$primary ? '#ffffff' : '#722ed1')};
   background-color: ${(props) => (props.$primary ? '#722ed1' : '#ffffff')};
   margin-right: ${(props) => (props.$primary ? '16px' : '0px')};
   border: none;
`;

const StyledContent = styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;
   align-items: flex-start;
   padding: 0px;
   margin-right: 16px;

   h2 {
      margin-top: 24px;
      font-weight: 700;
      font-size: 48px;
      line-height: 48px;
   }

   p {
      margin: 24px 0px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      opacity: 0.5;
   }
`;

const StyledTag = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 8px 16px;

   background: #f7f1ff;
   border-radius: 20px;

   img {
      width: 16px;
      height: 16px;
      margin-right: 12px;
   }

   h1 {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      color: #722ed1;
   }
`;

const StyledImage = styled.img`
   display: flex;
   flex: 1;
`;

const Background = styled.div`
   position: absolute;
   top: 0px;
   width: 100%;
   height: 100%;
   z-index: -1;
   transform: skew(0deg, -4deg);
   background: linear-gradient(180deg, #ffffff 0%, #e2f1ff 100%);
`;

const Hero = () => {
   return (
      <StyledHero>
         <StyledGroup>
            <StyledNav>
               <img src={logo} alt="logo" />
               <div>
                  <ul>
                     <li>About</li>
                     <li>Pricing</li>
                     <li>Contact Us</li>
                     <li>Login</li>
                  </ul>
                  <Button>Start free trial</Button>
               </div>
            </StyledNav>

            <div className="Content">
               <StyledContent>
                  <StyledTag>
                     <img src={Brightness} alt="Brightness" />
                     <h1>v3.1 released. Learn more</h1>
                  </StyledTag>
                  <h2>
                     Your data with
                     <br />
                     real-time analytics
                  </h2>
                  <p>Harness the potential of Big Data Analytics & Cloud Services and become a data-driven organization with Needle tail</p>
                  <div>
                     <StyledButton $primary>Start free trial</StyledButton>
                     <StyledButton>Learn more</StyledButton>
                  </div>
               </StyledContent>
               <StyledImage src={logoimg} alt="logoimg" />
            </div>
         </StyledGroup>
         <Background />
      </StyledHero>
   );
};

export default Hero;
