export const createRandomPoster = () => {
	const id = Math.floor(Math.random() * 26) + 1;
	const titleSeed = Math.floor(Math.random() * 10000);

	return {
		src: `/assets/ktx/image-${id}.ktx`,
		tileSrc: `/assets/ktx/image-${id}.ktx`,
		backdrop: `/assets/ktx/image-${id}.ktx`,
		href: `/entity/movie/${titleSeed}`,
		shortTitle: `Poster ${titleSeed}`,
		title: `Demo Title ${titleSeed}`,
		overview: `Demo overview for poster ${titleSeed}.`,
		item: { id: titleSeed, media_type: "movie" },
		entityInfo: {
			type: "movie",
			id: String(titleSeed)
		},
		heroContent: {
			title: `Demo Title ${titleSeed}`,
			description: `Demo overview for poster ${titleSeed}.`
		}
	};
};

export const createBrowseMockFetcher = (totalItems = 84, pageSize = 21) => {
	const items = Array.from({ length: totalItems }, () => createRandomPoster());

	return async (page: number) => {
		const start = Math.max(0, (page - 1) * pageSize);
		const end = start + pageSize;
		return items.slice(start, end);
	};
};
