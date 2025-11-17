import {Suspense} from 'react';
import {HeroSection} from './components/ui/HeroSection';

import {CircularNav} from './components/layout/CircularNav';
import EquipmentSection from './components/ui/EquipmentSection';
import EquipmentSectionSkeleton from './components/ui/EquipmentSection/Sekleton';
import MilestonesSection from './components/ui/MilestonesSection';
import ProjectsSection from './components/ui/ProjectSection';
import ProjectsSectionSkeleton from './components/ui/ProjectSection/Skeleton';
import ServicesSection from './components/ui/ServicesSection';
import StatsBarSection from './components/ui/StatsBarSection';
import WhyChooseUsSection from './components/ui/WhyChooseUsSection';

export default async function Home() {
	return (
		<>
			<HeroSection />
			<StatsBarSection />
			<Suspense fallback={<ProjectsSectionSkeleton />}>
				<ProjectsSection />
			</Suspense>
			<ServicesSection />
			<Suspense fallback={<EquipmentSectionSkeleton />}>
				<EquipmentSection />
			</Suspense>
			<MilestonesSection />
			<WhyChooseUsSection />
			<CircularNav />
		</>
	);
}
