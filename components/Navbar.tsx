import Link from 'next/link'
import { useContext } from 'react'
import toast from 'react-hot-toast'

import { UserContext } from '../lib/context'

export default function Navbar() {
	const { user, username } = useContext(UserContext)

	return (
		<nav className="navbar">
			<ul>
				<li>
					<Link href="/">
						<button className="btn-logo" onClick={() => toast.success('clicked!')}>FEED</button>
					</Link>
				</li>


				{/* Logged in show admin and user page */}
				{username && (
					<>
						<li className="push-left">
							<Link href="/admin">
								<button className="btn-blue">Write Posts</button>
							</Link>
						</li>
						<li>
							<Link href={`/${username}`}>
								<img src={user?.photoURL} />
							</Link>
						</li>
					</>
				)}

				{/* Not logged in show sign in button */}
				{!username && (
					<li>
						<Link href="/enter">
							<button className="btn-blue">Log in</button>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	)
}