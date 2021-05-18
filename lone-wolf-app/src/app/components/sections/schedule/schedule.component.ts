import { Component, OnInit } from '@angular/core';
import { GoogleAPI } from '../../../google/googleAPI';
import { Subject } from 'rxjs';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours,
} from 'date-fns';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView,
} from 'angular-calendar';
import { IEvent } from '../../../google/google';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  public events: CalendarEvent[] = [];
  public viewDate = new Date();
  public refresh: Subject<any> = new Subject();
  public activeDayIsOpen = true;
  public view: CalendarView = CalendarView.Month;

  constructor(private googleAPI: GoogleAPI) {
  }

  async ngOnInit(): Promise<void> {
    const data = await this.googleAPI.getCalendar();
    console.log('calendar', data.calendar);

    this.events = data.calendar.events.map((event: IEvent) => {
      return {
        start: new Date(event.start.dateTime),
        end: new Date(event.end.dateTime),
        title: event.summary
      } as CalendarEvent;
    });
  }

  public dayClicked({date, events}: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  public eventTimesChanged({
                             event,
                             newStart,
                             newEnd,
                           }: CalendarEventTimesChangedEvent): void {
    // @ts-ignore
    this.events = this.events.map((iEvent: any) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  public handleEvent(action: string, event: CalendarEvent): void {
    // this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
  }

}
