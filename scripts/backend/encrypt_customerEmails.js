const cryp = require('crypto');

const CIPHER_ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 16;
const TAG_LENGTH = 16;
const SALT_LENGTH = 64;
const ITERATIONS = 10000;

const tagPosition = SALT_LENGTH + IV_LENGTH;
const encryptedPosition = tagPosition + TAG_LENGTH;

const getKey = (salt, secret) => {
    return cryp.pbkdf2Sync(secret, salt, ITERATIONS, 32, 'sha256');
};

const gcm = {
    encrypt: (input, secret) => {
        const iv = cryp.randomBytes(IV_LENGTH);
        const salt = cryp.randomBytes(SALT_LENGTH);

        const AES_KEY = getKey(salt, secret);

        const cipher = cryp.createCipheriv(CIPHER_ALGORITHM, AES_KEY, iv);
        const encrypted = Buffer.concat([cipher.update(String(input), 'utf8'), cipher.final()]);

        const tag = cipher.getAuthTag();

        return Buffer.concat([salt, iv, tag, encrypted]).toString('hex');
    },

    decrypt: (input, secret) => {
        const inputValue = Buffer.from(String(input), 'hex');
        const salt = inputValue.subarray(0, SALT_LENGTH);
        const iv = inputValue.subarray(SALT_LENGTH, tagPosition);
        const tag = inputValue.subarray(tagPosition, encryptedPosition);
        const encrypted = inputValue.subarray(encryptedPosition);

        const key = getKey(salt, secret);

        const decipher = cryp.createDecipheriv(CIPHER_ALGORITHM, key, iv);

        decipher.setAuthTag(tag);

        return decipher.update(encrypted) + decipher.final('utf8');
    },
};

// Usage
// console.log('jatin@revert.dev :', gcm.encrypt('jatin@revert.dev', process.env.AES_ENCRYPTION_SECRET));
// console.log('jatin+sandbox@revert.dev :', gcm.encrypt('jatin+sandbox@revert.dev', process.env.AES_ENCRYPTION_SECRET));
// console.log('jatin@flowdash.ai :', gcm.encrypt('jatin@flowdash.ai', process.env.AES_ENCRYPTION_SECRET));
