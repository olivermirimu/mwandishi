const crypto = require("crypto");
const fs = require("fs");

const genKeyPair = () => {
  const keyPair = crypto.generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
      format: "pem",
      type: "pkcs1",
    },
    privateKeyEncoding: {
      format: "pem",
      type: "pkcs1",
    },
  });

  fs.writeFileSync(__dirname + "/id_rsa_pub.pem", keyPair.publicKey);
  fs.writeFileSync(__dirname + "/id_rsa_priv.pem", keyPair.privateKey);
};

genKeyPair();
