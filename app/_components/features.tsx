import { Activity, GitBranch, Settings2, Shield } from "lucide-react";

const features = [
  {
    key: "real-time-monitoring",
    icon: Activity,
    title: "Real-time Monitoring",
    description:
      "Monitor all your GitHub Actions workflows across repositories in real-time."
  },
  {
    key: "multi-repo-management",
    icon: GitBranch,
    title: "Multi-repo Management",
    description:
      "Manage and orchestrate workflows across multiple repositories from a single dashboard."
  },
  {
    key: "bulk-configuration",
    icon: Settings2,
    title: "Bulk Configuration",
    description:
      "Apply configuration changes and updates across multiple repositories simultaneously."
  },
  {
    key: "security-insights",
    icon: Shield,
    title: "Security Insights",
    description:
      "Get detailed security analysis and recommendations for your workflows."
  }
];

export const Features = () => (
  <section id="features" className="bg-gray-50 py-10 lg:py-20">
    <div className="container mx-auto">
      <div className="space-y-12">
        <div className="space-y-2 text-center">
          <h2 className="text-balance font-bold text-3xl text-gray-900 sm:text-4xl">
            Powerful Features for Complete Control
          </h2>
          <p className="text-balance text-gray-600 text-xl">
            Everything you need to manage your GitHub Actions workflows
            effectively
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.key}
              className="group hover:-translate-y-1 transform rounded-xl border border-gray-100 bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="rounded-lg bg-white p-3">
                <feature.icon className="h-10 w-10 text-indigo-600" />
              </div>
              <h3 className="mt-6 mb-3 text-balance font-bold text-gray-900 text-xl">
                {feature.title}
              </h3>
              <p className="text-balance text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
