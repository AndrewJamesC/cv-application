import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";

export default function Form(props) {
  return (
    <form className="form">
      <PersonalDetails {...props} />
      <Education {...props} />
      <Experience {...props} />
    </form>
  );
}
