import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Typography, Grid } from '@mui/material';
// components
import Image from '../../components/Image';
import Iconify from '../../components/Iconify';
import { MotionViewport, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function HomeLookingFor() {
  return (
    <RootStyle>
      <Container component={MotionViewport}>
        <Grid container alignItems="center" justifyContent="space-between" spacing={{ xs: 8, md: 3 }}>
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>


            <m.div variants={varFade().inDown}>
              <Typography variant="h3" sx={{ mt: 2, mb: 5 }}>
                What are the key characteristics of a good floor plan when designing your house?
              </Typography>
            </m.div>
            <m.div variants={varFade().inDown}>
              <Typography variant="online" sx={{ color: 'text.disabled' }} component="div"  >
                bedrooms are far from entertaining spaces.
                Bathrooms shouldn't face common entertainment spaces like dining rooms or living rooms.
                Most people will like if the kitchen opens to the dining or living rooms so
                whoever is cooking can still interact with guests or keep an eye on the kids playing.<br />
                Size matters, Whenever designing any room or hallway, think about how many people will be in
                 that space at one time. Do they have room to move around? Is there room for furniture to 
                 accommodate all the planned activities?
                Fits your priorities and lifestyle. <br/>
              



              </Typography>
            </m.div>

            <m.div variants={varFade().inDown}>
              {/* <Button
                color="inherit"
                size="large"
                variant="outlined"
                target="_blank"
                rel="noopener"
                href="https://material-ui.com/store/items/zone-landing-page/"
                endIcon={<Iconify icon={'ic:round-arrow-right-alt'} />}
              >
                Visit Zone Landing
              </Button> */}
            </m.div>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box
              component={m.div}
              variants={varFade().inUp}
              sx={{
                mb: { xs: 3, md: 0 },
              }}
            >
              <Image
                disabledEffect
                alt="rocket"
                src="https://minimal-assets-api.vercel.app/assets/images/home/zone_screen.png"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
