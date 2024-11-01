const fs = require("fs");

const registrar = (nombre, edad, animal, color, enfermedad) => {
  fs.readFile("./citas.json", "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer archivo: ", err);
      return;
    }

    const citas = JSON.parse(data);

    const nuevaCita = {
      nombre,
      edad,
      animal,
      color,
      enfermedad,
    };

    citas.push(nuevaCita);
    fs.writeFile("./citas.json", JSON.stringify(citas), (error) => {
      if (error) {
        console.error("Error al escribir el archivo: ", err);
        return;
      } else {
        console.log("Cita registrada con Exito");
      }
    });
  });
};

const leer = () => {
    fs.readFile("./citas.json", "utf8", (err, data) => {
        if (err) {
          console.error("Error al leer archivo: ", err);
          return;
        }
        try {
          const citas = JSON.parse(data);
          console.log("Listado de Citas");
          
          console.log(citas);
        } catch (parseError) {
          console.error("Error al parsear el archivo JSON: ", parseError);
        }
      });
};

module.exports = { registrar, leer };