/**
 * Asignatura.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string'
    },
    monitores: {
      collection: 'monitor'
    },
    estudiantes: {
      collection: 'estudiante'
    },
    preguntas: {
      collection: 'pregunta'
    }
  },
  estudianteEnAsignatura: function(idEstudiante,estudiantes) {
    sails.log.debug("entre metodo");
    for(i = 0; i < estudiantes.length;i++) {
      if(idEstudiante == estudiantes[i].id){
        return true;
      }
    }
    return false;
  },
  insertarPregunta: function(pregunta, asignatura){
    sails.log.debug("en add");
    asignatura.preguntas.add(pregunta);
    asignatura.save(function(err){
      if (err)  return null;
      return asignatura;
    });
  }
};

