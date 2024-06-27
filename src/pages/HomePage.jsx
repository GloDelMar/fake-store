import { Link } from "react-router-dom"
import PageSection from "../components/PageSEction"

export default function HomePage () {
    return (
        <div>
        <h1 className="text-4xl font-bold text-center">Home Page</h1>
        <p className="text-center" > This is the home Page</p>
        <PageSection>
            <h2>Vendemos de todo</h2>
        </PageSection>
        <PageSection>
           <div>
            <img src="https://static.vecteezy.com/system/resources/previews/015/131/911/non_2x/flat-cartoon-style-shop-facade-front-view-modern-flat-storefront-or-supermarket-design-png.png" alt="" />
            <p>Hola, soy un texto</p>
            </div>
        </PageSection>
    </div>
    )
}