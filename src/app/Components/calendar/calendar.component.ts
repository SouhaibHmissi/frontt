import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventApi } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { ChefService } from '../../Services/ChefService/chef.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @ViewChild('externalEvents', {static: true}) externalEvents!: ElementRef;

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: false,
    events: [],
    
  };

  constructor(private chefService: ChefService) { }

  ngOnInit() {
    this.loadConges();
  }

  loadConges() {
    this.chefService.affichertousconges().subscribe({
      next: (conges) => {
        this.calendarOptions.events = conges.map((conge) => {
          return {
            title: "  Congé",
            start: new Date(conge.date_debut), 
            end: new Date(conge.date_fin)
          };
        });
      },
      error: (error) => {
        console.error('Error loading conges:', error);
      }
    });
  }
}
