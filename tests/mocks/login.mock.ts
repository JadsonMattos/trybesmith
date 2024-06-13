import bcrypt from 'bcryptjs';

const SALT_ROUNDS = process.env.SALT_ROUNDS || 10;

const validPassword = 'trybesmith';
const noUsernameLoginBody = { username: '', password: validPassword };

const validUsername = 'TrybeSmith';
const noPasswordLoginBody = { username: validUsername, password: '' };

const invalidUsername = { username: 'abcdef', password: validPassword };

const existingUserWithWrongPasswordBody = { username: validUsername, password: 'wrong_password' };
const existingUser = { 
  id: 1, 
  username: validUsername,
  vocation: 'mage',
  level: 1,
  password: bcrypt.hashSync(validPassword, SALT_ROUNDS),
};

const validLoginBody = { username: validUsername, password: validPassword };

export default {
  noUsernameLoginBody,
  noPasswordLoginBody,
  invalidUsername,
  existingUserWithWrongPasswordBody,
  existingUser,
  validLoginBody,
};