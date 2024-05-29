export type EventDetails = {
  id?: string;
  version?: number;
  name: string;
  imageUrl: string;
  facebookUrl: string;
  danceTypes: DanceType[];
  eventTypes: EventType[];
  artists: Artist[];
  location?: OsmPlace;
  isOnline?: boolean;
  startDate?: number;
  endDate?: number;
  formatedDate?: string;
  isFree: boolean;
  vendorUrl?: string;
  websiteUrl?: string;
  organizerEmail?: string;
  eventDescription: string;
  usersId?: string;
  favorites?: number;
  isFavorite: boolean;
};

export type DanceType = "fcbd" | "fusion" | "its" | "datura" | "other";
export type EventType = "workshop" | "festival" | "show" | "hafla" | "gathering" | "openstage" | "other";

export type EventExtract = {
  id: string;
  name: string;
  formatedDate: string;
  imageUrl: string;
};

export type Artist = {
  id: string;
  name: string;
  urls: {
    instagramUrl?: string;
    facebookUrl?: string;
    websiteUrl?: string;
    youtubeUrl?: string;
  };
  location: {
    city?: string;
    country?: string;
  };
};

export type FacebookEvent = {
  id: string; // id in url
  name: string;
  description: string;
  location?: {
    id: string;
    name: string;
    description?: string;
    url?: string;
    coordinates: {
      latitude: 48.357270730507;
      longitude: 10.89127084553;
    };
    countryCode: string; // TODO country code
    type: string;
    address?: string;
    city?: string;
  };
  photo: {
    url: string;
    id: number;
    imageUri: string; // This
  };
  video?: string;
  isOnline: false;
  url: string; // facebbok event url
  startTimestamp: 1720420200;
  endTimestamp: 1720965600;
  formattedDate: string;
  timezone: string; // TODO timezone type
  onlineDetails?: null; // TODO mustbe object
  hosts: [
    {
      id: string;
      name: string;
      url: string;
      type: string; // TODO type ("User" | ...)
      photo: null; // TODO
    },
  ];
  ticketUrl?: string;
  usersResponded: 20;
};

export type OsmPlace = {
  place_id: number; // 106629280,
  licence: string;
  osm_type: string; // node
  osm_id: number; // 2469850438,
  lat: string; //44.7521774,
  lon: string; // 5.37479,
  class: string; // shop,
  type: string; // convenience,
  place_rank: number; // 30,
  importance: number; // 0.00000999999999995449,
  addresstype: string; // shop,
  name: string; // La Carline,
  display_name: string; // La Carline, Rue du Viaduc, Place de l'Horloge, Les Fondeaux, Die, Drôme, Auvergne-Rhône-Alpes, France métropolitaine, 26150, France,
  address: {
    shop: string; // La Carline,
    road: string; // Rue du Viaduc,
    neighbourhood: string; // Place de l'Horloge,
    hamlet: string; // Les Fondeaux,
    village: string; // Die,
    municipality: string; // Die,
    county: string; // Drôme,
    "ISO3166-2-lvl6": string; // FR-26,
    state: string; // Auvergne-Rhône-Alpes,
    "ISO3166-2-lvl4": string; // FR-ARA,
    region: string; // France métropolitaine,
    postcode: string; // 26150,
    country: string; // France,
    country_code: string; // fr
    continent: string; // Europe
  };
  boundingbox: string[];
};

export type SearchFilters = {
  artists?: string[];
  isOnline?: boolean;
  address?: {
    municipality?: string;
    county?: string;
    state?: string;
    region?: string;
    country?: string;
    continent?: string;
  };
  eventTypes?: string[];
  danceTypes?: DanceType[];
  startDate?: number;
  endDate?: number;
  isFree?: boolean;
};
export type EventAlert = SearchFilters & { _id: string; alertText: string };
