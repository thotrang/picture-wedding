import React from "react";

function Twitter({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="18"
      fill="none"
      viewBox="0 0 20 18"
      {...props}
    >
      <path
        fill="#fff"
        d="M6.292 17.125c7.545 0 11.673-6.253 11.673-11.673 0-.176-.004-.356-.012-.532A8.332 8.332 0 0020 2.796a8.09 8.09 0 01-2.355.645 4.125 4.125 0 001.804-2.27 8.247 8.247 0 01-2.605.996A4.108 4.108 0 009.85 5.91a11.654 11.654 0 01-8.456-4.284A4.108 4.108 0 002.664 7.1a4.108 4.108 0 01-1.86-.512v.051a4.102 4.102 0 003.293 4.023 4.078 4.078 0 01-1.851.07 4.111 4.111 0 003.831 2.852A8.23 8.23 0 010 15.282a11.64 11.64 0 006.292 1.843z"
      ></path>
    </svg>
  );
}

export default Twitter;
