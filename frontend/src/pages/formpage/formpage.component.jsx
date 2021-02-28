import React from "react";
import FormExpedient from "../../components/form-expedients/form-expedients.component";
import FormSubstitutes from "../../components/form-substitutes/form-substitutes.component";
import "./formpage.style.css";

const FormPage = () => (
  <div className = "formGlobal">
    <div className = "formInd">
      <FormExpedient />
    </div>
    <div className = "formInd">
      <FormSubstitutes />
    </div>
  </div>
);

export default FormPage;
