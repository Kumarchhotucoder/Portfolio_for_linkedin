import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '917766861339';
  const defaultMessage = encodeURIComponent('Hi Chhotu, I saw your portfolio and would like to connect!');
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <div className="whatsapp-floating-wrapper" style={{
      position: 'fixed',
      bottom: '25px',
      left: '25px',
      zIndex: 9999,
      display: 'flex',
      alignItems: 'center'
    }}>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Chhotu Kumar"
        className="whatsapp-btn-pulse"
        style={{
          position: 'relative',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffffff',
          boxShadow: '0 4px 14px rgba(37, 211, 102, 0.45)',
          cursor: 'pointer',
          textDecoration: 'none',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease'
        }}
      >
        {/* Pulse wave 1 */}
        <span className="whatsapp-ripple ripple-1" />
        {/* Pulse wave 2 */}
        <span className="whatsapp-ripple ripple-2" />

        <FaWhatsapp size={32} style={{ position: 'relative', zIndex: 2 }} />

        {/* Tooltip on hover */}
        <span className="whatsapp-tooltip">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
