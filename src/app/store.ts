import { createStore, withProps } from '@ngneat/elf';
import { UserModel } from './models/userModel';
import { ArtistInfoModel } from './models/artist-info';

export const authStore = createStore(
  { name: 'auth' },
  withProps<UserModel>(new UserModel())
);

export const registerationFormStore = createStore(
  { name: 'registerArtist' },
  withProps<ArtistInfoModel>(new ArtistInfoModel())
);
