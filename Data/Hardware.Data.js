const si = require("systeminformation");
const os = require("os");

const getHostnameInfo = () => {
  const HostName = os.hostname();
  HostName != undefined
    ? (HostNameInfo = HostName)
    : (HostNameInfo = "undefined");
  //console.log(os.hostname())
  return HostNameInfo;
};

const getIPAddressInfo = () => {
  const interfaces = os.networkInterfaces();

  for (const interfaceName in interfaces) {
    const interfacesInfo = interfaces[interfaceName];

    for (const iface of interfacesInfo) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }

  return "undefined";
};

const getRamInfo = async () => {
  const Memory = await si.mem();
  const MemorySpec = +(Memory.total / (1024 * 1024)).toFixed();
  let MemoryCheck;
  MemorySpec > 10000
    ? (MemoryCheck = `${MemorySpec}`)
    : (MemoryCheck = "undefined");

  return MemoryCheck;
};

const getStorageInfo = async () => {
  const Disks = await si.diskLayout();
  const DisksList = []

  Disks.forEach((disk) => {
    DisksList.push(disk.name)
  });

  return DisksList[0] + ' : ' + DisksList[1]
};

module.exports = {
  getHostnameInfo,
  getIPAddressInfo,
  getRamInfo,
  getStorageInfo,
};
