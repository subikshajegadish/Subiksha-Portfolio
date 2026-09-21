import type { Job } from '../types/content';

/** Work Experience entries, in the order they appear. The first one is selected on load. */
export const JOBS: readonly Job[] = [
  {
    org: 'University of Maryland',
    title: 'Graduate Course Aide',
    place: 'INFO College, College Park',
    dates: 'From Aug 31',
    bullets: [
      'Graduate Course Aide for INST314 and INST464 at the INFO College, about 10 hours a week for each course.',
      '[Add what you do day to day, e.g. grading, office hours, supporting students and instructors]',
      '[Add a bullet on a concrete outcome or a tool you used]',
    ],
  },
  {
    org: 'Amazon Web Services',
    title: 'Software Development Engineer Intern',
    place: 'Arlington, VA',
    dates: 'Jun 2026 – Aug 2026',
    bullets: [
      'Shipped an S3-triggered data validation layer (Python, PySpark on AWS Glue) validating 2–3M+ rows in under 10 minutes across 5+ checks, replacing 24-hour-late failures with immediate vendor feedback',
      'Owned infrastructure end-to-end in AWS CDK – Glue orchestration, CloudWatch alarms/dashboards, and a ticket-cutting Lambda – onboarding 15+ internal AWS teams (EC2, S3, and others) across Beta, Gamma and Production.',
      'Protected recommendation accuracy for 99.8% of downstream pipeline runs by blocking malformed vendor drops upstream, and cut invalid-file rejections by 97% after redesigning rejection logic',
    ],
  },
  {
    org: 'ION Group',
    title: 'Software Analyst',
    place: 'Bengaluru, India',
    dates: 'Jan 2024 – Jul 2025',
    bullets: [
      'Engineered standardized CI/CD pipelines using Jenkins + Docker for trading platforms used by 50+ financial institutions, reducing release cycles from 5 days → 2 days',
      'Reduced deployment failures by 78% through pipeline hardening, automated checks, and environment standardization',
      'Resolved 100+ production incidents via SQL performance tuning, diagnostics, and RCA, improving MTTR by 35%',
      'Automated database backup and restore workflows using Python + Bash, cutting environment setup from 72 hrs → 3 hrs across 50+ client environments',
    ],
  },
  {
    org: 'ISRO',
    title: 'Software Development Intern',
    place: 'Liquid Propulsion Systems Centre, Bengaluru, India',
    dates: 'May 2023 – Jul 2023',
    bullets: [
      'Developed an end-to-end computer vision pipeline (Python, OpenCV, scikit-learn) for welding defect detection, achieving 93.8% accuracy on 500+ samples',
      'Implemented ML-based anomaly detection (Random Forest, SVM) to identify 150+ critical defects, improving quality-control reliability by 38%',
    ],
  },
];
