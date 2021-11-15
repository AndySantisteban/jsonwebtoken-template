// @ts-check
const jwt = require('jsonwebtoken');

/** TokenResource is a constant that has the properties jsonwebtoken */
const tokenResource = {
    /** signJwt is a function that returns the token as string  */
    signJwt: (
        /** @type {{ email: String; password: String; }} */ user,
        /** @type {{ time: String; }} */ expired,
        /** @type {jwt.Secret} */ varEnv) => {
        if (!expired) {
            try {
                return jwt.sign({
                    email: user.email, password: user.password
                }, varEnv);
            } catch {
                return null
            }
        } else {
            try {

                return jwt.sign({
                    email: user.email, password: user.password
                }, varEnv, { expiresIn: expired.time })
            } catch {
                return null
            }
        }
    },
    /** verifyJwt is a function that checks if the token exists */
    verifyJwt: (
        /** @type {string} */ token,
        /** @type {jwt.Secret} */ varEnv) => {
        try {
            return jwt.verify(token, varEnv)
        } catch {
            return null
        }
    },
    /** encrypteJwt is a function that encrypts the token  */
    encrypteJwt: (
        /** @type {WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>} */ token,
        /** @type {String} */ varEnv) => {
        // @ts-ignore
        return new Buffer.from(token).toString(varEnv);
    },
    /** desencrypteJwt is a function that decrypts the token in ascii code.  */
    desencrypteJwt: (
        /** @type {WithImplicitCoercion<ArrayBuffer | SharedArrayBuffer>} */ token,
        /** @type {String} */ varEnv) => {
        // @ts-ignore
        return new Buffer.from(token, varEnv).toString('ascii');
    },
    /** sendTokenLocalStorage is a function that send token in Local Storage  */
    sendTokenLocalStorage: (/** @type {string} */ token, /** @type {string} */ key) => {
        localStorage.setItem(key, token);
    },
    /** sendTokenSessionStorage is a function that get token in Session Storage  */
    sendTokenSessionStorage: (/** @type {string} */ token, /** @type {string} */ key) => {
        sessionStorage.setItem(key, token);
    },
    /** getTokenLocalStorage is a function that get token in Local Storage  */
    getTokenLocalStorage: (/** @type {string} */ key) => {
        return localStorage.getItem(key);
    }
}

module.exports = tokenResource;