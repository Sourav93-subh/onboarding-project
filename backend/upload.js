const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  region: "ap-south-1"
});

const params = {
  Bucket: "decouple-onboarding-sourav",
  Key: "uploads/sample.txt",
  Body: "Hello from onboarding project",
  ContentType: "text/plain"
};

s3.upload(params, (err, data) => {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Uploaded:", data.Location);
  }
});