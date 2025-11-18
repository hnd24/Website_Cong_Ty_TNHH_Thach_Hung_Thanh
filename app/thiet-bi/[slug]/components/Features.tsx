import {ArrowRight, CheckCircle2} from 'lucide-react';

type Props = {
	applications: string[];
	features: string[];
};

export default function EquipmentFeatures({applications, features}: Props) {
	if ((!features || features.length === 0) && (!applications || applications.length === 0)) {
		return null;
	}
	return (
		<section className="mt-16 mx-auto md:px-6  w-full max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
			{/* Cột: Tính năng nổi bật */}
			{features && features.length > 0 && (
				<div>
					<h2 className="text-2xl font-bold text-foreground">Tính năng nổi bật</h2>
					<ul className="mt-6 space-y-4">
						{features.map((feature, index) => (
							<li key={index} className="flex items-start">
								<CheckCircle2 className="mr-3 mt-1 h-5 w-5 text-green-500" />
								<p className="text-sm text-muted-foreground">{feature}</p>
							</li>
						))}
					</ul>
				</div>
			)}

			{/* Cột: Ứng dụng thực tế */}
			{applications && applications.length > 0 && (
				<div>
					<h2 className="text-2xl font-bold text-foreground">Ứng dụng thực tế</h2>
					<ul className="mt-6 space-y-4">
						{applications.map((app, index) => (
							<li
								key={index}
								className="flex items-start text-sm text-muted-foreground">
								<ArrowRight className="mr-3 mt-1 h-4 w-4 text-blue-500" />
								<span>{app}</span>
							</li>
						))}
					</ul>
				</div>
			)}
		</section>
	);
}
