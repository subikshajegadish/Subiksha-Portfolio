import { ChevronIcon } from '../icons';

interface ArrowButtonProps {
  direction: 'left' | 'right';
  label: string;
  onClick: () => void;
}

export function ArrowButton({ direction, label, onClick }: ArrowButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="box-border flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-3 border-azure bg-navy p-0"
    >
      <ChevronIcon direction={direction} />
    </button>
  );
}
