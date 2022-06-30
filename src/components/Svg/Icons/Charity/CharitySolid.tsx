import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.3248 2.16131C17.7775 1.64617 17.077 1.3988 16.371 1.3988C15.5763 1.3988 14.7738 1.71213 14.1754 2.31129L13.9186 2.56808L13.6618 2.31051C13.0634 1.71213 12.2609 1.3988 11.4662 1.3988C10.7602 1.3988 10.0598 1.64617 9.51242 2.16131C8.3086 3.29446 8.28739 5.19012 9.44803 6.35075L13.9186 10.8213L18.3892 6.35075C19.5498 5.19012 19.5286 3.29446 18.3248 2.16131Z" />
      <path d="M22.7129 13.0979C22.0258 12.6322 21.2161 12.7641 20.4992 13.178C19.7822 13.5918 15.6658 17.1114 15.6658 17.1114L11.6138 17.1122C11.4253 17.1122 11.2212 16.9002 11.2212 16.7125C11.2212 16.4918 11.4135 16.3199 11.6138 16.3199H14.0929C14.9606 16.3199 15.932 15.7545 15.932 14.7493C15.932 13.6813 14.9606 13.1788 14.0929 13.1788C12.5875 13.1788 12.2946 13.185 12.2946 13.185C11.6915 13.185 11.0798 13.1489 10.6086 12.8968C9.98042 12.5749 9.25639 12.3927 8.48368 12.3927C7.1864 12.3927 6.02498 12.9102 5.22871 13.7261L1 17.8896L5.71166 22.6013L7.28221 21.0307H15.2347C16.0263 21.0307 16.7903 20.7402 17.3816 20.2148L22.7663 14.1745C23.0953 13.8824 23.0765 13.3452 22.7129 13.0979Z" />
    </Svg>
  );
};

export default Icon;
