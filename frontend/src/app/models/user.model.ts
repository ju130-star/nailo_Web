export interface User {
  id: string;                    // UUID
  name: string;
  email: string;
  phone?: string;
  role: 'OWNER' | 'CLIENT' | 'STAFF';
  passwordHash?: string;         // nunca enviar ao cliente
  createdAt: string;             // ISO date
  updatedAt?: string;
  avatarUrl?: string;
  isActive: boolean;
  // optional profile fields
  birthDate?: string;
  address?: string;
}