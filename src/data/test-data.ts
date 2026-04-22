export type UserCredentials = {
  username: string;
  password: string;
};

export function credentialsFromEnv(): UserCredentials {
  return {
    username: process.env.APP_USERNAME ?? '',
    password: process.env.APP_PASSWORD ?? '',
  };
}
