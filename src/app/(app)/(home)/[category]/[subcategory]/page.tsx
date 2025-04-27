interface Props {
  params: Promise<{ category: string; subcategory: string }>;
}
const Page = async ({ params }: Props) => {
  const { category, subcategory } = await params;

  return (
    <div>
      {category}subCategory {subcategory}
    </div>
  );
};
export default Page;
