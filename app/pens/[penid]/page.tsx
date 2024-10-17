import { penData } from "../../components/cardData";
import Image from "next/image";
import Navbar from "../../components/navbar";
import Cartcomponent from "../../cart/cartcomponent";




type PostProps = {
  params: {
    penid: string;
  };
};



 
// Fetch static paths for the dynamic blog posts
export async function generateStaticParams() {
  return penData.map(pen => ({
    penid: pen.id,
  }));
}

// Fetch the data for the specific post based on the slug
const Pen = async ({ params }: PostProps) => {
  const pen = penData.find(p=> p.id === params.penid);

  if (!pen) {
    // Handle 404 if post not found
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p>The post you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
  <Navbar />
  
  {/* Responsive Container for Grid */}
  <div className="container mx-auto pt-20 px-4 md:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center">
      
      {/* Pen Default Image - Responsive */}
      <div className="flex justify-center md:justify-start pt-10">
        <Image 
          src={pen.defaultImage} 
          alt="Pen default image" 
          width={470} 
          height={520} 
          className="w-full h-auto max-w-xs md:max-w-md" 
        />
      </div>
      
      {/* Pen Hover Image - Responsive */}
      <div className="flex justify-center md:justify-start pt-10">
        <Image 
          src={pen.hoverImage} 
          alt="Pen hover image" 
          width={500} 
          height={500} 
          className="w-full h-auto max-w-xs md:max-w-md"
        />
      </div>

      {/* Cart Section - Responsive */}
      <div className="flex justify-center md:justify-start pt-10">
        <Cartcomponent/>
      </div>

    </div>
  </div>
</div>

)}
export default Pen