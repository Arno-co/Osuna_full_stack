{
    entities: {
        users: {
            1: {
                id: 1,
                username: 'Michael Jordan',
                email: 'mj@bulls.com',
                ownedProjects: [2],
                partOfProjects: [2],
                authoredTasks: [2,3],
                assignedTasks: [2,3],
                teams: [2]
            }.
            2: {
                id: 2,
                username: 'MCA',
                email: 'mca@beastieboys.com',
                ownedProjects: [3],
                partOfProjects: [3],
                authoredTasks: [],
                assignedTasks: [],
                teams: [3]
            },
            3: {
                id: 3,
                username: 'Captain',
                email: 'germain@donika.com',
                ownedProjects: [1],
                partOfProjects: [1],
                authoredTasks: [4,5],
                assignedTasks: [4],
                teams: [1]
            },
            4: {
                id: 4,
                username: 'Mike D',
                email: 'miked@beastieboys.com',
                ownedProjects: [],
                partOfProjects: [3],
                authoredTasks: [],
                assignedTasks: [4],
                teams: [3]
            },
            5: {
                id: 5,
                username: 'Ad Rock',
                email: 'adrock@beastieboys.com',
                ownedProjects: [],
                partOfProjects: [3],
                authoredTasks: [4],
                assignedTasks: [5],
                teams: [3]
            },
            6: {
                id: 6,
                username: 'Mousse',
                email: 'greg@donika.com',
                ownedProjects: [],
                partOfProjects: [1],
                authoredTasks: [],
                assignedTasks: [2,3],
                teams: [1]
            }
        },
        projects: {
            1: {
                id: 1,
                title: 'Transatlantic',
                description: 'Get Donika ready for Quiberon - New York',
                projectOwnerId: 3,
                startDate: 06/01/2020,
                endDate: 01/01/2030
            },
            2: {
                id: 2,
                title: 'Win the 7th',
                description: 'Make Bulls great again',
                projectOwnerId: 1,
                startDate: 09/01/2020,
                endDate: 06/01/2021
            },
            3: {
                id: 3,
                title: 'Check Your Head II',
                description: 'Make this new album',
                projectOwnerId: 2,
                startDate: 02/26/2020,
                endDate: 12/31/2020
            }
        },
        tasks: {
            1: {
                id: 1,
                title: 'Bring MCA back',
                description: 'We need him!',
                author: 5,
                project: 3,
                assignee: 4,
                endDate: 06/30/2020,
                milestone: true
            },
            2: {
                id: 2,
                title: 'Train Hard',
                description: 'Fly higher',
                author: 1,
                project: 2,
                assignee: 1,
                startDate: 02/26/2020,
                endDate: 03/31/2020,
                milestone: false
            },
            3: {
                id: 3,
                title: 'Train Harder',
                description: 'Fly longer',
                author: 1,
                project: 2,
                assignee: 1,
                startDate: 04/01/2020,
                endDate: 06/30/2020,
                milestone: false
            },
            4: {
                id: 4,
                title: 'New sails',
                description: 'Change Spinnaker',
                author: 3,
                project: 1,
                assignee: 3,
                startDate: 02/26/2020,
                milestone: true
            },
            5: {
                id: 5,
                title: 'Winch maintenance',
                description: 'Take apart, clean, lubricate and put back together all winches. Replace if too damaged',
                author: 3,
                project: 1,
                assignee: 6,
                startDate: 01/06/2020,
                endDate: 12/31/2021,
                milestone: false
            }
        },
        teams: {
            1:{ 
                id: 1,
                name: 'Donika Crew',
                description: 'Next Volvo winners',
                projectId: 1,
                teammates: [3,6]
            },
            2: {
                id: 2,
                name: 'Chicago Bulls',
                description: 'Anti Detroit Pistons',
                projectId: 1,
                teammates: [1]
            },
            3: {
                id: 3,
                name: 'Beastie Boys',
                description: 'Greatest Band Ever!',
                projectId: 1,
                teammates: [2,4,5]
            }
        }
    },
    ui: {
        loading: true / false
    },
    errors: {
        login: ["Incorrect username and / or password"],
        projectForm: ["Project body cannot be blank"],
        taskForm: ["Task body cannot be blank"],
  },
    session: { currentUserId: 25 }
}