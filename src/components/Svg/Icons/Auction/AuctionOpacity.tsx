import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M21.4891 9.03777C20.9786 8.5266 20.208 8.44183 19.6023 8.7666C18.8885 7.75867 18.0675 6.78117 17.1449 5.85964C16.2223 4.9373 15.2444 4.11659 14.2362 3.40222C14.5595 2.79507 14.4674 2.01831 13.9169 1.46796C13.2936 0.844014 12.2773 0.844014 11.6524 1.46796L6.36073 6.75714C5.73659 7.38109 5.73659 8.39703 6.36233 9.02257L6.40953 9.06976C6.72162 9.38175 7.13211 9.53773 7.54181 9.53773C7.80267 9.53773 8.06111 9.46734 8.2972 9.34093C9.5 11.5 12 13.5 13.6625 14.7045C13.3368 15.3109 13.4224 16.0804 13.9329 16.59L13.981 16.6388L13.9818 16.6396C14.2939 16.9516 14.7044 17.1083 15.1148 17.1083C15.5245 17.1083 15.935 16.9515 16.2471 16.6396L21.5379 11.3504C22.1621 10.7264 22.1621 9.7105 21.4891 9.03777Z"/>
        <path opacity="0.48" d="M9.82466 11.2584C6.77431 13.7222 2.99265 17.1124 2.59893 17.5059C1.80036 18.3035 1.80036 19.6026 2.59893 20.4009C2.99824 20.8 3.52235 21 4.04646 21C4.57057 21 5.0955 20.8 5.49481 20.4009C5.88849 20.0065 9.2789 16.226 11.7435 13.1767C11 12.5 10.5 12 9.82466 11.2584Z"/>
        <rect opacity="0.48" x="9" y="20" width="12" height="3" rx="1.5"/>
    </Svg>
  );
};

export default Icon;
