import React from 'react';
import styled from 'styled-components';
import LogoProduct from '../assets/Logos.png';
import LogoEngineering from '../assets/image 6.png';
import IconElect from '../assets/icon/icon_electronic_circuit.svg';
import IconCompass from '../assets/icon/icon_compass.svg';

const StyledForTeams = styled.div`
   display: flex;
   flex-direction: column;
   margin: auto;
   max-width: 960px;
`;

const StyledProduct = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   margin-bottom: 120px;
   gap: 80px;
`;

const StyledEngineering = styled(StyledProduct)`
   flex-direction: row-reverse;
`;

const Image = styled.img`
   width: 450px;
   height: 100%;
`;

const StyledContent = styled.div`
   display: flex;
   flex-direction: column;

   h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;

      color: #160637;
      margin-top: 24px;
   }

   p {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      color: #8989a2;
      margin-top: 24px;
   }
`;

const Tag = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   margin-right: auto;
   padding: 8px 16px;

   background-color: #f7f1ff;
   border-radius: 20px;

   h1 {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;

      color: #722ed1;
   }
`;

const Icon = styled.img`
   width: 24px;
   height: auto;
   margin-right: 12px;
`;

const ForTeams = () => {
   return (
      <StyledForTeams>
         <StyledProduct>
            <Image src={LogoProduct} alt="logoProduct" />
            <StyledContent>
               <Tag>
                  <Icon src={IconElect} alt="iconElect" />
                  <h1>For Product Teams</h1>
               </Tag>
               <h2>Launch with the best stack</h2>
               <p>A centralized platform that integrates zillions of data sources using Big Data ELT (Extract, Load & Transform) that leaves no data behind</p>
            </StyledContent>
         </StyledProduct>

         <StyledEngineering>
            <Image src={LogoEngineering} alt="logoEngineering" />
            <StyledContent>
               <Tag>
                  <Icon src={IconCompass} alt="iconCompass" />
                  <h1>For Engineering Teams</h1>
               </Tag>
               <h2>Data-driven pipelines in minutes</h2>
               <p>Maintenance-free data pipelines with quick set-up and straight-forward deployments that are powered by a modern & scalable platform.</p>
            </StyledContent>
         </StyledEngineering>
      </StyledForTeams>
   );
};

export default ForTeams;
