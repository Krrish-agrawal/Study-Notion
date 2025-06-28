//require statements

console.log("[DEBUG] Loading dotenv...");
require("dotenv").config();
console.log("[DEBUG] MONGODB_URL =", process.env.MONGODB_URL);

const mongoose=require('mongoose');


exports.connect=()=>{
  mongoose.connect(process.env.MONGODB_URL)
    .then(() => { console.log("DB CONNECTION SUCCESSFUL") })
  .catch((err)=>{
    console.log("DB CONNECTION ISSUES");
    console.error(err);
    process.exit(1);
  })
}
