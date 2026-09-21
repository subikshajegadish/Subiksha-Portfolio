/** Personal details and links used across the page. */
export const PROFILE = {
  name: 'Subiksha Jegadish',
  initials: 'SJ',
  role: 'Software Developer',
  email: 'subiksha.jegadish@gmail.com',
  links: {
    github: 'https://github.com/subikshajegadish',
    linkedin: 'https://www.linkedin.com/in/subiksha-jegadish',
    /** Served from public/, relative to the site root so it works under any base path. */
    cv: `${import.meta.env.BASE_URL}Subiksha_Jegadish_SDE.pdf`,
  },
} as const;
