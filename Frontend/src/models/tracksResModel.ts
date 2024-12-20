export interface TracksResModel {
    playlists: Playlists
  }
  
  export interface Playlists {
    href: string
    items: Item[]
    limit: number
    next: string
    offset: number
    previous: any
    total: number
  }
  
  export interface Item {
    collaborative: boolean
    description: string
    external_urls: ExternalUrls
    href: string
    id: string
    name: string
    primary_color: any
    public: boolean
    snapshot_id: string
    tracks: Tracks
    type: string
    uri: string
  }
  
  export interface ExternalUrls {
    spotify: string
  }

  
  export interface Tracks {
    href: string
    total: number
  }
  