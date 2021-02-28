import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./form-expedient.styles.css";

const FormExpedient = () => {
  const [expedientData, setData] = useState({
    hearing_date: "",
    resume: "",
    dificulty: "",
    judicial_party: "",
    description: "",
  });

  const {
    hearing_date,
    resume,
    dificulty,
    judicial_party,
    description,
  } = expedientData;

  const handleChange = (event) => {
    const { value, name } = event.target;
    setData({ ...expedientData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    expedientData.hearing_date = `${new Date(hearing_date)}`;
    console.log(expedientData);
    const url = "http://localhost:8000/api/v1/expSubRoutes/expedients";
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(expedientData),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then(() =>
        setData({
          hearing_date: "",
          resume: "",
          dificulty: "",
          judicial_party: "",
          description: "",
        })
      )
      .catch((error) => console.error(error));
  };

  return (
    <div className="globalForm">
      <div className="formInd">
        <h2>I want to add an expedient</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="hearing_date"
            type="date"
            value={hearing_date}
            handleChange={handleChange}
            label="hearing_date"
            required
            date="true"
          />

          <FormInput
            name="resume"
            type="text"
            value={resume}
            handleChange={handleChange}
            label="resume"
            required
          />

          <FormInput
            name="dificulty"
            type="number"
            value={dificulty}
            handleChange={handleChange}
            label="dificulty"
            required
          />

          <FormInput
            name="judicial_party"
            type="text"
            value={judicial_party}
            handleChange={handleChange}
            label="judicial_party"
            required
          />

          <FormInput
            name="description"
            type="text"
            value={description}
            handleChange={handleChange}
            label="description"
            required
          />

          <CustomButton type="submit">ADD EXPEDIENT</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default FormExpedient;
