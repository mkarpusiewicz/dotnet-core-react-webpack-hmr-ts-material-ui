import * as React from "react";
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -18,
        marginRight: 10,
    },
};

function DenseAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit">
                        Photos
          </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
DenseAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DenseAppBar);