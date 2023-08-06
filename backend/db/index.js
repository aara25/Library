const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://admin:Lordismyrock@aarathicluster.ycsywvz.mongodb.net/Library", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to MongoDB`);
  })
  .catch((ex) => console.error("Error connecting MongoDB"));
