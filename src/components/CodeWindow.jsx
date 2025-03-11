import React from "react";

const CodeWindow = () => {
  return (
    <div className="mx-auto my-8 bg-[#0A192F] rounded-2xl shadow-2xl border-4 border-[#112240] relative z-10 max-w-full inline-block overflow-x-auto scrollbar-thin scrollbar-thumb-[#1F2937] scrollbar-track-[#0A192F]">
      {/* Header mit Matrix-farbigen Buttons */}
      <div className="flex items-center px-4 py-2 bg-[#112240] rounded-t-2xl text-[#60A5FA] font-mono">
        <span className="text-sm">{">_ root@simon:~$"}</span>
        <span className="ml-auto text-xs">[ CODE WINDOW ]</span>
      </div>

      {/* Code content */}
      <div className="p-6 text-sm font-mono whitespace-pre-wrap w-full max-h-[70vh] overflow-y-auto md:overflow-visible bg-[#0A192F] rounded-b-2xl text-left scrollbar-thin scrollbar-thumb-[#1F2937] scrollbar-track-[#0A192F]">
        <pre className="text-thirdColor block w-full break-words leading-relaxed">
          <span className="text-thirdColor">// Why I love coding:</span>{"\n"}
          <span className="text-thirdColor">// It's like solving a puzzle with infinite possibilities.</span>{"\n"}
          <span className="text-thirdColor">// The moment a bug is fixed feels like pure victory.</span>{"\n"}{"\n"}
          <span className="text-gray-300">function loveCoding() {'{'}{"\n"}</span>
          <span className="pl-4 text-gray-300">return </span>
          <span className="text-gray-300">"Coding: where I spend hours fixing a bug... "</span> + {"\n"}
          <span className="pl-4 text-gray-300">"then realize the semicolon was missing.";</span>{"\n"}
          <span className="text-gray-300">{'}'}{"\n"}{"\n"}</span>
          <span className="text-thirdColor">// Top Programmer Jokes:</span>{"\n"}
          <span className="text-gray-300">const programmerJokes = [ {"\n"}</span>
          <span className="pl-4 text-gray-300">"There are 10 types of people in the world: those who understand binary and those who don’t.",</span>{"\n"}
          <span className="pl-4 text-gray-300">"Why do programmers prefer dark mode? Because light attracts bugs!",</span>{"\n"}
          <span className="pl-4 text-gray-300">"A SQL query walks into a bar, walks up to two tables, and asks: ‘Can I join you?’",</span>{"\n"}
          <span className="pl-4 text-gray-300">"Why do Java developers wear glasses? Because they don’t C#.",</span>{"\n"}
          <span className="pl-4 text-gray-300">"How do you comfort a JavaScript bug? You console it.",</span>{"\n"}
          <span className="pl-4 text-gray-300">"Debugging: Being the detective in a crime movie where you are also the murderer.",</span>{"\n"}
          <span className="pl-4 text-gray-300">"Why was the developer so broke? Because he used up all his cache."</span>{"\n"}
          <span className="text-gray-300">];{"\n"}{"\n"}</span>
          <span className="text-primaryColor">console.log(loveCoding());</span>{"\n"}
          <span className="text-primaryColor">console.log("Best Programmer Jokes:");</span>{"\n"}
          <span className="text-gray-300">programmerJokes.forEach(joke =&gt; console.log(joke));{"\n"}</span>
        </pre>
      </div>
    </div>
  );
};

export default CodeWindow;
