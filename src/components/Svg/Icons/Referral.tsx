import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 40 40" fill="none" {...props}>
      <rect width="40" height="40" rx="8" fill="#1263F1" />
      <circle cx="19.9999" cy="18.1364" r="3.63636" fill="white" />
      <path
        d="M12.7273 28.0758C12.7273 25.398 14.898 23.2273 17.5758 23.2273H22.4243C25.102 23.2273 27.2727 25.398 27.2727 28.0758C27.2727 29.4147 26.1874 30.5 24.8485 30.5H15.1515C13.8127 30.5 12.7273 29.4147 12.7273 28.0758Z"
        fill="white"
      />
      <g opacity="0.48">
        <circle cx="26.0002" cy="12.2505" r="2.72727" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.1995 21.5233C24.0983 20.6739 24.6591 19.4706 24.6591 18.1364C24.6591 17.3938 24.4854 16.6917 24.1764 16.0687C24.1777 16.0687 24.179 16.0687 24.1803 16.0687H27.0894C29.4993 16.0687 31.453 18.0224 31.453 20.4324C31.453 21.0349 30.9646 21.5233 30.3621 21.5233H23.1995Z"
          fill="white"
        />
      </g>
      <g opacity="0.48">
        <circle cx="14.0002" cy="12.2505" r="2.72727" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.8241 16.0687C15.8221 16.0687 15.8201 16.0687 15.8181 16.0687H12.909C10.4991 16.0687 8.54541 18.0224 8.54541 20.4324C8.54541 21.0349 9.03383 21.5233 9.63632 21.5233H16.801C15.9022 20.6739 15.3413 19.4706 15.3413 18.1364C15.3413 17.3938 15.515 16.6917 15.8241 16.0687Z"
          fill="white"
        />
      </g>
    </Svg>
  );
};

export default Icon;
