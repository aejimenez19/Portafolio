import { Experience } from '../models/experience.interface';

export const EXPERIENCES: Experience[] = [
  {
    id: 'tech-solutions',
    period: '2021 — PRESENT',
    company: 'TECH SOLUTIONS INC.',
    role: 'Senior Backend Engineer',
    achievements: [
      'Architected and maintained high-availability microservices serving 1M+ concurrent users with 99.99% uptime.',
      'Implemented automated failover protocols and comprehensive monitoring systems using Prometheus and Grafana.',
      'Optimized database query performance, reducing system latency by 40% through advanced indexing and caching strategies.',
    ],
  },
  {
    id: 'nexus-systems',
    period: '2018 — 2021',
    company: 'NEXUS SYSTEMS',
    role: 'Systems Engineer',
    achievements: [
      'Led the migration of legacy monolithic architectures to a containerized Docker environment, improving deployment frequency by 300%.',
      'Developed robust CI/CD pipelines to ensure code quality and stability across multi-regional cloud deployments.',
    ],
  },
  {
    id: 'carvajal',
    period: '2022 — PRESENT',
    company: 'CARVAJAL TECNOLOGÍA & SERVICIOS',
    role: 'Ingeniero Desarrollo Profesional',
    achievements: [
      'Desarrollo y mantenimiento de sistemas backend con Java/Spring Boot.',
      'Integración de APIs RESTful para módulos de gestión empresarial.',
      'Optimización de procesos de negocio mediante microservicios.',
    ],
  },
];