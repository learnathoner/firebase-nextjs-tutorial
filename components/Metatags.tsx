import Head from 'next/head';

export default function Metatags({
	title = 'Mike\'s Blog Site',
	description = 'Random thoughts on things',
	image = 'https://bitsofco.de/content/images/2018/12/broken-1.png',
}) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@fireship_dev" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />

			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
		</Head>
	);
}