import {AppBar, Toolbar, Typography} from "@mui/material";

function Header() {
    return (
        <>
            <AppBar position="sticky" color="transparent" elevation={0}>
                <Toolbar sx={{ justifyContent: "space-between"}}>
                    <Typography variant="h6" fontWeight="bold">
                        Lya FAQ
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;