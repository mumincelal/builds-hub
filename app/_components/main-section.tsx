import Image from 'next/image';
import Placeholder from '@/assets/images/placeholder.svg';

export const MainSection = () => (
  <section className="w-full bg-muted py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="space-y-2 text-center">
          <p className="text-sm">Manage GitHub Actions</p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Streamline Your Workflows
          </h2>
          <p className="max-w-4xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our GitHub Actions management platform empowers you to monitor,
            enable/disable, and configure your actions directly within the app,
            saving you time and effort.
          </p>
        </div>
        <div className="grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <Image
            className="aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            src={Placeholder}
            alt="Placeholder"
            width="550"
            height="310"
            priority
          />
          <div className="flex flex-col justify-center space-y-4">
            <ul className="grid gap-6">
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Repository Overview</h3>
                  <p className="text-muted-foreground">
                    View all your connected repositories and their associated
                    GitHub Actions.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Action Management</h3>
                  <p className="text-muted-foreground">
                    Monitor, enable/disable, and configure your GitHub Actions
                    directly within the app.
                  </p>
                </div>
              </li>
              <li>
                <div className="grid gap-1">
                  <h3 className="text-xl font-bold">Secure Integration</h3>
                  <p className="text-muted-foreground">
                    Securely connect your GitHub account to access your
                    repositories and actions.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);
