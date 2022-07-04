const fieldsToExclude = ['urls', 'osSettings', 'showOnHomepage'];

/**
 * @returns true if any included field in the project object contains query
 */
export function projectTextSearch(project: Project, query: string): boolean {
  for (let [key, value] of Object.entries(project)) {
    if (!fieldsToExclude.includes(key)) {
      const stringified = JSON.stringify(value);
      const regex = new RegExp(query, 'i');
      if (regex.test(stringified)) return true;
    }
  }

  return false;
}
