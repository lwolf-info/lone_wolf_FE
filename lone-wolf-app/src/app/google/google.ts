export interface IEvent {
  summary: string;
  start: {
    dateTime: string;
  };
  end: {
    dateTime: string;
  };

  [key: string]: any;
}

export const credentials = {
  CLIENT_ID: '1050904203568-rvcfb6vhf1gtvcmcp6odip9b91rfirrm.apps.googleusercontent.com',
  API_KEY: 'AIzaSyBov6z6IOOTsvsfc6CSLqidiZeAmmD0Ozk'
};

export const api = {
  DISCOVERY_DOCS: ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'],
  SCOPES: 'https://www.googleapis.com/auth/calendar.readonly'
};

