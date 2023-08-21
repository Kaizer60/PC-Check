const fs = require("fs");

const getSoftwareInfo = async () => {
  const directoryPath = ["C:\\Program Files (x86)", "C:\\Program Files"];
  const ProgramFolderList_1 = [];
  const ProgramFolderList_2 = [];
  const ProgramList = [];

  try {
    for (let x = directoryPath.length - 1; x >= 0; x--) {
      if (x == 1) {
        const files = await fs.promises.readdir(directoryPath[x]);
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          ProgramFolderList_1.push(file);
        }

        for (const item of ProgramFolderList_1) {
          if (item.includes("AnyDesk")) {
            ProgramList.push(item);
          } else if (item.includes("Microsoft Office")) {
            ProgramList.push(item);
          } else if (item.includes("Adobe")) {
            ProgramList.push(item);
          } else if (item.includes("3435433456464")) {
            ProgramList.push(item);
          }
        }
      } else if (x == 0) {
        const files = await fs.promises.readdir(directoryPath[x]);
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          ProgramFolderList_2.push(file);
        }

        for (const item of ProgramFolderList_2) {
          if (item.includes("AnyDesk")) {
            ProgramList.push(item);
          } else if (item.includes("Microsoft Office")) {
            ProgramList.push(item);
          } else if (item.includes("Adobe")) {
            ProgramList.push(item);
          } else if (item.includes("3435433456464")) {
            ProgramList.push(item);
          }
        }
      }
    }
    //console.log(ProgramList)
    return ProgramList.join(", ");
  } catch (err) {
    console.error(`Error reading directory: ${err}`);
  }
};

const getSoftwareStatus = async () => {
  try {
    const retrospective = await getSoftwareInfo();
    const checkStatus = retrospective.split(", ");

    if (checkStatus.length == 5) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    return err;
  }
};

module.exports = {
  getSoftwareInfo,
  getSoftwareStatus,
};