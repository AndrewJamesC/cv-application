import PersonalDetails from "./PersonalDetails";
import Education from "./Education";
import Experience from "./Experience";

export default function Form(props) {
  return (
    <div>
      <PersonalDetails {...props} />
      <Education {...props} />
      <Experience {...props} />
    </div>
  );
}
