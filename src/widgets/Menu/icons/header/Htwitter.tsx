import React from "react";
import Svg from "../../../../components/Svg/Svg";
import { SvgProps } from "../../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M17.945 4.0525C18.7583 3.475 19.4425 2.75417 20 1.92417V1.92333C19.2558 2.24917 18.4642 2.46583 17.6375 2.57083C18.4875 2.06333 19.1367 1.26583 19.4417 0.305C18.6492 0.7775 17.7742 1.11083 16.8417 1.2975C16.0892 0.495833 15.0167 0 13.8467 0C11.5767 0 9.74917 1.8425 9.74917 4.10083C9.74917 4.42583 9.77667 4.73833 9.84417 5.03583C6.43583 4.86917 3.41917 3.23583 1.3925 0.746667C1.03917 1.36083 0.830833 2.06333 0.830833 2.81917C0.830833 4.23917 1.56167 5.4975 2.6525 6.22667C1.99333 6.21417 1.3475 6.0225 0.8 5.72167V5.76667C0.8 7.75917 2.22083 9.41417 4.085 9.79583C3.75083 9.8875 3.3875 9.93083 3.01 9.93083C2.7475 9.93083 2.4825 9.91583 2.23417 9.86084C2.765 11.4842 4.27333 12.6783 6.065 12.7175C4.67 13.8083 2.89833 14.4658 0.980833 14.4658C0.645 14.4658 0.3225 14.4508 0 14.41C1.81667 15.5808 3.96833 16.25 6.29 16.25C13.5258 16.25 18.2417 10.2133 17.945 4.0525Z" fill="#070913" />
    </Svg>
  );
};

export default Icon;