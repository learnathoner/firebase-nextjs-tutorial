import Metatags from "../../components/Metatags";
import PostFeed from "../../components/PostFeed";
import UserProfile from "../../components/UserProfile";
import { getUserWithUsername, postToJSON } from "../../lib/firebase";

export async function getServerSideProps({ query }) {
	const { username } = query;

	const userDoc = await getUserWithUsername(username)

	if (!userDoc) {
		return {
			notFound: true
		}
	}

	const user = userDoc.data();
	const postsQuery = userDoc.ref.collection('posts').where('published', '==', 'true').orderBy('createdAt', 'desc').limit(5)
	const posts = (await postsQuery.get()).docs.map(postToJSON)

	return {
		props: { user, posts }
	}
}

export default function UserProfilePage({ user, posts }) {
	return (
		<main>
			<Metatags />
			<UserProfile user={user} />
			<PostFeed posts={posts} admin={false} />
		</main>
	)
}