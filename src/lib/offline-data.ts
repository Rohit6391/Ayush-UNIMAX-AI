
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

    // 2. Academic Topics
    "math": [
        "Math is the study of numbers, quantity, space, and change. What specific math topic are you interested in, like algebra, calculus, or geometry?",
        "To solve for x in 2x + 5 = 15, you first subtract 5 from both sides to get 2x = 10, then divide by 2 to find x = 5.",
        "The Pythagorean theorem states that in a right-angled triangle, the square of the hypotenuse (the side opposite the right angle) is equal to the sum of the squares of the other two sides: a² + b² = c²."
    ],
    "algebra": ["Algebra is a branch of mathematics that uses symbols and letters to represent numbers and quantities in formulas and equations."],
    "calculus": ["Calculus is a branch of mathematics focused on limits, functions, derivatives, integrals, and infinite series. It's essential for understanding change."],
    "geometry": ["Geometry is the branch of mathematics concerned with properties of space such as the distance, shape, size, and relative position of figures."],
    "gravity": ["Gravity is the universal force of attraction acting between all matter. It's what keeps your feet on the ground and what keeps the planets in orbit around the sun."],
    "evolution": ["Evolution is the process by which different kinds of living organisms are thought to have developed and diversified from earlier forms during the history of the earth. Natural selection is a key mechanism of evolution."],
    "dna": ["DNA, or deoxyribonucleic acid, is a molecule that contains the biological instructions that make each species unique. It is the hereditary material in humans and almost all other organisms."],
    "science": [
        "Science is the systematic study of the physical and natural world through observation and experimentation. Key branches include biology, chemistry, and physics.",
        "Newton's First Law of Motion states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force.",
        "The water cycle consists of three major processes: evaporation, condensation, and precipitation."
    ],
    "biology": ["Biology is the scientific study of life and living organisms, including their structure, function, growth, origin, evolution, and distribution."],
    "chemistry": ["Chemistry is the scientific study of the properties and behavior of matter. It covers the elements, the compounds they form, and the reactions they undergo."],
    "physics": ["Physics is the natural science that studies matter, its fundamental constituents, its motion and behavior through space and time, and the related entities of energy and force."],
    "history": [
        "History is the study of past events, particularly in human affairs. The Roman Empire, for example, lasted for over 1000 years and greatly influenced Western civilization.",
        "The first World War lasted from 1914 to 1918. It was a global conflict involving the Central Powers and the Allied Powers.",
        "The Renaissance was a period of great cultural, artistic, and scientific change in Europe that spanned from the 14th to the 17th century."
    ],
    "world war ii": ["World War II was a global war that lasted from 1939 to 1945. It involved the vast majority of the world's countries—including all of the great powers—forming two opposing military alliances: the Allies and the Axis."],
    "roman empire": ["The Roman Empire was one of the most powerful and influential civilizations in world history, known for its achievements in law, engineering, architecture, and language. It began in 27 BC and lasted until the fall of the Western Empire in 476 AD."],
    "geography": [
        "Geography is the study of places and the relationships between people and their environments. The capital of France is Paris, and the longest river in the world is the Nile.",
        "The Earth's seven continents are Asia, Africa, North America, South America, Antarctica, Europe, and Australia."
    ],
    "economics": [
        "Economics is the social science that studies the production, distribution, and consumption of goods and services. A key concept is supply and demand, which describes how the availability of a product and the desire for it affect its price."
    ],
    "supply and demand": ["Supply and demand is a fundamental economic model. Generally, when supply exceeds demand, prices fall. When demand exceeds supply, prices rise."],
    "photosynthesis": [
        "Photosynthesis is the process used by plants, algae, and some bacteria to convert light energy into chemical energy, through a process that converts carbon dioxide and water into glucose (sugar) and oxygen."
    ],
    
    // 3. GK & Current Affairs
    "current affairs": [
        "As an offline AI, I don't have access to real-time news, but major global topics often revolve around international relations, climate change initiatives, and advancements in technology and health.",
        "I am currently offline, so I cannot provide you with the very latest news. I can, however, answer questions on general knowledge topics."
    ],
    "capital of japan": ["The capital of Japan is Tokyo."],
    "capital of india": ["The capital of India is New Delhi."],
    "capital of uttarakhand": ["The winter capital of Uttarakhand is Dehradun, and the summer capital is Gairsain."],
    "capital of canada": ["The capital of Canada is Ottawa."],
    "capital of australia": ["The capital of Australia is Canberra."],
    "capital of usa": ["The capital of the United States of America is Washington, D.C."],
    "capital of uk": ["The capital of the United Kingdom is London."],
    "capital of france": ["The capital of France is Paris."],
    "capital of germany": ["The capital of Germany is Berlin."],
    "capital of china": ["The capital of China is Beijing."],
    "capital of russia": ["The capital of Russia is Moscow."],
    "capital of brazil": ["The capital of Brazil is Brasília."],
    "capital of italy": ["The capital of Italy is Rome."],
    "capital of spain": ["The capital of Spain is Madrid."],
    "capital of pakistan": ["The capital of Pakistan is Islamabad."],
    "highest mountain": ["Mount Everest, part of the Himalayas, is the highest mountain on Earth above sea level."],
    "largest ocean": ["The Pacific Ocean is the largest and deepest of the world's five oceans."],
    "largest desert": ["The largest desert in the world is the Antarctic Polar Desert. The largest hot desert is the Sahara."],
    "longest river": ["The longest river in the world is the Nile River, flowing through northeastern Africa."],

    // 4. Technology
    "python": [
        "Python is a high-level, interpreted programming language known for its clear syntax and readability. It's widely used for web development, data science, automation, and artificial intelligence.",
    ],
    "javascript": [
        "JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. It enables interactive web pages and is an essential part of web applications."
    ],
    "html": ["HTML stands for HyperText Markup Language. It's the standard markup language for documents designed to be displayed in a web browser."],
    "css": ["CSS, or Cascading Style Sheets, is a style sheet language used for describing the presentation of a document written in a markup language like HTML."],
    "sql": ["SQL (Structured Query Language) is a standard language for managing and manipulating databases. You can use it to query, insert, update, and delete data."],
    "react": ["React is a popular JavaScript library for building user interfaces, particularly for single-page applications. It allows developers to create reusable UI components."],
    "debugging": [
      "Debugging is the process of finding and resolving defects or problems within a computer program that prevent correct operation. Common methods include using a debugger tool, adding print statements to check variable values, or reviewing code logic step-by-step."
    ],
    "neural network": [
        "A neural network is a type of machine learning model inspired by the structure of the human brain. It consists of layers of interconnected nodes (or 'neurons') that process information to find patterns and make predictions.",
    ],
    "what is ai": [
        "AI, or Artificial Intelligence, is a broad area of computer science that makes it possible for machines to learn from experience, adjust to new inputs, and perform human-like tasks.",
        "Artificial Intelligence refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving."
    ],
     "api": [
        "An API, or Application Programming Interface, is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information."
    ],
     "blockchain": ["A blockchain is a decentralized, distributed, and often public, digital ledger consisting of records called blocks that is used to record transactions across many computers so that any involved block cannot be altered retroactively, without the alteration of all subsequent blocks."],

    // 5. Personal Help
    "motivation": [
        "The secret of getting ahead is getting started. - Mark Twain",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill"
    ],
    "time management": [
        "A great time management tip is the Pomodoro Technique: work for 25 minutes on a single task, then take a 5-minute break. After four 'pomodoros', take a longer break of 15-30 minutes.",
        "Try the 'Eisenhower Matrix' to prioritize tasks. Categorize them into four quadrants: Urgent & Important (Do it now), Important but Not Urgent (Schedule it), Urgent but Not Important (Delegate it), and Not Urgent & Not Important (Eliminate it)."
    ],
    "study tip": [
        "A useful study tip is the 'Feynman Technique': try to explain a concept in simple terms, as if you were teaching it to someone else. It quickly reveals gaps in your understanding.",
        "Active recall is a powerful study method. Instead of re-reading your notes, close the book and try to recall the information from memory. This strengthens neural pathways."
    ],
    "how to be productive": [
        "To be more productive, try breaking large tasks into smaller, manageable steps. This makes them less daunting and provides a sense of accomplishment as you complete each part."
    ],
    "public speaking": ["To improve at public speaking, practice your speech multiple times, make eye contact with your audience, and use gestures to emphasize your points. Remember to speak slowly and clearly. It's okay to be nervous!"],

    // 6. Creative work
    "story": [
        "Once upon a time, in a forest made of glass, there lived a fox who could talk, but only in riddles. One day, he met a girl who could only answer in questions, and their conversation changed the forest forever.",
        "In a city where it always rained, a clockmaker built a machine that could capture and store moments of sunshine. He gave them away to people on the gloomiest days."
    ],
    "poem": [
        "The sun dips low, a painter's stroke,\nA canvas sky, a day bespoke.\nThe stars ignite, a silent fire,\nAnd whisper dreams, and hopes inspire.",
        "An old brick wall, with mossy seams,\nHolds tales of sunlit, forgotten dreams.\nA silent witness, standing tall,\nThrough winter's frost and summer's squall."
    ],
    "write a song": ["How about a song about a journey? Verse 1: 'The dusty road, a winding thread, through fields of green, the words unsaid.' Chorus: 'Oh, the miles they fly, beneath the sky, with every step, a reason why.'"],

    // 7. Professional/Business
    "resume": [
        "When writing a resume, use action verbs to describe your accomplishments (e.g., 'managed', 'created', 'implemented'). Quantify your achievements with numbers whenever possible to show impact (e.g., 'Increased sales by 15%').",
        "A good resume should be tailored to the specific job you're applying for. Highlight the skills and experiences that are most relevant to the job description."
    ],
    "business idea": [
        "A great business idea often solves a common problem. Consider these concepts: a subscription box for local artisanal goods, a mobile app for skill-swapping within a community, or an eco-friendly cleaning service using non-toxic products.",
    ],
    "slogan": [
        "A good slogan is short, memorable, and captures the benefit of the brand. Think 'Just Do It' for Nike or 'Think different' for Apple."
    ],
     "email": [
        "For a professional email, always use a clear and concise subject line, a polite greeting (e.g., 'Dear [Name]'), a body that gets straight to the point, and a professional closing like 'Sincerely' or 'Best regards'."
    ],
    "interview tip": [
        "During a job interview, use the STAR method to answer behavioral questions: describe the Situation, the Task you had to do, the Action you took, and the Result of your action. It provides a clear and compelling story."
    ],
    "negotiation": ["A key negotiation tactic is to know your BATNA (Best Alternative to a Negotiated Agreement). This is your best course of action if you can't reach a deal, and it gives you a strong position to negotiate from."],

    // 8. Daily Life
    "cook pasta": [
        "To cook pasta: 1. Boil a large pot of salted water. 2. Add the pasta and stir occasionally to prevent sticking. 3. Cook according to package directions (usually 8-12 minutes) until 'al dente' (firm to the bite). 4. Drain the water and serve with your favorite sauce.",
    ],
    "fix wifi": [
        "If your WiFi isn't working, try these simple steps first: 1. Restart your router by unplugging it for 30 seconds, then plugging it back in. 2. Restart your device (computer or phone). 3. Make sure you are within range of the router and there are no major obstructions."
    ],
    "how to tie a tie": [
        "The simplest knot is the Four-in-Hand. 1. Drape the tie around your neck with the wide end on your right, hanging lower than the narrow end. 2. Cross the wide end over the narrow end. 3. Bring it back underneath. 4. Cross it over the front again. 5. Pull the wide end up through the loop around your neck. 6. Tuck it down through the knot you've just made in front. 7. Tighten carefully."
    ],
    "make coffee": ["To make coffee using a drip machine: 1. Fill the reservoir with cold water. 2. Place a filter in the basket. 3. Add ground coffee (a general rule is 1-2 tablespoons per 6 ounces of water). 4. Close the basket and press the 'start' button."],
    
    // 9. Opinion/Philosophy
    "social media": [
        "The pros of social media include staying connected with people across the globe and quick access to information and news. The cons can include privacy concerns, mental health impacts from social comparison, and the rapid spread of misinformation.",
    ],
    "live on mars": [
        "If humans were to live on Mars, we would need to build self-sustaining habitats with breathable air, grow food in enclosed farms, and shield ourselves from high levels of solar radiation. Society would likely be very scientifically-driven, and a new 'Martian' culture might emerge over generations, shaped by the unique challenges of the environment.",
    ],
    "meaning of life": [
        "That's one of the biggest questions! There's no single answer. Philosophers have debated it for centuries. Some believe it's to seek happiness, some to find knowledge, others to create and contribute, and many find meaning in their relationships with others or through spirituality."
    ],
    
    // 10. Fun, Jokes, and Games
    "joke": [
        "Why don't scientists trust atoms? Because they make up everything!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "What do you call cheese that isn't yours? Nacho cheese.",
        "I'm reading a book on anti-gravity. It's impossible to put down!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I would tell you a joke about construction, but I'm still working on it.",
        "Why don’t skeletons fight each other? They don’t have the guts."
    ],
    "riddle": [
        "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I? ... An echo.",
        "What has an eye, but cannot see? ... A needle.",
        "What has to be broken before you can use it? ... An egg.",
        "What is full of holes but still holds water? ... A sponge.",
        "What is always in front of you but can’t be seen? ... The future."
    ],
    "game": [
        "In many role-playing games (RPGs), you create a character and go on adventures, gaining experience to level up your skills and become more powerful. A popular example is Dungeons & Dragons.",
        "Chess is a strategy board game for two players. The goal is to checkmate the opponent's king, putting it in a position where it is under attack and cannot escape."
    ],
    "roleplay": [
        "Okay, let's roleplay! I'll be a shopkeeper in a fantasy village. 'Welcome, traveler! What brings you to my humble store? Looking for potions, or perhaps a new sword?'",
        "Let's try another. I am a starship captain. 'Ensign, report! What's the status of those strange energy readings we detected?'"
    ]
};

export const defaultOfflineResponse = "I'm sorry, my offline capabilities are limited, and I don't have information on that specific topic. Please try asking about another subject or check your internet connection for full AI capabilities.";

export function getOfflineResponse(query: string): string {
    const cleanedQuery = query.toLowerCase().trim().replace(/[?.,!]/g, '');
    
    // Exact match check first for performance
    if (offlineResponses[cleanedQuery]) {
        const possibleAnswers = offlineResponses[cleanedQuery];
        return possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
    }

    // Then check for keywords
    for (const key in offlineResponses) {
        if (cleanedQuery.includes(key)) {
            const possibleAnswers = offlineResponses[key];
            return possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)];
        }
    }

    // A simple fallback for greetings
    if (cleanedQuery.startsWith("hello") || cleanedQuery.startsWith("hi")) {
        return "Hello! I'm running in offline mode. I can answer questions on a variety of general knowledge topics. How can I help you?";
    }

    return defaultOfflineResponse;
}
