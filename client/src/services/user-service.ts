import apiClient from './api-client';

class UserService {
  getAll() {
    return apiClient.get('users');
  }

  getCurrentUser() {
    return apiClient.get('users/me', {
      headers: {
        'x-auth-token': localStorage.getItem('token'),
      },
    });
  }

  subscribe(userId: string) {
    return apiClient.put(
      `users/${userId}/subscribe`,
      {},
      {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      }
    );
  }

  unsubscribe(userId: string) {
    return apiClient.put(
      `users/${userId}/unsubscribe`,
      {},
      {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      }
    );
  }
}

export default new UserService();
