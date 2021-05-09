/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
import {SvgIcon} from '@material-ui/core';
import React, {ReactElement} from 'react';

function Python(): ReactElement {
  return (
    <SvgIcon viewBox={'0 0 32 32'}>
      <React.Fragment>
        <defs>
          <linearGradient id="A" x1="811.527" y1="574.895" x2="665.255" y2="573.732" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#366a96" />
            <stop offset="1" stop-color="#3679b0" />
          </linearGradient>
          <linearGradient id="B" x1="862.824" y1="642.176" x2="573.276" y2="642.176" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#ffc836" />
            <stop offset="1" stop-color="#ffe873" />
          </linearGradient>
        </defs>
        <g transform="matrix(.1617 0 0 .158089 -107.53764 -81.66187)">
          <path
            d="M716.255 544.487c0-13.623 3.653-21.034 23.822-24.563 13.693-2.4 31.25-2.7 47.627 0 12.935 2.135 23.822 11.77 23.822 24.563v44.945c0 13.182-10.57 23.98-23.822 23.98h-47.627c-16.164 0-29.787 13.782-29.787 29.363v21.564h-16.376c-13.852 0-21.917-9.988-25.305-23.964-4.57-18.776-4.376-29.963 0-47.945 3.794-15.687 15.917-23.964 29.77-23.964h65.52v-6h-47.645v-17.98z"
            fill="url(#A)"
          />
          <path
            d="M811.527 688.32c0 13.623-11.823 20.523-23.822 23.964-18.052 5.188-32.54 4.394-47.627 0-12.6-3.67-23.822-11.17-23.822-23.964v-44.945c0-12.935 10.782-23.98 23.822-23.98h47.627c15.864 0 29.787-13.71 29.787-29.963v-20.964h17.858c13.87 0 20.4 10.305 23.822 23.964 4.764 18.97 4.976 33.157 0 47.945-4.817 14.364-9.97 23.964-23.822 23.964H763.9v6h47.627v17.98z"
            fill="url(#B)"
          />
          <path
            d="M728.166 541.505c0-4.976 3.988-9 8.93-9 4.923 0 8.93 4.023 8.93 9 0 4.96-4.006 8.982-8.93 8.982-4.94 0-8.93-4.023-8.93-8.982zm53.59 149.798c0-4.96 4.006-8.982 8.93-8.982 4.94 0 8.93 4.023 8.93 8.982 0 4.976-3.988 9-8.93 9-4.923 0-8.93-4.023-8.93-9z"
            fill="#fff"
          />
        </g>
      </React.Fragment>
    </SvgIcon>
  );
}

export default Python;
