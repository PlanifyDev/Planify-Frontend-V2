// import { Link as RouterLink } from 'react-router-dom';
// import { paramCase } from 'change-case';
// import PropTypes from 'prop-types';


// @mui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Stack, Card ,Link,Typography } from '@mui/material';
// import Image from '../../components/Image';
// import { PATH_DASHBOARD } from '../../routes/paths';

// hooks
import useAuth from '../../hooks/useAuth';
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';

// sections
import {
  // AppWidget,
  AppWelcome,
  AppFeatured,
  // AppNewInvoice,
  // AppTopAuthors,
  // AppTopRelated,
  // AppAreaInstalled,
  // AppWidgetSummary,
  // AppCurrentDownload,
  // AppTopInstalledCountries,
} from '../../sections/@dashboard/general/app';

// ----------------------------------------------------------------------
// GeneralApp.propTypes = {
//   product: PropTypes.object,
// };
export default function GeneralApp({product}) {
  // const { name, cover, status } = product;

  // const linkTo = PATH_DASHBOARD.eCommerce.view(paramCase(name));

  const { user } = useAuth();
  const theme = useTheme();
  const { themeStretch } = useSettings();

  return (
    <Page title="General: App">
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <AppWelcome displayName={user?.displayName} />
          </Grid>

          <Grid item xs={12} md={4}>
            <AppFeatured />
          </Grid>

          <Grid item xs={12} md={4}>

            {/* <Card>

              <Link to={linkTo} color="inherit" component={RouterLink}>

                <Image alt={name} src={cover} ratio="1/1" />

              </Link>
              <Stack spacing={2} sx={{ p: 3 }}>
                <Link to={linkTo} color="inherit" component={RouterLink}>

                  <Typography variant="subtitle2" noWrap>
                    {name}
                  </Typography>

                </Link>


              </Stack>
            </Card> */}
          </Grid>




        </Grid>
      </Container>
    </Page>
  );
}
