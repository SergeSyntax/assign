import { useRef, useState } from 'react';

/**
 *
 * @param milliseconds if you use open form with a collapse animation in height it don't effect the scroll if you use it before the animation, therefore you can set in how much milliseconds to trigger the scroll.
 * @returns
 */
export const useOpenForm = (milliseconds: number) => {
  const [openForm, setOpenForm] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const handleOpen: React.MouseEventHandler<HTMLButtonElement> = e => {
    setOpenForm(true);
    setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth' }), milliseconds);
    e.stopPropagation();
  };

  const handleClose = () => setOpenForm(false);

  const handleClickAway = (e: MouseEvent | TouchEvent) => {
    if (openForm) handleClose();
    e.stopPropagation();
  };

  return { ref, openForm, handleOpen, handleClose, handleClickAway };
};
