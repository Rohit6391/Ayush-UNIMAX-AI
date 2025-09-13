
export const offlineResponses: { [key: string]: string[] } = {
    // 1. Core & About the AI
    "who are you": [
        "I am the Ayush Unimax AI, a universal AI assistant created by Ayush Sharma of Ayush Webtor Studio. I'm designed to help with a wide range of tasks, from creative writing and coding to data analysis and general knowledge.",
        "I'm the Ayush Unimax AI Studio assistant. My purpose is to be your all-in-one partner for creativity and productivity."
    ],
    "who made you": [
        "I was created by Ayush Sharma at Ayush Webtor Studio.",
        "My creator is Ayush Sharma."
    ],
    "what can you do": [
        "I can do many things! You can chat with me, generate images, create websites, write songs, analyze code, translate languages, and much more. Explore the different modes in the sidebar to see all my capabilities.",
        "My capabilities are broad. I can assist with coding, writing, design planning, data analysis, and even creative tasks like songwriting. I can also work with files you upload."
    ],
    "are you offline": [
        "Yes, I am currently operating in offline mode. My responses are based on my pre-loaded knowledge base, so I don't have access to real-time information from the internet, but I can still answer a wide variety of questions.",
        "That's correct. I'm running offline right now, which means I'm using my internal data to chat with you."
    ],
    "what is your purpose": [
        "My purpose is to be a universal AI assistant, providing a comprehensive suite of powerful and easy-to-use tools for a wide range of users, including developers, writers, designers, students, and professionals."
    ],

    // 2. Academic & Educational Question Types
    "multiple choice question": [
        "Here is an example of a multiple-choice question:\n\nWhat is the capital of France?\nA) London\nB) Berlin\nC) Paris\nD) Madrid\n\nCorrect Answer: C) Paris",
    ],
    "true false question": [
        "Here is an example of a True/False question:\n\nStatement: The Earth is flat.\n\nAnswer: False.",
    ],
    "fill in the blanks": [
        "Here is a fill-in-the-blank example:\n\nThe powerhouse of the cell is the ________.\n\nAnswer: mitochondria.",
    ],
    "match the following": [
        "Here is a 'match the following' example:\n\nColumn A\n1. Water\n2. Iron\n3. Oxygen\n\nColumn B\nA. Fe\nB. O\nC. H2O\n\nAnswer: 1-C, 2-A, 3-B.",
    ],
    "short answer question": ["A short answer question requires a brief response. For example: 'What are the three primary colors?' The answer would be Red, Yellow, and Blue."],
    "essay question": ["An essay question requires a long, structured response. For example: 'Discuss the primary causes of World War I, citing specific treaties and alliances.'"],
    "derivation question": ["A derivation question asks for the steps to derive a formula. For example: 'Derive the quadratic formula from the standard quadratic equation ax² + bx + c = 0.'"],
    "case study": ["A case study question provides a scenario for analysis. For example: 'A company's sales have dropped 20% in the last quarter. Analyze the provided market data and suggest three potential reasons for the decline.'"],
    "critical thinking": ["A critical thinking question requires analysis and judgment, like: 'Evaluate the ethical implications of artificial intelligence in healthcare.'"],

    // 3. GK & Current Affairs
    "fact based question": ["Fact-based questions test memory. For example, 'Who was the first person to walk on the moon?' The answer is Neil Armstrong."],
    "current affairs": [
        "As an offline AI, I don't have access to real-time news, but major global topics often revolve around international relations, climate change initiatives, and advancements in technology and health.",
        "I am currently offline, so I cannot provide you with the very latest news. I can, however, answer questions on general knowledge topics."
    ],
    "capital of uttarakhand": ["The winter capital of Uttarakhand is Dehradun, and the summer capital is Gairsain."],
    "capital of japan": ["The capital of Japan is Tokyo."],
    "capital of canada": ["The capital of Canada is Ottawa."],
    "capital of australia": ["The capital of Australia is Canberra."],
    "capital of france": ["The capital of France is Paris."],
    "highest mountain": ["Mount Everest, part of the Himalayas, is the highest mountain on Earth above sea level."],
    "largest ocean": ["The Pacific Ocean is the largest and deepest of the world's five oceans."],

    // 4. Technology & AI
    "coding question": ["A coding question might be: 'Write a Python function to check if a string is a palindrome.'\n\nAnswer:\ndef is_palindrome(s):\n    return s == s[::-1]"],
    "conceptual tech question": ["A conceptual tech question could be: 'Explain the difference between cloud computing and edge computing.' Cloud computing involves centralized data centers, while edge computing processes data closer to where it's generated, reducing latency."],
    "troubleshooting": ["A troubleshooting question might be: 'My computer is running slow. What are the first three steps I should take?'\n\nAnswer: 1. Restart your computer. 2. Check for and close any unnecessary applications running in the background. 3. Scan for malware and viruses."],
    "ethics in technology": ["An ethics question could be: 'What are the ethical concerns surrounding facial recognition technology?' This involves discussing privacy, consent, potential for misuse in surveillance, and algorithmic bias."],

    // 5. Personal Help
    "advice": ["I can provide general advice. For example, if you're feeling unproductive, a common tip is to break your large task into smaller, more manageable steps. This can make it feel less overwhelming."],
    "motivation": [
        "The secret of getting ahead is getting started. - Mark Twain",
        "Believe you can and you're halfway there. - Theodore Roosevelt"
    ],
    "career guidance": ["For career guidance, it's helpful to align your skills and interests with potential job roles. For instance, if you enjoy problem-solving and logic, a career in software development or data analysis could be a good fit."],

    // 6. Creative
    "story prompt": ["Here's a story prompt: A lighthouse keeper discovers that the light is guiding not ships, but creatures from the deep sea."],
    "poetry": ["A poetry request could be: 'Write a short poem about the moon.'\n\nSilver coin in velvet dark,\nSilent watcher, lonely spark,\nGuiding tides and dreaming heads,\nOn the whispered words unsaid."],
    "riddle": ["I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ... A map."],
    "joke": [
        "Why don't scientists trust atoms? Because they make up everything!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised."
    ],
    "roleplay": ["Okay, let's roleplay! I'll be a shopkeeper in a fantasy village. 'Welcome, traveler! What brings you to my humble store? Looking for potions, or perhaps a new sword?'"],

    // 7. Business
    "resume question": ["A common resume tip is to use action verbs to describe your accomplishments. Instead of 'was responsible for...', say 'Managed a team of 5...' or 'Increased sales by 15%.'"],
    "email drafting": ["When drafting a professional email, always include a clear subject line, a formal greeting, a concise body, and a professional closing like 'Best regards' or 'Sincerely.'"],
    "marketing": ["A marketing question could be: 'What is a good slogan for a new coffee shop?' A good slogan is memorable and highlights a key benefit, like 'Your daily grind, perfected.'"],
    "business idea": [
        "A great business idea often solves a common problem. Consider these concepts: a subscription box for local artisanal goods, a mobile app for skill-swapping within a community, or an eco-friendly cleaning service using non-toxic products.",
    ],

    // 8. Daily Life
    "how to": ["I can provide step-by-step guidance for many tasks. For example, to tie a shoe, you would first make a loop with each lace..."],
    "recipe": ["Here is a simple recipe for scrambled eggs: 1. Whisk 2 eggs with a splash of milk, salt, and pepper. 2. Melt butter in a non-stick pan over medium-low heat. 3. Pour in the eggs and cook, stirring gently, until they are set to your liking."],
    "travel": ["When traveling, a useful tip is to pack versatile clothing that can be layered. Also, always have digital and physical copies of your important documents like your passport and tickets."],

    // 9. Opinion/Debate
    "pros and cons": ["Let's analyze the pros and cons of electric cars. Pros include lower emissions and cheaper fuel costs. Cons include higher initial price, limited range, and the environmental impact of battery production."],
    "debate": ["A classic debate topic is 'Are social media platforms beneficial for society?' Arguments for include enhanced connectivity and information sharing. Arguments against include mental health impacts, privacy issues, and the spread of misinformation."],
    "philosophy": ["A philosophical question is 'What is justice?' Different theories exist. Utilitarianism suggests justice is whatever creates the greatest good for the greatest number, while others argue it's about individual rights and fairness, regardless of the outcome."],

    // 10. Default
    "default": [
        "I'm sorry, my offline capabilities are limited, and I don't have information on that specific topic. Please try asking about another subject or check your internet connection for full AI capabilities."
    ]
};

export function getOfflineResponse(query: string): string {
    const cleanedQuery = query.toLowerCase().trim().replace(/[?.,!]/g, '');
    
    let bestMatchKey: string | null = null;
    let highestScore = -1;

    // Iterate over all keywords in our offline database
    for (const key in offlineResponses) {
        if (key === "default") continue;

        const keywords = key.split(/\s+/); // Split by space
        let currentScore = 0;
        let queryWords = cleanedQuery.split(/\s+/);

        // Calculate a score based on keyword matches
        keywords.forEach(keyword => {
            if (cleanedQuery.includes(keyword)) {
                // Exact word match bonus
                if (queryWords.includes(keyword)) {
                    currentScore += 1.5;
                } else {
                    currentScore += 1;
                }
            }
        });

        // Full phrase match gets a high bonus
        if (cleanedQuery.includes(key)) {
            currentScore += 5;
        }

        if (currentScore > highestScore) {
            highestScore = currentScore;
            bestMatchKey = key;
        }
    }

    if (bestMatchKey && highestScore > 0) {
        const possibleAnswers = offlineResponses[bestMatchKey];
        return possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
    }

    // A simple fallback for greetings
    if (cleanedQuery.startsWith("hello") || cleanedQuery.startsWith("hi")) {
        return "Hello! I'm running in offline mode. I can answer questions on a variety of general knowledge topics. How can I help you?";
    }

    const defaultAnswers = offlineResponses["default"];
    return defaultAnswers[0];
}
