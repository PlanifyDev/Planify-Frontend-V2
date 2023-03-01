import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;
  const logo = (
    <Box sx={{ width: 38, height: 80,   marginTop: 2.5, ...sx }}>
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="75.6 123.53 89.03 132.14"
  >
    <path
      d="M120.037 123.533H77.255c-.828 0-1.652.828-1.652 1.488v22.793h44.434c2.972 0 19.492.828 19.492 15.363 0 14.536-16.188 14.868-19.492 14.868H75.603v76.144c0 .664.824 1.488 1.652 1.488h21.473c1.156 0 1.652-.824 1.652-1.488V202.49h19.657c3.136 0 44.597-.496 44.597-39.313 0-38.816-39.312-39.644-44.597-39.644Zm0 0"
      fill="#fda92d"
    />

  </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
