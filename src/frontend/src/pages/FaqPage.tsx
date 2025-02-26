import BreadcrumbHero from '@/components/shared/BreadcrumbHero'
import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
  

const FaqPage = () => {
  return (
    <div className="mt-14">
        <Header />
        <BreadcrumbHero title='FAQ' />
        <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
            <div className="w-full lg:w-1/2">
              <img src="https://pagedone.io/asset/uploads/1696230182.png" alt="FAQ tailwind section" className="w-full rounded-xl object-cover" />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-xl">
                <div className="mb-6 lg:mb-16">
                  <h6 className="text-lg text-center font-medium text-[#AFDE74] mb-2 lg:text-left">
                    faqs
                  </h6>
                  <h2 className="text-4xl text-center font-bold text-white leading-[3.25rem] mb-5 lg:text-left">
                    Looking for answers?
                  </h2>
                </div>
                <Accordion type="single" collapsible className='divide-[#2E3E4A]'>
                    <AccordionItem className='py-4' value="item-1">
                        <AccordionTrigger className='text-lg text-white'><h5>How to create an account?</h5></AccordionTrigger>
                        <AccordionContent className='text-base'>
                        <p className="text-base font-normal text-gray-100 ">
                        To create an account, find the 'Sign up' or 'Create
                        account' button, fill out the registration form with your
                        personal information, and click 'Create account' or 'Sign
                        up.' Verify your email address if needed, and then log in
                        to start using the platform.
                      </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className='py-4' value="item-2">
                        <AccordionTrigger className='text-lg text-white'><h5>Have any trust issue?</h5></AccordionTrigger>
                        <AccordionContent>
                        <p className="text-base font-normal text-gray-100 ">
                        Our focus on providing robust and user-friendly content
                        management capabilities ensures that you can manage your
                        content with confidence, and achieve your content
                        marketing goals with ease.
                      </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className='py-4' value="item-3">
                        <AccordionTrigger className='text-lg text-white'><h5>How to create an account?</h5></AccordionTrigger>
                        <AccordionContent>
                        <p className="text-base font-normal text-gray-100 ">
                        To create an account, find the 'Sign up' or 'Create
                        account' button, fill out the registration form with your
                        personal information, and click 'Create account' or 'Sign
                        up.' Verify your email address if needed, and then log in
                        to start using the platform.
                      </p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem className='py-4' value="item-4">
                        <AccordionTrigger className='text-lg text-white'><h5>How to create an account?</h5></AccordionTrigger>
                        <AccordionContent>
                        <p className="text-base font-normal text-gray-100 ">
                        To create an account, find the 'Sign up' or 'Create
                        account' button, fill out the registration form with your
                        personal information, and click 'Create account' or 'Sign
                        up.' Verify your email address if needed, and then log in
                        to start using the platform.
                      </p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
       {/* Footer */}
       <Footer />
    </div>
  )
}

export default FaqPage