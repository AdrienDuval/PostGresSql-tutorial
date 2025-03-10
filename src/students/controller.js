const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  console.log("getting students");

  pool.query(queries.getStudents, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getStudentsById = (req, res) => {
  const id = parseInt(req.params.id);

  console.log({ id });
  pool.query(queries.getStudentsById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getStudents,
  getStudentsById,
};
