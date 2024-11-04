import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    school: 'University at Buffalo, SUNY',
    degree: 'Master of Science in Computer Science',
    period: '2023 - 2024',
    location: 'Buffalo, NY',
    courses: [
      'Advanced Software Engineering',
      'Cloud Computing',
      'Distributed Systems',
      'Machine Learning',
      'Cloud Infrastructure Management',
      'Data Mining'
    ]
  },
  {
    school: 'Vellore Institute of Technology',
    degree: 'Bachelor of Technology in Computer Science',
    period: '2015 - 2019',
    location: 'Vellore, India',
    courses: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Operating Systems',
      'Computer Networks',
      'Software Engineering'
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 gradient-text">Education</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-slate-700/50"
            >
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-indigo-400 mr-3" />
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-indigo-400">{edu.school}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6 text-sm">
                <div className="flex items-center text-violet-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center text-violet-400">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{edu.location}</span>
                </div>
              </div>

              <div>
                <h4 className="text-gray-300 font-medium mb-2">Key Courses</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}