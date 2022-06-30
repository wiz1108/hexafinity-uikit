import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8946 15.9726C17.1013 14.7659 18.8803 12.8609 20.4847 10.769C20.5133 11.0582 20.5277 11.3497 20.5277 11.6428C20.5277 13.9991 19.5917 16.259 17.9255 17.9252C16.2593 19.5913 13.9995 20.5274 11.6431 20.5274C11.3488 20.5274 11.056 20.5128 10.7657 20.484C13.1296 18.6112 14.6961 17.1711 15.8946 15.9726Z"
      />
      <path d="M17.0913 4.62608C17.3632 4.83762 17.5549 5.13546 17.6348 5.47052C17.7148 5.80558 17.6782 6.15788 17.5311 6.46938C16.6782 8.28304 14.9996 10.5707 12.7853 12.7851C10.5619 15.0085 8.27969 16.6871 6.46776 17.5351C6.15712 17.6813 5.80605 17.7176 5.47206 17.6381C5.13808 17.5586 4.841 17.3681 4.62949 17.0977C3.30009 15.3889 2.6404 13.2535 2.77436 11.0927C2.90832 8.93181 3.82671 6.89425 5.35699 5.36277C6.88727 3.83128 8.92412 2.9113 11.0849 2.77565C13.2456 2.63999 15.3815 3.29801 17.0913 4.62608Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.79699 16.0551C-2.33146 24.4693 4.04521 26.4141 15.2297 15.2296C26.4236 4.03575 24.4654 -2.32469 16.0553 2.7984C16.6342 3.08732 17.187 3.43422 17.7047 3.83633L17.0913 4.62608L17.7054 3.83686C18.1567 4.18797 18.4748 4.68231 18.6075 5.23843C18.7402 5.79431 18.6796 6.37877 18.4358 6.89562C17.5183 8.8462 15.7583 11.2264 13.4924 13.4922C11.2184 15.7662 8.8428 17.5276 6.89167 18.4408C6.37643 18.6827 5.79434 18.7427 5.24056 18.611C4.68611 18.479 4.19293 18.1627 3.84181 17.7137L3.84022 17.7117C3.43584 17.1919 3.08716 16.6367 2.79699 16.0551Z"
      />
    </Svg>
  );
};

export default Icon;
