const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

const userCredentialsSchema = zod.object({username:zod.string().email(), password: zod.string().min(6)})


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */

function signJwt(username, password) {
    if(userCredentialsSchema.safeParse({username, password}).success) {
        const jwtToken = jwt.sign({username, password}, jwtPassword);
        console.log('The signed jwt token is:', jwtToken);
        return jwtToken;
    }
    return null;
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    try{
        const verifiedJwt = jwt.verify(token, jwtPassword);
        console.log('verification status of jwt:', verifiedJwt);
        return true;
    }
    catch {
        console.log('jwt not verified');
        return false;
    }
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {

    const jwtData = jwt.decode(token);
    if(jwtData) {
        console.log('the jwt data without verification is:', jwtData);
        return true;
    }
    else {
        return false;
    }
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
