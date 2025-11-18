import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {TechDocType} from '@/types';
import {ArrowDownToLine} from 'lucide-react';

type Props = {
	techDocs: TechDocType[];
};

export default function TechDocsSection({techDocs: docs}: Props) {
	// Nếu không có tài liệu thì không render
	if (!docs || docs.length === 0) {
		return null;
	}

	return (
		<section className="mt-16 mx-auto w-full max-w-7xl ">
			<h2 className="text-2xl font-bold text-foreground">Tài liệu kỹ thuật</h2>

			<div className="mt-6  grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{docs.map((doc, index) => (
					<Card
						key={index}
						className="p-2 flex items-center justify-between border-border text-foreground">
						<CardContent className="flex w-full items-center justify-between p-4">
							<div className="flex items-center gap-4">
								{/* Icon PDF */}
								<div className="flex h-10 w-10 items-center justify-center rounded-md bg-red-50 text-red-600 font-bold">
									PDF
								</div>

								<p className="font-semibold">{doc.name}</p>
								{/* <div>
									{doc.size && (
										<p className="text-sm text-muted-foreground">{doc.size}</p>
									)}
								</div> */}
							</div>

							{/* Nút download */}
							<Button
								variant="ghost"
								size="icon"
								asChild
								className="!p-4 bg-muted hover:scale-110 hover:shadow-md">
								<a href={doc.url} target="_blank" rel="noopener noreferrer">
									<ArrowDownToLine className="h-5 w-5" />
								</a>
							</Button>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
