import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path fillRule="evenodd" clipRule="evenodd" d="M3 1C1.89543 1 1 1.89543 1 3V21C1 22.1046 1.89543 23 3 23H21C22.1046 23 23 22.1046 23 21V3C23 1.89543 22.1046 1 21 1H3ZM4.91204 6.75638H6.65018V5.01824C6.65018 4.53788 7.03889 4.14917 7.51925 4.14917C7.99962 4.14917 8.38832 4.53788 8.38832 5.01824V6.75638H10.1265C10.6068 6.75638 10.9955 7.14509 10.9955 7.62545C10.9955 8.10582 10.6068 8.49452 10.1265 8.49452H8.38832V10.2327C8.38832 10.713 7.99962 11.1017 7.51925 11.1017C7.03889 11.1017 6.65018 10.713 6.65018 10.2327V8.49452H4.91204C4.43168 8.49452 4.04297 8.10582 4.04297 7.62545C4.04297 7.14509 4.43168 6.75638 4.91204 6.75638ZM19.1309 8.49449H13.8586C13.3782 8.49449 12.9895 8.10578 12.9895 7.62542C12.9895 7.14505 13.3782 6.75635 13.8586 6.75635H19.1309C19.6113 6.75635 20 7.14505 20 7.62542C20 8.10578 19.6113 8.49449 19.1309 8.49449ZM19.1309 15.7029H13.8586C13.3782 15.7029 12.9895 15.3142 12.9895 14.8338C12.9895 14.3534 13.3782 13.9647 13.8586 13.9647H19.1309C19.6113 13.9647 20 14.3534 20 14.8338C20 15.3142 19.6113 15.7029 19.1309 15.7029ZM13.8586 19.1791H19.1309C19.6113 19.1791 20 18.7904 20 18.3101C20 17.8297 19.6113 17.441 19.1309 17.441H13.8586C13.3782 17.441 12.9895 17.8297 12.9895 18.3101C12.9895 18.7904 13.3782 19.1791 13.8586 19.1791ZM9.97712 19.0298C10.3166 18.6903 10.3166 18.1403 9.97712 17.8009L8.74819 16.5719L9.97712 15.343C10.3166 15.0036 10.3166 14.4536 9.97712 14.1141C9.63766 13.7746 9.08765 13.7746 8.74819 14.1141L7.51927 15.343L6.29034 14.1141C5.95088 13.7746 5.40088 13.7746 5.06142 14.1141C4.72196 14.4536 4.72196 15.0036 5.06142 15.343L6.29034 16.5719L5.06142 17.8009C4.72196 18.1403 4.72196 18.6903 5.06142 19.0298C5.40088 19.3692 5.95088 19.3692 6.29034 19.0298L7.51927 17.8009L8.74819 19.0298C9.08765 19.3692 9.63766 19.3692 9.97712 19.0298Z"/>
    </Svg>
  );
};

export default Icon;
