"use client";

import React, { useState, useEffect } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem("cookieBannerLastShown");
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // One week in milliseconds

    if (!lastShown || Date.now() - parseInt(lastShown, 10) > oneWeek) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieBannerLastShown", Date.now().toString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
      <span>
        We use cookies to improve your experience. By using our site, you agree
        to our cookie policy.
      </span>
      <div>
        <button
          onClick={handleAccept}
          className="bg-red-500 px-8 py-2 rounded mb-2 lg:mb-0 lg:mr-4 hover:underline"
        >
          Decline
        </button>
        <button
          onClick={handleAccept}
          className="bg-green-500 px-8 py-2 rounded hover:underline"
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
