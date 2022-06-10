import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg {...props} viewBox="0 0 40 40">
      <rect width="40" height="40" rx="8" fill="#1263F1" />
      <path
        opacity="0.48"
        d="M30.3951 20.8838H22.7704C22.4372 20.8838 22.1655 21.1554 22.1655 21.4886C22.1655 21.6583 22.2376 21.8111 22.3501 21.9214L27.7191 27.2904C27.8293 27.4092 27.9887 27.4836 28.1627 27.4836C28.3727 27.4836 28.5573 27.3774 28.6656 27.2162C29.9856 25.684 30.8344 23.738 30.9873 21.5968C30.9958 21.5607 31 21.5246 31 21.4885C31 21.1554 30.7305 20.8838 30.3951 20.8838Z"
        fill="white"
      />
      <path
        opacity="0.48"
        d="M20.4678 9.9231C20.1346 9.92513 19.8651 10.1947 19.8651 10.5279V19.0015C19.8651 19.3369 20.1346 19.6085 20.4678 19.6085H28.9436C29.2769 19.6085 29.5484 19.3369 29.5484 19.0015C29.2491 14.125 25.3465 10.2224 20.4678 9.9231Z"
        fill="white"
      />
      <path
        d="M25.126 26.7962L18.8742 20.5445C18.7681 20.4362 18.7045 20.2855 18.7045 20.1221L18.7023 11.2919C18.7023 10.9587 18.4328 10.6892 18.0996 10.6892C13.0213 10.9991 8.99988 15.2178 8.99988 20.3726C8.99988 25.731 13.344 30.0771 18.7023 30.0771C21.147 30.0771 23.3794 29.1731 25.0856 27.6811C25.2172 27.5707 25.3 27.4053 25.3 27.2207C25.3 27.0572 25.2342 26.9065 25.126 26.7962Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;