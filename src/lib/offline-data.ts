/**
 * This file contains the offline knowledge base and logic for the AI assistant.
 * When the app is offline, the ChatInterface uses getOfflineResponse to provide answers.
 */

// A vast, structured knowledge base for offline use.
export const offlineKnowledgeBase: Record<string, any> = {
    geography: {
        capitals: {
            "afghanistan": "Kabul", "albania": "Tirana", "algeria": "Algiers", "andorra": "Andorra la Vella", "angola": "Luanda",
            "antigua and barbuda": "St. John's", "argentina": "Buenos Aires", "armenia": "Yerevan", "australia": "Canberra", "austria": "Vienna",
            "azerbaijan": "Baku", "bahamas": "Nassau", "bahrain": "Manama", "bangladesh": "Dhaka", "barbados": "Bridgetown",
            "belarus": "Minsk", "belgium": "Brussels", "belize": "Belmopan", "benin": "Porto-Novo", "bhutan": "Thimphu", "bolivia": "Sucre",
            "bosnia and herzegovina": "Sarajevo", "botswana": "Gaborone", "brazil": "Brasília", "brunei": "Bandar Seri Begawan", "bulgaria": "Sofia",
            "burkina faso": "Ouagadougou", "burundi": "Gitega", "cabo verde": "Praia", "cambodia": "Phnom Penh", "cameroon": "Yaoundé",
            "canada": "Ottawa", "central african republic": "Bangui", "chad": "N'Djamena", "chile": "Santiago", "china": "Beijing", "colombia": "Bogotá",
            "comoros": "Moroni", "democratic republic of the congo": "Kinshasa", "republic of the congo": "Brazzaville", "costa rica": "San José", "croatia": "Zagreb",
            "cuba": "Havana", "cyprus": "Nicosia", "czech republic": "Prague", "denmark": "Copenhagen", "djibouti": "Djibouti", "dominica": "Roseau",
            "dominican republic": "Santo Domingo", "ecuador": "Quito", "egypt": "Cairo", "el salvador": "San Salvador", "equatorial guinea": "Malabo",
            "eritrea": "Asmara", "estonia": "Tallinn", "eswatini": "Mbabane", "ethiopia": "Addis Ababa", "fiji": "Suva", "finland": "Helsinki",
            "france": "Paris", "gabon": "Libreville", "gambia": "Banjul", "georgia": "Tbilisi", "germany": "Berlin", "ghana": "Accra", "greece": "Athens",
            "grenada": "St. George's", "guatemala": "Guatemala City", "guinea": "Conakry", "guinea-bissau": "Bissau", "guyana": "Georgetown",
            "haiti": "Port-au-Prince", "honduras": "Tegucigalpa", "hungary": "Budapest", "iceland": "Reykjavik", "india": "New Delhi", "indonesia": "Jakarta",
            "iran": "Tehran", "iraq": "Baghdad", "ireland": "Dublin", "israel": "Jerusalem", "italy": "Rome", "jamaica": "Kingston", "japan": "Tokyo",
            "jordan": "Amman", "kazakhstan": "Astana", "kenya": "Nairobi", "kiribati": "Tarawa", "kuwait": "Kuwait City", "kyrgyzstan": "Bishkek",
            "laos": "Vientiane", "latvia": "Riga", "lebanon": "Beirut", "lesotho": "Maseru", "liberia": "Monrovia", "libya": "Tripoli",
            "liechtenstein": "Vaduz", "lithuania": "Vilnius", "luxembourg": "Luxembourg", "madagascar": "Antananarivo", "malawi": "Lilongwe",
            "malaysia": "Kuala Lumpur", "maldives": "Malé", "mali": "Bamako", "malta": "Valletta", "marshall islands": "Majuro", "mauritania": "Nouakchott",
            "mauritius": "Port Louis", "mexico": "Mexico City", "micronesia": "Palikir", "moldova": "Chisinau", "monaco": "Monaco", "mongolia": "Ulaanbaatar",
            "montenegro": "Podgorica", "morocco": "Rabat", "mozambique": "Maputo", "myanmar": "Naypyidaw", "namibia": "Windhoek", "nauru": "Yaren",
            "nepal": "Kathmandu", "netherlands": "Amsterdam", "new zealand": "Wellington", "nicaragua": "Managua", "niger": "Niamey", "nigeria": "Abuja",
            "north korea": "Pyongyang", "north macedonia": "Skopje", "norway": "Oslo", "oman": "Muscat", "pakistan": "Islamabad", "palau": "Ngerulmud",
            "panama": "Panama City", "papua new guinea": "Port Moresby", "paraguay": "Asunción", "peru": "Lima", "philippines": "Manila", "poland": "Warsaw",
            "portugal": "Lisbon", "qatar": "Doha", "romania": "Bucharest", "russia": "Moscow", "rwanda": "Kigali", "saint kitts and nevis": "Basseterre",
            "saint lucia": "Castries", "saint vincent and the grenadines": "Kingstown", "samoa": "Apia", "san marino": "San Marino",
            "sao tome and principe": "São Tomé", "saudi arabia": "Riyadh", "senegal": "Dakar", "serbia": "Belgrade", "seychelles": "Victoria",
            "sierra leone": "Freetown", "singapore": "Singapore", "slovakia": "Bratislava", "slovenia": "Ljubljana", "solomon islands": "Honiara",
            "somalia": "Mogadishu", "south africa": "Pretoria", "south korea": "Seoul", "south sudan": "Juba", "spain": "Madrid",
            "sri lanka": "Sri Jayawardenepura Kotte", "sudan": "Khartoum", "suriname": "Paramaribo", "sweden": "Stockholm", "switzerland": "Bern",
            "syria": "Damascus", "taiwan": "Taipei", "tanzania": "Dodoma", "thailand": "Bangkok", "timor-leste": "Dili", "togo": "Lomé",
            "tonga": "Nukuʻalofa", "trinidad and tobago": "Port of Spain", "tunisia": "Tunis", "turkey": "Ankara", "turkmenistan": "Ashgabat",
            "tuvalu": "Funafuti", "uganda": "Kampala", "ukraine": "Kyiv", "united arab emirates": "Abu Dhabi", "united kingdom": "London",
            "united states of america": "Washington, D.C.", "uruguay": "Montevideo", "uzbekistan": "Tashkent", "vanuatu": "Port Vila", "vatican city": "Vatican City",
            "venezuela": "Caracas", "vietnam": "Hanoi", "yemen": "Sana'a", "zambia": "Lusaka", "zimbabwe": "Harare",
            "andhra pradesh": "Amaravati", "arunachal pradesh": "Itanagar", "assam": "Dispur", "bihar": "Patna", "chhattisgarh": "Raipur",
            "goa": "Panaji", "gujarat": "Gandhinagar", "haryana": "Chandigarh", "himachal pradesh": "Shimla", "jharkhand": "Ranchi",
            "karnataka": "Bengaluru", "kerala": "Thiruvananthapuram", "madhya pradesh": "Bhopal", "maharashtra": "Mumbai", "manipur": "Imphal",
            "meghalaya": "Shillong", "mizoram": "Aizawl", "nagaland": "Kohima", "odisha": "Bhubaneswar", "punjab": "Chandigarh",
            "rajasthan": "Jaipur", "sikkim": "Gangtok", "tamil nadu": "Chennai", "telangana": "Hyderabad", "tripura": "Agartala",
            "uttar pradesh": "Lucknow", "uttarakhand": "Dehradun (Winter), Gairsain (Summer)", "west bengal": "Kolkata", "andaman and nicobar islands": "Port Blair",
            "chandigarh": "Chandigarh", "dadra and nagar haveli and daman and diu": "Daman", "delhi": "New Delhi", "jammu and kashmir": "Srinagar (Summer), Jammu (Winter)",
            "ladakh": "Leh", "lakshadweep": "Kavaratti", "puducherry": "Puducherry",
            "alabama": "Montgomery", "alaska": "Juneau", "arizona": "Phoenix", "arkansas": "Little Rock", "california": "Sacramento",
            "colorado": "Denver", "connecticut": "Hartford", "delaware": "Dover", "florida": "Tallahassee", "georgia": "Atlanta",
            "hawaii": "Honolulu", "idaho": "Boise", "illinois": "Springfield", "indiana": "Indianapolis", "iowa": "Des Moines",
            "kansas": "Topeka", "kentucky": "Frankfort", "louisiana": "Baton Rouge", "maine": "Augusta", "maryland": "Annapolis",
            "massachusetts": "Boston", "michigan": "Lansing", "minnesota": "Saint Paul", "mississippi": "Jackson", "missouri": "Jefferson City",
            "montana": "Helena", "nebraska": "Lincoln", "nevada": "Carson City", "new hampshire": "Concord", "new jersey": "Trenton",
            "new mexico": "Santa Fe", "new york": "Albany", "north carolina": "Raleigh", "north dakota": "Bismarck", "ohio": "Columbus",
            "oklahoma": "Oklahoma City", "oregon": "Salem", "pennsylvania": "Harrisburg", "rhode island": "Providence", "south carolina": "Columbia",
            "south dakota": "Pierre", "tennessee": "Nashville", "texas": "Austin", "utah": "Salt Lake City", "vermont": "Montpelier",
            "virginia": "Richmond", "washington": "Olympia", "west virginia": "Charleston", "wisconsin": "Madison", "wyoming": "Cheyenne",
            "ontario": "Toronto", "quebec": "Quebec City", "nova scotia": "Halifax", "new brunswick": "Fredericton", "manitoba": "Winnipeg",
            "british columbia": "Victoria", "prince edward island": "Charlottetown", "saskatchewan": "Regina", "alberta": "Edmonton",
            "newfoundland and labrador": "St. John's",
            "bavaria": "Munich"
        },
        currencies: {
            "india": "Indian Rupee (INR)", "united states": "United States Dollar (USD)", "united kingdom": "Pound Sterling (GBP)", "japan": "Japanese Yen (JPY)", "european union": "Euro (EUR)"
        },
        languages: {
            "spain": "Spanish", "france": "French", "china": "Mandarin", "india": "Hindi and English are official languages, with many other regional languages."
        },
        records: {
            "largest country": "By land area, Russia is the largest country in the world.",
            "smallest country": "Vatican City is the smallest country in the world.",
            "most populous country": "India is the most populous country in the world, followed by China.",
            "longest river": "The Nile River in Africa is the longest river in the world.",
            "highest mountain": "Mount Everest, in the Himalayas, is the highest mountain peak above sea level.",
            "largest desert": "The Antarctic Polar Desert is the world's largest desert. The largest hot desert is the Sahara.",
            "largest ocean": "The Pacific Ocean is the largest and deepest of the world's five oceans.",
        },
        national_symbols: {
            "national animal of india": "The Bengal Tiger.",
            "national bird of india": "The Indian Peacock.",
            "national flower of india": "The Lotus.",
            "national tree of india": "The Banyan Tree.",
            "national fruit of india": "The Mango."
        },
        misc: {
            "seven wonders": "The New Seven Wonders of the World include the Taj Mahal, Colosseum, Christ the Redeemer, Machu Picchu, Chichen Itza, Petra, and the Great Wall of China.",
            "national parks": "India has over 100 national parks, including Jim Corbett, Kaziranga, and Gir.",
            "world heritage sites": "UNESCO World Heritage Sites are places of special cultural or physical significance, like the Taj Mahal, the Great Wall of China, and Machu Picchu."
        }
    },
    history: {
        india: {
            "father of the nation": "Mahatma Gandhi is revered as the 'Father of the Nation' in India.",
            "year of independence": "India gained independence from British rule on August 15, 1947.",
            "first prime minister": "Jawaharlal Nehru was the first Prime Minister of independent India.",
            "first president": "Dr. Rajendra Prasad was the first President of independent India.",
            "important battles": "Key battles include the Battle of Plassey (1757), which established British supremacy, and the Battles of Panipat which shaped the Mughal empire.",
            "famous dynasties": "Major dynasties include the Maurya, Gupta, and Mughal Empires.",
            "monument builders": "The Taj Mahal was built by Mughal emperor Shah Jahan. The Red Fort was also built by him."
        },
        world: {
            "world war 1": "World War I lasted from 1914 to 1918.",
            "world war 2": "World War II took place from 1939 to 1945.",
            "french revolution": "The French Revolution was a period of major social upheaval in France that began in 1789.",
            "american revolution": "The American Revolution was the war fought from 1775 to 1783 through which 13 of Great Britain's North American colonies threw off British rule to establish the United States of America."
        }
    },
    science: {
        physics: {
            "newton's laws": "Newton's First Law (Inertia), Second Law (F=ma), and Third Law (Action-Reaction) are fundamental principles of classical mechanics.",
            "theory of relativity": "Albert Einstein's theory of relativity includes Special Relativity (E=mc²) and General Relativity (gravity as a curvature of spacetime)."
        },
        chemistry: {
            "periodic table": "The periodic table is a tabular arrangement of the chemical elements, ordered by their atomic number.",
            "ph scale": "The pH scale measures how acidic or basic a substance is. It ranges from 0 to 14. A pH of 7 is neutral, less than 7 is acidic, and greater than 7 is basic."
        },
        biology: {
            "photosynthesis": "Photosynthesis is the process used by plants, algae, and some bacteria to convert light energy into chemical energy.",
            "dna": "DNA, or deoxyribonucleic acid, is the molecule that carries the genetic instructions for the development, functioning, growth, and reproduction of all known organisms.",
            "human body": "The human body has 206 bones. The largest organ is the skin. The brain is the control center."
        },
        space: {
            "planets": "The eight planets in our solar system are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
            "first man on moon": "Neil Armstrong was the first human to walk on the moon in 1969 during the Apollo 11 mission.",
        }
    },
    technology: {
        "what is ai": "Artificial Intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence.",
        "what is programming": "Programming is the process of creating a set of instructions that tell a computer how to perform a task.",
        "python": "Python is a high-level, general-purpose programming language known for its simple, readable syntax.",
        "javascript": "JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS."
    },
    creative: {
        "tell me a joke": [
            "Why don't scientists trust atoms? Because they make up everything!",
            "I'm reading a book on anti-gravity. It's impossible to put down!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!"
        ],
        "tell me a riddle": [
            "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ... A map.",
            "What has an eye, but cannot see? ... A needle.",
            "What has to be broken before you can use it? ... An egg."
        ]
    },
    default: [
        "That's an excellent question. However, my knowledge on that specific topic is limited in offline mode. I can answer many questions about history, science, geography, and more.",
        "I'm currently operating offline and can't access real-time information for that query. Please feel free to ask me a different question about general knowledge topics.",
        "While I can't answer that specific question offline, I can help with a wide variety of other topics. Try asking me for a definition, a historical fact, or even a joke!"
    ]
};

export function getOfflineResponse(query: string): string {
    const cleanedQuery = query.toLowerCase().trim().replace(/[?.,!]/g, '');

    const capitalMatch = cleanedQuery.match(/^(?:what is the |what's the |)capital of (.+)/);
    if (capitalMatch && capitalMatch[1]) {
        const place = capitalMatch[1].trim();
        if (offlineKnowledgeBase.geography.capitals[place]) {
            return `The capital of ${place.charAt(0).toUpperCase() + place.slice(1)} is ${offlineKnowledgeBase.geography.capitals[place]}.`;
        }
    }

    const reverseCapitalMatch = cleanedQuery.match(/^(?:which country has|which state has) (.+) as its capital/);
    if (reverseCapitalMatch && reverseCapitalMatch[1]) {
        const capital = reverseCapitalMatch[1].trim();
        for (const place in offlineKnowledgeBase.geography.capitals) {
            if (offlineKnowledgeBase.geography.capitals[place].toLowerCase().includes(capital)) {
                return `${capital.charAt(0).toUpperCase() + capital.slice(1)} is the capital of ${place.charAt(0).toUpperCase() + place.slice(1)}.`;
            }
        }
    }

    const findBestMatch = (branch: any): string | null => {
        if (typeof branch !== 'object' || branch === null) return null;
        for (const key in branch) {
            if (cleanedQuery.includes(key.toLowerCase())) {
                const value = branch[key];
                if (typeof value === 'string') return value;
                if (Array.isArray(value)) return value[Math.floor(Math.random() * value.length)];
            }
            if (typeof branch[key] === 'object') {
                const nestedMatch = findBestMatch(branch[key]);
                if (nestedMatch) return nestedMatch;
            }
        }
        return null;
    };

    const match = findBestMatch(offlineKnowledgeBase);
    if (match) return match;
    
    if (cleanedQuery.startsWith("hello") || cleanedQuery.startsWith("hi") || cleanedQuery === "hey") {
        return "Hello! I'm running in offline mode. I can answer questions on a variety of general knowledge topics. How can I help you?";
    }
    
    if (cleanedQuery.includes("who are you") || cleanedQuery.includes("what are you")) {
        return "I am the Ayush Unimax AI, a universal AI assistant created by Ayush Sharma of Ayush Webtor Studio.";
    }

    if (cleanedQuery.includes("who made you") || cleanedQuery.includes("creator")) {
        return "I was created by Ayush Sharma at Ayush Webtor Studio.";
    }

    const defaultAnswers = offlineKnowledgeBase.default;
    return defaultAnswers[Math.floor(Math.random() * defaultAnswers.length)];
}
