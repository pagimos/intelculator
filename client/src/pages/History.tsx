import React from "react";
import Galton from "../assets/1.jpg";
import Alfred_Theodore from "../assets/2.jpg";
import Henry_Goddard from "../assets/3.jpg";
import Lewis_Terman from "../assets/4.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const History: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">
            The Evolution of Intelligence
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            The study of intelligence and the quest to measure it scientifically
            have deep historical roots. Over time, the tools and methods used to
            evaluate intelligence have evolved significantly, influenced by
            pioneering researchers and shifting societal needs.
          </p>

          {/* Early Exploration */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Early Exploration</h2>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <img
                src={Galton}
                alt="Sir Francis Galton"
                className="w-64 h-64 object-cover rounded-md shadow-lg"
              />
              <p className="text-gray-700 leading-relaxed">
                Sir Francis Galton, a British scientist and cousin of Charles
                Darwin, was one of the first to delve into the study of
                individual differences in mental ability. He believed that
                intelligence was hereditary and conducted studies comparing
                people's awards and accomplishments. Galton hypothesized that
                mental ability could be assessed through physical measurements
                such as reaction time, sensory perception, and other
                physiological traits. Although these methods are now outdated,
                his research laid the groundwork for future inquiries into
                intelligence and inspired the development of more robust tools.
              </p>
            </div>
          </section>

          {/* The Birth of Modern Testing */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              The Birth of Modern Testing
            </h2>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <img
                src={Alfred_Theodore}
                alt="Alfred Binet and Theodore Simon"
                className="w-64 h-64 object-cover rounded-md shadow-lg"
              />
              <p className="text-gray-700 leading-relaxed">
                Alfred Binet, a French psychologist, made a significant
                breakthrough when he was tasked by the French government to
                identify children in public schools who might struggle
                academically. Together with his colleague Theodore Simon, Binet
                developed a test that assessed practical knowledge, memory,
                reasoning, vocabulary, and problem-solving skills. This approach
                was a marked improvement over Galton's sensory tests. Binet and
                Simon also introduced the concept of mental age, which compared
                a child's performance to the average performance of children in
                the same age group.
              </p>
            </div>
          </section>

          {/* Introduction to the United States */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Introduction to the United States
            </h2>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <img
                src={Henry_Goddard}
                alt="Henry Goddard"
                className="w-64 h-64 object-cover rounded-md shadow-lg"
              />
              <p className="text-gray-700 leading-relaxed">
                Henry Goddard, an American psychologist, translated Binet's test
                into English and used it primarily to assess individuals for
                mental disabilities. Although his work contributed to the spread
                of intelligence testing, it also became entangled with the
                eugenics movement of the early 20th century, a controversial
                legacy that casts a shadow on the history of intelligence
                assessment.
              </p>
            </div>
          </section>

          {/* Standardization */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">
              Standardization: Lewis Terman and the Stanford-Binet Scale
            </h2>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <img
                src={Lewis_Terman}
                alt="Lewis Terman"
                className="w-64 h-64 object-cover rounded-md shadow-lg"
              />
              <p className="text-gray-700 leading-relaxed">
                Lewis Terman adapted Binet's test for broader use, introducing
                the Stanford-Binet Intelligence Scale. Terman refined the
                scoring system by introducing the intelligence quotient (IQ).
                This formula, effective for measuring intelligence in children,
                proved less useful for adults as intelligence levels tend to
                plateau in adulthood.
              </p>
            </div>
          </section>

          {/* Footer */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default History;
