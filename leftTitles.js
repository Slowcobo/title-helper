import tasks from './tasks.js';

const leftTitles = [
    { 
        title: 'Abounding',
        task: tasks[118]
    },
    {
        title: 'Accomplished',
        task: tasks[1]
    },
    {
        title: 'Accurate',
        task: tasks[181]
    },
    {
        title: 'Active',
        task: tasks[254]
    },
    {
        title: 'Adolescent',
        task: tasks[227]
    },
    {
        title: 'Aggressive',
        task: tasks[47]
    },
    {
        title: 'Ancient',
        task: tasks[59]
    },
    {
        title: 'Anonymous',
        task: tasks[58]
    },
    {
        title: 'Apprentice',
        task: tasks[133]
    },
    {
        title: 'Art-School',
        task: tasks[172]
    },
    {
        title: 'Aspiring',
        task: tasks[233]
    },
    {
        title: 'At-Capacity',
        task: tasks[121]
    },    
    {
        title: 'Atmospheric',
        task: tasks[188]
    },
    {
        title: 'Autonomous',
        task: tasks[158]
    },
    {
        title: 'Avaricious',
        task: tasks[166]
    },
    {
        title: 'Bait-Snatching',
        task: tasks[106]
    },
    {
        title: 'Basement',
        task: tasks[112]
    },
    {
        title: 'Buried',
        task: tasks[99]
    },
    {
        title: 'Carefree',
        task: tasks[236]
    },
    {
        title: 'Careful',
        task: tasks[75]
    },
    {
        title: 'Caretaking',
        task: tasks[76]
    },
    {
        title: 'Casual',
        task: tasks[146]
    },
    {
        title: 'Catchable',
        task: tasks[186]
    },
    {
        title: 'Celebratory',
        task: tasks[222]
    },
    {
        title: 'Change-it-Up',
        task: tasks[42]
    },
    {
        title: 'Clever',
        task: tasks[30]
    },
    {
        title: 'Cliffhanging',
        task: tasks[204]
    },
    {
        title: 'Comparative',
        task: tasks[116]
    },
    {
        title: 'Competant',
        task: tasks[2]
    },
    {
        title: 'Connected',
        task: tasks[142]
    },
    {
        title: 'Covetous',
        task: tasks[161]
    },
    {
        title: 'Cowardly',
        task: tasks[205]
    },
    {
        title: 'Crafty',
        task: tasks[32]
    },
    {
        title: 'Creative',
        task: tasks[31]
    },
    {
        title: 'Crisp',
        task: tasks[90]
    },
    {
        title: 'Curious',
        task: tasks[147]
    },
    {
        title: 'Dad-Joking',
        task: tasks[134]
    },
    {
        title: 'Detailed',
        task: tasks[74]
    },
    {
        title: 'Detail-Oriented',
        task: tasks[43]
    },
    {
        title: 'Digital-Age',
        task: tasks[140]
    },
    {
        title: 'Disconnected',
        task: tasks[144]
    },
    {
        title: 'Discovered',
        task: tasks[57]
    },
    {
        title: 'Down-And-Out',
        task: tasks[157]
    },
    {
        title: 'Dreamy',
        task: tasks[125]
    },
    {
        title: 'Easy-breezy',
        task: tasks[187]
    },
    {
        title: 'Eco-friendly',
        task: tasks[103]
    },
    {
        title: 'Efficient',
        task: tasks[192]
    },
    {
        title: 'Emergent',
        task: tasks[37]
    },
    {
        title: 'Emerging',
        task: tasks[18]
    },
    {
        title: 'Energetic',
        task: tasks[7]
    },
    {
        title: 'Fickle',
        task: tasks[211]
    },
    {
        title: 'Fierce',
        task: tasks[4]
    },
    {
        title: 'Flapping',
        task: tasks[200]
    },
    {
        title: 'Flightless',
        task: tasks[208]
    },
    {
        title: 'Flower-Loving',
        task: tasks[77]
    },
    {
        title: 'Flying',
        task: tasks[190]
    },
    {
        title: 'Freshly Delivered',
        task: tasks[16]
    },
    {
        title: 'Friendly',
        task: tasks[217]
    },
    {
        title: 'Friendship',
        task: tasks[218]
    },
    {
        title: 'Full-fledged',
        task: tasks[156]
    },
    {
        title: 'Future',
        task: tasks[138]
    },
    {
        title: 'Glittering',
        task: tasks[245]
    },
    {
        title: 'Global',
        task: tasks[249]
    },
    {
        title: 'Gorgeous',
        task: tasks[72]
    },
    {
        title: 'Greedy',
        task: tasks[148]
    },
    {
        title: 'Greenhouse',
        task: tasks[68]
    },
    {
        title: 'Handmade',
        task: tasks[36]
    },
    {
        title: 'Happy',
        task: tasks[113]
    },
    {
        title: 'Hay-Feverish',
        task: tasks[80]
    },
    {
        title: 'Heavenly',
        task: tasks[70]
    },
    {
        title: 'Herbivorous',
        task: tasks[65]
    },
    {
        title: 'Highly Aware',
        task: tasks[178]
    },
    {
        title: 'Hip',
        task: tasks[33]
    },
    {
        title: 'History-Loving',
        task: tasks[60]
    },
    {
        title: 'Hobby-Level',
        task: tasks[21]
    },
    {
        title: 'Home',
        task: tasks[124]
    },
    {
        title: 'Homey',
        task: tasks[110]
    },
    {
        title: 'Hooked',
        task: tasks[9]
    },
    {
        title: 'Hospitable',
        task: tasks[250]
    },
    {
        title: 'Humming',
        task: tasks[201]
    },
    {
        title: 'Inexperienced',
        task: tasks[81]
    },
    {
        title: 'Interior',
        task: tasks[114]
    },
    {
        title: 'Internet',
        task: tasks[141]
    },
    {
        title: 'Invested',
        task: tasks[159]
    },
    {
        title: 'Invulnerable',
        task: tasks[123]
    },
    {
        title: 'Jovial',
        task: tasks[237]
    },
    {
        title: 'Kindly',
        task: tasks[127]
    },
    {
        title: 'Knowledge-Thirsty',
        task: tasks[29]
    },
    {
        title: 'Late-Night',
        task: tasks[196]
    },
    {
        title: 'Legendary',
        task: tasks[150]
    },
    {
        title: 'Liberal-Arts',
        task: tasks[174]
    },
    {
        title: 'Lonely',
        task: tasks[251]
    },
    {
        title: 'Lucky',
        task: tasks[235]
    },
    {
        title: 'Ludicrously Popular',
        task: tasks[14]
    },
    {
        title: 'Materialistic',
        task: tasks[149]
    },
    {
        title: 'Mature',
        task: tasks[84]
    },
    {
        title: 'Messy',
        task: tasks[63]
    },
    {
        title: 'Mistakenly Caught',
        task: tasks[105]
    },
    {
        title: 'Moderate',
        task: tasks[3]
    },
    {
        title: 'Night-Owl',
        task: tasks[22]
    },
    {
        title: 'Nook Inc.\'s',
        task: tasks[0]
    },
    {
        title: 'Novice',
        task: tasks[152],
    },
    {
        title: 'Occasional',
        task: tasks[248],
    },
    {
        title: 'Omnivorous',
        task: tasks[64],
    },
    {
        title: 'One-Room',
        task: tasks[108],
    },
    {
        title: 'Organic',
        task: tasks[79],
    },
    {
        title: 'Outdoor-Loving',
        task: tasks[199],
    },
    {
        title: 'Outdoorsy',
        task: tasks[78],
    },
    {
        title: 'Overacting',
        task: tasks[132],
    },
    {
        title: 'Overboard',
        task: tasks[52],
    },
    {
        title: 'Overnight',
        task: tasks[198],
    },
    {
        title: 'Over-Shelled',
        task: tasks[95],
    },
    {
        title: 'Overstuffed',
        task: tasks[119],
    },
    {
        title: 'Partially Obscured',
        task: tasks[120],
    },
    {
        title: 'Photogenic',
        task: tasks[137],
    },
    {
        title: 'Plucky',
        task: tasks[89],
    },
    {
        title: 'Polymorphing',
        task: tasks[24],
    },
    {
        title: 'Pond-Raised',
        task: tasks[8],
    },
    {
        title: 'Precocious',
        task: tasks[82],
    },
    {
        title: 'Pro',
        task: tasks[234],
    },
    {
        title: 'Rare',
        task: tasks[100],
    },
    {
        title: 'Rascally',
        task: tasks[51],
    },
    {
        title: 'Ready',
        task: tasks[98],
    },
    {
        title: 'Refined',
        task: tasks[73],
    },
    {
        title: 'Reliable',
        task: tasks[128],
    },
    {
        title: 'Respected',
        task: tasks[13],
    },
    {
        title: 'Responsible',
        task: tasks[170],
    },
    {
        title: 'Restless',
        task: tasks[189],
    },
    {
        title: 'Risen',
        task: tasks[184],
    },
    {
        title: 'Rotten',
        task: tasks[85],
    },
    {
        title: 'Rough-And-Tumble',
        task: tasks[54],
    },
    {
        title: 'Rowdy',
        task: tasks[53],
    },
    {
        title: 'Rumormongering',
        task: tasks[171],
    },
    {
        title: 'Savvy',
        task: tasks[27],
    },
    {
        title: 'Science-y',
        task: tasks[173],
    },
    {
        title: 'Seashore',
        task: tasks[93],
    },
    {
        title: 'Seasonal',
        task: tasks[83],
    },
    {
        title: 'Second-Floor',
        task: tasks[111],
    },
    {
        title: 'Self-paced',
        task: tasks[253],
    },
    {
        title: 'Self-Possessed',
        task: tasks[122],
    },
    {
        title: 'Shadowy',
        task: tasks[169],
    },
    {
        title: 'Sharp',
        task: tasks[48],
    },
    {
        title: 'Shell-Grabbing',
        task: tasks[92],
    },
    {
        title: 'Shifty',
        task: tasks[94],
    },
    {
        title: 'Single-Occupant',
        task: tasks[109],
    },
    {
        title: 'Sleepless',
        task: tasks[255],
    },
    {
        title: 'Small-Fry',
        task: tasks[6],
    },
    {
        title: 'Smartphone',
        task: tasks[139],
    },
    {
        title: 'So-Called',
        task: tasks[151],
    },
    {
        title: 'Soothing',
        task: tasks[216],
    },
    {
        title: 'Specific',
        task: tasks[46],
    },
    {
        title: 'Sports-Minded',
        task: tasks[56],
    },
    {
        title: 'Status-Minded',
        task: tasks[165],
    },
    {
        title: 'Summer-Born',
        task: tasks[224],
    },
    {
        title: 'Sweet-Smelling',
        task: tasks[71],
    },
    {
        title: 'Swept-Away',
        task: tasks[203],
    },
    {
        title: 'Teary-eyed',
        task: tasks[183],
    },
    {
        title: 'Tentative',
        task: tasks[115],
    },
    {
        title: 'Thorny',
        task: tasks[69],
    },
    {
        title: 'Thrifty',
        task: tasks[160],
    },
    {
        title: 'Tidal',
        task: tasks[97],
    },
    {
        title: 'Tidy',
        task: tasks[177],
    },
    {
        title: 'Total',
        task: tasks[87],
    },
    {
        title: 'Trailblazing',
        task: tasks[202],
    },
    {
        title: 'Trapped',
        task: tasks[185],
    },
    {
        title: 'Traveling',
        task: tasks[247],
    },
    {
        title: 'Trendy',
        task: tasks[232],
    },
    {
        title: 'Trivia',
        task: tasks[26],
    },
    {
        title: 'Tropically Grown',
        task: tasks[91]
    },
    {
        title: 'Twin\'s',
        task: tasks[86]
    },
    {
        title: 'Unabashedly',
        task: tasks[12]
    },
    {
        title: 'Understated',
        task: tasks[28]
    },
    {
        title: 'Unhindered',
        task: tasks[11]
    },
    {
        title: 'Unique',
        task: tasks[41]
    },
    {
        title: 'Unpearable',
        task: tasks[88]
    },
    {
        title: 'Untamed',
        task: tasks[219]
    },
    {
        title: 'Untossable',
        task: tasks[102]
    },
    {
        title: 'Upstart',
        task: tasks[167]
    },
    {
        title: 'Vigorous',
        task: tasks[66]
    },
    {
        title: 'Water\'s Edge',
        task: tasks[101]
    },
    {
        title: 'Waterway',
        task: tasks[104]
    },
    {
        title: 'Wave-Tossed',
        task: tasks[107]
    },
    {
        title: 'Weak',
        task: tasks[17]
    },
    {
        title: 'Weekend',
        task: tasks[164]
    },
    {
        title: 'Well-Known',
        task: tasks[252]
    },
    {
        title: 'Widely Accepted',
        task: tasks[143]
    },
    {
        title: 'Wide-Ranging',
        task: tasks[153]
    },
    {
        title: 'Wild',
        task: tasks[67]
    },
    {
        title: 'Wild-Child',
        task: tasks[182]
    },
    {
        title: 'Wishful',
        task: tasks[197]
    },
    {
        title: 'Worldwide',
        task: tasks[168]
    }
];

export default leftTitles;