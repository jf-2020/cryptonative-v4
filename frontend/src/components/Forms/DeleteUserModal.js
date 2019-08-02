import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class DeleteUserModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        };
        this.handleClickOpen = this.handleClickOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleEmail(e) {
        e.preventDefault();
        this.setState({
            email: e.target.value
        })
    };

    handlePassword(e) {
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    };

    async handleSubmit(e) {
        e.preventDefault();
        const newInfo = this.state;
        console.log("this is the form data:", newInfo);

        const url = `http://localhost:9000/users/delete`;

        await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        });

        this.setState({
            email: '',
            password: ''
        });
    }

    render() {
        return (
            <div>
                <Button variant="outlined" color="primary" onClick={ this.handleClickOpen }>
                    Delete User
                </Button>
                <Dialog open={ this.state.open } onClose={ this.handleClose } aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Delete User</DialogTitle>
                    <DialogContent>
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            margin="dense"
                            fullWidth
                            placeholder="Satoshi@Nakamoto.com"
                            onChange={ this.handleEmail }
                            value={ this.state.email }
                            required
                        />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            margin="dense"
                            fullWidth
                            placeholder="Bitcoin"
                            onChange={ this.handlePassword }
                            value={ this.state.password }
                            required
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={ this.handleSubmit } color="primary">
                            Delete User
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default DeleteUserModal;