const fs = require ('fs');


const registrar = (nombre, edad, animal, color, enfermedad) => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));

    const nuevaCita = {nombre, edad, animal, color, enfermedad};
    citas.push(nuevaCita);

    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 3));
    console.log('Cita registrada con éxito', nuevaCita);
};

const leer = () => {
    if (!fs.existsSync('citas.json')) {
        return 'No hay citas registradas';
    }
    
    let citas = fs.readFileSync('citas.json', 'utf-8');
    return JSON.parse(citas);
}

module.exports = { registrar, leer };