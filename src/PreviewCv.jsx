/* eslint-disable react/prop-types */
export default function PreviewCv(props) {
  const { firstName, lastName, email, phoneNum, address } =
    props.personalDetails;
  const { startDate, endDate, location, school, degree, major } =
    props.education;
  return (
    <div className="cv-container">
      <header className="header">
        {!firstName && <p className="example">EXAMPLE</p>}
        <h1>
          {firstName ? firstName : "Jimmy"} {lastName ? lastName : "Conway"}
        </h1>
        <address>
          <a className="email" href={email}>
            {email ? email : "name@email.com"}
          </a>
          <a href={phoneNum}>{phoneNum ? phoneNum : "000-1234-5678"}</a>
          <p>{address ? address : "New York City, New York"}</p>
        </address>
      </header>
      <main>
        <section className="education-section">
          <h2>Education</h2>
          <div className="education-flexbox">
            <div className="education-info-container">
              <p>{startDate ? startDate : "1993-01-01"}</p>
              <p>{endDate ? endDate : "2023-01-01"}</p>
              <p>{location ? location : "New York City"}</p>
            </div>
            <div className="degree-container">
              <p>{school ? school : "Harvard University"}</p>
              <p>{degree ? degree : "Bachelor of Arts"}</p>
              <p>{major ? major : "History"}</p>
            </div>
          </div>
        </section>
        <section className="experience-section">
          {props.experience.map((job) => {
            return (
              <div key={job.id}>
                <h3>Work Experience</h3>
                <div className="work-flexbox">
                  <div className="work-info-container">
                    <p>{job.start ? job.start : "2003-01-01"}</p>
                    <p>{job.end ? job.end : "2023-01-01"}</p>
                    <p>{job.location ? job.location : "New York City"}</p>
                  </div>
                  <div className="work-details-container">
                    <p>
                      {job.companyName
                        ? job.companyName
                        : "Lucchese crime family"}
                    </p>
                    <p>{job.title ? job.title : "Family Associate"}</p>
                    <p>
                      {job.description
                        ? job.description
                        : "Organizing the Lufthansa heist."}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
