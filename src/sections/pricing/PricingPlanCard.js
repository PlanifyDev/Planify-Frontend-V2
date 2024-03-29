import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Card, Button, Typography, Box, Stack } from '@mui/material';
// components
import Label from '../../components/Label';
import Iconify from '../../components/Iconify'
import  { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from '../../assets';


// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  flexDirection: 'column',
  padding: theme.spacing(3),
  [theme.breakpoints.up(414)]: {
    padding: theme.spacing(5),
  },
}));

// ----------------------------------------------------------------------

PricingPlanCard.propTypes = {
  index: PropTypes.number,
  card: PropTypes.object,
};

export default function PricingPlanCard({ card, index, monthly }) {
  const subscription = card.name;
  let price = monthly ? card.monthly_price : card.yearly_price;
  price = parseFloat(price) > 0 ? price : 'Free';
  const currentPlanId = '03fdba11-50ca-44e1-8b16-949b9fcc7995';
  const caption = card.description;
  const lists = [
      { text: 'AI Floor Plan Generation', isAvailable: true },
      { text: '3D Model generation', isAvailable: card.design_3d },
      { text: 'AutoCAD & Revit Integration', isAvailable: card.dwg_file },
      { text: 'Designs Editing', isAvailable: card.edit_design },
      { text: 'Multiple Plan Designs', isAvailable: card.name==='premium' },
      { text: 'High-Speed GPUs', isAvailable: card.name==='premium' },
  ]
  const labelAction = card.plan_id === currentPlanId? 'current plan' : card.description;
  const icon = card.name === 'basic' ? <PlanFreeIcon /> : <PlanPremiumIcon />;
  

  return (
    <RootStyle>
      {index === 1 && (
        <Label
          color="info"
          sx={{
            top: 16,
            right: 16,
            position: 'absolute',
          }}
        >
          POPULAR
        </Label>
      )}

      <Typography variant="overline" sx={{ color: 'text.secondary' }}>
        {subscription}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 2 }}>
        {index === 1 || index === 2 ? (
          <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
            $
          </Typography>
        ) : (
          ''
        )}
        <Typography variant="h2" sx={{ mx: 1 }}>
          {price === 0 ? 'Free' : price}
        </Typography>
        {index === 1 || index === 2 ? (
          <Typography
            gutterBottom
            component="span"
            variant="subtitle2"
            sx={{
              alignSelf: 'flex-end',
              color: 'text.secondary',
            }}
          >
            {monthly ? '/mo' : '/yr' }
          </Typography>
        ) : (
          ''
        )}
      </Box>

      <Typography
        variant="caption"
        sx={{
          color: 'primary.main',
          textTransform: 'capitalize',
        }}
      >
        {caption}
      </Typography>

      <Box sx={{ width: 80, height: 80, mt: 3 }}>{icon}</Box>

      <Stack component="ul" spacing={2} sx={{ my: 5, width: 1 }}>
        {lists.map((item) => (
          <Stack
            key={item.text}
            component="li"
            direction="row"
            alignItems="center"
            spacing={1.5}
            sx={{ typography: 'body2', color: item.isAvailable ? 'text.primary' : 'text.disabled' }}
          >
            <Iconify icon={'eva:checkmark-fill'} sx={{ width: 20, height: 20 }} />
            <Typography variant="body2">{item.text}</Typography>
          </Stack>
        ))}
      </Stack>

      <Button fullWidth size="large" variant="contained" disabled={card.plan_id===currentPlanId} href='/payment'>
        {labelAction}
      </Button>
    </RootStyle>
  );
}
