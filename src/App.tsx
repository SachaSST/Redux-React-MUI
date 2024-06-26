import React from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ArchivedMenuBar from './components/ArchivedMenuBar';
import Weather from './components/Weather';
import { Container, Typography, Box } from '@mui/material';
import { makeStyles } from './makeStyles';

const useStyles = makeStyles()({
    container: {
        marginTop: '80px',
        minHeight: '100vh'
    },
    header: {
        marginBottom: '20px'
    }
});

const App: React.FC = () => {
    const { classes } = useStyles();

    return (
        <div>
            <ArchivedMenuBar />
            <Container maxWidth="md" className={classes.container}>
                <Box 
                    display="flex" 
                    flexDirection="column" 
                    alignItems="center" 
                    justifyContent="center"
                >
                    <Weather />
                    <Box 
                        width="100%" 
                        display="flex" 
                        flexDirection="column"
                        alignItems="center"
                        className={classes.header}
                    >
                        <Typography variant="h3" gutterBottom>
                            Todo List React/Redux/MUI
                        </Typography>
                        <AddTodo />
                    </Box>
                    <Box width="100%" display="flex" justifyContent="center">
                        <TodoList />
                    </Box>
                </Box>
            </Container>
        </div>
    );
};

export default App;
