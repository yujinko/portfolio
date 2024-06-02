import React, {useState} from 'react';
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
import Page from './Routes/Page';
import Login from './Routes/Login';

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
              <Route path="/pages/:id" element={<Page/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>
          </Container>
          <Footer />
        </MainBody>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
