const express = require("express");
const Razorpay = require("razorpay");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const hostname = "127.0.0.1";
const port = 3000;
app.get("/", (req, res) => {
  res.status(200).send("Hello World!\n");
});

app.post("/orders", (req, res) => {
  var instance = new Razorpay({
    key_id: "rzp_test_Bup9IMAqMMLDaJ",
    key_secret: "Kr3wRe1x3T1rR2ewhgSslA3j",
  });

  var options = {
    amount: req.body.amount, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  instance.orders.create(options, function (err, order) {
    console.log(order);
    res.status(200).send(order);
  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
