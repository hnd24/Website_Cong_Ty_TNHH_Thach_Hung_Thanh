// components/ui/ProjectsSection.tsx

import {ACHIEVEMENTS} from '@/constants';
import {getProjects} from '@/data';
import ProjectsGrid from './ProjectsGrid';

export default async function ProjectsSection() {
	const projectData = await getProjects();
	const projects = projectData || [];

	return (
		<section
			id="completed_projects"
			aria-labelledby="completed-projects-heading"
			className="scroll-mt-10 bg-background/80 py-12">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Header */}
				<div className="mb-12 text-center">
					<h2
						id="completed-projects-heading"
						className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Công trình tiêu biểu
					</h2>
					<p className=" mt-4 text-base text-muted-foreground md:text-lg">
						Một phần trong hơn{' '}
						<strong className="font-semibold">
							{ACHIEVEMENTS.numberCompletedProjects.value} công trình
						</strong>{' '}
						thi công xây dựng và cho thuê thiết bị mà CÔNG TY TNHH THẠNH HƯNG THÀNH đã
						đồng hành cùng chủ đầu tư tại Long An và khu vực lân cận.
					</p>
				</div>

				<ProjectsGrid projects={projects} />
			</div>
		</section>
	);
}
