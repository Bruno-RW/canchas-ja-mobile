"use client";

import { useState } from "react";
import { IonImg, IonRouterLink } from "@ionic/react";
import { LuHeart, LuStar } from "react-icons/lu";
import { useTranslation } from "react-i18next";

import { Product } from "@/lib/types/product";
import { cn } from "@/lib/utils/utils";

interface ProductCardProps {
  product: Product
  onFavoriteToggle?: (id: string, isFavorite: boolean) => void;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onFavoriteToggle,
  className,
}) => {
  const {
    id,
    images,

    details,
    description,

    location,
    address,

    dateRange,
    price,

    currency,
    discountPercentage,
    discountDuration,
    
    rating,
    reviews
  } = product;

  const { t } = useTranslation("Component.Product.ProductCard");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);
    onFavoriteToggle?.(id, newFavoriteState);
  };

  const discountedPrice = discountPercentage ? price * (1 - discountPercentage / 100) : price;

  return (
    <IonRouterLink routerLink={`/product/${id}`} className={cn("group cursor-pointer", className)}>
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-700 mb-3">
        
        {/* Image */}
        {/* {images.length > 0 ? (
          <Image
            src={images[currentImageIndex]}
            alt={location}
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 dark:bg-gray-600" />
        )} */}
        <div className="w-full h-full bg-gray-300 dark:bg-gray-600" />

        {/* Discount Badge */}
        {discountPercentage && (
          <div className="absolute top-3 left-3 flex items-center justify-center bg-white dark:bg-gray-100 px-2 py-1 rounded-md shadow-sm">
            <span className="text-xs font-semibold text-gray-900">
              {discountPercentage}% OFF
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-1 right-1 p-2 hover:scale-110 hover:cursor-pointer transition-transform"
          aria-label="Add to favorites"
        >
          <LuHeart
            className={cn(
              "w-6 h-6 stroke-2",
              isFavorite
                ? "fill-red-500 stroke-red-500"
                : "fill-none stroke-white drop-shadow-md"
            )}
          />
        </button>

        {/* Image Pagination Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={cn(
                  "w-2 h-2 rounded-full transition-all hover:cursor-pointer",
                  index === currentImageIndex
                    ? "bg-white w-2.5 h-2.5"
                    : "bg-white/60 hover:bg-white/80"
                )}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="space-y-1">

        {/* Location and Rating */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-base text-foreground">
            {location}
          </h3>
          {rating && (
            <div className="flex items-center gap-1">
              <LuStar className="w-4 h-4 fill-current" />
              <span className="text-sm font-medium">{rating.toFixed(2)}</span>
            </div>
          )}
        </div>

        {/* Address */}
        <p className="text-sm text-muted-foreground">{address}</p>

        {/* Date Range */}
        <p className="text-sm text-muted-foreground">{dateRange}</p>

        {/* Price */}
        <div className="flex items-baseline gap-1 pt-1">
          {discountPercentage ? (
            <span className="space-x-2">
              <span className="font-medium text-muted-foreground line-through">
                {currency}
                {price}
              </span>
              <span className="font-semibold text-foreground">
                {currency}
                {discountedPrice.toFixed(0)}
              </span>
            </span>
          ) : (
            <>
              <span className="font-semibold text-foreground">
                {currency}
                {price}
              </span>
            </>
          )}

          <span className="text-sm text-muted-foreground">
            {t("PriceUnit")}
          </span>
        </div>
      </div>
    </IonRouterLink>
  );
};

export default ProductCard;
