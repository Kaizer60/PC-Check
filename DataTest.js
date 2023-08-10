const si = require('systeminformation')
const os = require('os')

// const HostName = (await si.osInfo()).hostname
// let HostNameInfo

// const getHostnameInfo = async () => {
//     HostName != undefined? HostNameInfo = HostName:HostNameInfo = 'undefined'
//     console.log(HostNameInfo)
// }

const getRamInfo = async () => {
  const Memory = await si.mem();
  const MemorySize = (Memory.total / (1024 * 1024))
  console.log('Memory: ', MemorySize, 'MB');

  return MemorySize

}

module.exports = {
    getRamInfo,
}