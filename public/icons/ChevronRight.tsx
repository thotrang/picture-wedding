import React from "react";

function ChevronRight({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      fill="none"
      viewBox="0 0 34 34"
      { ...props }
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12.75 8.5l8.5 8.5-8.5 8.5"
      ></path>
    </svg>
  );
}

export default ChevronRight;
