/* eslint-disable react/prop-types */
export default function PreviewCv(props) {
  const { firstName, lastName, email, phoneNum, address } =
    props.personalDetails;
  const { startDate, endDate, location, school, degree, major } =
    props.education;
  return (
    <div className="cv-container">
      <header>
        <h1>
          {firstName} {lastName}
        </h1>
        <address>
          <a href={email}>{email}</a>
          <a href={phoneNum}>{phoneNum}</a>
          <p>{address}</p>
        </address>
      </header>
      <main>
        <section>
          <h2>Education</h2>
          <div className="education-info-container">
            <p>{startDate}</p>
            <p>{endDate}</p>
            <p>{location}</p>
          </div>
          <div className="degree-container">
            <p>{school}</p>
            <p>{degree}</p>
            <p>{major}</p>
          </div>
        </section>
        <section>
          {props.experience.map((job) => {
            return (
              <div key={job.id}>
                <h3>Work Experience</h3>
                <div className="work-info-container">
                  <p>{job.start}</p>
                  <p>{job.end}</p>
                  <p>{job.location}</p>
                </div>
                <div className="work-details-container">
                  <p>{job.companyName}</p>
                  <p>{job.title}</p>
                  <p>{job.description}</p>
                </div>
              </div>
            );
          })}
        </section>
      </main>
    </div>
  );
}
