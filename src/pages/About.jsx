function About() {
  return (
    <main className="page-container">
      <section className="page-header">
        <p className="small-title">About Us</p>

        <h1>Making cybersecurity easier to understand.</h1>

        <p>
          CyberShield is a simple cybersecurity website created to help people
          understand online security and develop better digital habits.
        </p>
      </section>

      <section className="about-section">
        <div className="about-text">
          <h2>Why Cybersecurity Matters</h2>

          <p>
            We use the internet every day for communication, education,
            shopping, banking, and many other activities. This makes protecting
            our digital information very important.
          </p>

          <p>
            Cybersecurity helps protect devices, networks, accounts, and
            personal information from different online threats.
          </p>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <h3>Privacy</h3>
            <p>
              Keep your personal information safe and control who can access
              it.
            </p>
          </div>

          <div className="about-card">
            <h3>Protection</h3>
            <p>
              Use good security practices to reduce online risks and threats.
            </p>
          </div>

          <div className="about-card">
            <h3>Awareness</h3>
            <p>
              Learn about common threats so you can make safer decisions
              online.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;