import {getEquipmentBySlug} from '@/data/equipment';
import {notFound} from 'next/navigation';
import {Suspense} from 'react';
import EquipmentRelated from './components/EquipmentRelated';
import EquipmentSpecs from './components/EquipmentSpecs';
import EquipmentFeatures from './components/Features';
import EquipmentHeroSection from './components/HeroSection';
import TechDocsSection from './components/TechDocs';
export default async function ProductPage({params}: {params: Promise<{slug: string}>}) {
	const {slug} = await params;
	const data = await getEquipmentBySlug(slug);
	if (!data) {
		notFound();
	} else {
		return (
			<Suspense>
				<h1 className=" sr-only">{data.name}</h1>
				<div className=" scroll-mt-20 bg-muted/80 w-full px-4 py-12">
					<EquipmentHeroSection equipment={data} />
					<EquipmentSpecs specs={data.specs} />
					<EquipmentFeatures applications={data.applications} features={data.features} />
					<TechDocsSection techDocs={data.techDocs || []} />
					<EquipmentRelated type={data.type} />
				</div>
			</Suspense>
		);
	}
}
