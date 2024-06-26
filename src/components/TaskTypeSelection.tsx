import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, ListItemIcon, Dialog, DialogTitle, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';
import HomeIcon from '@mui/icons-material/Home';
import MasksIcon from '@mui/icons-material/Masks';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

const taskTypes = [
  { icon: <LocalDrinkIcon />, label: 'Boire de l\'eau' },
  { icon: <HomeIcon />, label: 'Rester à la maison' },
  { icon: <MasksIcon />, label: 'Les bons gestes, c\'est important' },
  { icon: <FitnessCenterIcon />, label: 'Aller à la salle de sport' },
  { icon: <SelfImprovementIcon />, label: 'Méditer' },
];

interface TaskTypeSelectionProps {
  open: boolean;
  onClose: () => void;
  onSelect: (type: string) => void;
}

const TaskTypeSelection: React.FC<TaskTypeSelectionProps> = ({ open, onClose, onSelect }) => {
  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>
        Choisis une nouvelle tâche
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <Box sx={{ px: 2 }}>
        <List>
          {taskTypes.map((task, index) => (
            <ListItem button key={index} onClick={() => onSelect(task.label)}>
              <ListItemIcon>{task.icon}</ListItemIcon>
              <ListItemText primary={task.label} />
            </ListItem>
          ))}
        </List>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => onSelect('Créer la tienne')}
        >
          Créer la tienne
        </Button>
      </Box>
    </Dialog>
  );
};

export default TaskTypeSelection;
