import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Product from "@/pages/Product";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <Product name={slug}/>
      <Footer />
    </main>
  )
  
};

export default page;
