import classNames from 'classnames';
import { lazy } from 'react';

export const PowerOffIcon = ({ className }) => {
  return (
    <svg fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M288 256C288 273.7 273.7 288 256 288C238.3 288 224 273.7 224 256V32C224 14.33 238.3 0 256 0C273.7 0 288 14.33 288 32V256zM80 256C80 353.2 158.8 432 256 432C353.2 432 432 353.2 432 256C432 201.6 407.3 152.9 368.5 120.6C354.9 109.3 353 89.13 364.3 75.54C375.6 61.95 395.8 60.1 409.4 71.4C462.2 115.4 496 181.8 496 255.1C496 388.5 388.5 496 256 496C123.5 496 16 388.5 16 255.1C16 181.8 49.75 115.4 102.6 71.4C116.2 60.1 136.4 61.95 147.7 75.54C158.1 89.13 157.1 109.3 143.5 120.6C104.7 152.9 80 201.6 80 256z" />
    </svg>
  );
};

export const RefreshIcon = ({ className }) => {
  return (
    <svg fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
      <path d="M 15 3 C 12.031398 3 9.3028202 4.0834384 7.2070312 5.875 A 1.0001 1.0001 0 1 0 8.5058594 7.3945312 C 10.25407 5.9000929 12.516602 5 15 5 C 20.19656 5 24.450989 8.9379267 24.951172 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.437925 7.8516588 21.277839 3 15 3 z M 4 10 L 0 16 L 3.0507812 16 C 3.562075 22.148341 8.7221607 27 15 27 C 17.968602 27 20.69718 25.916562 22.792969 24.125 A 1.0001 1.0001 0 1 0 21.494141 22.605469 C 19.74593 24.099907 17.483398 25 15 25 C 9.80344 25 5.5490109 21.062074 5.0488281 16 L 8 16 L 4 10 z"></path>
    </svg>
  );
};

export const KeyIcon = ({ className }) => {
  return (
    <svg
      className={className}
      fill="#000000"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 485.017 485.017"
    >
      <g>
        <path d="M361.205,68.899c-14.663,0-28.447,5.71-38.816,16.078c-21.402,21.403-21.402,56.228,0,77.631 c10.368,10.368,24.153,16.078,38.815,16.078s28.447-5.71,38.816-16.078c21.402-21.403,21.402-56.228,0-77.631 C389.652,74.609,375.867,68.899,361.205,68.899z M378.807,141.394c-4.702,4.702-10.953,7.292-17.603,7.292 s-12.901-2.59-17.603-7.291c-9.706-9.706-9.706-25.499,0-35.205c4.702-4.702,10.953-7.291,17.603-7.291 s12.9,2.589,17.603,7.291 C388.513,115.896,388.513,131.688,378.807,141.394z" />
        <path d="M441.961,43.036C414.21,15.284,377.311,0,338.064,0c-39.248,0-76.146,15.284-103.897,43.036 c-42.226,42.226-54.491,105.179-32.065,159.698L0.254,404.584l-0.165,80.268l144.562,0.165v-55.722h55.705l0-55.705h55.705v-64.492 l26.212-26.212c17.615,7.203,36.698,10.976,55.799,10.976c39.244,0,76.14-15.282,103.889-43.032 C499.25,193.541,499.25,100.325,441.961,43.036z M420.748,229.617c-22.083,22.083-51.445,34.245-82.676,34.245 c-18.133,0-36.237-4.265-52.353-12.333l-9.672-4.842l-49.986,49.985v46.918h-55.705l0,55.705h-55.705v55.688l-84.5-0.096 l0.078-37.85L238.311,208.95l-4.842-9.672c-22.572-45.087-13.767-99.351,21.911-135.029 C277.466,42.163,306.83,30,338.064,30c31.234,0,60.598,12.163,82.684,34.249 C466.34,109.841,466.34,184.025,420.748,229.617z" />
      </g>
    </svg>
  );
};

export const HideIcon = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="eye">
      <g fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2">
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24M1 1l22 22" />
      </g>
    </svg>
  );
};

export const EyeIcon = ({ className }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" id="eye">
      <path d="M25 39c13.036 0 23.352-12.833 23.784-13.379l.491-.621-.491-.621C48.352 23.833 38.036 11 25 11S1.648 23.833 1.216 24.379L.725 25l.491.621C1.648 26.167 11.964 39 25 39zm0-26c10.494 0 19.47 9.46 21.69 12C44.473 27.542 35.509 37 25 37 14.506 37 5.53 27.54 3.31 25 5.527 22.458 14.491 13 25 13z" />
      <path d="M25 34c4.963 0 9-4.038 9-9s-4.037-9-9-9-9 4.038-9 9 4.037 9 9 9zm0-16c3.859 0 7 3.14 7 7s-3.141 7-7 7-7-3.14-7-7 3.141-7 7-7z" />
    </svg>
  );
};

export const TermsOfUseIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0.750092C15.108 0.750092 19.25 4.89109 19.25 10.0001C19.25 15.1081 15.108 19.2501 10 19.2501C4.891 19.2501 0.75 15.1081 0.75 10.0001C0.75 4.89109 4.891 0.750092 10 0.750092Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99512 6.20419V10.6232"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.995 13.7961H10.005"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const HelpIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.334 0.750092H5.665C2.644 0.750092 0.75 2.88909 0.75 5.91609V14.0841C0.75 17.1111 2.635 19.2501 5.665 19.2501H14.333C17.364 19.2501 19.25 17.1111 19.25 14.0841V5.91609C19.25 2.88909 17.364 0.750092 14.334 0.750092Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99414 14.0001V10.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.99012 6.20419H10.0001"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const PersonalInfoIcon = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="20"
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.98468 13.3457C4.11707 13.3457 0.814209 13.9305 0.814209 16.2724C0.814209 18.6143 4.09611 19.22 7.98468 19.22C11.8523 19.22 15.1542 18.6343 15.1542 16.2933C15.1542 13.9524 11.8733 13.3457 7.98468 13.3457Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.98464 10.0059C10.5227 10.0059 12.5799 7.94779 12.5799 5.40969C12.5799 2.8716 10.5227 0.814453 7.98464 0.814453C5.44655 0.814453 3.38845 2.8716 3.38845 5.40969C3.37988 7.93922 5.42369 9.99731 7.95226 10.0059H7.98464Z"
        stroke="currentColor"
        strokeWidth="1.42857"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChevronRight = ({ className }) => {
  return (
    <svg
      className={className}
      width="10"
      height="16"
      viewBox="0 0 10 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.5 1L8.5 8L1.5 15" stroke="#9E9DA8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export const TrashIcon = ({ className }) => {
  return (
    <svg fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path d="M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </svg>
  );
};

export const CircleCloseIcon = ({ className }) => {
  return (
    <svg fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
    </svg>
  );
};

export const LoadingIcon = ({ className }) => {
  return (
    <svg fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
    </svg>
  );
};

export const CheckIcon = ({ className, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
    </svg>
  );
};

export const HaftStarIcon = ({ className }) => {
  return (
    <svg fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M288 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L288.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L288.1 439.8 159.8 508.3C149 514 135.9 513.1 126 506s-14.9-19.3-12.9-31.3L137.8 329 33.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L195 150.3 259.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L438.5 329l24.6 145.7z" />
    </svg>
  );
};

export const EmptyStarIcon = ({ className }) => {
  return (
    <svg fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
    </svg>
  );
};

export const StarIcon = ({ className }) => {
  return (
    <svg fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
    </svg>
  );
};

export const SearchIcon = ({ className }) => {
  return (
    <svg fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </svg>
  );
};

export const ArrowDownIcon = ({ width = '1.2rem', height = '1.2rem', className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 6"
    fill="none"
  >
    <path
      d="M8.5 1.25L5 4.75L1.5 1.25"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowRightIcon = ({ width = '2.2rem', height = '2.2rem', color = '#676767', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      width={width}
      height={height}
      color={color}
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
  );
};

export const CloseIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <g fill="#676767" fillRule="nonzero">
        <path d="M19 4.293l.707.707L5 19.707 4.293 19z" />
        <path d="M19.707 19l-.707.707L4.293 5 5 4.293z" />
      </g>
    </g>
  </svg>
);

export const CartIcon = ({ width = '2rem', height = '2.2rem', className }) => (
  <svg className={className} width={width} height={height} xmlns="http://www.w3.org/2000/svg">
    <g stroke="none" fill="none">
      <g transform="translate(-10.000000, -9.000000)">
        <g>
          <g transform="translate(8.000000, 8.000000)">
            <g>
              <rect x="0" y="0" width="24" height="24"></rect>
              <g transform="translate(1.900000, 2.000000)" stroke="#676767">
                <path
                  d="M2.90254295,5.1 C2.63489801,5.1 2.40361713,5.33408857 2.3731717,5.63375376 L1.0022275,19.1989712 C0.975727288,19.4611854 1.22142963,19.7 1.53159875,19.7 L18.6684012,19.7 C18.9779724,19.7 19.2242542,19.4604066 19.1977725,19.1989712 L17.8268617,5.63408331 C17.7963817,5.33447347 17.5648285,5.1 17.297457,5.1 L15.2410407,5.1 C14.7921216,5.1 14.7921216,5.1 13.5081923,5.1 C11.9459262,5.1 11.9459262,5.1 10.1053234,5.1 C8.22927512,5.1 8.22927512,5.1 6.64795548,5.1 C5.36136445,5.1 5.36136445,5.1 4.95895925,5.1 L2.90254295,5.1 Z"
                  fillRule="nonzero"
                ></path>
                <path
                  d="M10.1,7.73326896 L10.1,5.18518519 C10.1139408,1.72839506 11.5139408,-1.77635684e-14 14.3,-1.77635684e-14"
                  transform="translate(12.200000, 3.866634) scale(-1, 1) translate(-12.200000, -3.866634) "
                ></path>
                <path d="M5.9,7.6 L5.9,5.18518519 C5.91394083,1.72839506 7.31394083,-1.77635684e-14 10.1,-1.77635684e-14"></path>
                <circle strokeLinecap="round" strokeLinejoin="round" cx="5.9" cy="8.8" r="1.2"></circle>
                <circle strokeLinecap="round" strokeLinejoin="round" cx="14.3" cy="8.8" r="1.2"></circle>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

export const ClockIcon = ({ width = '2rem', height = '2rem', className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 24 24">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <circle cx="12" cy="12" r="9" stroke="#676767" strokeLinecap="square" />
      <path fill="#676767" fillRule="nonzero" d="M17.41 11.5v1H11.5V6.59h1v4.91z" />
    </g>
  </svg>
);

export const PlusIcon = ({ width = '1.6rem', height = '1.6rem', className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="icon/16px/add" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M9,9 L9,13.8925781 L7,13.8925781 C7,13.8925781 7,13.4882853 7,12.6796875 C7,11.8710897 7,10.8710997 7,9.6796875 L7,9 L6.21289062,9 C5.02147842,9 4.02148842,9 3.21289062,9 C2.40429283,9 2,9 2,9 L2,7 L7,7 L7,6.10546875 C7,4.91405654 7,3.91406654 7,3.10546875 C7,2.29687096 7,1.89257812 7,1.89257812 L9,1.89257813 L9,7 L14,7 L14,9 C14,9 13.5957072,9 12.7871094,9 C11.9785116,9 10.9785216,9 9.78710938,9 L9,9 Z"
        id="Combined-Shape"
        fill="#00A5CF"
      ></path>
    </g>
  </svg>
);

export const MinusIcon = ({ width = '1.6rem', height = '1.6rem', className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 16 16"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="icon/16px/remove" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <path
        d="M14,9 C14,9 13.5957072,9 12.7871094,9 C11.9785116,9 10.9785216,9 9.78710937,9 C8.59569717,9 7.40430283,9 6.21289062,9 C5.02147842,9 4.02148842,9 3.21289062,9 C2.40429283,9 2,9 2,9 L2,7 L14,7 L14,9 Z"
        id="–"
        fill="#00A5CF"
      ></path>
    </g>
  </svg>
);

export const MenuIcon = ({ width = '1.2rem', height = '1.6rem', className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 17"
    fill="none"
  >
    <path d="M13 1.5H1" stroke="#1A162E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13 9H1" stroke="#1A162E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6 16H1" stroke="#1A162E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const HomeIcon = ({ width = '2.2rem', height = '2.2rem', className }) => (
  <svg
    fill="#fff"
    className={className}
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 486.196 486.196"
  >
    <g>
      <path
        d="M481.708,220.456l-228.8-204.6c-0.4-0.4-0.8-0.7-1.3-1c-5-4.8-13-5-18.3-0.3l-228.8,204.6c-5.6,5-6,13.5-1.1,19.1
		c2.7,3,6.4,4.5,10.1,4.5c3.2,0,6.4-1.1,9-3.4l41.2-36.9v7.2v106.8v124.6c0,18.7,15.2,34,34,34c0.3,0,0.5,0,0.8,0s0.5,0,0.8,0h70.6
		c17.6,0,31.9-14.3,31.9-31.9v-121.3c0-2.7,2.2-4.9,4.9-4.9h72.9c2.7,0,4.9,2.2,4.9,4.9v121.3c0,17.6,14.3,31.9,31.9,31.9h72.2
		c19,0,34-18.7,34-42.6v-111.2v-34v-83.5l41.2,36.9c2.6,2.3,5.8,3.4,9,3.4c3.7,0,7.4-1.5,10.1-4.5
		C487.708,233.956,487.208,225.456,481.708,220.456z M395.508,287.156v34v111.1c0,9.7-4.8,15.6-7,15.6h-72.2c-2.7,0-4.9-2.2-4.9-4.9
		v-121.1c0-17.6-14.3-31.9-31.9-31.9h-72.9c-17.6,0-31.9,14.3-31.9,31.9v121.3c0,2.7-2.2,4.9-4.9,4.9h-70.6c-0.3,0-0.5,0-0.8,0
		s-0.5,0-0.8,0c-3.8,0-7-3.1-7-7v-124.7v-106.8v-31.3l151.8-135.6l153.1,136.9L395.508,287.156L395.508,287.156z"
      />
    </g>
  </svg>
);

export const FacebookIcon = ({ width = '2.8rem', height = '2.8rem', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 12.067C0 18.033 4.333 22.994 10 24V15.333H7V12H10V9.333C10 6.333 11.933 4.667 14.667 4.667C15.533 4.667 16.467 4.8 17.333 4.933V8H15.8C14.333 8 14 8.733 14 9.667V12H17.2L16.667 15.333H14V24C19.667 22.994 24 18.034 24 12.067C24 5.43 18.6 0 12 0C5.4 0 0 5.43 0 12.067Z"
      fill="white"
    />
  </svg>
);

export const InstagramIcon = ({ width = '2.6rem', height = '2.6rem', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <g>
      <path
        d="M11.9968 7.9983C9.79333 7.9983 7.99515 9.79651 7.99515 12C7.99515 14.2035 9.79333 16.0017 11.9968 16.0017C14.2002 16.0017 15.9984 14.2035 15.9984 12C15.9984 9.79651 14.2002 7.9983 11.9968 7.9983ZM23.9987 12C23.9987 10.3429 24.0137 8.70077 23.9206 7.04665C23.8275 5.12536 23.3893 3.4202 21.9843 2.01525C20.5764 0.607302 18.8743 0.172008 16.953 0.0789456C15.2959 -0.0141173 13.6539 0.000892936 11.9998 0.000892936C10.3427 0.000892936 8.70061 -0.0141173 7.04652 0.0789456C5.12526 0.172008 3.42014 0.610305 2.01522 2.01525C0.607291 3.42321 0.172005 5.12536 0.0789442 7.04665C-0.014117 8.70377 0.000892919 10.3459 0.000892919 12C0.000892919 13.6541 -0.014117 15.2992 0.0789442 16.9533C0.172005 18.8746 0.610293 20.5798 2.01522 21.9847C3.42314 23.3927 5.12526 23.828 7.04652 23.9211C8.70361 24.0141 10.3457 23.9991 11.9998 23.9991C13.6569 23.9991 15.2989 24.0141 16.953 23.9211C18.8743 23.828 20.5794 23.3897 21.9843 21.9847C23.3923 20.5768 23.8275 18.8746 23.9206 16.9533C24.0167 15.2992 23.9987 13.6571 23.9987 12ZM11.9968 18.1572C8.58954 18.1572 5.83973 15.4073 5.83973 12C5.83973 8.5927 8.58954 5.84284 11.9968 5.84284C15.404 5.84284 18.1538 8.5927 18.1538 12C18.1538 15.4073 15.404 18.1572 11.9968 18.1572ZM18.406 7.02864C17.6105 7.02864 16.968 6.38621 16.968 5.59067C16.968 4.79513 17.6105 4.1527 18.406 4.1527C19.2015 4.1527 19.8439 4.79513 19.8439 5.59067C19.8442 5.77957 19.8071 5.96667 19.735 6.14124C19.6628 6.31581 19.5569 6.47442 19.4233 6.608C19.2897 6.74157 19.1311 6.84748 18.9565 6.91967C18.782 6.99185 18.5949 7.02888 18.406 7.02864Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath>
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const GithubIcon = ({ width = '2.8rem', height = '2.8rem', className }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 16 16" version="1.1">
    <path
      fill="#fff"
      d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
    ></path>
  </svg>
);

export const GoogleIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 48 48"
  >
    <defs>
      <path
        id="a"
        d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
      />
    </defs>
    <clipPath id="b">
      <use xlinkHref="#a" overflow="visible" />
    </clipPath>
    <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
    <path clipPath="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" />
    <path clipPath="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" />
    <path clipPath="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" />
  </svg>
);

export const EmailIcon = ({ width = '2.2rem', height = '2rem', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 22 20"
    fill="none"
  >
    <path
      d="M16.9024 6.85156L12.4591 10.4646C11.6196 11.1306 10.4384 11.1306 9.59895 10.4646L5.11816 6.85156"
      stroke="#9E9DA8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z"
      stroke="#9E9DA8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PasswordIcon = ({ width = '1.8rem', height = '2rem', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 18 20"
    fill="none"
  >
    <path
      d="M13.4228 7.44804V5.30104C13.4228 2.78804 11.3848 0.750045 8.87176 0.750045C6.35876 0.739045 4.31276 2.76704 4.30176 5.28104V5.30104V7.44804"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.683 19.2498H5.042C2.948 19.2498 1.25 17.5528 1.25 15.4578V11.1688C1.25 9.07383 2.948 7.37683 5.042 7.37683H12.683C14.777 7.37683 16.475 9.07383 16.475 11.1688V15.4578C16.475 17.5528 14.777 19.2498 12.683 19.2498Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.8623 12.2031V14.4241"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UserIcon = ({ width = '1.6rem', height = '2rem', className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 16 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.98468 13.3457C4.11707 13.3457 0.814209 13.9305 0.814209 16.2724C0.814209 18.6143 4.09611 19.22 7.98468 19.22C11.8523 19.22 15.1542 18.6343 15.1542 16.2933C15.1542 13.9524 11.8733 13.3457 7.98468 13.3457Z"
      stroke="#9E9DA8"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.98464 10.0059C10.5227 10.0059 12.5799 7.94779 12.5799 5.40969C12.5799 2.8716 10.5227 0.814453 7.98464 0.814453C5.44655 0.814453 3.38845 2.8716 3.38845 5.40969C3.37988 7.93922 5.42369 9.99731 7.95226 10.0059H7.98464Z"
      stroke="#9E9DA8"
      strokeWidth="1.42857"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const LogOutIcon = ({ width = '1.6rem', height = '1.6rem', className }) => (
  <svg className={className} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 471.2 471.2">
    <g>
      <g>
        <path
          d="M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5
			s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5
			S235.019,444.2,227.619,444.2z"
        />
        <path
          d="M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5
			s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8
			C455.319,239.9,455.319,231.3,450.019,226.1z"
        />
      </g>
    </g>
  </svg>
);

export const tagIcon = ({ width = '1.6rem', height = '1.6rem', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      width={width}
      height={height}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
    </svg>
  );
};

export const CalendarIcon = ({ width = '2rem', height = '2rem', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      width={width}
      height={height}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  );
};

export const ArrowLeftIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
    </svg>
  );
};

export const plusIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  );
};

export const QuotesIcon = ({ width = '3rem', height = '3rem', className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={className}
      viewBox="0 0 900.000000 760.000000"
    >
      <g transform="translate(0.000000,760.000000) scale(0.100000,-0.100000)" fill="#fff" stroke="none">
        <path
          d="M8069 7427 c-1202 -803 -2087 -1611 -2719 -2482 -663 -914 -1034
-1951 -1007 -2814 11 -365 87 -680 222 -915 25 -44 45 -90 45 -103 0 -28 75
-156 130 -223 20 -25 60 -79 88 -120 56 -82 290 -320 314 -320 9 0 21 -7 29
-16 7 -9 27 -23 45 -32 86 -46 122 -66 149 -87 102 -76 331 -148 571 -180 508
-67 1023 80 1419 405 86 71 233 222 301 310 196 251 327 566 375 893 16 112
13 377 -5 492 -69 427 -256 782 -568 1081 -172 164 -355 283 -573 373 -193 80
-382 124 -590 137 -58 4 -105 8 -105 10 0 2 26 61 58 131 314 689 914 1388
1812 2109 171 138 536 409 641 476 48 31 117 85 155 120 38 36 86 81 108 100
l39 36 -334 387 c-184 214 -339 390 -345 392 -6 2 -120 -70 -255 -160z"
        />
        <path
          d="M3815 7422 c-1289 -844 -2302 -1787 -2932 -2732 -203 -303 -419 -705
-540 -1005 -339 -833 -423 -1649 -232 -2234 38 -114 88 -232 135 -311 19 -32
34 -70 34 -83 0 -27 84 -171 130 -224 16 -18 48 -61 71 -95 43 -66 305 -338
325 -338 6 0 19 -9 29 -20 10 -11 26 -22 37 -25 20 -7 129 -71 189 -111 19
-13 75 -40 123 -60 328 -134 799 -155 1166 -53 698 195 1240 811 1346 1530 23
159 16 461 -15 608 -68 321 -219 625 -436 873 -310 356 -804 603 -1253 625
-67 3 -124 9 -127 13 -2 3 22 67 54 142 157 367 392 733 715 1114 153 180 587
611 798 791 284 244 683 554 883 686 115 76 175 124 269 211 l89 83 -68 74
c-148 162 -550 596 -579 626 l-31 33 -180 -118z"
        />
      </g>
    </svg>
  );
};

export const SettingIcon = ({ width = '3rem', height = '3rem', className }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" width={width} height={height} className={className}>
      <path
        d="M58.0959473,39.0869141c0.4135742-0.1328125,0.6938477-0.5175781,0.6938477-0.9521484v-6.2402344
	c0-0.4345703-0.2807617-0.8193359-0.6943359-0.9521484l-5.8862305-1.8876953
	c-0.2607422-0.7246094-0.527832-1.3701172-0.8081055-1.9541016l2.8291016-5.5195313
	c0.1977539-0.3857422,0.1240234-0.8554688-0.1821289-1.1621094l-4.4101563-4.4199219
	c-0.3066406-0.3085938-0.7758789-0.3808594-1.1621094-0.1845703l-5.5205078,2.8154297
	c-0.6206055-0.3095703-1.2827148-0.5859375-1.9785156-0.8261719l-1.8842773-5.8935547
	c-0.1328125-0.4140625-0.5175781-0.6953125-0.9526367-0.6953125h-6.2397461c-0.4335938,0-0.8178711,0.2792969-0.9516602,0.6923828
	l-1.9047852,5.890625c-0.5966797,0.2070313-1.2832031,0.4716797-1.9794922,0.8193359l-5.4868164-2.8222656
	c-0.3876953-0.1982422-0.8583984-0.1240234-1.1655273,0.1835938l-4.4199219,4.4306641
	c-0.3056641,0.3066406-0.3793945,0.7744141-0.1826172,1.1601563l2.7973633,5.484375
	c-0.3144531,0.6396484-0.5869141,1.3017578-0.8139648,1.9775391l-5.8696289,1.8916016
	c-0.4121094,0.1328125-0.6918945,0.515625-0.6933594,0.9492188l-0.0195313,6.2402344
	c-0.0014648,0.4345703,0.277832,0.8193359,0.690918,0.9541016l5.8930664,1.9140625
	c0.2246094,0.6328125,0.4916992,1.2705078,0.8178711,1.9541016l-2.8125,5.5048828
	c-0.1967773,0.3857422-0.1235352,0.8535156,0.1821289,1.1601563l4.3999023,4.4199219
	c0.3061523,0.3076172,0.7758789,0.3857422,1.1621094,0.1855469l5.5175781-2.8095703
	c0.6499023,0.3183594,1.2954102,0.5888672,1.9541016,0.8183594l1.9140625,5.8808594
	c0.1337891,0.4121094,0.5175781,0.6904297,0.9506836,0.6904297h6.2397461c0.4331055,0,0.8168945-0.2783203,0.9506836-0.6904297
	l1.9160156-5.8847656c0.6914063-0.2451172,1.3354492-0.5107422,1.9482422-0.8046875l5.5107422,2.8105469
	c0.3876953,0.1962891,0.8540039,0.1220703,1.1611328-0.1826172l4.409668-4.4003906
	c0.3061523-0.3056641,0.3813477-0.7744141,0.1850586-1.1601563l-2.8071289-5.5322266
	c0.2939453-0.5927734,0.5625-1.2402344,0.8129883-1.9589844L58.0959473,39.0869141z M49.3781738,43.3867188l2.7114258,5.3427734
	l-3.3818359,3.375l-5.3129883-2.7099609c-0.2880859-0.1484375-0.6274414-0.1464844-0.9135742,0.0019531
	c-0.7924805,0.4101563-1.6445313,0.7626953-2.6040039,1.078125c-0.3022461,0.0996094-0.5395508,0.3378906-0.6376953,0.640625
	l-1.8457031,5.6699219h-4.7875977l-1.8457031-5.6699219c-0.0996094-0.3066406-0.3417969-0.546875-0.6494141-0.6435547
	c-0.8764648-0.2773438-1.7231445-0.6318359-2.5883789-1.0839844c-0.2861328-0.1484375-0.6279297-0.1513672-0.9165039-0.0039063
	l-5.3212891,2.7089844l-3.3740234-3.3896484l2.7094727-5.3037109c0.1445313-0.2832031,0.1459961-0.6181641,0.0039063-0.9023438
	c-0.4750977-0.9501953-0.8222656-1.7822266-1.0927734-2.6201172c-0.0986328-0.3046875-0.3374023-0.5439453-0.6425781-0.6435547
	l-5.6762695-1.84375l0.0146484-4.7851563l5.6694336-1.8271484c0.3134766-0.1015625,0.5571289-0.3505859,0.6513672-0.6660156
	c0.2675781-0.8945313,0.625-1.7636719,1.0639648-2.5859375c0.1538086-0.2880859,0.1572266-0.6337891,0.0083008-0.9248047
	l-2.699707-5.2929688l3.3911133-3.3994141l5.3007813,2.7265625c0.2983398,0.1513672,0.6523438,0.1464844,0.9443359-0.015625
	c0.7163086-0.3994141,1.4916992-0.7236328,2.59375-1.0839844c0.3041992-0.0986328,0.5424805-0.3378906,0.6411133-0.6425781
	l1.8359375-5.6777344h4.7822266l1.8173828,5.6845703c0.0996094,0.3105469,0.34375,0.5527344,0.6542969,0.6494141
	c0.9379883,0.2929688,1.809082,0.6582031,2.5888672,1.0839844c0.2900391,0.1572266,0.6396484,0.1630859,0.9335938,0.0126953
	l5.3320313-2.71875l3.3823242,3.3896484l-2.7285156,5.3222656c-0.1479492,0.2890625-0.1464844,0.6318359,0.0039063,0.9189453
	c0.3818359,0.7314453,0.7382813,1.5878906,1.0893555,2.6191406c0.1020508,0.2998047,0.3398438,0.5332031,0.6411133,0.6298828
	l5.6655273,1.8173828V37.40625l-5.6757813,1.8261719c-0.3066406,0.0986328-0.5463867,0.3388672-0.6455078,0.6445313
	c-0.3237305,1.0029297-0.6757813,1.8466797-1.0761719,2.5771484C49.2341309,42.7441406,49.2287598,43.0927734,49.3781738,43.3867188
	z"
      ></path>
      <path
        d="M36.2541504,25.5644531c-5.2006836-0.6933594-9.9995117,2.9775391-10.6933594,8.1796875
	c-0.3364258,2.5244141,0.3271484,5.0292969,1.8691406,7.0517578c1.5439453,2.0244141,3.7836914,3.3251953,6.3076172,3.6611328
	c0.425293,0.0566406,0.8476563,0.0839844,1.265625,0.0839844c4.7050781,0,8.8120117-3.4921875,9.449707-8.2802734
	C45.1462402,31.0585938,41.4685059,26.2597656,36.2541504,25.5644531z M42.470459,35.9970703
	c-0.5483398,4.1201172-4.3393555,7.0273438-8.4692383,6.4775391c-1.9926758-0.265625-3.7617188-1.2919922-4.9804688-2.8916016
	c-1.21875-1.5986328-1.7436523-3.578125-1.4775391-5.5751953c0.5029297-3.7744141,3.7402344-6.5273438,7.4492188-6.5273438
	c0.3295898,0,0.6625977,0.0214844,0.9975586,0.0664063C40.111084,28.0966797,43.0178223,31.8867188,42.470459,35.9970703z"
      ></path>
    </svg>
  );
};

export const SendIcon = ({ width = '1.8rem', height = '1.8rem', className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={width}
    height={height}
    viewBox="0 0 487 450.9"
    fill="#fff"
  >
    <g>
      <path
        d="M485.3,0.1L0.6,248.2c-0.9,0.5-0.8,1.8,0.2,2.1l167.4,53.1c0.4,0.1,0.8,0,1.1-0.2l207.8-186.6c1.1-0.9,2.5,0.5,1.6,1.6
		L208.9,314.9c-0.5,0.6-0.3,1.6,0.5,1.8l185.7,57.4c0.6,0.2,1.3-0.2,1.4-0.8L486.9,1.4C487.2,0.5,486.2-0.3,485.3,0.1z"
      />
      <path
        d="M273.4,358.8l-59.4-18c-0.7-0.2-1.5,0.3-1.5,1.1l1.3,108c0,1.1,1.5,1.5,2.1,0.6l58.1-89.9
		C274.4,359.9,274.1,359,273.4,358.8z"
      />
    </g>
  </svg>
);

export const PhoneIcon = ({ width = '2.2rem', height = '2.2rem', className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.353 1.5C17.054 1.911 19.978 4.831 20.393 8.532"
      stroke="#1A162E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.353 5.04303C15.124 5.38703 16.508 6.77203 16.853 8.54303"
      stroke="#1A162E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.0315 11.4724C14.0205 15.4604 14.9254 10.8467 17.4653 13.3848C19.9138 15.8328 21.3222 16.3232 18.2188 19.4247C17.8302 19.737 15.3613 23.4943 6.68447 14.8197C-1.99341 6.144 1.76157 3.67244 2.07394 3.28395C5.18377 0.173846 5.66682 1.58938 8.11539 4.03733C10.6541 6.5765 6.04254 7.48441 10.0315 11.4724Z"
      stroke="#1A162E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const InfoIcon = ({ width = '1.6rem', height = '1.6rem', className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} viewBox="0 0 16 16">
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h16v16H0z" />
      <circle cx="7" cy="7" r="7" stroke="#9A9A9A" transform="translate(1 1)" />
      <path fill="#9A9A9A" d="M7 4h2v2H7zM7 7h2v5H7z" />
    </g>
  </svg>
);

export const AddressIcon = ({ width = '1.8rem', height = '2rem', className }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 8.50051C11.5 7.11924 10.3808 6 9.00051 6C7.61924 6 6.5 7.11924 6.5 8.50051C6.5 9.88076 7.61924 11 9.00051 11C10.3808 11 11.5 9.88076 11.5 8.50051Z"
      stroke="#1A162E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.99951 19C7.80104 19 1.5 13.8984 1.5 8.56329C1.5 4.38664 4.8571 1 8.99951 1C13.1419 1 16.5 4.38664 16.5 8.56329C16.5 13.8984 10.198 19 8.99951 19Z"
      stroke="#1A162E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const NoteIcon = ({ width = '2rem', height = '2rem', className }) => (
  <svg className={className} width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <g>
      <g>
        <g>
          <path
            d="M179.184,170.667h170.667c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533H179.184
				c-4.71,0-8.533,3.823-8.533,8.533C170.651,166.844,174.474,170.667,179.184,170.667z"
          />
          <path
            d="M484.754,351.497l-17.067-17.067c-13.124-13.116-33.092-13.09-46.199,0L309.684,446.234
				c-1.604,1.596-2.5,3.772-2.5,6.033v51.2c0,4.71,3.814,8.533,8.533,8.533h51.2c2.27,0,4.437-0.896,6.033-2.5l111.804-111.804
				C498.348,384.102,498.348,365.099,484.754,351.497z M410.454,369.596l13.534,13.534l-74.138,74.138l-13.534-13.534
				L410.454,369.596z M324.251,494.933v-39.134l39.134,39.134H324.251z M375.451,482.867l-13.534-13.534l74.138-74.138
				l13.525,13.534L375.451,482.867z M472.688,385.63l-11.034,11.034l-39.134-39.134l11.034-11.034c6.758-6.75,15.292-6.767,22.067,0
				l17.067,17.067C479.591,370.475,479.591,378.726,472.688,385.63z"
          />
          <path
            d="M315.717,51.2h17.067c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533h-17.067
				c-4.719,0-8.533,3.823-8.533,8.533C307.184,47.377,310.998,51.2,315.717,51.2z"
          />
          <path
            d="M366.917,102.4c14.114,0,25.6-11.486,25.6-25.6c0-11.11-7.159-20.489-17.067-24.03V8.533c0-4.71-3.814-8.533-8.533-8.533
				s-8.533,3.823-8.533,8.533V52.77c-9.907,3.541-17.067,12.919-17.067,24.03C341.317,90.914,352.803,102.4,366.917,102.4z
				 M366.917,68.267c4.71,0,8.533,3.831,8.533,8.533c0,4.702-3.823,8.533-8.533,8.533s-8.533-3.831-8.533-8.533
				C358.384,72.098,362.207,68.267,366.917,68.267z"
          />
          <path
            d="M179.184,221.867h153.6c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533h-153.6
				c-4.71,0-8.533,3.823-8.533,8.533C170.651,218.044,174.474,221.867,179.184,221.867z"
          />
          <path
            d="M401.051,51.2h17.067c12.442,0,25.6,13.158,25.6,25.6v221.158c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533
				V76.8c0-21.931-20.736-42.667-42.667-42.667h-17.067c-4.719,0-8.533,3.823-8.533,8.533C392.517,47.377,396.332,51.2,401.051,51.2
				z"
          />
          <path
            d="M281.584,102.4c14.114,0,25.6-11.486,25.6-25.6c0-11.11-7.159-20.489-17.067-24.03V8.533c0-4.71-3.814-8.533-8.533-8.533
				c-4.719,0-8.533,3.823-8.533,8.533V52.77c-9.907,3.541-17.067,12.919-17.067,24.03C255.984,90.914,267.47,102.4,281.584,102.4z
				 M281.584,68.267c4.71,0,8.533,3.831,8.533,8.533c0,4.702-3.823,8.533-8.533,8.533s-8.533-3.831-8.533-8.533
				C273.051,72.098,276.874,68.267,281.584,68.267z"
          />
          <path
            d="M375.451,264.533c0-4.71-3.814-8.533-8.533-8.533H179.184c-4.71,0-8.533,3.823-8.533,8.533
				c0,4.71,3.823,8.533,8.533,8.533h187.733C371.636,273.067,375.451,269.244,375.451,264.533z"
          />
          <path
            d="M179.184,307.2c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h170.667c4.719,0,8.533-3.823,8.533-8.533
				s-3.814-8.533-8.533-8.533H179.184z"
          />
          <path
            d="M281.584,443.733c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533H34.117V76.8c0-12.442,13.158-25.6,25.6-25.6
				h17.067c4.71,0,8.533-3.823,8.533-8.533c0-4.71-3.823-8.533-8.533-8.533H59.717c-21.931,0-42.667,20.736-42.667,42.667v392.533
				c0,21.931,20.736,42.667,42.667,42.667h221.867c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533H59.717
				c-9.574,0-19.507-7.808-23.612-17.067h245.478c4.719,0,8.533-3.823,8.533-8.533s-3.814-8.533-8.533-8.533H34.117v-17.067H281.584
				z"
          />
          <path
            d="M127.984,204.8h-17.067c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533h17.067
				c4.71,0,8.533-3.823,8.533-8.533C136.517,208.623,132.694,204.8,127.984,204.8z"
          />
          <path
            d="M127.984,358.4h-17.067c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h17.067c4.71,0,8.533-3.823,8.533-8.533
				S132.694,358.4,127.984,358.4z"
          />
          <path
            d="M230.384,51.2h17.067c4.719,0,8.533-3.823,8.533-8.533c0-4.71-3.814-8.533-8.533-8.533h-17.067
				c-4.71,0-8.533,3.823-8.533,8.533C221.851,47.377,225.674,51.2,230.384,51.2z"
          />
          <path
            d="M298.651,358.4H179.184c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h119.467
				c4.719,0,8.533-3.823,8.533-8.533S303.37,358.4,298.651,358.4z"
          />
          <path
            d="M127.984,153.6h-17.067c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533h17.067
				c4.71,0,8.533-3.823,8.533-8.533C136.517,157.423,132.694,153.6,127.984,153.6z"
          />
          <path
            d="M127.984,256h-17.067c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533h17.067
				c4.71,0,8.533-3.823,8.533-8.533C136.517,259.823,132.694,256,127.984,256z"
          />
          <path
            d="M145.051,51.2h17.067c4.71,0,8.533-3.823,8.533-8.533c0-4.71-3.823-8.533-8.533-8.533h-17.067
				c-4.71,0-8.533,3.823-8.533,8.533C136.517,47.377,140.34,51.2,145.051,51.2z"
          />
          <path
            d="M127.984,307.2h-17.067c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h17.067c4.71,0,8.533-3.823,8.533-8.533
				S132.694,307.2,127.984,307.2z"
          />
          <path
            d="M196.251,102.4c14.114,0,25.6-11.486,25.6-25.6c0-11.11-7.151-20.489-17.067-24.03V8.533c0-4.71-3.823-8.533-8.533-8.533
				s-8.533,3.823-8.533,8.533V52.77c-9.916,3.541-17.067,12.919-17.067,24.03C170.651,90.914,182.137,102.4,196.251,102.4z
				 M196.251,68.267c4.702,0,8.533,3.831,8.533,8.533c0,4.702-3.831,8.533-8.533,8.533c-4.702,0-8.533-3.831-8.533-8.533
				C187.717,72.098,191.549,68.267,196.251,68.267z"
          />
          <path
            d="M110.917,102.4c14.114,0,25.6-11.486,25.6-25.6c0-11.11-7.151-20.489-17.067-24.03V8.533c0-4.71-3.823-8.533-8.533-8.533
				c-4.71,0-8.533,3.823-8.533,8.533V52.77C92.468,56.311,85.317,65.69,85.317,76.8C85.317,90.914,96.803,102.4,110.917,102.4z
				 M110.917,68.267c4.702,0,8.533,3.831,8.533,8.533c0,4.702-3.831,8.533-8.533,8.533c-4.702,0-8.533-3.831-8.533-8.533
				C102.384,72.098,106.215,68.267,110.917,68.267z"
          />
        </g>
      </g>
    </g>
  </svg>
);

export const BellIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
      />
    </svg>
  );
};

export const DashBoardIcon = ({ className }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path
          d="M4165 4790 c-163 -33 -301 -138 -373 -285 -42 -85 -55 -138 -55 -235
-1 -148 51 -275 155 -378 105 -105 231 -156 383 -155 280 2 503 214 522 498
10 154 -42 290 -157 406 -125 127 -304 183 -475 149z m169 -322 c81 -25 146
-118 146 -210 0 -51 -46 -135 -91 -165 -92 -61 -192 -51 -269 27 -106 105 -81
268 51 334 58 29 101 32 163 14z"
        />
        <path
          d="M1817 4629 c-241 -12 -415 -39 -557 -86 -313 -104 -579 -370 -683
-683 -77 -234 -97 -495 -97 -1300 0 -805 20 -1066 97 -1300 102 -306 368 -576
669 -678 238 -81 506 -102 1314 -102 927 0 1174 27 1435 154 253 124 460 362
549 630 15 44 35 127 46 186 40 222 44 337 45 1087 0 713 0 722 -21 749 -39
53 -71 69 -134 69 -63 0 -95 -16 -134 -69 -21 -27 -21 -41 -27 -759 -4 -445
-11 -773 -18 -837 -36 -328 -99 -480 -263 -636 -89 -86 -171 -136 -280 -172
-211 -70 -496 -86 -1358 -79 -345 3 -659 10 -715 16 -317 35 -474 100 -626
258 -171 176 -225 345 -249 768 -13 233 -13 1197 0 1430 24 424 78 591 249
768 153 158 310 223 626 258 69 7 381 14 842 18 718 6 732 6 759 27 53 39 69
71 69 134 0 63 -16 95 -69 134 -27 21 -37 21 -674 22 -356 1 -714 -2 -795 -7z"
        />
        <path
          d="M3565 3316 c-16 -7 -40 -24 -52 -37 -12 -13 -99 -180 -193 -371 -188
-382 -203 -403 -304 -433 -62 -19 -80 -19 -145 1 -74 22 -123 70 -178 178
-106 205 -287 319 -508 320 -167 1 -284 -45 -403 -157 l-75 -72 -182 -370
c-100 -203 -185 -383 -189 -398 -23 -99 83 -203 188 -183 72 14 89 40 273 413
150 304 179 357 215 388 103 88 253 81 344 -17 17 -18 51 -71 75 -118 126
-246 397 -367 665 -296 95 25 166 68 247 147 l78 77 181 369 c154 313 182 375
182 414 0 112 -118 190 -219 145z"
        />
      </g>
    </svg>
  );
};

export const UserGroupIcon = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
      />
    </svg>
  );
};

export const ProductIcon = ({ className }) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path
          d="M2467 5110 c-112 -29 -218 -117 -270 -228 -29 -61 -32 -76 -33 -171
l0 -103 -111 -66 c-68 -40 -116 -75 -122 -89 -20 -43 -13 -82 18 -114 47 -46
82 -40 213 35 l112 64 35 -28 c20 -16 63 -41 96 -57 52 -24 72 -27 155 -27 83
0 103 3 155 27 33 16 76 41 96 57 l36 29 594 -343 594 -344 -3 -74 c-8 -175
75 -321 224 -395 l74 -36 0 -687 0 -687 -74 -37 c-151 -74 -233 -220 -224
-397 l3 -72 -593 -342 -594 -343 -49 37 c-72 54 -138 75 -239 76 -101 0 -166
-21 -239 -76 l-48 -37 -399 230 c-220 126 -487 281 -594 343 l-195 113 3 79
c4 92 -18 176 -68 253 -42 65 -90 106 -167 142 l-63 30 0 688 0 688 63 30 c77
36 125 77 167 142 50 77 72 161 68 253 l-3 79 110 64 c127 73 154 104 139 162
-5 19 -21 44 -37 56 -46 34 -81 26 -205 -46 l-114 -66 -49 37 c-74 56 -138 76
-239 75 -183 -2 -329 -108 -381 -277 -59 -191 32 -392 217 -479 l64 -30 0
-688 0 -688 -63 -30 c-324 -151 -312 -604 20 -733 43 -17 80 -23 143 -23 101
-1 165 19 239 75 l49 37 593 -342 593 -343 0 -104 c1 -95 4 -110 33 -171 41
-88 113 -160 201 -201 61 -29 76 -32 163 -32 90 0 99 2 171 38 91 44 146 102
192 197 28 59 31 74 32 169 l0 104 255 147 c140 81 406 235 593 342 l338 196
49 -37 c74 -56 138 -76 239 -75 183 2 329 108 381 277 59 191 -32 392 -217
479 l-64 30 0 688 0 688 64 30 c185 87 276 288 217 479 -52 169 -198 275 -381
277 -102 1 -164 -18 -236 -73 l-52 -39 -338 196 c-187 107 -454 261 -594 343
l-255 147 0 103 c0 95 -3 109 -31 169 -69 144 -190 228 -340 235 -44 3 -96 0
-117 -5z m189 -217 c22 -11 53 -39 69 -62 26 -37 30 -51 30 -109 0 -80 -25
-129 -88 -170 -56 -37 -153 -39 -210 -3 -109 67 -128 220 -39 309 21 21 53 43
72 49 48 16 120 10 166 -14z m-1873 -1078 c78 -37 122 -136 98 -222 -26 -99
-92 -148 -198 -148 -52 0 -68 5 -104 30 -53 38 -89 103 -89 163 0 84 60 168
137 192 40 13 112 6 156 -15z m3757 -9 c59 -39 85 -89 85 -166 0 -76 -26 -127
-84 -165 -130 -86 -311 10 -311 165 0 76 65 169 132 189 53 16 135 6 178 -23z
m-3757 -2151 c78 -37 122 -136 98 -222 -26 -98 -92 -148 -196 -148 -45 0 -69
6 -98 24 -110 68 -128 220 -37 311 22 22 54 44 72 49 45 14 116 8 161 -14z
m3757 -9 c51 -33 80 -84 87 -150 19 -182 -207 -286 -337 -156 -103 103 -63
278 75 329 47 17 131 6 175 -23z m-1884 -1073 c22 -11 53 -39 69 -62 26 -37
30 -51 30 -109 0 -80 -25 -129 -88 -170 -56 -37 -153 -39 -210 -3 -76 47 -111
140 -88 229 14 51 76 117 123 131 47 15 119 7 164 -16z"
        />
        <path
          d="M1559 4251 c-68 -69 -5 -187 89 -166 58 12 91 72 72 130 -22 67 -110
87 -161 36z"
        />
        <path
          d="M2494 4020 c-32 -16 -318 -180 -634 -363 -410 -237 -578 -339 -587
-357 -18 -36 -18 -1444 0 -1480 9 -18 177 -120 587 -358 316 -182 603 -346
637 -363 l61 -31 44 20 c65 29 1210 691 1233 713 20 19 20 33 20 759 0 726 0
740 -20 759 -17 16 -1122 658 -1210 703 -57 29 -69 29 -131 -2z m261 -302
c107 -62 194 -116 193 -120 -2 -4 -225 -136 -495 -292 l-493 -284 -199 115
-200 116 497 288 c273 158 498 288 500 288 1 1 90 -50 197 -111z m608 -352
l197 -113 -497 -287 c-273 -158 -501 -286 -507 -284 -14 4 -395 222 -392 225
6 6 991 573 997 573 3 0 94 -51 202 -114z m-1361 -598 l457 -263 1 -578 0
-578 -58 33 c-32 18 -257 148 -500 288 l-442 255 0 578 0 578 43 -25 c23 -14
248 -144 499 -288z m1658 -266 l0 -577 -467 -270 c-258 -148 -483 -278 -500
-288 l-33 -19 0 579 1 578 497 287 c273 157 498 287 500 287 1 1 2 -259 2
-577z"
        />
        <path
          d="M3308 2221 c-170 -93 -357 -206 -375 -227 -32 -36 -30 -86 5 -124 51
-57 66 -53 282 70 107 60 205 122 218 136 15 17 22 38 22 64 0 80 -78 121
-152 81z"
        />
      </g>
    </svg>
  );
};
