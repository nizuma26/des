import { forwardRef } from 'react';
import { Icon, disableCache } from '@iconify/react';

import Box from '@mui/material/Box';

import { iconifyClasses } from './classes';

import type { IconifyProps } from './types';

// ----------------------------------------------------------------------

const Iconify = forwardRef<SVGElement, IconifyProps>(
  ({ className, width = 20, sx, ...other }, ref) => (
    <Box
      ssr
      ref={ref}
      component={Icon}
      className={iconifyClasses.root.concat(className ? ` ${className}` : '')}
      sx={{
        width,
        height: width,
        flexShrink: 0,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    />
  )
);

export default Iconify

// https://iconify.design/docs/iconify-icon/disable-cache.html
disableCache('local');
