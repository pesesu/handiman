import React from 'react';
import { Button } from '../ui/button';
import ServiceCardDefault from '../shared/ServiceCardDefault';
import { motion } from 'framer-motion';
import services from '@/contants/services';
import ServiceCardModified from '../shared/ServiceCardModified';

const FeaturedServicesMotion = () => {
  const defaultCard = Array.from({ length: 12 }, (_, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} // Ensures animation runs once when in view
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* <ServiceCardDefault /> */}
    </motion.div>
  ));

  return (
    <motion.div 
      className='featured-servicess  bg-[#0b0c10] py-12 px-3 md:px-5'
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
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
      >
  
      {services.map((service, i) => {
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <ServiceCardDefault service={service} key={i} />
            {/* <ServiceCardModified service={service} key={i} /> */}
          </motion.div>
        )
      }) }
       
      </motion.div>
    </motion.div>
  );
};

export default FeaturedServicesMotion;
