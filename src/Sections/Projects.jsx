function Projects() {
  const projects = [
    {
      title: "MineShield",
      description:
        "An AI-powered rockfall prediction and monitoring system designed for open-pit mining environments using machine learning and time-series analysis.",
      technologies: [
        "Python",
        "Random Forest",
        "LSTM",
        "Flask",
        "Machine Learning",
      ],
    },
    {
      title: "Diabetes Prediction Web App",
      description:
        "A machine learning web application that predicts the likelihood of diabetes using a trained classification model and a Flask API.",
      technologies: [
        "Python",
        "Scikit-learn",
        "Flask",
        "Node.js",
        "Express",
      ],
    },
    {
      title: "Student Attendance Tracker",
      description:
        "A desktop application for managing student attendance, subjects, and attendance records using Java and a MySQL database.",
      technologies: ["Java", "AWT", "JDBC", "MySQL"],
    },
    {
      title: "Subject Selection Portal",
      description:
        "A web-based portal that allows students to select subjects and manage their academic choices through a backend connected to PostgreSQL.",
      technologies: ["Node.js", "Express", "EJS", "PostgreSQL"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen w-full bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col items-center justify-center px-6 py-16 box-border"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
        My <span className="text-sky-400">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-2xl p-6 shadow-xl hover:-translate-y-2 hover:border-sky-400 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-sky-400 mb-4">
              {project.title}
            </h3>

            <p className="text-slate-300 leading-relaxed mb-5">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="px-3 py-1 bg-slate-700 text-sky-300 rounded-full text-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;