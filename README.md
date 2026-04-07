# 🚀 High-Scale Event Ingestion System (System Design Journey)

This project is a hands-on system design journey focused on building and evolving a high-scale event ingestion system from scratch.

The goal is not just to build an API, but to deeply understand how real-world systems behave under load and how to design scalable, reliable, and production-ready architectures.

---

## 🎯 Objectives

- Learn system design through practical implementation
- Understand how systems fail under high concurrency
- Incrementally improve architecture based on real bottlenecks

---

## 🧠 Key Concepts Covered

- Scalability
- Availability
- Reliability
- Fault Tolerance
- Performance Optimization
- Load Balancing
- Data Partitioning (Sharding)
- Caching
- Concurrency Handling
- Observability
- Cost Efficiency
- Security
- Maintainability & Extensibility

---

## ⚙️ Current Architecture (Phase 1)

Client → API (Node.js) → PostgreSQL

- Built using Node.js, Express, and TypeScript
- Clean architecture: Controller → Service → Repository
- PostgreSQL used for event persistence

---

## 🧪 Load Testing

Load testing is performed using **k6** to simulate real-world traffic.

### Results:

| Metric | 300 VUs | 800 VUs |
|--------|--------|--------|
| Throughput | ~540 req/sec | ~500 req/sec |
| Latency | ~550ms | ~1.5s |
| Failure Rate | 0.15% | 2.7% |

---

## 🔍 Key Observations

- System performance degraded as load increased
- Database became the primary bottleneck
- Tight coupling between API and DB caused high latency
- Throughput decreased under higher concurrency

---

## 💡 Key Learnings

- A system that works at low scale can fail under high load
- Increasing traffic does not guarantee better throughput
- Bottlenecks must be identified through testing, not assumptions

---

## 🛣️ Roadmap

This project will evolve step-by-step:

- [x] Phase 1: Baseline API + Load Testing
- [ ] Phase 2: Introduce Queue (Decouple API & DB)
- [ ] Phase 3: Caching (Redis)
- [ ] Phase 4: Horizontal Scaling & Load Balancing
- [ ] Phase 5: Database Scaling (Sharding / Replication)
- [ ] Phase 6: Observability (Metrics & Logging)
- [ ] Phase 7: Fault Tolerance & Resilience
- [ ] Phase 8: Security & Rate Limiting
- [ ] Phase 9: Cost Optimization

---

## 📢 Goal

To simulate real-world production challenges and build a system that can handle high traffic while maintaining performance, reliability, and scalability.

---

## 🧑💻 Author

This project is part of a continuous learning journey into advanced backend engineering and system design.
