import { Component, OnInit } from '@angular/core';
import { EventConfig } from './models/event.model';
import { EventService } from './services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  config: EventConfig | null = null;
  loading = true;
  error = false;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvent().subscribe({
      next: (data) => {
        this.config = data;
        this.loading = false;
      },
      error: () => {
        this.error = true;
        this.loading = false;
      }
    });
  }
}
