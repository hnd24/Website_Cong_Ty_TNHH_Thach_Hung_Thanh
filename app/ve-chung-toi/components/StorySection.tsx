import {Badge} from '@/components/ui/badge';
import {Card} from '@/components/ui/card';

export function StorySection() {
	return (
		<section id="story-section" className="scroll-mt-20 py-16 md:py-20 bg-muted/80 ">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div>
						<Badge variant="default" className="mb-4">
							Câu chuyện của chúng tôi
						</Badge>
						<h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
							Giới thiệu về công ty cho thuê thiết bị xây dựng tại Long An
						</h2>
						<div className="mt-6 space-y-4 text-foreground/70 text-base leading-relaxed">
							<p>
								Tọa lạc tại 119–121 Đường 278, P7, Tân An, Long An, CÔNG TY TNHH
								THẠNH HƯNG THÀNH là đối tác tin cậy chuyên cung cấp dịch vụ thi công
								xây dựng và cho thuê thiết bị xây dựng đa dạng. Chúng tôi tập trung
								vào các công trình nền móng, hạ tầng, dân dụng và công nghiệp.
							</p>
							<p>
								Với phương châm tối ưu chi phí và đảm bảo tiến độ, chúng tôi cung
								cấp giải pháp cho thuê thiết bị xây dựng toàn diện cho mọi quy mô dự
								án. Đội ngũ kỹ sư và thợ thực hành của chúng tôi luôn sẵn sàng hỗ
								trợ để công trình của bạn đạt được mục tiêu về chất lượng, tiến độ
								và an toàn.
							</p>
						</div>
						<Card className="mt-8 p-6 bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 border-primary-blue/20">
							<p className="text-base font-semibold text-foreground">
								💡 <span className="text-primary-blue">Sứ mệnh của chúng tôi:</span>{' '}
								Giúp công trình của bạn an toàn, đúng tiến độ với thiết bị đạt chuẩn
								quốc tế và đội ngũ thi công chuyên nghiệp.
							</p>
						</Card>
					</div>

					<div className="relative">
						<img
							className="rounded-xl shadow-lg w-full h-auto object-cover"
							alt="Đội ngũ thi công và thiết bị xây dựng của CÔNG TY TNHH THẠNH HƯNG THÀNH tại Long An"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwl-P19jIwg5kNqF6Hm0Vd384Q0kR2JmVcLjorZszzXDAhy98T8YyufkhospX8obiQg7mapAF4W8GTj0FdVrB_07NX_aWomjCMk58IriGrJgJt3vyar6iSqjYr7fG_fsMmdQGVt4TdZSbV2yod-fN34_cbf5jvzrebuYc7mwdZ8EZmHZXPDsLy7qC_Dc0_wGnJaJascrZu0ccP5vfwsI5Ex1Wz9-mRJneFGA2Euly-HWlgEDZFQPYJ966tnsC0y2HfB1bghsoTWTbr"
							width={600}
							height={400}
						/>
						<Card className="absolute bottom-4 right-4 bg-background/95 dark:bg-foreground/10 backdrop-blur-md p-4 shadow-xl border border-border/50">
							<div className="flex items-center gap-4">
								<div className="text-center">
									<p className="text-2xl font-bold text-primary-blue">10+</p>
									<p className="text-xs text-foreground/70 font-medium">
										năm kinh nghiệm
									</p>
								</div>
								<div className="h-10 w-px bg-border"></div>
								<div className="text-center">
									<p className="text-2xl font-bold text-primary-blue">300+</p>
									<p className="text-xs text-foreground/70 font-medium">
										công trình hoàn thành
									</p>
								</div>
								<div className="h-10 w-px bg-border"></div>
								<div className="text-center">
									<p className="text-2xl font-bold text-primary-blue">200+</p>
									<p className="text-xs text-foreground/70 font-medium">
										thiết bị hiện đại
									</p>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
