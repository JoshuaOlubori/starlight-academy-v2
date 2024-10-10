import { useState, useEffect } from "react";
import { ArrowRight, Play, Pause } from "lucide-react"; // Icons from Lucide
import { Button } from "@/components/ui/button"
import avatar1 from "@/assets/mkm.png";
import avatar2 from "@/assets/joshua_profile.jpg";
import avatar3 from "@/assets/mb.png";
import AppArchitectureComponent from "@/components/AppArchitectureComponent";
// import img from 'next/image'
// // import pdf from "@/assets/Datafest Hackathon 24 - Team Starlight.pdf"

const teamMembers = [
  {
    imgSrc: avatar1, // No need for width/height in the URL here
    imgAlt: "Makinde Kayode",
    name: "Makinde Kayode",
    role: "Data Scientist",
    description:
      "Perizer",
  },
  {
    imgSrc: avatar2,
    imgAlt: "Edun Joshua profile picture",
    name: "Edun Joshua",
    role: "Data Engineer & Full Stack Dev",
    description:
      "EDMS Dentallytics",
  },
  {
    imgSrc: avatar3,
    imgAlt: "Mbuotidem Awak",
    name: "Mbuotidem Awak",
    role: "Data Analyst",
    description: "DSN",
  },
];

export default function LandingPage() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentSlideIndex((prevIndex) =>
          prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
        );
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono p-8">
      <header className="mb-12">
        <h1 className="text-6xl font-bold mb-4">STARLIGHT</h1>
        <p className="text-xl">A Tech-Ed intervention</p>
      </header>

      <main className="space-y-16">
        <section className="border-4 border-black p-6">
          <h2 className="text-4xl font-bold mb-4">THE PROBLEM</h2>
          <p className="text-lg">
            Mass exam failure is a concerning issue in Nigerian JAMB examinations. It leads to
            decreased motivation, increased dropout rates, and long-term
            negative impacts on career prospects. Starlight is a response to this issue, attempting 
            to identify at-risk students early for subsequent intervention.
          </p>
        </section>

        <section className="bg-yellow-300 p-6">
          <h2 className="text-4xl font-bold mb-4">OUR TEAM</h2>
          <div className="relative w-full overflow-hidden border-4 border-black">
            <div className="relative min-h-[400px] w-full">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${currentSlideIndex === index ? "opacity-100" : "opacity-0"
                    }`}
                >
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-end gap-2 bg-gradient-to-t from-black to-transparent px-16 py-12 text-center">
                    <h3 className="w-full text-2xl font-bold text-white">
                      {member.name}
                    </h3>
                    <p className="text-xl font-bold text-yellow-300">
                      {member.role}
                    </p>
                    {/* <p className="w-full text-sm text-white">
                      {member.description}
                    </p> */}
                  </div>
                  <img
                    src={member.imgSrc}
                    alt={member.imgAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              className="absolute bottom-5 right-5 z-20 rounded-full bg-white p-2 text-black transition hover:bg-yellow-300"
              onClick={togglePause}
              aria-label={isPaused ? "Play carousel" : "Pause carousel"}
            >
              {isPaused ? <Play size={24} /> : <Pause size={24} />}
            </button>

            <div className="absolute bottom-3 left-1/2 z-20 flex -translate-x-1/2 gap-4 px-1.5 py-1">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  className={`h-4 w-4 cursor-pointer rounded-full border-2 border-white transition ${currentSlideIndex === index
                      ? "bg-white"
                      : "bg-transparent"
                    }`}
                  onClick={() => setCurrentSlideIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </section>

      

        <section className="border-l-8 border-red-600 pl-6">
          <h2 className="text-4xl font-bold mb-4">STARLIGHT APP</h2>
          <div className="space-y-4">
            <p className="text-lg">
              Welcome to Starlight, your all-in-one solution for proactive student success management.
              Our app is designed to revolutionize how schools identify and support at-risk students.
            </p>
            <h3 className="text-2xl font-bold">Key Features:</h3>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>Real-time student performance tracking</li>
              <li>AI-powered risk assessment for exam failure</li>
              <li>Customized intervention strategies</li>
              <li>Comprehensive analytics dashboard</li>
              <li>Seamless communication tools for teachers, students, and parents</li>
            </ul>
            <p className="text-lg font-bold mt-4">
              Ready to transform your school's approach to student success?
            </p>
          </div>
          <div className="mt-6 space-y-4">
            <p className="text-lg">Access the Starlight dashboard with these credentials:</p>
            <p className="text-lg font-bold">Username: admin | Password: admin</p>
            <Button asChild className="bg-black text-white text-xl py-6 px-8 hover:bg-gray-800">
            <a href="https://app-starlight.onrender.com/" target="_blank">LOGIN NOW</a>
            </Button>
          </div>
        </section>



        <section className="bg-blue-200 p-4 sm:p-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">OUR RESEARCH</h2>
          <p className="text-base sm:text-lg mb-4">
            Our team has conducted extensive research on the factors
            contributing to student exam failure. We've identified key
            indicators and developed strategies to support at-risk students.
          </p>
          <Button className="bg-black hover:bg-gray-800 w-full sm:w-auto">
            <a
              href="https://joshuaolubori.my.canva.site/starlight-datafest-24"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center text-white text-base sm:text-xl py-2 px-4 w-full"
            >
              READ FULL REPORT (PDF)
            </a>
          </Button>
        </section>


        <section className="border-4 border-green-600 p-4 sm:p-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">TRY OUR PREDICTION TOOL</h2>
          <p className="text-base sm:text-lg mb-4">
            Enter a student's details into our Streamlit app to get a prediction
            on their likelihood of exam failure. This tool uses advanced machine
            learning algorithms to identify at-risk students.
          </p>
          <div className="bg-gray-200 p-4 mb-4">
            <p className="text-center text-lg font-bold">
              {/* Streamlit App Placeholder */}
            </p>
            {/* <p className="text-center">The Streamlit app will be embedded here</p> */}
            <iframe src="https://student-pass-predictor.streamlit.app?embed=True" style={{ width: '100%', height: '500px' }}></iframe>
          </div>
          <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto">
            <a
              href="#streamlit-app"
              className="flex items-center justify-center text-white text-base sm:text-xl py-2 px-4 w-full"
            >
              <span className="mr-2">It might take a while for the app to load. Just streamlit things...🙄</span>
              <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </Button>
        </section>


        <AppArchitectureComponent/>
      </main>

      <footer className="mt-16 text-center">
        <p className="text-lg">&copy; 2024 Starlight Team. All rights reserved.</p>
      </footer>
    </div>
  );
}
