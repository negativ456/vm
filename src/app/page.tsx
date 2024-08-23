import { CategoryList, MainEvents, RecommendedEvents } from "@/lib/widgets";

export default function Home() {
  return (
    <main>
      <RecommendedEvents />
      <CategoryList />
      <MainEvents/>
    </main>
  );
}
