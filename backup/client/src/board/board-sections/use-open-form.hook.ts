import { useRef, useState } from 'react';

/**
 *
 * @param milliseconds if you use open form with a collapse animation in height it don't effect the scroll if you use it before the animation, therefore you can set in how much milliseconds to trigger the scroll.
 * @returns
 */
export const useOpenForm = (milliseconds: number) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleOpen: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setOpen(true);
    setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth' }), milliseconds);
  };

  const handleClose = () => setOpen(false);

  const handleClickAway = (e: MouseEvent | TouchEvent) => {
    if (isOpen) handleClose();
    e.stopPropagation();
  };

  return { ref, isOpen, handleOpen, handleClose, handleClickAway };
};
