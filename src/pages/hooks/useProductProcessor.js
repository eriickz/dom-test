import { useState, useEffect } from "react";
import { getProductId, updateProduct, createProduct, deleteProduct } from "../services";
import Swal from "sweetalert2";

const useProductProcessor = productId => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    status: false,
  });

  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (productId !== undefined) {
      getProductId(productId).then(({ data }) => {
        setProduct(data);
        setIsUpdate(true);
      })
    }
  }, [productId])

  const onInputChange = e => {
    let { id, value } = e.target;

    if (id === "price") {
      value = parseInt(value);
    }

    if (id === "status") {
      value = e.target.checked;
    }

    setProduct({ ...product, [id]: value })
  }

  const updateProductData = () => {
    Swal.fire({
      title: 'Actualizar Producto',
      text: '¿Estas seguro que deseas actualizar este producto?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Actualizar',
    }).then(result => {
      if (result.isConfirmed) {
        updateProduct(productId, product).then(() => {
          Swal.fire({
            title: '¡Enhorabuena!',
            text: 'Se ha actualizado el producto exitosamente.',
            icon: 'success',
          }).then(() => {
            window.location.replace("/productos")
          }) 
        })      
      }
    })
  }
  
  const createProductData = () => {
    Swal.fire({
      title: 'Crear Producto',
      text: '¿Estas seguro que deseas crear este producto?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Crear',
    }).then(result => {
      if (result.isConfirmed) {
        createProduct(product).then(() => {
          Swal.fire({
            title: '¡Enhorabuena!',
            text: 'Se ha creado el producto exitosamente.',
            icon: 'success',
          }).then(() => {
            window.location.replace("/productos")
          })
        })      
      }
    })
  }

  const deleteProductById = () => {
    Swal.fire({
      title: 'Eliminar Producto',
      text: '¿Estas seguro que deseas eliminar este producto?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
    }).then(result => {
      if (result.isConfirmed) {
        deleteProduct(productId).then(() => {
          Swal.fire({
            title: '¡Enhorabuena!',
            text: 'Se ha eliminado el producto exitosamente.',
            icon: 'success',
          }).then(() => {
            window.location.replace("/productos")
          })
        })
      }
    })
  }

  return { product, isUpdate, onInputChange, updateProductData, createProductData, deleteProductById };
}

export default useProductProcessor;
