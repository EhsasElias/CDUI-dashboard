const express = require("express");
const multer = require("multer");
const mogoose = require("mongoose");
const Profile = require("./models/profiles");
const Skill = require("./models/skills");
const Exper = require("./models/expers");
const Qual = require("./models/e&t");


const app = express();

app.use(express.static("public/"));



// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     if (file.mimetype == "image/png" || file.mimetype == "image/jpg")
//       cb(null, "public/images/");
//     else if (file.mimetype == "application/pdf") cb(null, "public/pdf/");

//   },
//   filename: (req, file, cb) => {
//     var extension = file.originalname.split(".");
//     var ext = extension[extension.length - 1];

//     //var uploaded_file_name =Date.now() + '-' + Math.round(Math.random() * 1E9)+file.originalname;
//     var uploaded_file_name =
//       file.fieldname +
//       "-" +
//       Date.now() +
//       "-" +
//       Math.round(Math.random() * 1e9) +
//       "." +
//       ext;

//     cb(null, uploaded_file_name);
//   },
// });

// const upload = multer({
//   storage: storage,

//   fileFilter: (req, file, callback) => {
//     if (
//       file.mimetype == "image/png" ||
//       file.mimetype == "image/jpg" ||
//       file.mimetype == "application/pdf"
//     ) {
//       callback(null, true);
//     } else callback(null, false);
//   },
//   limits: 1024 * 1024 * 5,
// });

app.set('view engine', 'ejs');
app.use(express.urlencoded());

mogoose
  .connect("mongodb://localhost:27017/profile", { family: 4 })
  .then((result) => {
    console.log("connect to db succeful");
  })
  .catch((error) => { console.log(error.message); });

app.get("/index", auth, (req, res) => {
  res.render("index");

});
app.get("/exper", auth, (req, res) => {
  res.render("exper");

});

app.post("/add_exper", (req, res) => {
  

  const ex = new Exper({
    exper: req.body.exper,
    
  });

  ex.save((error, result) => {
    if (error)
      console.log(error);
    else
      console.log(result);
  });
  console.log("data inserted successful");
  res.end();


});

app.get("/edu&trains", auth, (req, res) => {
  res.render("edu&trains");

});


app.post("/add_e&t", (req, res) => {
  

  const q = new Qual({
    qual: req.body.qual,
    
  });

 q.save((error, result) => {
    if (error)
      console.log(error);
    else
      console.log(result);
  });
  console.log("data inserted successful");
  res.end();


});

app.get("/profileEdit", (req, res) => {
  res.render("profileEdit");

});
app.post("/profile",  (req, res) => {
  // res.send(req.file.filename);
  res.render("profile");
  const p = new Profile({
    name: req.body.name,
    title: req.body.title,
    location: req.body.location,
    email: req.body.email,
    phone: req.body.phone,
    image: req.body.image,
    bio: req.body.bio,

  });

  p.save((error, result) => {
    if (error)
      console.log(error.message);
    else
      console.log(result);
  });

  console.log("data inserted successful");
  res.end();


});




app.get("/skills", auth, (req, res) => {
  res.render("skills");
  app.use(express.static('./'));

});

app.post("/add_skill", (req, res) => {
  

  const sk = new Skill({
    skill: req.body.skill,
    
  });

  sk.save((error, result) => {
    if (error)
      console.log(error);
    else
      console.log(result);
  });
  console.log("data inserted successful");
  res.end();


});

function auth(req, res, next) {
  next();
}
app.listen("3000");
