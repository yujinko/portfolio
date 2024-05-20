import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/Theme';
import { MainBody, Container } from './styles/Global.styled';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//import components
import MainPage from './components/main';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Write from './Routes/Write';
import List from './Routes/List';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainBody>
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/write" element={<Write />} />
              <Route path="/list" element={<List />} />
            </Routes>
          </Container>
          <Footer />
        </MainBody>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
