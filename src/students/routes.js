const { Router } = require("express");
const controller = require("./controller");
const pool = require("../../db");
// // const { Pool } = require("pg");

const router = Router();

router.get("/", controller.getStudents);
router.get("/:id", controller.getStudentsById);

module.exports = router;
