import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Router from 'next/router'
import NProgress from "nprogress"
import "nprogress/nprogress.css";


//Material-Ui
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';





Router.events.on("routeChangeStart" ,()=>{
  console.log("On Start")
  NProgress.start()
})

Router.events.on("routeChangeComplete" ,()=>{
  console.log("On Start Complete")
  NProgress.done()
})
Router.events.on("routeChangeError" ,()=>{
  console.log("On Error")
  NProgress.done()
})


export default function MyApp({ Component, pageProps }) {
 
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

    
      <AppBar style={{ marginTop: 10 }}  position="fixed">
        <Toolbar variant="dense">
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Microphone Shop
          </Typography>
          
        </Toolbar>
      </AppBar>
     

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Box marginTop={8}>

        <Component {...pageProps} />
        </Box>  
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};