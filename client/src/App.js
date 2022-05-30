import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Contact from './components/showContacts/showContacts.js';
import CreateContact from './components/createContact/createContact.js';
import './App.css';
import useStyles from './styles';

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth='lg'>
        <AppBar className={classes.appBar} position='static' color='inherit'>
          <Typography className={classes.heading} variant="h3" align="center">
            Phone Book
          </Typography>
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
    </div>
  );
}

export default App;