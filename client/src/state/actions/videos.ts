import { UserInfo, VideoInfo } from '../../shared/interfaces';
import { ActionType } from '../action-types';

interface FetchVideosAction {
  type: ActionType.FETCH_VIDEOS;
}

interface FetchVideosSuccessAction {
  type: ActionType.FETCH_VIDEOS_SUCCESS;
  payload: VideoInfo[];
}

interface FetchVideosErrorAction {
  type: ActionType.FETCH_VIDEOS_ERROR;
  payload: string;
}

interface FetchAllVideosAction {
  type: ActionType.FETCH_ALL_VIDEOS;
  payload: VideoInfo[];
}

interface LikeVideoAction {
  type: ActionType.LIKE_VIDEO;
  payload: VideoInfo;
}

interface CreateVideoAction {
  type: ActionType.CREATE_VIDEO;
  payload: VideoInfo;
}

interface FetchRecommendationsAction {
  type: ActionType.FETCH_RECOMMENDATIONS;
  payload: VideoInfo[];
}

export type Action =
  | FetchVideosAction
  | FetchVideosSuccessAction
  | FetchVideosErrorAction
  | FetchAllVideosAction
  | LikeVideoAction
  | CreateVideoAction
  | FetchRecommendationsAction;
