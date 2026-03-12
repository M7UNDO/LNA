import Placeholder from "../assets/user.png";

export default function LegalTeam() {
  return (
    <section className="about-section">
      <h2>Legal Team</h2>

      <div className="team-grid">
        <div className="team-member">
          <img className="profile" src={Placeholder} alt="" />
          <h3>Mr. Luvuyo Gavin Ayanda Ngengebule</h3>
          <p className="role">Director</p>
          <p>
            Founder and director of Ngengebule Attorneys Inc. He leads the firm's litigation and legal strategy while
            overseeing the firm's commitment to professional and client-focused legal services.
          </p>
          <div className="contact">
            <span class="material-symbols-outlined">call</span>
            <a href="tel:+27829283961"> +27 82 928 3961</a>
          </div>
          <div className="email">
            <span class="material-symbols-outlined">mail</span>
            <a href="mailto:info@ngengebule.co.za"> info@ngengebule.co.za</a>
          </div>
        </div>

        <div className="team-member">
          <img className="profile" src={Placeholder} alt="" />
          <h3>Ms Zakithi Tshabalala</h3>
          <p className="role">Consultant</p>
          <p>
            Consultant attorney, conveyancer, and notary, she advises clients on property transfers, estate administration, and notarial matters, ensuring smooth and legally compliant transactions.
          </p>
          <div className="contact">
            <span class="material-symbols-outlined">call</span>
            <a href="tel:+27614475504"> +27 61 447 5504</a>
          </div>
          <div className="email">
            <span class="material-symbols-outlined">mail</span>
            <a href="mailto:info@ngengebule.co.za"> info@ngengebule.co.za</a>
          </div>
        </div>
      </div>
    </section>
  );
}


//Next add a profile section when you click on picture