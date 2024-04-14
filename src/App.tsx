import React, {useState} from 'react';
import './App.css';
import {LoginProvider} from "./provider/LoginProvider";
import {MainPage} from "./pages/MainPage";
import {createTheme, CssBaseline, ThemeProvider, useMediaQuery} from "@mui/material";

function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const [darkMode, setDarkMode] = useState<boolean | null>(null)
    const modeToSet = darkMode ?? prefersDarkMode;
    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: modeToSet ? 'dark' : 'light',
                },
            }),
        [modeToSet]
    );
    theme.spacing(16)
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <LoginProvider>
                <MainPage darkMode={darkMode} setDarkMode={setDarkMode}/>
            </LoginProvider>

        </ThemeProvider>
    );
}

export default App;
