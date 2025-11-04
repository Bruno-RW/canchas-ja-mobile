import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";

import { 
  PRODUCT_BEST_RATED_API_URL,
  PRODUCT_NEAR_YOU_API_URL,
  PRODUCT_SPECIAL_DISCOUNT_API_URL
} from "@/lib/routes/backend";

import { Product } from "@/lib/types/product";

import useSession from "@/hooks/useSession";

import ProductCarousel from "@/components/product/ProductCarousel";

const HomePage = () => {
  const { user } = useSession();

  const { t } = useTranslation();
  const text = (key: string) => t(`Page.Home.HomePage.${key}`);

  const [specialDiscounts, setSpecialDiscounts] = useState<Product[]>([]);
  const [bestRated, setBestRated] = useState<Product[]>([]);
  const [nearYou, setNearYou] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const resSpecial = await axios.get(PRODUCT_SPECIAL_DISCOUNT_API_URL);
        setSpecialDiscounts(resSpecial.data);

        const resBest = await axios.get(PRODUCT_BEST_RATED_API_URL);
        setBestRated(resBest.data);

        const resNear = await axios.get(`${PRODUCT_NEAR_YOU_API_URL}/${user.id}`);
        setNearYou(resNear.data);

      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <ProductCarousel title={text("SpecialDiscounts")} products={specialDiscounts} />
      <ProductCarousel title={text("BestRated")} products={bestRated} />
      { nearYou.length > 0 && <ProductCarousel title={text("NearYou")} products={nearYou} /> }
    </>
  );
};

export default HomePage;
