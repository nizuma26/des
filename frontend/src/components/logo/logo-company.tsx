import { forwardRef, Ref } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

// ----------------------------------------------------------------------

interface logoCompany {
  titleSx?: object;
  sx?: object;
}

const LogoCompany = forwardRef(({ sx, titleSx, ...other } : logoCompany, ref: Ref<HTMLSpanElement> ) => {
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
      }}
      {...other}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 128 128">
        <path fill={PRIMARY_MAIN} d="m23.461 77.704l42.505 24.54l-3.125 5.412l-42.505-24.54z" />
        <path
          fill={PRIMARY_MAIN}
          d="M67.03 53.81s25.06 11.17 7.18 37.01c0 0-6.74-1.53-13.91 3.43c-9 6.23-10.03 19.7-26.7 19.7h70.59l-8.57-8.1s7.15-18.08 2.94-37.24c-4.9-22.3-23.78-27.7-23.78-27.7z"
        />
        <path
          fill={PRIMARY_MAIN}
          d="M71.07 53.81s25.06 11.17 7.18 37.01c0 0-6.74-1.53-13.91 3.43c-9 6.23-10.03 19.7-26.7 19.7h70.59l-8.57-8.1s7.15-18.08 2.94-37.24c-4.9-22.3-23.78-27.7-23.78-27.7z"
        />
        <path fill={PRIMARY_LIGHTER} d="m24.955 75.12l29.748 17.175l-1.485 2.572L23.47 77.692z" />
        <path
          fill={PRIMARY_DARK}
          d="m17.34 98.24l1.82-3.94s19.43 7.61 23.05 8.95l-1.65 3.61c-.55 1.48-6.19.74-12.6-1.64c-6.41-2.38-11.16-5.51-10.62-6.98"
        />
        <path
          fill={PRIMARY_LIGHTER}
          d="M40.03 103.27c-2.32 0-6.19-.9-10.11-2.36c-7.43-2.76-10.36-5.53-10.22-6.11c.03-.07.41-.32 1.62-.32c2.32 0 6.19.9 10.11 2.36c7.43 2.76 10.36 5.53 10.22 6.11c-.03.07-.41.32-1.62.32"
        />
        <path
          fill={PRIMARY_LIGHT}
          d="M21.33 95.16c2.24 0 6.03.89 9.87 2.32c5.27 1.96 8.4 4.03 9.43 5.09c-.16.02-.35.03-.59.03c-2.24 0-6.03-.89-9.87-2.32c-5.27-1.96-8.4-4.03-9.43-5.09c.15-.02.35-.03.59-.03m0-1.36c-1.25 0-2.06.25-2.26.76c-.55 1.48 4.2 4.6 10.62 6.99c4.17 1.55 8.02 2.4 10.35 2.4c1.25 0 2.06-.25 2.26-.76c.55-1.48-4.2-4.6-10.62-6.99c-4.18-1.54-8.03-2.4-10.35-2.4"
        />
        <path
          fill={PRIMARY_MAIN}
          d="M25.23 100.71s-4.29 7.48.86 13.85c3.9 4.82 20.59.61 20.59.61s-15.2-.98-15.56-11.27z"
        />
        <path
          fill={PRIMARY_DARK}
          d="M116.53 124H11.47c-1.26 0-2.29-1.03-2.29-2.29c0-5.1 4.13-9.23 9.23-9.23h91.18c5.1 0 9.23 4.13 9.23 9.23a2.29 2.29 0 0 1-2.29 2.29"
        />
        <path
          fill={PRIMARY_DARK}
          d="m43.33 64.23l7.76 4.47l-7.77 10.43s-1.42.41-3.45-.69s-2.25-2.57-2.25-2.57z"
        />
        <path
          fill={PRIMARY_MAIN}
          d="m80.6 29.44l8.09-14.03s-1.73-4.02-6.33-6.78c-4.6-2.76-8.3-1.64-8.3-1.64l-8.08 14.03c-.01.01-.03.02-.03.04c-.53.92 2.32 3.55 6.36 5.88c4.04 2.33 7.75 3.47 8.28 2.55c0-.01 0-.03.01-.05"
        />
        <path
          fill={PRIMARY_DARK}
          d="M83.92 6.98c-8.46-5.04-11.3-2.43-11.84-1.16c-.26.62-.07 2.26 1.01 2.9l.58-1.08c.53-.92 4.6-.47 8.67 1.87c4.06 2.34 6.46 5.65 5.93 6.57c-.05.09-.49.84-.49.84c.6.48 2.46.2 2.91-.39c.83-1.11 2.1-4.27-6.77-9.55"
        />
        <path
          fill={PRIMARY_LIGHT}
          d="M40.23 53.9c2.79-4.84 10.61-5.56 17.47-1.6s10.16 11.08 7.38 15.92c-2.79 4.84-11.05 6.33-17.92 2.37c-6.86-3.95-9.72-11.85-6.93-16.69"
        />
        <path
          fill={PRIMARY_MAIN}
          d="M51.09 69.71s.74-1.1 3.98-1.41c3.25-.31 4.96 1.78 4.96 1.78l-1.88 11.46s-1.09 1.01-3.39.94s-3.17-1.28-3.17-1.28zM40 56.72s1.86-.1 3.39 2.78c1.75 3.29-.02 5.5-.02 5.5l-10.31 3.67s-1.42-.43-2.52-2.45c-1.1-2.03-.49-3.38-.49-3.38z"
        />
        <path
          fill={PRIMARY_LIGHT}
          d="M74.22 23.62c-6.49-3.66-10.59-4.52-12.53-4.69c-.77-.06-1.5.32-1.88.99L40.25 53.88s4.84.59 13.28 5.46c8.44 4.86 11.56 8.85 11.56 8.85L84.67 34.2c.38-.66.35-1.46-.07-2.1c-1.08-1.62-3.85-4.8-10.38-8.48"
        />
        <circle cx="73.43" cy="107.3" r="6.53" fill={PRIMARY_MAIN} />
        <circle cx="74.82" cy="108" r="4.14" fill={PRIMARY_LIGHT} />
        <path
          fill={PRIMARY_LIGHTER}
          d="M48.07 54.76s17.32-30 18.58-31.44c1.25-1.44 5.98.47 5.24 1.86c-.74 1.39-17.96 32.09-17.96 32.09c-3.43-2.24-5.86-2.51-5.86-2.51"
        />
        <path
          fill={PRIMARY_LIGHT}
          d="M84.11 93.15c1.42-2.18 4.89-8.66 4.09-19.01c-1.24-16.16-14.27-21.32-14.27-21.32l-1.16 2.01c10.6 6.97 17.17 19.08 5.48 35.98c0 0-6.74-1.53-13.91 3.43c-7.08 4.9-9.23 14.27-17.93 18.05h6.25s4.04.14 8.36-6.97c4.32-7.11 6.69-10.59 13.93-11.84s13.51 4.6 13.51 4.6s-.97-2.7-4.35-4.93"
        />
        <circle cx="77.35" cy="47.36" r="7.23" fill={PRIMARY_MAIN} />
        <circle cx="78.87" cy="47.23" r="4.91" fill={PRIMARY_LIGHT} />
        <path
          fill={PRIMARY_DARK}
          d="M75.42 42.51c-3.72 2.44-1.93 6.88-1.93 6.88l-1.82.42c-.92-1.46-.98-3.43-.42-5.04c.48-1.34 1.27-2.44 3.21-3.3z"
        />
        <path
          fill={PRIMARY_DARK}
          d="m76.59 8.73l-5.91 11.11l3.07 1.21l6.22-11.42c-2.29-1.32-3.38-.9-3.38-.9"
        />
        <ellipse cx="55.11" cy="81.09" fill={PRIMARY_LIGHT} rx="2.17" ry=".69" />
      </svg>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', ...sx }}>
      {logo}
      <Typography
      variant='h5'
        sx={{
          textTransform: 'capitalize',
          fontWeight: 'bold',
          color: palette.mode === 'light' ? PRIMARY_MAIN : PRIMARY_LIGHT,
          ...titleSx,
        }}
      >
        Laboratorio Clinico Valero-Amaya
      </Typography>
    </Box>
  );
});

export default LogoCompany;
