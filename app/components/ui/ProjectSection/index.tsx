// components/ui/ProjectsSection.tsx  (hoặc đúng path bạn đang dùng)

import {NUMBER_PROJECTS_COMPLETED} from '@/constants';
import {getProjects} from '@/data';
import ProjectsGrid from './ProjectsGrid';

export default async function ProjectsSection() {
	const projectData = await getProjects();
	const projects = projectData || [];

	return (
		<section
			id="completed_projects"
			className="scroll-mt-10 bg-muted/40 dark:bg-background py-12 ">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-12 text-center">
					<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Công Trình Tiêu Biểu
					</h2>
					<p className="mt-4 text-base text-muted-foreground md:text-lg">
						Một phần trong hơn {NUMBER_PROJECTS_COMPLETED} công trình đã được chúng tôi
						đồng hành cùng chủ đầu tư.
					</p>
				</div>

				<ProjectsGrid projects={projects} />
			</div>
		</section>
	);
}
