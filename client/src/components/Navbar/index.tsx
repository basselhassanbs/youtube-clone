import { useEffect, useState } from 'react';
import { useClasses } from './styles';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import Upload from '../Upload';
import Avatar from '../Avatar';
import Button from '../Button';

const Navbar = () => {
  const navigate = useNavigate();
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { fetchCurrentUser, signout, setShowPopup } = useActions();
  const {
    auth: { authenticated, showPopup },
    users: { currentUser: user },
  } = useTypedSelector((state) => state);
  const classes = useClasses({ showPopup });

  useEffect(() => {
    if (authenticated) fetchCurrentUser();
  }, [authenticated]);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <div className={classes.search}>
            <input
              placeholder='Search'
              className={classes.input}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div
              onClick={() =>
                query.trim() !== '' && navigate(`/search?q=${query}`)
              }
            >
              <SearchIcon />
            </div>
          </div>
          {authenticated ? (
            <div className={classes.userContainer}>
              <div onClick={() => setIsUploadOpen(true)}>
                <VideoCallOutlinedIcon />
              </div>
              <div
                className={classes.user}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPopup(true);
                }}
              >
                <Avatar
                  imgUrl={user.img}
                  name={user.name}
                  width={34}
                  height={34}
                />
                {user.name}
              </div>
              {showPopup && (
                <div className={classes.popup}>
                  <div
                    className={classes.logout}
                    onClick={() => {
                      signout();
                      setShowPopup(false);
                    }}
                  >
                    Logout
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Button />
          )}
        </div>
      </div>

      {isUploadOpen && <Upload setIsOpen={setIsUploadOpen} />}
    </>
  );
};

export default Navbar;
