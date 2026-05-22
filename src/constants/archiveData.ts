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

  // Legendary Leader Details
  dossier?: {
    rise: string;
    fall: string;
    majorBattles: string[];
    enemies: string[];
    allies: string[];
    quotes: string[];
    campaigns: { name: string; year: string; outcome: string }[];
  };
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
    empire: 'Roman Republic / Empire',
    dossier: {
      rise: 'Through a combination of military success in Gaul and calculated political maneuvering with Pompey and Crassus.',
      fall: 'Assassinated by a group of senators on the Ides of March, fearing his absolute power.',
      majorBattles: ['Alesia', 'Pharsalus', 'Zela'],
      enemies: ['Pompey the Great', 'Vercingetorix', 'Brutus', 'Cassius'],
      allies: ['Mark Antony', 'Octavian', 'Cleopatra'],
      quotes: ['Veni, vidi, vici.', 'Et tu, Brute?', 'The die is cast.'],
      campaigns: [
        { name: 'Gallic Wars', year: '58–50 BC', outcome: 'Total Conquest' },
        { name: 'Civil War', year: '49–45 BC', outcome: 'Established Dictatorship' }
      ]
    }
  },
  {
    id: 'napoleon-bonaparte',
    name: 'Napoleon Bonaparte',
    title: 'Emperor of the French',
    year: '1769 - 1821',
    category: 'leader',
    description: 'The master of European warfare.',
    details: 'Napoleon was a French military commander and political leader who rose to prominence during the French Revolution.',
    trait: 'Military Genius',
    empire: 'First French Empire',
    dossier: {
      rise: 'Seized power in a 1799 coup d\'état, eventually crowning himself Emperor of the French.',
      fall: 'Defeated at Waterloo and exiled to the remote island of Saint Helena.',
      majorBattles: ['Austerlitz', 'Jena-Auerstedt', 'Waterloo'],
      enemies: ['Duke of Wellington', 'Alexander I of Russia', 'Horatio Nelson'],
      allies: ['Marshal Ney', 'Joachim Murat', 'Marie Louise'],
      quotes: ['History is a set of lies agreed upon.', 'Imagination governs the world.'],
      campaigns: [
        { name: 'Italian Campaign', year: '1796', outcome: 'Shattered Austrian Power' },
        { name: 'Russian Campaign', year: '1812', outcome: 'Disastrous Retreat' }
      ]
    }
  },
  {
    id: 'alexander-the-great',
    name: 'Alexander the Great',
    title: 'King of Macedonia',
    year: '356 BC - 323 BC',
    category: 'leader',
    description: 'The man who conquered the known world.',
    details: 'By the age of thirty, he had created one of the largest empires in history, stretching from Greece to northwestern India.',
    trait: 'Unconquered',
    empire: 'Macedonian Empire',
    dossier: {
      rise: 'Inherited a strong kingdom and military from his father Philip II, then turned east to conquer Persia.',
      fall: 'Died young in Babylon, leading to the fragmentation of his empire among his generals.',
      majorBattles: ['Issus', 'Gaugamela', 'Hydaspes'],
      enemies: ['Darius III', 'Porus'],
      allies: ['Hephaestion', 'Ptolemy', 'Seleucus'],
      quotes: ['There is nothing impossible to him who will try.', 'I am not afraid of an army of lions led by a sheep; I am afraid of an army of sheep led by a lion.'],
      campaigns: [
        { name: 'Persian Campaign', year: '334–330 BC', outcome: 'Collapse of Achaemenid Empire' },
        { name: 'Indian Campaign', year: '327–325 BC', outcome: 'Stretched Empire to its Limits' }
      ]
    }
  },
  {
    id: 'genghis-khan',
    name: 'Genghis Khan',
    title: 'Universal Ruler',
    year: '1162 - 1227',
    category: 'leader',
    description: 'The scourge of God and unifier of the steppes.',
    details: 'Born Temüjin, he founded the Mongol Empire, the largest contiguous land empire in history.',
    trait: 'Tactical Terror',
    empire: 'Mongol Empire',
    dossier: {
      rise: 'United the nomadic tribes of Northeast Asia through extreme charisma and calculated brutality.',
      fall: 'Died during a campaign against the Western Xia; the exact cause remains a secret.',
      majorBattles: ['Chakirmaut', 'Yehuling', 'Samarkand'],
      enemies: ['Jamukha', 'Shah Muhammad II'],
      allies: ['Subutai', 'Jebe', 'Ögedei'],
      quotes: ['I am the punishment of God.', 'The greatest happiness is to vanquish your enemies.'],
      campaigns: [
        { name: 'Conquest of China', year: '1205–1227', outcome: 'Shattered Jin and Xia Dynasties' },
        { name: 'Khwarezmian Conquest', year: '1219–1221', outcome: 'Total Annihilation' }
      ]
    }
  },
  {
    id: 'punic-wars',
    name: 'The Punic Wars',
    year: '264 BC - 146 BC',
    category: 'war',
    description: 'A series of three wars fought between Rome and Carthage.',
    details: 'These conflicts were among the largest wars that had ever taken place.',
    status: 'Annibalian Breakthrough'
  }
];
