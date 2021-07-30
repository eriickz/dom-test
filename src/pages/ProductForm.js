import { Card, Form, Container, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import useProductProcessor from "./hooks/useProductProcessor"

const ProductForm = () => {
  const { productId } = useParams();

  const { product, isUpdate, onInputChange, updateProductData, createProductData, deleteProductById: deleteProduct } = useProductProcessor(productId);
 
  return(
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>{`${isUpdate ? "Editar" : "Nuevo"} Producto`}</Card.Title>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Descripción Corta" value={product.title} onChange={onInputChange} />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Descripción</Form.Label>
              <Form.Control type="text" placeholder="Descripción Corta" value={product.description} onChange={onInputChange}  />
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" placeholder="Precio" value={product.price} onChange={onInputChange} />
            </Form.Group>

            <Form.Group controlId="status">
              <Form.Label>Estado</Form.Label>
              <Form.Check
                inline
                name="group1"
                type="checkbox"
                checked={product.status === true}
                onChange={onInputChange}
              />
              <div className="form-button-group">
                <Button className="btn btn-primary" onClick={() => isUpdate ? updateProductData() : createProductData()}>Guardar</Button>
                {isUpdate && (
                  <Button className="btn btn-danger" onClick={deleteProduct}>Eliminar</Button>
                )}
                <Link className="btn btn-secondary" to="/productos">Lista de Productos</Link>
              </div>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>

  )
}

export default ProductForm;
