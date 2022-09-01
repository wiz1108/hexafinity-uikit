import React from "react";
import Svg from "../../../Svg";
import { SvgProps } from "../../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.0293 5.97522C15.7212 3.04802 12.7874 1 9.37963 1C4.75925 1 1 4.75925 1 9.37963C1 14 4.75925 17.7593 9.37963 17.7593C10.985 17.7593 12.4812 17.2975 13.757 16.5113L14.7216 17.6626C15.5991 16.8412 16.8403 15.6001 17.6623 14.7221L16.5109 13.7577C17.2973 12.4817 17.7593 10.9853 17.7593 9.37959C17.7593 8.67207 17.6615 7.98852 17.4956 7.33183C17 7 17 6.5 17.0293 5.97522ZM9.37963 16.4701C5.47055 16.4701 2.28919 13.2893 2.28919 9.37963C2.28919 5.46995 5.47055 2.28919 9.37963 2.28919C12.4406 2.28919 15.0475 4.24311 16.0381 6.96638C16.5 7 16.5 8 16.3987 8.42873C16.4408 8.74064 16.4701 9.05638 16.4701 9.37963C16.4701 13.2893 13.2887 16.4701 9.37963 16.4701Z" />
      <path d="M22.9899 20.1881C22.9294 19.5 22.6033 18.8768 22.0746 18.433L18.6509 15.5499C17.7821 16.4823 16.4813 17.783 15.5497 18.6509L18.4337 22.079C18.5257 22.1885 18.6389 22.3024 18.7523 22.3975C19.2357 22.8023 19.8249 22.9999 20.4116 22.9999C21.1505 22.9999 21.8858 22.6858 22.3957 22.0758C22.8401 21.5465 23.0503 20.8761 22.9899 20.1881Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.37905 1C13.0402 1 16.3401 3.4493 17.3971 6.95558C17.642 7.729 17.7581 8.54113 17.7581 9.37905C17.7581 11.6865 16.8171 13.7877 15.2961 15.2959C13.7747 16.817 11.6995 17.7581 9.37905 17.7581C4.76404 17.7581 1 13.9939 1 9.37905C1 7.07157 1.94097 4.97043 3.46202 3.4621C4.97047 1.94101 7.07152 1 9.37905 1ZM16.4689 9.37915C16.4689 8.67014 16.3656 7.98693 16.1595 7.31656C15.2701 4.36457 12.4855 2.28914 9.37887 2.28922C7.41946 2.28922 5.65343 3.08846 4.36434 4.36466C3.08815 5.65374 2.28891 7.41973 2.28891 9.37919C2.28891 13.2851 5.4729 16.4692 9.37887 16.4692C10.887 16.4692 12.3051 16.0179 13.5039 15.1285C13.8133 14.9093 14.1097 14.6644 14.3806 14.3808C14.6514 14.123 14.9091 13.8136 15.1411 13.4913C16.0048 12.3053 16.4689 10.8873 16.4689 9.37915Z"
      />
    </Svg>
  );
};

export default Icon;