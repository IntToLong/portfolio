// import { PropsWithChildren, useRef } from 'react';
// import { createPortal } from 'react-dom';
// import CrossIcon from '../../assets/cross.svg?react';

// export default function Modal({
// 	children,
// 	open,
// }: {
// 	children: PropsWithChildren;
// 	open: boolean;
// }) {
// 	const modal = useRef<HTMLDialogElement>(null)!;
// 	if (open) {
// 		if (modal.current) {
// 			modal.current.showModal();
// 		}
// 	}
// 	return createPortal(
// 		<dialog
// 			ref={modal}
// 			className='bg-primary-white border-2 rounded-md text-zinc-500 w-72 h-56 m-auto flex flex-col p-5'>
// 			<div className='self-end'>
// 				<CrossIcon className='w-10 h-10' />
// 			</div>
// 			{children}
// 		</dialog>,
// 		document.body
// 	);
// }
