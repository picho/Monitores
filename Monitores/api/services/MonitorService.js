module.exports = {
     
    insertarMonitorAsignaturaCreada: function(monitores) {
        for(i = 0; i < monitores.length; i++ ){
            Monitor.create(monitores[i],function(err,monitore) {
            if (err) return false;
            });
        }
        return true;
    }
}