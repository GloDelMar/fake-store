import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { toast } from "sonner"
import { getProductById } from "../api"

const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState({})
  const [precioFinal, setPrecioFinal] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await getProductById(id)
        setProduct(productData)
        
        
        const decimalDelPorcentaje = productData.discountPercentage / 100
        const cantidadDescontada = productData.price * decimalDelPorcentaje
        const precioFinalCalculado = productData.price - cantidadDescontada
        
   
        setPrecioFinal(precioFinalCalculado)
      } catch (error) {
        toast.error("Error al cargar los detalles del producto")
        console.error("[getProductById error]", error)
      }
    };

    fetchProduct();
  }, [id]);


  return (


<main className="flex flex-col text-black justify-center items-center m-2 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl">
    <img src={product.images} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" alt="product.title"/>
    <div className="flex flex-col justify-between p-4 leading-normal bg-">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900">{product.title}</h5>
        <p className="mb-3 font-normal text-gray-700">Rating: {product.rating} / En stock: {product.stock}</p>
        <div className="flex-col">
          <h4 className="text-red-500">
            ¡PROMOCIÓN! ¡{product.discountPercentage}% de descuento!
          </h4>
          <p className="text-3xl text-red-500 font-bold">
            ${precioFinal.toFixed(2)}
          </p>
          <p className="text-gray-400">Precio en lista: ${product.price}</p>
        </div>
        <div className="flex-col">
          <p className=" text-blue-600 dark:text-gray-400 font-semibold mt-2">Descripción:</p>
          <p className="text-gray-900">{product.description}</p>
          <div>
            <h6 className="text-blue-600 mt-2 font-semibold"> Más detalles: </h6>
            <p>Ancho:{product.dimensions.width} </p>
            <p>Alto: {product.dimensions.height}</p>
            <p className="mt-2">Garantía: {product.warrantyInformation}</p>
            <p>Tiempo de entrega: {product.shippingInformation}</p>
            <p>Política de Devolución: {product.returnPolicy}</p>
            
          </div>
        </div>
        
    </div>
   
      </main>

  
  )
}

export default ProductDetailPage
