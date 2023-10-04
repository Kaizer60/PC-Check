const getAllInfo = () => {
  return `SELECT * FROM CHECK_PC`;
};

const getByIdInfo = (id) => {
  return `SELECT * FROM CHECK_PC WHERE Id = ${id} `;
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
  id,
) => {
  return `UPDATE CHECK_PC SET 
  Ip = '${postIPAddressInfo}', Hostname = '${postHostnameInfo}', Ram = '${postRamInfo}', Storage = '${postStorageInfo}', Software = '${postSoftwareInfo}', Drive = '${postDrivesInfo}', Hardware_status = '${postHardwareStatus}', Software_status = '${postSoftwareStatus}', Drive_status = '${postDrivesStatus}' 
  WHERE Id = ${id}`
}

const deleteAllInfo = () => {
  return `DELETE FROM CHECK_PC`
}

const deleteByIdInfo = (id) => {
  return `DELETE FROM CHECK_PC WHERE Id = ${id}`
}

module.exports = {
  getAllInfo,
  getByIdInfo,
  createInfo,
  updateInfo,
  deleteAllInfo,
  deleteByIdInfo
};
