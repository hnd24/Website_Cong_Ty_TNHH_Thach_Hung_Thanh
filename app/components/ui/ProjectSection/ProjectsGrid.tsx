'use client';

import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {ProjectType} from '@/types';
import Image from 'next/image';

import {useState} from 'react';

export default function ProjectsGrid({projects = []}: {projects: ProjectType[]}) {
	const [showAll, setShowAll] = useState(false);
	const visibleProjects = showAll ? projects : projects.slice(0, 2);

	if (!projects.length) {
		return (
			<p className="text-center text-sm text-muted-foreground">
				Hiện chưa có công trình nào được hiển thị. Vui lòng quay lại sau.
			</p>
		);
	}

	return (
		<>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
				{visibleProjects.map(project => (
					<article
						key={project.title}
						className="h-full"
						itemScope
						itemType="https://schema.org/Project">
						<Card className="flex h-full flex-col overflow-hidden border border-border bg-background shadow-md transition-shadow duration-300 hover:shadow-lg">
							<div className="relative">
								<div className="relative h-64 w-full">
									<Image
										loading="lazy"
										src={project.image}
										alt={project.title}
										fill
										className="object-cover"
										sizes="(min-width: 1024px) 50vw, 100vw"
										itemProp="image"
									/>
								</div>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
								<div className="absolute bottom-0 left-0 right-0 p-5">
									<h3
										className="text-lg font-semibold text-white md:text-xl"
										itemProp="name">
										{project.title}
									</h3>
									{project.subtitle && (
										<p
											className="mt-1 text-xs font-medium text-gray-200 md:text-sm"
											itemProp="description">
											{project.subtitle}
										</p>
									)}
								</div>
							</div>

							<CardContent className="flex flex-1 flex-col p-5">
								<p className="flex-1 text-sm text-muted-foreground md:text-base">
									<span className="font-semibold text-foreground">
										Điểm nhấn:{' '}
									</span>
									<span itemProp="abstract">{project.highlight}</span>
								</p>

								{project.link && (
									<Button
										asChild
										variant="outline"
										size="sm"
										className="mt-4 w-fit text-sm">
										<a
											href={project.link}
											target="_blank"
											rel="noopener noreferrer"
											itemProp="url"
											aria-label={`Xem chi tiết công trình: ${project.title}`}>
											Xem chi tiết công trình
										</a>
									</Button>
								)}
							</CardContent>
						</Card>
					</article>
				))}
			</div>

			{/* Nút xem tất cả / rút gọn */}
			{projects.length > 2 && (
				<div className="mt-10 flex justify-center">
					<Button
						variant="outline"
						size="lg"
						className="min-w-[220px] text-base font-semibold"
						onClick={() => setShowAll(prev => !prev)}>
						{showAll ? 'Rút gọn' : 'Xem tất cả công trình'}
					</Button>
				</div>
			)}
		</>
	);
}
