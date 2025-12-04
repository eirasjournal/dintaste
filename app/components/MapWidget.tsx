'use client'; // Obligatoriu, pentru că harta rulează în browser
import { useEffect, useRef } from 'react';

export default function MapWidget() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Verificăm dacă scriptul a fost deja adăugat ca să nu apară de 2 ori
    if (containerRef.current && containerRef.current.innerHTML === "") {
      const script = document.createElement("script");
      script.src = "//rf.revolvermaps.com/0/0/8.js?i=5alg43m8j13&m=0c&c=ff0000&cr1=ffffff&f=arial&l=33&bv=45&cw=fe98ff&cb=221f38";
      script.async = true;
      script.type = "text/javascript";
      
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    // Aici va apărea harta. Poți centra div-ul cu clase CSS/Tailwind
    <div ref={containerRef} style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }} />
  );
}