const courses = [
  { name: "PIANO", image: "/images/piano.png" },
  { name: "KEYBOARD", image: "/images/keyboard.png" },
  { name: "PLECTRUM GUITAR", image: "/images/guitar.png" },
  { name: "CLASSIC GUITAR", image: "/images/classic-guitar.png" },
  { name: "VIOLIN", image: "/images/violin.png" },
  { name: "DRUMS", image: "/images/drums.png" },
  { name: "THEORY OF MUSIC", image: "/images/music-theory.png" },
];

const CoursesSection = () => {
  return (
    <section id="courses" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-10 h-[2px] bg-primary" />
            <span className="font-script text-primary text-xl">
              Master Your Instrument at Tune In School Of Music
            </span>
            <span className="w-10 h-[2px] bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Instrument Teaching Courses
          </h2>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course.name}
              className="group relative bg-background rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              {/* Decorative corner dots */}
              <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-primary opacity-60" />
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary opacity-60" />
              <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-primary opacity-60" />
              <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-primary opacity-60" />

              <div className="p-4">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={course.image}
                    alt={course.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-center text-foreground font-bold text-sm mt-4 uppercase tracking-wide">
                  {course.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
