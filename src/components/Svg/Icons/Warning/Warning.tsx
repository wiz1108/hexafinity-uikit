import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.7743 17.8436L13.3003 2.69073C12.7121 1.76987 11.2881 1.76965 10.6997 2.69072L2.22588 17.844L2.2058 17.8768C1.67816 18.7406 2.256 20 3.52167 20H20.478C21.7431 20 22.322 18.741 21.7941 17.8761L21.7743 17.8436ZM8.9767 1.67412C10.3407 -0.559522 13.6612 -0.556558 15.0233 1.67412L23.5013 16.8342C24.8938 19.1159 23.205 22 20.478 22H3.52167C0.792464 22 -0.893396 19.1136 0.499073 16.8342L8.9767 1.67412Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 5.99753C12.6618 5.99753 13.2005 6.53623 13.2005 7.19802V13.2005C13.2005 13.8623 12.6618 14.401 12 14.401C11.3382 14.401 10.7995 13.8623 10.7995 13.2005V7.19802C10.7995 6.53623 11.3382 5.99753 12 5.99753ZM10.7995 16.802C10.7995 16.1402 11.3382 15.6015 12 15.6015C12.6618 15.6015 13.2005 16.1402 13.2005 16.802C13.2005 17.4637 12.6618 18.0024 12 18.0024C11.3382 18.0024 10.7995 17.4637 10.7995 16.802Z"
      />
    </Svg>
  );
};

export default Icon;
