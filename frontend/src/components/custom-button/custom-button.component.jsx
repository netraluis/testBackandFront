import React from "react";
import "./custom-button.styles.css";

const CustomButton = ({ //se pueden quitar todas las props para user css component he borrado isGoogleSignIn para que vaya con component css
  children,
  inverted,
  isGoogleSignIn,
  ...otherProps
}) => (
  <button
    className={` ${inverted ? "inverted" : ""} custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
