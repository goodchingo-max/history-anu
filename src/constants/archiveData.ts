export interface HistoricalEntity {
  id: string;
  name: string;
  title?: string;
  year: string;
  category: 'leader' | 'war' | 'empire' | 'event';
  description: string;
  details: string;
  trait?: string;
  empire?: string;
  status?: string;
}

export const archiveData: HistoricalEntity[] = [
  {
    id: 'julius-caesar',
    name: 'Julius Caesar',
    title: 'Dictator Perpetuo',
    year: '100 BC - 44 BC',
    category: 'leader',
    description: 'The architect of the Roman Empire.',
    details: 'Gaius Julius Caesar was a Roman general and statesman who played a critical role in the events that led to the demise of the Roman Republic and the rise of the Roman Empire.',
    trait: 'Strategic Brilliance',
    empire: 'Roman Empire'
  },
  {
    id: 'napoleon-bonaparte',
    name: 'Napoleon Bonaparte',
    title: 'Emperor of the French',
    year: '1769 - 1821',
    category: 'leader',
    description: 'The master of European warfare.',
    details: 'Napoleon was a French military commander and political leader who rose to prominence during the French Revolution and led several successful campaigns during the Revolutionary Wars.',
    trait: 'Military Genius',
    empire: 'First French Empire'
  },
  {
    id: 'punic-wars',
    name: 'The Punic Wars',
    year: '264 BC - 146 BC',
    category: 'war',
    description: 'A series of three wars fought between Rome and Carthage.',
    details: 'These conflicts were among the largest wars that had ever taken place. The main cause was the conflict of interests between the existing Carthaginian Empire and the expanding Roman Republic.',
    status: 'Annibalian Breakthrough'
  },
  {
    id: 'mongol-empire',
    name: 'The Mongol Empire',
    year: '1206 - 1368',
    category: 'empire',
    description: 'The largest contiguous land empire in history.',
    details: 'Founded by Genghis Khan, the empire originated from the unification of several nomadic tribes in the Mongol homeland and eventually spanned from Central Europe to the Sea of Japan.',
    trait: 'Nomadic Superiority'
  },
  {
    id: 'ww2',
    name: 'World War II',
    year: '1939 - 1945',
    category: 'war',
    description: 'The most widespread and deadliest war in history.',
    details: 'A global war that involved the vast majority of the world\'s countries—including all the great powers—forming two opposing military alliances: the Allies and the Axis.',
    status: 'Global Cataclysm'
  }
];
