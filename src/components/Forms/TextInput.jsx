import * as React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = (props) => {
    return(
        <TextField 
            fullWidth= {true}
            label={props.label}
            margin={"dense"}
            multiline={props.multiline}
            value={props.value}
            rows={props.rows}
            type={props.type}
            onChange={props.onChange}
             />
    )
}

export default TextInput;