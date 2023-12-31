import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { blueGrey } from '@mui/material/colors';

export const Form = () => {
  return (
    <div className="mx-10">
      <Box
        sx={{
          display: 'flex flex-column',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
        }}
      >
        <h1 className="text-4xl text-center p-8">Message Us</h1>
        <div className="flex  space-x-4">
          <TextField
            fullWidth
            id="demo-helper-text-misaligned"
            label="Firstname"
          />
          <TextField
            fullWidth
            id="demo-helper-text-misaligned"
            label="Lastame"
          />
        </div>
        <TextField fullWidth label="E-mail" id="fullWidth" />
        <TextField fullWidth label="Contact Number" id="fullWidth" />
        <TextField
          fullWidth
          id="standard-multiline-static"
          label="Message"
          multiline
          rows={4}
          variant="standard"
        />
      </Box>
      <div className=" text-right mt-8 ">
        <Button
          style={{
            color: 'black',
            borderColor: 'black',
          }}
          variant="outlined"
          size="medium"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </div>
    </div>
  );
};
