import {Button} from '@/components/ui/button';
import {ACHIEVEMENTS} from '@/constants';
import Link from 'next/link';

export function HeroSection() {
	return (
		<section id="hero" aria-labelledby="hero-heading" className="relative w-full scroll-mt-20">
			{/* Background hình + overlay */}
			<div
				className="flex min-h-[560px] items-center justify-center bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage:
						"linear-gradient(to top, rgba(10, 35, 66, 0.85), rgba(10, 35, 56, 0.7)), url('/images/hero_backgroundpng.png')",
				}}>
				{/* Nội dung */}
				<div className="max-w-5xl px-4 py-20 text-center text-white">
					{/* Company tag / subheading */}
					<p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-200/80">
						CÔNG TY TNHH THẠNH HƯNG THÀNH
					</p>

					{/* Title */}
					<h1
						id="hero-heading"
						className="mt-3 text-4xl font-black tracking-tighter md:text-6xl">
						Đối tác thi công &amp; cho thuê thiết bị xây dựng hàng đầu tại Long An
					</h1>

					{/* Subtitle */}
					<p className="mt-4 text-lg font-light text-gray-200 md:text-xl">
						Từ thi công nền móng đến cung cấp thiết bị xây dựng – đồng hành trong hơn{' '}
						<strong className="font-semibold">
							{ACHIEVEMENTS.numberCompletedProjects.value} công trình thực tế
						</strong>{' '}
						tại Long An và khu vực lân cận.
					</p>

					{/* Action buttons */}
					<div className="mt-10 flex flex-wrap justify-center gap-4">
						<Button
							asChild
							variant="primary"
							size="lg"
							className="py-6 text-base font-semibold">
							<Link href="#completed_projects">Xem công trình đã thực hiện</Link>
						</Button>

						<Button
							asChild
							variant="outline"
							size="lg"
							className=" py-6 !text-gray-900 font-bold text-navy-blue ">
							<Link href="#featured_equipments">Xem thiết bị nổi bật</Link>
						</Button>
					</div>

					{/* Supporting SEO text (ngắn, thêm keyword nhẹ) */}
					<p className="mt-6 text-xs text-gray-300 md:text-sm">
						Chuyên thi công xây dựng, san lấp, nền móng và cho thuê thiết bị đào, ủi,
						cần cẩu, xe ben, xe trộn bê tông cho các dự án dân dụng và công nghiệp.
					</p>
				</div>
			</div>
		</section>
	);
}
