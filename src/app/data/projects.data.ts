import { Project } from '../models/project.interface';

export const PROJECTS: Project[] = [
  {
    id: 'gestion-prestamos',
    title: 'GESTIÓN PRÉSTAMOS PERSONALES',
    description:
      'API RESTful construida con Java y Spring Boot que gestiona préstamos personales con arquitectura limpia, documentación Swagger/OpenAPI y cálculos financieros automatizados.',
    techs: ['Java', 'Spring Boot', 'PostgreSQL', 'Swagger', 'Clean Architecture'],
    image: 'assets/GestionPrestamosPersonalesApi.png',
    viewUrl: '#',
    codeUrl: '#',
  },
  {
    id: 'factuexpress',
    title: 'FACTUEXPRESS',
    description:
      'Sistema de facturación electrónica desarrollado con Angular y TypeScript, diseñado para optimizar la gestión de invoices y reportes en PyMEs.',
    techs: ['Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
    image: 'assets/FacutExpress.jpg',
    viewUrl: '#',
    codeUrl: '#',
  },
  {
    id: 'gymvirtual',
    title: 'GYM VIRTUAL',
    description:
      'Aplicación web para gestión de rutinas de entrenamiento, seguimiento de progreso y administración de miembros de gimnasio.',
    techs: ['Angular', 'TypeScript', 'HTML', 'CSS', 'JavaScript'],
    image: 'assets/GymVirtual.jpg',
    viewUrl: '#',
    codeUrl: '#',
  },
];