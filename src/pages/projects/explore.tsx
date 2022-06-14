import Head from 'next/head';
import fs from 'fs/promises';
import path from 'path';
import OperatingSystem from '../../components/operatingSystem/operatingSystem';

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public/data/projects.json');
  const projectsRaw = await fs.readFile(filePath);
  const projectsJson = JSON.parse(projectsRaw.toString());

  return {
    props: {
      data: projectsJson.projects,
    },
  };
}

const ExploreProjects: React.FC<{ data: ProjectInfo[] }> = ({
  data: projects,
}) => {
  return (
    <>
      <Head>
        <title>Dušan Dodić | Explore my projects</title>
        <meta name="description" content="Web developer portfolio website" />
      </Head>
      <main>
        <OperatingSystem projects={projects} />
      </main>
    </>
  );
};

export default ExploreProjects;
