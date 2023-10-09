const getAllInfo = () => {
  return `SELECT * FROM CHECK_PC`;
};

const getByIpInfo = (Ip) => {
  return `SELECT * FROM CHECK_PC WHERE Ip = '${Ip}' `;
};

const getByParameInfo = (ParameValue) => {
  return `SELECT * FROM CHECK_PC WHERE (Ip = '${ParameValue}') OR (Hostname = '${ParameValue}') OR Hardware_status = '${ParameValue}'`;
};

const createInfo = (
  postIPAddressInfo,
  postHostnameInfo,
  postRamInfo,
  postStorageInfo,
  postSoftwareInfo,
  postDrivesInfo,
  postHardwareStatus,
  postSoftwareStatus,
  postDrivesStatus
) => {
  return `INSERT INTO CHECK_PC(Ip, Hostname, Ram, Storage, Software, Drive, Hardware_status, Software_status, Drive_status) 
  VALUES ('${postIPAddressInfo}', '${postHostnameInfo}', '${postRamInfo}', '${postStorageInfo}','${postSoftwareInfo}', '${postDrivesInfo}', '${postHardwareStatus}', '${postSoftwareStatus}', '${postDrivesStatus}')`;
};

const updateInfo = (
  postIPAddressInfo,
  postHostnameInfo,
  postRamInfo,
  postStorageInfo,
  postSoftwareInfo,
  postDrivesInfo,
  postHardwareStatus,
  postSoftwareStatus,
  postDrivesStatus,
  // id
) => {
  return `UPDATE CHECK_PC SET 
  Ip = '${postIPAddressInfo}', Hostname = '${postHostnameInfo}', Ram = '${postRamInfo}', Storage = '${postStorageInfo}', Software = '${postSoftwareInfo}', Drive = '${postDrivesInfo}', Hardware_status = '${postHardwareStatus}', Software_status = '${postSoftwareStatus}', Drive_status = '${postDrivesStatus}', Time_update = CURRENT_TIMESTAMP 
  WHERE Ip = '${postIPAddressInfo}'`;
};

const deleteAllInfo = () => {
  return `DELETE FROM CHECK_PC`;
};

const deleteByIdInfo = (id) => {
  return `DELETE FROM CHECK_PC WHERE Id = ${id}`;
};

module.exports = {
  getAllInfo,
  getByIpInfo,
  getByParameInfo,
  createInfo,
  updateInfo,
  deleteAllInfo,
  deleteByIdInfo,
};
