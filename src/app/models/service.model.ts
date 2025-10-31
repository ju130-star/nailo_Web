export interface ServiceItem {
  id: string;                    // UUID
  name: string;
  description?: string;
  durationMinutes: number;
  basePriceCents: number;        // trabalhar em centavos para moedas
  isActive: boolean;
  createdAt: string;
  updatedAt?: string;
}
