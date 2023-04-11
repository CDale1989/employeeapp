import './index.css'
import Header from './components/Header';
import Employees from './pages/Employees';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Customers from './pages/Customers';
import HomePage from './pages/HomePage'
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import NotFound from './components/NotFound';
import Customer from './pages/Customer';




function App() {
  return (
    <Header>
      <BrowserRouter>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path="/homePage" element={<HomePage />} />
          <Route path="/dictionary" element={<Dictionary />} />
          <Route path="/dictionary/:search" element={<Definition />} />
          <Route path="/customers/" element={<Customers />} />
          <Route path="/customers/:id" element={<Customer />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Header>
  );
}

export default App;
