import { CategoryList, MainEvents, RecommendedEvents } from "@/lib/widgets";

export default function Home() {
  return (
    <div>
      <RecommendedEvents />
      <CategoryList/>
      <MainEvents />
    </div>
  );
}
