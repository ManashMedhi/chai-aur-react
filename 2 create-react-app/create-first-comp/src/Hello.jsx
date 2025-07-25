function Hello() {
  let myName = "manash";

  let fullName = () => {
    return "Manash Medhi";
  };

  return (
    <h3>
      Hello this is the future speaking. I am a student of Web Dev and my name is {fullName()}
    </h3>
  );
}

export default Hello;
