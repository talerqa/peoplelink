import * as React from "react";

type SvgImageType = 'PROFILE' | "DIALOGS" | "MUSIC" | 'SETTINGS' | 'NEWS' | 'USERS' | 'ADD_PHOTO'

type SvgSelectorPropsType = {
  svgImage: SvgImageType
}

export const SvgSelectors = (props: SvgSelectorPropsType) => {
  switch (props.svgImage) {
    case 'PROFILE' : {
      return <svg viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier"><title>profile_round [#1342]</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -2159.000000)" fill="#000000">
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M100.562548,2016.99998 L87.4381713,2016.99998 C86.7317804,2016.99998 86.2101535,2016.30298 86.4765813,2015.66198 C87.7127655,2012.69798 90.6169306,2010.99998 93.9998492,2010.99998 C97.3837885,2010.99998 100.287954,2012.69798 101.524138,2015.66198 C101.790566,2016.30298 101.268939,2016.99998 100.562548,2016.99998 M89.9166645,2004.99998 C89.9166645,2002.79398 91.7489936,2000.99998 93.9998492,2000.99998 C96.2517256,2000.99998 98.0830339,2002.79398 98.0830339,2004.99998 C98.0830339,2007.20598 96.2517256,2008.99998 93.9998492,2008.99998 C91.7489936,2008.99998 89.9166645,2007.20598 89.9166645,2004.99998 M103.955674,2016.63598 C103.213556,2013.27698 100.892265,2010.79798 97.837022,2009.67298 C99.4560048,2008.39598 100.400241,2006.33098 100.053171,2004.06998 C99.6509769,2001.44698 97.4235996,1999.34798 94.7348224,1999.04198 C91.0232075,1998.61898 87.8750721,2001.44898 87.8750721,2004.99998 C87.8750721,2006.88998 88.7692896,2008.57398 90.1636971,2009.67298 C87.1074334,2010.79798 84.7871636,2013.27698 84.044024,2016.63598 C83.7745338,2017.85698 84.7789973,2018.99998 86.0539717,2018.99998 L101.945727,2018.99998 C103.221722,2018.99998 104.226185,2017.85698 103.955674,2016.63598"
                  id="profile_round-[#1342]"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    }
    case "DIALOGS": {
      return <svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg"
                  fill="#000000">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path className="cls-1"
                d="M18.68,8.16V15.8a2.86,2.86,0,0,1-2.86,2.86H13.91v2.86L8.18,18.66H4.36A2.86,2.86,0,0,1,1.5,15.8V8.16A2.86,2.86,0,0,1,4.36,5.3H15.82A2.86,2.86,0,0,1,18.68,8.16Z"></path>
          <path className="cls-1"
                d="M18.68,14.84h1A2.86,2.86,0,0,0,22.5,12V4.34a2.86,2.86,0,0,0-2.86-2.86H8.18A2.86,2.86,0,0,0,5.32,4.34v1"></path>
          <line className="cls-1" x1="5.32" y1="11.98" x2="7.23" y2="11.98"></line>
          <line className="cls-1" x1="9.14" y1="11.98" x2="11.05" y2="11.98"></line>
          <line className="cls-1" x1="12.95" y1="11.98" x2="14.86" y2="11.98"></line>
        </g>
      </svg>
    }
    case "MUSIC": {
      return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M9 19C9 20.1046 7.65685 21 6 21C4.34315 21 3 20.1046 3 19C3 17.8954 4.34315 17 6 17C7.65685 17 9 17.8954 9 19ZM9 19V5L21 3V17M21 17C21 18.1046 19.6569 19 18 19C16.3431 19 15 18.1046 15 17C15 15.8954 16.3431 15 18 15C19.6569 15 21 15.8954 21 17ZM9 9L21 7"
            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </g>
      </svg>
    }
    case "SETTINGS": {
      return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <circle cx="12" cy="12" r="3" stroke="#000000" stroke-width="1.5"></circle>
          <path
            d="M3.66122 10.6392C4.13377 10.9361 4.43782 11.4419 4.43782 11.9999C4.43781 12.558 4.13376 13.0638 3.66122 13.3607C3.33966 13.5627 3.13248 13.7242 2.98508 13.9163C2.66217 14.3372 2.51966 14.869 2.5889 15.3949C2.64082 15.7893 2.87379 16.1928 3.33973 16.9999C3.80568 17.8069 4.03865 18.2104 4.35426 18.4526C4.77508 18.7755 5.30694 18.918 5.83284 18.8488C6.07287 18.8172 6.31628 18.7185 6.65196 18.5411C7.14544 18.2803 7.73558 18.2699 8.21895 18.549C8.70227 18.8281 8.98827 19.3443 9.00912 19.902C9.02332 20.2815 9.05958 20.5417 9.15224 20.7654C9.35523 21.2554 9.74458 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8478 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.9021C15.0117 19.3443 15.2977 18.8281 15.7811 18.549C16.2644 18.27 16.8545 18.2804 17.3479 18.5412C17.6837 18.7186 17.9271 18.8173 18.1671 18.8489C18.693 18.9182 19.2249 18.7756 19.6457 18.4527C19.9613 18.2106 20.1943 17.807 20.6603 17C20.8677 16.6407 21.029 16.3614 21.1486 16.1272M20.3387 13.3608C19.8662 13.0639 19.5622 12.5581 19.5621 12.0001C19.5621 11.442 19.8662 10.9361 20.3387 10.6392C20.6603 10.4372 20.8674 10.2757 21.0148 10.0836C21.3377 9.66278 21.4802 9.13092 21.411 8.60502C21.3591 8.2106 21.1261 7.80708 20.6601 7.00005C20.1942 6.19301 19.9612 5.7895 19.6456 5.54732C19.2248 5.22441 18.6929 5.0819 18.167 5.15113C17.927 5.18274 17.6836 5.2814 17.3479 5.45883C16.8544 5.71964 16.2643 5.73004 15.781 5.45096C15.2977 5.1719 15.0117 4.6557 14.9909 4.09803C14.9767 3.71852 14.9404 3.45835 14.8478 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74458 2.35523 9.35523 2.74458 9.15224 3.23463C9.05958 3.45833 9.02332 3.71848 9.00912 4.09794C8.98826 4.65566 8.70225 5.17191 8.21891 5.45096C7.73557 5.73002 7.14548 5.71959 6.65205 5.4588C6.31633 5.28136 6.0729 5.18269 5.83285 5.15108C5.30695 5.08185 4.77509 5.22436 4.35427 5.54727C4.03866 5.78945 3.80569 6.19297 3.33974 7C3.13231 7.35929 2.97105 7.63859 2.85138 7.87273"
            stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path>
        </g>
      </svg>
    }
    case "NEWS": {
      return <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <g id="icomoon-ignore"></g>
          <path
            d="M9.069 2.672v14.928h-6.397c0 0 0 6.589 0 8.718s1.983 3.010 3.452 3.010c1.469 0 16.26 0 20.006 0 1.616 0 3.199-1.572 3.199-3.199 0-1.175 0-23.457 0-23.457h-20.259zM6.124 28.262c-0.664 0-2.385-0.349-2.385-1.944v-7.652h5.331v7.192c0 0.714-0.933 2.404-2.404 2.404h-0.542zM28.262 26.129c0 1.036-1.096 2.133-2.133 2.133h-17.113c0.718-0.748 1.119-1.731 1.119-2.404v-22.12h18.126v22.391z"
            fill="#000000"></path>
          <path d="M12.268 5.871h13.861v1.066h-13.861v-1.066z" fill="#000000"></path>
          <path d="M12.268 20.265h13.861v1.066h-13.861v-1.066z" fill="#000000"></path>
          <path d="M12.268 23.997h13.861v1.066h-13.861v-1.066z" fill="#000000"></path>
          <path d="M26.129 9.602h-13.861v7.997h13.861v-7.997zM25.063 16.533h-11.729v-5.864h11.729v5.864z"
                fill="#000000"></path>
        </g>
      </svg>
    }
    case "USERS": {
      return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M14.9238 7.281C14.9227 8.5394 13.9018 9.55874 12.6435 9.558C11.3851 9.55726 10.3654 8.53673 10.3658 7.27833C10.3662 6.01994 11.3864 5 12.6448 5C13.2495 5.00027 13.8293 5.24073 14.2567 5.6685C14.6841 6.09627 14.924 6.67631 14.9238 7.281Z"
                stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M14.9968 12.919H10.2968C8.65471 12.9706 7.35028 14.3166 7.35028 15.9595C7.35028 17.6024 8.65471 18.9484 10.2968 19H14.9968C16.6388 18.9484 17.9432 17.6024 17.9432 15.9595C17.9432 14.3166 16.6388 12.9706 14.9968 12.919V12.919Z"
                stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M20.6878 9.02403C20.6872 9.98653 19.9066 10.7664 18.9441 10.766C17.9816 10.7657 17.2016 9.9852 17.2018 9.0227C17.202 8.06019 17.9823 7.28003 18.9448 7.28003C19.4072 7.28003 19.8507 7.4638 20.1776 7.7909C20.5045 8.11799 20.688 8.56158 20.6878 9.02403V9.02403Z"
                stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.3338 9.02401C4.3338 9.98664 5.11417 10.767 6.0768 10.767C7.03943 10.767 7.8198 9.98664 7.8198 9.02401C7.8198 8.06137 7.03943 7.28101 6.0768 7.28101C5.11417 7.28101 4.3338 8.06137 4.3338 9.02401V9.02401Z"
                stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
            d="M19.4368 12.839C19.0226 12.839 18.6868 13.1748 18.6868 13.589C18.6868 14.0032 19.0226 14.339 19.4368 14.339V12.839ZM20.7438 13.589L20.7593 12.8392C20.7541 12.839 20.749 12.839 20.7438 12.839V13.589ZM20.7438 18.24V18.99C20.749 18.99 20.7541 18.9899 20.7593 18.9898L20.7438 18.24ZM19.4368 17.49C19.0226 17.49 18.6868 17.8258 18.6868 18.24C18.6868 18.6542 19.0226 18.99 19.4368 18.99V17.49ZM5.58477 14.339C5.99899 14.339 6.33477 14.0032 6.33477 13.589C6.33477 13.1748 5.99899 12.839 5.58477 12.839V14.339ZM4.27777 13.589V12.839C4.27259 12.839 4.26741 12.839 4.26222 12.8392L4.27777 13.589ZM4.27777 18.24L4.26222 18.9898C4.26741 18.9899 4.27259 18.99 4.27777 18.99V18.24ZM5.58477 18.99C5.99899 18.99 6.33477 18.6542 6.33477 18.24C6.33477 17.8258 5.99899 17.49 5.58477 17.49V18.99ZM19.4368 14.339H20.7438V12.839H19.4368V14.339ZM20.7282 14.3388C21.5857 14.3566 22.2715 15.0568 22.2715 15.9145H23.7715C23.7715 14.2405 22.4329 12.8739 20.7593 12.8392L20.7282 14.3388ZM22.2715 15.9145C22.2715 16.7722 21.5857 17.4724 20.7282 17.4902L20.7593 18.9898C22.4329 18.9551 23.7715 17.5885 23.7715 15.9145H22.2715ZM20.7438 17.49H19.4368V18.99H20.7438V17.49ZM5.58477 12.839H4.27777V14.339H5.58477V12.839ZM4.26222 12.8392C2.58861 12.8739 1.25 14.2405 1.25 15.9145H2.75C2.75 15.0568 3.43584 14.3566 4.29332 14.3388L4.26222 12.8392ZM1.25 15.9145C1.25 17.5885 2.58861 18.9551 4.26222 18.9898L4.29332 17.4902C3.43584 17.4724 2.75 16.7722 2.75 15.9145H1.25ZM4.27777 18.99H5.58477V17.49H4.27777V18.99Z"
            fill="#000000"></path>
        </g>
      </svg>
    }
    case "ADD_PHOTO": {
      return <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path
            d="M21 11V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V9C3 7.89543 3.89543 7 5 7H6.5C7.12951 7 7.72229 6.70361 8.1 6.2L9.15 4.8C9.52771 4.29639 10.1205 4 10.75 4H13.25"
            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M18.5 4V6.5M18.5 9V6.5M18.5 6.5H16M18.5 6.5H21" stroke="#000000" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"></path>
          <circle cx="12" cy="13" r="4" stroke="#000000" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round"></circle>
        </g>
      </svg>
    }
    default:
      return <></>
  }
};
