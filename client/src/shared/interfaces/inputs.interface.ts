export interface SignupInput {
  name: string;
  email: string;
  password: string;
}

export interface SigninInput {
  email: string;
  password: string;
}

export interface VideoInput {
  title: string;
  description: string;
  tags: string[];
  imgUrl: string;
  videoUrl: string;
}
