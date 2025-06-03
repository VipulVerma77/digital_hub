import { about } from "@/assets";
import { AboutUs, Category, ImageSlider } from "@/component";
import React from "react";


const Home: React.FC = () => {
  return (
    <div className="min-h-screen px-4 py-5 bg-white text-zinc-800">
      <ImageSlider />
      <AboutUs
       title="About Us"
       description="Digi tool gyan for LIS professionals is an online directory of varied digital tools used in libraries for providing services to its patrons. Digi tool gyan for LIS professionals is an online directory of varied digital tools used in libraries for providing services to its patrons. It offers information on the features, pricing, and reviews of each tool, helping professionals make informed decisions on which tools to incorporate into their library services. This resource is continuously updated to ensure that professionals have access to the latest and most relevant digital tools available. The directory has classified tools into categories.Some of the categories include reference management tools, digital repository platforms, and library management systems. This makes it easier for professionals to navigate and find the specific tools they are looking for based on their library's needs."
       imageSrc={about}
       />
       <Category/>
    </div>
  );
};

export default Home;
