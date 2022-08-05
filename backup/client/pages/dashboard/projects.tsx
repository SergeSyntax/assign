import { NextPage } from 'next';
import { DashboardLayout } from '../../src/dashboard';
import { ProjectsPanel } from '../../src/projects-panel';

const Projects: NextPage = () => {
  return (
    <DashboardLayout>
      <ProjectsPanel />
    </DashboardLayout>
  );
};
export default Projects;
