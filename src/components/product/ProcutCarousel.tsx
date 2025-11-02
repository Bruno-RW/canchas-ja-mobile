import type { Product } from "@/lib/types/product";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ProductCard from "@/components/product/ProductCard";
import { cn } from "@/lib/utils/utils";

interface ProductCarouselProps {
  title?: string;
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  products,
}) => {
  return (
    <section>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <div className={cn("flex items-center mb-6", title ? "justify-between" : "justify-end")}>
          {title && <h2 className="m-0! text-2xl font-semibold text-foreground">{title}</h2>}

          {/* Navigation Buttons */}
          <div className="flex items-center gap-2">
            <CarouselPrevious className="static h-10 w-10 rounded-full border border-border bg-background hover:cursor-pointer hover:bg-accent disabled:opacity-50 translate-x-0 translate-y-0" />
            <CarouselNext className="static h-10 w-10 rounded-full border border-border bg-background hover:cursor-pointer hover:bg-accent disabled:opacity-50 translate-x-0 translate-y-0" />
          </div>
        </div>

        <CarouselContent className="-ml-2 md:-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-[280px] md:basis-[320px]">
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ProductCarousel;
