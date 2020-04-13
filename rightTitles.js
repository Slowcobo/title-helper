import tasks from './tasks.js';

const rightTitles = [
    {
        title: 'Adventurer',
        task: tasks[255]
    },
    { 
        title: 'Ally',
        task: tasks[128]
    },
    { 
        title: 'Angler',
        task: tasks[7]
    },
    {
        title: 'Artisan',
        task: tasks[37]
    },   
    {
        title: 'Artist',
        task: tasks[233]
    },
    {
        title: 'Authority',
        task: tasks[28]
    },
    {
        title: 'Avatar',
        task: tasks[149]
    },
    {
        title: 'Backbone',
        task: tasks[112]
    },
    {
        title: 'Beach Bum',
        task: tasks[3]
    },
    {
        title: 'Beast',
        task: tasks[67]
    },
    {
        title: 'Beginner',
        task: tasks[109]
    },
    {
        title: 'Bellionaire',
        task: tasks[168]
    },
    {
        title: 'Bill Payer',
        task: tasks[170]
    },
    {
        title: 'Birthday Boy/Girl',
        task: tasks[222]
    },
    {
        title: 'Blossom',
        task: tasks[71]
    },
    {
        title: 'Boss',
        task: tasks[77]
    },
    {
        title: 'Bounty',
        task: tasks[82]
    },
    {
        title: 'Boy/Girl',
        task: tasks[172]
    },
    {
        title: 'Brute',
        task: tasks[237]
    },
    {
        title: 'Buddy',
        task: tasks[217]
    },
    {
        title: 'Bug Fan',
        task: tasks[21]
    },
    {
        title: 'Caretaker',
        task: tasks[73]
    },
    {
        title: 'Challenger',
        task: tasks[42]
    },
    {
        title: 'Child',
        task: tasks[140]
    },
    {
        title: 'Chill Soul',
        task: tasks[253]
    },
    {
        title: 'Chiller',
        task: tasks[224]
    },
    {
        title: 'Chum',
        task: tasks[251]
    },
    {
        title: 'Cleaner',
        task: tasks[104]
    },
    {
        title: 'Clown',
        task: tasks[51]
    },
    {
        title: 'Club Member',
        task: tasks[32]
    },
    {
        title: 'Coast Dweller',
        task: tasks[98]
    },
    {
        title: 'Coconut',
        task: tasks[91]
    },
    {
        title: 'Collector',
        task: tasks[148]
    },
    {
        title: 'Connector',
        task: tasks[143]
    },
    {
        title: 'Consumer',
        task: tasks[156]
    },
    {
        title: 'Coordinator',
        task: tasks[122]
    },
    {
        title: 'Creator',
        task: tasks[204]
    },
    {
        title: 'Creature',
        task: tasks[24]
    },
    {
        title: 'Crusher',
        task: tasks[52]
    },
    {
        title: 'Crybaby',
        task: tasks[183]
    },
    {
        title: 'Custodian',
        task: tasks[64]
    },
    {
        title: 'Dancer',
        task: tasks[133]
    },
    {
        title: 'Deadeye',
        task: tasks[181]
    },
    {
        title: 'Decorating Fiend',
        task: tasks[199]
    },
    {
        title: 'Defender',
        task: tasks[78]
    },
    {
        title: 'Designer',
        task: tasks[234]
    },
    {
        title: 'Dietitian',
        task: tasks[79]
    },
    {
        title: 'Dreamer',
        task: tasks[125]
    },
    {
        title: 'Eccentric',
        task: tasks[41]
    },
    {
        title: 'Ecologist',
        task: tasks[103]
    },
    {
        title: 'Egg',
        task: tasks[16]
    },
    {
        title: 'Emperor/Empress',
        task: tasks[245]
    },
    {
        title: 'Engineer',
        task: tasks[43]
    },
    {
        title: 'Enthusiast',
        task: tasks[31]
    },
    {
        title: 'Eventuality',
        task: tasks[157]
    },
    {
        title: 'Family Member',
        task: tasks[160]
    },
    {
        title: 'Father/Mother',
        task: tasks[30]
    },
    {
        title: 'Figure',
        task: tasks[236]
    },
    {
        title: 'Fish',
        task: tasks[105]
    },
    {
        title: 'Fisher',
        task: tasks[4]
    },
    {
        title: 'Fishing Fan',
        task: tasks[2]
    },
    {
        title: 'Fixer',
        task: tasks[169]
    },
    {
        title: 'Flag Waver',
        task: tasks[200]
    },
    {
        title: 'Floaty Thing',
        task: tasks[188]
    },
    {
        title: 'Flower',
        task: tasks[68]
    },
    {
        title: 'Force',
        task: tasks[147]
    },
    {
        title: 'Fossil',
        task: tasks[57]
    },
    {
        title: 'Fowl',
        task: tasks[208]
    },
    {
        title: 'Frenzy',
        task: tasks[106]
    },
    {
        title: 'Freshman',
        task: tasks[87]
    },
    {
        title: 'Friend',
        task: tasks[250]
    },
    {
        title: 'Gardener',
        task: tasks[75]
    },
    {
        title: 'Genius',
        task: tasks[99]
    },
    {
        title: 'Ghost',
        task: tasks[205]
    },
    {
        title: 'Groom/Bride',
        task: tasks[72]
    },
    {
        title: 'Ground Traveler',
        task: tasks[151]
    },
    {
        title: 'Grub',
        task: tasks[17]
    },
    {
        title: 'Guard',
        task: tasks[48]
    },
    {
        title: 'Hobbyist',
        task: tasks[153]
    },
    {
        title: 'Hunter',
        task: tasks[189]
    },
    {
        title: 'Influencer',
        task: tasks[171]
    },
    {
        title: 'Insect',
        task: tasks[22]
    },
    {
        title: 'Intellectual',
        task: tasks[27]
    },
    {
        title: 'Interior-Design Fan',
        task: tasks[118]
    },
    {
        title: '"It" Guy/Girl',
        task: tasks[14]
    },
    {
        title: 'Keeper',
        task: tasks[74]
    },
    {
        title: 'Kind',
        task: tasks[84]
    },
    {
        title: 'Klutz',
        task: tasks[186]
    },
    {
        title: 'Lad/Lass',
        task: tasks[1]
    },
    {
        title: 'Landlord',
        task: tasks[111]
    },
    {
        title: 'Lawn Clippings',
        task: tasks[63]
    },
    {
        title: 'Legend',
        task: tasks[197]
    },
    {
        title: 'Life',
        task: tasks[158]
    },
    {
        title: 'Life Hacker',
        task: tasks[123]
    },
    {
        title: 'Life-Form',
        task: tasks[107]
    },
    {
        title: 'Loner',
        task: tasks[108]
    },
    {
        title: 'Manager',
        task: tasks[121]
    },
    {
        title: 'Materlist',
        task: tasks[146]
    },
    {
        title: 'Meanie',
        task: tasks[54]
    },
    {
        title: 'Mermaid',
        task: tasks[101]
    },
    {
        title: 'Meteorite',
        task: tasks[196]
    },
    {
        title: 'Model',
        task: tasks[232]
    },
    {
        title: 'Moneybags',
        task: tasks[166]
    },
    {
        title: 'Mr./Ms. Popular',
        task: tasks[90]
    },
    {
        title: 'Muscle',
        task: tasks[56]
    },
    {
        title: 'Musician',
        task: tasks[201]
    },
    {
        title: 'Music-Lover',
        task: tasks[211]
    },
    {
        title: 'Neatnik',
        task: tasks[178]
    },
    {
        title: 'Neophyte',
        task: tasks[132]
    },
    {
        title: 'Observationist',
        task: tasks[81]
    },
    {
        title: 'One',
        task: tasks[13]
    },
    {
        title: 'Other Half',
        task: tasks[86]
    },
    {
        title: 'Overachiever',
        task: tasks[113]
    },
    {
        title: 'Pal',
        task: tasks[216]
    },
    {
        title: 'Paradise',
        task: tasks[190]
    },
    {
        title: 'Partier',
        task: tasks[252]
    },
    {
        title: 'Partitioner',
        task: tasks[192]
    },
    {
        title: 'Party Animal',
        task: tasks[219]
    },
    {
        title: 'Patron',
        task: tasks[0]
    },
    {
        title: 'Pear',
        task: tasks[88]
    },
    {
        title: 'Person',
        task: tasks[247]
    },
    {
        title: 'Personality',
        task: tasks[161]
    },
    {
        title: 'Pesca Pro',
        task: tasks[6]
    },
    {
        title: 'Phoenix',
        task: tasks[184]
    },
    {
        title: 'Photographer',
        task: tasks[137]
    },
    {
        title: 'Pioneer',
        task: tasks[203]
    },
    {
        title: 'Poet',
        task: tasks[174]
    },
    {
        title: 'Problem Solver',
        task: tasks[47]
    },
    {
        title: 'Prodigy',
        task: tasks[100]
    },
    {
        title: 'Producer',
        task: tasks[46]
    },
    {
        title: 'Punk',
        task: tasks[53]
    },
    {
        title: 'Pupa',
        task: tasks[18]
    },
    {
        title: 'Reaction',
        task: tasks[9]
    },
    {
        title: 'Reckless One',
        task: tasks[185]
    },
    {
        title: 'Rejuvenator',
        task: tasks[70]
    },
    {
        title: 'Remodeler',
        task: tasks[115]
    },
    {
        title: 'Representative',
        task: tasks[26]
    },
    {
        title: 'Researcher',
        task: tasks[60]
    },
    {
        title: 'Resident',
        task: tasks[36]
    },
    {
        title: 'Reviewer',
        task: tasks[142]
    },
    {
        title: 'Ringleader',
        task: tasks[76]
    },
    {
        title: 'Rookie',
        task: tasks[152]
    },
    {
        title: 'Rose',
        task: tasks[69]
    },
    {
        title: 'Runner',
        task: tasks[202]
    },
    {
        title: 'Savant',
        task: tasks[139]
    },
    {
        title: 'Scent',
        task: tasks[85]
    },
    {
        title: 'Seashell Seller',
        task: tasks[93]
    },
    {
        title: 'Season',
        task: tasks[97]
    },
    {
        title: 'Seeker',
        task: tasks[218]
    },
    {
        title: 'Semiprofessional',
        task: tasks[134]
    },
    {
        title: 'Sentiment',
        task: tasks[110]
    },
    {
        title: 'Shell Fan',
        task: tasks[92]
    },
    {
        title: 'Shell Master',
        task: tasks[95]
    },
    {
        title: 'Shellector',
        task: tasks[94]
    },
    {
        title: 'Shopaholic',
        task: tasks[159]
    },
    {
        title: 'Shy Kid',
        task: tasks[12]
    },
    {
        title: 'Sidekick',
        task: tasks[29]
    },
    {
        title: 'Slingshot Ace',
        task: tasks[187]
    },
    {
        title: 'Sneezer',
        task: tasks[80]
    },
    {
        title: 'Something or Other',
        task: tasks[58]
    },
    {
        title: 'Sort',
        task: tasks[114]
    },
    {
        title: 'Sorter',
        task: tasks[65]
    },
    {
        title: 'Specialist',
        task: tasks[254]
    },
    {
        title: 'Speculator',
        task: tasks[165]
    },
    {
        title: 'Sprout',
        task: tasks[66]
    },
    {
        title: 'Stalkholder',
        task: tasks[164]
    },
    {
        title: 'Standard',
        task: tasks[127]
    },
    {
        title: 'Star',
        task: tasks[89]
    },
    {
        title: 'Student',
        task: tasks[173]
    },
    {
        title: 'Stylist',
        task: tasks[119]
    },
    {
        title: 'Sundries Fan',
        task: tasks[116]
    },
    {
        title: 'Superstar',
        task: tasks[198]
    },
    {
        title: 'Surfer',
        task: tasks[141]
    },
    {
        title: 'Talent',
        task: tasks[120]
    },
    {
        title: 'Tourist',
        task: tasks[248]
    },
    {
        title: 'Trader',
        task: tasks[167]
    },
    {
        title: 'Transformer',
        task: tasks[124]
    },
    {
        title: 'Trash',
        task: tasks[102]
    },
    {
        title: 'Traveler',
        task: tasks[138]
    },
    {
        title: 'Tree',
        task: tasks[83]
    },
    {
        title: 'Tropical Fish',
        task: tasks[8]
    },
    {
        title: 'Troublemaker',
        task: tasks[182]
    },
    {
        title: 'Truth',
        task: tasks[59]
    },
    {
        title: 'Type',
        task: tasks[235]
    },
    {
        title: 'Virtuoso',
        task: tasks[33]
    },
    {
        title: 'Walking Dictionary',
        task: tasks[150]
    },
    {
        title: 'Wallflower',
        task: tasks[11]
    },
    {
        title: 'Wanderer',
        task: tasks[249]
    },
    {
        title: 'Wild Child',
        task: tasks[177]
    },
    {
        title: 'Worrywart',
        task: tasks[144]
    },
    {
        title: 'Youngster',
        task: tasks[227]
    }
];

export default rightTitles;
