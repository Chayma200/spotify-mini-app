import { createStore, withProps } from '@ngneat/elf';
import { UserModel } from './models/userModel';

export const authStore = createStore(
  { name: 'auth' },
  withProps<UserModel>(new UserModel())
);
