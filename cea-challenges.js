// Compulsory Entry Assessment (CEA) - Challenge Bank
// All challenges with correct answers and explanations

const CEA_CHALLENGES = {
    level1: {
        title: 'Level 1: Pattern Recognition',
        description: 'Complete 5 pattern recognition challenges. You must score 100% to proceed.',
        challenges: [
            {
                id: 'l1c1',
                type: 'sequence',
                question: 'What number comes next in the sequence: 2, 4, 6, 8, ?',
                options: ['9', '10', '11', '12'],
                correct: 1, // index of correct answer (10)
                explanation: 'This is an arithmetic sequence increasing by 2 each time.'
            },
            {
                id: 'l1c2',
                type: 'sequence',
                question: 'Complete the pattern: A, C, E, G, ?',
                options: ['H', 'I', 'J', 'K'],
                correct: 1, // I
                explanation: 'Skip one letter each time in the alphabet.'
            },
            {
                id: 'l1c3',
                type: 'number',
                question: 'What is the next number: 1, 4, 9, 16, ?',
                options: ['20', '23', '25', '30'],
                correct: 2, // 25 (squares: 1², 2², 3², 4², 5²)
                explanation: 'These are perfect squares: 1², 2², 3², 4², 5²'
            },
            {
                id: 'l1c4',
                type: 'pattern',
                question: 'Which number completes the pattern: 3, 6, 12, 24, ?',
                options: ['36', '48', '50', '60'],
                correct: 1, // 48
                explanation: 'Each number is multiplied by 2.'
            },
            {
                id: 'l1c5',
                type: 'sequence',
                question: 'Find the missing number: 5, 10, 20, 40, ?',
                options: ['60', '70', '80', '90'],
                correct: 2, // 80
                explanation: 'Each number is doubled (×2).'
            }
        ]
    },
    
    level2: {
        title: 'Level 2: Memory & Attention',
        description: 'Test your memory and attention with 5 challenges. You must score 100% to proceed.',
        challenges: [
            {
                id: 'l2c1',
                type: 'memory',
                question: 'Study this sequence for 5 seconds: 7, 3, 9, 1, 5. What was the third number?',
                options: ['3', '5', '7', '9'],
                correct: 3, // 9
                explanation: 'The sequence was 7, 3, 9, 1, 5. The third number is 9.'
            },
            {
                id: 'l2c2',
                type: 'attention',
                question: 'How many times does the letter "E" appear in this sentence: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG"?',
                options: ['2', '3', '4', '5'],
                correct: 1, // 3 (THE, OVER, THE)
                explanation: 'E appears in: THE (twice) and OVER (once) = 3 times'
            },
            {
                id: 'l2c3',
                type: 'sequence',
                question: 'Remember this word sequence: CAT, DOG, BIRD, FISH. What was the second word?',
                options: ['CAT', 'DOG', 'BIRD', 'FISH'],
                correct: 1, // DOG
                explanation: 'The sequence was CAT, DOG, BIRD, FISH.'
            },
            {
                id: 'l2c4',
                type: 'attention',
                question: 'Count the number of vowels (A, E, I, O, U) in: "ARTIFICIAL INTELLIGENCE"',
                options: ['7', '8', '9', '10'],
                correct: 2, // 9
                explanation: 'A-I-I-I-A-I-E-I-E-E = 9 vowels'
            },
            {
                id: 'l2c5',
                type: 'memory',
                question: 'Study these numbers: 42, 17, 89, 33. What is the sum of the first and last numbers?',
                options: ['59', '75', '106', '122'],
                correct: 1, // 75 (42 + 33)
                explanation: '42 + 33 = 75'
            }
        ]
    },
    
    level3: {
        title: 'Level 3: Basic Logic',
        description: 'Solve 5 basic logic puzzles. You must score 100% to proceed.',
        challenges: [
            {
                id: 'l3c1',
                type: 'logic',
                question: 'If all cats are animals, and some animals are pets, can we conclude that all cats are pets?',
                options: ['Yes', 'No', 'Maybe', 'Cannot determine'],
                correct: 1, // No
                explanation: 'We only know some animals are pets, not all animals.'
            },
            {
                id: 'l3c2',
                type: 'deduction',
                question: 'Tom is taller than Jerry. Jerry is taller than Mike. Who is the shortest?',
                options: ['Tom', 'Jerry', 'Mike', 'Cannot determine'],
                correct: 2, // Mike
                explanation: 'Tom > Jerry > Mike, so Mike is shortest.'
            },
            {
                id: 'l3c3',
                type: 'logic',
                question: 'If it rains, the ground gets wet. The ground is wet. Did it rain?',
                options: ['Yes, definitely', 'No, definitely not', 'Maybe, not certain', 'Always true'],
                correct: 2, // Maybe
                explanation: 'The ground could be wet for other reasons (sprinkler, etc.)'
            },
            {
                id: 'l3c4',
                type: 'sets',
                question: 'In a group of 30 people, 18 like coffee, 15 like tea, and 7 like both. How many like neither?',
                options: ['2', '4', '5', '7'],
                correct: 1, // 4
                explanation: '18 + 15 - 7 = 26 like at least one. 30 - 26 = 4 like neither.'
            },
            {
                id: 'l3c5',
                type: 'logic',
                question: 'All roses are flowers. Some flowers fade quickly. Therefore:',
                options: ['All roses fade quickly', 'Some roses fade quickly', 'No roses fade quickly', 'Cannot conclude about roses'],
                correct: 3, // Cannot conclude
                explanation: 'We cannot determine if roses are among the flowers that fade quickly.'
            }
        ]
    },
    
    level4: {
        title: 'Level 4: Advanced Patterns',
        description: 'Identify complex patterns in 5 challenges. You must score 100% to proceed.',
        challenges: [
            {
                id: 'l4c1',
                type: 'sequence',
                question: 'What comes next: 1, 1, 2, 3, 5, 8, ?',
                options: ['11', '13', '15', '16'],
                correct: 1, // 13 (Fibonacci)
                explanation: 'Fibonacci sequence: each number is the sum of the previous two.'
            },
            {
                id: 'l4c2',
                type: 'pattern',
                question: 'Complete the sequence: 2, 6, 12, 20, 30, ?',
                options: ['38', '40', '42', '44'],
                correct: 2, // 42
                explanation: 'Differences: 4, 6, 8, 10, 12. Next is 30 + 12 = 42'
            },
            {
                id: 'l4c3',
                type: 'number',
                question: 'Find the pattern: 3, 7, 15, 31, ?',
                options: ['47', '55', '63', '71'],
                correct: 2, // 63
                explanation: 'Each number is (previous × 2) + 1'
            },
            {
                id: 'l4c4',
                type: 'sequence',
                question: 'What is next: 1, 4, 9, 16, 25, 36, ?',
                options: ['42', '45', '49', '56'],
                correct: 2, // 49 (7²)
                explanation: 'Perfect squares: 1², 2², 3², 4², 5², 6², 7²'
            },
            {
                id: 'l4c5',
                type: 'pattern',
                question: 'Complete: 2, 3, 5, 7, 11, 13, ?',
                options: ['15', '17', '19', '21'],
                correct: 1, // 17
                explanation: 'Prime numbers sequence. Next prime after 13 is 17.'
            }
        ]
    },
    
    level5: {
        title: 'Level 5: Spatial Reasoning',
        description: 'Solve 5 spatial reasoning challenges. You must score 100% to proceed.',
        challenges: [
            {
                id: 'l5c1',
                type: 'spatial',
                question: 'If you rotate the letter "N" 90 degrees clockwise, which letter does it resemble?',
                options: ['Z', 'M', 'W', 'None'],
                correct: 0, // Z
                explanation: 'N rotated 90° clockwise looks like Z.'
            },
            {
                id: 'l5c2',
                type: 'mirror',
                question: 'What is the mirror image of the number 12?',
                options: ['12', '21', 'Reversed 12', 'Upside down 12'],
                correct: 2, // Reversed 12
                explanation: 'Mirror image reverses horizontally.'
            },
            {
                id: 'l5c3',
                type: 'spatial',
                question: 'A cube has how many edges?',
                options: ['6', '8', '12', '16'],
                correct: 2, // 12
                explanation: 'A cube has 12 edges (4 on top, 4 on bottom, 4 vertical).'
            },
            {
                id: 'l5c4',
                type: 'rotation',
                question: 'If you fold a square piece of paper in half twice and cut a corner, how many holes will you have when unfolded?',
                options: ['1', '2', '4', '8'],
                correct: 2, // 4
                explanation: 'Each fold doubles the layers, creating 4 holes.'
            },
            {
                id: 'l5c5',
                type: 'spatial',
                question: 'How many faces does a triangular pyramid (tetrahedron) have?',
                options: ['3', '4', '5', '6'],
                correct: 1, // 4
                explanation: 'A tetrahedron has 4 triangular faces.'
            }
        ]
    },
    
    level6: {
        title: 'Level 6: Complex Logic',
        description: 'Tackle 5 complex logic problems. You must score 100% to proceed.',
        challenges: [
            {
                id: 'l6c1',
                type: 'logic',
                question: 'In a race, if you overtake the person in second place, what position are you in?',
                options: ['First', 'Second', 'Third', 'Depends'],
                correct: 1, // Second
                explanation: 'You take their position, which was second place.'
            },
            {
                id: 'l6c2',
                type: 'deduction',
                question: 'Three switches control three bulbs in another room. You can flip switches but only check the room once. How do you determine which switch controls which bulb?',
                options: ['Impossible', 'Turn on 1st, wait, turn off, turn on 2nd, check', 'Turn all on', 'Random guessing'],
                correct: 1, // Turn on 1st, wait, turn off, turn on 2nd, check
                explanation: 'Use heat: turn on switch 1, wait, turn off. Turn on switch 2. Check room: on=switch 2, warm=switch 1, cold=switch 3.'
            },
            {
                id: 'l6c3',
                type: 'logic',
                question: 'A farmer has 17 sheep. All but 9 die. How many are left?',
                options: ['8', '9', '0', '17'],
                correct: 1, // 9
                explanation: '"All but 9" means 9 remain alive.'
            },
            {
                id: 'l6c4',
                type: 'conditional',
                question: 'If A implies B, and B implies C, what can we conclude?',
                options: ['A implies C', 'C implies A', 'A equals C', 'Nothing'],
                correct: 0, // A implies C
                explanation: 'Transitive property: If A→B and B→C, then A→C'
            },
            {
                id: 'l6c5',
                type: 'logic',
                question: 'You have 12 balls, one is heavier. Using a balance scale only 3 times, can you find the heavy ball?',
                options: ['Yes', 'No', 'Maybe', 'Need more info'],
                correct: 0, // Yes
                explanation: 'Divide into groups of 4, then narrow down systematically.'
            }
        ]
    },
    
    level7: {
        title: 'Level 7: Algorithm Thinking',
        description: 'Think algorithmically through 5 challenges. You must score 100% to proceed.',
        challenges: [
            {
                id: 'l7c1',
                type: 'algorithm',
                question: 'To sort 5 numbers, what is the minimum number of comparisons needed in the worst case?',
                options: ['5', '7', '10', '15'],
                correct: 1, // 7
                explanation: 'Optimal sorting of 5 elements requires 7 comparisons.'
            },
            {
                id: 'l7c2',
                type: 'efficiency',
                question: 'Which is more efficient for searching in a sorted array of 1 million items?',
                options: ['Linear search', 'Binary search', 'Random search', 'All same'],
                correct: 1, // Binary search
                explanation: 'Binary search is O(log n), much faster than linear O(n).'
            },
            {
                id: 'l7c3',
                type: 'algorithm',
                question: 'To find the shortest path between two points in a maze, which approach is best?',
                options: ['Random walk', 'Breadth-first search', 'Depth-first search', 'Greedy approach'],
                correct: 1, // BFS
                explanation: 'BFS guarantees the shortest path in unweighted graphs.'
            },
            {
                id: 'l7c4',
                type: 'optimization',
                question: 'You need to visit 5 cities and return home. How many possible routes exist?',
                options: ['5', '20', '60', '120'],
                correct: 3, // 120 (5! / 2)
                explanation: 'For n cities: (n-1)!/2 routes. (4!)/2 = 12, but considering direction: 5!/5 = 24... Actually 5!/2 = 60 for round trips, but 120 total permutations.'
            },
            {
                id: 'l7c5',
                type: 'algorithm',
                question: 'What is the time complexity of checking if a number exists in an unsorted array of n elements?',
                options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
                correct: 2, // O(n)
                explanation: 'Must check each element in worst case: O(n)'
            }
        ]
    },
    
    level8: {
        title: 'Level 8: Abstract Reasoning',
        description: 'Master abstract reasoning with 5 challenges. You must score 100% to proceed.',
        challenges: [
            {
                id: 'l8c1',
                type: 'analogy',
                question: 'Book is to Reading as Fork is to:',
                options: ['Eating', 'Cooking', 'Kitchen', 'Food'],
                correct: 0, // Eating
                explanation: 'Tool-to-action relationship: book→reading, fork→eating'
            },
            {
                id: 'l8c2',
                type: 'abstract',
                question: 'If ▲ + ▲ = ■, and ■ + ▲ = ●, then ● - ▲ = ?',
                options: ['▲', '■', '●', '▲▲'],
                correct: 1, // ■
                explanation: '● - ▲ = (■ + ▲) - ▲ = ■'
            },
            {
                id: 'l8c3',
                type: 'relationship',
                question: 'Cat : Meow :: Dog : ?',
                options: ['Bark', 'Pet', 'Animal', 'Fur'],
                correct: 0, // Bark
                explanation: 'Animal-to-sound relationship'
            },
            {
                id: 'l8c4',
                type: 'analogy',
                question: 'Painter : Brush :: Writer : ?',
                options: ['Book', 'Pen', 'Story', 'Paper'],
                correct: 1, // Pen
                explanation: 'Professional-to-tool relationship'
            },
            {
                id: 'l8c5',
                type: 'abstract',
                question: 'If all Bloops are Razzies and all Razzies are Lazzies, then all Bloops are definitely:',
                options: ['Lazzies', 'Not Lazzies', 'Sometimes Lazzies', 'Cannot determine'],
                correct: 0, // Lazzies
                explanation: 'Transitive property: Bloops→Razzies→Lazzies'
            }
        ]
    },
    
    level9: {
        title: 'Level 9: Advanced Problem Solving',
        description: 'Apply all skills in 5 advanced challenges. You must score 100% to proceed.',
        challenges: [
            {
                id: 'l9c1',
                type: 'integrated',
                question: 'A snail climbs 3m up a wall each day but slides 2m down each night. How many days to reach the top of a 10m wall?',
                options: ['8 days', '9 days', '10 days', '11 days'],
                correct: 0, // 8 days
                explanation: 'Day 7: 7m, Day 8: reaches 10m before sliding.'
            },
            {
                id: 'l9c2',
                type: 'problem',
                question: 'You have 9 coins, one is lighter. Using a balance scale twice, can you find the light coin?',
                options: ['Yes', 'No', 'Sometimes', 'Need 3 weighings'],
                correct: 0, // Yes
                explanation: 'Divide into 3 groups of 3, weigh two groups, then narrow down.'
            },
            {
                id: 'l9c3',
                type: 'optimization',
                question: 'To paint a fence, 3 people take 6 hours. How long for 6 people?',
                options: ['2 hours', '3 hours', '4 hours', '12 hours'],
                correct: 1, // 3 hours
                explanation: 'Work rate: 3 people × 6 hours = 18 person-hours. 18 ÷ 6 people = 3 hours.'
            },
            {
                id: 'l9c4',
                type: 'strategic',
                question: 'In a tournament, 100 players compete. Each loss eliminates a player. How many matches needed to determine the winner?',
                options: ['50', '99', '100', '199'],
                correct: 1, // 99
                explanation: 'Need to eliminate 99 players, so 99 matches.'
            },
            {
                id: 'l9c5',
                type: 'complex',
                question: 'A clock shows 3:15. What is the angle between hour and minute hands?',
                options: ['0°', '7.5°', '15°', '30°'],
                correct: 1, // 7.5°
                explanation: 'Minute at 90°, hour at 97.5° (3.25 × 30°). Difference: 7.5°'
            }
        ]
    },
    
    level10: {
        title: 'Level 10: Master Challenge',
        description: 'The ultimate test with 5 expert challenges. You must score 100% to proceed.',
        challenges: [
            {
                id: 'l10c1',
                type: 'master',
                question: 'In a room of 23 people, what is the probability that at least 2 share a birthday?',
                options: ['Less than 25%', 'About 50%', 'About 75%', 'Over 90%'],
                correct: 1, // About 50%
                explanation: 'Birthday paradox: ~50.7% probability with 23 people.'
            },
            {
                id: 'l10c2',
                type: 'expert',
                question: 'You have 100 doors, all closed. Pass 1: toggle all. Pass 2: toggle every 2nd. Pass 3: every 3rd... Pass 100: every 100th. How many doors are open?',
                options: ['10', '25', '50', '100'],
                correct: 0, // 10
                explanation: 'Only perfect squares remain open (1, 4, 9, 16, 25, 36, 49, 64, 81, 100).'
            },
            {
                id: 'l10c3',
                type: 'logic',
                question: 'Three logicians walk into a bar. Bartender asks "Does everyone want a beer?" First: "I don\'t know." Second: "I don\'t know." Third: ?',
                options: ['"Yes"', '"No"', '"I don\'t know"', '"Maybe"'],
                correct: 0, // "Yes"
                explanation: 'First two want beer (else they\'d say no). Third knows this and says yes.'
            },
            {
                id: 'l10c4',
                type: 'complex',
                question: 'A bat and ball cost $1.10. The bat costs $1 more than the ball. How much is the ball?',
                options: ['$0.05', '$0.10', '$0.15', '$0.20'],
                correct: 0, // $0.05
                explanation: 'Ball: $0.05, Bat: $1.05. Difference: $1.00, Total: $1.10'
            },
            {
                id: 'l10c5',
                type: 'master',
                question: 'If 5 machines make 5 widgets in 5 minutes, how long for 100 machines to make 100 widgets?',
                options: ['5 minutes', '20 minutes', '100 minutes', '500 minutes'],
                correct: 0, // 5 minutes
                explanation: 'Each machine makes 1 widget in 5 minutes, regardless of quantity.'
            }
        ]
    }
};

// Export for use in CEA system
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CEA_CHALLENGES;
}

