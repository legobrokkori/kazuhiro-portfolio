import React from 'react'
import Skills from './components/Skills'
import ExperienceList from './components/ExperienceList'
import Contact from './components/Contact'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-16">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold tracking-tight">Kazuhiro Watanabe</h1>
          <p className="mt-4 text-lg text-gray-300 font-light">
            Lead Backend Engineer specializing in high-scale systems, performance optimization, and cloud architecture
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Over a decade building and scaling backend infrastructure for millions of users
          </p>
        </header>

        <section className="bg-gray-800 p-6 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">Featured Projects & Achievements</h2>
          <div className="space-y-6 text-gray-100">
            <div className="border-l-4 border-sky-500 pl-4">
              <h3 className="font-bold text-lg">High-Traffic System Upgrade</h3>
              <p className="text-sm mt-1">Zero-downtime migration of AWS Aurora MySQL (v2 → v3) for a production system handling <strong>10,000+ requests per second</strong>, ensuring continuous service availability for 1.5M active users.</p>
              <p className="text-xs text-gray-400 mt-1">Tech: AWS Aurora MySQL, Go, Kubernetes</p>
            </div>

            <div className="border-l-4 border-sky-500 pl-4">
              <h3 className="font-bold text-lg">Performance Optimization at Scale</h3>
              <p className="text-sm mt-1">Reduced batch processing time from <strong>2 hours to 30 minutes</strong> by implementing asynchronous processing architecture using SQS and Golang, with Kubernetes pod autoscaling based on queue depth.</p>
              <p className="text-xs text-gray-400 mt-1">Tech: SQS, Golang, Kubernetes Autoscaling</p>
            </div>

            <div className="border-l-4 border-sky-500 pl-4">
              <h3 className="font-bold text-lg">Large-Scale System Rearchitecture</h3>
              <p className="text-sm mt-1">Leading the migration of a monolithic system serving <strong>1.5 million active users</strong> to domain-driven microservices architecture, improving scalability, maintainability, and fault isolation.</p>
              <p className="text-xs text-gray-400 mt-1">Tech: Go, Microservices, Domain-Driven Design, AWS</p>
            </div>

            <div className="border-l-4 border-sky-500 pl-4">
              <h3 className="font-bold text-lg">Production Reliability & SLO Implementation</h3>
              <p className="text-sm mt-1">Introduced Service Level Objectives (SLOs) and led reliability improvements, <strong>reducing non-actionable alerts by 80%</strong> and enabling engineers to focus on product development.</p>
              <p className="text-xs text-gray-400 mt-1">Tech: SLO/SLI, Observability, Monitoring</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-800 p-6 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">Skills</h2>
          <Skills />
        </section>

        <section className="bg-gray-800 p-6 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">Recent Experience</h2>
          <ExperienceList />
        </section>

        <section className="bg-gray-800 p-6 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">Contact</h2>
          <Contact />
        </section>
      </div>
    </div>
  )
}
