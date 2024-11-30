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
    images: Image[]
    name: string
    owner: Owner
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
  
  export interface Image {
    url: string
    height: any
    width: any
  }
  
  export interface Owner {
    display_name: string
    external_urls: ExternalUrls2
    href: string
    id: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls2 {
    spotify: string
  }
  
  export interface Tracks {
    href: string
    total: number
  }
  