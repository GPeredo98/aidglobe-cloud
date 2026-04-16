import { api } from './api-client';

interface Token {
  token: string;
}

export const authService = {
  login: (credentials: { email: string, password: string }) => 
    api.post<Token>('/auth/login', credentials),

  register: (data: { email: string, password: string, name: string }) => 
    api.post('/auth/register', data),
    
  forgotPassword: (email: string) => 
    api.post('/auth/forgot-password', { email }),
};