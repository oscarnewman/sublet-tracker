interface Sublet {
	image: string
	bedrooms: number
	rent: number
	area: string
	startMonth: string
	endMonth: string
}

const sublets: Sublet[] = [
	{
		image:
			'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1953&q=80',
		bedrooms: 3,
		rent: 1300,
		area: 'Governor',
		startMonth: 'May',
		endMonth: 'August',
	},
	{
		image:
			'https://images.unsplash.com/photo-1542299861-7c9d068a5edf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1001&q=80',
		bedrooms: 6,
		rent: 975,
		area: 'Transit',
		startMonth: 'June',
		endMonth: 'August',
	},
	{
		image:
			'https://images.unsplash.com/photo-1591438649454-b21e5072256e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
		bedrooms: 2,
		rent: 650,
		area: 'Ives',
		startMonth: 'June',
		endMonth: 'July',
	},
]

interface Props {
	sublet: Sublet
}
function SubletCard({ sublet }: Props) {
	return (
		<a
			href="#"
			className="rounded-lg overflow-hidden border-black border-2 h-full flex flex-col justify-between"
		>
			<div>
				<div
					style={{ backgroundImage: `url(${sublet.image})` }}
					className="bg-cover w-full h-48"
				/>
				<div className="p-4">
					<div className="flex text-gray-600 text-sm mb-2 space-x-4">
						<p>
							<i className="fas fa-calendar-alt text-gray-400 mr-2" />
							{sublet.startMonth} through {sublet.endMonth}
						</p>
					</div>
					<p className="font-bold text-lg leading-tight mb-2">
						{sublet.bedrooms} bedrooms near {sublet.area}
					</p>
				</div>
			</div>
			<p className="px-4 py-2 antialiased bg-black text-white font-bold flex justify-between items-center">
				<p>
					${sublet.rent} <span className="text-gray-500">/month</span>
				</p>
				<i className="fas fa-arrow-right" />
			</p>
		</a>
	)
}

export default function Home() {
	return (
		<div className="max-w-4xl mx-auto py-16">
			<div className="prose prose-lg mb-24">
				<h1>College Sublet Tracker</h1>
				<p className="lead">
					Need a place for the summer for yourself? For your friends? Search and
					browse the list below to find available sublets near campus.
				</p>
				<p>
					Are you looking for subletters? <a href="#">List your place here.</a>
				</p>
			</div>

			<div className="mb-8">
				<h2 className="text-2xl font-bold self-center mb-4">Latest Sublets</h2>
				<div className="grid grid-cols-4 gap-8">
					<div>
						<label
							htmlFor="people"
							className="block text-xs uppercase tracking-wide text-gray-700 font-medium mb-1"
						>
							Rooms
						</label>
						<select name="" id="people" className="block form-select w-full">
							<option value="1">Any</option>
							<option value="1">1</option>
						</select>
					</div>
					<div>
						<label
							htmlFor="people"
							className="block text-xs uppercase tracking-wide text-gray-700 font-medium mb-1"
						>
							Available
						</label>
						<select name="" id="people" className="block form-select w-full">
							<option value="1">Whenever</option>
							<option value="1">1</option>
						</select>
					</div>
					<div>
						<label
							htmlFor="people"
							className="block text-xs uppercase tracking-wide text-gray-700 font-medium mb-1"
						>
							From
						</label>
						<input
							type="currency"
							className="form-input block w-full"
							placeholder="$0 /month"
						/>
					</div>
					<div>
						<label
							htmlFor="people"
							className="block text-xs uppercase tracking-wide text-gray-700 font-medium mb-1"
						>
							To
						</label>
						<input
							type="currency"
							className="form-input block w-full"
							placeholder="Anything"
						/>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-3 gap-8">
				{sublets.map((sublet) => (
					<SubletCard key={sublet.image} sublet={sublet} />
				))}
			</div>
		</div>
	)
}
