import React, { useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import 'firebase/auth';
import { auth, provider } from './config/firebase-config.js';
import Contact from './components/showContacts/showContacts.js';
import CreateContact from './components/createContact/createContact.js';
import './App.css';
import useStyles from './styles';
import { signInWithPopup } from 'firebase/auth';

function App() {
  const classes = useStyles();

  let [loggedIn, setloggedIn] = useState(false);

  const signInWithGoogle = () => signInWithPopup(auth, provider).then((result)=>{
    const name = result.user.displayName;
    const email = result.user.email;
    localStorage.setItem('name', name, 'email', email);

    setloggedIn(true);
  });

  const logOut = (result) => {
    setloggedIn(false);
    auth.signOut();
  };

  return (
    <div className="App">
      {
      loggedIn === false ?
      <button onClick={signInWithGoogle}>Sign In With Google</button>
      :
      <Container maxWidth='lg'>
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant="h3" align="center">
            {localStorage.getItem('name')}'s Phone Book
          </Typography>
          <button onClick={logOut}>Log Out</button>
        </AppBar>

        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems='stretch'>
              <Grid item xs={12} sm={8}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                  <Contact />
                </AppBar>
              </Grid>
              <Grid item xs={7} sm={3}>
              <AppBar className={classes.appBar} position="static" color="inherit">
                <CreateContact />
              </AppBar>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
      }
    </div>
  );
}

export default App;