import React, { useState } from "react";
import { TextField } from "@mui/material";
import { styled } from "@mui/system";
import "./form.css";

const StyledTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  marginBottom: "30px",
  "& .MuiInputLabel-root": {
    fontSize: "12px",
    fontFamily: "Aeonik-Regular",
    transform: "translate(14px, 12px) scale(1)",
  },
  "& .MuiInputLabel-shrink": {
    transform: "translate(14px, -4px) scale(0.75)",
    color: "#11453b",
  },
  "& .MuiInputBase-root": {
    "&:after": {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
    },
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    "&:hover fieldset": {
      borderColor: "#b5b6b5",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#11453b",
    },
  },
}));

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [isCompany, setIsCompany] = useState(false); // I aadded this state for tracking company selection

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handleCompanySizeChange = (event) => {
    setCompanySize(event.target.value);
  };

  const handleCompanyClick = () => {
    setIsCompany(true);
  };

  const handleIndividualClick = () => {
    setIsCompany(false);
  };

  return (
    <div className="app__form">
      <div className="app__form-heading">
        <h4>First things first</h4>
        <p>
          We want to serve you better. Tell us a bit about yourself or company
        </p>
      </div>
      <div className="app__form-buttons">
        <button onClick={handleIndividualClick}>individual</button>
        <button onClick={handleCompanyClick}>company</button>
      </div>
      <div className="app__form-input">
        <StyledTextField
          size="small"
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <StyledTextField
          size="small"
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <StyledTextField
          size="small"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />
        <StyledTextField
          size="small"
          id="outlined-basic"
          label="Job Title"
          variant="outlined"
          value={jobTitle}
          onChange={handleJobTitleChange}
        />
        {isCompany && ( // I am conditionally render the company size text field
          <StyledTextField
            size="small"
            id="outlined-basic"
            label="Company Size"
            variant="outlined"
            value={companySize}
            onChange={handleCompanySizeChange}
          />
        )}
        <button>request demo</button>
      </div>
    </div>
  );
};

export default Form;
