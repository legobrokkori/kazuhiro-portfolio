import Skills from './components/Skills'
import ExperienceList from './components/ExperienceList'
import Contact from './components/Contact'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-4 py-12">
      <div className="max-w-4xl mx-auto space-y-16">
        <header>
          <h1 className="text-4xl font-bold">Kazuhiro Watanabe</h1>
          <p className="mt-2 text-lg">Full Stack Engineer with a passion for clean code and scalable systems.</p>
        </header>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <Skills />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <ExperienceList />
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <Contact />
        </section>
      </div>
    </div>
  )
}