import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import noProfile from '../assets/img/noProfile.png';
import fumie from '../assets/img/fumie.png';

const Chat = (props) => {
    const isQuestion = (props.type === 'question');
    const classes = isQuestion ? 'p-chat__row' : 'p-chat__reverse';
    return (
        <ListItem className={classes}>
            <ListItemAvatar >
                {isQuestion ? (
                    <Avatar alt="icon" src={fumie} />
                ) : (
                    <Avatar alt="icon" src={noProfile}/>
                )}
            </ListItemAvatar>
            <div className='p-chat__bubble'>{props.text}</div> 
                
        </ListItem>
    )
    
    
    }
    
    export default Chat;


