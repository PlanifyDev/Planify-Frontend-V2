import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';

// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { OutlinedInput, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_AUTH, PATH_DASHBOARD } from '../../../routes/paths';

// ----------------------------------------------------------------------

export default function VerifyCodeForm() {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const VerifyCodeSchema = Yup.object().shape({
    code1: Yup.string().required('Code is required'),
    code2: Yup.string().required('Code is required'),
    code3: Yup.string().required('Code is required'),
    code4: Yup.string().required('Code is required'),
    code5: Yup.string().required('Code is required'),
    code6: Yup.string().required('Code is required'),
  });

  const defaultValues = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: '',
  };

  const {
    watch,
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });

  const values = watch();

  useEffect(() => {
    document.addEventListener('paste', handlePasteClipboard);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (data) => {

    const accessToken = window.localStorage.getItem('accessToken');
    let id = null;
    if (accessToken) {
      id = jwtDecode(accessToken).userId;
    }
    if (!id || !accessToken) {
      enqueueSnackbar('Please login again!', { variant: 'error' });
      window.localStorage.removeItem('accessToken')
      navigate(PATH_AUTH.login, { replace: true });

    }

    const code = Object.values(data).join('');

    axios.defaults.headers.common = {
      'authorization': `${accessToken}`
    };

    axios.put(`http://127.0.0.1:3000/verify/${id}`, { verificationCode: code })
      .then((res) => {
        enqueueSnackbar('Verify success!');
        const newAccessToken = res.data.jwt;
        window.localStorage.setItem('accessToken', newAccessToken)
        navigate(PATH_DASHBOARD.root, { replace: true });
      })

      .catch((error) => {
        if (error.response.status === 401) {
          enqueueSnackbar('Unauthorized!', { variant: 'error' });

          window.localStorage.removeItem('accessToken').then((res) => {
            navigate(PATH_AUTH.login, { replace: true });
          });
        }
        if (error.response.status === 400) {
          enqueueSnackbar('Wrong Code!', { variant: 'error' });
        }
      });

  };

  const handlePasteClipboard = (event) => {
    let data = event?.clipboardData?.getData('Text') || '';

    data = data.split('');

    [].forEach.call(document.querySelectorAll('#field-code'), (node, index) => {
      node.value = data[index];
      const fieldIndex = `code${index + 1}`;
      setValue(fieldIndex, data[index]);
    });
  };

  const handleChangeWithNextField = (event, handleChange) => {
    const { maxLength, value, name } = event.target;
    const fieldIndex = name.replace('code', '');

    const fieldIntIndex = Number(fieldIndex);

    if (value.length >= maxLength) {
      if (fieldIntIndex < 6) {
        const nextfield = document.querySelector(`input[name=code${fieldIntIndex + 1}]`);

        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }

    handleChange(event);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" spacing={2} justifyContent="center">
        {Object.keys(values).map((name, index) => (
          <Controller
            key={name}
            name={`code${index + 1}`}
            control={control}
            render={({ field }) => (
              <OutlinedInput
                {...field}
                id="field-code"
                autoFocus={index === 0}
                placeholder="-"
                onChange={(event) => handleChangeWithNextField(event, field.onChange)}
                inputProps={{
                  maxLength: 1,
                  sx: {
                    p: 0,
                    textAlign: 'center',
                    width: { xs: 36, sm: 56 },
                    height: { xs: 36, sm: 56 },
                  },
                }}
              />
            )}
          />
        ))}
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        disabled={!isValid}
        sx={{ mt: 3 }}
      >
        Verify
      </LoadingButton>
    </form>
  );
}
