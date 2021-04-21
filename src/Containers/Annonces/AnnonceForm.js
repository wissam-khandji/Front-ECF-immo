import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField, MenuItem, Select, InputLabel, FormControl, Grid, Button} from '@material-ui/core';
import { createAnnonce } from '../../Actions/createAnnonce';
import {connect} from "react-redux";    
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

function AnnonceForm(props) {

    const classes = useStyles();

    const [annonce, setAnnonce] = React.useState({"titre": "", "description": "", "statut": false, "type": "", "loyer": 100})

    const handleCreation = () => {
        props.createAnnonce(annonce)
    };


    const annonceChangeHandler = (event) => {
        setAnnonce((prevState) => ({
        ...prevState,
        [event.target.id]: event.target.value
        }));
    }

    const annonceTypeChangeHandler = (event) => {

        setAnnonce((prevState) => ({
        ...prevState,
        ["type"]: event.target.value
        }));
    }


  return (
    <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
    <form className={classes.form} noValidate autoComplete="off">
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField 
            id="titre" 
            label="Titre" 
            variant="outlined"
            required
            fullWidth
            value={annonce.titre} 
            onChange={annonceChangeHandler} />
            </Grid>
            <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth className={classes.formControl}>
                    <InputLabel id="type-label">Type de bien</InputLabel>
                    <Select
                    labelId="type-label"
                    id="type"
                    required
                    
                    value={annonce.type}
                    onChange={annonceTypeChangeHandler}
                    >
                    <MenuItem value={'Appartement'}>Appartement</MenuItem>
                    <MenuItem value={'Maison'}>Maison</MenuItem>
                </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12}>
            <TextField
                id="description"
                label="Description"
                variant="outlined"
                required
                fullWidth
                multiline
                rowsMax={5}
                value={annonce.description}
                onChange={annonceChangeHandler}
                placeholder="Ajouter description du bien"
                />
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained" color="primary" onClick={handleCreation} >
                    Ajouter
                </Button>
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
      createAnnonce
    }
  )(AnnonceForm)
  



