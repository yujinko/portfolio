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
import SignUp from './Routes/SignUp';
import PostDetail from './Routes/PostDetail';
import PostEdit from './Routes/PostEdit';
import PostDelete from './Routes/PostDelete';

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
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/post/:postid" element={<PostDetail/>}/>
              <Route path="/edit/:postid" element={<PostEdit/>}/>
              <Route path="/delete/:postid" element={<PostDelete/>}/>
            </Routes>
          </Container>
          <Footer />
        </MainBody>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
