import React from 'react';
import { Button } from '../ui/button';
import ServiceCardDefault from '../shared/ServiceCardDefault';
import { motion } from 'framer-motion';

const FeaturedServicesMotion = () => {
  const defaultCard = Array.from({ length: 12 }, (_, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} // Ensures animation runs once when in view
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <ServiceCardDefault />
    </motion.div>
  ));

  return (
    <motion.div 
      className='featured-servicess py-12 px-4 md:px-5 bg-[#101218]'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Heading & Button */}
      <motion.div 
        className="flex items-center justify-between mb-10"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div className="text-xl text-white text-left font-semibold h-font">Featured Services</div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <Button className='text-xs text-[#0092FF] hover:text-[#101218] bg-transparent hover:bg-[#0092FF] border-[#0092FF] rounded-lg px-3 font-semibold' variant="outline">
            View All
          </Button>
        </motion.div>
      </motion.div>

      {/* Cards Grid */}
      <motion.div 
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
      >
        {defaultCard}
      </motion.div>
    </motion.div>
  );
};

export default FeaturedServicesMotion;
