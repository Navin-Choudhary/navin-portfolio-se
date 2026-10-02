import Profile from "../Images/Template/image.png";
import TextType from "../Components/TextTyping/TextTyping";

function About() {
  return (
    <>
      <section
        id="about"
        className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center px-6 py-16 box-border hover:shadow-lg"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
          About <span className="text-sky-400">Me</span>
        </h2>

        <div className="max-w-4xl w-full bg-slate-800/50 border border-slate-700 rounded-2xl shadow-xl p-8 sm:p-10 backdrop-blur-md animate-fade-in-up flex flex-col md:flex-row items-center gap-8">

          <div className="flex-shrink-0">
            <img
              src={Profile}
              alt="Navin Choudhary"
              className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-sky-400 shadow-lg object-cover mt-2"
            />
          </div>

          <div className="text-center md:text-left">

            <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-sky-400">
              <TextType
                text={[
                  "Hi, I am Navin Choudhary",
                  "An aspiring ML Engineer",
                ]}
                typingSpeed={55}
                pauseDuration={600}
                showCursor={true}
                cursorCharacter="|"
              />
            </h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              I'm a passionate{" "}
              <span className="font-semibold text-white">
                Computer Science Engineering student
              </span>{" "}
              interested in Machine Learning, Artificial Intelligence, and
              backend development. I enjoy building practical applications
              that combine intelligent models with reliable software systems.
            </p>

            <p className="text-slate-400 leading-relaxed mb-6">
              My toolkit includes{" "}
              <span className="text-sky-300 font-medium">
                Python, C++, Java, React, Node.js, Express, PostgreSQL,
                Machine Learning, and Flask
              </span>
              . I'm continuously learning new technologies and working on
              projects that help me strengthen my software engineering and
              problem-solving skills.
            </p>

            <button className="cursor-target px-6 py-3 bg-sky-400 text-slate-900 font-semibold rounded-full hover:bg-sky-500 transition-transform transform hover:scale-105">
              Download Resume
            </button>

          </div>
        </div>
      </section>
    </>
  );
}

export default About;