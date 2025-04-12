import React from 'react'
import Skills from './components/Skills'
import ExperienceList from './components/ExperienceList'
import Contact from './components/Contact'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center">
          <h1 className="text-5xl font-extrabold">Kazuhiro Watanabe</h1>
          <p className="mt-4 text-xl text-gray-300">Backend Engineer with a passion for clean code and scalable systems.</p>
        </header>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-indigo-400 mb-4">Skills</h2>
          <Skills />
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-indigo-400 mb-4">Experience</h2>
          <ExperienceList />
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-indigo-400 mb-4">Contact</h2>
          <Contact />
        </section>
      </div>
    </div>
  )
}
