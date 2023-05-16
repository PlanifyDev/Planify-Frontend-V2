// project details page

import { sentenceCase } from 'change-case';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Tab, Card, Grid, Divider, Container, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// redux
import { useDispatch, useSelector } from '../../redux/store';
import { getProduct, addCart, onGotoStep } from '../../redux/slices/product';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import Markdown from '../../components/Markdown';
import { SkeletonProduct } from '../../components/skeleton';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
// sections
import {
  ProductDetailsSummary,
  ProductDetailsReview,
  ProductDetailsCarousel,
} from '../../sections/@dashboard/e-commerce/product-details';
import CartWidget from '../../sections/@dashboard/e-commerce/CartWidget';

// ----------------------------------------------------------------------

const PRODUCT_DESCRIPTION = [
  {
    title: 'Acurracy',
    description: 'Our website provides accurate and reliable floor plan designs.',
    icon: 'ic:round-verified',
  },
  {
    title: 'less Time',
    description: 'Maximize your productivity with our website, time-saving floor plan designs, powered by AI, for efficient and streamlined planning',
    icon: 'eva:clock-fill',
  },
  {
    title: 'Secured',
    description: 'your data is safe here.',
    icon: 'ic:round-verified-user',
  },
];

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  justifyContent: 'center',
  height: theme.spacing(8),
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main,
  backgroundColor: `${alpha(theme.palette.primary.main, 0.08)}`,
}));

// ----------------------------------------------------------------------

export default function EcommerceProductDetails() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const [value, setValue] = useState('1');
  const { name = '' } = useParams();
  const { product, error, checkout } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(name));
  }, [dispatch, name]);

  const handleAddCart = (product) => {
    dispatch(addCart(product));
  };

  const handleGotoStep = (step) => {
    dispatch(onGotoStep(step));
  };

  return (
    <Page title="projects: project Details" style={{ marginTop: '-2rem' }}>
      {/* <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading="Project Details"
          links={[
            // { name: 'Dashboard', href: PATH_DASHBOARD.root },
            // {
            //   name: 'my work',
            //   href: PATH_DASHBOARD.eCommerce.root,
            // },
            {
              // name: 'project name',
              href: PATH_DASHBOARD.eCommerce.shop,
            },
            // { name: sentenceCase(name) },
          ]}
        /> */}

      <CartWidget />

      {product && (
        <Card style={{ scale: '83%',  paddingTop:'0px !important',paddingBottom:'0rem',marginBottom:'-12rem',marginTop:'-5.5rem' }}>
          <Grid container >
            <Grid item xs={12} md={6} lg={6} >
              <ProductDetailsCarousel product={product} />
            </Grid>
            <Grid item xs={12} md={6} lg={5} mt={-3.9}>
              <ProductDetailsSummary
                product={product}
                cart={checkout.cart}
                // onAddCart={handleAddCart}
                onGotoStep={handleGotoStep}
              />
            </Grid>
          </Grid>
        </Card>


      )}
    </Page>
  );
}
