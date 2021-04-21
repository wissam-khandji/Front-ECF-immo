import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom';
import CryptoJS from "crypto-js"
import { createUser } from '../../Actions/createUser';
import { useFormik } from 'formik';
import * as yup from 'yup';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.secondary,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const validationSchema = yup.object({
    email: yup
      .string('Entrez votre email')
      .email('Email invalide')
      .required('Email requis'),
    nom: yup.string()
      .required("Nom requis")
      .min(2, "Trop court!")
      .max(30, "Trop long!")
      .matches(/^[\w-.@ ]+$/, {
        message: "Caractère incorrect"
      }),
    prenom: yup.string()
      .required("Prenom requis")
      .min(2, "Trop court!")
      .max(30, "Trop long!")
      .matches(/^[\w-.@ ]+$/, {
        message: "Caractère incorrect"
      }),
    password: yup.string()
      .required("Mot de passe requis")
      .min(8, "Le mot de passe doit contenir 8 caractères")
      .max(100, "Trop long!")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s:]).*$/, {
        message: "Le mot de passe doit contenir au moins 1 majuscule (A-Z), 1 miniscule (a-z), 1 chiffre (0-9) et 1 caractère spécial (punctuation)"
      }),
  });

function Inscription(props) {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
        "nom": "", 
        "prenom": "", 
        "email": "", 
        "password": "", 
        "isBailleurTier": false, 
        "isAbonne": false},
    validationSchema: validationSchema,
  });
    
    const handleCreation = () => {
        console.log(formik.values)
        formik.handleSubmit()
        if(formik.isValid) props.createUser(formik.values)
    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          S'inscrire
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="prenom"
                variant="outlined"
                required
                fullWidth
                id="prenom"
                label="Prénom"
                value={formik.values.prenom}
                onChange={formik.handleChange}
                error={formik.touched.prenom && Boolean(formik.errors.prenom)}
                helperText={formik.touched.prenom && formik.errors.prenom}
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="nom"
                label="Nom"
                value={formik.values.nom}
                onChange={formik.handleChange}
                error={formik.touched.nom && Boolean(formik.errors.nom)}
                helperText={formik.touched.nom && formik.errors.nom}
                name="nom"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleCreation}
          >
            Inscription
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
                <NavLink to="/login">
                Déjà un compte ? Connectez vous !
                </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = ({ data = {} }) => ({
    data
  });

export default connect(
    mapStateToProps,
    {
      createUser
    }
  )(Inscription)
  


