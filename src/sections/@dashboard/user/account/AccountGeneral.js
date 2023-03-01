import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useCallback } from 'react';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Box, Grid, Card, Stack, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// hooks
import useAuth from '../../../../hooks/useAuth';
// utils
import { fData } from '../../../../utils/formatNumber';
// _mock
import { countries } from '../../../../_mock';
// components
import { FormProvider, RHFSwitch, RHFSelect, RHFTextField, RHFUploadAvatar } from '../../../../components/hook-form';

// ----------------------------------------------------------------------

export default function AccountGeneral() {
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useAuth();

  const UpdateUserSchema = Yup.object().shape({
    email: Yup.string().required('Name is required'),
  });

  const defaultValues = {
    firstname: user?.firstname || '',
    lastname: user?.lastname || '',
    email: user?.email || '',
    image_url: user?.photoURL || 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSUe2eaB9QYVkoJORkwnG2yfpPRqpqvRyUkWXOfvLOirm1mudvx',
    phoneNumber: user?.phoneNumber || '',
    country: user?.country || '',
    address: user?.address || '',
    state: user?.state || '',
    city: user?.city || '',
    zipCode: user?.zipCode || '',
    about: user?.about || '',
    isPublic: user?.isPublic || false,
  };

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });

  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    const accessToken = window.localStorage.getItem('accessToken');
    
    // axios.defaults.headers.common = {
    //   'authorization': `${accessToken}`
    // };

    // axios.put(`http://127.0.0.1:3000/updateall/${id}`, { verificationCode: code })
    //   .then((res) => {
    //     enqueueSnackbar('Verify success!');
    //     const newAccessToken = res.data.jwt;
    //     window.localStorage.setItem('accessToken', newAccessToken)
    //     navigate(PATH_DASHBOARD.root, { replace: true });
    //   })

    //   .catch((error) => {
    //     if (error.response.status === 401) {
    //       enqueueSnackbar('Unauthorized!', { variant: 'error' });

    //       window.localStorage.removeItem('accessToken').then((res) => {
    //         navigate(PATH_AUTH.login, { replace: true });
    //       });
    //     }
    //     if (error.response.status === 400) {
    //       enqueueSnackbar('Wrong Code!', { variant: 'error' });
    //     }
    //   });
    enqueueSnackbar('Update success!');

  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];

      if (file) {
        setValue(
          'photoURL',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ py: 10, px: 3, textAlign: 'center' }}>
            <RHFUploadAvatar
              name="image_url"
              accept="image/*"
              maxSize={3145728}
              onDrop={handleDrop}
              helperText={
                <Typography
                  variant="caption"
                  sx={{
                    mt: 2,
                    mx: 'auto',
                    display: 'block',
                    textAlign: 'center',
                    color: 'text.secondary',
                  }}
                >
                  Allowed *.jpeg, *.jpg, *.png, *.gif
                  <br /> max size of {fData(3145728)}
                </Typography>
              }
            />

          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }} style={{height: '100%', paddingTop: '62px'}}>
            <Box
              sx={{
                display: 'grid',
                rowGap: 3,
                columnGap: 2,
                gridTemplateColumns: { xs: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' },
              }}
            >
              <RHFTextField name="firstname" label="First Name" />
              <RHFTextField name="lastname" label="Last Name" />
              <RHFTextField name="email" label="Email Address" />

              <RHFSelect name="country" label="Country" placeholder="Country">
                <option value="" />
                {countries.map((option) => (
                  <option key={option.code} value={option.label}>
                    {option.label}
                  </option>
                ))}
              </RHFSelect>

            </Box>

            <Stack spacing={3} alignItems="flex-mid" sx={{ mt: 3 }}>

            <center>
              <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
                Save Changes
              </LoadingButton>
            </center>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </FormProvider>
  );
}
