import {
  AWSLogo,
  CPlusPlusLogo,
  DjangoLogo,
  DockerLogo,
  ExpressLogo,
  FastAPILogo,
  GitLogo,
  JavaLogo,
  JavaScriptLogo,
  JenkinsLogo,
  LinuxLogo,
  NodejsLogo,
  NumPyLogo,
  OpenCVLogo,
  PandasLogo,
  PostmanLogo,
  PytestLogo,
  PythonLogo,
  ReactLogo,
  ScikitLearnLogo,
  SQLLogo,
  TypeScriptLogo,
} from '../components/icons/logos';
import type { SkillGroup } from '../types/content';

/** Technical skills, matching the resume. The grid fills row by row. */
export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: PythonLogo },
      { name: 'TypeScript', logo: TypeScriptLogo },
      { name: 'Java', logo: JavaLogo },
      { name: 'JavaScript', logo: JavaScriptLogo },
      { name: 'C/C++', logo: CPlusPlusLogo },
      { name: 'SQL', logo: SQLLogo },
    ],
  },
  {
    title: 'Backend & Web',
    skills: [
      { name: 'FastAPI', logo: FastAPILogo },
      { name: 'Django', logo: DjangoLogo },
      { name: 'Node.js', logo: NodejsLogo },
      { name: 'Express', logo: ExpressLogo },
      { name: 'React', logo: ReactLogo },
    ],
  },
  {
    title: 'Data & ML',
    skills: [
      { name: 'Pandas', logo: PandasLogo },
      { name: 'NumPy', logo: NumPyLogo },
      { name: 'scikit-learn', logo: ScikitLearnLogo },
      { name: 'OpenCV', logo: OpenCVLogo },
    ],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', logo: GitLogo },
      { name: 'Docker', logo: DockerLogo },
      { name: 'Jenkins', logo: JenkinsLogo },
      { name: 'AWS (Lambda, Glue, Step Functions, EventBridge, EC2, RDS)', logo: AWSLogo },
      { name: 'Linux', logo: LinuxLogo },
      { name: 'Postman', logo: PostmanLogo },
      { name: 'pytest', logo: PytestLogo },
    ],
  },
  {
    title: 'Concepts',
    skills: [
      { name: 'REST APIs' },
      { name: 'Microservices' },
      { name: 'CI/CD' },
      { name: 'TDD' },
      { name: 'System Design' },
      { name: 'Observability' },
      { name: 'Agile' },
    ],
  },
];
