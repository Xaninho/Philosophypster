import React, { useState, useContext } from "react";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

import { AuthContext } from "../context/auth";
import { useForm } from "../util/hooks";
import { REGISTER_USER } from "../util/gqlQueries";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Register(props) {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});
  const classes = useStyles();

  // Uses functions from a custom created Hook
  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Logs in with the user Data and redirects to the Dashboard
  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      context.login(userData);
      props.history.push("/dashboard");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  // Calls the addUser function from the custom Hook
  function registerUser() {
    addUser();
  }

  return (
    <div className="form-container" style={{ marginTop: 100 }}>
      <form
        onSubmit={onSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <h1>Register</h1>
        <TextField
          label="Username"
          variant="outlined"
          name="username"
          type="text"
          value={values.username}
          error={errors.username ? true : false}
          onChange={onChange}
        />
        <TextField
          label="Email"
          variant="outlined"
          name="email"
          type="email"
          value={values.email}
          error={errors.email ? true : false}
          onChange={onChange}
        />
        <TextField
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          value={values.password}
          error={errors.password ? true : false}
          onChange={onChange}
        />
        <TextField
          label="Confirm Password"
          variant="outlined"
          name="confirmPassword"
          type="password"
          value={values.confirmPassword}
          error={errors.confirmPassword ? true : false}
          onChange={onChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Register
        </Button>
      </form>

      {/* If any errors, displays them */}
      {Object.keys(errors).length > 0 && (
        <div className="ui error message">
          <ul className="list">
            {Object.values(errors).map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Register;
