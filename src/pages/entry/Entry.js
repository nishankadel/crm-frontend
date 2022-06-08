import React, { useState } from "react";
import "./entry.css";
import { Card } from "react-bootstrap";
import Login from "../../components/login/Login";
import PasswordReset from "../../components/password-reset/PasswordReset";

const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formLoad, setFormLoad] = useState("login");

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return alert("Please fill all fields");
    }

    //TODO: To submit the form
    console.log(email, password);
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      return alert("Please provide email.");
    }

    //TODO: To submit the form
    console.log(email, password);
  };

  return (
    <>
      <div className="entry-page bg-info">
        <Card className="form-box">
          <Card.Body>
            {formLoad === "login" && (
              <Login
                handleOnChange={handleOnChange}
                email={email}
                formSwitcher={formSwitcher}
                password={password}
                handleSubmit={handleSubmit}
              />
            )}

            {formLoad === "passwordreset" && (
              <PasswordReset
                handleOnChange={handleOnChange}
                email={email}
                formSwitcher={formSwitcher}
                handleOnResetSubmit={handleOnResetSubmit}
              />
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default Entry;
