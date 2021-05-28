module.exports = {

  /* 
  Monikers is pretty simple: get your friends to guess the name on a card. Each team has 60 seconds to get through as many weird names as they can.
  In the first round, you can say anything you want. In the second, you can only use one word. And in the third, you can't say anything all all — just charades.
  The same cards are used in each round, so by the end of the game, you've made up a bunch of hilarious jokes together.
  */
  rounds: [
    "you can say anything you want, except for the name on the card.",
    "you can only use one word.",
    "you can't say anything all — just charades.",
    "you must get behind a large object and stick only your head out. You can only use head movements and sound effects."
  ],
  pointColors: {
    1: "#42be9f",
    2: "#00b7ef",
    3: "#8868ae",
    4: "#f0533e"
  },
  cards: [
    {
      name: 'Blacula',
      description:
        'The title character from a horror film about an 18th century African prince turned vampire. Locked in a coffin for two centuries by Count Dracula, the box was purchased as part of an estate by two interior decorators who accidentally set him loose in 705 Los Angeles.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 4
    },
    {
      name: 'A Russian Nesting Doll',
      description:
        'A set of colorful wooden figurines that decrease in size and are placed inside of one another. Associated with a former Communist nation, they are often painted as women, but themes vary from babushkas to Star Wars characters to just Batmans all the way down.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'Gallagher',
      description:
        'A prop comic famous for smashing watermelons with his trademark Sledge-O-Matic. He once sued his brother for touring under the comedian‘s name and walked out of a Marc Maren interview when asked about the use of racist, homophobic, and xenophobic slurs in his act.',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'Kobayashi',
      description:
        "A Japanese competitive eater who shocked the world in 2001 by eating 50 hot dogs and buns (HDB) in 12 minutes at Nathan's Hot Dog Eating Contest, doubling the previous record. He once lost a hot dog eating contest (no buns) to a 1089 lb. Kodiak bear (31-50).",
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'El Chupacabra',
      description:
        'Literally "goat sucker,” this legendary American cryptid is often described as a reptile-like creature that attacks and drinks the blood of sheep and other livestock. Most supposed sightings have been attributed to dogs or wolves afflicted by the skin disease mange.',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: 'A Narwhal',
      description:
        'An Arctic whale with a large protruding tusk. which is actually an elongated canine tooth. Its name translates to "corpse whale” from the Old Norse, due to the similarity of its flesh tone with a drowned sailor. According to the Weebl\'s Stuff song, they are so awesome.',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: 'Achilles',
      description:
        "An Ancient Greek hero and demigod from Homer's Iliad, who defeated the Trojan warrior Hector as revenge for killing his friend and lover Patroclus. He was later killed by an arrow to his heel—the only part of his body that was vulnerable to physical injury.",
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'William Howard Taft',
      description:
        'Secretary of War, 10th Chief Justice of the Supreme Court, and most obese president in US history. It is unclear whether the story of his getting stuck in a White House bathtub is true, but it was confirmed that on at least one occasion, he caused it to overflow.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: '100 Duck-Sized Horses',
      description:
        'From a hypothetical scenario that poses the question of who would win in a fight: a single equine—sized fowl or fivescore fowl—sized equines. The question was made famous in a 2012 Reddit AMA with President Barack Obama. The comment received over 1,000 upvotes.',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: 'A Velociraptor',
      description:
        'A bipedal. feathered carnivore from the Cretaceous Period. It is one of the most well-known dinosaurs due to its prominent role in the 1993 film Jurassic Park, where it was depicted inaccurately as large and feather-less, but quite acccurately as a clever girl.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'The Pied Piper',
      description:
        'A character in medieval folklore that led a group of children away from the town of Hamelin. Germany with a magic flute. In the tale, he was hired to clear the town of a rat infestation. but after receiving no payment, he used the flute to kidnap their children instead.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Christopher Walken',
      description:
        'An actor known for his odd line readings. dancing skills. and creepily handsome face. Despite being an Academy Award winning actor, he is perhaps best known for the "Weapon of Choice” music video and as Bruce Dickinson. an SNL character who asks for more cowbell.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Caligula',
      description:
        'A Roman emperor known for his cruelty, extravagance, and sexual perversity. He was the first Roman emperor to be assassinated. He is best known for being the title character of a semi-pornographic film starring Malcolm McDowell that depicted his orgies in lengthy detail.',
      category: 'HISTORICAL FIGURE',
      pointValue: 2
    },
    {
      name: 'Atlas',
      description:
        'A titan from Greek mythology, who was forced to hold up the celestial spheres as punishment for fighting the Olympian gods in the War of the Titans. He is often shown holding a sphere on his shoulders, which is now commonly mistaken to be the Earth.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: "Pavlov's Dog",
      description:
        'A canine from a Russian physiologist’s classical conditioning experiments. By ringing a bell associated with food, he could induce the animal to salivate even with no food present. He extended these experiments to children, who underwent surgeries so he could better collect their saliva.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'A Raver',
      description:
        'A person who attends a party featuring electronic music, dancing, and visual effects. Attendees are often characterized as being under the influence of MDMA, using fluorescent glow sticks, sucking on pacifiers, applying Vicks VapoRub, and wearing phat pants.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'Jacques Cousteau',
      description:
        'A French conservationist and media figure, who devoted his life to the study of the ocean. Following his death, members of his crew alleged that scenes from his films were staged. For instance, pouring bleach into a container to get footage of an octopus scrambling out.',
      category: 'HISTORICAL FIGURE',
      pointValue: 2
    },
    {
      name: 'Al Roker',
      description:
        'The flamboyant weatherman for The Today Show who was known for being obese before having gastric bypass surgery. He was famously thrown to the ground reporting on Hurricane Wilma. He also writes mystery novels about Billy Blessing, a chef and amateur detective.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: "Evander Holyfield's ear",
      description:
        'The hearing organ of the 4-time heavyweight champion boxer. It was partially torn off during a 1997 bout with Mike Tyson that is now known as "The Bite Fight." In Round 3. Tyson bit into its outer rim with his teeth before spitting the piece of flesh onto the canvas.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Rosa Parks',
      description:
        'A civil rights activist who refused to give up her seat in the colored section of a bus to a white passenger: Claudette Colvin had done the same nine months earlier. but NAACP leadership did not want a pregnant, unmarried teenager as the face of the movement.',
      category: 'HISTORICAL FIGURE',
      pointValue: 1
    },
    {
      name: 'An Illusionist',
      description:
        'A performer of magic acts that often include demonstrating "impossible” tricks to a credulous audience. The term was preferred by the character Gob Bluth in the television series Arrested Development, whose performances often went horribly wrong.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A Baby Sloth',
      description:
        'The juvenile form of a slow-moving, hook-handed mammal whose fur is home to other creatures, including beetles and cockroaches. Popular on websites devoted to cuteness due to their perpetual smiles and docility. They are especially darling when taking a bath.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A Mole',
      description:
        'An informant or spy recruited to report on a target government or organization from the inside. They are named after a small, subterranean species of mammal. The term was popularized by John Le Carré in Tinker, Tailor, Soldier, Spy, but was first used by Francis Bacon in 1626.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'God',
      description:
        'The Supreme Being, who monotheists often believe to be omniscient, omnipotent, omnipresent, and responsible for the creation of the universe. In the West, he is often depicted as an old white man with a long gray beard.',
      category: 'HISTORICAL FIGURE',
      pointValue: 1
    },
    {
      name: 'Kurt Cobain',
      description:
        'The lead singer-songwriter of the grunge rock band Nirvana, known for songs like "Smells Like Teen Spirit” and "All Apologies." He had a history of mental illness and drug abuse, which led to his death in 1994 by a self—inflicted shotgun wound to the head.',
      category: 'HISTORICAL FIGURE',
      pointValue: 1
    },
    {
      name: 'Prince',
      description:
        'The "artist formerly known as." who released Purple Rain and the Batman soundtrack. In 2011, the website Heavy Table published illustrations of his refrigerator, which contained 5 pounds of Dunk-a-roos. 18 varieties of mustard, Braunschweiger. and a quart of Yak\'s milk.',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'The lady who spilled coffee on herself',
      description:
        "A 79-year—old woman who won a lawsuit against the world’s largest fast-food chain after spilling a scalding drink onto her lap while riding in her grandson's 1989 Ford Probe. It soaked into her sweat- pants, causing first-degree burns to her thighs, buttocks, and groin.",
      category: 'CELEBRITY',
      pointValue: 4
    },
    {
      name: 'Tonya Harding',
      description:
        "Olympic figure skater. professional boxer, sex tape star, land speed record holder for vintage gas coupes, and felon. She became a pariah after conspiring with her husband. Jeff Gillooly, to break competitor Nancy Kerrigan's leg by whacking it with a telescopic baton.",
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Deep Blue',
      description:
        'An IBM computer that defeated chess champion Garry Kasparov 2-1, with 3 draws. Kasparov demanded a rematch after accusing IBM of cheating. They declined and decommissioned it following the match. Due to its small sample size. it does not have an ELO rating.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'Rapunzel',
      description:
        'A character from a fairy tale collected by the Brothers Grimm, who is imprisoned in a tower by an evil witch. She is widely associated with the command, said by those who want to visit her in her tower. “Let down your hair, so that I may climb the golden stair."',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'Man Hands',
      description:
        "The minor character on the show Seinfeld. She is a beautiful women who Jerry cannot stay attracted to because of her large extremities. The episode's writer, David Mandel, created the character in response to his wife‘s own self—consciousness about this condition.",
      category: 'FICTIONAL CHARACTER',
      pointValue: 4
    },
    {
      name: 'Pee-wee Herman',
      description:
        'The alter ego of comedian Paul Reubens. who wears a high-cut grey suit. red bow tie, and heavy makeup. His character is often associated with a spastic dance performed to the song "Tequila." which he used to win the respect of the Satan\'s Helpers biker gang.',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'Pac-Man',
      description:
        'The hero and title character of an 80s arcade game, where he navigates mazes and eats pellets, power pellets. and fruit while avoiding ghosts. One of gaming’s earliest breakout stars, he was soon usurped by his female counterpart in a far superior sequel.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'John Wilkes Booth',
      description:
        'A 19th century actor and Confederate sympathizer. who derailed his and nearly that of his brother Edwin’s acting careers when he assassinated Abraham Lincoln. The original plan was to kidnap Lincoln and exchange him for a number of Confederate POWs.',
      category: 'HISTORICAL FIGURE',
      pointValue: 1
    },
    {
      name: 'An Oompa Loompa',
      description:
        "A race of short. orange-skinned folks from Willy Wonka & the Chocolate Factory, who work in the factory and sing moralizing songs. In an early version of Roald Dahl's novel. they were depicted as African pygmies but were later rewritten to be white and blonde.",
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'Godzilla',
      description:
        'The King of the Monsters. who first appeared in a series of Japanese films made in response to the atomic bombings of Hiroshima and Nagasaki. The monster typically has a reptilian look, walks on two legs. has a long tail, and has "nuclear breath."',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'The Very Hungry Caterpillar',
      description:
        "A children's book character that takes readers through an insect's transformation from larva to butterfly. The book received worldwide acclaim, selling over 30M copies. The competitive eater Kobayashi frequently gives this book out as a holiday gift.",
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Abraham Lincoln',
      description:
        "The 16th President of the US. who abolished slavery and led the North to victory in the Civil War. He is often depicted wearing a top hat with his signature chin curtain beard. He was assassinated by the actor John Wilkes Booth while attending a play at Ford's Theatre.",
      category: 'HISTORICAL FIGURE',
      pointValue: 1
    },
    {
      name: 'Yoshi',
      description:
        'The egg—laying dinosaur sidekick of Mario and Luigi. The name refers both to individuals and the entire species. They have long tongues that they use to eat things like Goombas, apples, and other objects, which can be excreted as eggs or expectorated as fireballs.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'Amelia Earhart',
      description:
        'An American aviatrix, who was the first woman to fly solo across the Atlantic. She vanished mysteriously in 1937 while attempting to circumnavigate the globe. Many conspiracy theories emerged, from her being captured by the Japanese to her eloping with her navigator.',
      category: 'HISTORICAL FIGURE',
      pointValue: 1
    },
    {
      name: 'Mr. Owl',
      description:
        'A bespectacled, know-it-all bird who famously answered the question "How many licks does it take to get to the Tootsie Roll center of a Tootsie Pop?" by licking the lollipop 3 times before biting into it with his sharp beak, then declaring that it takes only 3 licks.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'Vincent Van Gogh',
      description:
        'A Dutch post-lmpressionist painter known for his depictions of wheat fields. sunflowers, and starry nights. He struggled with mental illness. once slicing off his left ear with razor and delivering it to a brothel as a memento for his friend Paul Gauguin.',
      category: 'HISTORICAL FIGURE',
      pointValue: 1
    },
    {
      name: 'A Grammar Nazi',
      description:
        'A person who enforces language rules to an unusually high degree. According to knowyourmeme.com, one of the earliest uses was in 1995, when a user on the newsgroup alt.gothic called someone out for correcting the use of the term “thusly” for "thus."',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'A Centaur',
      description:
        'A mythological hybrid whose top half is human and bottom half is horse. The Greeks considered them savage, drunken beings. The myth persists today, including a famous tattoo of half Patrick Swayze, half horse and SNL‘s depiction of one of these on a failed job interview.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'Dr. Henry Heimlich',
      description:
        'A surgeon credited with inventing a maneuver that prevents suffocation when a person is choking by jamming your fist into their abdomen. He also advocated for the technique be used to treat drowning (don’t do it) and that malaria could treat cancer, Lyme disease. and HIV.',
      category: 'HISTORICAL FIGURE',
      pointValue: 1
    },
    {
      name: 'The Raven',
      description:
        'A large black bird and the subject of a poem by Edgar Allan Poe. In it, the bird visits a man grieving the loss of his love, Lenore. Sitting above him on a bust of the goddess Athena, the bird repeats the words "nevermore" to the man’s inquiries, slowly driving him mad.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'The Loch Ness Monster',
      description:
        'A legendary cryptid. who supposedly lives in a deep freshwater lake in the Scottish Highlands. Believers speculate that the creature is a marine dinosaur that somehow survived to modern day. The scientific community continues to regard the creature as a hoax.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Slimer',
      description:
        'A character from the Ghostbusters franchise. who appears as a transparent green blob composed of pure Ectoplasm. Ravenously consuming all food in sight, writer and actor Dan Aykroyd allegedly referred to him as "The Ghost of John Belushi."',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'Teddy Ruxpin',
      description:
        'A storytelling toy bear from the 80s. who had an audio cassette deck in his body. Stories such as "The Wooly What\'s-It: Learning Can Be Fun! and "Tweeg and the Bounders: You Have to Earn the Things Worth Having“ tended to focus on promoting positive behavior.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'The Eye of Sauron',
      description:
        'A manifestation of the title character in J.R.R. Tolkien’s fantasy series The Lord of the Rings. Frodo describes it as “rimmed with fire, but was itself glazed, yellow as a cat‘s, watchful and intent. and the black slit of its pupil opened on a pit. a window into nothing."',
      category: 'FICTIONAL CHARACTER',
      pointValue: '2'
    },
    {
      name: 'Colonel Sanders',
      description:
        'The founder of Kentucky Fried Chicken, whose likeness is also used on their logo. He is easily identified by his white hair, goatee, black-rimmed glasses. white suit, and string tie. His honorific title refers to a Kentucky tradition rather than a military rank.',
      category: 'HISTORICAL FIGURE',
      pointValue: 1
    },
    {
      name: 'The Swedish Chef',
      description:
        'A cook and Muppet that hails from Northern Europe. He wears a toque blanche and speaks in sing—songy gibberish. Humans from his country of origin often find the character offensive and claim that his accent totally sounds more like Norwegian anyway.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Bloody Mary',
      description:
        'A legendary ghost who is said to be conjured in a mirror by saying her name multiple times. Often attempted by young girls. the ghost is sometimes said to reveal the future and other times said to attempt to scratch the person’s eyes out.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'The Hamburglar',
      description:
        'A young, red—headed thief who dresses in striped clothing and steals items from the McDonald’s restaurant chain. Originally an old man with a long nose inexplicably called the "Lone Jogger,” he has since ceased being a villain in the McDonaldland universe.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Leper',
      description:
        'A person infected with Hansen’s Disease, which sometimes results in the inability to feel pain and consequent loss of body parts. To prevent the spread of the disease, they were historically separated into isolated colonies—a practice still alive in India and China.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A California Raisin',
      description:
        'A member of a fictional R&B group composed of anthropomorphic dried grapes from the West Coast. They came to prominence in claymation form, singing a cover of "I Heard It Through the Grapevine" in an advertisement. They were also popular as plastic toys.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Khan!',
      description:
        'A villain from the Star Trek franchise, who once controlled a portion of the earth during the Eugenics Wars of the 905. Ricardo Montalban played the genetically engineered superhuman, delivering lines such as "Revenge is a dish that is best served cold."',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'A Hungry Hungry Hippo',
      description:
        "The title character of a children's game that teaches kids to eat marbles. Each of the four players simultaneously mash a plastic lever to get their character—a colorful version of the third largest land mammal—to consume as many of these inedible objects as possible.",
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'The Kraken',
      description:
        'A gigantic mythical sea monster that first appeared in Norse mythology. Because of its size, it was thought to have been inspired by giant squid sightings. In contemporary media, is often seen being "released" or "unleashed" upon an unsuspecting hero.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'The Kaiser',
      description:
        'The title of German leader Wilhelm II, who ruled until the end of World War I. He was depicted in propaganda with an exaggerated handlebar mustache and Pickelhaube, the spiked helmet of the Prussian army. He was also once accused of stealing our word for "twenty."',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'Aunt Jemima',
      description:
        'The pretty racist mascot of a line of pancake mixes and syrups by the Quaker Oats Company. Her character was derived from a minstrel show‘s mammy-like figure. Like Uncle Ben, she represents an idealized view of domestic servitude in southern life.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'A TSA Agent',
      description:
        'An employee of a US Department of Homeland Security branch. Many of its employees are posted in airports to screen passengers and their property, including pat-clowns and viewing x-rays. Their average salary is $25K-$38K per year, excluding  swag.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A Cylon',
      description:
        'A member of a robotic civilization in the Battlestar Galactica franchise. They were created somewhat by accident on Caprica and are unique in that they experience many common human emotions and are often not fully aware of their status as a robotic lifeform.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Cthulhu',
      description:
        'A monstrous deity created by HP. Lovecraft. It is hundreds of meters tall and has the the arms and legs of a man, claws, the head of a giant octopus, and bat wings. Its mythos   gained increased popularity from a series of allusions to it in the HBO series True Detective.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Splinter',
      description:
        'An elderly humanoid rat who was the sensei of the Teenage Mutant Ninja Turtles. In the 805 cartoon series, he was mutated from the great samurai warrior, Hamato Yoshi. In other versions, however, this character was the pet rodent of Hamato Yoshi.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Chun-Li',
      description:
        'A character from the Street Fighter video game series, who relies primarily on powerful kicks delivered with the aid of her remarkably muscular thighs. Her most famous move is the Lightning Kick, with the Spinning Bird Kick a close second. Her blood type is A.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'A Muggle',
      description:
        'Any non—magical character in the Harry Potter franchise. Their inability to perform magic was likely a hereditary trait and was used as a justification for persecution by an extremist group of magical persons, Death Eaters, who believed their own bloodlines should remain pure.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Babar',
      description:
        "An elephant from the children's book by Jean de Brunhoff, who critics argue offers a justification for colonialism. In the book, he leaves the jungle, visits a city, returns in a green suit, introduces French civilization to his fellow elephants, and is crowned king.",
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'The T-1000',
      description:
        'A shapeshifting robot from Terminator 2. Made of liquid metal, Skynet sent it into the past to kill Edward Furlong, who was protected by Arnold Schwarzenegger’s loveable, technologically inferior, T-800. Billy Idol was slated to play the character before a motorcycle accident.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'A Fainting Goat',
      description:
        'A farm animal that suffers from a genetic disorder that causes its muscles to freeze for approximately 10 seconds when panicked. The condition is formally knows as myotonia congenita, which Buzzfeed once described as "easily the cutest neurological disorder."',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'Count Chocula',
      description:
        'A vampire mascot from the General Mills Corporation‘s series of monster—based breakfast cereals. Like his colleagues Franken—Berry. Boo-Berry, Fruit Brute, and Yummy Mummy, his origin is a mystery. His tagline, "I vant to eat your cereal!" seems a little on the nose.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Burning Man',
      description:
        "A 40-foot wooden effigy that is set on fire during a weeklong event in Nevada's Black Rock Desert. The organizers deny that it has any connection to similar wicker effigies that were built by ancient Druids for pagan Celtic rituals that some speculate involved human sacrifice.",
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A Sherpa',
      description:
        'A member of a Nepalese ethnic group that resides in the Himalayan mountain range. The term often refers to guides who assist climbers. Among the most famous of these in history was Tenzing Norgay, who reached the summit of Mount Everest with Edmund Hillary in 1953.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'The Yellow Power Ranger',
      description:
        'A hero from the 90s children’s show that featured a team of teenagers that fought off aliens by transforming into superheroes and piloting robots called Zords. The show was accused of racism for aligning each character‘s uniform color with their ethnicity.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'A Furby',
      description:
        'A fuzzy interactive toy that became popular in the late 905. Vaguely resembling an owl, it speaks a unique language, learning English over time through interacting with its owner. When held upside down it says things like "me scared" and begins crying.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'El Niño',
      description:
        'A band of warm weather resulting in above-average temperatures for most of North America and wetter seasons for most of South America. This weather system inspired a Chris Farley SNL character that depicted the tropical storm as a boastful professional wrestler.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'The one-armed drummer from Def Leppard',
      description:
        'The percussionist for the popular 80s hair metal band known for hits like "Love Bites" and "Pour Some Sugar on Me." He is best known for continuing to record and perform using a specially designed kit following the amputation of a limb.',
      category: 'CELEBRITY',
      pointValue: 4
    },
    {
      name: 'George Washington',
      description:
        'The 1st President of the US. John Adams claimed that his famed toothlessness was the result of cracking Brazil nuts. His false teeth were not made of wood. but hippopotamus and elephant ivory. He had a previous pair most likely made from, no joke, slave teeth.',
      category: 'HISTORICAL FIGURE',
      pointValue: 1
    },
    {
      name: 'P.F. Chang',
      description:
        'The combined identity of Paul Fleming and Philip Chiang, the two founders of the eponymous Asian Fusion restaurant founded in Scottsdale. Arizona in 1993. They operate over 200 restaurants across the US, far more than its equally middlebrow competitor, Benihana.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'A Roomba',
      description:
        "An automated vacuum cleaner marketed as a convenient way to clean one's home. Its sensors allow it to navigate each room. cleaning under furniture and in often-ignored corners. Cats have been known to ride it. It definitely does not record your daily movements.",
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'The Lord of the Dance',
      description:
        'An Irish performer who came to prominence during the intermission of the 1994 Eurovision Song Contest. His show, Riverdance, melded tapping with Irish folk traditions. following his quest to defeat the dark lord Don Dorcha from destroying Planet Ireland.',
      category: 'CELEBRITY',
      pointValue: 3
    },
    {
      name: 'Teen Wolf',
      description:
        'An adolescent chanthrope from an 805 film and recent TV series. Originally played by Michael J. Fox, he uses his powers to gain popularity at his high school and become their star basketball player, leading the Beavers to a state championship title.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Falkor',
      description:
        "A luckdragon from the novel and film The Neverending Story, who was ridden by Bastian and Atreyu. He is depicted as a creepy, but sort of adorable, dragon with mostly dog-Iike features: paws, shaggy hair, and big floppy ears. He can fly even  though he doesn't have wings.",
      category: 'FICTIONAL CHARACTER',
      pointValue: 3
    },
    {
      name: 'Paula Dean',
      description:
        'A celebrity chef and former Food Network personality, who has received criticism for the excessive use of fat, salt, and sugar in her recipes. She was sued in 2013 for  racial and sexual discrimination, such as using derogatory remarks toward African Americans.',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'A Neanderthal',
      description:
        'AA member of an extinct species closely related to humans. Research suggests that interbreeding between the two groups occurred, with modern non-African humans possessing 1-4% of their genome. They made tools, built dwellings, and had a form of language.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'The Trojan Horse',
      description:
        "A wooden object used by the Greeks to end the Trojan War. When the Trojans took it inside the city walls as a trophy. the soldiers hiding inside opened the city gates. This myth led to the use of the term for a type of malware that is doubtlessly on your parent's computer right now.",
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Octomom (Nadya Suleman)',
      description:
        'In 2009. this woman gave birth to a living set of octuplets. Critics noted that she used in vitro fertilization  despite having 6 children and being on public assistance. In order to support her family, in 2012, she appeared in the adult film Octomom Home Alone.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'A Bro',
      description:
        'A stereotype often associated with college-aged men. The website Code Switch defines them using four characteristics: jockish, dudely, stoner-ish, and preppy. These individuals are also often white, heterosexual, come from privilege, and espouse sexist attitudes.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A Hoarder',
      description:
        "A person who compulsively collects things or refuses to discard possessions, resulting in an unmanageable amount of crap in their home. They are the subject of a popular reality TV show where professionals exploit the person's disorder for entertainment.",
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'William Shatner',
      description:
        'A legendary actor. who portrayed classic characters such as Captain Kirk, TJ Hooker, the guy who saw a plane gremlin on The Twilight Zone, and the Priceline Negotiator: He also has a musical career that began with a spoken word performance of  Elton John’s "Rocket Man."',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'The Gerber Baby',
      description:
        'The logo of an infant-focused food company. Based on the face of a person who grew up to be mystery novelist, Ann Turner Cook, the logo was originally intended to be a sketch outline for a future painting, but has remained the company’s official logo for decades.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'Humpty Dumpty',
      description:
        'A character from a nursery rhyme who falls off a wall and can’t be put back together again. Typically portrayed as a humanoid egg, scholars have speculated that he represents Richard III, the humpback king who was defeated at Bosworth Field by Henry VII.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'The Tiger Mom',
      description:
        'The author of a controversial memoir about her attempt to use Confucian parenting techniques. While she describes some success with strict parenting, she has since argued that her book is about the softening of her style after her daughter rebelled at age 13.',
      category: 'CELEBRITY',
      pointValue: 3
    },
    {
      name: 'Poppin’ Fresh, the Pillsbury Doughboy',
      description:
        'The mascot of a company famous for their re-packaged biscuit ingredients. He has been a staple in their advertising for decades, which usually features him being poked in the belly by a finger and responding by rubbing his stomach and giggling.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'A Drone',
      description:
        'An unmanned aerial vehicle used in military operations that are too dangerous for manned aircraft. Their use is controversial, with critics pointing at their indiscriminant use, such as a 2008 airstrike against a wedding party that killed 47 Afghan civilians.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'Krang',
      description:
        'A fictional supervillain from the Teenage Mutant Ninja Turtles franchise. He is allied with Shredder, who built a mechanical body for him when, following his exile from Dimension X, he was transformed into a brain-like creature with a creaky voice.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Johannes Kepler',
      description:
        'A 17th century German astronomer known for his work on planetary motion. In addition to being the namesake of a NASA space observatory, many earthbound institutions are named after him, mostly recently a blended learning university in Kigali, Rwanda.',
      category: 'HISTORICAL FIGURE',
      pointValue: 4
    },
    {
      name: 'Joe Camel',
      description:
        'The debonair, bipedal ungulate and  mascot for an R.J. Reynolds brand of cigarettes. When internal documents demonstrated that the company was targeting children as future smokers. the character was retired and replaced with a more traditional quadruped in 1997.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'Kim Jong-il',
      description:
        'The former Supreme Leader of the Democratic People\'s Republic of Korea and author of On the Art of the cinema. His family is at the center of an elaborate personality   cult in the so called "Hermit Kingdom." A famous tumblr collected photos of him looking at things.',
      category: 'HISTORICAL FIGURE',
      pointValue: 2
    },
    {
      name: 'Free Willy',
      description:
        "The title character from the 1993 film about a young boy's attempts to rescue a killer whale from its cruel life as an amusement park attraction. At the film's conclusion,  he flees a whaling ship by jumping over a rock embankment and returns to his family.",
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'John Hancock',
      description:
        'A Revolutionary War hero and president of the Second Continental Congress. He was the first member to sign the Declaration of Independence. and his signature was so prominent that his name is now synonymous with signing one’s name on a document.',
      category: 'HISTORICAL FIGURE',
      pointValue: 1
    },
    {
      name: 'Mr. Rogers',
      description:
        'The good—natured host of a children’s show that begins with him singing, "It\'s a wonderful day in the neighborhood,” putting on a sweater and sneakers, and asking the viewers to be his neighbor. Each episode include a trip to the Neighborhood of Make-Believe.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'A Fetus',
      description:
        'The stage of development between embryo and birth. It is sometimes categorized by the presence of all major body organs (though not necessarily functioning), typically around the 11th week of gestation. In humans, it is approximately 1.2" in length from crown to rump.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'Alex Trebek with a mustache',
      description:
        'The host of the quiz show Jeopardy! for thirty years and counting. He has appeared self-deprecatingly as a version of himself in films and TV shows. including Seinfeld and Short Cuts. For the purposes of this card, he still has really great facial hair on his upper lip.',
      category: 'CELEBRITY',
      pointValue: 3
    },
    {
      name: 'Crocodile Dundee',
      description:
        'The title character in a trilogy of fish-out-of-water films about an Australian bushman struggling to find his way in big city America. Played by Paul Hogan, he amously threatens muggers, saying "That‘s not a knife. That’s a knife."',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'Alex Trebek without a mustache',
      description:
        'The host of the quiz show Jeopardy! for thirty years and counting. He began hosting game shows in high school. For purposes of this card, he shaved the iconic facial hair on his upper lip in 2001. In 2008 he wore fake facial hair on his upper lip for April Fools‘ Day.',
      category: 'CELEBRITY',
      pointValue: 3
    },
    {
      name: 'The Kool-Aid Man',
      description:
        'The 6 foot tall, cherry—flavored mascot for a powdery drink mix that is combined with water and sugar. He is famous for making a dramatic entrance when children express thirst by smashing through a brick wall and yelling his catchphrase “Oh yeah!"',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'Lance Armstrong',
      description:
        'A cyclist who won the Tour de France for 7 consecutive years after losing a testicle to cancer. He founded Livestrong, which began the trend of people wearing colorful rubber bracelets. He later admitted to taking performance—enhancing drugs during all of his Tour wins.',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'John Henry',
      description:
        "An American folk hero and “Steel Drivin' Man.” In the myth, he competed against a steam powered hammer to determine who could drill into rock the fastest. He wins the competition, but his heart gives out and he dies before being able to fully celebrate his victory.",
      category: 'HISTORICAL FIGURE',
      pointValue: 2
    },
    {
      name: 'Miss Piggy',
      description:
        'A porcine Muppet and spouse of Kermit the Frog, who she frequently pounces on. A notorious diva and singer, she is modeled on the singer and actress Peggy Lee. Throughout her career, she has been used to symbolize the modern American  woman.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'Tom Selleck’s mustache',
      description:
        'The facial hair of this American actor and 80s style icon. He is most famous for his title role in Magnum, P.I. as well as appearances in films such as Three Men and a Baby and Mr. Baseball. In addition to his upper lip decoration, his signature look included colorful Hawaiian shirts.',
      category: 'CELEBRITY',
      pointValue: 3
    },
    {
      name: 'Roger Ebert',
      description:
        'A critic who popularized film review with his thumbs up, thumbs down system. Late in life, his lower jaw was removed to combat cancer of the salivary glands. He was unable to speak or eat normally, yet continued to write and review films both online and in print.',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'A Close Talker',
      description:
        'A person who stands uncomfortably near a person while speaking. This term was first coined in "The Raincoats," an episode of Seinfeld. In it, Elaine\'s new boyfriend Aaron is described as being one of these, disrupting the personal space of anyone he speaks to.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'Kevin Bacon',
      description:
        'An actor best known for the game based on six degrees of separation that bears his name. e.g. André the Giant and Christopher Guest appeared in The Princess Bride: Christopher Guest and this actor appeared in A Few Good Men; thus Andre the Giant’s number is 2.',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'A Lab Rat',
      description:
        'A rodent used in academic or commercial research, often as a precursor to human trials in the early stages of a project. They are regularly decapitated with scissors. A common trope of early psychology research was to place one in a maze to find a wedge of cheese.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'Yoko Ono',
      description:
        'An avant-garde artist maligned for allegedly breaking up the Beatles. Despite her inability to carry a tune,  many of her songs have topped the dance charts, mostly as remixes. She and John Lennon used their honeymoon to stage bed-ins to protest the Vietnam War.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'A Gerbil',
      description:
        'A small rodent often kept as a pet. Numerous urban legends exist involving this animal and various celebrity anuses.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'The Shark from Jaws',
      description:
        'A man-eating great white that terrorizes the town of Amity Island in a film by Steven Spielberg. Not seen until well into the film, it is so large that Roy Scheider\'s character suggests the crew is "gonna need a bigger boat." It was nicknamed Bruce after Spielberg\'s lawyer.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'A T.Rex',
      description:
        'Meaning "lizard king," this species of bipedal carnivore lived in western North America during the Cretaceous Period. They are the most widely known dinosaur in the world due to their adorably tiny arms and footsteps that vibrate cups of water.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'Colonel Mustard',
      description:
        'A character from the board game Clue (aka Cluedo). He was originally named Yellow, but had his name changed to this condiment instead. In Hasbro‘s latest update, he is now a former football player. In the classic film adaptation, he was played by Martin Mull.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'The Boogeyman',
      description:
        'A creature used by adults to scare children into good behavior. Its description and motivations vary across cultures, but often include kidnapping misbehaving children. Variants of this monster include Latin America’s “Sack Man" and Egypt‘s "Man With Burnt Leg.”',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'Rip Van Winkle',
      description:
        'The protagonist of a Washington Irving short story, who drinks moonshine, goes bowling with ghostly Dutchmen, falls asleep, and awakens decades into the future with a long, scraggly beard. He returns to his village and finds that his wife and friends have all died.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'Your Evil Twin',
      description:
        "A common trope, where the physical duplicate of a character appears. but with inverted values. They are often depicted with subtle alterations, such as Spock's ruthless doppelganger having a goatee. The words above or your name prefixed by the second word are both valid.",
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'Cesar Millan',
      description:
        'Known as The Dog Whisperer, he is a self—taught trainer famous for his TV show, where he goes into homes to deal with especially difficult animals. His methods rely on outdated beliefs about canine social structures, yet his advice is used by dog owners worldwide.',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'A Nutcracker',
      description:
        'A device for cracking hard shells. They can be highly decorative, with individual wooden bodies depicting soldiers or royalty. In these versions, the shell is inserted into the figure’s mouth and a lever is pressed down, which crushes the shell and reveals the sweet, sweet meat inside.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'A Werewolf',
      description:
        'A human who transforms into a hirsute, bloodthirsty creature. Known as chanthropy, this change is often triggered by a full moon. Suspected chanthropes were persecuted in early modern Europe, and are now a staple figure in pop culture and party games.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'A Planeteer',
      description:
        'One of the five teenagers who possess rings that allows them to control Earth, Fire, Wind, Water, or Heart. When their powers combine, they summon the environmental superhero Captain Planet to help fight villains such as Hoggish Greedly and Verminous Skumm.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'Bob Ross',
      description:
        'A painter and TV host, who starred in PBS\'s The Joy of Painting. He taught viewers how to paint "fluffy white clouds" and "happy little trees" using wet on wet painting. He supposedly hated his white-guy afro and kept it only for marketing purposes.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'You',
      description:
        'The person reading this card. The word above or your actual name are both valid.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'Gene Wilder',
      description:
        'The stage name of Jerome Silberman, who is best known for his collaboration with Mel Brooks in Blazing Saddles, The Producers, and other films. An image of him in Willy Wonka & the Chocolate Factory is used in the popular Condescending Wonka caption online.',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'Honey Boo Boo',
      description:
        'A child beauty pageant contestant and star of a TLC reality show. She is known for her southern drawl, love of ”Go Go Juice" (a blend of Mountain Dew and Red Bull), and open—minded attitude, having once said of her uncle, "Ain‘t nothing wrong with bein\' a little gay.',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'A Nihilist',
      description:
        'Popularly. someone who believes in nothing. As a philosophical concept, a person who believes that major aspects of life or human inquiry are either not valid or do not exist. They are often portrayed as effete intellectuals, such as the wimpy German thugs in The Big Lebowski.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A Redshirt',
      description:
        'A stock, semi-anonymous character who is introduced only to die soon after. The term derives from the costumes worn by extras in the original Star Trek television series who would accompany the lead actors to a hostile situation and be killed in order to heighten tension.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'Phineas Gage',
      description:
        'A 19th century railroad worker and frequent citation in undergraduate psychology papers. His left frontal lobe was severely damaged following an explosion that drove an iron spike through his skull. The damage resulted in a radical change in his personality and behavior.',
      category: 'HISTORICAL FIGURE',
      pointValue: 4
    },
    {
      name: 'David Attenborough',
      description:
        'Widely known as the voice of nature documentaries, he is considered a national treasure in the UK (though he rejects the term). He is so beloved that his replacement with Sigourney Weaver as the narrator in the American version of Planet Earth caused protests online.',
      category: 'CELEBRITY',
      pointValue: 3
    },
    {
      name: 'Yorick',
      description:
        'A character whose remains are dug up in Shakespeare’s Hamlet. He provokes a lengthy rumination on the ravages of time by Hamlet, leading to the most characteristic image from the play: the prince holding this character‘s skull aloft while delivering a monologue.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 4
    },
    {
      name: 'Ricardo Montalbán',
      description:
        'A Mexican actor who played Khan Noonien Singh in the original Star Trek series and Star Trek II: The Wrath of Khan. He was also known for his endorsement of the Chrysler Cérdoba, where he praised the "tastefulness of its appearance” and its "soft Corinthian leather."',
      category: 'CELEBRITY',
      pointValue: 4
    },
    {
      name: 'A Man From Nantucket',
      description:
        'A character from a famous limerick that references an island 30 miles south of Cape Cod. The limerick describes this person as being particularly well-endowed, with the most popular rhyming couplet being "Whose dick was so long he could suck it."',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Ouroboros',
      description:
        'An ancient symbol that represents the cyclical nature of existence, eternal return, and rebirth. Its first known usage was in an Ancient Egyptian source. but appears across many cultures. It is most frequently depicted as a snake or serpent eating its own tail.',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: "Lot's Wife",
      description:
        'A Biblical figure who was spared from God’s divine judgment against the cities of Sodom and Gomorrah. As the cities were being destroyed by fire and brimstone, her family was told by angels "look not behind thee." She did and was transformed into a pillar of salt.',
      category: 'HISTORICAL FIGURE',
      pointValue: 4
    },

    {
      name: 'William Henry Harrison',
      description:
        'The 9th President of the US, whose most notable accomplishment in office was dying 30 days. 12 hours, and 30 minutes into his term. The cause of death was pneumonia, which doctors failed to cure with a combination of opium, leeches, and Virginia snakeweed.',
      category: 'HISTORICAL FIGURE',
      pointValue: 4
    },
    {
      name: 'A Horse-Sized Duck',
      description:
        'From a hypothetical scenario that poses the question of who would win in a fight: a single equine—sized fowl or fivescore fowl—sized equines. The question was made famous in a 2012 Reddit AMA with President Barack Obama. The comment received over 1,000 upvotes.',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: 'Baby Einstein',
      description:
        'The German theoretical physicist and Nobel Prize winner. as an infant. He devised the "world\'s most famous quation," his mass—energy formula E=mc2. This could also refer to a series of potentially ineffective educational products designed for infants.',
      category: 'HISTORICAL FIGURE',
      pointValue: 4
    },
    {
      name: 'Jareth, the Goblin King',
      description:
        'The villain from the 1986 film Labyrinth by Jim Henson. Played by David Bowie., a 40—year-old Bowie kidnaps the baby brother of a teenage Jennifer Connelly, who he then attempts to woo with his crystal orbs, giant codpiece. and teased-out blonde bangs.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 4
    },
    {
      name: 'Tycho Brahe',
      description:
        'A Danish noble and astronomer. At 20, he lost part of his nose in a duel and wore a replacement made of silver and gold. He owned a pet elk and hired a psychic dwarf named Jepp. He is rumored to have died from refusing to leave a banquet to urinate, because etiquette.',
      category: 'HISTORICAL FIGURE',
      pointValue: 4
    },
    {
      name: 'A Dungeon Master',
      description:
        'The organizer and storyteller in a fantasy roleplaying campaign, most often associated with D&D. They manage all aspects of a game other than the direct actions of the player characters, and are commonly seen rolling 20-sided dice behind a protective cardboard screen.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A dog doing yoga',
      description:
        'A canine who practices the Indian tradition of physical, mental, and spiritual transformation. In western cultures this practice is most often associated with physical exercise focused on stretching and the assumption of physical postures such as eagle and tree.',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: 'A Streaker',
      description:
        'A person who strips naked and runs through a public space, either for fun, on a dare, or as a political statement. The first recorded instance was in 1799, when a man was bet 10 guineas to run naked from Cornhill to Cheapside in London.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'Sting',
      description:
        'The stage name of Gordon Sumner, former member of The Police and solo musician. Late in his career, he abandoned his rock sound for more mellow instruments like the sitar and lute.',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'Bartleby the Scrivener',
      description:
        'The title character from a short story by Herman Melville, who is employed to copy legal documents by hand. After gaining a reputation as a hard worker. he unexpectedly refuses to do any further work, instead repeating "I would prefer not to" to all requests.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 4
    },
    {
      name: 'Dramatic Chipmunk',
      description:
        'The subject of an often imitated, never duplicated YouTube video of a prairie dog turning its head while the camera zooms in and the music from Young Frankenstein plays. The clip is frequently modified to show the prairie dog wearing costumes or being caught viewing elicit material.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Your High School Gym Teacher',
      description:
        'The P.E. instructor of the person reading this card. The word above or the actual name of your real-life P.E. instructor are both valid.',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: 'Grape Lady',
      description:
        'A newscaster who falls from a platform after attempting to cheat during a light—hearted segment at Chateau Elan Winery. After falling out of frame, she is heard off camera making strange noises and saying, "OW 0W OW...STOP STOP...OOH OOH OOH...I can’t breathe.”',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Siri',
      description:
        'The name of Apple‘s personal assistant on iOS operation system that interacts with users through natural language. It has spawned a popular Tumblr consisting of ironic interactions, such as the search "I have a gambling addiction” returning a list of nearby casinos.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Harry Houdini',
      description:
        'A magician, who in his most famous trick, the Chinese Water Torture Cell, escaped from a water-filled tank while he was hanging upside-down. He was also known for debunking psychics and mediums. a tradition carried on to this day by professional magicians.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'The Sorcerer’s Apprentice',
      description:
        'An assistant to a wizard in Fantasia. Played by Mickey Mouse, he enchants a broom to fetch water. Unable to control the magic, a flood ensues. Each time he attempts to destroy the broom to end the spell, it splits and continues its work at double pace.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'The Dread Pirate Roberts',
      description:
        'The founder of the Silk Road, the "amazon.com of illegal drugs." His identity remains a mystery, though the name suggests it belongs to multiple people, since it was lifted from a character in the The Princess Bride, where a mythical brigand is actually a series of individuals.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Koko',
      description:
        'A gorilla who was taught by her trainer to sign over 1,000 words of GSL (Gorilla Sign Language) and allegedly could understand 2,000 words of English. She chose a mate from a series of videotapes in an early form of online dating, though they have not yet mated.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'The 800 Pound Gorilla',
      description:
        'An idiom that describes a primate so powerful and heavy that it can ignore the rights of others. The original source is a riddle that asks where it sits (A: Anywhere it wants.) This term is commonly confused with a similar expression about an elephant.',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: 'The Boy Who Cried Wolf',
      description:
        'A shepherd from Aesop‘s Fables who tricked villagers by raising false alarm about his sheep being attacked. When a real threat occurs, the villagers do not respond and the flock is devoured. The fable appears to have little effect on the amount children lie.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 4
    },
    {
      name: 'A Civil War Reenactor',
      description:
        'A "living historian." who spends their free time roleplaying as a Confederate or Union soldier in America’s bloodiest war. A participant typically falls into one of three classes, from least to most authentic (and unbearable): farb, mainstream, and progressive.',
      category: 'HISTORICAL FIGURE',
      pointValue: 4
    },
    {
      name: 'Charizard',
      description:
        "A species of Pokémon that resembles an orange dragon and is the evolved form of Charmeleon and the final evolution of Charmander. Despite its appearance, it is a fire/flying type, NOT a dragon type. Its Japanese name is Lizardon (U'lf — F7).",
      category: 'FICTIONAL CHARACTER',
      pointValue: 4
    },
    {
      name: 'Roland the Farter, Flatulist to the King',
      description:
        'A 12th century court jester to Henry II. In exchange for his services ("he was obliged to perform every year on the birthday of our Lord before his master, one jump. and a whistle, and one fart"), he received a manor and 30 acres of land in the county of Suffolk.',
      category: 'HISTORICAL FIGURE',
      pointValue: 4
    },
    {
      name: 'Mia Hamm',
      description:
        'A retired professional soccer player who helped lead America’s team to their 1999 World Cup win. The iconic photo of her in a sports bra sliding on her knees. yelling with her fists clenched in celebration, is actually of her teammate Brandi Chastain.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Dr. Quinn, Medicine Woman',
      description:
        'The title character of a 90s TV show about a 19th century aristocrat who sets up a clinic in Colorado Springs. Played by Jane Seymour, she introduces modern healing practices to the town‘s locals as well as to her rugged mountain man Byron Sully.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Skeletor',
      description:
        'The main villain in the Masters of the Universe fantasy world. He is the arch nemesis of He-Man and is typically shows with a blue humanoid body, bare skull, and purple hood. His goal is to learn the secrets of Castle Grayskull and use them to conquer the land of Eternia.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Montezuma',
      description:
        'The 9th tlatoani of Tenochtitlan and ruler of the Aztec Triple Alliance. During their first contact with Europeans, he was killed by conquistador Hernan Cortés’s men as the fled his capital. His “revenge" is a euphemism for contracting traveler\'s diarrhea in Mexico.',
      category: 'HISTORICAL FIGURE',
      pointValue: 2
    },
    {
      name: 'Captain Ahab',
      description:
        "The monomaniacal, peg-Iegged commander of the Pequod whaleship in Herman Melville's novel Moby Dick. His quest for vengeance against the white whale drives him mad, leading to the death of his entire crew except Ishmael, the  novel‘s narrator.",
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'A Damsel in Distress',
      description:
        'A sexist archetype in literature, film, and games of a helpless woman that must be saved by a male character, such as Princess Peach in the Mario franchise. A recent YouTube series by Feminist Frequency charted the plot device throughout the history of gaming.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A Merman',
      description:
        'The male version of the mythological creature that is a woman from the waist up but has a fish tail in place of legs. Their behaviors and abilities range across cultures, and include having green teeth, the ability to cure illnesses, seducing women, and holding tridents.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Clippy',
      description:
        'The nickname of the Office Assistant in Microsoft Office, who appears as the metal object used to hold sheets of paper together. He would “tap" on the monitor to get your attention. Supposedly, Microsoft\'s internal name for it was TFC (The Fucking Clown).',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'The Walrus',
      description:
        'The character in a song by the Beatles from their album Magical Mystery Tour. It is a reference to a Lewis Carroll’s poem, also about a flippered marine mammal. The lyrics that follow, "Goo Goo Ga Joob,“ possibly stated by the character, were drawn from Finnegan’s Wake.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Betsy Ross',
      description:
        'The person widely believed to have sewn the first American flag for George Washington. Research by the National Museum of American History suggests that this story did not enter popular culture until its 1876 centennial celebration, casting doubt on the veracity of this claim.',
      category: 'HISTORICAL FIGURE',
      pointValue: 2
    },
    {
      name: 'Frogger',
      description:
        'The title amphibian from a classic 80s arcade game. where you cross heavy traffic and hitch a ride on logs to cross a treacherous river. A real-life version was played with a Roomba decorated as the character. It made it across a highway 10 times before being flattened by an SUV.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Dr. Mario',
      description:
        'This plumber-turned-pharmacist and title character of this Nintendo puzzle series. Clearly inspired by Tetris, the player organizes pills by color, ostensibly to eradicate viruses and definitely not to teach children how to raid their parent’s medicine cabinet.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'An Amish',
      description:
        'A member of a Christian sect from PA Dutch country. They are known for wearing traditional dress and eschewing modern technology. Some practice Rumspringa, where restrictions are lifted for adolescents seeking to experience the temptations of the outside world.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'Conjoined Twins',
      description:
        'A rare occurrence where identical fetuses are joined together in utero.Classifications are based on where their bodies are joined, e.g. syncephalus (one head, single face, four ears, two bodies), cephalothoracopagus (fused bodies, two faces facing in opposite directions).',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A Troll Doll',
      description:
        'A plastic toy depicting a being with distinctive tall, bright, and fuzzy hair. They were the subject of fads throughout the 70s, 80s, and 90s. The original version was carved by a poor Danish fisherman and woodcutter as a Christmas gift to his daughter.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Dikembe Mutombo',
      description:
        'A 7\'2" Congolese-American basketball player best known for his incredibly deep voice, thick accent, and penchant for waving his index finger at opponents after stuffing them at the rim. He once described the restaurant Pasta Pasta as being "named after pasta.”',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Comic Book Guy',
      description:
        'The overweight owner of The Android\'s Dungeon & Baseball Card Shop on The Simpsons. His character has a master\'s degree in folklore mythology—he translated The Lord of the Rings into Klingon—and is known for his catchphrase "Worst [blank] ever."',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'A Dead Horse',
      description:
        'Useless to beat and effectively unrideable. this deceased animal is used in an idiom to explain that a point, once made. does not need to be re-stated. Similar the phrase, "To slay the slain." This animal is substituted with a dog in other parts of the English speaking world.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'Lady Gaga’s meat dress',
      description:
        'A piece of raw beef worn by "Mother Monster” to the 2010 MTV Video Music Awards. The pop diva stated that she wore the item to highlight her distaste for the military’s don’t-ask-don’t-tell policy. The item was preserved by a taxidermist, who turned it into jerky.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Kenny G',
      description:
        'A smooth jazz saxophonist, who is universally reviled by jazz aficionados while simultaneously being one of the best selling recording artists of all time. Using circular breathing, he set a world record for longest note recorded by holding an E-ﬂat for 45 minutes and 47 seconds.',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'The Invisible Man',
      description:
        'The title of both Ralph Ellison‘s novel about the struggle of black intellectuals in early 20th century America and HG. Well’s sci—fi novella about a avaricious, power-mad man who is able to alter his body’s refractive index to reflect no light.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Hal-9OOO',
      description:
        'The sentient computer from Stanley Kubrick\'s 2001: A Space Odyssey. Initially a helpful part of the ship, it eventually turns on the crew, killing Dr. Poole before being disconnected by Dave. As its mind goes, it sings "Daisy Bell” while pleading for its life.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Solange Knowles',
      description:
        "A singer, temporary member of Destiny's Child. and sister of Beyoncé. In 2014, TMZ published security footage of her physically assaulting her brother-in-law. Jay-Z, who along with Beyoncé, did not retaliate. The cause of her outburst remains unknown.",
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Carrie',
      description:
        'The title character of a horror film based on a Stephen King story. She manifests telekinetic abilities after being bullied about her first period. In the film’s climax, she is doused in an upended bucket of pig‘s blood at prom, leading her to kill most of the attendees in an electrical fire.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'An Immoveable Object',
      description:
        'One half of a famous paradox that asks what would happen if a thing that cannot be stopped encounters a thing that cannot be moved.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'A Pug',
      description:
        'dog breed. Generations of inbreeding have led to compact breathing passages that leave them unable to regulate their body temperature by panting. Many airlines have restricted their transport due to in-air deaths.',
      category: 'CET CETERA',
      pointValue: 2
    },
    {
      name: 'Prancer',
      description:
        'One of the flying reindeer that pulls Santa\'s sleigh in “The Night Before Christmas." His name is also used in a fitness method and internet meme by Joanna Rohrback that is a "springy, rhythmic way of moving forward, similar to a horse’s gait and ideally induced by elation"',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Chairy',
      description:
        "An iconic characters from Pee—wee‘s Playhouse, a live—action children's show created by and starring Paul Reubens. She is a talking and singing piece of blue furniture with large eyes and a mouth between her cushions. She has a weirdly flirtatious relationship with Pee-wee.",
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'The elephant that Thomas Edison electrocuted (Topsy)',
      description:
        'A pachyderm that was smuggled into the US to perform in the circus. After killing her trainer, she was publicly executed by being fed carrots laced with cyanide and receiving a 6.600-volt AC current. The event was captured on film and used as a promotional stunt.',
      category: 'HISTORICAL FIGURE',
      pointValue: 4
    },
    {
      name: 'David Blaine',
      description:
        'A street magician known for his sleight of hand, silly endurance challenges, and being kind a douche. His stunts include getting buried for a long time, standing on a pole for a long time, holding his breath for a long time, and freaking Ricky Gervais out by stabbing himself.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Flappy Bird',
      description:
        'The winged title character from an iOS game where you navigate through a set of pipes. The creator removed the game from the App Store, despite earning $50,000 per day, in the wake of criticism over alleged plagiarism of graphics and gameplay mechanics.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'The Soup Nazi',
      description:
        'A minor character from the sitcom Seinfeld. He exerts strict control over his restaurant‘s customers and practices price discrimination over the sale of his broth-based food. He was inspired by Al Yeganeh, a New York City chef, who famously took offense at the moniker.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'A Rat King',
      description:
        'A creature comprised of multiple rodents knotted at the tail, while specimens exist in museums of curiosities, it is unlikely to ever have existed. It is also the name of a character from the Teenage Mutant Ninja Turtles franchise who exerts a telepathic influence over rodents.',
      category: 'ET CETERA',
      pointValue: 3
    },

    {
      name: 'An Unstoppable Force',
      description:
        'One half of a famous paradox that asks what would happen if a thing that cannot be stopped encounters a thing that cannot be moved.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'Icarus',
      description:
        'An mythical figure in Ancient Greece, who along with his father Daedalus, escape from the Labyrinth with wax wings. He is    warned not to fly too high or too low. Ignoring the warning, the sun melts the wax and he plummets into the sea.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'A Juggalo',
      description:
        'A fan of the Insane Clown Posse. These individuals gather in the woods each year for an annual "Gathering." where they celebrate their shared culture of wrestling, drinking Faygo soda, painting their faces. and listening to horrible, horrible, horrible music.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'A Doomsday Prepper',
      description:
        'The subject of a reality TV show, these individuals plan for their survival following the breakdown of civilization. They likely have a cache of weapons, canned goods for making "bunker stew,” and a belief that drinking one’s own purified urine is not that big of a deal.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'David Hasselhoff',
      description:
        'An actor and musician who starred in Knight Rider and Baywatch. His daughter once recorded a video of him, shirtless and drunk, trying to eat a hamburger on the ﬂoor of a Las Vegas hotel room, while she lectured him on the importance of  sobriety. Germans love him.',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'Marie Antoinette',
      description:
        'The Queen of France, who was guillotined during the French Revolution. Her last words were "Pardon me sir, I meant not to do it.” after stepping on her executioner\'s foot. There is no evidence that she spoke the phrase most associated with her. "Let them eat cake."',
      category: 'HISTORICAL FIGURE',
      pointValue: 2
    },
    {
      name: 'Dolph Lundgren',
      description:
        "An actor, director, martial artist. and chemical engineer. He played Ivan Drago in Rocky IV and He-Man opposite Frank Langella. After earning his masters degree, he turned down a Fulbright Scholarship to MIT to become Grace Jones's bodyguard.",
      category: 'CELEBRITY',
      pointValue: 3
    },
    {
      name: 'Your Own Shadow',
      description:
        "The two dimensional silhouette caused by your body blocking a light source. Peter Pan's famously ran away from him. Some particularly cowardly people are afraid of them.",
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'A Flautist',
      description:
        'A musician who performs using a reedless wind instrument. First used in 1860. this term is sometimes considered dated among players of the instrument. Notable performers include Sir James Galway, Jethro Tull‘s Ian Anderson, and Michelle Flaherty from American Pie.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'Greg Louganis',
      description:
        'A diver who hit his head on the board during the 1988 Olympic Games. It was later revealed that he was HIV positive at the time, though there was no chance of other athletes contracting the disease from the chlorinated water. Mario Lopez played him in a 1997 biopic.',
      category: 'CELEBRITY',
      pointValue: 3
    },
    {
      name: 'A Pufferfish',
      description:
        'One of the most infamous and deadly culinary dishes. Known as Fugu in Japan, its preparation is strictly controlled, because its liver, ovaries, and eyes contain fatal levels of tetrodotoxin. These areas must be carefully removed to avoid asphyxiation and death.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'Ms. Pac-Man',
      description:
        'The hero of a 1982 arcade game, who navigates mazes and eats pellets, power pellets. and fruit while avoiding ghosts. One of gaming‘s first female protagonists, the only visible difference between her and her male counterpart is a pixelated red bow.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Pharell’s hat',
      description:
        'The infamous head covering of the rapper, producer, and guest performer on "Blurred Lines.” Created for Vivienne Westwood\'s 1982-1983 collection, it was inspired by "Peruvian women wearing bowler hats, full skirts, dancing with their babies tied on their back."',
      category: 'CELEBRITY',
      pointValue: 3
    },
    {
      name: 'A Blue Man',
      description:
        'A member of a music collective starring a trio of humanoids played by musicians wearing bald caps and makeup. To meet demand, dozens of new performers have been recruited, a process satirized on the show Arrested Development with the would-be recruit Tobias Filnke.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'A Nigerian Prince',
      description:
        'A West African practitioner of a "419 scam," otherwise known as advance—fee fraud. Victims receive email messages from a person claiming to be displaced royalty who needs their help transferring funds out of their country in exchange for future payment.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'Steve Irwin, the Crocodile Hunter',
      description:
        'An Australian conservationist and media personality known for his khaki shorts, accent, and trademark expression "Crikey.” He was killed in 2006 by a stingray striking him in his lungs and heart with its barb during the filming of a documentary titled Ocean‘s Deadliest.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'An Eager Beaver',
      description:
        'An idiom for an extremely enthusiastic or hard working person that supposedly originated among Canadian soldiers in World War II. The term derives from the aquatic, dam-building rodents, who terraformed much of North America with their wooden tructures.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'Punxsutawney Phil',
      description:
        'A clairvoyant Pennsylvania groundhog, who uses the appearance of his own shadow to predict whether spring will arrive early or whether there will be six more weeks of winter. His predictions have been correct 39% of the time, less than random guessing.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Keyboard Cat',
      description:
        'The internet moniker of Fatso, a feline wearing a blue shirt and being manipulated to look like she was playing an instrument. The performance dates back to 1984, meaning that while she is Iong-dead, she continues to "play off" millions.',
      category: 'CELEBRITY',
      pointValue: 3
    },
    {
      name: 'Dolly the Sheep',
      description:
        'The first mammal to be cloned from an adult stem cell. Taken from a mammary gland, she proved that a cell from a specific body part could be used to replicate a new individual. She died at 6.5 years old of progressive lung disease, which is fairly common to her species.',
      category: 'HISTORICAL FIGURE',
      pointValue: 2
    },
    {
      name: 'Benjamin Button',
      description:
        'The title character who ages in reverse from a short story by F. Scott Fitzgerald and film adaptation by David Fincher. He is born as a 70-year-old man capable of speech and as time passes, grows younger instead of older.',
      category: 'FICTIONAL',
      pointValue: 2
    },
    {
      name: 'Aaron Burr',
      description:
        'The 3rd Vice President of the US, who shot Alexander Hamilton in a duel. He was famously the answer to question posed in a 1993 commercial directed by Michael Bay for the Got Milk? campaign, where a historian is unable to answer because his mouth is clogged with peanut butter.',
      category: 'HISTORICAL FIGURE',
      pointValue: 2
    },
    {
      name: 'Nicolas Cage',
      description:
        'An actor known for his range, prolific work ethic, and self described "Nouveau Shamanic” acting style. Appearing in such films as Moonstruck, Adaptation, and Bad Lieutenant: Port of Call New Orleans, he is known for his manic, non-naturalistic performances.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Quetzalcoatl',
      description:
        'An ancient Mesoamerican god and flying reptile whose name means "feathered serpent.” It has been claimed since the 16th century that Aztec leader Montezuma II believed the appearance of Spanish conquistador Herna’n Cortes signaled his return.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'Bees!',
      description:
        'Flying, communal insects that are found on every continent except Antarctica. They often live in large hives knows as colonies, with a queen, workers, and drones. Many species of these produce honey, which humans harvest in a series of hives known as an apiary.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'Carlton Banks',
      description:
        "The Fresh Prince of BeI-Air's cousin and Uncle Phil’s heir. Played by Alfonso Ribeiro. he is depicted as a preppy young Republican. who is probably best known for his spazzy dance to Tom Jones's song \"It's Not Unusual\" and being slapped on the back of the head.",
      category: 'FICTIONAL CHARACTER',
      pointValue: 3
    },
    {
      name: 'Gizmo',
      description:
        'A fuzzy pet from the Gremlins horror-comedy franchise. His owners were implored by Mr. Wing to follow three simple rules in caring for their Mogwai: (1) Do not expose him to bright light; (2) Do not get him wet; and (3) Do not feed him after midnight.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 3
    },
    {
      name: 'Greedo',
      description:
        'A bounty hunter from the Star Wars franchise. In the original 1977 version of his confrontation with Han Solo at Chalmun\'s Spaceport Cantina. Han shoots and kills him before he fires a shot. In the film‘s rerelease, he takes the first shot and misses, leading to the meme "Han shot first.”',
      category: 'FICTIONAL CHARACTER',
      pointValue: 3
    },
    {
      name: 'A Freckleface',
      description:
        'A schoolyard taunt that calls attention to a person with a fair complexion that possesses clusters of darker spots comprised of concentrated melanin on the front surface of their head. The condition is exacerbated by exposure to the sun.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'Stefon',
      description:
        "A guest correspondent on SNL‘s Weekend Update. He recommends New York's hottest clubs, followed by a description of their outlandish patrons like Black George Washington, sunburned drifters with soap sud beards, sherpas, and guys with afros in graduation caps.",
      category: 'FICTIONAL CHARACTER',
      pointValue: 3
    },
    {
      name: 'The Last Unicorn',
      description:
        'The single-horned title character from an 805 animated film, who discovers that she is the only remaining member of her species. Voiced by Mia Farrow. she is pursued by a creature called the Red Bull. Defeating him, she returns her kind back into the world.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 4
    },
    {
      name: 'A Highlander',
      description:
        'An immortal, broadsword-wielding character from an 805 action film. The film\'s tagline, "There can be only one." refers to a contest to gain each other’s power and knowledge through defeating and then beheading their rivals in a duel—a process referred to as Quickening.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Rasputin',
      description:
        'A Russian occultist and advisor to Tsar Nicolas II, who wielded extraordinary power over the Romanov family. He was assassinated by a group of nobles in 1916, and his body was recovered from the Neva River having been poisoned, shot, beaten. and drowned.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'Dr. Zaius',
      description:
        'An orangutan from the Planet of the Apes. Living in the East Coast Ape City during the 40th century, he paradoxically serves as Minister of Science and Chief Defender of the Faith. He was immortalized in a song from The Simpsons that parodies Falco‘s "Rock Me Amadeus."',
      category: 'FICTIONAL CHARACTER',
      pointValue: 3
    },
    {
      name: 'Marcel Marceau',
      description:
        'The most famous mime in history, who frequently performed under the name Bip the Clown. He referred to his craft as "the art of silence," creating many of the quintessential mime performances, including Walking in the Wind and Trapped in a Box.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'A Honey Badger',
      description:
        'An animal, native to South Africa and related to the weasel, made popular by a YouTube video narrated by "Randall." This animal is now almost always described as "Badass" and "Cra-zy." Furthermore, it’s often noted that this animal don’t care or really doesn‘t give a shit.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'Sneezing Baby Panda',
      description:
        'The subject of a viral video first uploaded on YouTube in 2006 and emblematic of cute culture. It stars a mother and infant from the fuzzy, bear-Iike species. The infant expels air from its nose to the surprise of the mother. The video has been viewed more than 200 million times.',
      category: 'CELEBRITY',
      pointValue: 3
    },
    {
      name: 'Ham',
      description:
        'One of Noah’s sons from the Hebrew Bible, who was allegedly cursed in the Book of Genesis for seeing "the nakedness of his father" after Noah had passed out drunk in a tent. Because his name translates to black or burnt, this curse was later used to explain dark skin pigmentation.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'Archimedes',
      description:
        'most famous for determining the volume of objects with irregular shapes. The legend is that he solved the problem after noticing the level of the water change during a bath. He sprung out naked and took to the streets shouting "Eureka!"',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'The Earl of Sandwich',
      description:
        'The title of John Montagu, the 18th century British noble who invented using two slices of bread as a wrapper for food. The legend is that he was an avid gambler who did not have time for meals between card games, so would have servants bring him meat between slices of bread.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'Carl Sagan',
      description:
        'An astronomer and public intellectual best known for hosting the PBS series Cosmos. He is easily identified by his strange vocal delivery of words like "billions." He was also responsible for curating the Pioneer plaque and the Golden Record for the Voyager spacecraft.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'Harriet Tubman',
      description:
        'An escaped slave who became a prominent abolitionist and spy during the Civil War. She rescued more than 70 slaves with the help of the Underground Railroad, earning her the nickname "Moses." Later in her life she became a prominent figure in the suffrage movement.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'Mrs. O’Leary’s Cow',
      description:
        'The farm animal blamed for the Great Chicago Fire of 1871, who allegedly knocked over a lantern while being milked. The bovine and its owner were posthumously exonerated, though not before inspiring Brian Wilson to write a song about its pyrokinetic abilities.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'Sisyphus',
      description:
        'An Ancient Greek king who Zeus punished for his hubris by forcing him to roll a boulder up a hill, only to see it roll back down and be forced to repeat this process endlessly. The myth of his struggle was used for philosophical purposes by Albert Camus.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'Archduke Franz Ferdinand',
      description:
        'The presumptive heir to the Austro-Hungarian Empire until his assassination in 1914. This acted as the catalyst for the beginning of World War I. He was an avid hunter, keeping a diary of nearly 300,000 kills—100,000 of which were displayed at his castle in Konopisté.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'A Mall Santa',
      description:
        'In the weeks leading up to Christmas, shopping complexes often employ this person to play a fat, jolly, gift—giving figure. A "grotto" is usually set up where children can pose for photographs while sitting on his lap and requesting presents.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'A Bassoonist',
      description:
        "A person who plays a large double reeded woodwind. Despite its warm, dark tone, it is often considered one of the most obscure instruments in the modern orchestra. Among its most famous passages is the Grandfather's Theme in Sergei Prokofiev's Peter and the Wolf.",
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'John Philip Sousa',
      description:
        'A composer and conductor known as "The March King.” He created many marches still in use today, such as "The Stars and Stripes Forever." He also designed a large brass instrument that wraps around the body of the musician, which he named after himself.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'The Stay Puft Marshmallow Man',
      description:
        'A monster from the Ghostbusters franchise made of spongy candy and wearing a sailor hat and red neckerchief as he rampages through New York. Dan Aykroyd described him as "harmless and puff and cute, but given the right circumstances, everything can become evil."',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'A Chimney Sweep',
      description:
        'A member of an old timey profession who cleared ash and soot from the area that provides ventilation for a fireplace. This practice once involved significant child labor, since they were the only ones small enough to fit into the space. Most began their training at age six.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'She-Hulk',
      description:
        'A superhero from the Marvel Comics universe, who gained her powers after receiving a blood transfusion from her cousin. Dr. Bruce Banner. Like him, she transforms into a green, raging creature. Unlike him, she is able to retain her reason and personality while doing so.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 3
    },
    {
      name: 'Guy who threw shoes at George W. Bush',
      description:
        'A journalist who shouted "This is a farewell kiss from the Iraqi people, you dog" and hurled his footwear at the 43rd US president, who narrowly avoided the projectiles by ducking under his podium. A copper statue of the footwear was erected in Tikrit to commemorate the event.',
      category: 'CELEBRITY',
      pointValue: 3
    },
    {
      name: 'Joan of Arc',
      description:
        'The Maid of Orléans and 15th century martyr who claimed God instructed her to take back France from the English. After predicting several military outcomes, she was given a substantial role in strategic decision-making. She was eventually captured and burned at the stake.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Area Man',
      description:
        'A stock character in banal headlines from The Onion. He believes, for instance, that his "Intelligence Probably Just Too Intimidating For Most Women," that he “Could Eat," and that he is a "Passionate Defender Of What He Imagines Constitution To Be."',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: 'Schrodinger’s Cat',
      description:
        'A thought experiment where this feline is both alive and dead due to quantum entanglement. It was originally used to critique an interpretation of quantum mechanics, but now appears often in popular culture, ranging from A Serious Man to Yu-Gi-Oh! GX.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'Jack Skellington',
      description:
        'The Pumpkin King of Halloween Town from the film The Nightmare Before Christmas. He organizes all Halloween festivities and one year becomes obsessed with taking over Christmas as well. He appears as a gangly skeleton dressed in a pin-striped suit and bat bow tie.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Kindergarten Cop',
      description:
        'The title character from a 1990 comedy about a detective who goes undercover at an elementary school and discovers his love of teaching. Played by Arnold Schwarzenegger, the film is famous for the line "It‘s not a tumor!" which he delivers in his thick Austrian accent.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Fabio',
      description:
        "A long-haired Italian model who posed for countless romance novel covers. He entered the realm of seIf—parody as the spokesman for I Can’t Believe It's Not Butter. He also released an album of soliloquies on love and killed a seagull with his face while riding a roller coaster.",
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'Jiro',
      description:
        'A Japanese sushi master and subject of a 2011 documentary bearing his name. His 10-seat bar is one of the most difficult restaurants in the world to get a reservation, despite the 20-course tasting menu costing ¥30,000 (nearly $300) and being located in a Tokyo subway station.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'David Caruso',
      description:
        'An actor best known as Lieutenant Horatio Caine on the CBS series CSI: Miami. At the beginning of each show, he delivers a quippy one—liner while simultaneously putting on his trademark sunglasses before the show cuts to its theme song, "Won’t Get Fooled Again."',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Joey Chestnut',
      description:
        'A competitive eater best known for dethroning Kobayashi as the world’s top hot dog eater by using Kobayashi’s own strategies against him. As of 2014. he holds the world record of eating 69 hot dogs and buns (HDB). He also holds a similar record for deep fried asparagus.',
      category: 'CELEBRITY',
      pointValue: 3
    },
    {
      name: '8 Maids-a-Milking',
      description:
        'An octet that appears in the song "The Twelve Days of Christmas,” an English Christmas carol that lists a series of gifts given by "my true love” on each of those days. These individuals, who tend to dairy cows, are first presented on the eighth day of Christmas.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A Boss',
      description:
        'An internet catchphrase that signals a person being like one of these, normally used after completing an activity with particular skill. The term originated in a song by Slim Thug and was featured in a subsequent parody version from the comedy group The Lonely Island.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'Xena, Warrior Princess',
      description:
        'The title character of the cult classic TV show starring New Zealand actor Lucy Lawless. The show was a spinoff of Hercules: The Legendary Journeys and featured her weekly adventures and pursuit of the “greater good" in a mythological version of Ancient Greece.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Ruth Bader Ginsburg',
      description:
        'A Supreme Court Justice known for her advocacy for women’s rights and collection ofjabots, a lace neck ruffle. She has a fervid online following, with tumblrs dedicated to images of her with captions such as "Notorious" and "All them fives need to listen when a ten is talking."',
      category: 'HISTORICAL FIGURE',
      pointValue: 4
    },
    {
      name: 'Grimace',
      description:
        'Initially a villain in the McDonaldland universe, this purple monster was retconned as a loveable hero. He also appears in a meme featuring a crudely drawn version posing seductively and asking Ronald McDonald if he wants some "McNuggies."',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'Banksy',
      description:
        'The pseudonym of a mysterious UK graffiti artist. His work uses stencils to depict satirical characters, often interacting with the environment. Though nominated for an Academy Award as a documentary, his film Exit Through the Gift Shop is now widely accepted as a hoax.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'All the single ladies',
      description:
        'Every woman who is either unmarried or not involved in a long-term relationship, as described in Beyoncé\'s 2008 song. In the song, she laments the inability of men to propose marriage, and suggests that "if you like it then you should put a ring on it."',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'A dingo',
      description:
        'A free-ranging dog found in Australia. In 1980, one killed the baby of Lindy Chamberlain. Ms. Chamberlin\'s statement, that the animal "ate my baby," was popularized by Meryl Streep in the 1988 film Evil Angels. The line remains widely parodied to this day.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'General Tso',
      description:
        'A Chinese military leader, who is most famous for the sweet, spicy, deep-fried dish that bears his name – although there is no evidence that he ever ate it himself. One theory is that the recipe originated from a Hunan dish called "ancestral meeting hall chicken".',
      category: 'HISTORICAL FIGURE',
      pointValue: 1
    },
    {
      name: 'A piñata',
      description:
        'A decorative container made from papier-mâché that is filled with candy and broken at a party. While associated with Mexico, similar traditions include India\'s "pot breaking with blindfolds," Denmark\'s "hit the cat out of the barrel," and Catalonia\'s "make the log defecate."',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'Guv\'na',
      description:
        'An informal name sometimes used in a British greeting, otern used in reference to someone perceived as holding higher social status. It is also typically preceded by the word "Ello" and is associated with Cockney speakers',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'Eggplant Wizard',
      description:
        'An aubergine-shaped, cyclopian enemy in the kid Icarus series of video games. It\'s special ability turns the protagonist, Pit, into a man-sized version of this purple vegetable. While this does disable all the forms of attack, it does not inhibit his ability to move around and dodge.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 3
    },
    {
      name: 'Meatloaf',
      description:
        'The moniker of the musician Micheal Aday. His song "I\'d Do Anything for Love" is often believed to be about his refusal to perform cunnilingus. His stage name is also a reference to the food made out of bread and ground meats that is typically covered in ketchup',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'A Jabberwocky',
      description:
        'The title character of a nonsense poem by Lewis Carroll that begins: Twas brillig, and the slithy toves Did gyre and gimble in the wabe; All mimsy were the borogoves, And the mome raths outgrabe.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 3
    },
    {
      name: 'Wavy Tube Man',
      description:
        'An inflatable device consisting of a long, hollow piece of fabric shaped like a person and attached to a fan. Also known as an airdancer, when the fan is turned on, the fabric move around in a spastic dancing motion. They were originally invented for the 1996 Olympics.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A pound of flesh',
      description:
        'The interest demanded by the moneylender Shylock in Shakespeare\'s The Merchant of Venice. When the character Antonio defaults on a loan, he demands this amount of tissue from next to his heart in revenge for being insulted and spat upon earlier in the play.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'The Lady of the Lake',
      description:
        'The moniker of the creature or creatures who rule Avalon in Arthurian legend. Some of her many roles include giving King Arthur the sword Excaliber, enchanting Merlin, and testing Sonic the Hedghog\'s worthiness to become a knight.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'A hug from myself',
      description:
        'An embrace of one\'s own',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: 'Pluto',
      description:
        'A planetary body beyond Neptune that was once considered the ninth planet in the Solar System. It was reclassified as a "dwarf planet" in 2006 by a bunch of scientist killjoys at the international Astronomical Union. Thanks, jerks.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'Dell Dude',
      description:
        'The nickname of an annoying neighbor-boy who enthusiastically tried to sell you a personal ccomputer from the brand that was popular in the 2000\'s. He is best known for his infamous catchphrase as well as his striking resemblance to the philosopher David Barnett.',
      category: 'CELEBRITY',
      pointValue: 3
    },
    {
      name: 'Matthew McConaughey',
      description:
        'An actor and stoner sex symbol who became a star with his role in Dazed and Confused. In recent years, he transitioned from failed romcom star to one of America\'s most praised actors, starring in True Detective and delivering such banal platitudes as "Time is a flat circle."',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'Chicken Fingers',
      description:
        'Strips of meat made from the pectoralis minor muscles of poultry. They are typically prepared by coating the meat in a breading, deep-frying it, and serving them alongside various dipping sauces, such as ranch, barbecue, and honey mustard.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'A guy with really great hair',
      description:
        'The threadlike strands on his head are just gorgeous. How does he do it?',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: '1000 origami cranes',
      description:
        'Ten hundred pieces of paper folded in the shape of a long-necked wading bird. A Japanese legend claims that making them will result in eternal good luck, rather than just one wish. As such, they are a frequent gift to friends and family.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'A mechanical bull',
      description:
        'A machine that recreates the experience of riding a bucking animal. They are typically used recreationally or in training for rodeos. While injuries are rare, most devices contain pressurized airbags, padding bodies, and bucking motion controls.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'A cuckoo clock',
      description:
        'A stationary device for telling time that features a small automation bird that reveals itself, chirps, and moves with the tolling of each hour. Dating back to the 18th century, the device has remained unchanged for over 300 years.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'A brain in a jar',
      description:
        'A thought experiment that is used to challenge our beliefs about knowledge, reality, and perception. In the scenario, a person is reduced to just their mental organ suspendeded in goo, which recieves electrical impulses that simulate their normal, pre-goo existence in every regard.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'The Hindenburg',
      description:
        'A German airship that exploded over New Jersey in 1937. The incident was captured on newsreel, including radio reporter Herbert Morrisons\'s famous commentary, "Oh, the humanity!" The explosion was a public relations disaster for the airship industry.',
      category: 'HISTORICAL FIGURE',
      pointValue: 1
    },
    {
      name: 'Krakatoa',
      description:
        'A volcanic island located between Java and Sumatra. It is most famous for an 1883 eruption, which resulted in tsunamis that killed tens of thousands and produced the "loudest sound ever heard in modern history." being audible over 3,000 miles away.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'A fog machine',
      description:
        'A device that creates a dense, artificial vapor. They are often used as a special effect at entertainment events, such as rock concerts, magic shows, various WrestlesMania, moster truck rallies, and faked alien invasions.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'Jeeves',
      description:
        'A fictional character created by P.G. Wodehouse. He is an especially competent valet for the inept and foppish Bertie Wooster. His character has come to represent an ideal for valets and butlers, so much that his name is now nearly synonymous with manservants.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'The tooth fairy',
      description:
        'A fantastical character who gives children money in exchange for the calcified structures in their mouths. The transaction usually involves the child placing the item under their pillow at night, then this character — who is totally not their parent — replaces it with a sum of money.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'A gargoyle',
      description:
        'An architectural feature in the form of a grotesque creature. They were originally used to shunt rainwater from buildings, but were also used by the Church to convey the concept of evil. Batman is fond of perching on them and they came to life as characters in a 90s cartoon.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'A babushka',
      description:
        'A Russian word for "grandmother." It can also refer to a woman\'s headscarf, and is associated with Catherine Breshkovsky, a Russian socialist follower of the anarchist Mikhail Bakunin, and "grandmother of the Russian Revolution."',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'A boa constrictor',
      description:
        'A large, nonpoisonous snake that kills prey by wrapping its muscular body around them and squeezing until they suffocate. They are often hunted and kept in captivity because of their ornate skin patterns, which has resulted in some subspecies becoming endangered.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'A turducken',
      description:
        'A chicken stuffed inside a duck stuffed inside a turkey. A 19th century Indian precursor to the dish involved a sparrow inside a quail inside a grouse inside a chicken inside a turkey inside a goat inside a whole, skinned camel.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'The cake boss',
      description:
        'The moniker of chef Buddy Valastro, owner of Carlo\'s Bakery and star of a reality television show about his efforts to create elaborate desserts. A parody of the character by Paul F. Tompkins has supernatural powers that allow him to see the future.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Resting bitch face',
      description:
        'A term for the condition where a person, usually a woman, has a neutral expression that some interpret as negative, angry, or upset. A 2015 study found that people with a resemblance to an angry expression were more likely to be preceived as untrustworthy.',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: 'A straight Tetris piece',
      description:
        'A tall, single columned block from the classic Soviet video game. The 4 x 1 shpe is often called an I-Block, Line Piece, or I-tetronimo, and is the only way to clear four lines simultaneous, which results in a bonus to the player\'s score.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'Madame Tussaud',
      description:
        'The namesake of an international chain of wax museums that began with her first sculpture of Voltaire in 1777. The museums now contain hundreds of creepy wax representations of famous celebrities and historical figures that definitely don\'t come to life when you\'re not looking.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: '💩 (Poo emoji)',
      description:
        'The unicode character U+1F4A9, a pictoral depiction of a tiny, smiling pile of feces. It is regarded as one of the world\'s most popular visual forms, along with Women with Bunny Ears, Heavy Black Heart, and Smiling Cat Face With Heart-Shaped Eyes.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'Gluten',
      description:
        'A protein found in wheat, which makes it elastic, helps it rise, and gives it a chewy texture. Individuals with celiac disease have adverse reactions to the protein, and Paleo dieters often believe it to be toxic to all humans and the source of many modern diseases.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'A robot butler',
      description:
        'A mechanical servant that manages your houshold. They are often depicted in media about the future, such as the character Rosie on the Jetsons. In 2014, a Japanese company intorduced Pepper-kun, who could supposedly recognize and respond to human emotions.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'Michael Caine',
      description:
        'An Academy Award winning actor known for his distinctive Cockney accent. He is often impersonated using phrases like "A lot of people don\'t know that" and "She was only 16 years old." His recent roles include playing Alfred in the Christopher Nolan Batman films.',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'MacGyver',
      description:
        'The title character from the 80s TV show about a secret agent who makes clever little devices out of whatever\'s around. These include a defibrulator (candle sticks, microphone wire, rubber mat) and a catapult (branches. rock, twine, rosary beads).',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'A wet blanket',
      description:
        'A term for a person who dampens enthusiasm, is habitually negitive, or ruins the good times of others. When not being described as a soaked bed covering, this type of person is often referred to as a killjoy, party pooper, or a real stick in the mud.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'Walt Disney\'s frozen head',
      description:
        'The severed, chilled top part of the world-famous artist and entrepreneur who created Hollywood\'s most famous animated films. Contrary to popular belief, he was not preserved through cryogenics and his body is definitely not stored under the Pirates of the Caribbean ride.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'Air Bud',
      description:
        'The title character of a 1997 family comedy about a Golden Retriever who can play basketball. The actor who player the talented K-9 also appeared on America\'s Funniest home Videos, The Late Show with David Letterman, and played Comet on ABC\'s Full House.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'Jigglypuff',
      description:
        'A pink, gelatinous Pokémon with big blue eyes and a cute little tuft of hair. It uses its eyes to hypnotize opponents, then puts them to sleep with a lullaby. It evolves from Igglybuff (with high friendship) and evolves to Wigglytuff (when exposed to a Moon Stone).',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'The octopus that predicted the World Cup (Paul)',
      description:
        'A cephalopod who many believed was able to foretell the result of a 2010 international soccer competition. His keepers presented him with two boxes of food, identical except with a different nation\'s flag on it. He correctly chose the winner in all seven matches he divined.',
      category: 'HISTORICAL FIGURE',
      pointValue: 4
    },
    {
      name: 'The fish that eat your foot skin as a pedicure',
      description:
        'Aquatic animals that are used in a spa treatment, where they feed on the outer layer of customers\' lower extremities in order to treat conditions such as psoriasis. The CDC "is not aware of any published reports on illness" resulting from this process.',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: 'The Spanish woman who botched repainting of Jesus',
      description:
        'An amateur artist who attempted to restore a painting of the Son of God. The work, "Ecce Homo," was rechristened by the internet to "Ecco Mono," or Behold the Monkey, because of its resemblance to a "crayon sketch of a very hairy monkey in an ill-fitting tunic."',
      category: 'CELEBRITY',
      pointValue: 4
    },
    {
      name: 'The enormous pile of garbage floating in the Pacific Ocean',
      description:
        'A collection of plastic marine debris located approximately between 135°W to 155°W and 35°N and 42°N. Size estimates range from the size of Texas to twice the size of the continental United States. While predicted by scientists, it was first discovered by a racing boat captain.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'Bubble wrap',
      description:
        'A plastic packing material containing spaced, air-filled pockets that provide a cushion for fragile items. When popped, the air pockets, often create a delightful sound—leading to the creation of an annual Appreciation Day for the product on the last Monday of January.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'Seal',
      description:
        'The stage name of musician and model Henry Olusegun Adeola Samuel. He is most famous for his ballad "Kiss from a rose" from the 1995 Batman Forever soundtrack. He is also easily recognizable due to his facial scars—from a bout of lupus—and prominent tooth gap.',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'Shrimp fingers',
      description:
        'A gag in which a person puts the hollowed out heads of red, free-swimming crustaceans on their tactile members and wiggles them around to amuse their dining companions.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'Tigger',
      description:
        'A fictional tiger with a springy tail and a love of bouncing. He lives with Winnie-the-Pooh in the Hundred Acre Wood. While he often overestimates his own abilities, his boast that never gets lost seems to be true.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'Jackie Chan',
      description:
        'A martial artist, film director, and one of the greatest comic actors of all time. He is best known for his unique blending of action and comedy, meticulous directorial style, and prolific filmography: to date, he has appeared in 150+ films across Asian and North American cinemas.',
      category: 'CELEBRITY',
      pointValue: 1
    },
    {
      name: 'Guy Fieri\'s Donkey Sauce',
      description:
        'The signature mayonnaise-based, pale orange condiment invented by a famous cooking personality known for his frosted tips and goatee. He claims to have coined the term while working in the kitchen of a Carnival Cruise ship.',
      category: 'CELEBRITY',
      pointValue: 3
    },
    {
      name: 'The sound of one hand clapping',
      description:
        'A zen koan that asks what you would hear if a single human paw did the action that is typically done by smacking two human paws into each other. This is unrelated to the question "If a tree falls in the forest and no one is around to hear it, does it make a sound?"',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: 'Sleep paralysis',
      description:
        'A phenomenon where a person cannot move, speak, or react between the period of wakefulness and bodily inactivity. One explanation is that when individuals\' REM cycles are disrupted, they are held in place to prevent them from physically acting out their dreams.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'Big Mouth Billy Bass',
      description:
        'An animatronic mounted game fish that moves and sings kitschy covers of "Don\'t Worry Be Happy" and "Take Me to the River." Al Green claims that the royalties from this version are more than the royalties from any other version of "Take Me to the River."',
      category: 'FICTIONAL CHARACTER',
      pointValue: 3
    },
    {
      name: 'A sneeze guard',
      description:
        'A large glass screen in restaurants to protect food from customers expelling air from their nostrils and mouth onto food. In the 60s, the US FDA mandated their presence in restaurants that had prepared food in close contact with a line of customers.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'The word "açaí"',
      description:
        'The name of a trendy purple berry of a Latin American palm tree. It is pronounced phonetically as ah-sah-EE – which honestly is not super helpful, because you can\'t say that when giving a clue.',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: 'International waters',
      description:
        'Oceans and other liquid bodies that transcend national boundries. They can be used for illicit activities autside national jurisdiction, such as gambling, piracy, duty-free shopping, whaling, and monkey knife fights.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'A spicy meatball',
      description:
        'A phrase from a classic 1969 Alka-Seltzer commercial. The concept has an actor self-referentially attempting to say the line—proceded by "Mama mia, that\'s..." —in an Italian accent as his wife serves him a plate of spaghetti.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A horse with no name',
      description:
        'An equine character from a 1971 song by the band America. The song has recieved criticism for lyrics such as "there were plants and birds and rocks and things." When askd by Penn Jillette, the band mambers unsurprisingly claimed to have been high when they wrote the song.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'Boaty McBoatface',
      description:
        'The proposed name of a $300M polar research ship, after the moniker easily won an internet poll from over 7,000 submissions. A government official suggested that the name would not be used: "riding roughshod over democracy" and leaving the ship\'s identity in limbo.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 3
    },
    {
      name: 'Hootie and the Blowfish',
      description:
        'A rock band, led by Darius Rucker, that was famous in the 90s for their platinum debut album, Cracked Rear View—the 16th-best-selling album of all time in the US. The album included the tracks "Only Wanna Be with You," "Hold My Hand," "Let Her Cry," and "Time."',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Pandora',
      description:
        'The first woman created by the gods, whose name means "all gifted." In the myth, she opens a jar—commonly mistranslated as a box—and releases all the evils of humanity, leaving Hope inside. The story is one of the first attempts to answer why evil exists in the world.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'A knock knock joke',
      description:
        'A pun-based, five-line all and response. Typically the first character, "The Punster," acts as if they are striking the second character\'s door, "The Recipient," who asks "Who\'s there?" Hilarity ensues when The Punster replies with a dimly clever construction.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A pratfall',
      description:
        'A technique in physical comedy where the performer trips, often landing on their bottom. The effect is often enhanced by multiple spills, either over time, as in John Ritter\'s character from Three\'s Company, or in a row, as in Jay Johnson\'s "Story Of Everest" scene from Mr. Show.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'Rube Goldberg',
      description:
        'A cartoonist and inventor most famous for his drawings of complex machines that perform simple tasks such as brushing teeth or eating spaghetti. His drawings inspired many imitators, including the game MOusetrap and the dog food machine from Back to the Future.',
      category: 'HISTORICAL FIGURE',
      pointValue: 2
    },
    {
      name: 'Magic missile',
      description:
        'A first-level evocation spell in the roleplaying game Dungeons & Dragons. In 5th Edition rules, the spell produces "three glowing darts of magical force," dealing 1d4+1 force damage to the target for each successful hit.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'Marie Kondo',
      description:
        'The Japanese author of the book, The Life-Changing Magic of Tidying Up: The Japanese Art of Decluttering and Organizing. Her method, KonMari, involves keeping only possessions that "spark joy" and thanking discarded objects for their service.',
      category: 'CELEBRITY',
      pointValue: 3
    },
    {
      name: 'Déjà vu',
      description:
        'From the French for "already seen," a sensation where a person has the feeling that they have experienced the event that is currently taking place. A 2004 survey suggests that 2/3 of individuals have had this feeling of "precognition" at some point in their lives.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'Voldemort',
      description:
        'HE-Who-Must-Not-Be-Named from the Harry Potter universe of J.K. Rowling. In the novels, this character is the archenemy of Harry Potter, who is the only wizard with the power to vanquish him, and is on a quest to rid the world of non-magical Muggles.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'Decorative gourd season',
      description:
        'The time of the year when you place ornamental, flashy fruit around your house. In a McSweeney\'s article, the author is fucking jazzed about celebrating fall by putting these shellacked motherfuckers in a wicker basket, and maybe ever adding some multi-colored fucking leaves.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'A wet willy',
      description:
        'A childhood prank where one individual licks their finger and surprises a victim by vigorously inserting the moistened finger into their ear canal. It is often accompanied by a twisting or pumping motion. Justin\'s toddler thinks it is hilarious.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'Bernie from Weekend at Bernie\'s',
      description:
        'The title character of the 1989 screwball comedy and its 1993 sequel about two low-level financial employees pretending that their dead boss is alive. They achieve the illusion by defiling his corpse in a myriad of ways and allowing his body to be used in acts of necrophilia.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 3
    },
    {
      name: 'A person who is actually three children under a trench coat',
      description:
        'How do they get away with it?',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: 'A hot mess',
      description:
        'A slang term to connote a person with a spectacularly high level of disorganization, potentially with undertones of remaining attractive despite this condition. Previously, the term meant either "a situation that was confusing in some way" or  "warm food served to soldiers."',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'Dad bod',
      description:
        'In the article Why Girls Love [this thing], the author describes the fitness condition as "a nice balance between a beer gut and working out. [It] says, \'I go to the gym occasionally, but I also drink heavily on the weekends and enjoy eating eight slices of pizza at a time.\'"',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'BB-8',
      description:
        'A droid from the Star Wars universe with a spherical white body. On the podcst Reply All, Alex Goldman noted that on anti-diversity forums, advocates were upset that in the new film "the only character for white men to identify with was the powerless white cuck ball."',
      category: 'FICTIONAL CHARACTER',
      pointValue: 1
    },
    {
      name: 'Yakety Sax',
      description:
        'A 1963 pop-jazz recording that has been used for decades in TV, films, and Internet culture—but most famously as The Benny Hill Theme. It soundtracks especially ridiculous moments of physical comedy and can be summarized by the equation: Anything + This Song = Funny.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'A wheelie',
      description:
        'A stunt performed while riding a bicycle or motocycle. In it, the rider pushes off the back tire, causing the front tire to extend off the ground as the rider moves around like a badass. The first documented one of these was accomplished by Daniel J. Canary in 1890.',
      category: 'ET CETERA',
      pointValue: 2
    },
      {
      name: 'Peek-a-boo!',
      description:
        'A game played with babies, where the adult hides their face with their hands, then opens their hands while saying the phrase "I see you!" Psychologists believe that babies repond to this game because they lack object permanence.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'The world\'s smallest violin',
      description:
        'What you use to play the world\'s saddest song. It is typically accompanied by rubbing your thumb and index finger together in imitation of playing this instrument, and is typically deployed to mock someone exaggerating a difficult experience to garner sympathy.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'The Ark of the Covenant',
      description:
        'A wooden chest clad with gold containing the two stone tablets of the Ten Commandments, Aaron\'s rod, and a pot of manna. Though in the first Indiana Jones film, it instead contains face-melting angels that kill Nazis.',
      category: 'HISTORICAL FIGURE',
      pointValue: 3
    },
    {
      name: 'Mr. Snuffleupagus',
      description:
        'Big Bird\'s imaginary friend on the PBS show Sesame Street. Despite being a large, tuskless wooly mammoth, for 16 seasons, no other characters were able to see this character — leading Big Bird to use him as a scapegoat whenever something would go wrong.',
      category: 'FICTIONAL CHARACTER',
      pointValue: 2
    },
    {
      name: 'The 5-second rule',
      description:
        'A folk belief that food dropped on the floor is still edible if it is retieved within a short amount of time. There is currently no scientific consensus on whether it is more safe to eat food that has spent only a short amount of time on the floor.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A vestigial tail',
      description:
        'A flexible appendage, extending from the coccyx, that is present on human foetusus for 4 weeks during embryogenesis. Very rarely, babies are born with this feature: according to Wikipedia, 23 cases have been reported since 1884—all of which were surgically removed.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'Ed Hardy',
      description:
        'A clothing designer known as "the Godfather of madern Tattoo." On the website Stuff White People LIke, hating poeple who wear these shirts ranks as #124, and this person\'s clothing is so reviled that, "like Ku Klux Klan robes or Nazi uniforms, it cannot even be worn ironically."',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Dick Butkus',
      description:
        'A former NFL linebacker, actor, and broadcaster. He played for the Chicago Bears from 1965-1973 and was inducted into the Pro Football Hall of Fame. He is considered one of the best linebackers in football history. But in the context of this game , he just has a silly, silly name.',
      category: 'CELEBRITY',
      pointValue: 2
    },
    {
      name: 'Occam\'s Razor',
      description:
        'A problem-solving concept advanced by the 14th century logician and Franciscan friar that roughly means "The simplest explanation is usually the correct one." It is however, merely a heuristic, not a law of the universe and therefore sometimes wrong.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'The hitchhiking robot',
      description:
        'A mechanical being that traveled across Canada and Europe by asking motorists for a ride. On a trip across the US, its body was found decapitated near Philadelphia. Ironically, its inventors created it as a social experiment about whether these being can trust humans.',
      category: 'CELEBRITY',
      pointValue: 3
    },
    {
      name: 'The middle seat',
      description:
        'The least desired place to sit while riding on a tain, plane, car, boat, or other mode of transportation—typically because you are scrunched between two or more other human beings. When you sit here, you are often said to be "riding bitch".',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'The uncanny valley',
      description:
        'The effect produced by an image or object that looks and moves almost, but not quite, like a real person. It triggers feelings of revulsion in many people and is most often associated with animatronics and computer-generated graphics.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'Flubber',
      description:
        'A fictional sentient bouncy sludge which derails a scientist\'s third attempt at attending a wedding.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'A ghost',
      description:
        '',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'A post-credits scene',
      description:
        'A bit that pops up after you think a film is over. Wow, that was a good movie! I liked the bit with the — OH GOD THE MOVIE\'S NOT OVER. THERE\'S MORE MOVIE. SARAH COME BACK FROM THE KITCHEN, SARAH CAN YOU HEAR ME. SARAH.',
      category: '3',
      pointValue: 3
    },
    {
      name: 'An awful wrestler',
      description:
        'Hrnngh urrehh arrgggh',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: 'A Ferris Wheel',
      description:
        'Orinally designed and constructed by George Washington Gale Ferris Jr as a landmark for the 1893 World\s Columbian Exposition in Chicago. Also known as a \'Big Wheel\' in the United Kingdom',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A Carousel',
      description:
        'Amusement ride with a rotating circular platform and seats for riders traditionally in the form of horses.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A drum circle',
      description:
        'A group of people plyaing percussion together in a round shape. While ancient in origin, the gatherings popped up in a America in the 1960s and have been annoying people ever since.',
      category: 'ET CETERA',
      pointValue: 1
    },
    {
      name: 'The pee dance',
      description:
        'A series of movements to help alleviate the discomfort of needing to urinate. It is unknown why people do this, but it is thought that it might distract the person, relieve anxiety, or that crossing your legs tightens your sphincter.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'A sandwich artist',
      description:
        'An employee of the fast food franchise Subway, who is tasked with preparing and assembling a food item made of a long roll of bread and often filled with meat, cheese, and vegetables.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'A vuvuzela',
      description:
        'A plastic horn that sounds an annoying monotone note. Historically used at soccer games in South Africa, they became infamous around the world cup when the country hosted the World Cup in 2010.',
      category: 'ET CETERA',
      pointValue: 2
    },
    {
      name: 'Aerial silks',
      description:
        'An artistic performance where a person does acrobatics while hanging from fabric. Typically, a performer will climb the fabric, relying only on their training to stay aloft, while they strike various poses.',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: 'A professional mermaid',
      description:
        'Half human, half fish, 100% business. This is a person who literally gets paid to pretend to be an undersea mythical creature. Everything\s better down where it\s wetter, please invoice me.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'An unprofessional mermaid',
      description:
        'Half human, half fish, half asleep? This mythical creature fankly hasn\'t been taking their aquatic job seriously. They\'ve hardly doomed any ships, befriended literally zero musical crabs, and I\'ve just found out they arrived late this morning and immediately started swearing at the fish. Gosh.',
      category: 'ET CETERA',
      pointValue: 4
    },
    {
      name: 'Forgetting someone\'s name',
      description:
        'Why simply ask someone to remind you of their moniker when you could perform bizarre conversational gymnastics to get them to reveal it. The trick is to extract the info before you become a social pariah.',
      category: 'ET CETERA',
      pointValue: 3
    },
    {
      name: 'Cryptozoology',
      description:
        'The study of animals that are definitely not made up. Nessie naysayers need not apply, we\'re striclty looking for Yeti yes-folk.',
      category: 'ET CETERA',
      pointValue: 4
    }

    /*
    {
      name: '',
      description:
        '',
      category: '',
      pointValue: 0
    }
    */
  ]
};

/*
IDEAS

vibration:
  - https://dev.to/bibekkakati/how-to-use-vibration-api-in-your-website-4dp4

components:
  - switch: https://svelte.dev/repl/35d77f2ab11e4197a19ffd8e7c4ac74e?version=3.9.1

colors:
  #d36157

*/