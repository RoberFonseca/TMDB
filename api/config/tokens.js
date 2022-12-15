const jwt = require("jsonwebtoken");
const SECRET = "hamburguesa"

function generateToken(payload) {
    let signature = jwt.sign({payload}, SECRET, {expiresIn: "2d"})
    console.log(payload)
    return signature
}
function validateToken(token) {
    return jwt.verify(token, SECRET);
}

module.exports = {validateToken, generateToken} 