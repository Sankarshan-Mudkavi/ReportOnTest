import accounts from './accounts';
import login from './login';
import campaigns from './campaigns';

module.exports = {
  ...accounts,
  ...login,
  ...campaigns
};
