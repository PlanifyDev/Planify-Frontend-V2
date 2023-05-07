import { IndentStyle } from 'typescript';

import { m } from 'framer-motion';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Grid } from '@mui/material';
//
import { TextAnimate, MotionContainer, varFade } from '../../components/animate';

// ----------------------------------------------------------------------

const CONTACTS = [
  // {
  //   country: 'Bali',
  //   address: '508 Bridle Avenue Newnan, GA 30263',
  //   phoneNumber: '(239) 555-0108',
  // },
  // {
  //   country: 'London',
  //   address: '508 Bridle Avenue Newnan, GA 30263',
  //   phoneNumber: '(319) 555-0115',
  // },
  // {
  //   country: 'Prague',
  //   address: '508 Bridle Avenue Newnan, GA 30263',
  //   phoneNumber: '(252) 555-0126',
  // },
  // {
  //   country: 'Moscow',
  //   address: '508 Bridle Avenue Newnan, GA 30263',
  //   phoneNumber: '(307) 555-0133',
  // },
];

const RootStyle = styled('div')(({ theme }) => ({
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage:
    'url(https://minimal-assets-api.vercel.app/assets/overlay.svg), url(https://img.freepik.com/free-photo/top-view-vintage-telephone-receivers-with-cord_23-2148796034.jpg?w=1060&t=st=1683465530~exp=1683466130~hmac=8ae9d8fa76e77d3f8ffb94ca3ce687a032e47e941664cb63ddeb6fae18ad2149)',
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    height: 340,
    padding: 0,
    // backgroundSize: 'cover',
  },
}));

const ContentStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    textAlign: 'center',
    position: 'relative',
    border:'1px solid white',
    bottom: theme.spacing(-13.5),
    padding:'0px 0px 0px 0px'
  },
}));

// ----------------------------------------------------------------------

export default function ContactHero() {
  return (
    <RootStyle>
      <Container component={MotionContainer} sx={{  position: 'relative', height: '100%',color:'white' }}>
        <ContentStyle>
          <TextAnimate text="Contact &nbsp; &nbsp; Us !" sx={{ color:'white',position:'relative' }} variants={varFade().inRight} />
          

          
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
