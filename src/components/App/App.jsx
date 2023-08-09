import { Route, Routes } from 'react-router-dom';
import { About } from '../../pages/About';
import { Home } from '../../pages/Home';
import { ProductDetails } from '../../pages/ProductDetails';
import { Products } from '../../pages/Products';
import { Container, Header, Logo, Link } from './App.styled';
import Calendar from 'pages/Calendar';
import CalendarFull from 'pages/CalendarFull';
import CalendarBig from 'pages/CalendarBig';
import CalendarWithDnD from 'pages/CalendarWithDnD';

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </Logo>
        <nav>
          {' '}
          <Link to="/" end>
            Home
          </Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/calendar">Calendar</Link>
          <Link to="/calendarNew">CalendarFull</Link>
          <Link to="/calendarBig">CalendarBig</Link>
          <Link to="/calendarDnD">CalendarDnD</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/calendarNew" element={<CalendarFull />} />
        <Route path="/calendarBig" element={<CalendarBig />} />
        <Route path="/calendarDnD" element={<CalendarWithDnD />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Container>
  );
};
