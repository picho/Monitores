module.exports = {
     
    insertarEstudiantesAsignaturaCreada: function(estudiantes) {
        for(i = 0; i < estudiantes.length; i++ ){
            Estudiante.create(estudiantes[i],function(err,estudiante) {
            if (err) return false;
            });
        }
        return true;
    }
}