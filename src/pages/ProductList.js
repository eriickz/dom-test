import { Card, Table, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProductsRetriever from "./hooks/useProductsRetriever"

const ProductList = () => {
  const { products } = useProductsRetriever();

  return(
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>Lista de Productos</Card.Title>
          <Table striped hover>
            <thead>
              <tr>
                <td>Nombre</td>
                <td>Descripción</td>
                <td>Precio</td>
                <td>Estado</td>
                <td>Acciones</td>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>RD${product.price}</td>
                  <td>{product.status ? "Activo" : "Inactivo"}</td>
                  <td>
                    <div className="button-group">
                      <Link to={`/producto/${product.id}`}>Editar</Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Link className="btn btn-success" to="/nuevo-producto">Agregar Producto</Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ProductList;
