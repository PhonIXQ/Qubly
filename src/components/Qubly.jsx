import React from 'react';
import styled from 'styled-components';
import IconEye from '../assets/icon/icon_eye.svg';
import IconChartBar from '../assets/icon/icon_chart_bar.svg';
import IconNewsletter from '../assets/icon/icon_newsletter.svg';
import IconTimeline from '../assets/icon/icon_timeline.svg';

const StyledQubly = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   max-width: 960px;
   margin: 40px auto;
   padding: 80px 0px;
   /* align-item: center; */

   && > h2 {
      margin-top: 24px;
      font-weight: 700;
      font-size: 32px;
      line-height: 40px;
      text-align: center;
   }

   .pTag {
      margin: 24px auto;
      width: 672px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      text-align: center;

      color: #8989a2;
   }
`;

const StyledTag = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   padding: 8px 16px;
   margin: auto;

   background-color: #f7f1ff;
   border-radius: 20px;

   img {
      width: 24px;
      height: auto;
      margin-right: 12px;
   }

   h1 {
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      color: #722ed1;
   }
`;

const StyledFeatures = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;

   .Features {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 300px;
      gap: 16px;
   }

   img {
      width: 40px;
      height: 40px;
      text-align: center;
   }

   h2 {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;

      color: #160637;
   }

   p {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;

      text-align: center;
      color: #8989a2;
   }
`;

const Qubly = () => {
   const features = [
      {
         icon: IconChartBar,
         title: 'Valuable business insights',
         text: 'Collect processed & cleansed data that is ready to be analyzed to gather valuable business insights.',
      },
      {
         icon: IconNewsletter,
         title: 'Powerful Algorithms',
         text: 'With the help of powerful algorithms, quality rules & techniques, obtain simplified & enriched data.',
      },
      {
         icon: IconTimeline,
         title: 'Data in real-time',
         text: 'Collect data in real-time from multiple channels and move it into a data lake, in its original format.',
      },
   ];

   return (
      <StyledQubly>
         <StyledTag>
            <img src={IconEye} alt="iconEye" />
            <h1>Why Qubly</h1>
         </StyledTag>
         <h2>Get actionable insights from Big Data in 3 steps</h2>
         <p className="pTag">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

         <StyledFeatures>
            {features.map(({ icon, title, text }, i) => (
               <div key={i} className="Features">
                  <img src={icon} alt="Icon" />
                  <h2>{title}</h2>
                  <p>{text}</p>
               </div>
            ))}
         </StyledFeatures>
      </StyledQubly>
   );
};

export default Qubly;
