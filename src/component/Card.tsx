import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CategoryCardProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  index: number;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      <Card className="p-6 flex flex-col justify-between h-full shadow-sm hover:shadow-md transition">
        <div className="flex flex-col items-center text-center">
          <Icon className="h-10 w-10 text-sky-500 mb-4" />
          <h3 className="text-lg font-semibold text-zinc-800 mb-2">{title}</h3>
          <p className="text-sm text-zinc-600 text-justify">{description}</p>
        </div>
        <div className="mt-4 flex justify-center">
          <Button variant="outline" className="text-sky-600 border-sky-500 hover:bg-sky-50">
            Explore More
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default CategoryCard;
