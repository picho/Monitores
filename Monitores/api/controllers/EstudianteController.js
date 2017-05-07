/**
 * EstudianteController
 *
 * @description :: Server-side logic for managing Estudiantes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function (req,res){
        var params = req.params.all();
        Estudiante.create(params, function(err,estudiante){
            if (err) return next(err);
            res.status(201);
            res.json(estudiante);
        });
    }
};

