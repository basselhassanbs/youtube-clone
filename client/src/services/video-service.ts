import { AxiosResponse } from 'axios';
import { VideoInfo, VideoInput } from '../shared/interfaces';
import apiClient from './api-client';

class VideoService {
  getAll(): Promise<AxiosResponse<VideoInfo[]>> {
    return apiClient.get('videos');
  }

  getVideos(type: string) {
    return apiClient.get(`videos/${type}`, {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    });
  }

  getVideosByTags(tags: string[]) {
    return apiClient.get(`videos/tags?tags=${tags}`);
  }

  like(videoId: string) {
    return apiClient.put(
      `videos/${videoId}/like`,
      {},
      {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      }
    );
  }

  dislike(videoId: string) {
    return apiClient.put(
      `videos/${videoId}/dislike`,
      {},
      {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      }
    );
  }

  create(data: VideoInput) {
    return apiClient.post('videos', data, {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    });
  }

  search(query: string) {
    return apiClient.get(`videos/search${query}`);
  }
}

export default new VideoService();
