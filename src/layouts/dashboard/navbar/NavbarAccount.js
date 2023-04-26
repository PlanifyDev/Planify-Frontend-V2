import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Link, Typography } from '@mui/material';
// hooks
import useAuth from '../../../hooks/useAuth';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
// import MyAvatar from '../../../components/MyAvatar';
// import { handleBreakpoints } from '@mui/system';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  // backgroundColor: theme.palette.grey[500_12],
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
}));

// ----------------------------------------------------------------------

NavbarAccount.propTypes = {
  isCollapse: PropTypes.bool,
};

export default function NavbarAccount({ isCollapse }) {
  const { user } = useAuth();

  return (
    // change route to design page {PATH_DASHBOARD.user.account}
    <Link underline="none" color="inherit" component={RouterLink} to={PATH_DASHBOARD.user.account}>
      <RootStyle
        sx={{
          ...(isCollapse && {
            bgcolor: 'transparent',
          }),
        }}
      >
        {/* <MyAvatar /> */}
        
        {/* <Button target="_blank" rel="noopener" variant="contained">
          Planify Now
        </Button> */}

        <Button  target="_blank" rel="noopener" variant="contained"
          style={{fontSize: !isCollapse &&'20px',  width: '100%'}}
        >
        Planify Now
      </Button>

        <Box
          sx={{
            ml: 2,
            transition: (theme) =>
              theme.transitions.create('width', {
                duration: theme.transitions.duration.shorter,
              }),
            ...(isCollapse && {
              ml: 0,
              width: 0,
            }),
          }}
        >
         
          <Typography variant="subtitle2" noWrap>
            {user?.displayName}
          </Typography>
          <Typography variant="body2" noWrap sx={{ color: 'text.secondary' }}>
            {}
          </Typography>
        </Box>
      </RootStyle>
      {/* <Button  target="_blank" rel="noopener" variant="contained">
        Documentation
      </Button> */}
      
    </Link>
  );
}
