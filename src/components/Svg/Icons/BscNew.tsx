import React from "react";
import Svg from "../Svg";
import {SvgProps} from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 96 96" {...props}>
      <circle cx="48" cy="48" r="48" fill="url(#paint0_linear_425_18017)"/>
      <path
        d="M37.1865 28.2572L30.6206 24.4412L48.4798 14L66.3917 24.4412L59.8257 28.2572L48.4798 21.6851L37.1865 28.2572ZM71.0666 34.8293V42.5145L77.6325 38.6984V31.0133L71.0666 27.1442L64.5007 30.9603L71.0666 34.8293ZM41.9139 31.0133L48.4798 34.8293L55.0457 31.0133L48.4798 27.1442L41.9139 31.0133ZM66.3917 37.5854L59.8257 33.7693L48.4798 40.3414L37.1865 33.7693L30.6206 37.5854V45.2705L41.9139 51.8426V64.9868L48.4798 68.8029L55.0457 64.9868V51.8426L66.3917 45.2705V37.5854ZM71.0666 61.1708L59.7732 67.7429V75.428L77.685 64.9868V44.1575L71.0666 48.0266V61.1708ZM59.7732 62.2838L66.3391 58.4677V50.7296L59.7732 54.5457V62.2838ZM41.9139 70.4989V78.1841L48.4798 82.0001L55.0457 78.1841V70.4989L48.4798 74.315L41.9139 70.4989ZM19.2747 38.6984L25.8406 42.5145V34.8293L32.4065 31.0133L25.8931 27.1442L19.3272 30.9603V38.6984H19.2747ZM25.8931 48.0266L19.3272 44.2105V65.0398L37.239 75.481V67.7959L25.8931 61.1708V48.0266ZM37.1865 54.5987L30.6206 50.7826V58.4677L37.1865 62.2838V54.5987Z"
        fill="#14151A"/>
      <defs>
        <linearGradient id="paint0_linear_425_18017" x1="48" y1="0" x2="48" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F0B90B"/>
          <stop offset="1" stopColor="#FFD349"/>
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;