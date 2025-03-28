import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-black px-6 py-12 sm:py-20">
      {/* Name Section */}
      <h2 className="text-white text-3xl sm:text-5xl font-semibold leading-tight">
        I’m Ayush Kaushik.
      </h2>

      {/* Dynamic Typing Effect */}
      <h1 className="text-4xl sm:text-7xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-transparent bg-clip-text leading-tight py-4">
        A{" "}
        <span className="inline-block min-h-[80px] sm:min-h-[100px]">
          <Typewriter
            words={[
              "Game Developer.",
              "UI/UX Designer.",
              "Full Stack Developer.",
              "Learner.",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={120}
            deleteSpeed={80}
            delaySpeed={2000}
          />
        </span>
      </h1>

      {/* Subtitle with Better Readability */}
      <p className="text-gray-300 text-lg sm:text-2xl max-w-2xl sm:max-w-3xl mt-4 sm:mt-6 px-4">
        Passionate about solving{" "}
        <span className="font-semibold text-white">
          complex problems through intuitive design.
        </span>{" "}
        Crafting immersive experiences through design, code, and creativity —
        turning ideas into reality, one pixel at a time.
      </p>
    </section>
  );
}
