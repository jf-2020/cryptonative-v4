import React, { Component } from 'react';
import fetch from 'node-fetch';
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
            open: false,
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleFirstName = this.handleFirstName.bind(this);
        this.handleLastName = this.handleLastName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleOpen() {
        // e.preventDefault();
        this.setState({
            open: true
        });
    }

    handleClose() {
        // e.preventDefault();
        this.setState({
            open: false
        });
    }

    handleFirstName(e) {
        e.preventDefault();
        this.setState({
            firstName: e.target.value
        })
    };

    handleLastName(e) {
        e.preventDefault();
        this.setState({
            lastName: e.target.value
        })
    };

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

        const url = `http://localhost:9000/users/signup`;

        await fetch(url, {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            })
        });

        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        });

        // console.log('user signup resonse:', response);
        // return response;
    }

    render() {
        return (

            <div>
                <Button variant="outlined" color="primary" onClick={ this.handleOpen }>
                    Add User
                    </Button>
                <Dialog open={ this.state.open } onClose={ this.handleClose } aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Add User</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            id="firstName"
                            label="First Name"
                            type="text"
                            margin="dense"
                            fullWidth
                            placeholder="Satoshi"
                            onChange={ this.handleFirstName }
                            value={ this.state.firstName }
                            required
                        />
                        <TextField
                            id="lastName"
                            label="Last Name"
                            type="text"
                            margin="dense"
                            fullWidth
                            placeholder="Nakamoto"
                            onChange={ this.handleLastName }
                            value={ this.state.lastName }
                            required
                        />
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
                            Add User
                            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default AddUserModal;