// app/not-found.tsx

import {Button} from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function LoadingPage() {
	return (
		<div
			className="flex flex-col items-center justify-center gap-4"
			style={{height: 'calc(100vh - 80px)'}}>
			<Image
				src={`/loading.svg`}
				alt="loading icon"
				width={300}
				height={300}
				className="rounded-full bg-gray-400"
			/>
			<span className="text-3xl font-bold text-center">Không tìm thấy</span>
			<Link href="/">
				<Button className="bg-blue-600 hover:bg-blue-700" size="lg">
					Trở về trang chủ
				</Button>
			</Link>
		</div>
	);
}
