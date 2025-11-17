// components/sections/hero.tsx

import {Button} from '@/components/ui/button';
import {ACHIEVEMENTS} from '@/constants';

export function HeroSection() {
	return (
		<section id="hero" className=" scroll-mt-20 relative w-full">
			{/* Background hình + overlay */}
			<div
				className="flex min-h-[560px] items-center justify-center bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `linear-gradient(to top, rgba(10, 35, 66, 0.78), rgba(10, 35, 56, 0.6)), url('/images/hero_backgroundpng.png')`,
				}}>
				{/* Nội dung */}
				<div className="max-w-5xl px-4 py-20 text-center text-white">
					{/* Title */}
					<h1 className="text-4xl font-black md:text-6xl tracking-tighter">
						Đối Tác Thi Công &amp; Thiết Bị Xây Dựng Hàng Đầu Tại Long An
					</h1>

					{/* Subtitle */}
					<p className="mt-4 text-lg font-light text-gray-200 md:text-xl">
						Từ thi công nền móng đến cung cấp thiết bị – đồng hành trong hơn{' '}
						{ACHIEVEMENTS.numberCompletedProjects.value} công trình thực tế.
					</p>

					{/* Action buttons */}
					<div className="mt-10 flex flex-wrap justify-center gap-4">
						<Button
							variant="primary"
							className=" py-6 text-base font-semibold "
							size="lg">
							<a href="#completed_projects">Công trình đã thực hiện</a>
						</Button>

						<Button
							className=" py-6 !text-gray-900 text-base font-bold bg-gray-100 text-navy-blue hover:bg-gray-200"
							size="lg">
							<a href="#featured_equipments">Thiết bị nổi bật</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
