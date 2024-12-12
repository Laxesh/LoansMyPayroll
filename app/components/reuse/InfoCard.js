export default function InfoCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-[8px] p-4 flex flex-col gap-4">
      <div className="flex items-center justify-center p-3 bg-[#F7FFD2] max-w-12 rounded-[6px]">
        <Image src={icon} alt={title} width={24} height={24} />
      </div>
      <div>
        <p className="text-lg font-medium text-[#57534E]">{title}</p>
        <p className="text-[#79716B]">{description}</p>
      </div>
    </div>
  );
}
