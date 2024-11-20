import { BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { BsTelegram } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';


const socials = [
    { 
        id: 1,
        name: "Twitter", 
        link: 'https://twitter.com', 
        img: {BsTwitter} },
    { 
        id: 2,
        name: "Linkedin", 
        link: 'https://linkedin.com',
        img: {BsLinkedin}},
    { 
        id: 3,
        name: "Github", 
        link: "https://github.com'", 
        img: {BsGithub} },
    { 
        id: 4,
        name: "leetcode", 
        link: "https://leetcode.com'",
        img: {SiLeetcode} },
    { 
        id: 5,
        name: "telegram", 
        link: "https://telegram.com'",
        img: {SiLeetcode} } 
  ];

  export default socials;