import { SigninInput, SignupInput } from '../shared/interfaces';
import apiClient from './api-client';

class AuthService {
  signup(data: SignupInput) {
    return apiClient.post('auth/signup', data);
  }

  signin(data: SigninInput) {
    return apiClient.post('auth/signin', data);
  }
}

export default new AuthService();
