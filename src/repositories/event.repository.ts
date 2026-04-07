import pool from "../configs/db.config";
import { CreateEventDTO, IEvent } from "../models/event.model";

export class EventRepository {
  async createEvent(data: CreateEventDTO): Promise<IEvent> {
    const query = `
      INSERT INTO events (type, payload)
      VALUES ($1, $2)
      RETURNING *;
    `;

    const values = [data.type, data.payload];

    const result = await pool.query(query, values);

    return result.rows[0];
  }
}


