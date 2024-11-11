interface Props {
  title: string;
  subtitle: string;
}
export const JobsHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="text-center">
      <p className="text-[75px] leading-[75px] mb-14">{title}</p>
      <p className="text-[32px] font-[600]">{subtitle}</p>
    </div>
  );
};
