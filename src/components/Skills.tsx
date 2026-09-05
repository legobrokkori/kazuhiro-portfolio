export default function Skills() {
  return (
    <div className="space-y-3 text-gray-100">
      <div>
        <span className="font-bold text-sky-400">Languages:</span>
        <span className="ml-2 text-sm">Go, C#, .NET, Java, TypeScript, Node.js, SQL</span>
      </div>
      <div>
        <span className="font-bold text-sky-400">Cloud & Infrastructure:</span>
        <span className="ml-2 text-sm">AWS (Aurora, SQS, DynamoDB), Azure, Kubernetes, Docker</span>
      </div>
      <div>
        <span className="font-bold text-sky-400">Architecture & Design:</span>
        <span className="ml-2 text-sm">Microservices, Domain-Driven Design, REST APIs, GraphQL, Event-Driven Architecture</span>
      </div>
      <div>
        <span className="font-bold text-sky-400">Data & Messaging:</span>
        <span className="ml-2 text-sm">MySQL, PostgreSQL, Redis, Kafka, SQS</span>
      </div>
      <div>
        <span className="font-bold text-sky-400">DevOps & Observability:</span>
        <span className="ml-2 text-sm">CI/CD, GitLab, SLO/SLI, Monitoring, Performance Optimization</span>
      </div>
    </div>
  )
}