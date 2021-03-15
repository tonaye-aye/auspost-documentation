import { Box, Typography } from '@material-ui/core'

const Home = () => {
  return (
    <Box mt={10} p={2}>
      <Typography variant="h3" gutterBottom>
        Get Started
      </Typography>
      <Typography variant="h5" gutterBottom>
        Auspost template builder
      </Typography>
      <Box mt={2} mb={2}>
        <Typography variant="subtitle1" gutterBottom>
          Use this guide to build an HTML template that can be used in Acoustic,
          Adobe, Yesmail or any other Email Service Provider (ESP).
        </Typography>
        <Typography variant="h6" gutterBottom>
          Ready to get started? Begin with the Base, use the left navigation to
          find the first steps.
        </Typography>
      </Box>
    </Box>
  )
}

export default Home
