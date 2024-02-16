import Image from "next/image";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h2>Hello World for Next JS</h2>
      <a href="/users">Users</a>
      <ProductCard></ProductCard>
    </main>
  );
}
