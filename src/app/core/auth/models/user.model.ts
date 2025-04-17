export interface User {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'admin' | 'manager';
  createdAt: Date;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}
