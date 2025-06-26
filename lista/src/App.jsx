import { useState } from "react";

function ListaCompras() {
  // Estado para la lista y el nuevo producto
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  // Agrega un nuevo producto
  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto("");
    }
  };

  // Elimina un producto por índice
  const eliminarProducto = (index) => {
    const nuevaLista = productos.filter((_, i) => i !== index);
    setProductos(nuevaLista);
  };//_ esto representa cada elemento del array productos, e i es el índice del elemento actual en el array.
  //  i ! == solo se incluyen elementos en la nueva lista de elemntos cuyo indice no sea igual al de index pasado como argumento

  // Render del componente
  return (
    <div>
      <h2>Lista de Compras</h2>
      <input
        type="text"
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
      />
      <button onClick={agregarProducto}>Agregar</button>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto}
            <button onClick={() => eliminarProducto(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaCompras;
