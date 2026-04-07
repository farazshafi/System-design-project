import { Request, Response } from "express";
import { EventService } from "../services/event.service";
import { performance } from "perf_hooks";

const eventService = new EventService();

export const createEvent = async (req: Request, res: Response) => {
  const start = performance.now();

  try {
    const event = await eventService.createEvent(req.body);

    const duration = performance.now() - start;
    console.log(`event_insert: ${duration.toFixed(3)}ms`);

    return res.status(201).json({
      success: true,
      data: event,
    });

  } catch (error: any) {
    const duration = performance.now() - start;
    console.error(`event_insert_failed: ${duration.toFixed(3)}ms - ${error.message}`);

    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};


