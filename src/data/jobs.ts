import type { Job } from '../types/content';

/** Work Experience entries, in the order they appear. The first one is selected on load. */
export const JOBS: readonly Job[] = [
  {
    org: 'University of Maryland',
    title: 'Graduate Course Aide',
    place: 'INFO College, College Park',
    dates: 'From Aug 31',
    bullets: [
      'Supporting faculty with course logistics, grading and student questions for:',
      'INST314 - Statistics for Information Science',
      'INST464 - Decision Making for Cybersecurity',
    ],
  },
  {
    org: 'Amazon Web Services',
    title: 'Software Development Engineer Intern',
    place: 'Arlington, VA',
    dates: 'Jun 2026 – Aug 2026',
    bullets: [
      'Shipped an S3-triggered validation layer (PySpark on AWS Glue) that checks 2–3M+ rows in under 10 minutes, giving vendors instant feedback instead of 24-hour-late failures.',
      'Owned the infrastructure in AWS CDK (Glue, CloudWatch, Lambda) and onboarded 15+ internal AWS teams.',
      'Protected 99.8% of downstream pipeline runs from bad vendor data and cut invalid-file rejections by 97%.',
    ],
  },
  {
    org: 'ION Group',
    title: 'Software Analyst',
    place: 'Bengaluru, India',
    dates: 'Jan 2024 – Jul 2025',
    bullets: [
      'Built Jenkins + Docker CI/CD pipelines for trading platforms used by 50+ financial institutions, cutting release cycles from 5 days to 2.',
      'Reduced deployment failures by 78% with pipeline hardening and automated checks.',
      'Resolved 100+ production incidents through SQL tuning and RCA, improving MTTR by 35%.',
      'Automated database backup and restore with Python + Bash, cutting setup from 72 hrs to 3.',
    ],
  },
  {
    org: 'ISRO',
    title: 'Software Development Intern',
    place: 'Liquid Propulsion Systems Centre, Bengaluru, India',
    dates: 'May 2023 – Jul 2023',
    bullets: [
      'Built a computer vision pipeline (Python, OpenCV, scikit-learn) that detects welding defects with 93.8% accuracy.',
      'Flagged 150+ critical defects with ML anomaly detection, improving quality-control reliability by 38%.',
    ],
  },
];
