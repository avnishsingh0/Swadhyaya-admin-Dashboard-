export interface HeaderPopperWrapperProps {
    onClose: () => void;
    handleClickOutside: (event: MouseEvent) => void;
    children: React.ReactNode;
    className:string;
  }