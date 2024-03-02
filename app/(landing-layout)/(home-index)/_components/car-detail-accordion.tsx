import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function CarDetailAccordion() {
  return (
    <Accordion type='single' collapsible className='w-full'>
      <AccordionItem value='item-1' className='pb-4'>
        <AccordionTrigger className='font-semibold'>
          Description
        </AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-2' className='pb-4'>
        <AccordionTrigger className='font-semibold'>
          Product Highlights
        </AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value='item-3' className='pb-4'>
        <AccordionTrigger className='font-semibold'>
          Delivery & Warranty
        </AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
