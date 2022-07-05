import path from 'path';
import fs from 'fs/promises';

export async function fetchProject(
  projectId: string
): Promise<{ content: string; metadata: Project }> {
  // metadata
  const metadataFilePath = path.join(
    process.cwd(),
    `public/data/projects.json`
  );
  const metadataTask = fs.readFile(metadataFilePath);

  // content
  const contentFilePath = path.join(
    process.cwd(),
    `public/data/projects/${projectId}/content.md`
  );
  const contentTask = fs.readFile(contentFilePath, 'utf8');

  // fetch
  const project = await Promise.all([metadataTask, contentTask]);

  // prepare data
  const metadataAllProjects = JSON.parse(project[0].toString());
  const metadata = metadataAllProjects.projects.find(
    (p: Project) => p.id === projectId
  );
  const content = project[1];
  return {
    content,
    metadata,
  };
}
