import { PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { motion, AnimatePresence } from 'framer-motion';

export default function Modal({
	children,
	open,
	onClose,
}: {
	children: PropsWithChildren;
	open: boolean;
	onClose: () => void;
}) {
	useEffect(() => {
		if (!open) return;

		const handleKey = (event: KeyboardEvent) => {
			if (event.key === 'Escape') onClose();
		};

		document.addEventListener('keydown', handleKey);

		return () => document.removeEventListener('keydown', handleKey);
	}, [open, onClose]);

	useEffect(() => {
		if (!open) return;
		const id = setTimeout(() => onClose(), 3000);
		return () => clearTimeout(id);
	}, [open, onClose]);

	return (
		<AnimatePresence>
			{open && (
				<motion.div
					className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
             bg-primary-white rounded-md text-zinc-500 w-72 min-h-56 m-auto flex flex-col items-center justify-between p-5 z-50 shadow-2xl/30 shadow-black'
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.95 }}
					transition={{ duration: 0.7 }}>
					<div className='w-full text-center flex flex-col gap-4 justify-between'>
						{children}
						<button
							onClick={onClose}
							className='px-4 py-3 rounded border-2 text-primary-white font-semibold 
                 bg-primary-black w-full hover:bg-primary-neutral 
                 active:text-primary-black active:bg-primary-white 
                 active:shadow-bottom transition-colors'>
							Ok
						</button>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
