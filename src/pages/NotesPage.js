import React from 'react';
import pT from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10,
  },
};

function NotesPage({ classes }) {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            {/* NOTE: See alternative with SVG MenuIcon in LoginPage */}
            <Icon>
              {'menu'}
            </Icon>
          </IconButton>
          <Typography className={classes.flex} variant="title" color="inherit">
            {'Notes'}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

NotesPage.propTypes = {
  classes: pT.shape({}).isRequired,
};

export default withStyles(styles)(NotesPage);
