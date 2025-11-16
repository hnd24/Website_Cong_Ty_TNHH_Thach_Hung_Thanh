import ContactDialog from './ContactDialog';
import {Logo} from './Logo';
import {Navigator} from './navigator';

export function Header() {
	return (
		<header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-gray-200 bg-white/90 backdrop-blur">
			<div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8">
				<Logo />
				<div className="flex gap-6">
					<Navigator />
					<ContactDialog />
				</div>
			</div>
		</header>
	);
}
