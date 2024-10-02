import React, { useEffect } from 'react';

const CalendlyBadgeWidget = () => {
  useEffect(() => {
    // Load Calendly widget.js script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize the Calendly badge widget when the script loads
    script.onload = () => {
      window.Calendly.initBadgeWidget({
        url: 'https://calendly.com/zilataiobc/book-an-apointment',
        text: 'Book an Apointment',
        color: '#00dc93',
        textColor: '#000000',
        branding: undefined,
      });
    };

    // Cleanup script tag when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <link
      href="https://assets.calendly.com/assets/external/widget.css"
      rel="stylesheet"
    />
  );
};

export default CalendlyBadgeWidget;
