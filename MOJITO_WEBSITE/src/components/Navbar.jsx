import React from 'react'
import { navLinks } from '../../constants';

const Navbar = () => {
	return (
		<div>
			<nav>
				<a href="#home" className="flex justify-center gap-2">
          <img src="/images/logo.png" alt="logo"/>
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
