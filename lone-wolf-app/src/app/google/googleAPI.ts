import { api, credentials } from './google';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let googleAPI: any = null;

@Injectable({
  providedIn: 'root'
})
export class GoogleAPI {
  constructor(private http: HttpClient) {
  }

  public async getAPI<T>(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      let currentTime = 0;
      const interval = setInterval(() => {
        currentTime += 100;
        if (currentTime <= 5000) {
          // @ts-ignore
          if (window.gapi && window.gapi.load) {
            // @ts-ignore
            googleAPI = window.gapi;
            resolve(googleAPI);
            clearInterval(interval);
          } else {
            resolve(googleAPI);
          }
        } else {
          reject('timeout');
        }

      }, 100);
    });
  }

  private async createResponse(gAuth: any, resolve: any): Promise<any> {
    const data = await this.listUpcomingEvents();
    resolve({
      calendar: {
        ...data
      }
    });
  }

  private async listUpcomingEvents(): Promise<any> {
    return new Promise(async (resolve, reject) => {
      try {
        const gapi = await this.getAPI();
        const data = await gapi.client.calendar.events.list({
          calendarId: 'primary',
          timeMin: (new Date()).toISOString(),
          showDeleted: false,
          singleEvents: true,
          maxResults: 10,
          orderBy: 'startTime'
        });

        resolve({events: data.result.items, reminders: data.result.defaultReminders});
      } catch (error) {
        reject({message: 'ERROR GETTING CALENDAR EVENTS', error});
      }

    });
  }

  public async getCalendar(): Promise<any> {
    const gapi = await this.getAPI();

    return new Promise((resolve, reject) => {
      gapi.load('client:auth2', async () => {
        const gAuth = await gapi.client.init({
          client_id: credentials.CLIENT_ID,
          apiKey: credentials.API_KEY,
          discoveryDocs: api.DISCOVERY_DOCS,
          scope: api.SCOPES
        });

        gapi.auth2.getAuthInstance().isSignedIn.listen((isSignedIn: any) => {
          if (isSignedIn) {
            this.createResponse(gAuth, resolve);
          }
        });

        if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
          this.createResponse(gAuth, resolve);
        }
      }, reject);
    });
  }

}
