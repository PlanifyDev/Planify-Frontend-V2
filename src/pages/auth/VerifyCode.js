import { Link as RouterLink, useNavigate } from 'react-router-dom';
// @mui
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { useSnackbar } from 'notistack';

import { styled } from '@mui/material/styles';
import { Box, Button, Link, Container, Typography } from '@mui/material';
// layouts
import LogoOnlyLayout from '../../layouts/LogoOnlyLayout';
// routes
import { PATH_AUTH } from '../../routes/paths';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
// sections
import { VerifyCodeForm } from '../../sections/auth/verify-code';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100%',
  alignItems: 'center',
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function VerifyCode() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  return (
    <Page title="Verify" sx={{ height: 1 }}>
      <RootStyle>
        <LogoOnlyLayout />

        <Container>
          <Box sx={{ maxWidth: 480, mx: 'auto' }}>
            <Button
              size="small"
              component={RouterLink}
              to={PATH_AUTH.login}
              startIcon={<Iconify icon={'eva:arrow-ios-back-fill'} width={20} height={20} />}
              sx={{ mb: 3 }}
              onClick={() => {window.localStorage.removeItem('accessToken').then(navigate(PATH_AUTH.login))}}
            >
              Back
            </Button>

            <Typography variant="h3" paragraph>
              Please check your email!
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              We have emailed a 6-digit confirmation code to acb@domain, please enter the code in below box to verify
              your email.
            </Typography>

            <Box sx={{ mt: 5, mb: 3 }}>
              <VerifyCodeForm />
            </Box>

            <Typography variant="body2" align="center">
              Don’t have a code? &nbsp;

              <Link variant="subtitle2" underline="none"  style={{cursor: 'pointer'}} onClick={() => {
                const accessToken = window.localStorage.getItem('accessToken');
                axios.defaults.headers.common = {
                  'authorization': `${accessToken}`
                };
                const uid = jwtDecode(accessToken).userId
                axios.get(`http://localhost:3000/resend-verification/${uid}`)
                .then((res) => {
                  enqueueSnackbar('Verification code sent', { variant: 'success' });
                })
                .catch((err) => {
                  enqueueSnackbar('Something went wrong', { variant: 'error' });
                  navigate(PATH_AUTH.login)
                }) }
              }>
                Resend code
              </Link>
            </Typography>
          </Box>
        </Container>
      </RootStyle>
    </Page>
  );
}
