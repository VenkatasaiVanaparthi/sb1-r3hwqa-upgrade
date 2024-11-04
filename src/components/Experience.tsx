import React from 'react';
import { Building2, Calendar } from 'lucide-react';

const experiences = [
  {
    company: 'Databricks',
    position: 'Platform Technical Solutions Engineer',
    period: 'October 2021 - January 2023',
    location: 'Remote',
    highlights: [
      'Provided technical guidance and designed solutions for the Databricks platform on AWS, Azure, and Google Cloud, serving over 5k clients',
      'Analyzed customer requirements and data pipeline challenges, offering solutions using Spark, Scala, Python, AWS, Azure',
      'Investigated and resolved complex issues with 95% resolution rate within 24 hours',
      'Configured cross-account IAM roles and integrated AWS S3 with data pipelines'
    ]
  },
  {
    company: 'DXC Technology',
    position: 'Associate Software Engineer',
    period: 'August 2019 - September 2021',
    location: 'Bangalore, India',
    highlights: [
      'Designed and deployed end-to-end AWS infrastructure solutions supporting 200+ servers',
      'Developed IaC solutions using AWS CloudFormation and Terraform',
      'Orchestrated migration of customer applications from on-premises to AWS',
      'Built cloud-native digital forensic application improving threat detection by 40%'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-12 gradient-text">Professional Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm rounded-xl p-8 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 border border-slate-700/50">
              <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.position}</h3>
                  <div className="flex items-center text-indigo-400 mt-1">
                    <Building2 className="w-4 h-4 mr-2" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                <div className="flex items-center text-violet-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}