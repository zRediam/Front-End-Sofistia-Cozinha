import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Pedidos from './paginas/Pedidos';
import HistoricoPedidos from './paginas/HistoricoPedidos';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/pedidos" replace />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/historico" element={<HistoricoPedidos />} />
      </Routes>
    </Router>
  );
}

export default App;
