import React, { useState } from "react";

function Forms() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contact: undefined,
    gender: "",
    subject: "",
    resume: "",
    url: "",
    choice: "",
    about: "",
  });

  const handleChange = (event) => {
    event.preventDefault();
    // console.log("handleChange");
    const { name, value } = event.target;

    // if (event.target.name === "contact") {
    //   if (event.target.value.length > 10) {
    //     return alert("contact should not be more than 10 digits");
    //   }
    // }

    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit >>", user);
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      contact: undefined,
      gender: "",
      subject: "",
      resume: "",
      url: "",
      choice: "",
      about: "",
    });
  };

  const handleReset = () => {
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      contact: undefined,
      gender: "",
      subject: "",
      resume: "",
      url: "",
      choice: "",
      about: "",
    });
  };

  return (
    <>
      <h3>forms</h3>
      <form>
        {/* input : text  */}
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        />
        <br />
        {/* input : text  */}
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={user.lastName}
          onChange={handleChange}
        />
        <br />
        {/* input : email  */}
        <label htmlFor="email">Enter email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        {/* input : number  */}
        <label htmlFor="contact">Contact:</label>
        <input
          type="number"
          id="contact"
          name="contact"
          value={user.contact || ""}
          onChange={handleChange}
          required
        />
        <br />
        {/* input : radio  */}
        <label htmlFor="gender">Gender : </label>
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          id="male"
          //   checked={user.gender === "male"}
          onChange={handleChange}
        />
        male
        <input
          type="radio"
          name="gender"
          value="female"
          id="female"
          //   checked={user.gender === "female"}
          onChange={handleChange}
        />
        female
        <input
          type="radio"
          name="gender"
          value="other"
          id="other"
          //   checked={user.gender === "other"}
          onChange={handleChange}
        />
        other
        <br />
        {/* <label htmlFor="subject">Your fav subject:</label>
        <br />
        <input
          type="checkbox"
          id="subject"
          name="subject"
          value={user.subject}
          onChange={handleChange}
        />
        English
        <input
          type="checkbox"
          id="subject"
          name="subject"
          value={user.subject}
          onChange={handleChange}
        />
        Maths
        <input
          type="checkbox"
          id="subject"
          name="subject"
          value={user.subject}
          onChange={handleChange}
        />
        Physics
        <br /> */}
        <br />
        {/* input : file */}
        <label htmlFor="resume">Resume:</label>
        <input
          type="file"
          name="resume"
          id="resume"
          value={user.resume}
          onChange={handleChange}
        />
        <br />
        {/* input : url */}
        <label htmlFor="url">Upload Resume:</label>
        <input
          type="url"
          name="url"
          id="url"
          value={user.resume}
          onChange={handleChange}
        />
        <br />
        {/* input : select  */}
        <label htmlFor="choice">Select your choice:</label>
        <select
          name="choice"
          id="choice"
          value={user.choice}
          onChange={handleChange}
        >
          <option value="">select options</option>
          <option value="firefox">firefox</option>
          <option value="safari">safari</option>
          <option value="chrome">chrome</option>
        </select>
        <br />
        <label htmlFor="about">About:</label>
        <br />
        <textarea
          name="about"
          id="about"
          cols="30"
          rows="10"
          value={user.about}
          onChange={handleChange}
        ></textarea>
        <br />
        {/* input : reset, submit  */}
        <button type="reset" onClick={handleReset}>
          Reset
        </button>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
}

export default Forms;
