import { Dispatch } from 'react';
import { Action } from '../actions/videos';
import { ActionType } from '../action-types';
import videoService from '../../services/video-service';
import { VideoInfo, VideoInput } from '../../shared/interfaces';
import { NavigateFunction } from 'react-router-dom';

export const fetchVideos = (type: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FETCH_VIDEOS,
    });
    try {
      const res = await videoService.getVideos(type);
      dispatch({
        type: ActionType.FETCH_VIDEOS_SUCCESS,
        payload: res.data,
      });
    } catch (error: any) {
      dispatch({
        type: ActionType.FETCH_VIDEOS_ERROR,
        payload: '',
      });
    }
  };
};

export const fetchAllVideos = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data }: { data: VideoInfo[] } = await videoService.getAll();
      dispatch({
        type: ActionType.FETCH_ALL_VIDEOS,
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const likeVideo = (videoId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data }: { data: VideoInfo } = await videoService.like(videoId);
      dispatch({
        type: ActionType.LIKE_VIDEO,
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const dislikeVideo = (videoId: string) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const { data }: { data: VideoInfo } = await videoService.dislike(videoId);
      dispatch({
        type: ActionType.LIKE_VIDEO,
        payload: data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const createVideo = (
  data: VideoInput,
  navigate: NavigateFunction,
  callback: () => void
) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const res = await videoService.create(data);
      dispatch({
        type: ActionType.CREATE_VIDEO,
        payload: res.data,
      });
      callback();
      navigate(`video/${res.data._id}`);
    } catch (error: any) {
      console.log(error);
    }
  };
};

export const fetchRecommendations = (tags: string[]) => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const res = await videoService.getVideosByTags(tags);
      dispatch({
        type: ActionType.FETCH_RECOMMENDATIONS,
        payload: res.data,
      });
    } catch (error: any) {
      console.log(error);
    }
  };
};
