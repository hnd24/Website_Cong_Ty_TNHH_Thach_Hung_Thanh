import {Card} from '@/components/ui/card';
import {CheckSquare2 as ChessQueen, Eye, Rocket} from 'lucide-react';

export function AboutHero() {
	return (
		<section
			id="about-hero"
			className="bg-background/80 scroll-mt-20 flex flex-col items-center px-4 py-16  md:py-20">
			<div className="w-full max-w-5xl">
				<div className="flex flex-col items-center gap-4 text-center">
					<p className="text-primary-blue text-lg font-bold leading-tight">
						Về chúng tôi
					</p>
					<h1 className="text-foreground text-4xl md:text-5xl font-black leading-tight tracking-tight text-balance">
						Đối tác tin cậy cho mọi công trình
					</h1>
					<p className="max-w-3xl text-foreground/70 text-lg font-normal leading-relaxed">
						CÔNG TY TNHH THẠNH HƯNG THÀNH cam kết cung cấp giải pháp toàn diện về thi
						công xây dựng và cho thuê thiết bị xây dựng với chất lượng vượt trội, đội
						ngũ chuyên nghiệp, và tiến độ đảm bảo.
					</p>
				</div>

				<div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
					<Card className="flex flex-col gap-4 p-6 text-center items-center hover:shadow-lg hover:border-primary-blue/50 transition-all duration-300 bg-card/50 hover:bg-card">
						<div className="p-3 bg-primary-blue/10 rounded-lg">
							<Rocket size={32} className="text-primary-blue" />
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="text-foreground text-lg font-bold">Sứ mệnh</h2>
							<p className="text-foreground/70 text-sm leading-relaxed">
								Cung cấp dịch vụ thi công xây dựng và cho thuê thiết bị xây dựng an
								toàn, hiệu quả, góp phần vào sự thành công của khách hàng.
							</p>
						</div>
					</Card>

					<Card className="flex flex-col gap-4 p-6 text-center items-center hover:shadow-lg hover:border-primary-blue/50 transition-all duration-300 bg-card/50 hover:bg-card">
						<div className="p-3 bg-primary-blue/10 rounded-lg">
							<Eye size={32} className="text-primary-blue" />
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="text-foreground text-lg font-bold">Tầm nhìn</h2>
							<p className="text-foreground/70 text-sm leading-relaxed">
								Trở thành đối tác hàng đầu trong lĩnh vực cho thuê thiết bị xây dựng
								tại Việt Nam, tiên phong áp dụng công nghệ và quy trình vận hành tối
								ưu.
							</p>
						</div>
					</Card>

					<Card className="flex flex-col gap-4 p-6 text-center items-center hover:shadow-lg hover:border-primary-blue/50 transition-all duration-300 bg-card/50 hover:bg-card">
						<div className="p-3 bg-primary-blue/10 rounded-lg">
							<ChessQueen size={32} className="text-primary-blue" />
						</div>
						<div className="flex flex-col gap-2">
							<h2 className="text-foreground text-lg font-bold">Giá trị cốt lõi</h2>
							<p className="text-foreground/70 text-sm leading-relaxed">
								Chất lượng, Uy tín, Chuyên nghiệp, An toàn. Những giá trị này là nền
								tảng cho mọi quyết định và hoạt động kinh doanh.
							</p>
						</div>
					</Card>
				</div>
			</div>
		</section>
	);
}
