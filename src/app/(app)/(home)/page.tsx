import { getQueryClient, trpc } from "@/trpc/server";

export default async function Home() {
  const queryClient = getQueryClient();
  const categories = await queryClient.fetchQuery(
    trpc.categories.getMany.queryOptions()
  );
  return <div>Home page{JSON.stringify(categories)}</div>;
}
