const express = require("express");
const router = express.Router();
const con = require("../DB");
const {
  getHostnameInfo,
  getIPAddressInfo,
  getRamInfo,
  getStorageInfo,
  getHardwareStatus,
} = require("../Data/Hardware.Data");
const { getSoftwareInfo, getSoftwareStatus } = require("../Data/Software.Data");

//GET ALL
router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM fulltest", (err, result) => {
      return err
        ? res.status(400).json({ error: err })
        : res.status(200).json(result);
    });
  } catch (err) {
    return res.status(404).json({ error: err });
  }
});

/*-------------------------------------------------------------------------------------------------------------------------*/

//GET By Id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  try {
    con.query("SELECT * FROM dbtest WHERE id = ?", [id], (err, result) => {
      return err
        ? res.status(400).json({ error: err })
        : res.status(200).json(result);
    });
  } catch (err) {
    return res.status(404).json({ error: err });
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
  const postHardwareStatus = await getHardwareStatus();
  const postSoftwareStatus = await getSoftwareStatus();

  try {
    con.query(
      "INSERT INTO fulltest(`ip`, `hostname`, `ram`, `storage`, `software`, `hardware_status`, `software_status`) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        postIPAddressInfo,
        postHostnameInfo,
        postRamInfo,
        postStorageInfo,
        postSoftwareInfo,
        postHardwareStatus,
        postSoftwareStatus,
      ],
      (err, result) => {
        return err
          ? res.status(400).json({ error: err })
          : res.status(201).json({ message: "Created successfully", result });
      }
    );
  } catch {
    return res.status(404).json({ error: err });
  }
});

/*-------------------------------------------------------------------------------------------------------------------------*/

//Update
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const postIPAddressInfo = await getIPAddressInfo();
  const postHostnameInfo = await getHostnameInfo();
  const postRamInfo = await getRamInfo();
  const postStorageInfo = await getStorageInfo();
  const postSoftwareInfo = await getSoftwareInfo();
  const postHardwareStatus = await getHardwareStatus();
  const postSoftwareStatus = await getSoftwareStatus();

  try {
    con.query(
      "UPDATE fulltest SET `ip` = ?, `hostname` = ?, `ram` = ?, `storage` = ?, `software` = ?, `hardware_status` = ?, `software_status` = ? WHERE id = ?",
      [
        postIPAddressInfo,
        postHostnameInfo,
        postRamInfo,
        postStorageInfo,
        postSoftwareInfo,
        postHardwareStatus,
        postSoftwareStatus,
        id,
      ],
      (err, result) => {
        return err
          ? res.status(400).json({ error: err })
          : res.status(200).json({ message: "Updated successfully", result });
      }
    );
  } catch (err) {
    return res.status(404).json({ error: err });
  }
});

/*-------------------------------------------------------------------------------------------------------------------------*/

//Delete All
router.delete("/", (req, res) => {
  try {
    con.query("DELETE FROM fulltest", (err, result) => {
      return err
        ? res.status(400).json({ error: err })
        : res.status(200).json({ message: "Deleted successfully" });
    });
  } catch (err) {
    return res.status(404).json({ error: err });
  }
});

/*-------------------------------------------------------------------------------------------------------------------------*/

//Delete By Id
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  try {
    con.query("DELETE FROM fulltest WHERE id = ?", [id], (err, result) => {
      return err
        ? res.status(400).json({ error: err })
        : res.status(200).json({ message: "Deleted successfully" });
    });
  } catch (err) {
    return res.status(404).json({ error: err });
  }
});

module.exports = router;
