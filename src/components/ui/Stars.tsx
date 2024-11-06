const Stars = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1 min-h-[24px]">
      {[1, 2, 3, 4, 5].map((star) => {
        if (star <= Math.floor(rating)) {
          // Full star
          return (
            <svg key={star} className="w-4 h-4 fill-black" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          );
        } else if (star === Math.ceil(rating) && !Number.isInteger(rating)) {
          // Partial star
          const percent = (rating % 1) * 100;
          return (
            <svg key={star} className="w-4 h-4" viewBox="0 0 24 24">
              <defs>
                <linearGradient id={`star-gradient-${star}`}>
                  <stop offset={`${percent}%`} stopColor="black" />
                  <stop offset={`${percent}%`} stopColor="#D1D5DB" />
                </linearGradient>
              </defs>
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                fill={`url(#star-gradient-${star})`}
              />
            </svg>
          );
        } else {
          // Empty star
          return (
            <svg
              key={star}
              className="w-4 h-4 fill-gray-300"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          );
        }
      })}
    </div>
  );
};

export default Stars;
