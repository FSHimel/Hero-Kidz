import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-11/12 mx-auto space-y-20">
      <section>
        <Banner></Banner>
      </section>
      <section>
        <Products></Products>
      </section>
    </div>
  );
}
