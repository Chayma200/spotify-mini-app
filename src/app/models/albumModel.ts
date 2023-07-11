export class AlbumModel {
  'album_type'?: string;
  'artists'?: Array<any>;
  'available_markets'?: Array<string>;
  'external_urls'?: any;
  'href'?: string;
  'id'?: string;
  'images'?: Array<any>;
  'name'?: string;
  'release_date'?: string;
  'release_date_precision'?: string;
  'total_tracks'?: number;
  'type'?: string;
  'uri'?: string;
  constructor(props?: AlbumModel) {
    return {
      album_type: props?.album_type || '',
      artists: props?.artists || [],
      available_markets: props?.available_markets || [],
      external_urls: props?.external_urls || {},
      href: props?.href || '',
      id: props?.id || '',
      images: props?.images || [],
      name: props?.name || '',
      release_date: props?.release_date || '',
      release_date_precision: props?.release_date_precision || '',
      total_tracks: props?.total_tracks || 0,
      type: props?.type || '',
      uri: props?.uri || '',
    };
  }
}
