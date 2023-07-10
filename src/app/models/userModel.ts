export class UserModel {
  user?: {
    userToken?: string;
  };
  constructor(props?: UserModel) {
    return {
      user: {
        userToken: props?.user?.userToken || '',
      },
    };
  }
}
