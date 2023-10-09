const express = require("express");
const service = require("../Service/Info.Services");
const sql = require("mssql/msnodesqlv8");
const router = express.Router();

//Get Software Data
const { 
  getSoftwareInfo,
  getSoftwareStatus
} = require("../Data/Software.Data");

//Get Drives Data
const {
  getDrivesInfo,
  getDrivesStatus
} = require("../Data/Drive.Data");

//Get Hardware Data
const {
  getHostnameInfo,
  getIPAddressInfo,
  getRamInfo,
  getStorageInfo,
  getHardwareStatus,
} = require("../Data/Hardware.Data");

//GET ALL
router.get("/", (req, res) => {
  try {
    sql.query(service.getAllInfo(), (err, result) => {
      return err
        ? res.status(400).json({ error: err.message })
        : res.status(200).json({ status: "ok", result: result.recordset });
    });
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
});

/*-------------------------------------------------------------------------------------------------------------------------*/

//GET By Ip
router.get("/data/:Ip", (req, res) => {
  const Ip = req.params.Ip;
  try {
    sql.query(service.getByIpInfo(Ip), (err, result) => {
      //console.log(result.recordset.length)
      return err
        ? res.status(400).json({ error: err.message })
        : res.status(200).json({ result: result.recordset[0] });
    });
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
});

/*-------------------------------------------------------------------------------------------------------------------------*/

//GET By Parame
router.get("/:Parame", (req, res) => {
  const ParameValue = req.params.Parame;
  try {
    sql.query(service.getByParameInfo(ParameValue), (err, result) => {
      console.log(result.recordset.length)
      return err
        ? res.status(400).json({ error: err.message })
        : res.status(200).json({ result: result.recordset });
    });
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
});

/*-------------------------------------------------------------------------------------------------------------------------*/

//Create
router.post("/", async (req, res) => {
  const postIPAddressInfo = await getIPAddressInfo();
  const postHostnameInfo = await getHostnameInfo();
  const postRamInfo = await getRamInfo();
  const postStorageInfo = await getStorageInfo();
  const postSoftwareInfo = await getSoftwareInfo();
  const postDrivesInfo = await getDrivesInfo();
  const postHardwareStatus = await getHardwareStatus();
  const postSoftwareStatus = await getSoftwareStatus();
  const postDrivesStatus = await getDrivesStatus();

  try {
    sql.query(
      service.createInfo(
        postIPAddressInfo,
        postHostnameInfo,
        postRamInfo,
        postStorageInfo,
        postSoftwareInfo,
        postDrivesInfo,
        postHardwareStatus,
        postSoftwareStatus,
        postDrivesStatus
      ),
      (err, result) => {
        console.log(result.rowsAffected[0]);
        return err
          ? res.status(400).json({ error: err.message })
          : res
              .status(201)
              .json({ status: "ok", message: "Created successfully", result });
      }
    );
  } catch {
    return res.status(404).json({ error: err.message });
  }
});

/*-------------------------------------------------------------------------------------------------------------------------*/

//Update
router.put("/Auto_Update/", async (req, res) => {
  //const id = req.params.id;
  const postIPAddressInfo = await getIPAddressInfo();
  const postHostnameInfo = await getHostnameInfo();
  const postRamInfo = await getRamInfo();
  const postStorageInfo = await getStorageInfo();
  const postSoftwareInfo = await getSoftwareInfo();
  const postDrivesInfo = await getDrivesInfo();
  const postHardwareStatus = await getHardwareStatus();
  const postSoftwareStatus = await getSoftwareStatus();
  const postDrivesStatus = await getDrivesStatus();

  try {
    sql.query(
      service.updateInfo(
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
      ),
      (err, result) => {
        return err
          ? res.status(400).json({ error: err.message })
          : res
              .status(200)
              .json({ status: "ok", message: "Updated successfully", result });
      }
    );
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
});

/*-------------------------------------------------------------------------------------------------------------------------*/

//Delete All
router.delete("/", (req, res) => {
  try {
    sql.query(service.deleteAllInfo(), (err, result) => {
      return err
        ? res.status(400).json({ error: err.message })
        : res
            .status(200)
            .json({ status: "ok", message: "Deleted successfully" });
    });
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
});

/*-------------------------------------------------------------------------------------------------------------------------*/

//Delete By Id
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  try {
    sql.query(service.deleteByIdInfo(id), (err, result) => {
      return err
        ? res.status(400).json({ error: err.message })
        : res
            .status(200)
            .json({ status: "ok", message: "Deleted successfully" });
    });
  } catch (err) {
    return res.status(404).json({ error: err.message });
  }
});

module.exports = router;
