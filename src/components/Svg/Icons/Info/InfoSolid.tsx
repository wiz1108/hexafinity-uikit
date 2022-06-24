import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.40891 5.40891 0 12 0C18.5911 0 24 5.40891 24 12C24 18.5911 18.5911 24 12 24C5.40891 24 0 18.5911 0 12ZM13.2005 16.802C13.2005 17.4638 12.6618 18.0025 12 18.0025C11.3382 18.0025 10.7995 17.4638 10.7995 16.802V10.7995C10.7995 10.1377 11.3382 9.59903 12 9.59903C12.6618 9.59903 13.2005 10.1377 13.2005 10.7995V16.802ZM12 8.39854C11.3382 8.39854 10.7995 7.85984 10.7995 7.19805C10.7995 6.53626 11.3382 5.99756 12 5.99756C12.6618 5.99756 13.2005 6.53626 13.2005 7.19805C13.2005 7.85984 12.6618 8.39854 12 8.39854Z"/>
    </Svg>
  );
};

export default Icon;
