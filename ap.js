const AWS = require('aws-sdk');
const BUCKET_NAME = 'buco';
const IAM_USER_KEY = 'AKIA5E2JCMIZ76XTTMGH';
const IAM_USER_SECRET = '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';
const fs = require("fs")
const s3 = new AWS.S3({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
});

//   const params ={
//     Bucket: BUCKET_NAME
//   }

//   s3.createBucket(params,(err,data)=>{
//     if(err){console.log("nyet",err)}
//     else{console.log("bansaiiiiii")}
//   })

const upload = (file) => {
    const fileee = fs.readFileSync(file)
    const params = {
        Bucket: BUCKET_NAME,
        Key: "photo11.jpg",
        Body: fileee,
        ContentType: "image",
        ACL: 'public-read-write'
    }
    const up = s3.upload(params, (err, data) => {
        if (err) { console.log(err) } else { console.log(data.Location) }

    })
    return up.Location
}

function abc() {

    console.log(up.Location)
}
module.exports = { upload, abc }