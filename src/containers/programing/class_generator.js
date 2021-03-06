import React, {useState} from 'react'
import {TextField, Container, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
 
import Nav from '../layout/nav'

const useStyles = makeStyles((theme) => ({
  codeLine: {
    fontSize: 20, 
    paddingTop: 5
  }, 
})) 
function ClassGenerator() {
  const classes = useStyles();
  const [className, setClassName] = useState('') 

  return (
    <div>
      <Nav />
      <Container maxWidth='lg'>
        <Grid
          container
          direction='row'
          justify='flex-start'
          alignItems='center'
          style={{marginTop: 100, marginBottom: 10}}
        >
          <TextField
            id='outlined-multiline-static'
            label='Class name'
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            variant='outlined'
            autoComplete='off'
          />
        </Grid>
        { className &&
          (
            <div style={{paddingTop: 50}}>
              <div className={classes.codeLine}>class {className}():</div>
              <div className={classes.codeLine}>&emsp;def __init__(self):</div>
              <div className={classes.codeLine}>&emsp;&emsp;super().__init__()</div>
              <div className={classes.codeLine}>&emsp;def run(self):</div>
              <div className={classes.codeLine}>&emsp;&emsp;pass</div>
              <div className={classes.codeLine}>if __name__ == '__main__':</div>
              <div className={classes.codeLine}>&emsp;{className}.run()</div>
            </div>
          )
        }
        
      </Container>
    </div>
  )
}
export default ClassGenerator
