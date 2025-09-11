
export const offlineResponses: { [key: string]: string[] } = {
    // 1. Educational Questions
    "math": [
        "Math is the study of numbers, quantity, space, and change. What specific math topic are you interested in, like algebra or geometry?",
        "To solve for x in 2x + 5 = 15, you first subtract 5 from both sides to get 2x = 10, then divide by 2 to find x = 5.",
    ],
    "science": [
        "Science is the systematic study of the physical and natural world through observation and experimentation. Key branches include biology, chemistry, and physics.",
        "Newton's First Law of Motion states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force.",
        "The water cycle consists of evaporation, condensation, and precipitation."
    ],
    "history": [
        "History is the study of past events, particularly in human affairs. The Roman Empire, for example, lasted for over 1000 years and greatly influenced Western civilization.",
        "The first World War lasted from 1914 to 1918."
    ],
    "geography": [
        "Geography is the study of the physical features of the Earth and its atmosphere, and of human activity as it affects and is affected by these. The capital of France is Paris.",
    ],
    "civics": [
        "Civics is the study of the rights and duties of citizenship. It often includes learning about how government works."
    ],
    "economics": [
        "Economics is the social science that studies the production, distribution, and consumption of goods and services. A key concept is supply and demand."
    ],
    "democracy": [
        "Democracy is a system of government where the supreme power is vested in the people and exercised by them directly or indirectly through a system of representation usually involving periodically held free elections.",
    ],
    "mass vs weight": [
        "Mass is the amount of matter in an object, which is constant everywhere. Weight is the force of gravity on that object, which can change depending on where you are (like on the Moon).",
    ],

    // 2. General Knowledge (GK) Questions
    "current affairs": [
        "As an offline AI, I don't have access to real-time news, but major current topics often revolve around global health, climate change, and technology advancements.",
    ],
    "capital of japan": [
        "The capital of Japan is Tokyo."
    ],
     "capital of india": [
        "The capital of India is New Delhi."
    ],
    "riddle": [
        "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? ... An echo.",
        "What has an eye, but cannot see? ... A needle.",
        "What has to be broken before you can use it? ... An egg."
    ],
    "quiz": [
        "Here's a fun trivia question: What is the only planet in our solar system that rotates on its side? ... Uranus."
    ],

    // 3. Technology & AI Questions
    "python": [
        "Python is a high-level, interpreted programming language known for its clear syntax and readability. It's great for web development, data science, and automation.",
    ],
    "debug": [
      "To debug in Python, you can use the built-in `pdb` module or simply use print statements to check the values of variables at different points in your code."
    ],
    "neural network": [
        "A neural network is a type of machine learning model inspired by the human brain. It consists of layers of interconnected nodes (or 'neurons') that process information to find patterns and make predictions.",
    ],
    "website": [
        "To build a basic website, you need to know HTML for structure, CSS for styling, and JavaScript for interactivity. You can start with a simple text editor and a web browser.",
    ],
     "api": [
        "An API, or Application Programming Interface, is a set of rules that allows different software applications to communicate with each other."
    ],

    // 4. Personal Help Questions
    "motivation": [
        "The secret of getting ahead is getting started. - Mark Twain",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The only way to do great work is to love what you do. - Steve Jobs"
    ],
    "time management": [
        "A great time management tip is the Pomodoro Technique: work for 25 minutes, then take a 5-minute break. After four 'pomodoros', take a longer break of 15-30 minutes.",
    ],
    "study tip": [
        "A useful study tip is the 'Feynman Technique': try to explain a concept in simple terms, as if you were teaching it to someone else. It helps identify gaps in your understanding."
    ],

    // 5. Creative & Fun Questions
    "story": [
        "Once upon a time, in a forest made of glass, there lived a fox who could talk, but only in riddles. One day, he met a girl who could only answer in questions, and their conversation changed the forest forever.",
    ],
    "poem": [
        "The sun dips low, a painter's stroke,\nA canvas sky, a day bespoke.\nThe stars ignite, a silent fire,\nAnd whisper dreams, and hopes inspire.",
    ],
    "joke": [
        "Why don't scientists trust atoms? Because they make up everything!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "What do you call cheese that isn't yours? Nacho cheese."
    ],

    // 6. Professional & Business Questions
    "resume": [
        "When writing a resume, use action verbs to describe your accomplishments (e.g., 'managed', 'created', 'implemented'). Quantify your achievements with numbers whenever possible to show impact.",
    ],
    "business idea": [
        "A great business idea solves a problem. Consider a subscription box service for local artisanal goods, a mobile app for skill-swapping in a community, or an eco-friendly cleaning service.",
    ],
    "slogan": [
        "A good slogan is short, memorable, and captures the benefit of the brand. Think 'Just Do It' for Nike."
    ],
     "email": [
        "For a professional email, always use a clear subject line, a polite greeting, a concise body, and a professional closing like 'Sincerely' or 'Best regards'."
    ],

    // 7. Practical Daily-Life Questions
    "cook pasta": [
        "To cook pasta: 1. Boil a large pot of salted water. 2. Add the pasta and stir occasionally. 3. Cook for the time specified on the package (usually 8-12 minutes) until 'al dente'. 4. Drain the water and serve with your favorite sauce.",
    ],
    "fix wifi": [
        "If your WiFi isn't working, try these steps first: 1. Restart your router by unplugging it for 30 seconds. 2. Restart your device (computer or phone). 3. Make sure you are within range of the router."
    ],
    "phone under 20k": [
        "While I can't give real-time prices, brands like Xiaomi, Realme, and Samsung often offer phones with great features like good cameras and long battery life in the under ₹20,000 price range. It's best to check recent tech reviews for the latest models.",
    ],

    // 8. Opinion & Thought Questions
    "social media": [
        "Pros of social media include staying connected with people and access to information. Cons can include privacy concerns, mental health impacts from comparison, and the spread of misinformation.",
    ],
    "live on mars": [
        "If humans lived on Mars, we would need advanced technology to create breathable air, grow food, and protect ourselves from radiation. Society would likely be very scientifically-driven, and a new 'Martian' culture might emerge over generations.",
    ],
    
    // 9. Special (games, roleplay, imagination)
    "game": [
        "In many role-playing games (RPGs), you create a character and go on adventures, gaining experience to level up and become more powerful."
    ],
    "roleplay": [
        "Okay, let's roleplay! I'll be a shopkeeper in a fantasy village. 'Welcome, traveler! What brings you to my humble store? Looking for potions, or perhaps a new sword?'"
    ]
};

export const defaultOfflineResponse = "I'm sorry, my offline capabilities are limited, and I don't have information on that specific topic. Please try asking about another subject or check your internet connection for full AI capabilities.";

export function getOfflineResponse(query: string): string {
    const cleanedQuery = query.toLowerCase().trim().replace(/[?.,!]/g, '');
    
    for (const key in offlineResponses) {
        if (cleanedQuery.includes(key)) {
            const possibleAnswers = offlineResponses[key];
            return possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
        }
    }

    return defaultOfflineResponse;
}
