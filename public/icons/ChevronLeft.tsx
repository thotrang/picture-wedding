import React from "react";

function ChevronLeft({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      fill="none"
      viewBox="0 0 34 34"
      {...props}
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21.25 8.5l-8.5 8.5 8.5 8.5"
      ></path>
    </svg>
  );
}

export default ChevronLeft;
