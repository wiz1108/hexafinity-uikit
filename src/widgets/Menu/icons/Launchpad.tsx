import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M12.0057 9.10657C12.6406 9.10657 13.1553 8.59185 13.1553 7.95691C13.1553 7.32197 12.6406 6.80725 12.0057 6.80725C11.3707 6.80725 10.856 7.32197 10.856 7.95691C10.856 8.59185 11.3707 9.10657 12.0057 9.10657Z" fill="white"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H19.4059C13.3238 22 13.3238 17.6963 13.3238 17.0186L10.6599 17.0186C10.6355 17.092 10.6228 17.2284 10.606 17.4103C10.4913 18.6489 10.181 22 4.60579 22H4C2.89543 22 2 21.1046 2 20V4ZM15.4064 8.76029C15.4056 9.62603 15.4056 12.1611 15.4056 12.1611C15.4056 12.1611 17.1188 13.3027 17.4059 15.0633C17.4504 15.3359 17.2227 15.5615 16.9465 15.5615L7.06474 15.5615C6.7886 15.5615 6.56083 15.3358 6.60579 15.0634C6.89609 13.3043 8.62787 12.1718 8.62787 12.1718C8.62787 12.1718 8.60522 10.7941 8.60522 8.76071C8.60476 6.04049 12.0056 4 12.0056 4C12.0056 4 15.4064 6.04051 15.4064 8.76029ZM6 3L6.27458 4.0198C6.36724 4.36394 6.63606 4.63276 6.9802 4.72542L8 5L6.9802 5.27458C6.63606 5.36724 6.36724 5.63606 6.27458 5.9802L6 7L5.72542 5.9802C5.63276 5.63606 5.36394 5.36724 5.0198 5.27458L4 5L5.0198 4.72542C5.36394 4.63276 5.63276 4.36394 5.72542 4.0198L6 3ZM18.5 7L18.8806 8.41373C18.9733 8.75788 19.2421 9.0267 19.5863 9.11936L21 9.5L19.5863 9.88064C19.2421 9.97331 18.9733 10.2421 18.8806 10.5863L18.5 12L18.1194 10.5863C18.0267 10.2421 17.7579 9.9733 17.4137 9.88064L16 9.5L17.4137 9.11936C17.7579 9.02669 18.0267 8.75788 18.1194 8.41373L18.5 7Z" fill="white"/>
    </Svg>
  );
};

export default Icon;