import React from 'react';

import {
  Paper,
  makeStyles,
  createStyles,
  Theme,
  Box,
  Typography,
  Button,
  Input,
  InputAdornment,
} from '@material-ui/core';

import { Search as SearchIcon } from '@material-ui/icons';

import ProjectsTable, { Row } from './ProjectsTable';

interface IMyProjects {
  rows: Row[];
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: 'flex',
      flexDirection: 'column',
      padding: theme.spacing(4),
      width: theme.spacing(100),
      height: theme.spacing(50),
    },
    input: {
      marginTop: theme.spacing(4),
      width: theme.spacing(30),
    },
  })
);

const MyProjects: React.FC<IMyProjects> = ({ rows, onInputChange }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h4">Meus projetos</Typography>
        <Button variant="contained" color="primary">
          Criar projeto
        </Button>
      </Box>
      <Input
        placeholder="Buscar"
        className={classes.input}
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
        onChange={onInputChange}
      />
      <ProjectsTable rows={rows} />
    </Paper>
  );
};

export default MyProjects;
