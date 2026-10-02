import TextType from "../Components/TextTyping/TextTyping";

function Skills() {
  const skills = [
    "Python",
    "C++",
    "Java",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MySQL",
    "Git & GitHub",
    "REST APIs",
    "Machine Learning",
    "Scikit-learn",
    "TensorFlow",
    "Flask",
    "Pandas",
    "NumPy",
  ];

  return (
    <>
      <section
        id="skills"
        className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center px-6 py-16 box-border"
      >
        <div className="flex flex-col gap-15 items-center">

          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
              My <span className="text-sky-400">Skills</span>
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl w-full">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-slate-700/50 hover:bg-slate-700 backdrop-blur-md border border-slate-600 rounded-xl p-4 sm:p-5 text-center text-base sm:text-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md hover:shadow-sky-500/20"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-2xl text-center">
            <TextType
              text={[
                "I build machine learning solutions",
                "I develop scalable backend applications",
                "I enjoy solving real-world problems with technology",
              ]}
              typingSpeed={35}
              pauseDuration={550}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>

        </div>
      </section>
    </>
  );
}

export default Skills;