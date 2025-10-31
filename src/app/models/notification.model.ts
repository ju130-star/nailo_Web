export interface Notification {
  id: string;
  userId: string;
  appointmentId?: string | null;
  type: 'REMINDER' | 'CONFIRMATION' | 'CANCELLATION' | 'SYSTEM';
  channel: 'EMAIL' | 'PUSH' | 'SMS' | 'IN_APP';
  message: string;
  sentAt?: string | null;
  scheduledAt?: string | null;
  isRead?: boolean;
  createdAt: string;
}