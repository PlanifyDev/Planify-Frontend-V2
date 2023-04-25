import PropTypes from 'prop-types';
import * as Yup from 'yup';
// form
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
// @mui
import { Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useSnackbar } from 'notistack';
// hooks
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import { FormProvider, RHFTextField } from '../../../components/hook-form';
import axios from '../../../utils/axios';
// ----------------------------------------------------------------------

ChangePasswordForm.propTypes = {
  onSent: PropTypes.func,
  onGetPassword: PropTypes.func,
};

export default function ChangePasswordForm({ onSent, onGetPassword }) {
  const isMountedRef = useIsMountedRef();
  const { enqueueSnackbar } = useSnackbar();

  const ChangePasswordSchema = Yup.object().shape({
    newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('New Password is required'),
    confirmNewPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match'),
  });

  const methods = useForm({
    resolver: yupResolver(ChangePasswordSchema),
    // defaultValues: { email: 'mo.aggour@gmail.com' },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (isMountedRef.current) {
        console.log(data);
        axios.post('/auth/reset-password', { newpassword: data.newPassword })
          .then((response) => {
            onSent();
          }
          )
          .catch((error) => {
            enqueueSnackbar(error.error, { variant: 'error' });
          });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
      <RHFTextField name="newPassword" type="password" label="New Password" />
      <RHFTextField name="confirmNewPassword" type="password" label="Confirm New Password" />
        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Change Password
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
