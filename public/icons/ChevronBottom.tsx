import React from "react";

function ChevronBottom({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
      {...props}
    >
      <path d="M18.5 9L12.5 15L6.5 9" stroke="white" stroke-width="2" />
    </svg>
  );
}

export default ChevronBottom;
