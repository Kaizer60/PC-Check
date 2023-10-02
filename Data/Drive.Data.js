const { exec } = require('child_process');

const main = () => {
  return new Promise((resolve, reject) => {
    const DriveList = []
    exec('wmic logicaldisk get caption', (error, stdout) => {
      if (error) {
        console.error(`เกิดข้อผิดพลาด: ${error}`);
        reject(error);
        return;
      }

      const drives = stdout.trim().split('\n');
      drives.shift(); // ลบหัวข้อคอลัมน์

      for (let i = 0; i < drives.length; i++) {
        const drive = drives[i].trim();
        DriveList.push(drive)
      }

      resolve(DriveList.toString());
    });
  });
}

// สามารถเรียกใช้ getDrivesInfo เป็นแบบ Synchronous ได้
const getDrivesInfo = async () => {
  try {
    const driveList = await main();
    return driveList
    // คุณสามารถใช้ driveList ต่อไปได้ตามต้องการ
  } catch (error) {
    console.error('เกิดข้อผิดพลาดในการรับข้อมูลไดรฟ์:', error);
  }
}

const getDrivesStatus = async () => {
    try{
        const driveToArray = await main()
        const driveStatus = driveToArray.split(",");
        console.log(driveStatus.length)
        if(driveStatus.length == 3){
          return true
        }else{
          return false
        }
    }catch(error){
        return error
    }
}


module.exports = {
    getDrivesInfo,
    getDrivesStatus,
}
