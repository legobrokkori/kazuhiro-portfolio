export default function ExperienceList() {
  return (
    <ul className="space-y-6 text-gray-100">
      <li>
        <strong className="text-lg">Lead Backend Engineer @ DMM.com Group</strong><br />
        <em>Oct 2023 – Present</em><br />
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
          <li>Leading a team of 4 Go engineers in delivering high-impact backend projects for major global brands</li>
          <li>Architecting and implementing domain-driven microservices for system serving 1.5M active users</li>
          <li>Developed AI-assisted workflow for PCI DSS audit evidence collection, standardizing compliance processes</li>
          <li>Strengthened security controls including key rotation and access management</li>
        </ul>
      </li>
      <li>
        <strong className="text-lg">Senior Backend Engineer @ Kawazu Sakura</strong><br />
        <em>Mar 2022 – Sep 2023</em><br />
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
          <li>Architected backend systems for cryptocurrency exchange, including trade order matching engine and account balance service</li>
          <li>Partnered with US-based CTO to bring product from concept to alpha deployment</li>
          <li>Managed globally-distributed team of 4 backend developers</li>
        </ul>
      </li>
      <li>
        <strong className="text-lg">Senior .NET Developer @ Blue Planet-Works</strong><br />
        <em>Nov 2020 – Feb 2022</em><br />
        <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
          <li>Built cybersecurity platform used by 15,000+ companies with hundreds of thousands of users</li>
          <li>Led transformation from monolithic to microservices architecture</li>
          <li>Created CI/CD pipeline from scratch using Azure DevOps for automated testing and deployments</li>
        </ul>
      </li>
    </ul>
  )
}
