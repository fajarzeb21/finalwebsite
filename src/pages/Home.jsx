import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="small-title">Stay Safe. Stay Secure.</p>

          <h1>Protect your digital world.</h1>

          <p className="hero-text">
            CyberShield helps you understand cybersecurity, protect your
            personal information, and build safer online habits.
          </p>

          <div className="hero-buttons">
            <Link to="/about" className="btn primary-btn">
              Learn More
            </Link>

            <Link to="/contact" className="btn secondary-btn">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="security-card">
          <div className="shield-icon">🛡️</div>

          <h2>Digital Security</h2>

          <p>
            Learn the basic practices that can help keep your digital life
            safer.
          </p>

          <div className="topic-grid">
            <div className="topic-box">
              <h4>Network</h4>
              <p>Security</p>
            </div>

            <div className="topic-box">
              <h4>Web</h4>
              <p>Security</p>
            </div>

            <div className="topic-box">
              <h4>Data</h4>
              <p>Protection</p>
            </div>

            <div className="topic-box">
              <h4>Online</h4>
              <p>Safety</p>
            </div>
          </div>
        </div>
      </section>

      <section className="focus-section">
        <div className="section-heading">
          <p className="small-title">Cybersecurity Basics</p>
          <h2>What We Focus On</h2>
          <p>
            Simple concepts that help you understand and improve your online
            security.
          </p>
        </div>

        <div className="focus-grid">
          <div className="info-card">
            <div className="card-number">01</div>
            <h3>Network Security</h3>
            <p>
              Learn how networks are protected from unauthorized access and
              harmful activity.
            </p>
          </div>

          <div className="info-card">
            <div className="card-number">02</div>
            <h3>Web Security</h3>
            <p>
              Understand common web security risks and how safer websites can
              be built.
            </p>
          </div>

          <div className="info-card">
            <div className="card-number">03</div>
            <h3>Data Protection</h3>
            <p>
              Learn how to protect personal and important information from
              unauthorized access.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;