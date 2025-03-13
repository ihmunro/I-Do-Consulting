import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent, CardHeader, CardFooter } from "../ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatarUrl?: string;
}

interface TestimonialsSectionProps {
  testimonials?: TestimonialProps[];
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const TestimonialsSection = ({
  testimonials = [
    {
      quote:
        "Jeannette's strategic approach transformed our organization. Her insights were invaluable and led to measurable improvements in our team dynamics and overall performance.",
      author: "Sarah Johnson",
      position: "CEO",
      company: "TechVision Inc.",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      quote:
        "Working with I DO Consulting was a game-changer for our leadership team. Jeannette's expertise in organizational development helped us navigate a challenging transition period with confidence.",
      author: "Michael Chen",
      position: "Director of Operations",
      company: "Innovate Solutions",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      quote:
        "Jeannette brings a unique blend of analytical thinking and empathy to her consulting work. She quickly identified our core challenges and developed practical solutions that aligned with our company values.",
      author: "Emily Rodriguez",
      position: "HR Manager",
      company: "Global Enterprises",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    },
    {
      quote:
        "I DO Consulting delivered beyond our expectations. Jeannette's personalized approach and deep industry knowledge made all the difference in helping us achieve our organizational goals.",
      author: "David Thompson",
      position: "Founder",
      company: "Elevate Group",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
    },
  ],
  title = "What Our Clients Say",
  subtitle = "Hear from organizations that have transformed with our consulting services",
  backgroundImage = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1600&q=80",
}: TestimonialsSectionProps) => {
  return (
    <section
      id="testimonials"
      className="py-16 px-4 md:px-8 lg:px-16 w-full relative overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/90 to-purple-800/90"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="relative px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-1/2 lg:basis-1/3 pl-4 md:pl-6"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full bg-white/95 border-gray-200 hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="pb-2">
                        <div className="flex items-center">
                          <div className="relative">
                            <svg
                              className="absolute -top-6 -left-6 h-12 w-12 text-amber-200 opacity-50"
                              fill="currentColor"
                              viewBox="0 0 32 32"
                              aria-hidden="true"
                            >
                              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>
                            <Avatar className="h-12 w-12 border-2 border-amber-300">
                              {testimonial.avatarUrl ? (
                                <AvatarImage
                                  src={testimonial.avatarUrl}
                                  alt={testimonial.author}
                                />
                              ) : (
                                <AvatarFallback>
                                  {testimonial.author.charAt(0)}
                                </AvatarFallback>
                              )}
                            </Avatar>
                          </div>
                          <div className="ml-4">
                            <h4 className="font-semibold text-gray-900">
                              {testimonial.author}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {testimonial.position}, {testimonial.company}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 italic">
                          "{testimonial.quote}"
                        </p>
                      </CardContent>
                      <CardFooter className="pt-2">
                        <div className="flex items-center">
                          <div className="flex text-amber-500">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className="h-5 w-5 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-4 bg-white/80 hover:bg-white" />
              <CarouselNext className="-right-4 bg-white/80 hover:bg-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
