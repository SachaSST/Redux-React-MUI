import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';
import { TextField, Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '../makeStyles';

const useStyles = makeStyles()({
    form: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textField: {
        marginRight: '10px'
    }
});

const AddTodo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const { classes } = useStyles();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText('');
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} className={classes.form}>
            <TextField 
                fullWidth
                value={text}
                onChange={(e) => setText(e.target.value)}
                label="New Todo"
                variant="outlined"
                className={classes.textField}
            />
            <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Add
            </Button>
        </Box>
    );
};

export default AddTodo;
