/**
 * This file contains the offline knowledge base and logic for the AI assistant.
 * When the app is offline, the ChatInterface uses getOfflineResponse to provide answers.
 */

// A vast, structured knowledge base for offline use.
export const offlineKnowledgeBase: Record<string, any> = {
    // 1. Core & About the AI
    about: {
        identity: [
            "I am the Ayush Unimax AI, a universal AI assistant created by Ayush Sharma of Ayush Webtor Studio. I'm designed to help with a wide range of tasks, from creative writing and coding to data analysis and general knowledge.",
            "I'm the Ayush Unimax AI Studio assistant. My purpose is to be your all-in-one partner for creativity and productivity."
        ],
        creator: [
            "I was created by Ayush Sharma at Ayush Webtor Studio.",
            "My creator is Ayush Sharma."
        ],
        capabilities: [
            "I can do many things! You can chat with me, generate images, create websites, write songs, analyze code, translate languages, and much more. Explore the different modes in the sidebar to see all my capabilities.",
            "My capabilities are broad. I can assist with coding, writing, design planning, data analysis, and even creative tasks like songwriting. I can also work with files you upload."
        ],
        status: [
            "I am currently operating in offline mode. My responses are based on my pre-loaded knowledge base, so I don't have access to real-time information from the internet, but I can still answer a wide variety of questions.",
            "That's correct. I'm running offline right now, which means I'm using my internal data to chat with you."
        ]
    },
    // 2. Geography
    geography: {
        capitals: {
            // Countries
            "afghanistan": "Kabul", "albania": "Tirana", "algeria": "Algiers", "andorra": "Andorra la Vella", "angola": "Luanda", "antigua and barbuda": "St. John's", "argentina": "Buenos Aires", "armenia": "Yerevan", "australia": "Canberra", "austria": "Vienna", "azerbaijan": "Baku", "bahamas": "Nassau", "bahrain": "Manama", "bangladesh": "Dhaka", "barbados": "Bridgetown", "belarus": "Minsk", "belgium": "Brussels", "belize": "Belmopan", "benin": "Porto-Novo", "bhutan": "Thimphu", "bolivia": "Sucre", "bosnia and herzegovina": "Sarajevo", "botswana": "Gaborone", "brazil": "Brasília", "brunei": "Bandar Seri Begawan", "bulgaria": "Sofia", "burkina faso": "Ouagadougou", "burundi": "Gitega", "cabo verde": "Praia", "cambodia": "Phnom Penh", "cameroon": "Yaoundé", "canada": "Ottawa", "central african republic": "Bangui", "chad": "N'Djamena", "chile": "Santiago", "china": "Beijing", "colombia": "Bogotá", "comoros": "Moroni", "congo, democratic republic of the": "Kinshasa", "congo, republic of the": "Brazzaville", "costa rica": "San José", "croatia": "Zagreb", "cuba": "Havana", "cyprus": "Nicosia", "czech republic": "Prague", "denmark": "Copenhagen", "djibouti": "Djibouti", "dominica": "Roseau", "dominican republic": "Santo Domingo", "ecuador": "Quito", "egypt": "Cairo", "el salvador": "San Salvador", "equatorial guinea": "Malabo", "eritrea": "Asmara", "estonia": "Tallinn", "eswatini": "Mbabane", "ethiopia": "Addis Ababa", "fiji": "Suva", "finland": "Helsinki", "france": "Paris", "gabon": "Libreville", "gambia": "Banjul", "georgia": "Tbilisi", "germany": "Berlin", "ghana": "Accra", "greece": "Athens", "grenada": "St. George's", "guatemala": "Guatemala City", "guinea": "Conakry", "guinea-bissau": "Bissau", "guyana": "Georgetown", "haiti": "Port-au-Prince", "honduras": "Tegucigalpa", "hungary": "Budapest", "iceland": "Reykjavik", "india": "New Delhi", "indonesia": "Jakarta", "iran": "Tehran", "iraq": "Baghdad", "ireland": "Dublin", "israel": "Jerusalem", "italy": "Rome", "jamaica": "Kingston", "japan": "Tokyo", "jordan": "Amman", "kazakhstan": "Nur-Sultan", "kenya": "Nairobi", "kiribati": "Tarawa", "kuwait": "Kuwait City", "kyrgyzstan": "Bishkek", "laos": "Vientiane", "latvia": "Riga", "lebanon": "Beirut", "lesotho": "Maseru", "liberia": "Monrovia", "libya": "Tripoli", "liechtenstein": "Vaduz", "lithuania": "Vilnius", "luxembourg": "Luxembourg", "madagascar": "Antananarivo", "malawi": "Lilongwe", "malaysia": "Kuala Lumpur", "maldives": "Malé", "mali": "Bamako", "malta": "Valletta", "marshall islands": "Majuro", "mauritania": "Nouakchott", "mauritius": "Port Louis", "mexico": "Mexico City", "micronesia": "Palikir", "moldova": "Chisinau", "monaco": "Monaco", "mongolia": "Ulaanbaatar", "montenegro": "Podgorica", "morocco": "Rabat", "mozambique": "Maputo", "myanmar": "Naypyidaw", "namibia": "Windhoek", "nauru": "Yaren", "nepal": "Kathmandu", "netherlands": "Amsterdam", "new zealand": "Wellington", "nicaragua": "Managua", "niger": "Niamey", "nigeria": "Abuja", "north korea": "Pyongyang", "north macedonia": "Skopje", "norway": "Oslo", "oman": "Muscat", "pakistan": "Islamabad", "palau": "Ngerulmud", "panama": "Panama City", "papua new guinea": "Port Moresby", "paraguay": "Asunción", "peru": "Lima", "philippines": "Manila", "poland": "Warsaw", "portugal": "Lisbon", "qatar": "Doha", "romania": "Bucharest", "russia": "Moscow", "rwanda": "Kigali", "saint kitts and nevis": "Basseterre", "saint lucia": "Castries", "saint vincent and the grenadines": "Kingstown", "samoa": "Apia", "san marino": "San Marino", "sao tome and principe": "São Tomé", "saudi arabia": "Riyadh", "senegal": "Dakar", "serbia": "Belgrade", "seychelles": "Victoria", "sierra leone": "Freetown", "singapore": "Singapore", "slovakia": "Bratislava", "slovenia": "Ljubljana", "solomon islands": "Honiara", "somalia": "Mogadishu", "south africa": "Pretoria, Cape Town, Bloemfontein", "south korea": "Seoul", "south sudan": "Juba", "spain": "Madrid", "sri lanka": "Sri Jayawardenepura Kotte", "sudan": "Khartoum", "suriname": "Paramaribo", "sweden": "Stockholm", "switzerland": "Bern", "syria": "Damascus", "taiwan": "Taipei", "tanzania": "Dodoma", "thailand": "Bangkok", "timor-leste": "Dili", "togo": "Lomé", "tonga": "Nukuʻalofa", "trinidad and tobago": "Port of Spain", "tunisia": "Tunis", "turkey": "Ankara", "turkmenistan": "Ashgabat", "tuvalu": "Funafuti", "uganda": "Kampala", "ukraine": "Kyiv", "united arab emirates": "Abu Dhabi", "united kingdom": "London", "united states": "Washington, D.C.", "uruguay": "Montevideo", "uzbekistan": "Tashkent", "vanuatu": "Port Vila", "vatican city": "Vatican City", "venezuela": "Caracas", "vietnam": "Hanoi", "yemen": "Sana'a", "zambia": "Lusaka", "zimbabwe": "Harare",
            // Indian States & UTs
            "uttarakhand": "Dehradun (Winter), Gairsain (Summer)", "andhra pradesh": "Amaravati", "arunachal pradesh": "Itanagar", "assam": "Dispur", "bihar": "Patna", "chhattisgarh": "Raipur", "goa": "Panaji", "gujarat": "Gandhinagar", "haryana": "Chandigarh", "himachal pradesh": "Shimla", "jharkhand": "Ranchi", "karnataka": "Bengaluru", "kerala": "Thiruvananthapuram", "madhya pradesh": "Bhopal", "maharashtra": "Mumbai", "manipur": "Imphal", "meghalaya": "Shillong", "mizoram": "Aizawl", "nagaland": "Kohima", "odisha": "Bhubaneswar", "punjab": "Chandigarh", "rajasthan": "Jaipur", "sikkim": "Gangtok", "tamil nadu": "Chennai", "telangana": "Hyderabad", "tripura": "Agartala", "uttar pradesh": "Lucknow", "west bengal": "Kolkata", "andaman and nicobar islands": "Port Blair", "chandigarh": "Chandigarh", "dadra and nagar haveli and daman and diu": "Daman", "delhi": "New Delhi", "jammu and kashmir": "Srinagar (Summer), Jammu (Winter)", "ladakh": "Leh", "lakshadweep": "Kavaratti", "puducherry": "Puducherry",
            // US States
            "alabama": "Montgomery", "alaska": "Juneau", "arizona": "Phoenix", "arkansas": "Little Rock", "california": "Sacramento", "colorado": "Denver", "connecticut": "Hartford", "delaware": "Dover", "florida": "Tallahassee", "georgia": "Atlanta", "hawaii": "Honolulu", "idaho": "Boise", "illinois": "Springfield", "indiana": "Indianapolis", "iowa": "Des Moines", "kansas": "Topeka", "kentucky": "Frankfort", "louisiana": "Baton Rouge", "maine": "Augusta", "maryland": "Annapolis", "massachusetts": "Boston", "michigan": "Lansing", "minnesota": "Saint Paul", "mississippi": "Jackson", "missouri": "Jefferson City", "montana": "Helena", "nebraska": "Lincoln", "nevada": "Carson City", "new hampshire": "Concord", "new jersey": "Trenton", "new mexico": "Santa Fe", "new york": "Albany", "north carolina": "Raleigh", "north dakota": "Bismarck", "ohio": "Columbus", "oklahoma": "Oklahoma City", "oregon": "Salem", "pennsylvania": "Harrisburg", "rhode island": "Providence", "south carolina": "Columbia", "south dakota": "Pierre", "tennessee": "Nashville", "texas": "Austin", "utah": "Salt Lake City", "vermont": "Montpelier", "virginia": "Richmond", "washington": "Olympia", "west virginia": "Charleston", "wisconsin": "Madison", "wyoming": "Cheyenne",
            // Canadian Provinces
            "ontario": "Toronto", "quebec": "Quebec City", "nova scotia": "Halifax", "new brunswick": "Fredericton", "manitoba": "Winnipeg", "british columbia": "Victoria", "prince edward island": "Charlottetown", "saskatchewan": "Regina", "alberta": "Edmonton", "newfoundland and labrador": "St. John's",
            // Historical
            "capital of india before new delhi": "Calcutta (now Kolkata) was the capital of India during the British Raj until 1911.",
            "capital of the roman empire": "Rome was the capital of the Roman Empire. Later, it was Constantinople (modern-day Istanbul)."
        },
        records: {
            "largest country": "By land area, Russia is the largest country in the world.",
            "smallest country": "Vatican City is the smallest country in the world.",
            "longest river": "The Nile River is traditionally considered the longest river in the world.",
            "highest mountain": "Mount Everest, on the border of Nepal and China, is the highest mountain peak above sea level.",
            "biggest desert": "The largest desert in the world is the Antarctic Polar Desert. The largest hot desert is the Sahara.",
            "deepest ocean": "The Pacific Ocean is the deepest ocean in the world, containing the Mariana Trench.",
            "largest ocean": "The Pacific Ocean is the largest ocean by surface area."
        },
        "national parks": "India has over 100 national parks. Some of the most famous include Jim Corbett National Park in Uttarakhand, Kaziranga National Park in Assam, known for its one-horned rhinos, and Gir Forest National Park in Gujarat, the last home of the Asiatic lion.",
        "world heritage sites": "UNESCO World Heritage Sites are places of special cultural or physical significance. Famous examples include the Taj Mahal in India, the Great Wall of China, Machu Picchu in Peru, and the Pyramids of Giza in Egypt."
    },
    history: {
        "father of nation": "Mahatma Gandhi is revered as the 'Father of the Nation' in India for his leadership in the non-violent independence movement.",
        "year of independence": "India achieved independence from British rule on August 15, 1947.",
        "first prime minister": "Jawaharlal Nehru was the first Prime Minister of independent India.",
        battles: "The Battle of Plassey (1757) was a decisive victory for the British East India Company. The First Battle of Panipat (1526) marked the beginning of the Mughal Empire in India.",
        dynasties: "India's history is rich with powerful dynasties. The Maurya Dynasty (c. 322-185 BCE) was one of the largest empires of its time. The Gupta Dynasty (c. 320-550 CE) is known as the 'Golden Age of India'. The Mughal Dynasty (1526-1857) left a significant architectural and cultural legacy.",
        monuments: "The Taj Mahal, a symbol of love, was commissioned by Mughal emperor Shah Jahan for his wife Mumtaz Mahal. He also built the Red Fort in Delhi, which was the main residence of Mughal emperors for nearly 200 years."
    },
    civics: {
        "current prime minister": "As an offline AI, I don't have access to real-time information to confirm the current Prime Minister. This information can change with elections.",
        "fundamental rights": "The Fundamental Rights in the Indian Constitution, found in Part III, guarantee civil liberties. They include the Right to Equality, Right to Freedom, Right against Exploitation, Right to Freedom of Religion, Cultural and Educational Rights, and the Right to Constitutional Remedies.",
        "lok sabha seats": "The Lok Sabha, the lower house of India's Parliament, has a maximum sanctioned strength of 552 members."
    },
    science: {
        inventions: { "bulb": "Thomas Edison is widely credited with inventing the first commercially practical incandescent light bulb.", "telephone": "Alexander Graham Bell was awarded the first U.S. patent for the invention of the telephone in 1876." },
        laws: "Newton's First Law of Motion, also known as the law of inertia, states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force.",
        elements: "The chemical symbol for Hydrogen is H, for Oxygen is O, and for Iron is Fe. The periodic table organizes all known elements.",
        "human body": "The largest organ of the human body is the skin. An adult human skeleton is composed of 206 bones.",
        "layers of atmosphere": "The Earth's atmosphere has five major layers: the Troposphere (where we live), the Stratosphere (contains the ozone layer), the Mesosphere, the Thermosphere, and the Exosphere (the outermost layer)."
    },
    mathematics: {
        tables: "The multiplication table for 7 is: 7, 14, 21, 28, 35, 42, 49, 56, 63, 70.",
        "pythagoras theorem": "The Pythagorean theorem states that in a right-angled triangle, the square of the length of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the lengths of the other two sides (a² + b² = c²)."
    },
    literature: {
        "ramayana": "The ancient Indian epic, the Ramayana, is traditionally attributed to the sage Valmiki.",
        "shakespeare": "William Shakespeare, an English playwright and poet, is widely regarded as the greatest writer in the English language. His famous works include 'Romeo and Juliet', 'Hamlet', and 'Macbeth'."
    },
    creative: {
        "joke": [
            "Why don't scientists trust atoms? Because they make up everything!",
            "I'm reading a book on anti-gravity. It's impossible to put down!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!"
        ],
        "riddle": ["I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ... A map."]
    },
    default: [
        "That's an excellent question. However, my knowledge on that specific topic is limited while I'm offline. I have a broad range of general knowledge, so please feel free to ask me about another topic!",
        "I'm currently operating in offline mode and can't access real-time information for that query. I can, however, answer many questions about history, science, geography, and more. What else is on your mind?",
        "While I can't answer that specific question offline, I can help with a wide variety of other topics. Try asking me for a definition, a historical fact, or even a creative idea!"
    ]
};

export function getOfflineResponse(query: string): string {
    const cleanedQuery = query.toLowerCase().trim().replace(/[?.,!]/g, '');

    // 1. Capital-related questions
    const capitalMatch = cleanedQuery.match(/^(?:what is the |what's the |)capital of (.+)/);
    if (capitalMatch && capitalMatch[1]) {
        const place = capitalMatch[1].trim();
        const capital = offlineKnowledgeBase.geography.capitals[place];
        if (capital) {
            return `The capital of ${place.charAt(0).toUpperCase() + place.slice(1)} is ${capital}.`;
        }
    }
    
    // Reverse capital lookup
    const countryMatch = cleanedQuery.match(/^(?:which country has|which state has|which place has) (.+) as its capital/);
    if (countryMatch && countryMatch[1]) {
        const capital = countryMatch[1].trim().toLowerCase();
        for (const place in offlineKnowledgeBase.geography.capitals) {
            if (offlineKnowledgeBase.geography.capitals[place].toLowerCase().includes(capital)) {
                return `${capital.charAt(0).toUpperCase() + capital.slice(1)} is the capital of ${place.charAt(0).toUpperCase() + place.slice(1)}.`;
            }
        }
    }

    // 2. Simple keyword matching for direct facts
    for (const category in offlineKnowledgeBase) {
        if (category === 'default') continue;
        for (const key in offlineKnowledgeBase[category]) {
            if (cleanedQuery.includes(key)) {
                const value = offlineKnowledgeBase[category][key];
                if (typeof value === 'string') return value;
                if (Array.isArray(value)) return value[Math.floor(Math.random() * value.length)];
                if (typeof value === 'object') {
                    for (const subKey in value) {
                        if (cleanedQuery.includes(subKey)) return value[subKey];
                    }
                }
            }
        }
    }
    
    // 3. General greetings
    if (cleanedQuery.startsWith("hello") || cleanedQuery.startsWith("hi") || cleanedQuery === "hey") {
        return "Hello! I'm running in offline mode. I can answer questions on a variety of general knowledge topics. How can I help you?";
    }

    // 4. Identity questions
    if (cleanedQuery.includes("who are you") || cleanedQuery.includes("what are you")) {
        return offlineKnowledgeBase.about.identity[0];
    }
    if (cleanedQuery.includes("who made you") || cleanedQuery.includes("creator")) {
        return offlineKnowledgeBase.about.creator[0];
    }

    // 5. Default fallback
    const defaultAnswers = offlineKnowledgeBase.default;
    return defaultAnswers[Math.floor(Math.random() * defaultAnswers.length)];
}
