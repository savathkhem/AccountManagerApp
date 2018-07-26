import React, { Fragment } from 'react';
import { ListItem, ListItemIcon, Typography, Paper } from '@material-ui/core/';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Modal from "./../Modal";

const ItemList = (props) => (
<Fragment>
    <ListItem button onClick={props.onClick}>
        <ListItemIcon>
        <AccountCircle />
        </ListItemIcon>
            <Typography>
                {props.name}
            </Typography>
    </ListItem>

    <Modal
    // open={props.open}
    // onClose={props.onClose}
    >
    <Paper>
        {props.name}
    </Paper>
    </Modal>
</Fragment>
);




export default ItemList;
