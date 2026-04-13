import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'system-design-api',
  brokers: ['localhost:9092']
});

const producer = kafka.producer({
  allowAutoTopicCreation: false,
});

let buffer: any[] = [];

export const connectProducer = async () => {
  await producer.connect();
  console.log('Kafka Producer connected');
};

// Start batch processing interval
setInterval(async () => {
  if (buffer.length === 0) return;

  const batch = buffer.splice(0, 100);

  try {
    await producer.send({
      topic: "events",
      messages: batch.map(e => ({
        value: JSON.stringify(e),
      })),
      acks: 0, // 🔥 Don't wait for Kafka acknowledgment
    });
  } catch (err) {
    console.error("Batch send failed", err);
  }
}, 50); // every 50ms

export const sendEvent = (event: any) => {
  buffer.push(event);
};
