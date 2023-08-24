import { Interface } from 'readline';

export interface UserInfo {
  _id: string;
  name: string;
  img: string;
  subscribers: number;
  subscribedUsers: string[];
}

export interface User {
  _id: string;
  name: string;
  img: string;
}

export interface CommentInfo {
  _id: string;
  description: string;
  createdAt: Date;
  user: User;
}

export interface VideoInfo {
  _id: string;
  title: string;
  views: number;
  imgUrl: string;
  videoUrl: string;
  createdAt: Date;
  user: UserInfo;
  description?: string;
  subscribers?: number;
  likes?: User[];
  dislikes?: User[];
  comments?: CommentInfo[];
  tags: string[];
}
