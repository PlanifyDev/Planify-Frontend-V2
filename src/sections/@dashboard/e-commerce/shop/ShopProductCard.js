import PropTypes from 'prop-types';
import { paramCase } from 'change-case';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Card, Link, Typography, Stack } from '@mui/material';
// routes
import { PATH_DASHBOARD } from '../../../../routes/paths';
// utils
import { fCurrency } from '../../../../utils/formatNumber';
// components
import Label from '../../../../components/Label';
import Image from '../../../../components/Image';
import { ColorPreview } from '../../../../components/color-utils';

// ----------------------------------------------------------------------

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { name, cover, status,id,RoomsVersion,BathVersion } = product;

  const linkTo = PATH_DASHBOARD.eCommerce.view(paramCase(name), product.id);

  return (
    <Card>
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
    </Card>
  );
}
