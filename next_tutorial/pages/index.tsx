import Layout from '../components/MyLayouts';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { NextPage } from 'next';

type Props = {
	shows: Shows[];
};

export type Shows = {
	show: Show;
};

export type Show = {
	id: string;
	name: string;
	summary: string;
	image: Image;
};

export type Image = {
	medium: string;
};

const Index: NextPage<Props> = props => (
	<Layout>
		<h1>Batman TV Shows</h1>
		<ul>
			{props.shows.map(({ show }) => (
				<li key={show.id}>
					<Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
						<a>{show.name}</a>
					</Link>
				</li>
			))}
		</ul>
	</Layout>
);

Index.getInitialProps = async () => {
	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
	const data = await res.json();

	console.log(`Show data fetched. Count: ${data.length}`);

	return {
		shows: data
	};
};

export default Index;