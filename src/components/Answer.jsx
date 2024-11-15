import React from 'react';
// import Button from '@mui/material/Button';
// import Stack from '@mui/material/Stack';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Button } from '@mui/material';

const useStyles = makeStyles(() => (
    createStyles({
        "button": {
            borderColor: "#963F75",
            color: "#963F75",
            fontWeight: 600, 
            marginBottom: "8px",
            "&:hover": {
                backgroundColor: "#963F75",
                color: "#fff"
            }
        

        }
    })
 
));


const Answer = (props) => {
    const classes = useStyles();

    return(
        <Button 
            className = {classes.button}
            variant ="outlined"  onClick={() => props.select(props.content, props.nextId)}>
                {props.content}
        </Button>

    )

}

export default Answer;