import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g clip-path="url(#clip0_170_10735)">
        <path d="M17.0002 14C17.0002 14.2652 16.8949 14.5196 16.7074 14.7071C16.5198 14.8947 16.2655 15 16.0002 15H8.00024C7.73503 15 7.48067 14.8947 7.29314 14.7071C7.1056 14.5196 7.00024 14.2652 7.00024 14C7.00024 13.7348 7.1056 13.4805 7.29314 13.2929C7.48067 13.1054 7.73503 13 8.00024 13H16.0002C16.2655 13 16.5198 13.1054 16.7074 13.2929C16.8949 13.4805 17.0002 13.7348 17.0002 14ZM13.0002 17H8.00024C7.73503 17 7.48067 17.1054 7.29314 17.2929C7.1056 17.4805 7.00024 17.7348 7.00024 18C7.00024 18.2652 7.1056 18.5196 7.29314 18.7071C7.48067 18.8947 7.73503 19 8.00024 19H13.0002C13.2655 19 13.5198 18.8947 13.7074 18.7071C13.8949 18.5196 14.0002 18.2652 14.0002 18C14.0002 17.7348 13.8949 17.4805 13.7074 17.2929C13.5198 17.1054 13.2655 17 13.0002 17ZM22.0002 10.485V19C21.9987 20.3256 21.4714 21.5965 20.534 22.5338C19.5967 23.4711 18.3258 23.9984 17.0002 24H7.00024C5.67465 23.9984 4.4038 23.4711 3.46646 22.5338C2.52913 21.5965 2.00183 20.3256 2.00024 19V5.00002C2.00183 3.67443 2.52913 2.40358 3.46646 1.46624C4.4038 0.528905 5.67465 0.00161091 7.00024 2.30487e-05H11.5152C12.4349 -0.00234388 13.3458 0.177611 14.1955 0.529482C15.0451 0.881354 15.8166 1.39816 16.4652 2.05002L19.9492 5.53602C20.6015 6.18426 21.1186 6.95548 21.4707 7.805C21.8227 8.65451 22.0027 9.56545 22.0002 10.485ZM15.0512 3.46402C14.7365 3.15918 14.3832 2.89695 14.0002 2.68402V7.00002C14.0002 7.26524 14.1056 7.51959 14.2931 7.70713C14.4807 7.89467 14.735 8.00002 15.0002 8.00002H19.3162C19.1032 7.61721 18.8406 7.26417 18.5352 6.95002L15.0512 3.46402ZM20.0002 10.485C20.0002 10.32 19.9682 10.162 19.9532 10H15.0002C14.2046 10 13.4415 9.68395 12.8789 9.12134C12.3163 8.55873 12.0002 7.79567 12.0002 7.00002V2.04702C11.8382 2.03202 11.6792 2.00002 11.5152 2.00002H7.00024C6.20459 2.00002 5.44153 2.31609 4.87892 2.8787C4.31631 3.44131 4.00024 4.20437 4.00024 5.00002V19C4.00024 19.7957 4.31631 20.5587 4.87892 21.1213C5.44153 21.684 6.20459 22 7.00024 22H17.0002C17.7959 22 18.559 21.684 19.1216 21.1213C19.6842 20.5587 20.0002 19.7957 20.0002 19V10.485Z" fill="white" fill-opacity="0.7" />
      </g>
      <defs>
        <clipPath id="clip0_170_10735">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
