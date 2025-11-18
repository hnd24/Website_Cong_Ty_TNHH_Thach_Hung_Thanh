// app/not-found.tsx

import Image from 'next/image';

export default function LoadingPage() {
	return (
		<div
			className="flex flex-col items-center justify-center gap-4"
			style={{height: 'calc(100vh - 80px)'}}>
			<Image
				src={`/loading.svg`}
				alt="loading icon"
				width={300}
				height={200}
				className="rounded-full bg-gray-400"
			/>
			<span className="text-3xl font-bold text-center">Đang tải...</span>
		</div>
	);
}
