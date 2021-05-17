var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

const Schema  = mongoose.Schema;

const validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return re.test(email)
  
};

const userSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']

  },
  password: {
    type: String,
    default: "abcd",
    minlength: 6,
    trim: true,
},
});

userSchema.pre("save", async function (next){
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
})

const User = mongoose.model("User", userSchema);

module.exports = User;




























