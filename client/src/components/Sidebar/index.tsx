import Logo from '../../assets/img/logo.png';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useClasses } from './styles';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Button from '../Button';
interface SidebarProps {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ darkMode, setDarkMode }: SidebarProps) => {
  const classes = useClasses();
  const navigate = useNavigate();
  const { authenticated } = useTypedSelector((state) => state.auth);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.logo} onClick={() => navigate('/')}>
          <img src={Logo} height='25px' alt='Logo' />
          BaselTube
        </div>
        <div className={classes.item} onClick={() => navigate('/')}>
          <HomeIcon />
          Home
        </div>
        <div className={classes.item} onClick={() => navigate('/trends')}>
          <ExploreOutlinedIcon />
          Explore
        </div>
        <div
          className={classes.item}
          onClick={() => navigate('/subscriptions')}
        >
          <SubscriptionsOutlinedIcon />
          Subscriptions
        </div>
        <hr className={classes.hr} />
        <div className={classes.item}>
          <VideoLibraryOutlinedIcon />
          Library
        </div>
        <div className={classes.item}>
          <HistoryIcon />
          History
        </div>
        <hr className={classes.hr} />
        {!authenticated && (
          <>
            <div className={classes.like}>
              Sign in to like videos, comment, and subscribe.
              <Button style={{ marginTop: '10px' }} />
            </div>
            <hr className={classes.hr} />
          </>
        )}
        <h2 className={classes.h2}>BEST OF BASELTUBE</h2>
        <div className={classes.item}>
          <LibraryMusicOutlinedIcon />
          Music
        </div>
        <div className={classes.item}>
          <SportsBasketballOutlinedIcon />
          Sports
        </div>
        <div className={classes.item}>
          <SportsEsportsOutlinedIcon />
          Gaming
        </div>
        <div className={classes.item}>
          <MovieCreationOutlinedIcon />
          Movies
        </div>
        <div className={classes.item}>
          <ArticleOutlinedIcon />
          News
        </div>
        <div className={classes.item}>
          <LiveTvIcon />
          Live
        </div>
        <hr className={classes.hr} />
        <div className={classes.item}>
          <SettingsOutlinedIcon />
          Settings
        </div>
        <div className={classes.item}>
          <FlagOutlinedIcon />
          Report
        </div>
        <div className={classes.item}>
          <HelpOutlineIcon />
          Help
        </div>
        <div className={classes.item} onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessIcon />
          {darkMode ? 'Light' : 'Dark'} Mode
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
