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
import axiosn from 'axios';
import axios from '../../../../utils/axios';

import useAuth from '../../../../hooks/useAuth';
// utils
import { fData } from '../../../../utils/formatNumber';
// _mock
import { countries } from '../../../../_mock';
// components
import { FormProvider, RHFSwitch, RHFSelect, RHFTextField, RHFUploadAvatar } from '../../../../components/hook-form';

import { PATH_AUTH } from '../../../../routes/paths';


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
    // address: user?.address || '',
    // state: user?.state || '',
    // city: user?.city || '',
    // zipCode: user?.zipCode || '',
    // about: user?.about || '',
    // isPublic: user?.isPublic || false,
  };

  const methods = useForm({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });

  const {
    reset,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    const accessToken = window.localStorage.getItem('accessToken');
    
    axios.defaults.headers.common = {
      'authorization': `${accessToken}`
    };

    const id = JSON.parse(window.localStorage.getItem('user')).id

   console.log(data)
    axios.put(`/auth/update-all/${id}`, data)
      .then((res) => {
        enqueueSnackbar('Data edit success!');
        // const newAccessToken = res.data.jwt;
        // window.localStorage.setItem('accessToken', newAccessToken)
        // navigate(PATH_DASHBOARD.root, { replace: true });
      })

      .catch((error) => {
        enqueueSnackbar(error.error, { variant: 'error' });

        // if (error.response.status === 401) {
        //   enqueueSnackbar('Unauthorized!', { variant: 'error' });

        //   window.localStorage.removeItem('accessToken').then((res) => {
        //     // navigate(PATH_AUTH.login, { replace: true });
        //   });
        // }
        // if (error.response.status === 400) {
        //   enqueueSnackbar('Wrong Code!', { variant: 'error' });
        // }
      })
      .finally(() => {
        reset();
      });
      

  };

  const uploadAvatar = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    try {
      const response = await axiosn.post('https://api.imgbb.com/1/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        params: {
          key: '8d493e029a3607ac3f4c520c14d9d2d1' 
        }
      });
  
      const url = response.data.data.image.url
      setValue(
        'image_url',
        url
      );
    
    } catch (error) {
      console.error("Failed to upload image to Imgur.", error);
    }
  }
    

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      uploadAvatar(file);
      console.log(file);

      if (file) {


        setValue(
          'image_url',
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        );
      }
    },
    [setValue]
  );

  // update user data ans jwt token
  const updateUser = async (data) => {
    try {
      const accessToken = window.localStorage.getItem('accessToken');
      const id = JSON.parse(window.localStorage.getItem('user')).id

      axios.defaults.headers.common = {
        'authorization': `${accessToken}`
      };
    
      axios.get(`/auth/get-user/${id}`, data)
      .then((res) => {
        console.log(res);
        const newAccessToken = res.data.user.user_token;
        window.localStorage.setItem('accessToken', newAccessToken)
        // set user data
        const user = res.data.user
        user.id = id;
        window.localStorage.setItem('user', JSON.stringify(user))
      })
      

    } catch (error) {
      console.error(error);
    }
  };
    

  updateUser()
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
