//Code by Olivier Larose
//https://www.youtube.com/watch?v=E6PZvwITeU4

import { useEffect, useRef, use } from 'react';
import gsap from 'gsap';
import CursorContext from '../../contexts/CursorContext';

export default function Cursor() {
	const { size, color } = use(CursorContext);
	const circle = useRef<HTMLDivElement>(null);
	const mouse = useRef({ x: 0, y: 0 });

	const delayedMouse = useRef({
		x: 0,
		y: 0,
	});

	const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

	function moveCircle(x: number, y: number) {
		gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
	}

	function animate() {
		const { x, y } = delayedMouse.current;
		delayedMouse.current = {
			x: lerp(x, mouse.current.x, 0.095),
			y: lerp(y, mouse.current.y, 0.095),
		};
		window.requestAnimationFrame(animate);
		moveCircle(delayedMouse.current.x, delayedMouse.current.y);
	}

	function manageMouseMove(event: MouseEvent) {
		const { clientX, clientY } = event;
		mouse.current = { x: clientX, y: clientY };
	}

	useEffect(() => {
		animate();
		window.addEventListener('mousemove', manageMouseMove);
		return () => {
			window.removeEventListener('mousemove', manageMouseMove);
		};
	}, []);
	return (
		<div
			ref={circle}
			className={`fixed top-0 left-0 bg-${color} rounded-full mix-blend-exclusion transition-all duration-50 pointer-events-none`}
			style={{ width: size, height: size }}></div>
	);
}