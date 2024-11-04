import React from 'react';
import { Server, Database } from 'lucide-react';

const projects = [
  {
    title: 'University of Sydney - Cloud Migration',
    icon: Server,
    description: 'Large-scale cloud migration project involving 800+ servers',
    highlights: [
      'Migrated 800+ on-premises servers to AWS using CloudEndure',
      'Configured 100+ load balancers',
      'Implemented DXC Managed Services',
      'Automated EBS encryption, EC2 start/stop, and tagging',
      'Saved 100+ hours per month through automation'
    ]
  },
  {
    title: 'British Petroleum - Cloud Transformation',
    icon: Database,
    description: 'Digital forensics application and cloud transformation initiative',
    highlights: [
      'Assessed 30+ applications for cloud migration',
      'Developed multi-cloud digital forensics application',
      'Reduced deployment time by 50%',
      'Supported 10+ deployments per month',
      'Implemented CI/CD pipeline with CloudFormation'
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}