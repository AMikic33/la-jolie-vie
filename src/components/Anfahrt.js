export default function Anfahrt() {
  return (
    <section id="anfahrt" className="anfahrt-section">
      <div className="container">
        <h2 className="section-title">Anfahrt</h2>
        <p className="section-subtitle">So finden Sie uns</p>
        
        <div className="anfahrt-content">
          <div className="anfahrt-info">
            <div className="anfahrt-item">
              <h3>📍 Adresse</h3>
              <p>Martin-Luther Str. 24<br />81439 München</p>
            </div>

            <div className="anfahrt-item">
              <h3>🚇 Öffentliche Verkehrsmittel</h3>
              <p>
                <strong>U-Bahn:</strong><br/>U1, Haltestelle Wettersteinplatz, danach 9 Minuten zu Fuß.<br />
                U2, Haltestelle Silberhornstraße, danach 8 Minuten zu Fuß.<br />
                        
                <strong>Tram:</strong> <br />25 bis Tegernseer Landstraße, dann 2 Minuten zu Fuß.<br />
                <strong>Bus:</strong> <br />Linie X30 bis Tegernseer Landstraße, dann 2 Minuten zu Fuß.
              </p>
            </div>

            <div className="anfahrt-item">
              <h3>🚗 Mit dem Auto</h3>
              <p>
                Folgen Sie der A96 und fahren Sie auf die B2R Richtung Candidplatz / Candidstraße in 
                Untergiesing-Harlaching.Nehmen Sie anschließend die Ausfahrt Richtung Grünwald / Giesing / 
                Stadion / Zoo von der B2R.
                Nehmen Sie anschließend die Ausfahrt Richtung Grünwald / Giesing / Stadion / Zoo von der B2R.
              </p>
            </div>
          </div>

          <div className="anfahrt-map">
            <iframe
              src="https://maps.google.com/maps?q=48.11316320224432,11.57620395154476&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="La Jolie Vie Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
