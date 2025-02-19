import { ProjectProps } from './Project';

export const sortProjects = (projects: ProjectProps[], sortOrder: 'ASC' | 'DESC'): ProjectProps[] => {
  return projects
    .map(project => ({
      ...project,
      dateCompleted: new Date(project.dateCompleted)
    }))
    .sort((a, b) => sortOrder === 'ASC' ? a.dateCompleted.getTime() - b.dateCompleted.getTime() : b.dateCompleted.getTime() - a.dateCompleted.getTime())
    .map(project => ({
      ...project,
      dateCompleted: project.dateCompleted.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    }));
};