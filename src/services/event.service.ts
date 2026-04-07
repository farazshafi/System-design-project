import { EventRepository } from "../repositories/event.repository";
import { CreateEventDTO, IEvent } from "../models/event.model";

export class EventService {
  private eventRepository: EventRepository;

  constructor() {
    this.eventRepository = new EventRepository();
  }

  async createEvent(data: CreateEventDTO): Promise<IEvent> {
    return this.eventRepository.createEvent(data);
  }
}


