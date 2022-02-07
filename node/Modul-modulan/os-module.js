const os = require("os");
// info abut current user
const user = os.userInfo();
console.log(user);
// menthod return the system uptime in seconds
console.log(`System uptime: ${os.uptime()} seconds`);

const currentsOs = {
  name: os.type(),
  release: os.release(),
  cpu: os.cpus(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentsOs);