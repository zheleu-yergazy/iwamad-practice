import Card from "../components/ui/Card";

function Contact() {
  return (
    <main className="page-container">
      <section className="contact-page">
        <h1>Contact Me</h1>

        <p className="page-description">
          Feel free to contact me for questions or collaboration.
        </p>

        <Card className="contact-card">
          <div className="contact-item">
            <span className="contact-label">Email</span>
            <a href="mailto:y_zheleu@kbtu.kz">
              y_zheleu@kbtu.kz
            </a>
          </div>

          <div className="contact-item">
            <span className="contact-label">University</span>
            <p>Kazakhstan-British Technical University</p>
          </div>

          <div className="contact-item">
            <span className="contact-label">Location</span>
            <p>Almaty, Kazakhstan</p>
          </div>
        </Card>
      </section>
    </main>
  );
}

export default Contact;