import { Track } from './track';

export class Playlist {
  collaborative: boolean;
  external_urls: any;
  href: string;
  id: string;
  images: any[];
  name: string;
  owner: any;
  public: boolean;
  snapshot_id: string;
  tracks: Track[];
  type: string;
  uri: string;
}
