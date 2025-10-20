import React from 'react'
import { navLinks } from '../constants';

const Navbar = () => {
	return (
		<div>
			<nav className='flex items-center justify-between'>
				<a href="#home" className="flex items-center gap-2">
					<p>Velvet Pour</p>
				</a>

				<ul>
					{navLinks.map((link) => (
						<li key={link.id}>
							<a href={`#${link.id}`}>{link.title}</a>
						</li>
					))}
				</ul>
			</nav>

		</div>
	)
}

export default Navbar
