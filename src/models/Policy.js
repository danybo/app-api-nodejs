const mongoose = require("mongoose");
const validator = require("validator");

const policySchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  amountInsured: {
    type: Number
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    validate: value => {
      if (!validator.isEmail(value)) {
        throw new Error({ error: "Invalid Email address" });
      }
    }
  },
  inceptionDate: {
    type: Date
  },
  installmentPayment: {
    type: Boolean
  },
  clientId: {
    type: String
  }
});

const Policy = mongoose.model("Policy", policySchema);

module.exports = Policy;
