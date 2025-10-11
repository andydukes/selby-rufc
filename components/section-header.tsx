interface SectionHeaderProps {
  title: string
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="bg-selby-red text-white py-3 px-4 rounded-t-lg">
      <h2 className="text-lg font-bold">{title}</h2>
    </div>
  )
}
