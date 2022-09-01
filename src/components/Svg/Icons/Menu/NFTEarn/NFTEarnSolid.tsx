import React from "react";
import Svg from "../../../Svg";
import { SvgProps } from "../../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6586 1.11454C15.3904 0.96182 15.0627 0.96182 14.7945 1.11454L7.90112 5.0397C7.62435 5.19729 7.45312 5.49338 7.45312 5.81439V13.6277C7.45312 13.9487 7.62435 14.2448 7.90112 14.4024L14.7945 18.3276C15.0627 18.4803 15.3904 18.4803 15.6586 18.3276L22.552 14.4024C22.8287 14.2448 23 13.9487 23 13.6277V5.81439C23 5.49338 22.8287 5.19729 22.552 5.0397L15.6586 1.11454ZM10.0528 11.7792V9.06991H10.0559L12.1185 11.7792H12.9879V7.4187H11.982V10.1248L9.92583 7.4187H9.04688V11.7792H10.0528ZM15.3308 11.7792V10.1728H17.0792V9.3232H15.3308V8.32286H17.3679V7.4187H14.3249V11.7792H15.3308ZM20.3328 8.32286V11.7792H19.3332V8.32286H18.1243V7.4187H21.5385V8.32286H20.3328Z"
      />
      <path d="M1 14.2414C1 12.5178 3.18493 11.0732 6.12855 10.6826V14.3549C6.12855 14.6873 6.30482 14.9942 6.59046 15.1591L10.696 17.5297C9.80072 17.7696 8.79322 17.9044 7.72788 17.9044C4.01303 17.9044 1 16.2653 1 14.2414Z" />
      <path d="M7.72788 18.9923C9.29422 18.9923 10.7352 18.701 11.8784 18.2124L13.1592 18.952C11.9352 19.8617 9.95858 20.4522 7.72788 20.4522C4.01131 20.4522 1 18.8131 1 16.7893V15.3557C1.01722 17.371 4.02251 18.9923 7.72788 18.9923Z" />
      <path d="M7.72788 21.5401C10.4701 21.5401 12.8282 20.6473 13.8763 19.366L14.4261 19.6835C14.1057 21.5447 11.2299 23 7.72788 23C4.01131 23 1 21.3609 1 19.3371V17.9035C1.01722 19.9188 4.02251 21.5401 7.72788 21.5401Z" />
    </Svg>
  );
};

export default Icon;