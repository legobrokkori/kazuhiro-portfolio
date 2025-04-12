export default function ExperienceList() {
  return (
    <ul className="space-y-6 text-gray-200">
      <li>
        <strong className="text-lg">Lead Backend Engineer @ DMM.com Group</strong><br />
        <em>Oct 2023 – Present</em><br />
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Handled zero-downtime Aurora upgrade (v2 → v3) for a service handling 10,000+ RPS.</li>
          <li>Reduced batch processing time from 2 hours to 30 minutes with async SQS-based architecture and Kubernetes autoscaling.</li>
          <li>Re-architecting legacy code into microservices for scalability and clarity.</li>
        </ul>
      </li>
      <li>
        <strong className="text-lg">Senior Backend Engineer @ Kawazu Sakura</strong><br />
        <em>Mar 2022 – Sep 2023</em><br />
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Led backend architecture for a cryptocurrency exchange including matching engine and trader balance services.</li>
          <li>Collaborated with global team across smart contracts, frontend, and DevOps to launch MVP.</li>
          <li>Mentored and managed a distributed team of 4 engineers.</li>
        </ul>
      </li>
      <li>
        <strong className="text-lg">Senior .NET Developer @ Blue Planet-Works</strong><br />
        <em>Nov 2020 – Feb 2022</em><br />
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Developed cybersecurity platform for 15,000+ companies.</li>
          <li>Led migration from monolith to microservices, with Azure DevOps CI/CD pipeline from scratch.</li>
          <li>Improved test coverage using Jasmine & Karma for frontend testing.</li>
        </ul>
      </li>
    </ul>
  )
}
