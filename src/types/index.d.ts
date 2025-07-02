/**
 * Represents the user object structure.
 */
export interface User {
  _id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface ApiResponse {
  data: string | boolean | object | null;
  status: boolean;
  message: string;
}

/**
 * State interface for the user store.
 */
export interface UserState {
  user: User | null;
  token: string;
  userSearchResult: User;
}

export interface Notification {
  _id: number;
  type: string;
  title: string;
  description: string;
  createdAt: string;
  isRead: boolean;
}
