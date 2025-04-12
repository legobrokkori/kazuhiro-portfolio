import React from 'react'

export default function ExperienceList() {
  return (
    <section className="mb-8">
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <div>
          <h3 className="font-bold">Lead Backend Engineer @ DMM.com Group</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Oct 2023 – Present</p>
          <p>Upgraded AWS Aurora for a 10,000 RPS service with zero downtime. Implemented asynchronous batch processing using SQS and Kubernetes autoscaling.</p>
        </div>
        <div>
          <h3 className="font-bold">Senior Backend Engineer @ Kawazu Sakura</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Mar 2022 – Sep 2023</p>
          <p>Architected a microservices-based crypto exchange system including matching engine and account services.</p>
        </div>
        <div>
          <h3 className="font-bold">Senior .NET Developer @ Blue Planet-Works</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Nov 2020 – Feb 2022</p>
          <p>Developed a cybersecurity platform for 15,000+ companies. Led monolith to microservice transformation, and implemented CI/CD from scratch.</p>
        </div>
      </div>
    </section>
  )
}
