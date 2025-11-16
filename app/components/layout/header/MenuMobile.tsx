'use client';
import {Button} from '@/components/ui/button';
import {Separator} from '@/components/ui/separator';
import {Sheet, SheetContent, SheetTitle, SheetTrigger} from '@/components/ui/sheet';
import {EMAIL_ADDRESS, navItems, PHONE_NUMBER} from '@/constants';
import {Menu, X} from 'lucide-react';
import Link from 'next/link';
import {useState} from 'react';

export default function MenuMobile() {
	const [open, setOpen] = useState(false);

	return (
		<div className="flex items-center gap-3">
			<Sheet open={open} onOpenChange={setOpen}>
				<SheetTrigger asChild>
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden text-foreground hover:bg-accent transition-all duration-200">
						{open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</Button>
				</SheetTrigger>
				<SheetTitle />
				<SheetContent
					side="right"
					className="w-72 p- from-background to-muted/5 border-l border-border">
					<nav className="flex flex-col gap-1 p-4">
						{navItems.map((item, index) => (
							<Link
								key={item.label}
								href={item.href}
								className="group relative flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium text-foreground transition-all duration-300 hover:bg-primary/10 active:bg-primary/15 overflow-hidden"
								onClick={() => setOpen(false)}>
								<div className="absolute inset-0 bg-primary/5 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

								<span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
									{item.label}
								</span>

								<div className="absolute inset-y-0 left-0 w-1 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-r" />
							</Link>
						))}
						<Separator />

						<Button
							asChild
							className="mt-4 w-full bg-blue-500 hover:bg-blue-400"
							size="sm">
							<a href={`tel:${PHONE_NUMBER}`}>
								Hotline: {(PHONE_NUMBER ?? '').replace(/^\+?84/, '0')}
							</a>
						</Button>
						<Button
							asChild
							className="mt-4 w-full bg-blue-500 hover:bg-blue-400"
							size="sm">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href={`mailto:${EMAIL_ADDRESS}`}>
								Email: {EMAIL_ADDRESS}
							</a>
						</Button>
					</nav>

					<div className="absolute bottom-0 left-0 right-0 px-6 py-6 border-t border-border/50 bg-gradient-to-t from-muted/10 to-transparent">
						<p className="text-sm text-muted-foreground">
							Công ty TNHH Thạch Hưng Thành
						</p>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	);
}
