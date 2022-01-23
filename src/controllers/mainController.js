// Acá nos falta nuestra fuente de datos
const listaPlatos = [
{
  id:1,
  titulo:'Carpaccio fresco',
  descripcionCorta: 'Entrada Carpaccio de salmón con citricos',
  descripcionDetallada: 'Excepteur sint occaecat cupidatat non  proident, sunt in culpa qui officia de mucha mas letra por aqui',
  precio: '65.50',
  img: 'Carpaccio-de-salmon.jpg'
},
{
  id:2,
  titulo:'Risotto de berenjena',
  descripcionCorta: 'Risotto de berenjena y queso de cabra',
  descripcionDetallada: 'Excepteur sint occaecat cupidatat non  proident, sunt in culpa qui officia de mucha mas letra por aqui',
  precio: '47.00',
  img: 'Risotto-berenjena-queso-cabra.jpg'
},
{
  id:3,
  titulo:'Mousse de arroz',
  descripcionCorta: 'Mousse de arroz con leche y aroma de azahar',
  descripcionDetallada: 'Excepteur sint occaecat cupidatat non  proident, sunt in culpa qui officia de mucha mas letra por aqui',
  precio: '27.50',
  img: 'Mousse-de-arroz-con-leche.jpg'
},
{
  id:4,
  titulo:'Esparragos Blancos',
  descripcionCorta: 'Esparragos Blancos con vinagreta de verduras y jamon iberico',
  descripcionDetallada: 'Excepteur sint occaecat cupidatat non  proident, sunt in culpa qui officia de mucha mas letra por aqui',
  precio: '37.50',
  img: 'esparragos.png'
}

]

// Acá nos falta un objeto literal con las acciones para cada ruta
module.exports = {
  index: (req, res) => {
      res.render('index',{ menu: listaPlatos });
    },
    detalle: (req, res) => {
      let id = req.params.id;
      let plato=listaPlatos.find(plato=> plato.id == id);
      res.render('detalleMenu',{ plato: plato });
    },
}

// Acá exportamos el resultado