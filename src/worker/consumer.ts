import { Kafka } from 'kafkajs';
import { EventRepository } from '../repositories/event.repository';

const kafka = new Kafka({
  clientId: 'system-design-worker',
  brokers: ['localhost:9092']
});

const consumer = kafka.consumer({ groupId: 'event-group' });
const eventRepository = new EventRepository();

export const runConsumer = async () => {
  await consumer.connect();
  await consumer.subscribe({ topic: 'events', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const event = JSON.parse(message.value?.toString() || '{}');
      console.log(`Received event: ${event.type}`);

      try {
        await eventRepository.createEvent(event);
        console.log(`Event ${event.type} saved to DB`);
      } catch (error) {
        console.error('Error saving event to DB:', error);
      }
    },
  });
};

runConsumer().catch(console.error);
