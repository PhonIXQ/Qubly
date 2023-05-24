import React from 'react';
import styled from 'styled-components';
import Profile from '../assets/profile.svg';
import LogoTonkean from '../assets/logo_Tonkean.svg';
import LogoBigSpring from '../assets/logo_BigSpring.svg';
import LogoClearbit from '../assets/logo_Clearbit.svg';
import LogoMine from '../assets/logo_Mine.svg';
import LogoShake from '../assets/logo_Shake.svg';

const StyledTestimial = styled.div`
   display: flex;
   position: relative;
   /* margin: 60px 0px; */
`;

const Frame = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 32px;

   max-width: 960px;
   margin: 100px auto;

   p {
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 32px;
      text-align: center;

      color: #160637;
   }

   h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      text-align: center;

      color: #000000;
   }

   span {
      width: 960px;
      border: 1px solid #dec9fa;
   }
`;

const Image = styled.img`
   width: 80px;
   height: 80px;
`;

const ClientLogo = styled.ul`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 90px;

   list-style: none;
`;

const Background = styled.div`
   position: absolute;
   width: 100%;
   height: 100%;
   transform: skew(0deg, -4deg);
   background: linear-gradient(175.54deg, #f9f0ff 25.81%, #e2f1ff 96.38%);
   opacity: 0.47;
`;

const Testimonial = () => {
   const clientLogos = [LogoTonkean, LogoBigSpring, LogoClearbit, LogoMine, LogoShake];

   return (
      <StyledTestimial>
         <Frame>
            <p>"What I love about Qubly is the easy way we can collaborate even if there is a lot of people involved in the process"</p>
            <Image src={Profile} alt="profile" />
            <h1>
               Guillaume Cabane CTO
               <br />@ BigSpring
            </h1>
            <span />
            <ClientLogo>
               {clientLogos.map((clientLogo, idx) => (
                  <li key={idx}>
                     <img src={clientLogo} alt="clientLogo" />
                  </li>
               ))}
            </ClientLogo>
         </Frame>
         <Background />
      </StyledTestimial>
   );
};

export default Testimonial;
