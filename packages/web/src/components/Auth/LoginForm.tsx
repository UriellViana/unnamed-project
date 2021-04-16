import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
} from '@material-ui/core';
import {
  Assignment,
  AssignmentInd,
  Visibility,
  VisibilityOff,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { FormikProps } from 'formik';
import { ApolloError } from '@apollo/client';

import AuthPageTemplate from './PageTemplate';
import FormikTextField from '../FormikTextField';
import { LoginVariables } from '../../pages/Login';

type LoginFormProps = FormikProps<LoginVariables> & {
  isLoading: boolean;
  passwordVisibility: boolean;
  togglePasswordVisibility: () => void;
  loginError?: ApolloError;
};

const LoginForm: React.FC<LoginFormProps> = ({
  handleSubmit,
  togglePasswordVisibility,
  passwordVisibility,
  isSubmitting,
  isLoading,
  loginError,
}) => (
  <AuthPageTemplate title="Login" isLoading={isLoading}>
    <FormControl fullWidth component="form" onSubmit={handleSubmit}>
      <FormikTextField
        label="Email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="Type in your account's email address.."
        variant="outlined"
        required
      />
      <FormikTextField
        label="Password"
        name="password"
        autoComplete="current-password"
        type={passwordVisibility ? 'text' : 'password'}
        placeholder="Type in your account's password.."
        variant="outlined"
        margin="normal"
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={togglePasswordVisibility}
                onMouseDown={(e) => e.preventDefault()}
              >
                {passwordVisibility ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        disabled={isSubmitting}
        type="submit"
        color="primary"
        variant="contained"
        size="large"
        startIcon={<AssignmentInd />}
      >
        Login
      </Button>
      &nbsp;
      <Button
        component={Link}
        to="../register"
        color="secondary"
        size="large"
        startIcon={<Assignment />}
      >
        Register
      </Button>
      {!!loginError && loginError.message}
    </FormControl>
  </AuthPageTemplate>
);

export default LoginForm;
