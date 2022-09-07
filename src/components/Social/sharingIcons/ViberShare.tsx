import React, { FC } from 'react';
import { ViberShareButton } from 'react-share';

import { IconProps } from 'components/icons/icons.types';

export const ViberShare: FC<IconProps> = ({ width, height, fill, className }) => {
  return (
    <ViberShareButton url={window.location.href} className={className}>
      <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.76711 0.477981C7.36991 0.496852 4.36357 0.726211 2.68185 2.26712C1.43344 3.50827 0.997224 5.33806 0.946417 7.60407C0.902868 9.86136 0.852061 14.1001 4.93842 15.2549V17.0114C4.93842 17.0114 4.91084 17.7154 5.37536 17.8606C5.94876 18.0421 6.27538 17.4984 6.81974 16.9178L7.83589 15.771C10.6303 16.0032 12.7715 15.4669 13.0182 15.387C13.5844 15.2056 16.7787 14.7984 17.3013 10.5589C17.8384 6.18146 17.04 3.42335 15.6029 2.17495L15.5956 2.17349C15.1601 1.77429 13.4182 0.504111 9.52051 0.489594C9.52051 0.489594 9.23309 0.471449 8.76711 0.477981ZM8.81574 1.7097C9.21131 1.70752 9.45446 1.72421 9.45446 1.72421C12.7497 1.73147 14.3254 2.72584 14.6956 3.05972C15.9077 4.09691 16.5305 6.58429 16.0747 10.2395C15.6392 13.7815 13.048 14.0065 12.5689 14.1589C12.3657 14.2243 10.4786 14.6888 8.10371 14.5364C8.10371 14.5364 6.33344 16.671 5.78182 17.2226C5.69472 17.317 5.59311 17.346 5.52778 17.3315C5.43343 17.3097 5.40439 17.1936 5.41165 17.0339L5.42617 14.1168C1.96329 13.1588 2.16652 9.54273 2.20281 7.6556C2.24636 5.76847 2.60201 4.22103 3.65445 3.17585C5.07487 1.89115 7.6283 1.71695 8.81502 1.7097H8.81574ZM9.07704 3.59682C9.04848 3.59673 9.02018 3.60227 8.99376 3.61313C8.96735 3.624 8.94334 3.63997 8.92311 3.66013C8.90288 3.68029 8.88683 3.70425 8.87588 3.73063C8.86493 3.757 8.85929 3.78528 8.85929 3.81384C8.85929 3.87159 8.88223 3.92698 8.92307 3.96781C8.9639 4.00865 9.01929 4.03159 9.07704 4.03159C9.61664 4.02129 10.1529 4.11798 10.655 4.31605C11.157 4.51413 11.6149 4.80968 12.0021 5.18564C12.7932 5.95501 13.1786 6.98567 13.1932 8.33569C13.1932 8.36429 13.1988 8.3926 13.2097 8.41902C13.2207 8.44544 13.2367 8.46944 13.2569 8.48966C13.2771 8.50988 13.3012 8.52592 13.3276 8.53686C13.354 8.54781 13.3823 8.55344 13.4109 8.55344V8.54691C13.4686 8.54691 13.524 8.52397 13.5649 8.48313C13.6057 8.4423 13.6286 8.38691 13.6286 8.32916C13.6556 7.69428 13.553 7.06056 13.3271 6.46659C13.1013 5.87263 12.7569 5.33086 12.3149 4.87426C11.4512 4.03232 10.361 3.59682 9.07631 3.59682H9.07704ZM6.20715 4.09764C6.0528 4.07564 5.89553 4.10633 5.76077 4.18474H5.75206C5.45448 4.35893 5.18012 4.57668 4.91882 4.86701C4.72285 5.09927 4.61325 5.3308 4.58422 5.55581C4.56714 5.68777 4.57954 5.82188 4.62051 5.94848L4.63503 5.95573C4.85874 6.61343 5.15066 7.24592 5.50601 7.84286C5.96662 8.67888 6.53254 9.45237 7.18991 10.1444L7.21168 10.1735L7.24072 10.1952L7.26249 10.217L7.28426 10.2388C7.97904 10.8978 8.75459 11.4661 9.59237 11.9299C10.5504 12.4525 11.1326 12.6993 11.4809 12.8009V12.8082C11.5826 12.8372 11.6755 12.8517 11.7698 12.8517C12.0672 12.83 12.3488 12.7094 12.5697 12.5091C12.8527 12.2551 13.0777 11.9735 13.2447 11.6759V11.6687C13.4116 11.3566 13.3536 11.0582 13.114 10.855C12.6313 10.4327 12.1087 10.0584 11.5535 9.73725C11.1834 9.53402 10.8059 9.65741 10.6535 9.86064L10.3269 10.2736C10.16 10.4769 9.85511 10.4478 9.85511 10.4478L9.8464 10.4551C7.58185 9.87443 6.97942 7.58157 6.97942 7.58157C6.97942 7.58157 6.95039 7.26947 7.16088 7.10979L7.56733 6.78317C7.7633 6.62349 7.90121 6.24606 7.69072 5.87589C7.37002 5.32045 6.99564 4.79778 6.57296 4.31538C6.48102 4.20135 6.35122 4.12409 6.20715 4.09764ZM9.45374 4.74362C9.39599 4.74381 9.34068 4.76694 9.29998 4.80791C9.25928 4.84888 9.23652 4.90434 9.23672 4.96209C9.23691 5.01984 9.26004 5.07515 9.30101 5.11585C9.34198 5.15654 9.39744 5.1793 9.45519 5.17911C10.1816 5.19172 10.8733 5.49189 11.3786 6.0138C11.6066 6.26531 11.7819 6.55996 11.8941 6.88034C12.0063 7.20073 12.0531 7.54036 12.0318 7.87915C12.032 7.93678 12.0551 7.99198 12.0959 8.03265C12.1367 8.07333 12.192 8.09617 12.2496 8.09617L12.2568 8.10488C12.2855 8.10488 12.3139 8.09923 12.3403 8.08824C12.3668 8.07725 12.3908 8.06115 12.4111 8.04085C12.4313 8.02055 12.4473 7.99646 12.4582 7.96996C12.4691 7.94346 12.4747 7.91507 12.4746 7.88641C12.4964 7.02269 12.2278 6.29687 11.698 5.71621C11.1681 5.13556 10.4278 4.80894 9.48422 4.74362C9.47407 4.74291 9.46389 4.74291 9.45374 4.74362ZM9.80939 5.91872C9.78027 5.91786 9.75127 5.92275 9.72404 5.9331C9.6968 5.94345 9.67188 5.95906 9.65068 5.97904C9.62949 5.99903 9.61243 6.02299 9.6005 6.04956C9.58856 6.07614 9.58197 6.1048 9.58112 6.13392C9.58026 6.16304 9.58515 6.19204 9.5955 6.21928C9.60585 6.24651 9.62146 6.27143 9.64144 6.29263C9.66143 6.31382 9.68539 6.33088 9.71196 6.34281C9.73854 6.35475 9.7672 6.36133 9.79632 6.36219C10.5149 6.39848 10.8633 6.76139 10.9068 7.50899C10.9087 7.56547 10.9325 7.61901 10.9731 7.65828C11.0137 7.69756 11.0681 7.7195 11.1246 7.71947H11.1318C11.1611 7.71856 11.1898 7.71177 11.2164 7.6995C11.2429 7.68723 11.2668 7.66973 11.2864 7.64805C11.3061 7.62637 11.3211 7.60096 11.3307 7.57332C11.3403 7.54569 11.3443 7.5164 11.3423 7.48721C11.2915 6.51461 10.7617 5.96953 9.8181 5.91872C9.81519 5.91866 9.81229 5.91866 9.80939 5.91872Z"
          fill={fill}
        />
      </svg>
    </ViberShareButton>
  );
};