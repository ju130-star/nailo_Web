export interface Appointment {
  id: string;
  clientId: string;
  serviceId: string;
  ownerId: string;               // profissional/salao
  staffId?: string | null;       // atendente, opcional
  scheduledAt: string;           // datetime ISO (início)
  endAt?: string;                // datetime ISO (calculado)
  status: 'SCHEDULED' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED' | 'NO_SHOW';
  priceCents: number;
  notes?: string;
  createdAt: string;
  updatedAt?: string;
  cancelledAt?: string | null;
  cancellationReason?: string | null;
}