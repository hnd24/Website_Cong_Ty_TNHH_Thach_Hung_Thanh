'use client';

import {Button} from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function ErrorPage() {
	// refresh page function
	const refreshPage = () => {
		window.location.reload();
	};

	return (
		<div
			className="flex flex-col items-center justify-center gap-4"
			style={{height: 'calc(100vh - 80px)'}}>
			<Image
				src={`/error.svg`}
				alt="error icon"
				width={300}
				height={300}
				className="rounded-full bg-gray-400"
			/>
			<span className="text-3xl font-bold text-center">Xảy ra lỗi</span>
			<div className="flex">
				<Link href="/">
					<Button className="bg-blue-600 hover:bg-blue-700 rounded-r-none" size="lg">
						Về trang chủ
					</Button>
				</Link>
				<Button
					className="bg-gray-600 hover:bg-gray-700 rounded-l-none"
					size="lg"
					onClick={refreshPage}>
					Tải lại trang
				</Button>
			</div>
		</div>
	);
}
