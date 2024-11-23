import { forwardRef, Ref } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';

import { RouterLink } from '../../routes/components';

// ----------------------------------------------------------------------

interface LogoProps {
  disabledLink?: boolean;
  sx?: object;
  titleSx?: object;
}

const Logo = forwardRef(({ disabledLink = false, sx, titleSx, ...other } : LogoProps, ref: Ref<HTMLDivElement>) => {
  const { palette } = useTheme();

  const PRIMARY_LIGHT = palette.primary.light;

  const PRIMARY_LIGHTER = palette.primary.lighter;

  const PRIMARY_MAIN = palette.primary.main;

  const PRIMARY_DARK = palette.primary.dark;

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 45,
        height: 45,
        display: 'inline-flex',
        transform: 'rotate(-14deg)',
        ml: 1,
      }}
      {...other}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="1 1 168 125">
        <circle cx="115.57" cy="9.02" r="8.66" fill={PRIMARY_LIGHT} />
        <circle cx="135.67" cy="11.02" r="6.66" fill={PRIMARY_LIGHT} />
        <circle cx="155.87" cy="20.52" r="5.66" fill={PRIMARY_LIGHT} />
        <circle cx="135.77" cy="11.02" r="4.66" fill={PRIMARY_LIGHT} />
        <path
          fill={PRIMARY_MAIN}
          d="m11.43 91.09l72.66-72.66c.11-.11.21-.28.31-.45c.77-1.32.85-2.58.73-4.25c-.21-2.83.46-4.36 1.83-5.38c1.81-1.36 8.08-1.08 19.81 10.65s12 17.99 10.64 19.8c-1.02 1.37-2.55 2.03-5.38 1.83c-1.67-.12-2.93-.05-4.25.73c-.18.1-.34.2-.45.31l-72.66 72.66c-9.98 9.98-19.51 8.46-25.56 2.41l-.04-.04l-.04-.04c-6.07-6.06-7.59-15.59 2.4-25.57"
          opacity="0.75"
        />
        <path
          fill={PRIMARY_LIGHT}
          d="M99.79 23.22c-6.36-6.36-11.2-9.55-14.69-10.98c-.02.45-.02.95.02 1.49c.09 1.19.06 2.17-.23 3.11c3.17 1.71 7.14 4.55 12.01 9.11c7 6.56 10.34 11.51 11.73 15c.92-.34 1.86-.4 2.98-.35c-.67-3.5-3.62-9.19-11.82-17.38"
          opacity="0.39"
        />
        <path
          fill={PRIMARY_LIGHT}
          d="M54.15 48.51L11.67 90.94c-10.36 10.35-9.05 20.03-3.03 26.05c6.02 6.01 15.68 7.35 26.06-3.03L102 47.04z"
        />
        <circle cx="45.06" cy="76.96" r="5.06" fill={PRIMARY_MAIN} />
        <circle cx="96.58" cy="37.04" r="4.76" fill={PRIMARY_MAIN} />
        <circle cx="73.27" cy="57.3" r="2.93" fill="#fff" opacity="0.69" />
        <circle cx="121.84" cy="12.01" r="2.17" fill={PRIMARY_MAIN} />
        <circle cx="59.15" cy="72.54" r="4" fill={PRIMARY_LIGHTER} />
        <circle cx="63.75" cy="61.12" r="1.54" fill={PRIMARY_LIGHTER} />
        <path
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="4.2"
          d="M93.2 14.66c3.21 2.08 6.13 4.6 8.65 7.46"
          opacity="0.6"
        />
        <path
          fill={PRIMARY_MAIN}
          d="M102.02 46.96c-.84.74-3.57 1.23-10.75 2.35c-3.81.6-8.47 1.2-13.82 1.64c-16.77 1.39-28.08-.9-21.37-3.64c5.39-2.2 24.53-1.72 36.51-1.34c5.78.19 10.09.42 9.43.99"
        />
        <path
          fill="#fff"
          d="M11.63 103.5c-1.72-.71-1.02-2.68 0-3.71l67.5-69.29c4.1-4.24 7.85-7.12 9.95-5.12c2.35 2.23 1.6 6.23-7.61 14.49l-64.68 61.17c-.51.51-3.44 3.17-5.16 2.46"
          opacity="0.6"
        />
      </svg>
    </Box>
  );

  if (disabledLink) {
    return logo;
  }

  const color = palette.mode === 'light' ? PRIMARY_MAIN : PRIMARY_LIGHT

  return (
    <Link component={RouterLink} href="/" sx={{ display: 'flex', textDecoration: 'none',...sx }}>
      {logo}
      <Typography
        sx={{
          textTransform: 'capitalize',
          fontWeight: 'bold',
          ...{ color: {color} },
          ...titleSx,
        }}
      >
        LabSystem
      </Typography>
    </Link>
  );
});

export default Logo;
