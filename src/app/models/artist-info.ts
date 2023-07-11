export class ArtistInfoModel {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: any;
  email?: string;
  phoneNumber?: string;
  profilePicture?: string;
  stageName?: string;
  artistBackstory?: string;
  startingDate?: any;
  albums?: Array<{
    picture: String;
    date: any;
    songs: Array<{ name: string; duration: string }>;
  }>;

  constructor(props?: ArtistInfoModel) {
    return {
      firstName: props?.firstName || '',
      lastName: props?.lastName || '',
      dateOfBirth: props?.dateOfBirth || '',
      email: props?.email || '',
      phoneNumber: props?.phoneNumber || '',
      profilePicture: props?.profilePicture || '',
      stageName: props?.stageName || '',
      artistBackstory: props?.artistBackstory || '',
      startingDate: props?.startingDate || '',
      albums: props?.albums || [],
    };
  }
}
