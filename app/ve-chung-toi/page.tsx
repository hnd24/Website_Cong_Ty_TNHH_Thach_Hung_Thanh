import {Metadata} from 'next';
import {AboutHero} from './components/AboutHero';
import {AchievementsSection} from './components/Achievements';
import {ActivityGallerySection} from './components/ActivityGallery';
import CircularNavAboutUs from './components/CircularNavAboutUs';
import HistoryTimeline from './components/HistoryTimeline';
import {StorySection} from './components/StorySection';
import {TeamCultureSection} from './components/TeamCultureSection';
import {WhyChooseUsSection} from './components/WhyChooseUs';

export const metadata: Metadata = {
	title: 'Về chúng tôi | CÔNG TY TNHH THẠNH HƯNG THÀNH',
	description:
		'Tìm hiểu về CÔNG TY TNHH THẠNH HƯNG THÀNH – đối tác thi công & cho thuê thiết bị xây dựng uy tín tại Long An, với đội ngũ kỹ sư nhiều kinh nghiệm và quy trình vận hành thiết bị chặt chẽ.',
	alternates: {
		canonical: 'https://www.thanhhungthanh.vn/ve-chung-toi',
	},
	openGraph: {
		title: 'Về chúng tôi | CÔNG TY TNHH THẠNH HƯNG THÀNH',
		description:
			'Câu chuyện, đội ngũ và cách vận hành thiết bị của Thạnh Hưng Thành – hậu phương kỹ thuật phía sau các nhà thầu.',
		url: 'https://www.thanhhungthanh.vn/ve-chung-toi',
		type: 'website',
		locale: 'vi_VN',
	},
};

export default function IntroPage() {
	return (
		<>
			<AboutHero />
			<StorySection />
			<HistoryTimeline />
			<TeamCultureSection />
			<ActivityGallerySection />
			<AchievementsSection />
			<WhyChooseUsSection />
			<CircularNavAboutUs />
		</>
	);
}
