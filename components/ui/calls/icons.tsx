import { LucideTrash, Signal, SignalHigh, SignalLow, SignalMedium, SignalZero } from 'lucide-react';
import { type SVGProps } from "react";

export const Icons = {
  camera: ({color, ..._props}: SVGProps<SVGSVGElement>)  => (
    <svg
      {..._props}
      viewBox="0 0 28 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 9.5V6C19 5.45 18.55 5 18 5H6C5.45 5 5 5.45 5 6V16C5 16.55 5.45 17 6 17H18C18.55 17 19 16.55 19 16V12.5L23 16.5V5.5L19 9.5ZM17 7.67V15H7V7H17V7.67ZM9.11 10.11L13 14L16.77 10.21L15.99 9.42L13 12.43L9.89 9.33H12.44V8.22H8V12.66H9.11V10.11Z"
        fill={color || "#0F172A"}
      />
    </svg>
  ),
  spinner: ({color, ..._props}: SVGProps<SVGSVGElement>) => (
    <svg {..._props} viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke={color || "#0F172A"}>
      <g fill="none" fillRule="evenodd">
        <g transform="translate(1 1)" strokeWidth="2">
          <circle strokeOpacity=".5" cx="18" cy="18" r="18"/>
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"/>
          </path>
        </g>
      </g>
    </svg>
  ),
  close: ({color, ..._props}: SVGProps<SVGSVGElement>) => (
    <svg {..._props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  ),
  avatar: ({color, ..._props}: SVGProps<SVGSVGElement>) => (
    <svg {..._props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.6663 17.5V15.8333C16.6663 14.9493 16.3151 14.1014 15.69 13.4763C15.0649 12.8512 14.2171 12.5 13.333 12.5H6.66634C5.78229 12.5 4.93444 12.8512 4.30932 13.4763C3.6842 14.1014 3.33301 14.9493 3.33301 15.8333V17.5M13.333 5.83333C13.333 7.67428 11.8406 9.16667 9.99967 9.16667C8.15872 9.16667 6.66634 7.67428 6.66634 5.83333C6.66634 3.99238 8.15872 2.5 9.99967 2.5C11.8406 2.5 13.333 3.99238 13.333 5.83333Z"
        stroke={color || "#0F172A"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  arrow: ({color, ..._props}: SVGProps<SVGSVGElement>) => (
    <svg {..._props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color || "#0F172A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="19" x2="12" y2="5"></line>
      <polyline points="5 12 12 5 19 12"></polyline>
    </svg>
  ),
  video: ({color, ..._props}: SVGProps<SVGSVGElement>) => (
    <svg {..._props} viewBox="0 0 25 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24.1776 2.05164C24.0802 2.00408 23.9705 1.98155 23.8602 1.98645C23.7499 1.99136 23.6431 2.02352 23.5512 2.0795L19.6186 4.47336V1.8C19.6186 1.45522 19.4686 1.12456 19.2016 0.880761C18.9346 0.636964 18.5725 0.5 18.1949 0.5H1.92373C1.54613 0.5 1.184 0.636964 0.917001 0.880761C0.65 1.12456 0.5 1.45522 0.5 1.8V12.2C0.5 12.5448 0.65 12.8754 0.917001 13.1192C1.184 13.363 1.54613 13.5 1.92373 13.5H18.1949C18.5725 13.5 18.9346 13.363 19.2016 13.1192C19.4686 12.8754 19.6186 12.5448 19.6186 12.2V9.52664L23.5512 11.9214C23.6431 11.9774 23.75 12.0096 23.8604 12.0145C23.9708 12.0193 24.0806 11.9967 24.178 11.949C24.2755 11.9014 24.3569 11.8304 24.4136 11.7438C24.4703 11.6571 24.5002 11.5581 24.5 11.4571V2.54286C24.5 2.442 24.47 2.34305 24.4132 2.25654C24.3564 2.17003 24.275 2.09921 24.1776 2.05164ZM18.3983 12.2C18.3983 12.2493 18.3769 12.2965 18.3387 12.3313C18.3006 12.3661 18.2489 12.3857 18.1949 12.3857H1.92373C1.86979 12.3857 1.81805 12.3661 1.77991 12.3313C1.74177 12.2965 1.72034 12.2493 1.72034 12.2V1.8C1.72034 1.75075 1.74177 1.70351 1.77991 1.66868C1.81805 1.63385 1.86979 1.61429 1.92373 1.61429H18.1949C18.2489 1.61429 18.3006 1.63385 18.3387 1.66868C18.3769 1.70351 18.3983 1.75075 18.3983 1.8V12.2ZM23.2797 10.4162L19.6186 8.18764V5.81236L23.2797 3.58379V10.4162Z"
        fill={color || "#0F172A"}
      />
    </svg>
  ),
  add: ({color, ..._props}: SVGProps<SVGSVGElement>) => (
    <svg {..._props} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.6666 9C17.6666 9.18786 17.592 9.36803 17.4592 9.50087C17.3263 9.63371 17.1462 9.70833 16.9583 9.70833H9.87496V16.7917C9.87496 16.9795 9.80033 17.1597 9.66749 17.2925C9.53466 17.4254 9.35449 17.5 9.16663 17.5C8.97876 17.5 8.7986 17.4254 8.66576 17.2925C8.53292 17.1597 8.45829 16.9795 8.45829 16.7917V9.70833H1.37496C1.1871 9.70833 1.00693 9.63371 0.874092 9.50087C0.741254 9.36803 0.666626 9.18786 0.666626 9C0.666626 8.81214 0.741254 8.63197 0.874092 8.49913C1.00693 8.36629 1.1871 8.29167 1.37496 8.29167H8.45829V1.20833C8.45829 1.02047 8.53292 0.840304 8.66576 0.707466C8.7986 0.574628 8.97876 0.5 9.16663 0.5C9.35449 0.5 9.53466 0.574628 9.66749 0.707466C9.80033 0.840304 9.87496 1.02047 9.87496 1.20833V8.29167H16.9583C17.1462 8.29167 17.3263 8.36629 17.4592 8.49913C17.592 8.63197 17.6666 8.81214 17.6666 9Z"
        fill={color || "#0F172A"}
      />
    </svg>
  ),
  invite: ({color, ..._props}: SVGProps<SVGSVGElement>) => (
    <svg {..._props} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_535_27410)">
        <path
          d="M19.8333 17V19H7.83325V17C7.83325 17 7.83325 13 13.8333 13C19.8333 13 19.8333 17 19.8333 17ZM16.8333 8C16.8333 7.40666 16.6573 6.82664 16.3277 6.33329C15.998 5.83994 15.5295 5.45543 14.9813 5.22836C14.4331 5.0013 13.8299 4.94189 13.248 5.05765C12.666 5.1734 12.1315 5.45912 11.7119 5.87868C11.2924 6.29824 11.0067 6.83279 10.8909 7.41473C10.7751 7.99667 10.8345 8.59987 11.0616 9.14805C11.2887 9.69623 11.6732 10.1648 12.1665 10.4944C12.6599 10.8241 13.2399 11 13.8333 11C14.6289 11 15.392 10.6839 15.9546 10.1213C16.5172 9.55871 16.8333 8.79565 16.8333 8ZM20.0333 13.06C20.5799 13.5643 21.0206 14.1724 21.3296 14.8489C21.6387 15.5254 21.8099 16.2566 21.8333 17V19H24.8333V17C24.8333 17 24.8333 13.55 20.0333 13.06ZM18.8333 5C18.5311 5.00018 18.2309 5.04741 17.9433 5.14C18.5283 5.97897 18.842 6.97718 18.842 8C18.842 9.02282 18.5283 10.021 17.9433 10.86C18.2309 10.9526 18.5311 10.9998 18.8333 11C19.6289 11 20.392 10.6839 20.9546 10.1213C21.5172 9.55871 21.8333 8.79565 21.8333 8C21.8333 7.20435 21.5172 6.44129 20.9546 5.87868C20.392 5.31607 19.6289 5 18.8333 5ZM8.83325 10H5.83325V7H3.83325V10H0.833252V12H3.83325V15H5.83325V12H8.83325V10Z"
          fill={color || "#0F172A"}
        />
      </g>
      <defs>
        <clipPath id="clip0_535_27410">
          <rect
            width={_props.width}
            height={_props.height}
            fill={color || "#0F172A"}
            transform="translate(0.833252)"
          />
        </clipPath>
      </defs>
    </svg>
  ),
  chevronLeft: ({color, ..._props}: SVGProps<SVGSVGElement>) => (
    <svg {..._props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color || "#0F172A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  ),
  chevronRight: ({color, ..._props}: SVGProps<SVGSVGElement>) => (
    <svg {..._props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={color || "#0F172A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l6-6-6-6" />
    </svg>
  ),
  logout: ({color, ..._props}: SVGProps<SVGSVGElement>) => (
    <svg {..._props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16" stroke={color || "#0F172A"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M9 12H21M21 12L18 9M21 12L18 15" stroke={color || "#0F172A"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  ),
  join: ({color, ..._props}: SVGProps<SVGSVGElement>) => (
    <svg {..._props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H5C4.46957 4 3.96086 4.21071 3.58579 4.58579C3.21071 4.96086 3 5.46957 3 6V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16" stroke={color || "#0F172A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9 12H21M21 12L18 9M21 12L18 15" stroke={color || "#0F172A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  trash: LucideTrash,
  signalZero: SignalZero,
  signalLow: SignalLow,
  signalHigh: SignalHigh,
  signalMedium: SignalMedium,
  signalMax: Signal,
}