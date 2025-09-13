
/**
 * This file contains the offline knowledge base and logic for the AI assistant.
 * When the app is offline, the ChatInterface uses getOfflineResponse to provide answers.
 * Many TextGenerator modes will also use this to provide template-based offline responses.
 */

// A vast, structured knowledge base for offline use, organized by topic for efficient searching.
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
            "united states of america": "Washington, D.C.", "usa": "Washington, D.C.", "uruguay": "Montevideo", "uzbekistan": "Tashkent", "vanuatu": "Port Vila", "vatican city": "Vatican City",
            "venezuela": "Caracas", "vietnam": "Hanoi", "yemen": "Sana'a", "zambia": "Lusaka", "zimbabwe": "Harare",
        },
        records: {
            "largest country": "By land area, Russia is the largest country in the world.",
            "smallest country": "Vatican City is the smallest country in the world.",
            "most populous country": "India is the most populous country in the world, followed by China.",
            "longest river": "The Nile River in Africa is the longest river in the world, closely followed by the Amazon River in South America.",
            "highest mountain": "Mount Everest, in the Himalayas, is the highest mountain peak above sea level.",
        }
    },
    history: {
        "independence of india": "India gained independence from British rule on August 15, 1947.",
        "world war 1": "World War I, also known as the Great War, lasted from 1914 to 1918.",
        "world war 2": "World War II was a global conflict that lasted from 1939 to 1945.",
        "french revolution": "The French Revolution was a period of major social and political upheaval in France that began in 1789.",
        "who built the taj mahal": "The Taj Mahal was commissioned in 1632 by the Mughal emperor Shah Jahan."
    },
    science: {
        "newton's laws": "Newton's laws of motion are three basic laws of classical mechanics that describe the relationship between the motion of an object and the forces acting on it.",
        "theory of relativity": "Albert Einstein's theory of relativity describes the laws of physics at high speeds and in strong gravitational fields.",
        "photosynthesis": "Photosynthesis is the process used by plants to convert light energy into chemical energy.",
        "what is dna": "DNA is the molecule that carries genetic instructions for the development, functioning, growth, and reproduction of all known organisms.",
    },
    creative: {
        joke: [
            "Why don't scientists trust atoms? Because they make up everything!",
            "I'm reading a book on anti-gravity. It's impossible to put down!",
            "Why did the scarecrow win an award? Because he was outstanding in his field!",
        ],
        riddle: [
            { question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", answer: "A map." },
            { question: "What has to be broken before you can use it?", answer: "An egg." },
        ],
        story_prompt: [
            "Write a short story about a librarian who discovers a secret, hidden chapter in every book they touch.",
            "Create a story about a world where people's shadows have a life of their own.",
        ]
    },
    general: {
        "who are you": "I am the Ayush Unimax AI, a universal AI assistant created by Ayush Sharma of Ayush Webtor Studio. I am designed to be helpful across a wide range of tasks, even when offline.",
        "who made you": "I was created by Ayush Sharma at Ayush Webtor Studio.",
        "what can you do": "I can answer questions on many topics like history, geography, and science. I can also help with creative tasks, solve math problems, write text, and much more.",
        "hello": "Hello! I'm Ayush Unimax AI. How can I assist you today?",
        "hi": "Hello there! How can I help you?",
        "thank you": "You're welcome! Is there anything else I can help you with?",
        "how are you": "As an AI, I don't have feelings, but I'm operating at full capacity and ready to help. What's on your mind?"
    },
    // Template responses for various TextGenerator modes
    templates: {
        yoga_fitness: "Here is a simple offline tip for Yoga & Fitness: To improve your posture, practice the Mountain Pose (Tadasana). Stand tall with your feet together, ground down through your feet, engage your leg muscles, and lengthen your spine. Keep your shoulders relaxed and your arms by your sides. Hold for 5 deep breaths.",
        sports_skills_trainer: "Here is an offline tip for Sports Skills: To improve your basketball dribbling, practice dribbling with your head up to see the court. Use your fingertips, not your palm, for better control. Try dribbling with your weaker hand for 10 minutes every day to become more ambidextrous.",
        recipe_creator: "Here is a simple offline recipe: **Classic Tomato and Basil Bruschetta**. \n\nIngredients: 4 ripe tomatoes, 1/2 cup fresh basil, 1 garlic clove, 1 tbsp olive oil, salt, pepper, and a baguette. \n\nInstructions: 1. Dice tomatoes and chop basil. 2. Mince garlic. 3. Mix all ingredients in a bowl. 4. Slice and toast the baguette. 5. Top toasted bread with the tomato mixture. Enjoy!",
        story_generator: "Once upon a time, in a land filled with whispering forests and sparkling rivers, a young adventurer named Elara found a mysterious map. It promised a treasure hidden beyond the Crystal Mountains, a treasure with the power to heal the land. With her loyal fox companion, Finn, she set off on a journey that would test her courage and change her life forever.",
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
 * @param modeId The ID of the mode making the request, to provide mode-specific template answers.
 * @returns A string containing the best found answer, or a default response.
 */
export function getOfflineResponse(query: string, modeId?: string): string {
    const cleanedQuery = query.toLowerCase().trim().replace(/[?.,!]/g, '');

    // 1. Check for a mode-specific template first
    if (modeId && offlineKnowledgeBase.templates[modeId]) {
        return offlineKnowledgeBase.templates[modeId];
    }
    
    // 2. Direct command/greeting check
    if (offlineKnowledgeBase.general[cleanedQuery]) {
        return offlineKnowledgeBase.general[cleanedQuery];
    }
    
    // 3. Specialized question patterns
    const capitalMatch = cleanedQuery.match(/^(?:what is the |what's the |)capital of (.+)/);
    if (capitalMatch && capitalMatch[1]) {
        const place = capitalMatch[1].trim();
        if (offlineKnowledgeBase.geography.capitals[place]) {
            return `The capital of ${place.charAt(0).toUpperCase() + place.slice(1)} is ${offlineKnowledgeBase.geography.capitals[place]}.`;
        }
    }

    // 4. Creative requests
    if (cleanedQuery.includes("joke")) {
        const jokes = offlineKnowledgeBase.creative.joke;
        return jokes[Math.floor(Math.random() * jokes.length)];
    }
    if (cleanedQuery.includes("riddle")) {
        const riddles = offlineKnowledgeBase.creative.riddle;
        const chosenRiddle = riddles[Math.floor(Math.random() * riddles.length)];
        return `${chosenRiddle.question}\n\nAnswer: ${chosenRiddle.answer}`;
    }

    // 5. General keyword-based search
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

    // 6. Default fallback
    const defaultAnswers = offlineKnowledgeBase.default;
    return defaultAnswers[Math.floor(Math.random() * defaultAnswers.length)];
}
