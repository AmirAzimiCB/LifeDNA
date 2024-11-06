"use client";

const Toaster = ({ message, status, show }) => {
  return show ? (
    <div className="text-black capitalize gap-2 left-1/2 -translate-x-1/2 bottom-4 z-[9999] flex text-sm fixed p-3 w-fit items-center justify-between rounded-xl backdrop-blur-md bg-[rgba(255, 255, 255, 0.7)] border border-[#CACACA]">
      {status === 1 ? (
        <svg
          x="0px"
          y="0px"
          viewBox="0 0 367.805 367.805"
          enableBackground={"new 0 0 367.805 367.805"}
          className="md:w-5 md:h-5 w-4 h-4"
        >
          <g>
            <path
              fill="#3BB54A"
              d="M183.903,0.001c101.566,0,183.902,82.336,183.902,183.902s-82.336,183.902-183.902,183.902
               S0.001,285.469,0.001,183.903l0,0C-0.288,82.625,81.579,0.29,182.856,0.001C183.205,0,183.554,0,183.903,0.001z"
            />
            <polygon
              fill="#D4E1F4"
              points="285.78,133.225 155.168,263.837 82.025,191.217 111.805,161.96 155.168,204.801 
               256.001,103.968 	"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      ) : status === -1 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 512 512"
          enableBackground={"new 0 0 512 512"}
          className="md:w-5 md:h-5 w-4 h-4"
        >
          <ellipse fill="#E04F5F" cx="256" cy="256" rx="256" ry="255.832" />
          <g transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 77.26 32)">
            <rect
              x="3.98"
              y="-427.615"
              fill="#FFFFFF"
              width="55.992"
              height="285.672"
            />
            <rect
              x="-110.828"
              y="-312.815"
              fill="#FFFFFF"
              width="285.672"
              height="55.992"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      ) : status === 2 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="24px"
          height="24px"
          viewBox="0 0 50 50"
          enableBackground="new 0 0 50 50;"
          className="md:w-5 md:h-5 w-4 h-4"
        >
          <path
            fill="#fff"
            d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
          >
            <animateTransform
              attributeType="xml"
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      ) : null}
      {message}
    </div>
  ) : null;
};

export default Toaster;
