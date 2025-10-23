import React from 'react';
import { useRef } from "react";
import { navLinks } from '../../constants/index.js';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger, useGSAP)

const Navbar = () => {
	const navRef = useRef();

	useGSAP(() => {
		const navTween = gsap.timeline({
			scrollTrigger: {
				trigger: navRef.current,
				start: 'bottom top'
			}
		});

		navTween.fromTo(navRef.current, {backgroundColor: 'transparent'},
			{backgroundColor: '#00000050',
			backgroundFilter: 'blur 10px',
			duration: 1,
			ease: 'power1.inOut'
		})
	}, []);
	return (
		<div>
			<nav ref={navRef}>
				<a href="#home" className="flex items-center gap-2">
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
