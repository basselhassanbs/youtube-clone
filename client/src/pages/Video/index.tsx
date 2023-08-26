import { useState, useEffect } from 'react';
import { useClasses } from './styles';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import { channel } from 'diagnostics_channel';
import Comments from '../../components/Comments';
import Card from '../../components/Card';
import { useLocation } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { VideoInfo } from '../../shared/interfaces';
import moment from 'moment';
import { useActions } from '../../hooks/useActions';
import Avatar from '../../components/Avatar';
import Recommendations from '../../components/Recommentations';

const Video = () => {
  const classes = useClasses();
  const location = useLocation();
  const VideoId = location.pathname.split('/')[2];

  const { likeVideo, dislikeVideo, subscribe, unsubscribe } = useActions();

  const {
    videos: { allVideos },
    users: { currentUser, users },
  } = useTypedSelector((state) => state);

  const video = allVideos.find((video) => video._id == VideoId);
  const channel = users.find((user) => user._id == video?.user._id);
  const subscribed =
    video && currentUser.subscribedUsers.includes(video.user._id);

  const handleLike = () => {
    if (video) likeVideo(video._id);
  };

  const handleDislike = () => {
    if (video) dislikeVideo(video._id);
  };

  const handleSubscribe = () => {
    if (channel && !subscribed) {
      subscribe(channel._id);
    } else if (channel && subscribed) {
      unsubscribe(channel._id);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <video width='100%' height='500px' src={video?.videoUrl} controls />
        <h1 className={classes.title}>{video?.title}</h1>
        <div className={classes.details}>
          <div className={classes.info}>
            {video?.views} views .{' '}
            {moment(video?.createdAt).format('MMM DD, YYYY')}
          </div>
          <div className={classes.buttons}>
            <div className={classes.button} onClick={handleLike}>
              {video?.likes
                ?.map((like) => like._id)
                .includes(currentUser._id) ? (
                <ThumbUpIcon />
              ) : (
                <ThumbUpOutlinedIcon />
              )}

              {video?.likes?.length}
            </div>
            <div className={classes.button} onClick={handleDislike}>
              {video?.dislikes
                ?.map((like) => like._id)
                .includes(currentUser._id) ? (
                <ThumbDownIcon />
              ) : (
                <ThumbDownOutlinedIcon />
              )}

              {video?.dislikes?.length}
            </div>
            <div className={classes.button}>
              <ReplyOutlinedIcon />
              Share
            </div>
            <div className={classes.button}>
              <AddTaskOutlinedIcon />
              Save
            </div>
          </div>
        </div>
        <hr className={classes.hr} />
        <div className={classes.channel}>
          <div className={classes.channelInfo}>
            <div>
              <Avatar imgUrl={channel?.img || ''} name={channel?.name || ''} />
            </div>
            <div className={classes.channelDetails}>
              <div className={classes.channelName}>{channel?.name}</div>
              <div className={classes.channelCounter}>
                {channel?.subscribers || 0} subscriber
              </div>
              <p className={classes.description}>{video?.description}</p>
            </div>
          </div>
          <button className={classes.subscribe} onClick={handleSubscribe}>
            {subscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}
          </button>
        </div>
        <hr className={classes.hr} />
        <Comments data={video?.comments || null} />
      </div>
      <Recommendations tags={video?.tags} />
    </div>
  );
};

export default Video;
