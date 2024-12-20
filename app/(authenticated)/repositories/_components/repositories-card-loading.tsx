import { RepositoryCardLoading } from "@/app/(authenticated)/repositories/_components/repository-card-loading";
import { REPOSITORIES_PER_PAGE } from "@/configs/constants";

export const RepositoriesCardLoading = () => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {Array.from({ length: REPOSITORIES_PER_PAGE }).map((_, index) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
        <RepositoryCardLoading key={index} />
      ))}
    </div>
  );
};
