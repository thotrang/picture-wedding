import React from "react";

function InstagramIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      { ...props }
    >
      <g clipPath="url(#clip0_44_380)">
        <path
          fill="#fff"
          d="M18.52 0H1.477C.66 0 0 .645 0 1.441v17.114C0 19.352.66 20 1.477 20H18.52c.816 0 1.48-.648 1.48-1.441V1.44C20 .645 19.336 0 18.52 0zM5.934 17.043h-2.97V7.496h2.97v9.547zM4.449 6.195a1.72 1.72 0 11-.006-3.439 1.72 1.72 0 01.006 3.44zm12.594 10.848h-2.965v-4.64c0-1.106-.02-2.532-1.543-2.532-1.543 0-1.777 1.207-1.777 2.453v4.719H7.797V7.496h2.844v1.305h.039c.394-.75 1.363-1.543 2.804-1.543 3.004 0 3.559 1.976 3.559 4.547v5.238z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_44_380">
          <path fill="#fff" d="M0 0H20V20H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default InstagramIcon;
