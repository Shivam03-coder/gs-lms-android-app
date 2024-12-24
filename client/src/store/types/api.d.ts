export interface UserSignUpInfo {
  name: string;
  emailAddress: string;
  password: string;
}

export interface ApiRes {
  code: number;
  message: string;
}

export interface UserSignupResData extends ApiRes {
  data: {
    name: string;
    emailAddress: string;
    id: string;
  };
}

export type EmailVerifyInfo = { otp: string; email: string };

export interface UserCredentials {
  emailAddress: string;
  password: string;
}

export interface LoginResponse extends ApiRes {
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface UserInfo extends ApiRes {
  data: {
    id: string;
    role: string;
    emailAddress: string;
    name: string;
  };
}
