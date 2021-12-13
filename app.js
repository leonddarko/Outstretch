const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const ejs = require("ejs");
const app = express();
const port = 3000;

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

let d = new Date();
let today = d.toDateString();

mongoose.connect("mongodb://localhost:27017/reachDB", { useNewUrlParser: true, useUnifiedTopology: true });

const myBlogPostSchema = new mongoose.Schema({
  date: String,
  title: String,
  read: String,

  BImg: String,
  img1: String,
  img2: String,
  img3: String,

  bname: String,
  desc: String,
  phone: Number,
  email: String,

  p1: String,
  p2: String,
  p3: String,
  p4: String,

  website: String,
  location: String,
  insta: String,
  tw: String,
  fb: String,
  yt: String,

  sh1: String,
  sh2: String,
  sh3: String,
  sh4: String,
  sh5: String,
  sh6: String,
  
  sp1: String,
  sp2: String,
  sp3: String,
  sp4: String,
  sp5: String,
  sp6: String,
});

const Post = mongoose.model("Post", myBlogPostSchema);

app.route("/")
  .get((req, res) => {

    res.render("home", {
      pageTitle: "Leon Darko",
      selfRoute: "/",
      linkName: "Blog",
      route: "/blog"
    });

  });


app.route("/blog")
  .get((req, res) => {

    Post.find({}, (error, foundPosts) => {
      // console.log(foundPosts);
      if (!error) {

        res.render("blog", {
          pageTitle: "Outstretch",
          selfRoute: "/blog",
          linkName: "Home",
          route: "/",
          posts: foundPosts
        });

      }
      else {
        console.log(error);
      }
    });

  });

app.route("/create")

  .get((req, res) => {

    res.render("create", {
      pageTitle: "Create Post",
      selfRoute: "/create",
      linkName: "Home",
      route: "/",
      date: today
    });

  })

  .post((req, res) => {

    // console.log(req.body);
    const myBlogPost = new Post({
      date: req.body.date,
      title: req.body.title,
      read: req.body.read,
      
      BImg: req.body.BImg,
      img1: req.body.img1,
      img2: req.body.img2,
      img3: req.body.img3,

      bname: req.body.bname,
      desc: req.body.desc,
      phone: req.body.phone,
      email: req.body.email,

      p1: req.body.p1,
      p2: req.body.p2,
      p3: req.body.p3,
      p4: req.body.p4,

      website: req.body.website,
      location: req.body.location,
      insta: req.body.ig,
      tw: req.body.tw,
      fb: req.body.fb,
      yt: req.body.yt,

      sh1: req.body.sh1,
      sh2: req.body.sh2,
      sh3: req.body.sh3,
      sh4: req.body.sh4,
      sh5: req.body.sh5,
      sh6: req.body.sh6,

      sp1: req.body.sp1,
      sp2: req.body.sp2,
      sp3: req.body.sp3,
      sp4: req.body.sp4,
      sp5: req.body.sp5,
      sp6: req.body.sp6,
    });

    myBlogPost.save((error) => {
      if (!error) {
        res.redirect("/");
      }
      else {
        console.log(error);
      }
    });

  });


app.route("/:postId")

  .get((req, res) => {
    const postId = req.params.postId;
    Post.findOne({ _id: postId }, (error, foundPost) => {
      if (!error) {
        res.render("post", {
          pageTitle: "Outstretch",
          selfRoute: "/blog",
          linkName: "Blog",
          route: "/blog",
          date: foundPost.date,
          title: foundPost.title,
          read: foundPost.read,
          BImg: foundPost.BImg,
          img1: foundPost.img1,
          img2: foundPost.img2,
          img3: foundPost.img3,
          bname: foundPost.bname,
          desc: foundPost.desc,
          phone: foundPost.phone,
          email: foundPost.email,
          p1: foundPost.p1,
          p2: foundPost.p2,
          p3: foundPost.p3,
          p4: foundPost.p4,
          website: foundPost.website,
          location: foundPost.location,
          insta: foundPost.insta,
          tw: foundPost.tw,
          fb: foundPost.fb,
          yt: foundPost.yt,
          sh1: foundPost.sh1,
          sh2: foundPost.sh2,
          sh3: foundPost.sh3,
          sh4: foundPost.sh4,
          sh5: foundPost.sh5,
          sh6: foundPost.sh6,
          sp1: foundPost.sp1,
          sp2: foundPost.sp2,
          sp3: foundPost.sp3,
          sp4: foundPost.sp4,
          sp5: foundPost.sp5,
          sp6: foundPost.sp6
        });
      }
      else {
        console.log(error);
      }
    });

  });

app.listen(port, () => {
  console.log(`Application running on http://localhost:${port}`);
});

