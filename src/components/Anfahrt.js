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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2664.5!2d11.5!3d48.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA2JzAwLjAiTiAxMcKwMzAnMDAuMCJF!5e0!3m2!1sde!2sde!4v1234567890"
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
