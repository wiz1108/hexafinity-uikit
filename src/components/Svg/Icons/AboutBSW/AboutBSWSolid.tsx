import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <g clipPath="url(#clip0_4035_33679)">
        <path d="M21.294 4.51562C20.4618 4.68013 19.6683 4.91238 19.0151 5.05753C17.5248 5.39138 16.1314 6.53326 15.8265 8.62347C15.5556 10.4911 16.1846 11.2943 15.9088 13.4668C15.4249 17.2601 11.7864 18.5665 10.0881 19.36C9.10592 19.8148 6.72057 20.8599 4.88196 21.6582C6.8754 23.1291 9.33333 24 11.9993 24C18.628 24 23.9987 18.6294 23.9987 12.0007C23.9987 9.17505 23.0213 6.5768 21.3859 4.53014C21.3569 4.5253 21.3278 4.52046 21.294 4.51562Z" />
        <path d="M10.6494 10.2382C11.5736 8.23988 11.2397 8.23504 11.9413 6.35772C12.8267 3.9772 15.5798 4.65459 16.3394 4.75619C17.5926 4.92554 17.9216 4.4804 20.5634 4.05462C20.694 4.03526 20.8198 4.01591 20.9456 4.0014C18.749 1.5483 15.5556 0 11.9993 0C7.2238 0 3.10144 2.78695 1.1709 6.82705C5.12875 7.80925 9.4011 9.94301 10.6494 10.2382ZM8.02698 2.09021C8.37535 2.14343 10.0688 4.24816 10.3881 9.6527C10.3881 9.6527 8.21084 9.13015 7.74152 8.00763C7.35444 7.08349 7.85764 5.86904 8.02698 2.09021ZM21.3666 4.50459C21.3714 4.51427 21.3811 4.51911 21.3859 4.52879C21.3569 4.52395 21.323 4.52395 21.294 4.51911C21.3182 4.50943 21.3424 4.50943 21.3666 4.50459ZM0 11.9993C0 11.0413 0.111284 10.1124 0.324176 9.22208C0.759636 9.58496 1.22413 9.98656 1.71765 10.4462C4.84329 13.3444 9.92849 15.633 11.7816 13.5041C11.7865 13.5089 11.7913 13.5089 11.7913 13.5138C11.4526 13.9589 10.1607 15.3669 7.69313 14.9314L3.79334 20.7521C1.46121 18.5651 0 15.454 0 11.9993Z" />
      </g>
      <defs>
        <clipPath id="clip0_4035_33679">
          <rect width="23.9987" height="24" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
