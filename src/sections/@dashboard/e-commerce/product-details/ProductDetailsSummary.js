// product details card
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import { sentenceCase } from 'change-case';
import { useNavigate } from 'react-router-dom';
// form
import { Controller, useForm } from 'react-hook-form';
// @mui
import { useTheme, styled } from '@mui/material/styles';
import { Box, Link, Stack, Button, Rating, Divider, IconButton, Typography } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';
// utils
// import { fShortenNumber, fCurrency } from '../../../../utils/formatNumber';
// components
// import Label from '../../../../components/Label';
import Iconify from '../../../../components/Iconify';
import SocialsButton from '../../../../components/SocialsButton';
// import { ColorSinglePicker } from '../../../../components/color-utils';
import { FormProvider, RHFSelect } from '../../../../components/hook-form';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(3),
  [theme.breakpoints.up(1368)]: {
    padding: theme.spacing(5, 8),
  },
}));

// ----------------------------------------------------------------------

ProductDetailsSummary.propTypes = {
  cart: PropTypes.array,
  onAddCart: PropTypes.func,
  onGotoStep: PropTypes.func,
  product: PropTypes.shape({
    available: PropTypes.number,
    colors: PropTypes.arrayOf(PropTypes.string),
    cover: PropTypes.string,
    id: PropTypes.string,
    inventoryType: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    priceSale: PropTypes.number,
    sizes: PropTypes.arrayOf(PropTypes.string),
    status: PropTypes.string,
    totalRating: PropTypes.number,
    totalReview: PropTypes.number,
  }),
};

export default function ProductDetailsSummary({ cart, product, onAddCart, onGotoStep, ...other }) {
  const theme = useTheme();

  const navigate = useNavigate();

  const [disabled, setDisabled] = useState(true);

  const handleEditClick = () => {
    setDisabled(false);
  };

  const handleBlur = () => {
    setDisabled(true);
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleEditClick();
    }
  };

  const {
    id,
    name,
    // sizes,
    // price,
    cover,
    // status,
    // colors,
    available,
    // priceSale,
    // totalRating,
    // totalReview,
    // inventoryType,
    RoomsVersion=3,
    BathroomVersion=2,

  } = product;

  const alreadyProduct = cart.map((item) => item.id).includes(id);

  const isMaxQuantity = cart.filter((item) => item.id === id).map((item) => item.quantity)[0] >= available;

  const defaultValues = {
    id,
    name,
    cover,
    available,
    // price,
    // color: colors[0],
    // size: sizes[4],
    quantity: available < 1 ? 0 : 1,
    quant: available < 1 ? 0 : 1,
    // RoomsVersion,
    // BathroomVersion,

  };

  const methods = useForm({
    defaultValues,
  });

  const { watch, control, setValue, handleSubmit } = methods;

  const values = watch();


  const onSubmit = async (data) => {
    try {
      if (!alreadyProduct) {
        onAddCart({
          ...data,
          subtotal: data.price * data.quantity,
        });
      }
      onGotoStep(0);
      navigate(PATH_DASHBOARD.eCommerce.checkout);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddCart = async () => {
    try {
      onAddCart({
        ...values,
        subtotal: values.price * values.quantity,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RootStyle {...other}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}  >
        <form style={{ border: 'solid  #d9d9d9 0.1rem', padding: '1.5rem', borderRadius: '1rem', marginLeft: '-0.6rem' }}>
          {/* background: ' #f2f2f2' */}
          {/* ////////////////////////////////////////////////\\\\\\\\\\\\\\\\\\\\\\\ */}
          <div style={{ position: 'relative' }}>
            <input type="text"
              style={{ border: 'none', outline: 'none', width: '100%', height: '2.5rem', borderRadius: '0.5rem', paddingLeft: '0.5rem' }}
              defaultValue=" Version name"
              // disabled style={{ paddingRight: '30px' }}
              disabled={disabled}
              onBlur={handleBlur}
            />
            <span
              onClick={handleEditClick}
              onKeyDown={handleKeyDown}
              role="button"
              tabIndex="0"
              style={{ position: 'absolute', top: '50%', right: '5px', transform: 'translateY(-50%)', cursor: 'pointer' }}>
              &#9998;
            </span>
          </div>
          {/* //////////////////////////////////////////////////////// */}
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 3 }}>

            <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
              Rooms
            </Typography>

            <div className='mb-8 '>

              <Incrementer2
                quantity={RoomsVersion}
              />
            </div>
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 3 }}>

            <Typography variant="subtitle1" sx={{ mt: 0.5, paddingTop: '0.5rem' }}>
              Bathrooms
            </Typography>

            <div className='mb-8 '>

              <Incrementer2
                quantity={BathroomVersion}
              />
            </div>
          </Stack>
        </form>
        <Divider sx={{ borderStyle: 'dashed', padding: '0.6rem' }} />



        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <form style={{ border: 'solid  #d9d9d9 0.1rem', padding: '1.5rem', borderRadius: '1rem', marginLeft: '-0.6rem' }}>
          <Typography style={{textAlign:'center',fontWeight:'bold', fontSize:'1.3rem'}} variant="subtitle1" sx={{ mt: 0 }}>
            Create new version
          </Typography>
          <Divider sx={{ borderStyle: 'dashed', padding: '0.6rem' }} />

          <Stack direction="row" justifyContent="space-between" sx={{ mb: 5 }}>
            <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
              Rooms
            </Typography>

            <Incrementer0
              name="quant"
              quant={values.quant}
              availablee={available}
              onIncrementQuantity={() => setValue('quant', values.quant + 1)}
              onDecrementQuantity={() => setValue('quant', values.quant - 1)}
            />

          </Stack>


          <Stack direction="row" justifyContent="space-between" sx={{ mb: 3 }}>
            <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
              Bathrooms
            </Typography>

            <div>
              <Incrementer
                name="quantity"
                quantity={values.quantity}
                available={available}
                onIncrementQuantity={() => setValue('quantity', values.quantity + 1)}
                onDecrementQuantity={() => setValue('quantity', values.quantity - 1)}
              />
              {/* <Typography variant="caption" component="div" sx={{ mt: 1, textAlign: 'right', color: 'text.secondary' }}>
              Available: {available}
            </Typography> */}
            </div>
          </Stack>


          <Stack direction="row" justifyContent="space-between" sx={{ mt: 5, mb: 4 }}>
            <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
              Area
            </Typography>

            <div className='mb-8 '>
              {/* <fieldset disabled>

              <div className="mb-3 , col-sm-19 ">
                <input type="number" id="disabledTextInput" className="form-control text-center bg-light" placeholder="90" />
              </div>
            </fieldset> */}
              <Incrementer2
                // name="quantity"
                quantity={'90'}
              // available={available}
              />
            </div>
          </Stack>

          <Divider sx={{ borderStyle: 'dashed' }} />

          <Stack direction="row" spacing={2} sx={{ mt: 1 }}>

            <Button fullWidth size="large" type="submit" variant="contained">
              Generate
            </Button>
          </Stack>


          {/* <Stack alignItems="center" sx={{ mt: 3 }}>
            <SocialsButton initialColor />
          </Stack> */}
        </form>
      </FormProvider>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

Incrementer0.propTypes = {
  available: PropTypes.number,
  quant: PropTypes.number,
  onIncrementQuantity: PropTypes.func,
  onDecrementQuantity: PropTypes.func,
};

function Incrementer0({ available, quant, onIncrementQuantity, onDecrementQuantity }) {
  return (
    <Box
      sx={{
        py: 0.5,
        px: 0.75,
        border: 1,
        lineHeight: 0,
        borderRadius: 1,
        display: 'flex',
        alignItems: 'center',
        borderColor: 'grey.50032',
      }}
    >
      <IconButton size="small" color="inherit" disabled={quant <= 1} onClick={onDecrementQuantity}>
        <Iconify icon={'eva:minus-fill'} width={14} height={14} />
      </IconButton>

      <Typography variant="body2" component="span" sx={{ width: 40, textAlign: 'center' }}>
        {quant}
      </Typography>

      <IconButton size="small" color="inherit" disabled={quant >= 4} onClick={onIncrementQuantity}>
        <Iconify icon={'eva:plus-fill'} width={14} height={14} />
      </IconButton>
    </Box>
  );
}





Incrementer.propTypes = {
  available: PropTypes.number,
  quantity: PropTypes.number,
  onIncrementQuantity: PropTypes.func,
  onDecrementQuantity: PropTypes.func,
};

function Incrementer({ available, quantity, onIncrementQuantity, onDecrementQuantity }) {
  return (
    <Box
      sx={{
        py: 0.5,
        px: 0.75,
        border: 1,
        lineHeight: 0,
        borderRadius: 1,
        display: 'flex',
        alignItems: 'center',
        borderColor: 'grey.50032',
      }}
    >
      <IconButton size="small" color="inherit" disabled={quantity <= 1} onClick={onDecrementQuantity}>
        <Iconify icon={'eva:minus-fill'} width={14} height={14} />
      </IconButton>

      <Typography variant="body2" component="span" sx={{ width: 40, textAlign: 'center' }}>
        {quantity}
      </Typography>

      <IconButton size="small" color="inherit" disabled={quantity >= 4} onClick={onIncrementQuantity}>
        <Iconify icon={'eva:plus-fill'} width={14} height={14} />
      </IconButton>
    </Box>
  );
}


















// Incrementer0.propTypes = {
//   available: PropTypes.number,
//   quantity0: PropTypes.number,
//   onIncrementQuantity0: PropTypes.func,
//   onDecrementQuantity0: PropTypes.func,
// };

// function Incrementer0({ available, quantity0, onIncrementQuantity0, onDecrementQuantity0 }) {
//   return (
//     <Box
//       sx={{
//         py: 0.5,
//         px: 0.75,
//         border: 1,
//         lineHeight: 0,
//         borderRadius: 1,
//         display: 'flex',
//         alignItems: 'center',
//         borderColor: 'grey.50032',
//       }}
//     >
//       <IconButton size="small" color="inherit" disabled={quantity0 <= 1} onClick={onDecrementQuantity0}>
//         <Iconify icon={'eva:minus-fill'} width={14} height={14} />
//       </IconButton>

//       <Typography variant="body2" component="span" sx={{ width: 40, textAlign: 'center' }}>
//         {quantity0}
//       </Typography>

//       <IconButton size="small" color="inherit" disabled={quantity0 >= 4} onClick={onIncrementQuantity0}>
//         <Iconify icon={'eva:plus-fill'} width={14} height={14} />
//       </IconButton>
//     </Box>
//   );
// }


Incrementer2.propTypes = {
  available: PropTypes.number,
  quantity: PropTypes.number,
  onIncrementQuantity: PropTypes.func,
  onDecrementQuantity: PropTypes.func,
};

function Incrementer2({ available, quantity, onIncrementQuantity, onDecrementQuantity }) {
  return (
    <Box
      sx={{
        py: 0.5,
        px: 3.8,
        border: 1,
        lineHeight: 0,
        borderRadius: 1,
        display: 'flex',
        alignItems: 'center',
        borderColor: 'grey.50032',
      }}
    >
      {/* <IconButton size="small" color="inherit" disabled={quantity <= 1} onClick={onDecrementQuantity}>
        <Iconify icon={'  '} width={1} height={14} />
      </IconButton> */}

      <Typography variant="body2" component="span" sx={{ width: 40, textAlign: 'center' }}>
        {quantity}
      </Typography>

      {/* <IconButton size="small" color="inherit" disabled={quantity >= 4} onClick={onIncrementQuantity}>
        <Iconify icon={'  '} width={14} height={14} />
      </IconButton> */}
    </Box>
  );
}