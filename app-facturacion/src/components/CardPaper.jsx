// CardPaper.jsx
import { Paper } from '@mui/material';

const CardPaper = ({ children }) => {
  return (
    <Paper elevation={4} style={{ padding: 16 }}>
      {children}
    </Paper>
  );
};

export default CardPaper;
