import React from 'react'
import { Paper } from '@mui/material';
import{ CssBaseline } from '@mui/material';

import Image from '../../images/Hero-Banner.png';


const styles = {
    BGContainer: {
        minHeight: '80vh',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    }
};
const heroSection= () => {
  return (
    <div>
        <Paper style={styles.BGContainer}>
          sGNsjgnn
          <CssBaseline />
        </Paper>
    </div>

  )
}

export default heroSection;


