import {ADDRESS, EMAIL_ADDRESS, PHONE_NUMBER} from '@/constants';
import {Suspense} from 'react';
import ContactDialog from './ContactDialog';
import {Logo} from './Logo';
import {Navigator} from './navigator';
import {NavigatorSkeleton} from './navigator/Skeleton';

const localBusinessJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'LocalBusiness',
	name: 'CÔNG TY TNHH THẠNH HƯNG THÀNH',
	address: ADDRESS,
	telephone: PHONE_NUMBER,
	email: EMAIL_ADDRESS,
	areaServed: 'Long An, Tiền Giang, TP.HCM',
	description: 'Thi công nền móng & cho thuê thiết bị xây dựng uy tín, thiết bị sẵn kho 24/7.',
};

export function Header() {
	return (
		<header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-gray-200 bg-white/90 backdrop-blur">
			<script
				type="application/ld+json"
				// eslint-disable-next-line react/no-danger
				dangerouslySetInnerHTML={{__html: JSON.stringify(localBusinessJsonLd)}}
			/>
			<div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8">
				<Logo />
				<div className="flex gap-6">
					<Suspense fallback={<NavigatorSkeleton />}>
						<Navigator />
					</Suspense>
					<ContactDialog />
				</div>
			</div>
		</header>
	);
}
