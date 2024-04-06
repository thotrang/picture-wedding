const Abstract = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 346 328"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_83_2153)">
        <mask
          id="mask0_83_2153"
          maskUnits="userSpaceOnUse"
          x="0"
          y="-9"
          width="346"
          height="346"
        >
          <path d="M346 -9H0V337H346V-9Z" fill="white" />
        </mask>
        <g mask="url(#mask0_83_2153)">
          <path
            d="M173 164.5C268.102 164.5 345.23 241.462 345.499 336.5H325.739C325.47 252.374 257.189 184.26 173 184.26C88.8107 184.26 20.5304 252.374 20.2608 336.5H0.500709C0.770367 241.462 77.8976 164.5 173 164.5ZM0.500709 -8.5H20.2608C20.5304 75.6261 88.8107 143.74 173 143.74C257.189 143.74 325.47 75.6261 325.739 -8.5H345.499C345.23 86.5392 268.102 163.5 173 163.5C77.8976 163.5 0.770365 86.5392 0.500709 -8.5ZM173 121.98C100.829 121.98 42.2904 63.6082 42.0209 -8.5H61.7811C62.0504 52.6951 111.742 102.22 173 102.22C234.258 102.22 283.95 52.6951 284.219 -8.5H303.979C303.71 63.6082 245.172 121.98 173 121.98ZM173 80.46C123.759 80.46 83.8105 40.6773 83.5414 -8.5H103.302C103.571 29.7641 134.673 60.7 173 60.7C211.327 60.7 242.429 29.7641 242.698 -8.5H262.459C262.19 40.6773 222.241 80.46 173 80.46ZM173 206.02C245.172 206.02 303.71 264.391 303.979 336.5H284.219C283.95 275.305 234.258 225.78 173 225.78C111.742 225.78 62.0504 275.305 61.7811 336.5H42.0209C42.2904 264.391 100.829 206.02 173 206.02ZM173 247.54C222.241 247.54 262.19 287.322 262.459 336.5H242.698C242.429 298.237 211.327 267.3 173 267.3C134.673 267.3 103.571 298.237 103.302 336.5H83.5414C83.8105 287.322 123.759 247.54 173 247.54Z"
            fill="#131316"
            stroke="#1C1C21"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_83_2153">
          <rect
            width="346"
            height="346"
            fill="white"
            transform="translate(0 -9)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export default Abstract;
