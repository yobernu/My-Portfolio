import { BsLinkedin, BsTwitter, BsGithub, BsTelegram } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';

const socials = [
  {
    id: 1,
    name: "Twitter",
    link: 'https://x.com/yoseph4043',
    icon: BsTwitter,
  },
  {
    id: 2,
    name: "LinkedIn",
    link: 'https://www.linkedin.com/in/yoseph-n-berhanu/',
    icon: BsLinkedin,
  },
  {
    id: 3,
    name: "GitHub",
    link: 'https://github.com/yobernu',
    icon: BsGithub,
  },
  {
    id: 4,
    name: "LeetCode",
    link: 'https://leetcode.com/yobernu',
    icon: SiLeetcode,
  },
  {
    id: 5,
    name: "Telegram",
    link: 'https://t.me/@Yoseph_B',
    icon: BsTelegram,
  },
];

export default socials;
