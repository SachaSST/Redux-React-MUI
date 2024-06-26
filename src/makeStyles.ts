import { createMakeAndWithStyles } from "tss-react";
import { useTheme as useMuiTheme, Theme } from '@mui/material/styles';

function useTheme(): Theme {
    const theme = useMuiTheme();
    return theme;
}

export const {
    makeStyles,
    useStyles
} = createMakeAndWithStyles({ useTheme });
