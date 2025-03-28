import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import myImage from "../assets/AK portfolio_cover.jpg"; // Update the path if needed

export default function About() {
  const containerRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // Detect screen size changes
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Only animate if desktop view
  const rotateX = useTransform(scrollYProgress, [0, 0.7], [60, 0]);
  const translateZ = useTransform(scrollYProgress, [0, 0.8], [60, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [0.8, 1]);

  const transform = isDesktop
    ? useMotionTemplate`
        perspective(1000px)
        rotateX(${rotateX}deg)
        translateZ(${translateZ}px)
      `
    : "none";

  return (
    <section ref={containerRef} className="relative bg-black py-20">
      {/* Regular component layout (no sticky positioning) */}
      <div className="flex justify-center items-center">
        <motion.div
          className="bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl shadow-2xl border-4 border-gray-800 overflow-hidden flex flex-col md:flex-row w-full max-w-5xl p-8"
          style={{
            transform: isDesktop ? transform : "none",
            opacity: isDesktop ? opacity : 1,
          }}
        >
          {/* Left Side - Image */}
          <div className="w-full md:w-2/5 flex justify-center items-center p-4">
            <img
              src={myImage}
              alt="Profile"
              className="rounded-2xl w-full max-w-[350px] md:max-w-[400px] shadow-lg object-cover"
            />
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full md:w-3/5 p-6">
            <h1 className="text-4xl md:text-5xl font-bold">Hey there! I'm Ayush</h1>
            <p className="text-lg text-gray-300 mt-4">
              Part-time coder, full-time dreamer, and occasional snack enthusiast.
              Currently pursuing my <span className="font-bold">Bachelor of Technology</span> from JIMSEMTC Greater Noida,
              affiliated with <span className="font-bold">Guru Gobind Singh Indraprastha University</span>, I'm on a mission to turn caffeine into code and ideas into reality.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              When I'm not busy crafting sleek designs or building cool apps, you’ll probably find me
              lost in a video game, binge-watching sitcoms, or trying to convince my plants to stay alive.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              As a theatre artist and part-time musician, I’ve mastered the art of both dramatic pauses
              and awkward guitar solos. Whether I'm brainstorming game ideas, developing apps, or cracking dad jokes that no one asked for, I believe <span className="font-bold">creativity thrives best with a touch of chaos</span>.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              So, if you’re here to collaborate, chat, or just need someone to laugh at your memes, hit me up — I promise I’m kind of fun!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
