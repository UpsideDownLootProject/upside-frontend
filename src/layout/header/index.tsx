import Link from "next/link"
import { AppBar, Toolbar, Grid } from "@mui/material";

const Header = () => {
    return (
        <AppBar position="relative" className="header">
            <Toolbar>
                <Grid container spacing={6} justifyContent="center">
                    <Grid item xs={8} sm={8} md={10}>
                        <h2>
                            <Link color="inherit" href="/">
                                Upside Down
                            </Link>{' '}
                        </h2>
                    </Grid>
                    <Grid item xs={2} sm={2} md={1}>
                        <h4>
                            <Link color="inherit" href="/faq">
                                FAQ
                            </Link>{' '}
                        </h4>
                    </Grid>
                    <Grid item xs={2} sm={2} md={1}>
                        <h4>
                            <Link color="inherit" href="/mint">
                                Mint
                            </Link>{' '}
                        </h4>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
