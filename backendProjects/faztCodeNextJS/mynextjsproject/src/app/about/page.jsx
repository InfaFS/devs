"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
//export const metadata = {
//    title: "Acerca de la pagina"
//}

export default function AboutPage(){
    const router = useRouter()
    return <section>
         <h1>Usted esta en la about page</h1>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Reprehenderit cumque officia neque repellendus cupiditate, 
            quo amet doloremque explicabo aut quaerat harum tempora placeat dolorum 
            qui ea nobis blanditiis, animi modi asperiores libero! Odio, pariatur? 
            Tempore enim quibusdam consequuntur praesentium tempora fugit! 
            Id voluptatum expedita architecto rerum esse alias fuga, 
            veniam atque quaerat suscipit, cumque non laudantium dolorem 
            reiciendis qui, modi ratione unde accusamus quidem ipsam? 
            Recusandae cum soluta quos deserunt corrupti. Illo aliquid 
            unde quidem consequuntur molestiae eveniet facilis culpa 
            repudiandae officiis iure. Velit ipsum quas qui ad, 
            nostrum consequatur error. Ab dolorum laudantium,
            accusamus voluptatem tempora aperiam corrupti consequuntur!</p>

          <button className="bg-red-500 px-3 py-2 rounded-md"
            onClick={() => {
                alert('Executing code')
                router.push('/')
            }}
          >
                Click
            </button>
      
    </section>


}
