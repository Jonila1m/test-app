// // ChallengesAccordion.tsx
// import React, { useState } from 'react';
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemHeader,
//   AccordionItemBody,
// } from '@react-ck/accordion';
// import { TChallenge, challenges } from '../data/challenges';
// import CodeBlock from './CodeBlock';

// const ChallengesAccordion: React.FC = () => {
//   // control which panels are open
//   const [openItems, setOpenItems] = useState<string[]>([]);

//   return (
//     <Accordion
//       defaultValue={openItems}
//       onChange={setOpenItems}
//       multiple      // allow more than one open at once
//       collapsible   // let users close all
//     >
//       {challenges.map(ch => (
//         <AccordionItem key={ch.id} value={ch.id}>
//           <AccordionItemHeader>
//             {ch.title}
//           </AccordionItemHeader>
//           <AccordionItemBody>
//             <p>{ch.description}</p>
//             <CodeBlock testPath={ch.testPath} />
//           </AccordionItemBody>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   );
// };

// export default ChallengesAccordion;
