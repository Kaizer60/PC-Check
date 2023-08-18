const si = require("systeminformation");
const os = require("os");

//ค่า Device name
const getHostnameInfo = () => {
  const HostName = os.hostname();
  HostName != undefined
    ? (HostNameInfo = HostName)
    : (HostNameInfo = "undefined");
  //console.log(os.hostname())
  return "Device name : " + HostNameInfo;
};

//ค่า IP4V
const getIPAddressInfo = () => {
  const interfaces = os.networkInterfaces();

  for (const interfaceName in interfaces) {
    const interfacesInfo = interfaces[interfaceName];

    for (const iface of interfacesInfo) {
      if (iface.family === "IPv4" && !iface.internal) {
        return "IP4v : " + iface.address;
      }
    }
  }

  return "undefined";
};

//ค่า Ram
const getRamInfo = async () => {
  const Memory = await si.mem();
  const MemorySpec = +(Memory.total / (1024 * 1024)).toFixed();
  const MemoryCheck = Math.floor(MemorySpec / 1000);

  if (MemoryCheck > 0) {
    return "Ram : " + MemoryCheck + " GB";
  } else {
    return "undefined";
  }
};

//ค่า Hard disk
const getStorageInfo = async () => {
  const Disks = await si.diskLayout();
  const DisksList = [];

  Disks.forEach((disk) => {
    DisksList.push(disk.name);
  });

  const joinArray = (array) => {
    return array.join(" : ");
  };

  const result = joinArray(DisksList);

  if (DisksList.length == 1) {
    return DisksList[0];
  } else if (DisksList.length > 1) {
    return "Storage : " + result;
  } else {
    return "undefined";
  }
};

//ค่า Hardware Status
const getHardwareStatus = async () => {
  const HostnameInfo = await getHostnameInfo();
  const IpAddressInfo = await getIPAddressInfo();
  const RamInfo = await getRamInfo();
  const StorageInfo = await getStorageInfo();

  const StatusArray = [HostnameInfo, IpAddressInfo, RamInfo, StorageInfo];

  if (
    StatusArray[0] != "undefined" &&
    StatusArray[1] != "undefined" &&
    StatusArray[2] != "undefined" &&
    StatusArray[3] != "undefined"
  ) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  getHostnameInfo,
  getIPAddressInfo,
  getRamInfo,
  getStorageInfo,
  getHardwareStatus,
};
