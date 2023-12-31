const express = require("express");
const router = express.Router();
const con = require("../DB");

//GET ALL
router.get("/", (req, res) => {
  try {
    con.query("SELECT * FROM administrator", (err, result) => {
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
    con.query(
      "SELECT * FROM administrator WHERE id = ?",
      [id],
      (err, result) => {
        return err
          ? res.status(400).json({ error: err })
          : res.status(200).json(result);
      }
    );
  } catch (err) {
    return res.status(404).json({ error: err });
  }
});

/*-------------------------------------------------------------------------------------------------------------------------*/

//Create
router.post("/", async (req, res) => {
  const { name, password } = req.body;

  try {
    con.query(
      "INSERT INTO administrator(`name`, `password`) VALUES (?, ?)",
      [name, password],
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
router.put("/:id", (req, res) => {
  const id = req.params.id;
  const newName = req.body;
  const newPassword = req.body;

  try {
    con.query(
      "UPDATE administrator SET ?, ? WHERE id = ?",
      [newName, newPassword, id],
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

//Delete By Id
router.delete("/:id", (req, res) => {
  const id = req.params.id;
  try {
    con.query("DELETE FROM administrator WHERE id = ?", [id], (err, result) => {
      return err
        ? res.status(400).json({ error: err })
        : res.status(200).json({ message: "Deleted successfully" });
    });
  } catch (err) {
    return res.status(404).json({ error: err });
  }
});

module.exports = router;
