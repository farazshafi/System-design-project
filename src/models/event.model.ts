export interface CreateEventDTO {
  type: string;
  payload: Record<string, any>;
}

export interface IEvent extends CreateEventDTO {
  id: number;
  created_at: Date;
}

