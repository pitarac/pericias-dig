"use client"; // Indica que esse componente é um Client Component

import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isBlocked, setIsBlocked] = useState<boolean>(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    const declined = localStorage.getItem('cookieDeclined');
    
    // Se a pessoa não aceitou nem recusou cookies, mostramos o popup
    if (!consent && !declined) {
      setIsVisible(true);
    }

    // Se a pessoa recusou cookies, bloqueamos o conteúdo
    if (declined) {
      setIsBlocked(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
    setIsBlocked(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieDeclined', 'true');
    setIsVisible(false);
    setIsBlocked(true); // Bloqueia o conteúdo
  };

  if (isBlocked) {
    return (
      <div className="cookie-blocked">
        <p>Você recusou o uso de cookies. Para acessar o site, é necessário aceitar os cookies.</p>
        <button onClick={handleAccept} className="btn-accept">Aceitar Cookies</button>
      </div>
    );
  }

  return isVisible ? (
    <div className="cookie-consent">
      <div className="cookie-content">
        <p>
          Utilizamos cookies para melhorar sua experiência no nosso site. Ao continuar navegando, você concorda com a nossa
          <a href="/politica-de-cookies"> Política de Cookies</a>.
        </p>
        <button onClick={handleAccept} className="btn-accept">Aceitar</button>
        <button onClick={handleDecline} className="btn-decline">Recusar</button>
      </div>
    </div>
  ) : null;
};

export default CookieConsent;
