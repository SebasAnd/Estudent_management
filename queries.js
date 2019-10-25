const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'registers',
  password: 'anddan',
  port: 5432,
})
const getAlumns = (request, response) =>{
  const asignaturaid = parseInt(request.params.id)
  // console.log(asignaturaid)
  pool.query('SELECT * FROM registerschema."AlumnoAsignatura" JOIN registerschema."Alumno" ON registerschema."AlumnoAsignatura"."Alumnoid" = registerschema."Alumno"."id" WHERE "Asignaturaid" = $1',[asignaturaid], (error, results) => {
    if (error) {
      throw error
    }
    
    response.status(200).json(results.rows)
  })
}
const getRecord = (request, response) =>{
  const alumnoid = parseInt(request.params.id)
  // console.log(asignaturaid)
  pool.query('SELECT * FROM registerschema."AlumnoAsignatura" JOIN registerschema."Alumno" ON registerschema."AlumnoAsignatura"."Alumnoid" = registerschema."Alumno"."id" WHERE "Alumnoid" = $1',[alumnoid], (error, results) => {
    if (error) {
      throw error
    }
    
    response.status(200).json(results.rows)
  })
}




module.exports = {
  getAlumns,
  getRecord
}