export interface AppointmentHistory {
  id: string;
  appointmentId: string;
  action: 'CREATED' | 'UPDATED' | 'CANCELLED' | 'RESCHEDULED' | 'COMPLETED';
  performedByUserId?: string | null; // quem fez a ação
  timestamp: string;
  details?: string; // JSON string or free text
}
