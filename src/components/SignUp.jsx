import React from 'react';
import styled from 'styled-components';
import LogoAccenture from '../assets/logo_accenture.svg';
import LogoReact from '../assets/logo_react.svg';
import LogoAirbnb from '../assets/logo_airbnb.svg';
import LogoSky from '../assets/logo_sky.svg';
import BtnGoogleSignIn from '../assets/btn_google_signin.svg';

const StyledSignUp = styled.div`
   display: flex;
   max-width: 960px;
   margin: 60px auto;
   padding: 60px 0px;
   align-items: center;
   gap: 30px;
`;

const StyledGroup = styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;

   h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;

      color: #160637;
   }
`;
const Trusted = styled.div`
   display: flex;
   margin-top: 35px;
   align-items: center;
   justify-content: space-between;

   p {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      color: #8989a2;
   }
`;

const Line = styled.span`
   display: flex;
   width: ${(props) => (props.$width ? '100%' : '144px')};
   height: 1px;
   border: 1px solid #d6d6d6;
`;

const ClientLogo = styled.ul`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
   align-items: center;
   margin-top: 24px;

   li {
      list-style: none;
      margin: 15px 10px;

      &:nth-child(1),
      &:nth-child(3) {
         margin-right: 48px;
      }
   }
`;

const SignUpForm = styled.div`
   position: relative;
   display: flex;
   flex: 1;
   flex-direction: column;
   margin: 0px 24px;
   padding: 32px 40px;

   background-color: #ffffff;

   box-shadow: 4px 4px 12px rgba(137, 137, 162, 0.122);
   border-radius: 8px;
   gap: 16px;

   h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 32px;
      text-align: center;

      color: #160637;
   }

   & > span {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      text-align: center;

      color: #000000;
   }
`;

const Button = styled.button`
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 24px;
   text-align: center;
   padding: 12px;
   border: none;
   border-radius: 4px;

   color: #ffffff;
   background-color: #722ed1;
   filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.161));
`;

const Input = styled.input`
   font-style: normal;
   font-weight: 500;
   font-size: 16px;
   line-height: 16px;

   color: #8989a2;

   padding: 16px;
   border: 1px solid #d9d9d9;
   border-radius: 4px;
`;

const InputEmail = styled(Input)`
   color: black;
`;

const InputPassword = styled(Input)`
   color: black;
`;

const SignIn = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 16px;

   img {
      width: 200px;
   }

   p {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;

      color: #8989a2;
   }

   span {
      color: #722ed1;
   }
`;

const Rectangle = styled.div`
   position: absolute;
   top: 24px;
   left: -24px;
   right: -24px;
   height: 100%;
   z-index: -1;

   border-radius: 4px;
   background-color: #f9f0ff;
`;

const SignUp = () => {
   const clientLogos = [LogoAccenture, LogoReact, LogoAirbnb, LogoSky];

   return (
      <StyledSignUp>
         <StyledGroup>
            <h2>See why the world’s best companies use Qubly to become truly data-driven.</h2>
            <Trusted>
               <Line />
               <p>Trusted by</p>
               <Line />
            </Trusted>
            <ClientLogo>
               {clientLogos.map((clientLogo, idx) => (
                  <li key={idx}>
                     <img src={clientLogo} alt="logo" />
                  </li>
               ))}
            </ClientLogo>
         </StyledGroup>
         <SignUpForm>
            <h1>Sign Up</h1>
            <Button>Start your free trial</Button>
            <InputEmail placeholder="Your primary email" type="email" />
            <InputPassword placeholder="Password" type="password" />
            <InputPassword placeholder="Re-type Password" type="password" />
            <span>OR</span>
            <SignIn>
               <img src={BtnGoogleSignIn} alt="btnGoogleSignIn" />
               <Line $width />
               <p>
                  Already have an account? <span>Login</span>
               </p>
            </SignIn>
            <Rectangle />
         </SignUpForm>
      </StyledSignUp>
   );
};

export default SignUp;
