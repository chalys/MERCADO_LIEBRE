const { loadData, saveData } = require("../../data");
const bcrypt = require("bcrypt");

module.exports = (req, res) => {

  if (errors = validationResult(req));
  if (errors.isEmpty()){
  const { email, password } = req.body;
  const users = loadData("users");
  const newUser = {
    id: users.length ? 1 : users[users.length - 1].id + 1,
    name: "",
    surname: "",
    email: email?.trim().toLowerCase(),
    //email:email ? email.trim() : "",
    password: bcrypt.hashSync(password?.trim(), 12),
    role: "REGULAR",
    avatar:"default-avatar.jpg";
  };
  users.push(newUser);
  saveData(users, "users");
  res.redirect("/")
  return
};

res.render("auth/register",{
  old:req.body,
  errors:errors
})
/*
const objPersona = {nombre:"emanuel",direccion:{ calle: "" }}

objPersona?.direccion

objPersona.hasOwnProperty("direccion")*/
