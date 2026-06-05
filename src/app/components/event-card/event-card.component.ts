import { Component, Input } from '@angular/core';
import { EventConfig } from '../../models/event.model';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html'
})
export class EventCardComponent {
  @Input() config!: EventConfig;
  @Input() loading = false;
  @Input() error = false;

  readonly deployTime = new Date().toISOString();

  get isConfirmed(): boolean {
    return this.config?.speakerStatus === 'confirmed';
  }

  get formattedDeployTime(): string {
    return new Date(this.deployTime).toLocaleString('es-PE', {
      dateStyle: 'medium',
      timeStyle: 'short'
    });
  }
}
