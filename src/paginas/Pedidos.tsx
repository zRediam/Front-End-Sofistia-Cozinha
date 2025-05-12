import React from 'react';
import { Box, Typography, Paper, Button, Theme, Table, TableHead, TableRow, TableCell, TableBody, TableContainer } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const StyledPaper = styled(Paper)(({ theme }: { theme: Theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(0),
  backgroundColor: '#fff',
  borderRadius: '18px',
  boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.18)',
  width: '100%',
  minHeight: '400px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  border: 'none',
}));

const Pedidos: React.FC = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.background = '#111827';
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.background = '';
    };
  }, []);

  return (
    <Box sx={{
      minHeight: '100vh',
      height: '100vh',
      backgroundColor: '#111827',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      px: 2,
    }}>
      <Box sx={{ textAlign: 'center', mt: 7 }}>
        <Typography variant="h4" component="h1" sx={{ color: '#F59E0B', fontWeight: 'bold' }}>
          Sofistia
        </Typography>
        <Typography variant="h6" sx={{ color: '#FFFFFF', mt: 0 }}>
          Gastronomia Tecnologia
        </Typography>
      </Box>

      <Box sx={{ width: '100%', maxWidth: '1400px', mt: 4, mb: 0 }}>
        <Typography variant="h6" sx={{ color: '#F59E0B', fontWeight: 'bold', mb: 1, mt: 0, textAlign: 'left', pl: 1 }}>
          Pedidos em andamento
        </Typography>
      </Box>

      <Box sx={{ width: '100%', maxWidth: '1400px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', p: 0, m: 0 }}>
        <StyledPaper>
          <TableContainer sx={{ width: '100%', maxHeight: 350, overflowY: 'auto' }}>
            <Table sx={{ width: '100%', tableLayout: 'fixed' }}>
              <colgroup>
                <col style={{ width: '6%' }} />
                <col style={{ width: '10%' }} />
                <col style={{ width: '64%' }} />
                <col style={{ width: '20%' }} />
              </colgroup>
              <TableHead>
                <TableRow>
                  <TableCell align="left" sx={{ fontWeight: 'bold', color: '#1F2937', fontSize: '1.1rem', pl: 0, borderBottom: '2px solid #E5E7EB' }}>ID</TableCell>
                  <TableCell align="left" sx={{ fontWeight: 'bold', color: '#1F2937', fontSize: '1.1rem', pl: 0, borderBottom: '2px solid #E5E7EB' }}>Mesa</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold', color: '#1F2937', fontSize: '1.1rem', borderBottom: '2px solid #E5E7EB' }}>Pedido</TableCell>
                  <TableCell align="right" sx={{ fontWeight: 'bold', color: '#1F2937', fontSize: '1.1rem', pr: 0, borderBottom: '2px solid #E5E7EB' }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* Linhas de pedidos serão adicionadas aqui futuramente */}
              </TableBody>
            </Table>
          </TableContainer>
        </StyledPaper>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 3 }}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#D97706',
            '&:hover': {
              backgroundColor: '#B45309',
            },
            padding: '12px 24px',
            fontSize: '1.125rem',
          }}
        >
          Atualizar
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#D97706',
            '&:hover': {
              backgroundColor: '#B45309',
            },
            padding: '12px 24px',
            fontSize: '1.125rem',
          }}
          onClick={() => navigate('/historico')}
        >
          Ver Histórico
        </Button>
      </Box>
    </Box>
  );
};

export default Pedidos; 