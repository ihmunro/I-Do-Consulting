import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ReviewProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatarUrl?: string;
}

interface ReviewsSectionProps {
  reviews?: ReviewProps[];
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

const ReviewsSection = ({
  reviews = [
    {
      quote:
        "Working with Jeannette has been a very rewarding experience, she has helped me in identifying my goals and what I needed to do, to get there. In a relatively short period of time she has helped me achieve my short term goals and continue to work towards to my long term goal by keeping me focused and engaged in developing the skills that I require to be leader in my organization. One conversation at a time, I have been able to grow both professionally and personally and realize that anything is possible.",
      author: "Kelly W.",
      position: "Chief Financial Officer",
      company: "Forks North Portage Partnership",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=kelly",
    },
    {
      quote:
        "I DO Consulting's strategic planning sessions were transformative for our executive team. Jeannette's facilitation skills and deep understanding of organizational dynamics helped us align on our vision and create actionable steps toward our goals.",
      author: "Robert L.",
      position: "Executive Director",
      company: "Vancouver Community Services",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
    },
    {
      quote:
        "The leadership development program Jeannette designed for our management team has had a lasting impact. Her personalized approach and ability to connect with each participant created a safe space for growth and transformation.",
      author: "Priya M.",
      position: "VP of Human Resources",
      company: "Pacific Northwest Technologies",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=priya",
    },
  ],
  title = "Client Success Stories",
  subtitle = "Real results from real clients",
  backgroundImage = "https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?w=1600&q=80",
}: ReviewsSectionProps) => {
  const [currentReview, setCurrentReview] = React.useState(0);

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section
      id="client-success-stories"
      className="py-20 w-full relative overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-indigo-900/80"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">
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

        <div className="relative">
          <div className="bg-white/90 rounded-lg shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="mb-8">
                <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-amber-300 mx-auto">
                  <img
                    src={
                      reviews[currentReview].avatarUrl ||
                      `https://api.dicebear.com/7.x/avataaars/svg?seed=${reviews[currentReview].author}`
                    }
                    alt={reviews[currentReview].author}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="text-center mb-8">
                <p className="text-lg md:text-xl text-gray-800 italic mb-6">
                  "{reviews[currentReview].quote}"
                </p>
                <h4 className="font-bold text-gray-900 text-lg">
                  {reviews[currentReview].author}
                </h4>
                <p className="text-gray-600">
                  {reviews[currentReview].position},{" "}
                  {reviews[currentReview].company}
                </p>
              </div>

              <div className="flex justify-center space-x-4">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full ${index === currentReview ? "bg-amber-500" : "bg-gray-300"}`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10 md:-left-5"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md z-10 md:-right-5"
            aria-label="Next review"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
