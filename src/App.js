import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './utils/Theme';
import { MainBody, Container } from './styles/Global.styled';


//import components
import Showcase from './components/Showcase';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainBody>
        <Navbar/>
        <Container>
          <Showcase/>
          <MySkills/>
          <MyProjects/>
        </Container>
        <Footer/>
      </MainBody>
    </ThemeProvider>
  );
}

export default App;
