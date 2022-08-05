var BaseDeDatos = require("../dao/BaseDeDatos.js");

let baseDeDatos = new BaseDeDatos();


const add_attendance = async (req, res, next) => {

  try {
      const attendance = await baseDeDatos.add_attendance(req.user.email, req.body.course, req.body.state, req.body.date)     
      res.send(attendance);
  } catch (error) {
      res.status(500).send(error);
  }
}

const logout = (req, res, next) => {

  //console.log(req.user.email + " ha cerrado sesión.");

  req.logout(function(err) {
    if (err) { return next(err); }
    res.clearCookie("token");
    res.redirect("http://localhost:3000/");
    console.log(`-------> User Logged out`);
  });

}

module.exports = {
  add_attendance,
  logout
};
