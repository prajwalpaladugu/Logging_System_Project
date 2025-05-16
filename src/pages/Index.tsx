
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, GitMerge, Server, Terminal } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-teal-600 bg-clip-text text-transparent dark:from-teal-400 dark:to-slate-300">
            Log Sentinel System
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
            A powerful system for monitoring, collecting, and analyzing logs with an integrated CI/CD pipeline.
          </p>
          <div className="mt-8">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Explore Project
            </Button>
          </div>
        </div>
      </section>

      {/* CI/CD Pipeline Section */}
      <section className="py-16 px-4 md:px-8 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800 dark:text-white">
            CI/CD Pipeline Implementation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {/* Source Control */}
            <Card className="bg-white dark:bg-slate-700 border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Source Control</CardTitle>
                  <GitMerge className="h-6 w-6 text-blue-500" />
                </div>
                <CardDescription>Code management with Git</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
                  <li>Feature branches</li>
                  <li>Pull requests</li>
                  <li>Code reviews</li>
                </ul>
              </CardContent>
            </Card>

            {/* CI Server - replaced Jenkins with Server icon */}
            <Card className="bg-white dark:bg-slate-700 border-l-4 border-l-red-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">CI Server</CardTitle>
                  <Server className="h-6 w-6 text-red-500" />
                </div>
                <CardDescription>Continuous Integration</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
                  <li>Automated builds</li>
                  <li>Unit & integration tests</li>
                  <li>Code quality checks</li>
                </ul>
              </CardContent>
            </Card>

            {/* Deployment */}
            <Card className="bg-white dark:bg-slate-700 border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Deployment</CardTitle>
                  <Terminal className="h-6 w-6 text-green-500" />
                </div>
                <CardDescription>Continuous Deployment</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
                  <li>Automated deployments</li>
                  <li>Environment management</li>
                  <li>Rollback capability</li>
                </ul>
              </CardContent>
            </Card>

            {/* Monitoring */}
            <Card className="bg-white dark:bg-slate-700 border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Monitoring</CardTitle>
                  <Database className="h-6 w-6 text-purple-500" />
                </div>
                <CardDescription>System Monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
                  <li>Log analysis</li>
                  <li>Performance tracking</li>
                  <li>Alert system</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Jenkins Implementation */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-slate-800 dark:text-white">
          Jenkins Implementation
        </h2>
        <div className="bg-white dark:bg-slate-700 rounded-lg shadow-md p-6 md:p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-white">Pipeline Configuration</h3>
          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-md mb-6">
            <pre className="text-sm overflow-x-auto">
              <code className="text-slate-800 dark:text-slate-300">
{`pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker build -t log-sentinel .'
                sh 'docker push log-sentinel:latest'
            }
        }
    }
}`}
              </code>
            </pre>
          </div>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            Our Jenkins pipeline automates the entire deployment process, from building and testing to containerization and deployment.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <div className="flex-1">
              <h4 className="font-semibold mb-2 text-slate-800 dark:text-white">Key Features</h4>
              <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
                <li>Webhook integration with GitHub</li>
                <li>Parallel test execution</li>
                <li>Artifact management</li>
                <li>Notification system for build status</li>
              </ul>
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-2 text-slate-800 dark:text-white">Benefits</h4>
              <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
                <li>Faster release cycles</li>
                <li>Improved code quality</li>
                <li>Reduced deployment risks</li>
                <li>Better team collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

