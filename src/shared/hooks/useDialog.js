import { useState } from 'react';

export const useDialog = openCb => {
  const [isOpen, setIsOpen] = useState(false);
  const openDialog = args => {
    openCb(args);
    setIsOpen(true);
  };
  const hideDialog = () => {
    setIsOpen(false);
  };
  return [isOpen, openDialog, hideDialog];
};

export default useDialog;
