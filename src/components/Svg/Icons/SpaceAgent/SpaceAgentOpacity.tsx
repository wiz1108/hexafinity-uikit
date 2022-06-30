import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.40393 20.2407C11.1402 19.0167 13.0976 17.3617 15.2297 15.2296C17.362 13.0974 19.0171 11.1405 20.2412 9.40491C20.4298 10.1296 20.5276 10.8812 20.5276 11.6429C20.5276 13.9992 19.5916 16.259 17.9254 17.9252C16.2592 19.5914 13.9994 20.5275 11.643 20.5275C10.881 20.5275 10.129 20.4296 9.40393 20.2407Z"
      />
      <path d="M17.0913 4.62608C17.3632 4.83762 17.5549 5.13546 17.6348 5.47052C17.7148 5.80558 17.6782 6.15788 17.5311 6.46938C16.6782 8.28304 14.9996 10.5707 12.7853 12.7851C10.5619 15.0085 8.27969 16.6871 6.46776 17.5351C6.15712 17.6813 5.80605 17.7176 5.47206 17.6381C5.13808 17.5586 4.841 17.3681 4.62949 17.0977C3.30009 15.3889 2.6404 13.2535 2.77436 11.0927C2.90832 8.93181 3.82671 6.89425 5.35699 5.36277C6.88727 3.83128 8.92412 2.9113 11.0849 2.77565C13.2456 2.63999 15.3815 3.29801 17.0913 4.62608Z" />
      <path
        opacity="0.48"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.43958 15.0567C-2.81446 24.3005 3.61541 26.8439 15.2297 15.2296C26.8541 3.60522 24.2953 -2.8068 15.0567 3.44086C15.779 3.74164 16.4638 4.13876 17.0913 4.6261C17.3631 4.83764 17.5548 5.13547 17.6348 5.47054C17.7147 5.8056 17.6782 6.1579 17.5311 6.4694C16.6782 8.28306 14.9996 10.5708 12.7852 12.7852C10.5619 15.0085 8.27965 16.6871 6.46772 17.5351C6.15708 17.6813 5.806 17.7176 5.47202 17.6381C5.13804 17.5587 4.84095 17.3681 4.62945 17.0977C4.13997 16.4685 3.74129 15.7815 3.43958 15.0567Z"
      />
    </Svg>
  );
};

export default Icon;
