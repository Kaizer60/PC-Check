const fs = require("fs");

const getSoftwareInfo = async () => {
  const directoryPath = ["C:\\Program Files (x86)", "C:\\Program Files"];
  const ProgramFolderList_1 = [];
  const ProgramFolderList_2 = [];

  try {
    for (let x = directoryPath.length - 1; x >= 0; x--) {
      if (x == 1) {
        const files = await fs.promises.readdir(directoryPath[x]);
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          ProgramFolderList_1.push(file);
        }
      } else if (x == 0) {
        const files = await fs.promises.readdir(directoryPath[x]);
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          ProgramFolderList_2.push(file);
        }
      }
    }

    const ProgramList = ProgramFolderList_1.concat(ProgramFolderList_2);
    const ProgramListToString = ProgramList.join(", ");

    return ProgramListToString;
  } catch (err) {
    console.error(`Error reading directory: ${err}`);
  }
};

const getSoftwareStatus = async () => {
  try {
    const getProgramListToString = await getSoftwareInfo();
    const ProgramListToArray = getProgramListToString.split(",");
    const softwareStatus = [];

    for (const item of ProgramListToArray) {
      if (item.includes("AnyDesk")) {
        softwareStatus.push(item);
      } else if (item.includes("Microsoft Office")) {
        softwareStatus.push(item);
      } else if (item.includes("Adobe")) {
        softwareStatus.push(item);
      } else if (item.includes("WinRAR")) {
        softwareStatus.push(item);
      }
    }

    if (softwareStatus.length == 5) {
      return 1;
    } else {
      return 0;
    }
  } catch (err) {
    return err;
  }
};

module.exports = {
  getSoftwareInfo,
  getSoftwareStatus,
};
