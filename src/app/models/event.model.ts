export interface EventConfig {
  event: string;
  speaker: string;
  speakerStatus: 'pending' | 'confirmed';
  topic: string;
  schedule: string;
  location: string;
}
