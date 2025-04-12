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
            Backend Engineer who enjoys building clean and scalable systems — and a good ☕.
          </p>
        </header>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">Skills</h2>
          <Skills />
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">Experience</h2>
          <ExperienceList />
        </section>

        <section className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-md">
          <h2 className="text-2xl font-bold text-sky-500 mb-4">Contact</h2>
          <Contact />
        </section>
      </div>
    </div>
  )
}
