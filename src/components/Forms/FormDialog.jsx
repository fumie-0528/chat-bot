import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextInput from './TextInput';
import { ThirtyFpsSelect } from '@mui/icons-material';

export default class FormDialog extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            description: ""
        }
        this.inputName = this.inputName.bind(this)
        this.inputEmail = this.inputEmail.bind(this)
        this.inputDescription = this.inputDescription.bind(this)


    }

    inputName = (event) => {
        this.setState({name: event.target.value})
    }
    inputEmail = (event) => {
        this.setState({email: event.target.value})
    }
    inputDescription = (event) => {
        this.setState({description: event.target.value})
    }
  
    submitForm = () => {
        const name = this.state.name
        const email = this.state.email
        const description = this.state.description

        const payload = {
            text: 'you have an inquiry\n' + 
                  'Name: '+ name + '\n' +
                  'Email: '+ email + '\n' +
                  'Comment:\n' + description 
        }
        const url ='https://hooks.slack.com/services/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';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload)
        }).then(() => {
            alert('Your inquiry is sent. We will response you within 2 business days')
            this.setState({
                name: "",
                email: "",
                description: ""
            })
            return this.props.handleClose()
        })
    }


    render(){
        return(
            <Dialog
                open={this.props.open}
                onClose={this.props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    Inquiry
                </DialogTitle>
                <DialogContent>
                    <TextInput
                        label={"Name"} multivalue={false} rows={1}
                        value={this.state.name} type={'text'} onChange={this.inputName}  
                    />
                    <TextInput
                        label={"Email Address"} multivalue={false} rows={1}
                        value={this.state.email} type={'email'} onChange={this.inputEmail}  
                    />
                    <TextInput
                        label={"Inquiry"} multivalue={true} rows={5}
                        value={this.state.description} type={'text'} onChange={this.inputDescription}  
                    />
                        
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleClose} color="primary">Cancel</Button>
                    <Button onClick={this.submitForm} color="primary" autoFocus>Send</Button>
                </DialogActions>
            </Dialog>
        )
    }
}