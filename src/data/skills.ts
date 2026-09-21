import {
  AWSLogo,
  CLogo,
  CPlusPlusLogo,
  CSharpLogo,
  DockerLogo,
  GitLogo,
  JavaLogo,
  NodejsLogo,
  PythonLogo,
  PyTorchLogo,
  ReactLogo,
  SQLLogo,
  TensorFlowLogo,
  TypeScriptLogo,
} from '../components/icons/logos';
import type { SkillGroup } from '../types/content';

/** Skills grid, filled row by row into three columns. */
export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    title: 'AI & ML',
    skills: [
      { name: 'Python', logo: PythonLogo },
      { name: 'TensorFlow', logo: TensorFlowLogo },
      { name: 'PyTorch', logo: PyTorchLogo },
    ],
  },
  {
    title: 'Web Development',
    skills: [
      { name: 'TypeScript', logo: TypeScriptLogo },
      { name: 'Node.js', logo: NodejsLogo },
      { name: 'React', logo: ReactLogo },
    ],
  },
  {
    title: 'Object-Oriented',
    skills: [
      { name: 'Java', logo: JavaLogo },
      { name: 'C++', logo: CPlusPlusLogo },
      { name: 'C#', logo: CSharpLogo },
    ],
  },
  {
    title: 'Low-level',
    skills: [{ name: 'C', logo: CLogo }],
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Git', logo: GitLogo },
      { name: 'Docker', logo: DockerLogo },
    ],
  },
  {
    title: 'Cloud & Data',
    skills: [
      { name: 'AWS', logo: AWSLogo },
      { name: 'SQL', logo: SQLLogo },
    ],
  },
];
