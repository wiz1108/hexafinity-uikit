import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM8.11089 8.11091C8.50141 7.72039 9.13458 7.72039 9.5251 8.11091L12 10.5858L14.4748 8.11091C14.8654 7.72039 15.4985 7.72039 15.8891 8.11091C16.2796 8.50144 16.2796 9.1346 15.8891 9.52513L13.4142 12L15.8891 14.4749C16.2796 14.8654 16.2796 15.4986 15.8891 15.8891C15.4985 16.2796 14.8654 16.2796 14.4748 15.8891L12 13.4142L9.5251 15.8891C9.13458 16.2796 8.50141 16.2796 8.11089 15.8891C7.72036 15.4986 7.72036 14.8654 8.11089 14.4749L10.5858 12L8.11089 9.52513C7.72036 9.1346 7.72036 8.50144 8.11089 8.11091Z"
      />
    </Svg>
  );
};

export default Icon;