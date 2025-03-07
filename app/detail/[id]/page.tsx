interface DetailIdPageProps {
  params: Promise<{ id: string }>;
}

const DetailIdPage = async ({ params }: DetailIdPageProps) => {
  const { id } = await params;
  console.log("🚀 ~ DetailIdPage ~ id:", id);

  return <div>DetailIdPage</div>;
};

export default DetailIdPage;
