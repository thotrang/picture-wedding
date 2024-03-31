import React from "react";

function ChevronBottom({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path stroke="currentColor" strokeWidth="2" d="M18 9l-6 6-6-6"></path>
    </svg>
  );
}

export default ChevronBottom;