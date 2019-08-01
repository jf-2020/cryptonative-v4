import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class AddUserModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };

        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClickOpen() {
        this.setState({
            open: true
        });
    }

    handleClose() {
        this.setState({
            open: false
        });
    }

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
                    Add User
                </Button>
                <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add User</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            id="firstName"
                            label="First Name"
                            type="text"
                            margin="dense"
                            fullWidth
                        />
                        <TextField
                            id="lastName"
                            label="Last Name"
                            type="text"
                            margin="dense"
                            fullWidth
                        />
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            margin="dense"
                            fullWidth
                        />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            margin="dense"
                            fullWidth
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Add User
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AddUserModal;