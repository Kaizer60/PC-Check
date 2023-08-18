const express = require('express')
const router = express.Router()
const con = require('../DB')
const { getHostnameInfo, getIPAddressInfo, getRamInfo, getStorageInfo, getHardwareStatus } = require('../Data/Hardware.Data')
const { getSoftwareInfo } = require('../Data/Software.Data')

//GET ALL
router.get('/', (req, res) => {
    try{
        con.query(
            "SELECT * FROM dbtest",
            (err, result) => {
                return err? res.status(400).json({error: err}):res.status(200).json(result)
            }
        )
    }
    catch(err){
        return res.status(404).json({error: err})
    }
})

/*-------------------------------------------------------------------------------------------------------------------------*/

//GET By Id
router.get('/:id', (req, res) => {
    const id = req.params.id
    try{
        con.query(
            "SELECT * FROM dbtest WHERE id = ?",
            [id],
            (err, result) => {
                return err? res.status(400).json({error: err}):res.status(200).json(result)
            }
        )
    }
    catch(err){
        return res.status(404).json({error: err})
    }
})

/*-------------------------------------------------------------------------------------------------------------------------*/

//Create
router.post('/',async (req,res) => {
    const check = await getSoftwareInfo()
    console.log(typeof(check))

    try{
        if(check != 'undefined'){
            con.query(
                "INSERT INTO dbtest(`check`) VALUES (?)",
                [check],
                (err, result) => {
                    return err? res.status(400).json({error: err}):res.status(201).json({message: 'Created successfully', result})
                }
            )
        }else{
            console.log(err)
        }
        // con.query(
        //     "INSERT INTO dbtest(`check`) VALUES (?)",
        //     [check],
        //     (err, result) => {
        //         return err? res.status(400).json({error: err}):res.status(201).json({message: 'Created successfully', result})
        //     }
        // )
    }
    catch{
        return res.status(404).json({error: err})
    }
})

/*-------------------------------------------------------------------------------------------------------------------------*/

//Update
router.put('/:id', (req,res) => {
    const id = req.params.id
    const newCheck = req.body

    try{
        con.query(
            "UPDATE dbtest SET ? WHERE id = ?",
            [newCheck,id],
            (err, result) => {
                return err? res.status(400).json({error: err}):res.status(200).json({message: 'Updated successfully', result})
            }
        )
    }
    catch(err){
        return res.status(404).json({error: err})
    }
})

/*-------------------------------------------------------------------------------------------------------------------------*/

//Delete All
router.delete('/', (req,res) => {
    try{
        con.query(
            "DELETE FROM dbtest",(err, result) => {
                return err? res.status(400).json({error: err}):res.status(200).json({message: 'Deleted successfully'})
            }
        )
    }
    catch(err){
        return res.status(404).json({error: err})
    }
})

/*-------------------------------------------------------------------------------------------------------------------------*/

//Delete By Id
router.delete('/:id', (req,res) => {
    const id = req.params.id
    try{
        con.query(
            "DELETE FROM dbtest WHERE id = ?",
            [id],
            (err, result) => {
                return err? res.status(400).json({error: err}):res.status(200).json({message: 'Deleted successfully'})
            }
        )
    }
    catch(err){
        return res.status(404).json({error: err})
    }
})

module.exports = router