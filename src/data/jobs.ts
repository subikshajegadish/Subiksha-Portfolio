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
    place: 'Arlington, VA, Molecule team',
    dates: 'Jun to Aug 2026',
    bullets: [
      'Shipped an S3-triggered data validation layer (Python, PySpark on AWS Glue) that checks 2 to 3M+ rows in under 10 minutes across 5+ checks, replacing 24-hour-late failures with immediate vendor feedback.',
      'Owned the infrastructure end to end in AWS CDK, including Glue orchestration, CloudWatch alarms and dashboards, and a ticket-cutting Lambda, onboarding 15+ internal AWS teams across Beta, Gamma and Production.',
      'Protected recommendation accuracy for 99.8% of downstream pipeline runs by blocking malformed vendor drops upstream, and cut invalid-file rejections by 97% after redesigning the rejection logic.',
      'Finished the internship with an inclined evaluation for a return offer.',
    ],
  },
  {
    org: 'ION Group',
    title: 'Software Analyst',
    place: 'Bengaluru, India',
    dates: 'Jan 2024 to Jul 2025',
    bullets: [
      'Engineered standardized CI/CD pipelines with Jenkins and Docker for trading platforms used by 50+ financial institutions, cutting release cycles from 5 days to 2.',
      'Reduced deployment failures by 78% through pipeline hardening, automated checks and environment standardization.',
      'Resolved 100+ production incidents through SQL performance tuning, diagnostics and root cause analysis, improving MTTR by 35%.',
      'Automated database backup and restore workflows with Python and Bash, cutting environment setup from 72 hours to 3 across 50+ client environments.',
    ],
  },
  {
    org: 'ISRO',
    title: 'Software Development Intern',
    place: 'Liquid Propulsion Systems Centre, Bengaluru',
    dates: 'May to Jul 2023',
    bullets: [
      'Developed an end-to-end computer vision pipeline (Python, OpenCV, scikit-learn) for welding defect detection, reaching 93.8% accuracy on 500+ samples.',
      'Implemented ML-based anomaly detection (Random Forest, SVM) that identified 150+ critical defects, improving quality-control reliability by 38%.',
      'The research led to an IEEE publication.',
    ],
  },
];
