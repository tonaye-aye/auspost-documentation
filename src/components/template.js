import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

// material
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Button,
  Typography
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CodeIcon from '@material-ui/icons/Code'

// syntax highlighting
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialLight } from 'react-syntax-highlighter/dist/esm/styles/prism'

function Template({ data }) {
  const clipboard = data.html
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setClicked(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [clicked])

  return (
    <Box mt={5} p={2}>
      <Box mb={5} mt={5}>
        <Typography variant="h3" gutterBottom>
          {data.heading}
        </Typography>
        <Typography variant="h5" gutterBottom>
          {data.tag}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {data.instructions}
        </Typography>
      </Box>
      <Box mb={3}>
        {data.preview && (
          <Accordion defaultExpanded={true}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Preview</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div
                style={{ maxWidth: '580px' }}
                dangerouslySetInnerHTML={{ __html: data.html }}
              ></div>
            </AccordionDetails>
          </Accordion>
        )}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Code</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <SyntaxHighlighter
              wrapLongLines
              showLineNumbers
              className="code-formatting"
              language="html"
              style={materialLight}
            >
              {data.html}
            </SyntaxHighlighter>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Box display="flex" alignItems="center">
        <CopyToClipboard text={clipboard} onCopy={() => setClicked(true)}>
          <Button variant="contained" color="primary" endIcon={<CodeIcon />}>
            Copy code
          </Button>
        </CopyToClipboard>
        {clicked && (
          <Box pl={2}>
            <Typography variant="caption">Copied to clipboard!</Typography>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default Template
