const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { UserInputError } = require("apollo-server");

const {
  validateRegisterInput,
  validateLoginInput,
} = require("../../util/validators.js");
const User = require("../../models/User.js");

// Creates an accessibility token for the current user
function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
      username: user.username,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1h" }
  );
}

module.exports = {
  Mutation: {
    async login(_, { username, password }) {
      // Uses the Validators for the Input Fields
      const { errors, valid } = validateLoginInput(username, password);
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      // Finds the User
      const user = await User.findOne({ username });

      // If the user is not found, returns an error
      if (!user) {
        errors.general = "User not found";
        throw new UserInputError("User not Found", { errors });
      }

      // Veryfies credentials
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = "Wrong Credentials";
        throw new UserInputError("Wrong Credentials", { errors });
      }

      // If it's successfully logged in, it issues a token for the user
      const token = generateToken(user);

      // Returns the data
      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
    async register(
      _,
      { registerInput: { username, email, password, confirmPassword } }
    ) {
      // Uses the Validators for the Input Fields
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new UserInputError("Errors", { errors });
      }

      // Validation if the username is already taken.
      const user = await User.findOne({ username });
      if (user) {
        throw new UserInputError("Username is taken", {
          errors: {
            username: "This username is taken",
          },
        });
      }

      // Encrypts the password
      password = await bcrypt.hash(password, 12);

      // Creates a new User with the provided info
      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date().toISOString(),
      });

      // Saves the user in the Database and creates a token for it
      const res = await newUser.save();
      const token = generateToken(res);

      // Returns the data
      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
