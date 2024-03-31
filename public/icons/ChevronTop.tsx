import React from "react";

function ChevronTop({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
      {...props}
    >
      <path stroke="currentColor" strokeWidth="2" d="M18.5 15l-6-6-6 6"></path>
    </svg>
  );
}

export default ChevronTop;
