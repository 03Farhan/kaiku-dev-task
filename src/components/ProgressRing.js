import React from "react";

const ProgressRing = ({ radius, stroke, progress, type }) => {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  let logo;
  if (type === "match") {
    logo = (
      <svg viewBox={"0 0 150 150"} x={radius / 1.75} y={radius / 1.75}>
        <path
          d="M8.783 41.535c8.403 8.401 21.644 8.987 30.734 1.78l1.894 1.892l-1.573 1.572l12.844 12.843c-.478.756-.685 1.338-.446 1.575l.703.702c1.143 1.145 10.104-7.819 8.961-8.962l-.703-.701c-.237-.238-.818-.033-1.572.445L46.779 39.838l-1.572 1.572l-1.893-1.893c7.206-9.091 6.621-22.333-1.779-30.735c-9.044-9.043-23.708-9.043-32.752 0c-9.045 9.046-9.043 23.709 0 32.753m2.729-30.022c7.536-7.537 19.759-7.537 27.293 0c7.537 7.535 7.537 19.758 0 27.293c-7.536 7.538-19.755 7.536-27.293 0c-7.534-7.537-7.536-19.756 0-27.293"
          fill="#626262"
        />
        <path
          d="M8.683 23.902a16.585 16.585 0 0 0 3.789 5.879c6.513 6.514 17.076 6.514 23.592-.003a16.61 16.61 0 0 0 4.813-10.243c2.256 5.949 1 12.926-3.79 17.716c-6.515 6.515-17.078 6.515-23.593 0C9.84 33.6 8.239 28.674 8.683 23.902"
          fill="#626262"
        />
      </svg>
    );
  } else if (type === "raised") {
    logo = (
      <svg x={radius / 2} y={radius / 1.9} viewBox="0 0 33 33">
        <g fill="#626262">
          <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3c0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156c0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616c0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769c0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
        </g>
      </svg>
    );
  }

  return (
    <svg width="100%" viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
      <circle
        stroke="grey"
        fill="transparent"
        opacity="0.8"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      {logo}
      <circle
        stroke={progress > 80 ? "lawngreen" : "#fff000"}
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

export default ProgressRing;
