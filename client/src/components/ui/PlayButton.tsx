import { FC } from 'react';

interface PlayButtonProps {
  onClick: () => void;
  className?: string;
}

const PlayButton: FC<PlayButtonProps> = ({ onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`absolute flex items-center justify-center bg-black/40 hover:bg-black/60 rounded-full w-16 h-16 md:w-20 md:h-20 transition-all duration-300 ${className}`}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="white" 
        className="w-10 h-10"
      >
        <path 
          d="M8 5.14v14l11-7-11-7z"
        />
      </svg>
    </button>
  );
};

export default PlayButton;