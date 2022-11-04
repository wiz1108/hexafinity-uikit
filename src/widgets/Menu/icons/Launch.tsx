import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M2.97198 8.12932L6.8621 6.75698C6.05892 7.83821 5.36912 8.99922 4.80359 10.2217L2.97198 8.12932ZM0.269844 8.35514L3.87306 12.4722L3.35161 13.7769C3.27225 13.9749 3.25269 14.1918 3.29535 14.4008C3.338 14.6098 3.441 14.8018 3.59161 14.9528L3.93524 15.2954C2.07636 17.3899 1.05092 19.5815 0.0560296 22.564C-0.00807074 22.7562 -0.0173732 22.9625 0.0291649 23.1597C0.075703 23.3569 0.176243 23.5372 0.319515 23.6805C0.462787 23.8238 0.64313 23.9243 0.840331 23.9708C1.03753 24.0174 1.2438 24.0081 1.43601 23.944C4.4185 22.9491 6.6101 21.9236 8.70462 20.0648L9.04716 20.4073C9.19812 20.5581 9.38998 20.6613 9.599 20.7041C9.80802 20.747 10.025 20.7276 10.2231 20.6484L11.5278 20.1269L15.6449 23.7302C15.779 23.8476 15.9398 23.9304 16.1134 23.9713C16.2869 24.0122 16.4678 24.0099 16.6402 23.9647C16.8127 23.9195 16.9714 23.8327 17.1025 23.712C17.2337 23.5912 17.3332 23.4401 17.3925 23.272L20.6499 14.043C22.8134 11.4829 24.0003 8.23914 24 4.88719V1.09089C24 0.801569 23.8851 0.524096 23.6805 0.319515C23.4759 0.114933 23.1984 1.39272e-07 22.9091 1.39272e-07H19.1128C15.7614 -0.000469339 12.518 1.18602 9.95805 3.34904L0.729109 6.60753C0.561158 6.66683 0.410282 6.76636 0.289663 6.89742C0.169043 7.02848 0.0823483 7.18707 0.0371517 7.35936C-0.00804493 7.53164 -0.0103687 7.71238 0.0303837 7.88577C0.071136 8.05916 0.153725 8.21993 0.270935 8.35404L0.269844 8.35514ZM2.92944 21.0706C3.61452 19.4168 4.3825 18.1012 5.48103 16.8412L7.15882 18.519C5.89884 19.6175 4.58323 20.3855 2.92944 21.0706ZM10.0813 18.3564L9.49878 17.7739L6.22611 14.5012L5.64357 13.9187L6.41811 11.9823C7.1289 10.206 8.12692 8.5586 9.37224 7.10607L10.0006 6.3719C11.1273 5.0575 12.5251 4.00246 14.0979 3.2792C15.6708 2.55593 17.3816 2.18156 19.1128 2.18178H21.8182V4.88719C21.8184 6.6184 21.4441 8.32916 20.7208 9.90205C19.9975 11.4749 18.9425 12.8727 17.6281 13.9994L16.8939 14.6278C15.4414 15.873 13.794 16.8711 12.0177 17.5819L10.0813 18.3564ZM15.8707 21.028L13.7784 19.1975C15.0008 18.632 16.1618 17.9422 17.243 17.139L15.8707 21.028ZM15.2729 7.63624C15.2729 7.34692 15.3878 7.06944 15.5924 6.86486C15.797 6.66028 16.0744 6.54535 16.3638 6.54535C16.6531 6.54535 16.9306 6.66028 17.1351 6.86486C17.3397 7.06944 17.4547 7.34692 17.4547 7.63624C17.4547 7.92556 17.3397 8.20303 17.1351 8.40761C16.9306 8.6122 16.6531 8.72713 16.3638 8.72713C16.0744 8.72713 15.797 8.6122 15.5924 8.40761C15.3878 8.20303 15.2729 7.92556 15.2729 7.63624ZM16.3638 4.36356C15.4958 4.36356 14.6634 4.70836 14.0496 5.32211C13.4359 5.93585 13.0911 6.76827 13.0911 7.63624C13.0911 8.50421 13.4359 9.33662 14.0496 9.95037C14.6634 10.5641 15.4958 10.9089 16.3638 10.9089C17.2317 10.9089 18.0641 10.5641 18.6779 9.95037C19.2916 9.33662 19.6364 8.50421 19.6364 7.63624C19.6364 6.76827 19.2916 5.93585 18.6779 5.32211C18.0641 4.70836 17.2317 4.36356 16.3638 4.36356Z" fill="white" fill-opacity="0.7" />
    </Svg>
  );
};

export default Icon;