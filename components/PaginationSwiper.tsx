import classNames from 'classnames';

interface DotsProps {
  count: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

export const PaginationSwiper = ({
  count,
  currentIndex,
  onDotClick,
}: DotsProps) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      {Array.from({ length: count }, (_, i) => (
        <div
          key={i}
          className={classNames(
            'm-1 h-2 w-2 rounded-full bg-gray-400 cursor-pointer border-0',
            {
              '!bg-blue-600': currentIndex === i,
            }
          )}
          aria-hidden
          onClick={() => onDotClick(i)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onDotClick(i);
            }
          }}
        />
      ))}
    </div>
  );
};
