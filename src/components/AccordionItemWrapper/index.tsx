import Image from 'next/image'
import { AccordionWrapperProps } from '@typesFiles/props/accordionWrapper'
import { AccordionItem } from '@szhsin/react-accordion'
import chevron from '@assets/chevron-down.svg'

export default function AccordionItemWrapper({ children, title, ...rest }: AccordionWrapperProps) {
  return (
    <AccordionItem
      {...rest}
      header={({ state: { isEnter } }) => (
        <>
          {title}
          <Image
            className={`ml-auto transition-transform duration-200 ease-out ${
              isEnter && "rotate-180"
            }`}
            src={chevron}
            alt="Chevron"
          />
        </>
      )}
      className="border-b"
      buttonProps={{
        className: ({ isEnter }) =>
          `flex w-full p-4 text-left hover:bg-primary ${
            isEnter && "bg-secondary"
          }`
      }}
      contentProps={{
        className: "transition-height duration-200 ease-out"
      }}
      panelProps={{ className: "p-4" }}
    >
      {children}
    </AccordionItem>
  )


}
