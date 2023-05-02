// product details card
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types';
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

  const {
    id,
    name,
    sizes,
    price,
    cover,
    // status,
    colors,
    available,
    // priceSale,
    // totalRating,
    // totalReview,
    // inventoryType,
  } = product;

  const alreadyProduct = cart.map((item) => item.id).includes(id);

  const isMaxQuantity = cart.filter((item) => item.id === id).map((item) => item.quantity)[0] >= available;

  const defaultValues = {
    id,
    name,
    cover,
    available,
    price,
    color: colors[0],
    size: sizes[4],
    quantity: available < 1 ? 0 : 1,
    quant: available < 1 ? 0 : 1,
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
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
         <form style={{border:'solid  #d9d9d9 0.1rem', padding:'0.5rem',borderRadius:'1rem', width:'21.6rem', marginLeft:'-0.6rem',background:' #f2f2f2'}}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 3 }}>
        
        <Typography variant="subtitle1" sx={{ mt: 0.5 }}>
            Rooms
          </Typography>

          <div className='mb-8 '>
            
            <Incrementer2
              quantity={'90'}
            />
          </div>
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 3 }}>
        
        <Typography variant="subtitle1" sx={{ mt: 0.5,paddingTop:'0.5rem' }}>
            Bathrooms
          </Typography>

          <div className='mb-8 '>
            
            <Incrementer2
              quantity={'90'}
            />
          </div>
        </Stack>
        </form>
        <Divider sx={{ borderStyle: 'dashed' ,padding:'0.9rem'}} />



        {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        

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

          {/* <RHFSelect
            name="size"
            size="small"
            fullWidth={false}
            FormHelperTextProps={{
              sx: { textAlign: 'right', margin: 0, mt: 1 },
            }}
            helperText={
              <Link underline="always" color="text.secondary">
                room number
              </Link>
            }
          >
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </RHFSelect> */}

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
        
        <Stack direction="row" spacing={2} sx={{ mt: 5 }}>

          <Button fullWidth size="large" type="submit" variant="contained">
            Generate
          </Button>
        </Stack>
        

        <Stack alignItems="center" sx={{ mt: 3 }}>
          <SocialsButton initialColor />
        </Stack>
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