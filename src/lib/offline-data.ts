
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
            "france": "Paris", "japan": "Tokyo", "canada": "Ottawa", "australia": "Canberra", "germany": "Berlin", "brazil": "Brasília", "china": "Beijing", "russia": "Moscow", "united states": "Washington, D.C.", "united kingdom": "London", "india": "New Delhi",
            // Indian States & UTs
            "uttarakhand": "Dehradun (Winter), Gairsain (Summer)", "andhra pradesh": "Amaravati", "arunachal pradesh": "Itanagar", "assam": "Dispur", "bihar": "Patna", "chhattisgarh": "Raipur", "goa": "Panaji", "gujarat": "Gandhinagar", "haryana": "Chandigarh", "himachal pradesh": "Shimla", "jharkhand": "Ranchi", "karnataka": "Bengaluru", "kerala": "Thiruvananthapuram", "madhya pradesh": "Bhopal", "maharashtra": "Mumbai", "manipur": "Imphal", "meghalaya": "Shillong", "mizoram": "Aizawl", "nagaland": "Kohima", "odisha": "Bhubaneswar", "punjab": "Chandigarh", "rajasthan": "Jaipur", "sikkim": "Gangtok", "tamil nadu": "Chennai", "telangana": "Hyderabad", "tripura": "Agartala", "uttar pradesh": "Lucknow", "west bengal": "Kolkata", "andaman and nicobar islands": "Port Blair", "chandigarh": "Chandigarh", "dadra and nagar haveli and daman and diu": "Daman", "delhi": "New Delhi", "jammu and kashmir": "Srinagar (Summer), Jammu (Winter)", "ladakh": "Leh", "lakshadweep": "Kavaratti", "puducherry": "Puducherry",
            // US States
            "alabama": "Montgomery", "alaska": "Juneau", "arizona": "Phoenix", "arkansas": "Little Rock", "california": "Sacramento", "colorado": "Denver", "connecticut": "Hartford", "delaware": "Dover", "florida": "Tallahassee", "georgia": "Atlanta", "hawaii": "Honolulu", "idaho": "Boise", "illinois": "Springfield", "indiana": "Indianapolis", "iowa": "Des Moines", "kansas": "Topeka", "kentucky": "Frankfort", "louisiana": "Baton Rouge", "maine": "Augusta", "maryland": "Annapolis", "massachusetts": "Boston", "michigan": "Lansing", "minnesota": "Saint Paul", "mississippi": "Jackson", "missouri": "Jefferson City", "montana": "Helena", "nebraska": "Lincoln", "nevada": "Carson City", "new hampshire": "Concord", "new jersey": "Trenton", "new mexico": "Santa Fe", "new york": "Albany", "north carolina": "Raleigh", "north dakota": "Bismarck", "ohio": "Columbus", "oklahoma": "Oklahoma City", "oregon": "Salem", "pennsylvania": "Harrisburg", "rhode island": "Providence", "south carolina": "Columbia", "south dakota": "Pierre", "tennessee": "Nashville", "texas": "Austin", "utah": "Salt Lake City", "vermont": "Montpelier", "virginia": "Richmond", "washington": "Olympia", "west virginia": "Charleston", "wisconsin": "Madison", "wyoming": "Cheyenne",
            // Canadian Provinces
            "ontario": "Toronto", "quebec": "Quebec City", "nova scotia": "Halifax", "new brunswick": "Fredericton", "manitoba": "Winnipeg", "british columbia": "Victoria", "prince edward island": "Charlottetown", "saskatchewan": "Regina", "alberta": "Edmonton", "newfoundland and labrador": "St. John's",
            // Historical
            "capital of india before new delhi": "Calcutta (now Kolkata) was the capital of India during the British Raj until 1911."
        },
        records: {
            "largest country": "Russia is the largest country by area.",
            "smallest country": "Vatican City is the smallest country by area.",
            "longest river": "The Nile River is the longest river in the world.",
            "highest mountain": "Mount Everest is the highest mountain peak in the world.",
            "biggest desert": "The Antarctic Polar Desert is the biggest desert in the world.",
            "deepest ocean": "The Pacific Ocean is the deepest ocean in the world.",
            "largest ocean": "The Pacific Ocean is the largest ocean by area."
        },
        "national parks": "India has many famous national parks, including Jim Corbett National Park, Kaziranga National Park, and Gir Forest National Park.",
        "world heritage sites": "Famous World Heritage Sites include the Taj Mahal, the Great Wall of China, and the Pyramids of Giza.",
    },
    // 3. History
    history: {
        "father of nation": "Mahatma Gandhi is known as the Father of the Nation in India.",
        "year of independence": "India gained independence in the year 1947.",
        "first prime minister": "Jawaharlal Nehru was the first Prime Minister of India.",
        battles: "The Battle of Plassey was fought in 1757, and the First Battle of Panipat was in 1526.",
        dynasties: "Famous Indian dynasties include the Maurya Dynasty, Gupta Dynasty, and Mughal Dynasty.",
        monuments: "The Taj Mahal was built by Emperor Shah Jahan. The Red Fort was also built by him."
    },
    // 4. Civics & Politics
    civics: {
        "current prime minister": "As an offline AI, I don't have real-time data on the current Prime Minister.",
        "fundamental rights": "The Fundamental Rights in the Indian Constitution include the Right to Equality, Right to Freedom, Right against Exploitation, Right to Freedom of Religion, Cultural and Educational Rights, and Right to Constitutional Remedies.",
        "lok sabha seats": "The Lok Sabha, the lower house of India's Parliament, has a maximum strength of 552 members."
    },
    // 5. Science
    science: {
        inventions: { "bulb": "Thomas Edison is credited with inventing the practical incandescent light bulb.", "telephone": "Alexander Graham Bell invented the telephone." },
        laws: "Newton's First Law of Motion states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force.",
        elements: "H is the symbol for Hydrogen, O for Oxygen, and Fe for Iron.",
        "human body": "The largest organ of the human body is the skin. An adult human has 206 bones.",
        "layers of atmosphere": "The layers of the atmosphere are the Troposphere, Stratosphere, Mesosphere, Thermosphere, and Exosphere."
    },
    // And so on for all other categories...
    mathematics: {
        "tables": "The multiplication table of 2 is: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20.",
        "pythagoras theorem": "In a right-angled triangle, the square of the hypotenuse side is equal to the sum of squares of the other two sides (a² + b² = c²)."
    },
    literature: {
        "ramayana": "The Ramayana was written by the sage Valmiki.",
        "shakespeare": "William Shakespeare wrote many famous plays, including 'Romeo and Juliet', 'Hamlet', and 'Macbeth'."
    },
    creative: {
        "joke": [
            "Why don't scientists trust atoms? Because they make up everything!",
            "I told my wife she was drawing her eyebrows too high. She looked surprised."
        ],
        "riddle": ["I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ... A map."]
    },
    // Default fallback message
    default: [
        "That's an interesting question. In offline mode, my knowledge on that specific topic is limited. I can answer a wide range of general knowledge questions, so feel free to ask me something else!",
        "I can't access detailed information on that subject while offline. For full functionality, please connect to the internet. However, I can help with many other topics.",
        "My offline capabilities don't cover that query. Please try rephrasing or ask about a more general topic like history, science, or geography."
    ]
};

export function getOfflineResponse(query: string): string {
    const cleanedQuery = query.toLowerCase().trim().replace(/[?.,!]/g, '');

    // 1. Capital-related questions (most specific)
    const capitalMatch = cleanedQuery.match(/^(?:what is the |)capital of (.+)/);
    if (capitalMatch && capitalMatch[1]) {
        const place = capitalMatch[1].trim();
        const capital = offlineKnowledgeBase.geography.capitals[place];
        if (capital) {
            return `The capital of ${place.charAt(0).toUpperCase() + place.slice(1)} is ${capital}.`;
        }
    }
    const countryMatch = cleanedQuery.match(/^(?:which country has|which state has) (.+) as its capital/);
    if (countryMatch && countryMatch[1]) {
        const capital = countryMatch[1].trim();
        for (const place in offlineKnowledgeBase.geography.capitals) {
            if (offlineKnowledgeBase.geography.capitals[place].toLowerCase() === capital) {
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
                if (typeof value === 'object') { // Handle nested objects like inventions
                    for (const subKey in value) {
                        if (cleanedQuery.includes(subKey)) return value[subKey];
                    }
                }
            }
        }
    }
    
    // 3. General greetings
    if (cleanedQuery.startsWith("hello") || cleanedQuery.startsWith("hi")) {
        return "Hello! I'm running in offline mode. I can answer questions on a variety of general knowledge topics. How can I help you?";
    }

    // 4. Default fallback
    const defaultAnswers = offlineKnowledgeBase.default;
    return defaultAnswers[Math.floor(Math.random() * defaultAnswers.length)];
}

    