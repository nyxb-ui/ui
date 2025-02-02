import {
   TableOfContentsItem,
   TableOfContentsLink,
   TableOfContentsList,
   TableOfContentsTitle,
} from "~/registry/default/ui/toc"

export default function TOCDemo() {
   return (
      <TableOfContentsList>
         <TableOfContentsTitle>Table of Contents</TableOfContentsTitle>
         <TableOfContentsItem>
            <TableOfContentsLink href="#first-section">
               First Section
            </TableOfContentsLink>
         </TableOfContentsItem>
         <TableOfContentsItem>
            <TableOfContentsLink href="#second-section">
               Second Section
            </TableOfContentsLink>
         </TableOfContentsItem>
         <TableOfContentsItem>
            <TableOfContentsLink href="#third-section">
               Third Section
            </TableOfContentsLink>
         </TableOfContentsItem>
      </TableOfContentsList>
   )
}
