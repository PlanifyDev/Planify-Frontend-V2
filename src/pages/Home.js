// @mui
import { styled } from '@mui/material/styles';
// components
import Page from '../components/Page';
// sections
import {
  HomeHero,
  HomePlanify,
  HomeDarkMode,
  HomeLookingFor,
  HomeColorPresets,
  HomePricingPlans,
  HomeAdvertisement,
  HomeCleanInterfaces,
  HomeHugePackElements,
} from '../sections/home';


// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  height: '100%',
}));

const ContentStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="The starting point for your next project">
      <RootStyle>
        <HomeHero />
        <ContentStyle>
          <HomePlanify />

          <HomeHugePackElements />

          {/* <HomeDarkMode /> */}

          <HomeCleanInterfaces />

          <HomeColorPresets />

          <HomeLookingFor />

          <HomePricingPlans />

          {/* <HomeLookingFor /> */}

          <HomeAdvertisement />
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}
