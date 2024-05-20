import { LucideTrash } from "lucide-react";
import { type SVGProps } from "react";

export const Icons = {
  logo: ({color, ..._props}: SVGProps<SVGSVGElement>)  => (
    <svg
      {..._props}
      viewBox="0 0 105 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 9.5V6C19 5.45 18.55 5 18 5H6C5.45 5 5 5.45 5 6V16C5 16.55 5.45 17 6 17H18C18.55 17 19 16.55 19 16V12.5L23 16.5V5.5L19 9.5ZM17 7.67V15H7V7H17V7.67ZM9.11 10.11L13 14L16.77 10.21L15.99 9.42L13 12.43L9.89 9.33H12.44V8.22H8V12.66H9.11V10.11Z"
        fill={color || "#0F172A"}
      />
      <path
        d="M32.9403 17.1705C32.0464 17.1705 31.2775 16.9811 30.6335 16.6023C29.9934 16.2197 29.5009 15.6894 29.1562 15.0114C28.8153 14.3333 28.6449 13.553 28.6449 12.6705C28.6449 11.7765 28.8172 10.9924 29.1619 10.3182C29.5104 9.64015 30.0047 9.11174 30.6449 8.73295C31.285 8.35038 32.0464 8.15909 32.929 8.15909C33.6903 8.15909 34.357 8.29735 34.929 8.57386C35.5009 8.85038 35.9536 9.23864 36.2869 9.73864C36.6203 10.2386 36.804 10.8258 36.8381 11.5H34.554C34.4896 11.0644 34.3191 10.714 34.0426 10.4489C33.7699 10.1799 33.4119 10.0455 32.9688 10.0455C32.5938 10.0455 32.2661 10.1477 31.9858 10.3523C31.7093 10.553 31.4934 10.8466 31.3381 11.233C31.1828 11.6193 31.1051 12.0871 31.1051 12.6364C31.1051 13.1932 31.1809 13.6667 31.3324 14.0568C31.4877 14.447 31.7055 14.7443 31.9858 14.9489C32.2661 15.1534 32.5938 15.2557 32.9688 15.2557C33.2453 15.2557 33.4934 15.1989 33.7131 15.0852C33.9366 14.9716 34.1203 14.8068 34.2642 14.5909C34.4119 14.3712 34.5085 14.108 34.554 13.8011H36.8381C36.8002 14.4678 36.6184 15.0549 36.2926 15.5625C35.9706 16.0663 35.5256 16.4602 34.9574 16.7443C34.3892 17.0284 33.7169 17.1705 32.9403 17.1705ZM40.3764 17.1648C39.8196 17.1648 39.3234 17.0682 38.8878 16.875C38.4522 16.678 38.1075 16.3883 37.8537 16.0057C37.6037 15.6193 37.4787 15.1383 37.4787 14.5625C37.4787 14.0777 37.5677 13.6705 37.7457 13.3409C37.9238 13.0114 38.1662 12.7462 38.473 12.5455C38.7798 12.3447 39.1283 12.1932 39.5185 12.0909C39.9124 11.9886 40.3253 11.9167 40.7571 11.875C41.2647 11.822 41.6738 11.7727 41.9844 11.7273C42.295 11.678 42.5204 11.6061 42.6605 11.5114C42.8007 11.4167 42.8707 11.2765 42.8707 11.0909V11.0568C42.8707 10.697 42.7571 10.4186 42.5298 10.2216C42.3063 10.0246 41.9882 9.92614 41.5753 9.92614C41.1397 9.92614 40.7931 10.0227 40.5355 10.2159C40.2779 10.4053 40.1075 10.6439 40.0241 10.9318L37.7855 10.75C37.8991 10.2197 38.1226 9.76136 38.456 9.375C38.7893 8.98485 39.2192 8.68561 39.7457 8.47727C40.276 8.26515 40.8897 8.15909 41.5866 8.15909C42.0715 8.15909 42.5355 8.21591 42.9787 8.32955C43.4257 8.44318 43.8215 8.61932 44.1662 8.85795C44.5147 9.09659 44.7893 9.40341 44.9901 9.77841C45.1908 10.1496 45.2912 10.5947 45.2912 11.1136V17H42.9957V15.7898H42.9276C42.7874 16.0625 42.5999 16.303 42.3651 16.5114C42.1302 16.7159 41.848 16.8769 41.5185 16.9943C41.1889 17.108 40.8082 17.1648 40.3764 17.1648ZM41.0696 15.4943C41.4257 15.4943 41.7401 15.4242 42.0128 15.2841C42.2855 15.1402 42.4995 14.947 42.6548 14.7045C42.8101 14.4621 42.8878 14.1875 42.8878 13.8807V12.9545C42.812 13.0038 42.7079 13.0492 42.5753 13.0909C42.4465 13.1288 42.3007 13.1648 42.1378 13.1989C41.9749 13.2292 41.812 13.2576 41.6491 13.2841C41.4863 13.3068 41.3385 13.3277 41.206 13.3466C40.9219 13.3883 40.6738 13.4545 40.4616 13.5455C40.2495 13.6364 40.0848 13.7595 39.9673 13.9148C39.8499 14.0663 39.7912 14.2557 39.7912 14.483C39.7912 14.8125 39.9105 15.0644 40.1491 15.2386C40.3916 15.4091 40.6984 15.4943 41.0696 15.4943ZM49.0895 5.36364V17H46.669V5.36364H49.0895ZM52.9489 5.36364V17H50.5284V5.36364H52.9489ZM61.6491 10.7614L59.4332 10.8977C59.3954 10.7083 59.3139 10.5379 59.1889 10.3864C59.0639 10.2311 58.8991 10.108 58.6946 10.017C58.4938 9.92235 58.2533 9.875 57.973 9.875C57.598 9.875 57.2817 9.95455 57.0241 10.1136C56.7666 10.2689 56.6378 10.4773 56.6378 10.7386C56.6378 10.947 56.7211 11.1231 56.8878 11.267C57.0545 11.411 57.3404 11.5265 57.7457 11.6136L59.3253 11.9318C60.1738 12.1061 60.8063 12.3864 61.223 12.7727C61.6397 13.1591 61.848 13.6667 61.848 14.2955C61.848 14.8674 61.6795 15.3693 61.3423 15.8011C61.009 16.233 60.5507 16.5701 59.9673 16.8125C59.3878 17.0511 58.7192 17.1705 57.9616 17.1705C56.8063 17.1705 55.8859 16.9299 55.2003 16.4489C54.5185 15.964 54.1188 15.3049 54.0014 14.4716L56.3821 14.3466C56.4541 14.6989 56.6283 14.9678 56.9048 15.1534C57.1813 15.3352 57.5355 15.4261 57.9673 15.4261C58.3916 15.4261 58.7325 15.3447 58.9901 15.1818C59.2514 15.0152 59.384 14.8011 59.3878 14.5398C59.384 14.3201 59.2912 14.1402 59.1094 14C58.9276 13.8561 58.6473 13.7462 58.2685 13.6705L56.7571 13.3693C55.9048 13.1989 55.2704 12.9034 54.8537 12.483C54.4408 12.0625 54.2344 11.5265 54.2344 10.875C54.2344 10.3144 54.3859 9.83144 54.6889 9.42614C54.9957 9.02083 55.4257 8.70833 55.9787 8.48864C56.5355 8.26894 57.187 8.15909 57.9332 8.15909C59.0355 8.15909 59.9029 8.39205 60.5355 8.85795C61.1719 9.32386 61.5431 9.95833 61.6491 10.7614ZM68.6392 20.2727V15.6023H68.5653C68.4517 15.8447 68.2907 16.0852 68.0824 16.3239C67.8778 16.5587 67.6108 16.7538 67.2812 16.9091C66.9555 17.0644 66.5578 17.142 66.0881 17.142C65.4252 17.142 64.8248 16.9716 64.2869 16.6307C63.7528 16.286 63.3286 15.7803 63.0142 15.1136C62.7036 14.4432 62.5483 13.6212 62.5483 12.6477C62.5483 11.6477 62.7093 10.8163 63.0312 10.1534C63.3532 9.48674 63.7813 8.98864 64.3153 8.65909C64.8532 8.32576 65.4422 8.15909 66.0824 8.15909C66.571 8.15909 66.9782 8.24242 67.304 8.40909C67.6335 8.57197 67.8987 8.77652 68.0994 9.02273C68.304 9.26515 68.4593 9.50379 68.5653 9.73864H68.6676V8.27273H71.054V20.2727H68.6392ZM66.8551 15.2159C67.2453 15.2159 67.5748 15.1098 67.8438 14.8977C68.1165 14.6818 68.3248 14.3807 68.4688 13.9943C68.6165 13.608 68.6903 13.1553 68.6903 12.6364C68.6903 12.1174 68.6184 11.6667 68.4744 11.2841C68.3305 10.9015 68.1222 10.6061 67.8494 10.3977C67.5767 10.1894 67.2453 10.0852 66.8551 10.0852C66.4574 10.0852 66.1222 10.1932 65.8494 10.4091C65.5767 10.625 65.3703 10.9242 65.2301 11.3068C65.09 11.6894 65.0199 12.1326 65.0199 12.6364C65.0199 13.1439 65.09 13.5928 65.2301 13.983C65.3741 14.3693 65.5805 14.6723 65.8494 14.892C66.1222 15.108 66.4574 15.2159 66.8551 15.2159ZM78.0938 13.2841V8.27273H80.5142V17H78.1903V15.4148H78.0994C77.9025 15.9261 77.5748 16.3371 77.1165 16.6477C76.6619 16.9583 76.107 17.1136 75.4517 17.1136C74.8684 17.1136 74.3551 16.9811 73.9119 16.7159C73.4688 16.4508 73.1222 16.0739 72.8722 15.5852C72.6259 15.0966 72.5009 14.5114 72.4972 13.8295V8.27273H74.9176V13.3977C74.9214 13.9129 75.0597 14.3201 75.3324 14.6193C75.6051 14.9186 75.9706 15.0682 76.429 15.0682C76.7206 15.0682 76.9934 15.0019 77.2472 14.8693C77.5009 14.733 77.7055 14.5322 77.8608 14.267C78.0199 14.0019 78.0975 13.6742 78.0938 13.2841ZM84.4389 17.1648C83.8821 17.1648 83.3859 17.0682 82.9503 16.875C82.5147 16.678 82.17 16.3883 81.9162 16.0057C81.6662 15.6193 81.5412 15.1383 81.5412 14.5625C81.5412 14.0777 81.6302 13.6705 81.8082 13.3409C81.9863 13.0114 82.2287 12.7462 82.5355 12.5455C82.8423 12.3447 83.1908 12.1932 83.581 12.0909C83.9749 11.9886 84.3878 11.9167 84.8196 11.875C85.3272 11.822 85.7363 11.7727 86.0469 11.7273C86.3575 11.678 86.5829 11.6061 86.723 11.5114C86.8632 11.4167 86.9332 11.2765 86.9332 11.0909V11.0568C86.9332 10.697 86.8196 10.4186 86.5923 10.2216C86.3688 10.0246 86.0507 9.92614 85.6378 9.92614C85.2022 9.92614 84.8556 10.0227 84.598 10.2159C84.3404 10.4053 84.17 10.6439 84.0866 10.9318L81.848 10.75C81.9616 10.2197 82.1851 9.76136 82.5185 9.375C82.8518 8.98485 83.2817 8.68561 83.8082 8.47727C84.3385 8.26515 84.9522 8.15909 85.6491 8.15909C86.134 8.15909 86.598 8.21591 87.0412 8.32955C87.4882 8.44318 87.884 8.61932 88.2287 8.85795C88.5772 9.09659 88.8518 9.40341 89.0526 9.77841C89.2533 10.1496 89.3537 10.5947 89.3537 11.1136V17H87.0582V15.7898H86.9901C86.8499 16.0625 86.6624 16.303 86.4276 16.5114C86.1927 16.7159 85.9105 16.8769 85.581 16.9943C85.2514 17.108 84.8707 17.1648 84.4389 17.1648ZM85.1321 15.4943C85.4882 15.4943 85.8026 15.4242 86.0753 15.2841C86.348 15.1402 86.562 14.947 86.7173 14.7045C86.8726 14.4621 86.9503 14.1875 86.9503 13.8807V12.9545C86.8745 13.0038 86.7704 13.0492 86.6378 13.0909C86.509 13.1288 86.3632 13.1648 86.2003 13.1989C86.0374 13.2292 85.8745 13.2576 85.7116 13.2841C85.5488 13.3068 85.401 13.3277 85.2685 13.3466C84.9844 13.3883 84.7363 13.4545 84.5241 13.5455C84.312 13.6364 84.1473 13.7595 84.0298 13.9148C83.9124 14.0663 83.8537 14.2557 83.8537 14.483C83.8537 14.8125 83.973 15.0644 84.2116 15.2386C84.4541 15.4091 84.7609 15.4943 85.1321 15.4943ZM90.7315 17V8.27273H93.0781V9.79545H93.169C93.3281 9.25379 93.5952 8.8447 93.9702 8.56818C94.3452 8.28788 94.777 8.14773 95.2656 8.14773C95.3868 8.14773 95.5175 8.1553 95.6577 8.17045C95.7978 8.18561 95.9209 8.20644 96.027 8.23295V10.3807C95.9134 10.3466 95.7562 10.3163 95.5554 10.2898C95.3546 10.2633 95.1709 10.25 95.0043 10.25C94.6482 10.25 94.33 10.3277 94.0497 10.483C93.7732 10.6345 93.5535 10.8466 93.3906 11.1193C93.2315 11.392 93.152 11.7064 93.152 12.0625V17H90.7315ZM100.349 17.1705C99.4517 17.1705 98.679 16.9886 98.0312 16.625C97.3873 16.2576 96.8911 15.7386 96.5426 15.0682C96.1941 14.3939 96.0199 13.5966 96.0199 12.6761C96.0199 11.7784 96.1941 10.9905 96.5426 10.3125C96.8911 9.63447 97.3816 9.10606 98.0142 8.72727C98.6506 8.34848 99.3968 8.15909 100.253 8.15909C100.829 8.15909 101.365 8.25189 101.861 8.4375C102.361 8.61932 102.796 8.89394 103.168 9.26136C103.543 9.62879 103.834 10.0909 104.043 10.6477C104.251 11.2008 104.355 11.8485 104.355 12.5909V13.2557H96.9858V11.7557H102.077C102.077 11.4072 102.001 11.0985 101.849 10.8295C101.698 10.5606 101.488 10.3504 101.219 10.1989C100.954 10.0436 100.645 9.96591 100.293 9.96591C99.9252 9.96591 99.5994 10.0511 99.3153 10.2216C99.035 10.3883 98.8153 10.6136 98.6562 10.8977C98.4972 11.178 98.4157 11.4905 98.4119 11.8352V13.2614C98.4119 13.6932 98.4915 14.0663 98.6506 14.3807C98.8134 14.6951 99.0426 14.9375 99.3381 15.108C99.6335 15.2784 99.9839 15.3636 100.389 15.3636C100.658 15.3636 100.904 15.3258 101.128 15.25C101.351 15.1742 101.543 15.0606 101.702 14.9091C101.861 14.7576 101.982 14.572 102.065 14.3523L104.304 14.5C104.19 15.0379 103.957 15.5076 103.605 15.9091C103.257 16.3068 102.806 16.6174 102.253 16.8409C101.704 17.0606 101.069 17.1705 100.349 17.1705Z"
        fill={color || "#0F172A"}
      />
    </svg>
  ),
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
  github: ({color, ..._props}: SVGProps<SVGSVGElement>)  => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {..._props}
    >
      <path
        fill={color || "#0F172A"}
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  discord: ({color, ..._props}: SVGProps<SVGSVGElement>)=> (
    <svg
      {..._props}
      viewBox="0 0 71 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
          fill={color || "#0F172A"}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="71" height="55" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  ),
  google: ({color, ..._props}: SVGProps<SVGSVGElement>) => (
    <svg {..._props} viewBox="0 0 18 18">
      <g fill="none">
        <path fill={color || "#0F172A"} fillRule="nonzero" d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0F172A9091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 Z"></path>
        <path fill={color || "#0F172A"} fillRule="nonzero" d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 Z"></path>
        <path fill={color || "#0F172A"} fillRule="nonzero" d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 Z"></path>
        <path fill={color || "#0F172A"} fillRule="nonzero" d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 Z"></path>
        <polygon points="0 0 18 0 18 18 0 18"></polygon>
      </g>
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
  settings: ({color, ..._props}: SVGProps<SVGSVGElement>) => (
    <svg {..._props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
      <path d="M9.2502 22L8.8502 18.8C8.63353 18.7167 8.4292 18.6167 8.2372 18.5C8.0452 18.3833 7.85786 18.2583 7.6752 18.125L4.7002 19.375L1.9502 14.625L4.5252 12.675C4.50853 12.5583 4.5002 12.4457 4.5002 12.337V11.663C4.5002 11.5543 4.50853 11.4417 4.5252 11.325L1.9502 9.375L4.7002 4.625L7.6752 5.875C7.85853 5.74167 8.0502 5.61667 8.2502 5.5C8.4502 5.38333 8.6502 5.28333 8.8502 5.2L9.2502 2H14.7502L15.1502 5.2C15.3669 5.28333 15.5712 5.38333 15.7632 5.5C15.9552 5.61667 16.1425 5.74167 16.3252 5.875L19.3002 4.625L22.0502 9.375L19.4752 11.325C19.4919 11.4417 19.5002 11.5543 19.5002 11.663V12.337C19.5002 12.4457 19.4835 12.5583 19.4502 12.675L22.0252 14.625L19.2752 19.375L16.3252 18.125C16.1419 18.2583 15.9502 18.3833 15.7502 18.5C15.5502 18.6167 15.3502 18.7167 15.1502 18.8L14.7502 22H9.2502ZM12.0502 15.5C13.0169 15.5 13.8419 15.1583 14.5252 14.475C15.2085 13.7917 15.5502 12.9667 15.5502 12C15.5502 11.0333 15.2085 10.2083 14.5252 9.525C13.8419 8.84167 13.0169 8.5 12.0502 8.5C11.0669 8.5 10.2375 8.84167 9.5622 9.525C8.88686 10.2083 8.54953 11.0333 8.5502 12C8.5502 12.9667 8.88753 13.7917 9.5622 14.475C10.2369 15.1583 11.0662 15.5 12.0502 15.5ZM12.0502 13.5C11.6335 13.5 11.2792 13.354 10.9872 13.062C10.6952 12.77 10.5495 12.416 10.5502 12C10.5502 11.5833 10.6962 11.229 10.9882 10.937C11.2802 10.645 11.6342 10.4993 12.0502 10.5C12.4669 10.5 12.8212 10.646 13.1132 10.938C13.4052 11.23 13.5509 11.584 13.5502 12C13.5502 12.4167 13.4042 12.771 13.1122 13.063C12.8202 13.355 12.4662 13.5007 12.0502 13.5ZM11.0002 20H12.9752L13.3252 17.35C13.8419 17.2167 14.3212 17.0207 14.7632 16.762C15.2052 16.5033 15.6092 16.191 15.9752 15.825L18.4502 16.85L19.4252 15.15L17.2752 13.525C17.3585 13.2917 17.4169 13.046 17.4502 12.788C17.4835 12.53 17.5002 12.2673 17.5002 12C17.5002 11.7333 17.4835 11.471 17.4502 11.213C17.4169 10.955 17.3585 10.709 17.2752 10.475L19.4252 8.85L18.4502 7.15L15.9752 8.2C15.6085 7.81667 15.2045 7.496 14.7632 7.238C14.3219 6.98 13.8425 6.784 13.3252 6.65L13.0002 4H11.0252L10.6752 6.65C10.1585 6.78333 9.67953 6.97933 9.2382 7.238C8.79686 7.49667 8.39253 7.809 8.0252 8.175L5.5502 7.15L4.5752 8.85L6.72519 10.45C6.64186 10.7 6.58353 10.95 6.5502 11.2C6.51686 11.45 6.5002 11.7167 6.5002 12C6.5002 12.2667 6.51686 12.525 6.5502 12.775C6.58353 13.025 6.64186 13.275 6.72519 13.525L4.5752 15.15L5.5502 16.85L8.0252 15.8C8.39186 16.1833 8.7962 16.5043 9.2382 16.763C9.6802 17.0217 10.1592 17.2173 10.6752 17.35L11.0002 20Z" fill={color || "#0F172A"}/>
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
  ellipsis: ({color, ..._props}: SVGProps<SVGSVGElement>) => (
    <svg {..._props} viewBox="0 0 24 24" fill="none">
      <circle cx="5" cy="12" r="1.5" fill={color || "#0F172A"}/>
      <circle cx="12" cy="12" r="1.5" fill={color || "#0F172A"}/>
      <circle cx="19" cy="12" r="1.5" fill={color || "#0F172A"}/>
    </svg>
  ),
  trash: LucideTrash,
}