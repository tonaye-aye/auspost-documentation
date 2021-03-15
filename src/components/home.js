import { Link } from 'react-router-dom'

import { Box, Button, Typography } from '@material-ui/core'

const Home = () => {
  return (
    <Box mt={10} p={2}>
      <Typography variant="h3">Get Started</Typography>
      <Typography variant="h5" gutterBottom>
        Auspost template builder
      </Typography>
      <Box mt={2} mb={2}>
        <Typography variant="subtitle1" gutterBottom>
          Use this guide to build an HTML template that can be used in Acoustic,
          Adobe, Yesmail or any other Email Service Provider (ESP).
        </Typography>
        <Typography variant="h6" gutterBottom>
          Ready to get started? Begin with the Base and follow along:
        </Typography>
      </Box>
      <Button component={Link} to={'/base'} variant="contained" color="primary">
        Base Template
      </Button>
    </Box>
  )
}

export default Home
