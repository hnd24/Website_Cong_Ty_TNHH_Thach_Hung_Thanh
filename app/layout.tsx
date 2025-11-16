// app/layout.tsx
import type {Metadata} from 'next';
import Footer from './components/layout/footer';
import {Header} from './components/layout/header';
import './globals.css';

export const metadata: Metadata = {
	title: 'CÔNG TY TNHH THẠNH HƯNG THÀNH - Đối Tác Thi Công & Thiết Bị Xây Dựng Hàng Đầu',
	description:
		'Thi công nền móng, san lấp, cho thuê & mua bán thiết bị xây dựng tại Long An với hơn 300 công trình thực tế.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="vi" suppressHydrationWarning className="scroll-smooth ">
			<body className="bg-background-light dark:bg-background-dark font-display text-dark-gray dark:text-light-gray flex flex-col min-h-screen">
				<Header />
				<main className="mt-16 flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
