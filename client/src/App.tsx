import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import dark from './theme/dark';
import light from './theme/light';
import { ThemeProvider, makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import Video from './pages/Video';
import SignIn from './pages/SignIn';
import { useActions } from './hooks/useActions';
import Search from './pages/Search';

const useClasses = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
  },
  main: {
    flex: 6,
    backgroundColor: theme.bg,
  },
  wrapper: {
    padding: '22px 26px',
  },
}));

interface Props {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const App = ({ darkMode, setDarkMode }: Props) => {
  const classes = useClasses();
  const { fetchAllVideos, fetchUsers, setShowPopup } = useActions();
  useEffect(() => {
    fetchAllVideos();
    fetchUsers();
  }, []);
  return (
    <div className={classes.container} onClick={() => setShowPopup(false)}>
      <HashRouter>
        <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className={classes.main}>
          <Navbar />
          <div className={classes.wrapper}>
            <Routes>
              <Route path='/'>
                <Route index element={<Home type='random' />} />
                <Route path='trends' element={<Home type='trend' />} />
                <Route
                  path='subscriptions'
                  element={<Home type='subscriptions' />}
                />
                <Route path='search' element={<Search />} />

                <Route path='video'>
                  <Route path=':id' element={<Video />} />
                </Route>
                <Route path='signin' element={<SignIn />} />
              </Route>
            </Routes>
          </div>
        </div>
      </HashRouter>
    </div>
  );
};
export default function () {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? dark : light}>
      <App darkMode={darkMode} setDarkMode={setDarkMode} />
    </ThemeProvider>
  );
}
