
/**
 * This file contains the offline knowledge base and logic for the AI assistant.
 * When the app is offline, the ChatInterface uses getOfflineResponse to provide answers.
 */

// A vast, structured knowledge base for offline use, organized by topic for efficient searching.
export const offlineKnowledgeBase: Record<string, any> = {
    // 1. Geography
    geography: {
        capitals: {
            // World Capitals
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
            "united states of america": "Washington, D.C.", "usa": "Washington, D.C.", "uruguay": "Montevideo", "uzbekistan": "Tashkent", "vanuatu": "Port Vila", "vatican city": "Vatican City",
            "venezuela": "Caracas", "vietnam": "Hanoi", "yemen": "Sana'a", "zambia": "Lusaka", "zimbabwe": "Harare",
            // Indian States & UTs
            "andhra pradesh": "Amaravati", "arunachal pradesh": "Itanagar", "assam": "Dispur", "bihar": "Patna", "chhattisgarh": "Raipur",
            "goa": "Panaji", "gujarat": "Gandhinagar", "haryana": "Chandigarh", "himachal pradesh": "Shimla", "jharkhand": "Ranchi",
            "karnataka": "Bengaluru", "kerala": "Thiruvananthapuram", "madhya pradesh": "Bhopal", "maharashtra": "Mumbai", "manipur": "Imphal",
            "meghalaya": "Shillong", "mizoram": "Aizawl", "nagaland": "Kohima", "odisha": "Bhubaneswar", "punjab": "Chandigarh",
            "rajasthan": "Jaipur", "sikkim": "Gangtok", "tamil nadu": "Chennai", "telangana": "Hyderabad", "tripura": "Agartala",
            "uttar pradesh": "Lucknow", "uttarakhand": "Dehradun (Winter), Gairsain (Summer)", "west bengal": "Kolkata", "andaman and nicobar islands": "Port Blair",
            "chandigarh": "Chandigarh", "dadra and nagar haveli and daman and diu": "Daman", "delhi": "New Delhi", "jammu and kashmir": "Srinagar (Summer), Jammu (Winter)",
            "ladakh": "Leh", "lakshadweep": "Kavaratti", "puducherry": "Puducherry",
            // US States
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
            // Canadian Provinces
            "ontario": "Toronto", "quebec": "Quebec City", "nova scotia": "Halifax", "new brunswick": "Fredericton", "manitoba": "Winnipeg",
            "british columbia": "Victoria", "prince edward island": "Charlottetown", "saskatchewan": "Regina", "alberta": "Edmonton",
            "newfoundland and labrador": "St. John's",
            // Other major state/province capitals
            "bavaria": "Munich"
        },
        records: {
            "largest country": "By land area, Russia is the largest country in the world.",
            "smallest country": "Vatican City is the smallest country in the world.",
            "most populous country": "India is the most populous country in the world, followed by China.",
            "longest river": "The Nile River in Africa is the longest river in the world, closely followed by the Amazon River in South America.",
            "highest mountain": "Mount Everest, in the Himalayas, is the highest mountain peak above sea level.",
            "biggest desert": "The Antarctic Polar Desert is the world's largest desert. The largest hot desert is the Sahara.",
            "largest desert": "The Antarctic Polar Desert is the world's largest desert. The largest hot desert is the Sahara.",
            "largest ocean": "The Pacific Ocean is the largest and deepest of the world's five oceans.",
        },
        misc: {
            "seven wonders": "The New Seven Wonders of the World include the Taj Mahal, Colosseum, Christ the Redeemer, Machu Picchu, Chichen Itza, Petra, and the Great Wall of China.",
            "national parks in india": "India has over 100 national parks. Famous ones include Jim Corbett National Park, Kaziranga National Park, and Gir National Park.",
        }
    },
    // 2. History
    history: {
        "independence of india": "India gained independence from British rule on August 15, 1947.",
        "first prime minister of india": "Jawaharlal Nehru was the first Prime Minister of independent India.",
        "first president of india": "Dr. Rajendra Prasad was the first President of independent India.",
        "father of the nation of india": "Mahatma Gandhi is revered as the 'Father of the Nation' in India for his leadership in the non-violent independence movement.",
        "world war 1": "World War I, also known as the Great War, lasted from 1914 to 1918.",
        "world war 2": "World War II was a global conflict that lasted from 1939 to 1945.",
        "french revolution": "The French Revolution was a period of major social and political upheaval in France that began in 1789, leading to the end of the monarchy and the establishment of a republic.",
        "who built the taj mahal": "The Taj Mahal was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal."
    },
    // 3. Science & Math
    science: {
        "newton's laws of motion": "Newton's laws of motion are three basic laws of classical mechanics. 1st Law (Inertia): An object remains at rest or in uniform motion unless acted upon by a force. 2nd Law: The acceleration of an object is directly proportional to the net force and inversely proportional to its mass (F=ma). 3rd Law: For every action, there is an equal and opposite reaction.",
        "theory of relativity": "Albert Einstein's theory of relativity has two parts. Special relativity deals with the relationship between space and time for objects moving at constant speeds. General relativity is a theory of gravitation, describing it as a property of the curvature of spacetime.",
        "what is photosynthesis": "Photosynthesis is the process used by plants, algae, and certain bacteria to convert light energy into chemical energy, through a process that converts carbon dioxide and water into glucose (sugar) and oxygen.",
        "what is dna": "DNA, or deoxyribonucleic acid, is the hereditary material in humans and almost all other organisms. It contains the genetic instructions for the development, functioning, growth, and reproduction of all known living things.",
        "planets in our solar system": "The eight planets in our solar system are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.",
        "first man on the moon": "Neil Armstrong, an American astronaut, was the first human to walk on the moon on July 20, 1969, during the Apollo 11 mission.",
        "pythagorean theorem": "The Pythagorean theorem states that in a right-angled triangle, the square of the length of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the lengths of the other two sides. The formula is a² + b² = c²."
    },
    // 4. Technology & AI
    technology: {
        "what is ai": "Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.",
        "what is programming": "Programming is the process of creating a set of instructions that tell a computer how to perform a task. These instructions are written in a programming language, such as Python, Java, or C++.",
        "what is python": "Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. It's widely used in web development, data science, artificial intelligence, and more.",
        "what is javascript": "JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. It enables interactive web pages and is an essential part of web applications."
    },
    // 5. Creative & Fun
    creative: {
        "tell me a joke": [
            "Why don't scientists trust atoms? Because they make up everything!",
            "I'm reading a book on anti-gravity. It's impossible to put down!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
            "Why don't skeletons fight each other? They don't have the guts.",
            "What do you call a fake noodle? An Impasta!"
        ],
        "tell me a riddle": [
            { question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", answer: "A map." },
            { question: "What has an eye, but cannot see?", answer: "A needle." },
            { question: "What has to be broken before you can use it?", answer: "An egg." },
            { question: "I’m tall when I’m young, and I’m short when I’m old. What am I?", answer: "A candle." }
        ],
        "story prompt": [
            "Write a short story about a librarian who discovers a secret, hidden chapter in every book they touch.",
            "Create a story about a world where people's shadows have a life of their own.",
            "Tell a tale of a chef whose food allows people to relive their favorite memories."
        ]
    },
    // 6. General & Default Responses
    general: {
        "who are you": "I am the Ayush Unimax AI, a universal AI assistant created by Ayush Sharma of Ayush Webtor Studio. I am designed to be helpful across a wide range of tasks, even when offline.",
        "who made you": "I was created by Ayush Sharma at Ayush Webtor Studio.",
        "what can you do": "I can answer questions on many topics like history, geography, and science. I can also help with creative tasks, solve math problems, write text, and much more. My capabilities are organized into different 'modes' in this application.",
        "hello": "Hello! I'm Ayush Unimax AI. How can I assist you today?",
        "hi": "Hello there! How can I help you?",
        "hey": "Hey! What can I do for you?",
        "thank you": "You're welcome! Is there anything else I can help you with?",
        "thanks": "You're welcome!",
        "how are you": "As an AI, I don't have feelings, but I'm operating at full capacity and ready to help. What's on your mind?"
    },
    default: [
        "That's an excellent question. However, my knowledge on that specific topic is limited in offline mode. I can answer many questions about history, science, geography, and more.",
        "I'm currently operating offline and can't access real-time information for that query. Please feel free to ask me a different question about general knowledge topics.",
        "While I can't answer that specific question offline, I can help with a wide variety of other topics. Try asking me for a definition, a historical fact, or even a joke!"
    ]
};

/**
 * Searches the offline knowledge base for an answer to the user's query.
 * @param query The user's input string.
 * @returns A string containing the best found answer, or a default response.
 */
export function getOfflineResponse(query: string): string {
    const cleanedQuery = query.toLowerCase().trim().replace(/[?.,!]/g, '');

    // 1. Direct command/greeting check
    if (offlineKnowledgeBase.general[cleanedQuery]) {
        return offlineKnowledgeBase.general[cleanedQuery];
    }
    
    // 2. Specialized question patterns (e.g., "capital of X")
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
            if (offlineKnowledgeBase.geography.capitals[place].toLowerCase() === capital) {
                return `${capital.charAt(0).toUpperCase() + capital.slice(1)} is the capital of ${place.charAt(0).toUpperCase() + place.slice(1)}.`;
            }
        }
    }

    // 3. Creative requests
    if (cleanedQuery.includes("joke")) {
        const jokes = offlineKnowledgeBase.creative.joke;
        return jokes[Math.floor(Math.random() * jokes.length)];
    }
    if (cleanedQuery.includes("riddle")) {
        const riddles = offlineKnowledgeBase.creative.riddle;
        const chosenRiddle = riddles[Math.floor(Math.random() * riddles.length)];
        return `${chosenRiddle.question}\n\nAnswer: ${chosenRiddle.answer}`;
    }

    // 4. General keyword-based search across the entire knowledge base
    const findBestMatch = (branch: any, queryWords: string[]): { match: string | null, score: number } => {
        let bestMatch = { match: null as string | null, score: 0 };
        
        if (typeof branch !== 'object' || branch === null) return bestMatch;

        for (const key in branch) {
            const keyWords = key.toLowerCase().split(" ");
            let currentScore = 0;
            queryWords.forEach(word => {
                if (keyWords.includes(word)) {
                    currentScore++;
                }
            });

            if (currentScore > bestMatch.score) {
                 const value = branch[key];
                 if (typeof value === 'string') {
                    bestMatch = { match: value, score: currentScore };
                 }
            }
            
            // Recurse into nested objects
            if (typeof branch[key] === 'object') {
                const nestedResult = findBestMatch(branch[key], queryWords);
                if (nestedResult.score > bestMatch.score) {
                    bestMatch = nestedResult;
                }
            }
        }
        return bestMatch;
    };

    const queryWords = cleanedQuery.split(" ");
    const matchResult = findBestMatch(offlineKnowledgeBase, queryWords);
    if (matchResult.match && matchResult.score > 0) {
        return matchResult.match;
    }

    // 5. Default fallback response
    const defaultAnswers = offlineKnowledgeBase.default;
    return defaultAnswers[Math.floor(Math.random() * defaultAnswers.length)];
}
