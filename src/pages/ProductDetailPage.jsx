import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "sonner"
import { getProductById } from "../api"
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"


export default function ProductDetailPage(){
  useAuth()

  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [precioFinal, setPrecioFinal] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(id);
        setProduct(fetchedProduct);

      
        const decimalDelPorcentaje = fetchedProduct.discountPercentage / 100
        const cantidadDescontada = fetchedProduct.price * decimalDelPorcentaje
        const precioFinalCalculado = fetchedProduct.price - cantidadDescontada

        setPrecioFinal(precioFinalCalculado)
      } catch (error) {
        toast.error("Error al cargar los detalles del producto")
        console.error("[getProductById error]", error);
      }
    };

    fetchProduct()
  }, [id])


  return (


    <main className="flex justify-center items-center min-h-screen bg-black">
    <div className="max-w-4xl w-full p-8 bg-lime-900 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row">
        <img
          src={product.images} 
          className="object-cover w-full h-96 md:h-auto md:w-48 rounded-lg mb-8 md:mb-0 gap-4 m-3"
          alt={product.title} 
        />
        <div className="md:ml-8 flex flex-col justify-between">
          <h5 className="text-4xl font-bold tracking-tight text-gray-900">
            {product.title}
          </h5>
          <p className="text-gray-400 mb-3">
            Rating: {product.rating} / En stock: {product.stock}
          </p>
          {product.discountPercentage && (
            <div className="flex flex-col mb-4">
              <h4 className="text-red-500 font-bold">
                ¡PROMOCIÓN! ¡{product.discountPercentage}% de descuento!
              </h4>
              <p className="text-3xl text-red-500 font-bold">
                {precioFinal !== null && `$${precioFinal.toFixed(2)}`} 
              </p>
              <p className="text-gray-400">Precio en lista: ${product.price}</p>
            </div>
          )}
          <div className="flex flex-col mb-4">
            <p className="text-blue-600 dark:text-gray-400 font-bold">Descripción:</p>
            <p className="text-gray-900 font-semibold">{product.description}</p>
          </div>
          <div className="flex flex-col">
            <h6 className="text-blue-600 font-bold">Más detalles:</h6>
            <p className="text-gray-900 font-semibold">Ancho: {product.dimensions?.width}</p> 
            <p className="text-gray-900 font-semibold">Alto: {product.dimensions?.height}</p> 
            <p className="mt-2 text-blue-600 font-bold">Garantía: {product.warrantyInformation}</p>
            <p className="text-gray-900 font-semibold">Tiempo de entrega: {product.shippingInformation}</p>
            <p className="text-gray-900 font-semibold"> Política de Devolución: {product.returnPolicy}</p>
          </div>
        </div>
      </div>
    </div>
  </main>

  
  )
}


