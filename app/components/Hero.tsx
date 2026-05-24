export default function Hero() {
  return (
    <section id="about" className="min-h-screen flex flex-col items-center justify-center pt-20 px-6">
      
      {/* Small tag line at top */}
      <p className="text-gray-500 text-sm uppercase tracking-widest mb-4">
        Salesforce Developer & Creative Builder
      </p>

      {/* Main heading */}
      <h1 className="text-6xl font-bold text-white text-center mb-6">
        Hi, I'm Rimpy 👋
      </h1>

      {/* Sub heading */}
      <p className="text-gray-400 text-xl text-center max-w-xl mb-10">
        I build on Salesforce by day and create cool projects, digital art and experiments by night.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mt-2">
        
        <a  href="#projects"
          style={{ backgroundColor: "white", color: "black" }}
          className="font-medium px-6 py-3 rounded-full"
        >
          See my work
        </a>
        
         <a href="#"
          style={{ border: "1px solid white", color: "white" }}
          className="font-medium px-6 py-3 rounded-full"
        >
          Download CV
        </a>
      </div>

    </section>
  );
}