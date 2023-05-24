import React from 'react';
import styled from 'styled-components';
import Logo from '../assets/Logo.png';
import IconFacebook from '../assets/icon/icon_facebook.svg';
import IconTwitter from '../assets/icon/icon_twitter.svg';
import IconInstagram from '../assets/icon/icon_instagram.svg';
import IconSend from '../assets/icon/icon_send.svg';
import IconCopy from '../assets/icon/icon_copyright.svg';

const StyledFooter = styled.footer`
   display: flex;
   margin: 60px auto;
   padding-top: 60px;
   max-width: 960px;
`;

const Group29 = styled.div`
   max-width: 220px;

   img {
      width: 48px;
      height: 48px;
   }

   p {
      margin-top: 14px;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 20px;

      color: #160637;
   }
`;

const IconSocial = styled.ul`
   margin-top: 24px;
   display: flex;
   align-items: center;

   list-style: none;

   li > img {
      width: 16px;
      height: auto;
      margin-right: 12px;
      cursor: pointer;
   }
`;

const LinkFooter = styled.div`
   display: flex;
   margin-left: 40px;
   gap: 40px;

   div {
      display: flex;
      flex-direction: column;
   }

   h4 {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 16px;

      color: #160637;
   }

   ul {
      margin-top: 16px;
      list-style: none;
   }

   li {
      margin-top: 12px;
   }

   li > a {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 12px;
      text-decoration: none;

      color: #160637;

      &:hover {
         color: #722ed1;
      }
   }
`;

const Newsletter = styled.div`
   display: flex;
   flex-direction: column;

   .Group {
      margin-top: 24px;
      position: relative;

      img {
         position: absolute;
         right: 6px;
         top: 50%;
         transform: translate(-50%, -50%);

         &:hover {
            cursor: pointer;
         }
      }
   }
`;

const Input = styled.input`
   font-style: normal;
   font-weight: 500;
   font-size: 12px;
   line-height: 12px;

   color: #8989a2;
   background-color: #ffffff;

   padding: 12px 30px 12px 16px;
   border: 1px solid #d9d9d9;
   border-radius: 4px;
   border: none;

   filter: drop-shadow(0px 5px 9px rgba(0, 0, 0, 0.051));
`;

const Copyright = styled.div`
   display: flex;
   font-style: normal;
   font-weight: 700;
   font-size: 16px;
   line-height: 16px;
   align-items: center;
   justify-content: center;
   margin-bottom: 24px;

   color: #160637;

   h3 {
      margin-right: 8px;
   }

   h4 {
      margin-left: 8px;

      span > a {
         color: #722ed1;
         text-decoration: none;

         &:hover {
            color: #8989a2;
         }
      }
   }
`;

const Footer = () => {
   const socialIcons = [IconFacebook, IconTwitter, IconInstagram];

   const footerLinks = [
      {
         title: 'Product',
         links: [{ name: 'Connections' }, { name: 'Protocols' }, { name: 'Personas' }, { name: 'Integrations' }, { name: 'Catalog' }, { name: 'Pricing' }, { name: 'Security' }, { name: 'GDPR' }],
      },
      {
         title: 'For Developers',
         links: [{ name: 'Docs' }, { name: 'API' }, { name: 'Open Source' }, { name: 'Engineering Team' }],
      },
      {
         title: 'Company',
         links: [{ name: 'Careers' }, { name: 'Blog' }, { name: 'Press' }],
      },
      {
         title: 'Support',
         links: [{ name: 'Help Center' }, { name: 'Contact Us' }, { name: 'Security' }, { name: 'Bulletins' }, { name: 'Documentation' }, { name: 'Partner' }, { name: 'Portal' }],
      },
   ];
   return (
      <>
         <StyledFooter>
            <Group29>
               <img src={Logo} alt="logo" />
               <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat ut wisi enim ad minim</p>
               <IconSocial>
                  {socialIcons.map((socialIcon, idx) => (
                     <li key={idx}>
                        <img src={socialIcon} alt="socialIcons" />
                     </li>
                  ))}
               </IconSocial>
            </Group29>
            <LinkFooter>
               {footerLinks.map((footerLink) => (
                  <div key={footerLink.title}>
                     <h4>{footerLink.title}</h4>
                     <ul>
                        {footerLink.links.map((link, idx) => (
                           <li key={idx}>
                              <a href={link.name}>{link.name}</a>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
               <Newsletter>
                  <h4>Newsletter</h4>
                  <div className="Group">
                     <Input placeholder="Email" type="email" />
                     <img src={IconSend} alt="iconSend" />
                  </div>
               </Newsletter>
            </LinkFooter>
         </StyledFooter>
         <Copyright>
            <h3>Rahul Rao</h3>
            <img src={IconCopy} alt="iconCopy" />
            <h4>
               Built by{' '}
               <span>
                  <a href="https://github.com/PhonIXQ" target="_blank" rel="noreferrer">
                     PhonIXQ
                  </a>
               </span>
            </h4>
         </Copyright>
      </>
   );
};

export default Footer;
