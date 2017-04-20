import accounts from './accounts';
import login from './login';
import campaigns from './campaigns';
import users from './users';

module.exports = {
  ...accounts,
  ...login,
  ...campaigns,
  ...users
};
