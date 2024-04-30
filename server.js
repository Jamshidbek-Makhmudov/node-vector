// UserService.js
const MailerService = require("./MailerService");
class UserService {
  createUser(user) {
    // ... user creation logic
    MailerService.sendWelcomeEmail(user);
  }
}
module.exports = UserService;
// MailerService.js const UserService =
require("./UserService");
class MailerService {
  sendWelcomeEmail(user) {
    const username = UserService.getUserById(user.id); // This creates the circulardependency
    // ... email sending logic with username
  }
}
module.exports = MailerService;

// UserService.js
class UserService {
  constructor(mailerService) {
    this.mailerService = mailerService;
  }
  createUser(user) {
    // ...user creation logic
    this.mailerService.sendWelcomeEmail(user);
  }
}
module.exports = UserService;
// Usage (index.js)
const MailerService = require("./MailerService");
const UserService = require("./UserService");
const mailerService = newMailerService();
const userService = newUserService(mailerService);
userService.createUser({ id: 1, name: "John Doe" });

/**dependency injection */
