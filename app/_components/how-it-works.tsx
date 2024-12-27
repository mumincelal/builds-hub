import { Activity, GitFork, GitPullRequest, Settings } from "lucide-react";

const steps = [
  {
    key: "connect-repositories",
    icon: GitFork,
    title: "Connect Your Repositories",
    description:
      "Easily connect all your GitHub repositories with a single click authentication."
  },
  {
    key: "configure-workflows",
    icon: Settings,
    title: "Configure Workflows",
    description:
      "Set up and customize your GitHub Actions workflows across all repositories."
  },
  {
    key: "monitor-performance",
    icon: Activity,
    title: "Monitor Performance",
    description:
      "Track and analyze your workflows in real-time with detailed insights."
  },
  {
    key: "optimize-scale",
    icon: GitPullRequest,
    title: "Optimize & Scale",
    description:
      "Make data-driven decisions to improve your CI/CD pipeline efficiency."
  }
];

export const HowItWorks = () => (
  <section id="how-it-works" className="bg-white py-10 lg:py-20">
    <div className="container mx-auto">
      <div className="flex flex-col items-center gap-12">
        <div className="space-y-2 text-center">
          <h2 className="font-bold text-3xl text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="text-gray-600 text-xl">
            Get started with BuildsHub in four simple steps
          </p>
        </div>
        <div className="flex flex-col gap-12">
          {steps.map((step) => (
            <div key={step.key} className="flex items-start gap-4">
              <div className="flex-shrink-0 rounded-full bg-indigo-100 p-3">
                <step.icon className="size-6 text-indigo-600" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-gray-900 text-lg">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
