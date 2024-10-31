const fs = require('fs')

const cita = [
    {
        nombre: 'nombre',
        edad: 'edad',
        especie: 'especie',
        color: 'color',
        enfermedad: 'enfermedad'
    },
];

fs.writeFileSync('citas.json', JSON.stringify(cita));

module.exports = {cita};