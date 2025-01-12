'use client'
import HomeBanner from "./components/HomeBanner";
import HomeShopping from "./components/HomeShopping";
import WhyUs from "./components/WhyUs";
import LatestProducts from "./components/LatestProducts";
import TopRated from "./components/TopRated";
import NewCollection from "@/design-system/components/NewCollection";

export default function Home() {
  return (
    <>
    <HomeBanner/>
    <HomeShopping/>
    <WhyUs/>
    <LatestProducts/>
    <TopRated/>
    <NewCollection/>
    </>
  );
}
