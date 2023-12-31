import { client } from "@/sanity/lib/client"
import { groq } from "next-sanity"

import { SanityProduct } from "@/config/inventory"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { ProductSort } from "@/components/product-sort"
import { seedSanityData } from "@/lib/seed"
import LoadingScreen from "@/components/LoadingScreens/LoadingScreen"
import Image from "next/image"
interface Props {
  searchParams:{
    date?:string
    price?:string
    color?: string
    category?: string
    size?:string
    search?:string
  }
}

export default async function Page({searchParams}:Props) {
  const { date = "desc", price, color, category, size, search } = searchParams
  const priceOrder = price ? `| order(price ${price})` : ""
  const dateOrder = date ? `| order(_createdAt ${date})` : ""
  const order = `${priceOrder}${dateOrder}`

  // filter results by searchParams
  const productFilter = `_type == "product"`
  const colorFilter = color ? `&& "${color}" in colors` : ""
  const categoryFilter = category ? `&& "${category}" in categories` : ""
  const sizeFilter = size ? `&& "${size}" in sizes` : ""
  const searchFilter = search ? `&& name match "${search}"` : ""
  const filter = `*[${productFilter}${colorFilter}${categoryFilter}${sizeFilter}${searchFilter}]`


  const products = await client.fetch<SanityProduct[]>(
    groq`${filter} ${order} {
      _id,
      _createdAt,
      name,
      sku,
      images,
      currency,
      price,
      description,
      "slug": slug.current
    }`
  )

  // await seedSanityData()

  return (
    
  
    <div>
             <LoadingScreen type="gradient-waves" >
        <Image
          src="/assets/images/logo.png"
          alt="LOGO"
          width={200}
          height={198}
        />
      </LoadingScreen>
    <div>
      
      <div className="px-4 pt-20 text-center ">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60"></div>
        <Image
      
      className="w-full "
      src="/frontPage.jpg"
      alt="Next.js Logo"
      width={1800}
      height={2000}
      priority
    />
       
        </div>
        <h1 className="text-4xl font-extrabold tracking-normal text-amber-400">{siteConfig.name}</h1>
        <p className="mx-auto mt-4 max-w-3xl text-base">{siteConfig.description}</p>
      </div>
      <div>
        <main className="mx-auto max-w-6xl px-6">
          
          <div className="flex items-center justify-between border-b border-gray-200 pb-4 pt-24 dark:border-gray-800">
            
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
            {products.length} result{products.length === 1 ? "" : "s"}
            </h1>
            {/* Product Sort */}
            <ProductSort/>
          </div>
              
          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className={cn("grid grid-cols-1 gap-x-8 gap-y-10",products.length > 0 ?
            'lg:grid-cols-4': 'lg:grid-cols-[1fr_3fr]')}>
              <div className="hidden lg:block">
                {/* Product filters */}
                <ProductFilters/>
              </div>
              {/* Product grid */}
              <ProductGrid products={products}/>
            </div>
            
          </section>
          
        </main>
      </div>
    </div>
    </div>
  )
}
