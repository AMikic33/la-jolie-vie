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
              <p>
              <strong>Martin-Luther Str. 24 81439 München</strong></p>
              <p>Der La Jolie Vie Salon liegt im Innenhof. Der Eingang befindet sich zwischen dem Café Violin und dem Billardlokal. </p>
            </div>

            <div className="anfahrt-item">
              <h3>🚇 Öffentliche Verkehrsmittel</h3>
              <p>
                <strong>U-Bahn</strong><br/>
                U2/U8, Haltestelle Silberhornstraße, danach 6 Minuten zu Fuß.<br />
                U1, Haltestelle Wettersteinplatz, danach 9 Minuten zu Fuß.<br />
                        
                <strong>Tram</strong> <br />25 bis Tegernseer Landstraße, dann 2 Minuten zu Fuß.<br />
                <strong>Bus</strong> <br />Linie X30 bis Tegernseer Landstraße, dann 2 Minuten zu Fuß.
              </p>
            </div>

            <div className="anfahrt-item">
              <h3>🚗 Mit dem Auto</h3>
              <p>
                Fahren Sie über den Mittleren Ring (B2R) und nehmen Sie die Ausfahrt Richtung "Giesing / Tegernseer Landstraße". <br/>
                Folgen Sie der "Tegernseer Landstraße" stadtauswärts und biegen Sie anschließend in die "Martin-Luther-Straße" ein.
              </p>
            </div>
            <div className="anfahrt-item">
              <h3>🅿️ Parkmöglichkeiten</h3>
              <p>
                Parkmöglichkeiten befinden sich direkt vor dem Salon, auf dem gleichen Parkplatz wie McDonald’s.
              </p>
            </div>
          </div>

          <div className="anfahrt-map">
            <iframe
              className="map-iframe"
              src="https://maps.google.com/maps?q=48.11316320224432,11.57620395154476&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
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
