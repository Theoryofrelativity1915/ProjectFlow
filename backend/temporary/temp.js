const TitleData = "Project 1"
const Description = "Project 1 Description"


const users = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Demo Admin"
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Project Manager"
    },
    {
      name: "Alex Johnson",
      email: "alex.johnson@example.com",
      role: "Developer"
    },
    {
      name: "Sarah Wilson",
      email: "sarah.wilson@example.com",
      role: "Developer"
    },
    {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      role: "Project Manager"
    },
    {
      name: "Emily Davis",
      email: "emily.davis@example.com",
      role: "Developer"
    },
    {
      name: "Robert Thompson",
      email: "robert.thompson@example.com",
      role: "Demo Admin"
    },
    {
      name: "Olivia Martinez",
      email: "olivia.martinez@example.com",
      role: "Project Manager"
    },
    {
      name: "William Anderson",
      email: "william.anderson@example.com",
      role: "Developer"
    },
    {
      name: "Sophia Thomas",
      email: "sophia.thomas@example.com",
      role: "Developer"
    },
    {
      name: "David Garcia",
      email: "david.garcia@example.com",
      role: "Demo Admin"
    },
    {
      name: "Emma Rodriguez",
      email: "emma.rodriguez@example.com",
      role: "Project Manager"
    },
    {
      name: "James Lee",
      email: "james.lee@example.com",
      role: "Developer"
    },
    {
      name: "Ava Harris",
      email: "ava.harris@example.com",
      role: "Developer"
    },
    {
      name: "Joseph Clark",
      email: "joseph.clark@example.com",
      role: "Demo Admin"
    },
    {
      name: "Mia Lewis",
      email: "mia.lewis@example.com",
      role: "Project Manager"
    }
  ];
  

const ticket = {
    number: "#12",
    Title: "Use More Machine Learning",
    Description: "We need to keep up with the times. Integrate AI into this calculator please. You have 2 days.",
    assignedDev: "Demo Dev 1",
    Submitter: "Demo Project Manager 2",
    Project: "Demo Project 1",
    Priority: "Medium",
    Status: "Open",
    type: "Bugs/Errors",
    created: "1/2/2023"
  }

const comments = [
    {
        commenter: "Demo Admin 1",
        message: "Good luck.",
        created: "6/27/23"
    },
    {
        commenter: "Demo Admin 2",
        message: "I would recommend something with convolutions.",
        created: "6/27/23"
    },
    {
        commenter: "Demo Dev 4",
        message: " He tasked me with something similar...He tasked me with something similar...He tasked me with something similar...",
        created: "6/27/23"
    },
    {
        commenter: "Demo Dev 4",
        message: "Can we workshop ideas?",
        created: "6/27/23"
    },
    {
        commenter: "Demo Dev 2",
        message: "Good luck!",
        created: "6/27/23"
    },
    {
        commenter: "Demo Admin 2",
        message: "Reach out if you need help.",
        created: "6/27/23"
    },
]

const tickets = [
    {
        id: "1",
        Title: "Styling Please",
        "Project Name": "Project 1",
        Submitter: "Demo Admin 1",
        Developer: "Demo Dev 9",
        Priority: "Medium",
        Status: "Open",
        "Date Created": "11/18/2022"
    },
    {
        id: "2",
        Title: "Not Mobile Friendly",
        "Project Name": "Project 2",
        Submitter: "Demo Project Manager 2",
        Developer: "Demo Dev 3",
        Priority: "High",
        Status: "Open",
        "Date Created": "1/2/2023"
    },
    {
        id: "3",
        Title: "Use More Machine Learning",
        "Project Name": "Project 3",
        Submitter: "Demo Dev 1",
        Developer: "Demo Dev 1",
        Priority: "Medium",
        Status: "Open",
        "Date Created": "6/26/2023"
    },
]

const projectsList = [
    {
        id: "1",
        "Project Name": "Project 1",
        Description: "This is Project number 1",
    },
    {
        id: "2",
        "Project Name": "Project 2",
        Description: "This is Project number 2",
    }
]


const projectsData = [
    {
      id: "1",
      name: "Project X",
      Description: "This is an example Project",
      "Assigned Personnel": users,
      tickets: [
        {
          id: "1",
          Title: "Bug Fix",
          Description: "Fix the issue with the login functionality",
          Developer: "Alex Johnson",
          Submitter: "John Doe",
          Project: "Project X",
          Priority: "High",
          Status: "Open",
          ticketType: "Bug",
          "Date Created": "06/29/2023",
          comments: [
            {
              commenter: "Jane Smith",
              message: "I think I encountered this issue as well.",
              "Date Created": "01/05/2023"
            },
            {
              commenter: "Sarah Wilson",
              message: "Let me know if you need any assistance.",
              "Date Created": "02/15/2023"
            },
            {
              commenter: "Robert Thompson",
              message: "I can look into this problem.",
              "Date Created": "03/20/2023"
            },
            {
              commenter: "Olivia Martinez",
              message: "Has anyone found the root cause yet?",
              "Date Created": "04/10/2023"
            },
            {
              commenter: "James Lee",
              message: "I believe this issue is related to the backend.",
              "Date Created": "05/25/2023"
            }
          ]
        },
        {
          id: "2",
          Title: "Feature Request",
          Description: "Add a search functionality to the dashboard",
          Developer: "Emily Davis",
          Submitter: "Jane Smith",
          Project: "Project X",
          Priority: "Medium",
          Status: "Open",
          ticketType: "Feature",
          "Date Created": "06/30/2023",
          comments: [
            {
              commenter: "John Doe",
              message: "I believe this feature would greatly benefit our users.",
              "Date Created": "01/10/2023"
            },
            {
              commenter: "Alex Johnson",
              message: "Let's discuss the implementation details.",
              "Date Created": "02/20/2023"
            },
            {
              commenter: "Sarah Wilson",
              message: "I can assist with the frontend development.",
              "Date Created": "03/25/2023"
            },
            {
              commenter: "Emma Rodriguez",
              message: "We should prioritize this feature.",
              "Date Created": "04/15/2023"
            },
            {
              commenter: "Joseph Clark",
              message: "Is there a deadline for this request?",
              "Date Created": "06/05/2023"
            }
          ]
        },
        {
          id: "3",
          Title: "UI Enhancement",
          Description: "Improve the user interface for better usability",
          Developer: "David Garcia",
          Submitter: "Sarah Wilson",
          Project: "Project X",
          Priority: "Low",
          Status: "Open",
          ticketType: "Enhancement",
          "Date Created": "07/05/2023",
          comments: [
            {
              commenter: "John Doe",
              message: "I like the proposed design changes.",
              "Date Created": "01/15/2023"
            },
            {
              commenter: "Jane Smith",
              message: "Are there any design guidelines we should follow?",
              "Date Created": "02/25/2023"
            },
            {
              commenter: "Alex Johnson",
              message: "Let's create a prototype for better visualization.",
              "Date Created": "03/30/2023"
            },
            {
              commenter: "Sophia Thomas",
              message: "Can we gather user feedback for this enhancement?",
              "Date Created": "04/20/2023"
            },
            {
              commenter: "Mia Lewis",
              message: "I can help with the CSS changes.",
              "Date Created": "05/30/2023"
            }
          ]
        }
      ]
    },
    {
      name: "Project Y",
      Description: "This is another Project",
      "Assigned Personnel": users,
      tickets: [
        {
          Title: "Task Management",
          Description: "Implement task management system",
          Developer: "Robert Thompson",
          Submitter: "Emily Davis",
          Project: "Project Y",
          Priority: "Medium",
          Status: "Open",
          ticketType: "Feature",
          "Date Created": "07/01/2023",
          comments: [
            {
              commenter: "John Doe",
              message: "I think this feature will improve our Project workflows.",
              "Date Created": "01/07/2023"
            },
            {
              commenter: "Alex Johnson",
              message: "Let's create a task hierarchy for better organization.",
              "Date Created": "02/17/2023"
            },
            {
              commenter: "Sarah Wilson",
              message: "I can assist with the backend development.",
              "Date Created": "03/22/2023"
            },
            {
              commenter: "Jane Smith",
              message: "Do we have any deadline for this task management system?",
              "Date Created": "04/12/2023"
            },
            {
              commenter: "Robert Thompson",
              message: "I will start working on this task.",
              "Date Created": "05/27/2023"
            }
          ]
        },
        {
          Title: "Database Optimization",
          Description: "Optimize database queries for improved performance",
          Developer: "Sarah Wilson",
          Submitter: "Robert Thompson",
          Project: "Project Y",
          Priority: "High",
          Status: "Open",
          ticketType: "Bug",
          "Date Created": "07/02/2023",
          comments: [
            {
              commenter: "Emily Davis",
              message: "I noticed some slow queries. We should address this as soon as possible.",
              "Date Created": "01/12/2023"
            },
            {
              commenter: "John Doe",
              message: "Let's profile the database queries to identify the bottlenecks.",
              "Date Created": "02/22/2023"
            },
            {
              commenter: "Alex Johnson",
              message: "We can consider using caching mechanisms for frequent queries.",
              "Date Created": "03/27/2023"
            },
            {
              commenter: "Sarah Wilson",
              message: "I will investigate the queries and optimize them.",
              "Date Created": "04/17/2023"
            },
            {
              commenter: "Robert Thompson",
              message: "I believe the database schema needs some restructuring as well.",
              "Date Created": "05/31/2023"
            }
          ]
        },
        {
          Title: "User Authentication",
          Description: "Implement secure user authentication system",
          Developer: "Jane Smith",
          Submitter: "Sarah Wilson",
          Project: "Project Y",
          Priority: "Medium",
          Status: "Open",
          ticketType: "Enhancement",
          "Date Created": "07/03/2023",
          comments: [
            {
              commenter: "John Doe",
              message: "User authentication is crucial. We should prioritize this.",
              "Date Created": "01/17/2023"
            },
            {
              commenter: "Alex Johnson",
              message: "We can utilize industry-standard encryption algorithms for passwords.",
              "Date Created": "02/27/2023"
            },
            {
              commenter: "Sarah Wilson",
              message: "I will implement multi-factor authentication as an added security measure.",
              "Date Created": "03/31/2023"
            },
            {
              commenter: "Jane Smith",
              message: "Do we have any specific authentication requirements to consider?",
              "Date Created": "04/22/2023"
            },
            {
              commenter: "Emily Davis",
              message: "I can assist with the frontend integration of the authentication system.",
              "Date Created": "05/30/2023",
            }
          ]
        }
      ]
    },
    // Additional Project objects
    // ...
    // ...
  ];
  module.exports = {projectsData, users, tickets, tempProjectData}
  