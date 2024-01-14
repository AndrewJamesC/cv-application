export default function PreviewCv() {
  return (
    <header>
      <h1>Firstname Lastname</h1>
      <address>
        <a href="">email@email.com</a>
        <a href="">000-0000-0000</a>
        <p>Location</p>
      </address>
      <main>
        <section>
          <h2>Education</h2>
          <div className="education-info-container">
            <p>Start date</p>
            <p>End Date</p>
            <p>Location</p>
          </div>
          <div className="degree-container">
            <p>Uni Name</p>
            <p>Degree name</p>
            <p>Majors</p>
          </div>
        </section>
        <section>
          <h3>Work Experience</h3>
          <div className="work-info-container">
            <p>Start</p>
            <p>End</p>
            <p>Location</p>
          </div>
          <div className="work-details-container">
            <p>Company Name</p>
            <p>Job Title</p>
            <p>description</p>
          </div>
        </section>
      </main>
    </header>
  );
}
