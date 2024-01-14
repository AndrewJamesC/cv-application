/* eslint-disable react/prop-types */
export default function PreviewCv(props) {
  return (
    <header>
      <h1>
        {props.personalDetails.firstName} {props.personalDetails.lastName}
      </h1>
      <address>
        <a href={props.personalDetails.email}>{props.personalDetails.email}</a>
        <a href={props.personalDetails.phoneNum}>
          {props.personalDetails.phoneNum}
        </a>
        <p>{props.personalDetails.address}</p>
      </address>
      <main>
        <section>
          <h2>Education</h2>
          <div className="education-info-container">
            <p>{props.education.startDate}</p>
            <p>{props.education.endDate}</p>
            <p>{props.education.location}</p>
          </div>
          <div className="degree-container">
            <p>{props.education.school}</p>
            <p>{props.education.degree}</p>
            <p>{props.education.major}</p>
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
    </header>
  );
}
