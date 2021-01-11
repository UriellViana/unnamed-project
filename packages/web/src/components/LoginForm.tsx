import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { BLACK_800, BLUE_700, GREEN_400 } from '../constants/colors';

export interface LoginFormProps {
  email: {
    value: string;
    error: string;
  };
  password: {
    value: string;
    error: string;
  };
  handleEmail: (value: string) => void;
  handlePassword: (value: string) => void;
  handleLogin: (options?: {
    variables: { email: string; password: string };
  }) => void;
  handleRegister: () => void;
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '60%',
    justifyContent: 'space-around',
    border: `5px solid ${BLACK_800}`,
    padding: '1% 15%',
    backgroundColor: 'white',
    borderRadius: '20px',

    '@media (max-width: 800px)': {
      height: '50%',
      padding: '1% 10%',
    },

    '@media (max-width: 500px)': {
      padding: '1% 5%',
      height: '50%',
      alignItems: 'center',
    },
  },

  buttonLogin: {
    height: '15%',
    color: BLACK_800,
    fontWeight: 600,
    '@media (max-width: 800px)': {
      height: '10%',
    },
  },

  buttonNewUser: {
    height: '10%',
    color: BLACK_800,
    fontWeight: 600,
    '@media (max-width: 800px)': {
      height: '8%',
    },
  },

  input: {
    height: '20%',

    '& label': {
      fontSize: '30%',
      '@media (max-width: 800px)': {
        fontSize: '50%',
      },
    },
    '& input:invalid:hover + fieldset': {
      borderColor: BLUE_700,

      borderWidth: 2,
    },
    '& input + fieldset, label': {
      borderColor: BLACK_800,
      color: BLACK_800,
      borderWidth: 2,
    },
    '& input:hover + fieldset, label': {
      borderColor: GREEN_400,
      color: BLACK_800,
      borderWidth: 2,
    },

    '& input:valid:focus + fieldset': {
      borderLeftWidth: 6,

      padding: '4px !important', // override inline-style
    },
  },
}));

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  handleEmail,
  handlePassword,
  handleLogin,
  handleRegister,
}) => {
  const classes = useStyles();

  const emailError = Boolean(email.error);

  const passwordError = Boolean(password.error);

  const emailFilled = Boolean(email.value);

  const passwordFilled = Boolean(password.value);

  return (
    <FormControl component="form" className={classes.root}>
      <TextField
        className={classes.input}
        error={emailError}
        helperText={email.error}
        id="validation-outlined-input"
        label="Email"
        onChange={(e) => handleEmail(e.target.value)}
        variant="outlined"
        size="small"
        required
        margin="normal"
        color="primary"
      />
      <TextField
        className={classes.input}
        margin="normal"
        size="small"
        error={passwordError}
        helperText={password.error}
        id="validation-outlined-input"
        label="Senha"
        onChange={(e) => handlePassword(e.target.value)}
        type="password"
        variant="outlined"
        required
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonLogin}
        onSubmit={() =>
          handleLogin({
            variables: { email: email.value, password: password.value },
          })
        }
        disabled={
          emailError || passwordError || !emailFilled || !passwordFilled
        }
      >
        Login
      </Button>
      <Button
        variant="contained"
        color="secondary"
        className={classes.buttonNewUser}
        onClick={handleRegister}
      >
        Novo Usuário
      </Button>
    </FormControl>
  );
};

export default LoginForm;
