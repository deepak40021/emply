

const employees = [
    {
        "id": 1,
        "firstname": "Amit",
        "email": "employee1@example.com",
        "password": "1234",
        "taskCounts": { "active": 2 ,"newtask": 1, "completed": 1, "failed": 0 },
        "tasks": [
            {
                "title": "Task 1",
                "description": "Complete the project report",
                "date": "2024-12-18",
                "category": "Project",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 2",
                "description": "Attend team meeting",
                "date": "2024-12-19",
                "category": "Meeting",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 3",
                "description": "Submit expense report",
                "date": "2024-12-20",
                "category": "Finance",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "firstname": "Rajesh",
        "email": "employee2@example.com",
        "password": "1234",
        "taskCounts":{ "active": 2 , "newtask": 1 ,"completed": 1 ,"failed": 1},
        "tasks": [
            {
                "title": "Task 1",
                "description": "Prepare for client presentation",
                "date": "2024-12-18",
                "category": "Presentation",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 2",
                "description": "Review project requirements",
                "date": "2024-12-19",
                "category": "Review",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 3",
                "description": "Update software documentation",
                "date": "2024-12-20",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "firstname": "Suresh",
        "email": "employee3@example.com",
        "password": "1234",
        "taskCounts": {"active": 2 ,"newtask": 1 ,"completed": 2 ,"failed": 0},
        "tasks": [
            {
                "title": "Task 1",
                "description": "Conduct code review",
                "date": "2024-12-18",
                "category": "Code Review",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 2",
                "description": "Fix critical bugs",
                "date": "2024-12-19",
                "category": "Bug Fix",
                "active": true,
                "newTask": true,
                "completed": true,
                "failed": false
            },
            {
                "title": "Task 3",
                "description": "Prepare deployment package",
                "date": "2024-12-20",
                "category": "Deployment",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "firstname": "Vikram",
        "email": "employee4@example.com",
        "password": "1234",
        "taskCounts": {"active": 2, "newtask": 1, "completed": 1, "failed": 0},
        "tasks": [
            {
                "title": "Task 1",
                "description": "Research on new technology",
                "date": "2024-12-18",
                "category": "Research",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 2",
                "description": "Draft project proposal",
                "date": "2024-12-19",
                "category": "Proposal",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Task 3",
                "description": "Organize training session",
                "date": "2024-12-20",
                "category": "Training",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "firstname": "Priya",
        "email": "employee5@example.com",
        "password": "1234",
        "taskCounts": {"active": 2 ,"newtask": 1 ,"completed": 1,  "failed": 1},
        "tasks": [
            {
                "title": "Task 1",
                "description": "Create marketing strategy",
                "date": "2024-12-18",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Task 2",
                "description": "Analyze sales data",
                "date": "2024-12-19",
                "category": "Analysis",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Task 3",
                "description": "Plan team outing",
                "date": "2024-12-20",
                "category": "HR",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ]
    }
];


const admin = [
    {
        "id": 1,
        "email": "admin@example.com",
        "password": "1234"
    }
];



export const setLocalStorage = () => {

    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage = () => {

  const employees = JSON.parse(localStorage.getItem('employees'))

  const admin = JSON.parse(localStorage.getItem('admin'))

return {employees , admin}
}

