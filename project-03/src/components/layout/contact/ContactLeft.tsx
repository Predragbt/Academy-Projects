import { ContactLanguageContentProps } from "../../../types/ContactTypes";

interface Props {
  data: ContactLanguageContentProps;
}

export const ContactLeft = ({ data }: Props) => {
  return (
    <div className="text-white">
      <p className="text-[75px] leading-[75px] font-[800] text-[#FF6F0F] mb-8">
        {data.contact_section.title}
      </p>
      <p className="text-[32px] font-[600]">
        {data.contact_section.description}
      </p>

      <div className="mt-12 mb-20 flex flex-col gap-2">
        <p>{data.contact_section.contact_info.email}</p>
        <p>{data.contact_section.contact_info.phone}</p>
        <p>{data.contact_section.contact_info.address}</p>
      </div>

      <p className="text-[32px] font-[600] mb-12">
        {data.what_happens_next.title}
      </p>
      <div>
        {data.what_happens_next.steps.map((step, index) => (
          <div key={index}>
            <p className=" flex items-center">
              <span className="bg-[#FF6F0F] w-7 h-7 flex items-center justify-center rounded-full mr-4">
                {step.number}
              </span>
              <span>{step.description}</span>
            </p>
            {index !== data.what_happens_next.steps.length - 1 && (
              <>
                <p className="ml-3 mb-1 leading-[6px]">.</p>
                <p className="ml-3 my-1 leading-[6px]">.</p>
                <p className="ml-3 my-1 leading-[6px]">.</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
