import Citas from "../js/classes/Citas";

describe("Probar la clase de citas", () => {
  const citas = new Citas();
  const id = Date.now();
  test("Agregar nueva cita", () => {
    const citaObj = {
      id,
      mascota: "Alay",
      propietario: "Jesus",
      telefono: "685934281",
      fecha: "06/04/2022",
      hora: "10:30",
      sintomas: "Vomitos",
    };
    citas.agregarCita(citaObj);

    // Prueba
    expect(citas).toMatchSnapshot();
  });

  test("Actualizar cita", () => {
    const citaActualizada = {
      id,
      mascota: "Cathy",
      propietario: "Jesus",
      telefono: "685934281",
      fecha: "06/04/2022",
      hora: "10:30",
      sintomas: "Vomitos",
    };
    citas.editarCita(citaActualizada);

    expect(citas).toMatchSnapshot();
  });

  test("Eliminar cita", () => {
    citas.eliminarCita(id);
    expect(citas).toMatchSnapshot();
  });
});
