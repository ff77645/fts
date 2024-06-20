import os from 'os'



function isPrivateIP(ip) {
  const parts = ip.split('.').map(Number);
  return (
    (parts[0] === 10) ||
    (parts[0] === 172 && parts[1] >= 16 && parts[1] <= 31) ||
    (parts[0] === 192 && parts[1] === 168)
  );
}

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  const addresses = [];

  for (let interfaceName in interfaces) {
    for (let iface of interfaces[interfaceName]) {
      if (iface.family === 'IPv4' && !iface.internal && isPrivateIP(iface.address)) {
        addresses.push(iface.address);
      }
    }
  }
  return addresses;
}

const localIPs = getLocalIP();

console.log('Local IP addresses:', localIPs);
