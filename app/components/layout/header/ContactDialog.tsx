import {Button} from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import {ADDRESS, EMAIL_ADDRESS, PHONE_NUMBER} from '@/constants';
import {Mail, MapPin, Phone} from 'lucide-react';

export default function ContactDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="primary" className="hidden md:flex" size="lg">
					<span className="truncate flex items-center gap-2">Thông tin liên hệ</span>
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
				{/* Header section with gradient background */}
				<div className="bg-gradient-to-br from-blue-500 to-blue-600 px-6 py-4 text-white">
					<DialogHeader>
						<DialogTitle className="text-xl font-bold">Thông tin liên hệ</DialogTitle>
						<DialogDescription className="text-blue-100">
							Chúng tôi sẵn sàng trả lời mọi câu hỏi của bạn
						</DialogDescription>
					</DialogHeader>
				</div>

				{/* Main content area */}
				<div className="p-4 space-y-4">
					{/* Contact information cards */}
					<div className="space-y-4">
						{/* Address card */}
						<div className="flex gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30">
									<MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
								</div>
							</div>
							<div className="flex-1 min-w-0">
								<p className="text-sm font-semibold text-foreground">Địa chỉ</p>
								<p className="text-sm text-muted-foreground mt-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
									<a
										href={ADDRESS.url || '#'}
										target="_blank"
										rel="noopener noreferrer">
										{ADDRESS.string}
									</a>
								</p>
							</div>
						</div>

						{/* Phone card */}
						<div className="flex gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30">
									<Phone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
								</div>
							</div>
							<div className="flex-1 min-w-0">
								<p className="text-sm font-semibold text-foreground">
									Hotline / Zalo
								</p>
								<p className="text-sm text-muted-foreground mt-1">
									{(PHONE_NUMBER ?? '').replace(/^\+?84/, '0')}
								</p>
							</div>
						</div>

						{/* Email card */}
						<div className="flex gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 transition-colors">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30">
									<Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
								</div>
							</div>
							<div className="flex-1 min-w-0">
								<p className="text-sm font-semibold text-foreground">Email</p>
								<p className="text-sm text-muted-foreground mt-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
									<a
										href={`mailto:${EMAIL_ADDRESS}`}
										target="_blank"
										rel="noopener noreferrer">
										{EMAIL_ADDRESS}
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
