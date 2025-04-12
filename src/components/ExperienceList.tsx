import React from 'react'

export default function ExperienceList() {
  return (
    <ul className="space-y-4 text-gray-200">
      <li>
        <strong>Lead Backend Engineer @ DMM.com Group</strong><br />
        <em>Oct 2023 – Present</em><br />
        Upgraded AWS Aurora for a 10,000 RPS service with zero downtime. Implemented asynchronous batch processing using SQS and Kubernetes autoscaling.
      </li>
      <li>
        <strong>Senior Backend Engineer @ Kawazu Sakura</strong><br />
        <em>Mar 2022 – Sep 2023</em><br />
        Architected a microservices-based crypto exchange system including matching engine and account services.
      </li>
      <li>
        <strong>Senior .NET Developer @ Blue Planet-Works</strong><br />
        <em>Nov 2020 – Feb 2022</em><br />
        Developed a cybersecurity platform for 15,000+ companies. Led monolith to microservice transformation, and implemented CI/CD from scratch.
      </li>
    </ul>
  )
}
