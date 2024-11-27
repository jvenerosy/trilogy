import Accordion from './Accordion'
import AccordionItem, {
  type AccordionItemProps,
  type OnClickCallback,
  type OnClickEvent,
  type TargetElement,
} from './item'
import AccordionHeader, { type AccordionHeaderProps } from './header'
import AccordionBody, { type AccordionBodyProps } from './body'

export type { AccordionProps } from './AccordionProps'

export { Accordion, AccordionItem, AccordionHeader, AccordionBody }
export type {
  AccordionItemProps,
  AccordionHeaderProps,
  AccordionBodyProps,
  OnClickCallback,
  OnClickEvent,
  TargetElement,
}
