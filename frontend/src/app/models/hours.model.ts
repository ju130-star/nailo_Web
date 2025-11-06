export interface WorkingHours {
  id: string;
  ownerId: string;               // user id (owner)
  weekday: number;               // 0 = domingo ... 6 = sábado
  startTime: string;             // "08:00"
  endTime: string;               // "17:30"
  isWorking: boolean;
  notes?: string;
}