const winreg = require('winreg');

async function getInstalledPrograms() {
  return new Promise((resolve, reject) => {
    const regKey = new winreg({
      hive: winreg.HKLM, // HKEY_LOCAL_MACHINE
      key: '\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Uninstall'
    });

    const installedPrograms = [];

    regKey.keys(async (error, subkeys) => {
      if (error) {
        reject(`Error: ${error}`);
        return;
      }

      for (const subkey of subkeys) {
        await new Promise(subkeyCallback => {
          subkey.values((error, items) => {
            if (error) {
              subkeyCallback();
              reject(`Error: ${error}`);
              return;
            }

            const programName = items.find(item => item.name === 'DisplayName');
            const programVersion = items.find(item => item.name === 'DisplayVersion');

            if (programName && programVersion) {
              installedPrograms.push(`${programName.value} (Version: ${programVersion.value})`);
            }

            subkeyCallback();
          });
        });
      }

      resolve(installedPrograms);
    });
  });
}

async function main() {
  CheckList = []
  try {
    const programs = await getInstalledPrograms();
    //console.log('Installed Programs:\n');
    programs.forEach(program => {
      CheckList.push(program)
      //console.log(program);
    });
    return CheckList
  } catch (error) {
    console.error(error);
  }
}

// เรียกใช้ฟังก์ชันหลัก
const getProgramInfo = async () => {
  const Info = await main()

  for (const item of Info) {
    if (item.includes("Microsoft Office")) {
      console.log(item);
    }
  }

  //console.log(Info)
}


