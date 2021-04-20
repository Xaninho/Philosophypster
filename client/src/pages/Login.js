import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useMutation } from "@apollo/react-hooks";
import { TextField, Button } from "@material-ui/core";

import { AuthContext } from "../context/auth";
import { useForm } from "../util/hooks";
import { LOGIN_USER } from "../util/gqlQueries";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function Login(props) {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState({});

  const classes = useStyles();

  // Uses functions from a custom created Hook
  const { onChange, onSubmit, values } = useForm(loginUserCallback, {
    username: "",
    password: "",
  });

  // Logs in with the user Data and redirects to the Dashboard
  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData);
      props.history.push("/dashboard");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: values,
  });

  // Calls the loginUser function from the custom Hook
  function loginUserCallback() {
    loginUser();
  }

  return (
    <div className="form-container" style={{ marginTop: 100 }}>
      <form
        onSubmit={onSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <h1>Login</h1>
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
          label="Password"
          variant="outlined"
          name="password"
          type="password"
          value={values.password}
          error={errors.password ? true : false}
          onChange={onChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Login
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

export default Login;
