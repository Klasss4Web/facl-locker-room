import React, { useState } from "react";
import { Input } from "./Input";

export const Form = ({ setUsers }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    mobileNumber: "",
    emailAddress: "",
    nationality: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let existing = JSON.parse(localStorage.getItem("users")) || [];
    const emailExist = existing?.find(
      (user) => user?.emailAddress === formValues?.emailAddress
    );
    const phoneExist = existing?.find(
      (user) => user?.mobileNumber === formValues?.mobileNumber
    );
    if (emailExist || phoneExist) return;
    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? existing : [];
    // Add new data to localStorage Array
    existing.push(formValues);

    // Save back to localStorage
    localStorage.setItem("users", JSON.stringify(existing));

    setUsers((prev) => ({ ...prev, formValues }));
  };

  return (
    <div className="form px-5">
      <h2 className="my-4">Create account</h2>
      <form>
        <Input
          onChange={handleChange}
          name={"firstName"}
          placeholder="First Name"
        />

        <Input
          onChange={handleChange}
          name={"lastName"}
          placeholder={"Last Name"}
        />

        <div className="">
          <Input
            onChange={handleChange}
            name={"emailAddress"}
            placeholder={"Email Address"}
          />
          <div className="d-flex mb-4">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                value={"M"}
                id="male"
                onChange={handleChange}
              />
              <label class="form-check-label" for="gridCheck">
                Male
              </label>
            </div>
            <div class="form-check ml-4">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                value={"F"}
                id="gridCheck"
                onChange={handleChange}
              />
              <label class="form-check-label" for="gridCheck">
                Female
              </label>
            </div>
          </div>
        </div>
        <Input
          placeholder={"Mobile Number"}
          onChange={handleChange}
          name={"mobileNumber"}
        />
        <Input
          placeholder={"Nationality"}
          onChange={handleChange}
          name={"nationality"}
        />

        <button
          type="submit"
          className="btn btn-outline-secondary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
