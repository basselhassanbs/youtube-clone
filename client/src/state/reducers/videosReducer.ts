import { VideoInfo } from '../../shared/interfaces';
import { ActionType } from '../action-types';
import { Action } from '../actions/videos';

interface VideosState {
  data: VideoInfo[];
  allVideos: VideoInfo[];
  recommandations: VideoInfo[];
  loading: boolean;
  error: string | null;
}

const initialState: VideosState = {
  data: [],
  allVideos: [],
  recommandations: [],
  loading: false,
  error: null,
};

const reducer = (state: VideosState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_VIDEOS:
      return {
        ...state,
        data: [],
        loading: true,
        error: null,
      };
    case ActionType.FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case ActionType.FETCH_VIDEOS_ERROR:
      return {
        ...state,
        data: [],
        loading: false,
        error: action.payload,
      };
    case ActionType.FETCH_ALL_VIDEOS:
      return {
        ...state,
        allVideos: action.payload,
      };
    case ActionType.LIKE_VIDEO:
      return {
        ...state,
        allVideos: [
          ...state.allVideos.filter(
            (video) => video._id !== action.payload._id
          ),
          action.payload,
        ],
      };
    case ActionType.CREATE_VIDEO:
      return {
        ...state,
        allVideos: [...state.allVideos, action.payload],
      };
    case ActionType.FETCH_RECOMMENDATIONS:
      return {
        ...state,
        recommandations: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
