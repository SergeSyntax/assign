import React from 'react';

type CallbackFunction = () => void;

type UseDialog = (
  initialState: boolean,
  lifeCycleOnOpen: CallbackFunction
) => {
  open: boolean;
  handleOpen: CallbackFunction;
  handleClose: CallbackFunction;
  handleTabPropagation: React.KeyboardEventHandler<HTMLDivElement>;
};

/**
 * hook that return function and indicator to handle dialog component.
 * @param lifeCycleOnOpen set a hook to un on each handleOpen initiation.
 * @param initialState set the initial value of open
 * @returns open boolean to indicate when to close and open the menu
 * @returns handleClickOpen set open to true and run lifeCycleOpen
 * @returns handleClose set open to false
 * @returns handleTabPropagation to lock the tab key inside the popup
 */
export const useDialog: UseDialog = (initialState, lifeCycleOnOpen) => {
  const [open, setOpen] = React.useState(initialState);

  const handleOpen = () => {
    setOpen(true);
    lifeCycleOnOpen();
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTabPropagation: React.KeyboardEventHandler<HTMLDivElement> = event => {
    if (event.key === 'Tab') {
      event.stopPropagation();
    }
  };

  return {
    open,
    handleOpen,
    handleClose,
    handleTabPropagation
  };
};
