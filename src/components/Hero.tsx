import React from 'react';
import { ArrowRight, Code2, Terminal, Database } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 pt-16 code-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full blur-xl opacity-50"></div>
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=200&h=200"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-indigo-500 object-cover relative z-10"
              />
            </div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-6 gradient-text glow">
            Venkata Sai Vanaparthi
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Platform Technical Solutions Engineer crafting elegant solutions with code.
            Specializing in cloud architecture and infrastructure automation.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="mailto:vvanapar@buffalo.edu"
              className="inline-flex items-center px-6 py-3 rounded-full text-white bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-200"
            >
              Contact Me
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#experience"
              className="inline-flex items-center px-6 py-3 rounded-full text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transform hover:scale-105 transition-all duration-200"
            >
              View Experience
            </a>
          </div>
          <div className="flex justify-center space-x-12 text-gray-300">
            <div className="flex flex-col items-center p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm">
              <Code2 className="w-8 h-8 mb-2 text-indigo-400" />
              <span className="block text-2xl font-bold text-white">4+</span>
              <span className="text-sm">Years Experience</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm">
              <Terminal className="w-8 h-8 mb-2 text-violet-400" />
              <span className="block text-2xl font-bold text-white">5K+</span>
              <span className="text-sm">Clients Served</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-slate-800/50 rounded-xl backdrop-blur-sm">
              <Database className="w-8 h-8 mb-2 text-indigo-400" />
              <span className="block text-2xl font-bold text-white">800+</span>
              <span className="text-sm">Servers Migrated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}