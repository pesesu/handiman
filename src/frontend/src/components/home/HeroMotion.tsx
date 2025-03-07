import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";
import { motion } from "framer-motion";

// Floating animations for images
const floatingAnimations = [
  { x: [0, 30, 0], y: [0, 30, 0], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } },
  { x: [0, -35, 0], y: [0, 35, 0], transition: { duration: 4, repeat: Infinity, ease: "easeInOut" } },
  { x: [0,  -32, 0], y: [0, 32, 0], transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" } },
  { x: [0, -28, 0], y: [0, -28, 0], transition: { duration: 7, repeat: Infinity, ease: "easeInOut" } },
];

// Horizontal movement for the cook image
const cookAnimation = {
  x: ["-14vw", "14vw", "-14vw"],
  transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
};

// Hero section entrance animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const HeroMotion = () => {
  return (
    <motion.div
      className="her px-3 md:px-5  md:py-20 md:gap-10 h-[100vh] relative"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Floating Images */}
      <motion.img className="h-[6rem] md:h-[5rem] absolute top-16 md:top-28 left-6 md:left-20" src="/images/hero/cart.png" alt="cart" animate={floatingAnimations[0]} />
      <motion.img className="h-[3.8rem] md:h-[4rem] absolute bottom-20 md:bottom-14 left-14 md:left-36" src="/images/hero/ruler.png" alt="ruler" animate={floatingAnimations[1]} />
      <motion.img className="h-[2.5rem] md:h-[2.5rem] absolute top-24 right-12 md:right-42" src="/images/hero/tools.png" alt="tools" animate={floatingAnimations[2]} />
      <motion.img className="h-[4.5rem] absolute bottom-12 md:bottom-10 right-10 md:right-28" src="/images/hero/machine.png" alt="machine" animate={floatingAnimations[3]} />
      {/* <motion.img className="h-[3rem] md:h-[4rem] hidden lg:block absolute top-32 sm:-bottom-6 right-1/2 translate-x-1/2" src="/images/hero/cook.png" alt="cook" animate={cookAnimation} /> */}

      {/* Content Section */}
      <div className="flex flex-col items-center justify-center gap-16 md:gap-14 h-full md:pt-10 relative z-[2]">
        {/* Animated Headline */}
        <motion.div className="hero-texts flex flex-col justify-center items-center gap-6 md:gap-6 text-center" variants={fadeInUp}>
          <motion.div
            className="text-3xl/11 md:text-4xl/12 font-[600] md:font-[600] text-white h-font "
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Find Products & Services <span className="">Near You</span>
          </motion.div>
        </motion.div>
        <motion.div className="hidden hero-texts flex flex-col justify-center items-center gap-10 md:gap-6 text-center" variants={fadeInUp}>
          <motion.div
            className="text-4xl font-bold h-font leading-12 bg-[#101218]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Find Products and Services Near You
          </motion.div>
        </motion.div>
        

        {/* Animated Search Section */}
        <motion.div className="searh w-full" variants={fadeInUp}>
          <Tabs defaultValue="service" className="w-full flex flex-col justify-center items-center gap-9 md:gap-10">
            <TabsList className="bg-[#30303b]">
              <TabsTrigger className="data-[state=active]:bg-[#4D5160] data-[state=active]:text-white text-[#FFFFFF]/70" value="service">
                Service
              </TabsTrigger>
              <TabsTrigger className="data-[state=active]:bg-[#4D5160] data-[state=active]:text-white text-[#FFFFFF]/70" value="product">
                Marketplace
              </TabsTrigger>
              <TabsTrigger className="data-[state=active]:bg-[#4D5160] data-[state=active]:text-white text-[#FFFFFF]/70" value="provider">
                Provider
              </TabsTrigger>
            </TabsList>

            {/* Animated Input Section */}
            <TabsContent className="w-full" value="service">
              <motion.div className="flex justify-center" variants={fadeInUp}>
                <div className="flex w-full md:max-w-[50rem] md:gap-10 items-center md:px-10">
                  <motion.div
                    className="servic-search flex items-center justify-center w-full bg-[#4D5160] rounded-xl px-5 h-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <input type="text" className="w-full placeholder-[#FFFFFF]/60 outline-none text-white" placeholder="Search services near you" />
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-100" />
                  </motion.div>
                  <motion.div
                    className="hidden md:block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  >
                    <Button className="text-white bg-[#0092FF] hover:bg-[#027cda] rounded-lg h-[44px] px-3 font-semibold">
                      Search
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent className="w-full" value="product">
              <motion.div className="flex justify-center" variants={fadeInUp}>
                <div className="flex w-full md:max-w-[50rem] md:gap-10 items-center md:px-10">
                  <motion.div
                    className="servic-search flex items-center justify-center w-full bg-[#4D5160] rounded-xl px-5 h-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <input type="text" className="w-full placeholder-[#FFFFFF]/60 outline-none text-white" placeholder="Search products near you" />
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-100" />
                  </motion.div>
                  <motion.div
                    className="hidden md:block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  >
                    <Button className="text-white bg-[#0092FF] hover:bg-[#027cda] rounded-lg h-[44px] px-3 font-semibold">
                      Search
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent className="w-full" value="provider">
              <motion.div className="flex justify-center" variants={fadeInUp}>
                <div className="flex w-full md:max-w-[50rem] md:gap-10 items-center md:px-10">
                  <motion.div
                    className="servic-search flex items-center justify-center w-full bg-[#4D5160] rounded-xl px-5 h-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <input type="text" className="w-full placeholder-[#FFFFFF]/60 outline-none text-white" placeholder="Search providers near you" />
                    <MagnifyingGlassIcon className="h-6 w-6 text-gray-100" />
                  </motion.div>
                  <motion.div
                    className="hidden md:block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                  >
                    <Button className="text-white bg-[#0092FF] hover:bg-[#027cda] rounded-lg h-[44px] px-3 font-semibold">
                      Search
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

          </Tabs>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HeroMotion;
