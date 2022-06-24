import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 3C0 1.34314 1.34315 0 3 0H21C22.6569 0 24 1.34315 24 3V21C24 22.6569 22.6569 24 21 24H3C1.34314 24 0 22.6569 0 21V3ZM3 2C2.44771 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44771 21.5523 2 21 2H3Z"/>
      <path d="M6.65018 6.75638H4.91204C4.43168 6.75638 4.04297 7.14509 4.04297 7.62545C4.04297 8.10582 4.43168 8.49452 4.91204 8.49452H6.65018V10.2327C6.65018 10.713 7.03889 11.1017 7.51925 11.1017C7.99962 11.1017 8.38832 10.713 8.38832 10.2327V8.49452H10.1265C10.6068 8.49452 10.9955 8.10582 10.9955 7.62545C10.9955 7.14509 10.6068 6.75638 10.1265 6.75638H8.38832V5.01824C8.38832 4.53788 7.99962 4.14917 7.51925 4.14917C7.03889 4.14917 6.65018 4.53788 6.65018 5.01824V6.75638Z"/>
      <path d="M13.8586 8.49449H19.1309C19.6113 8.49449 20 8.10578 20 7.62542C20 7.14505 19.6113 6.75635 19.1309 6.75635H13.8586C13.3782 6.75635 12.9895 7.14505 12.9895 7.62542C12.9895 8.10578 13.3782 8.49449 13.8586 8.49449Z"/>
      <path d="M13.8586 19.1791H19.1309C19.6113 19.1791 20 18.7904 20 18.3101C20 17.8297 19.6113 17.441 19.1309 17.441H13.8586C13.3782 17.441 12.9895 17.8297 12.9895 18.3101C12.9895 18.7904 13.3782 19.1791 13.8586 19.1791Z"/>
      <path d="M13.8586 15.7029H19.1309C19.6113 15.7029 20 15.3142 20 14.8338C20 14.3534 19.6113 13.9647 19.1309 13.9647H13.8586C13.3782 13.9647 12.9895 14.3534 12.9895 14.8338C12.9895 15.3142 13.3782 15.7029 13.8586 15.7029Z"/>
      <path d="M9.97712 19.0298C10.3166 18.6903 10.3166 18.1403 9.97712 17.8009L8.74819 16.5719L9.97712 15.343C10.3166 15.0036 10.3166 14.4536 9.97712 14.1141C9.63766 13.7746 9.08765 13.7746 8.74819 14.1141L7.51927 15.343L6.29034 14.1141C5.95088 13.7746 5.40088 13.7746 5.06142 14.1141C4.72196 14.4536 4.72196 15.0036 5.06142 15.343L6.29034 16.5719L5.06142 17.8009C4.72196 18.1403 4.72196 18.6903 5.06142 19.0298C5.40088 19.3692 5.95088 19.3692 6.29034 19.0298L7.51927 17.8009L8.74819 19.0298C9.08765 19.3692 9.63766 19.3692 9.97712 19.0298Z"/>
    </Svg>
  );
};

export default Icon;
