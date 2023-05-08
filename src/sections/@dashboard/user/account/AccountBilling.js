import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import { Box, Grid, Card, Button, Typography, Stack } from '@mui/material';
//
import { PATH_PAGE } from '../../../../routes/paths';

import AccountBillingAddressBook from './AccountBillingAddressBook';
import AccountBillingPaymentMethod from './AccountBillingPaymentMethod';
import AccountBillingInvoiceHistory from './AccountBillingInvoiceHistory';
import useAuth from '../../../../hooks/useAuth';

// ----------------------------------------------------------------------

AccountBilling.propTypes = {
  addressBook: PropTypes.array,
  cards: PropTypes.array,
  invoices: PropTypes.array,
};


export default function AccountBilling({ cards, addressBook, invoices }) {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  console.log('user.plan', user);
  // const plans = () => {
  //   window.location.href = 'PATH_PAGE.pricing';
  // }



  return (
    <Grid container spacing={5}>
      <Grid item xs={12} md={8}>
        <Stack spacing={3}>
          <Card sx={{ p: 3 }}>
            <Typography variant="overline" sx={{ mb: 3, display: 'block', color: 'text.secondary' }}>
              Your Plan
            </Typography>
            <Typography variant="h4">{ user?.user_plan.toUpperCase() || ''}</Typography>
            <Box
              sx={{
                mt: { xs: 2, sm: 0 },
                position: { sm: 'absolute' },
                top: { sm: 24 },
                right: { sm: 24 },
              }}
            >
              <Button size="small" color="inherit" variant="outlined" sx={{ mr: 1 }}>
                Cancel plan
              </Button>
              <Button size="small" variant="outlined" href='/pricing'>
                Upgrade plan
              </Button>
            </Box>
          </Card>

          {/* <AccountBillingPaymentMethod
            cards={cards}
            isOpen={open}
            onOpen={() => setOpen(!open)}
            onCancel={() => setOpen(false)}
          /> */}

        </Stack>
      </Grid>

      <Grid item xs={12} md={4}>
        {/* <AccountBillingInvoiceHistory invoices={invoices} /> */}
      </Grid>
    </Grid>
  );
}
