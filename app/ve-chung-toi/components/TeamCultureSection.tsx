import {Badge} from '@/components/ui/badge';
import {Card} from '@/components/ui/card';
import Image from 'next/image';
import {TEAM_MEMBERS} from '../constants';

export function TeamCultureSection() {
	return (
		<section
			id="team-culture"
			aria-labelledby="team-culture-heading"
			className="scroll-mt-24 py-16 sm:py-24 bg-muted/80 ">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl mx-auto text-center mb-12">
					<Badge variant="secondary" className="mb-4">
						Đội ngũ của chúng tôi
					</Badge>
					<h2
						id="team-culture-heading"
						className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
						Đội ngũ thi công chuyên nghiệp của Thạnh Hưng Thành
					</h2>
					<p
						id="team-culture-description"
						className="mt-4 text-lg text-foreground/70 leading-relaxed">
						Văn hóa của chúng tôi được xây dựng trên công trường, không phải trong phòng
						họp. Chúng tôi đề cao an toàn, sự chuyên nghiệp, và luôn giữ chữ tín với
						khách hàng.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{TEAM_MEMBERS.map(member => (
						<Card
							itemScope
							itemType="https://schema.org/Person"
							key={member.name}
							className="p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg hover:border-primary-blue/50 transition-all duration-300 bg-card/50 hover:bg-card">
							<Image
								alt={`Portait của ${member.name}`}
								className="w-20 h-20 rounded-full object-cover flex-shrink-0 ring-2 ring-primary-blue/20"
								src={member.image || '/placeholder.svg'}
								width={80}
								height={80}
								itemProp="image"
							/>
							<div className="flex-1">
								<h3 className="font-bold text-lg text-foreground" itemProp="name">
									{member.name}
								</h3>
								<p
									className="text-sm text-primary-blue font-medium"
									itemProp="jobTitle">
									{member.role}
								</p>
								<p
									className="mt-2 text-sm text-foreground/70 leading-relaxed "
									itemProp="description">
									{member.bio}
								</p>
							</div>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
