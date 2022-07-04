import { projectTextSearch } from '../../utils/misc/projectTextSearch';

export function updateFilteredProjects(
  projects: Project[],
  setFilteredProjects: (p: Project[]) => void,
  selectedTechnologies: string[],
  searchValue: string
) {
  if (selectedTechnologies.length === 0) {
    setFilteredProjects(
      projects.filter((p) => projectTextSearch(p, searchValue))
    );
    return;
  }

  setFilteredProjects(
    projects
      .filter((p) =>
        selectedTechnologies.every((t) => p.technologies.includes(t))
      )
      .filter((p) => projectTextSearch(p, searchValue))
  );
}
