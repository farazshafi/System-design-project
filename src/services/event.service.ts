import { sendEvent } from "../kafka/producer";
import { CreateEventDTO } from "../models/event.model";

export class EventService {
  async createEvent(data: CreateEventDTO): Promise<any> {
    sendEvent(data);
    return { status: "queued", ...data };
  }
}


