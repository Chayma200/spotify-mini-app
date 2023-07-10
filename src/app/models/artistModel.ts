export class ArtistModel {
  external_urls?: {
    spotify?: string;
  };
  followers?: {
    total?: number;
  };
  genres?: Array<string>;
  href?: string;
  id?: string;
  images?: Array<any>;
  name?: string;
  popularity?: number;
  type?: string;
  uri?: string;

  constructor(props?: ArtistModel) {
    return {
      external_urls: {
        spotify: props?.external_urls?.spotify || '',
      },
      followers: {
        total: props?.followers?.total || 0,
      },
      genres: props?.genres || [],
      href: props?.href || '',
      id: props?.id || '',
      images: props?.images || [],
      name: props?.name || '',
      popularity: props?.popularity || 0,
      type: props?.type || '',
      uri: props?.uri || '',
    };
  }
}
