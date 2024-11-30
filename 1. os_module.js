const os = require("os");

//|> This method will return the architecture of the processor.
const meth1 = os.arch(); // x64

//|> cpu cores
const meth2 = os.cpus();
/*
[
  {
    model: '12th Gen Intel(R) Core(TM) i5-12500H',
    speed: 3110,
    times: { user: 26843, nice: 0, sys: 33328, idle: 572750, irq: 3109 }
  },
  {
    model: '12th Gen Intel(R) Core(TM) i5-12500H',
    speed: 3110,
    times: { user: 15578, nice: 0, sys: 12703, idle: 604062, irq: 562 }
  },...
]
*/

// |> This method returns free main memory bytes in integer.
const meth3 = os.freemem(); // 7464108032

// |> This method current user’s home directory as a string.
const meth4 = os.homedir(); // C:\Users\prave

//|> This method returns the hostname of the operating system i.e. the computer name as a string.
const meth5 = os.hostname(); // Praveen-PC

//|> This method returns objects containing information about network interfacing devices.
const meth6 = os.networkInterfaces();
/*
{
  'Wi-Fi': [
    {
      address: 'fe80::26d3:83:93ae:ad8f',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '00:93:37:61:8c:67',
      internal: false,
      cidr: 'fe80::26d3:83:93ae:ad8f/64',
      scopeid: 16
    },
    {
      address: '192.168.0.138',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '00:93:37:61:8c:67',
      internal: false,
      cidr: '192.168.0.138/24'
    }
  ],...
}
*/

//|> This method return information about platform i.e. operation system platform like win64 arm linux etc.
const meth7 = os.platform(); // win32

//|> This method returns total system memory in bytes as a string.
const meth8 = os.totalmem(); // 16781885440   // 15.62 GB usable

/*
|> This method returns the current user. The returned object includes the 
|> username, uid, gid, shell, and homedir. On Windows, the uid and gid 
|> fields are -1, and shell is null.

- options: If encoding is set to 'buffer', the username, shell, 
-  and homedir values will be Buffer instances. Default: 'utf8'.
*/
const meth9 = os.userInfo();

// |> Returns the operating system as a string.
const meth10 = os.release(); // 10.0.22635

// |> Returns a string identifying the os version.
console.log(os.version()); // Windows 11 Home Single Language
