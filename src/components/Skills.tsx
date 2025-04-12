import React from 'react'

export default function Skills() {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">Skills</h2>
      <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
        <li>Languages: C#, Golang, Java, JavaScript, TypeScript, SQL</li>
        <li>Frameworks: .NET Core, EF Core, Spring, Angular, Node.js</li>
        <li>Cloud & Infra: AWS, Azure, Docker, Kubernetes</li>
        <li>Architecture: Microservices, REST APIs, MVC/MVVM</li>
        <li>CI/CD: GitLab, Azure DevOps</li>
      </ul>
    </section>
  )
}
