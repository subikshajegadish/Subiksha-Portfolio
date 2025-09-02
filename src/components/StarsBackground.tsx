const StarsBackground = () => {
    return (
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
        {Array.from({ length: 60 }).map((_, i) => {
          const top = Math.random() * 100;
          const left = Math.random() * 100;
          const duration = 15 + Math.random() * 15; // 15–30s
          const delay = Math.random() * 10; // staggered start
          const size = 2 + Math.random() * 2; // 2–4px
  
          return (
            <svg
              key={i}
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="orange"
              className="absolute"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animation: `float-stars ${duration}s ease-in-out infinite`,
                animationDelay: `${delay}s`,
                opacity: 0.7 + Math.random() * 0.3,
              }}
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          );
        })}
      </div>
    );
  };
  
  export default StarsBackground;
  