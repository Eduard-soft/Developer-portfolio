// icons


// service data


// components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

// framer motion
import { motion } from "framer-motion";
import { fadeIn} from '../../variants';

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-80 flex-1">
      <Circles />
      <div className="container mx-auto"></div>
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div>
            <h2 className="h2 xl:mt-8">
              My services <span className="text-accent">.</span></h2>
          </div>
          {/* slider */}
          <ServiceSlider />
        </div>
      <Bulb />
    </div>
  );
};

export default Services;
