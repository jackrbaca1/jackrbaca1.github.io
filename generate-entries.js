const fs = require('fs');
const path = require('path');

// Project and lab data
const projects = [
    { id: 'p1', name: 'CLI Application', description: 'Command Line Interface application' },
    { id: 'p2', name: 'Node.js Intro', description: 'Introduction to Node.js' },
    { id: 'p3', name: 'Git/GitHub', description: 'Version control with Git and GitHub' },
    { id: 'p4', name: 'RESTful API', description: 'Building RESTful APIs with Express' },
    { id: 'p5', name: 'PostgreSQL', description: 'Database integration with PostgreSQL' },
    { id: 'p6', name: 'React Frontend', description: 'Building a React frontend' },
    { id: 'p7', name: 'Portfolio', description: 'GitHub Pages portfolio' }
];

const labs = [
    { id: 'lab1', name: 'Lab 1', description: 'Introduction to JavaScript' },
    { id: 'lab2', name: 'Lab 2', description: 'Node.js and npm' },
    { id: 'lab3', name: 'Lab 3', description: 'Git and GitHub' },
    { id: 'lab4', name: 'Lab 4', description: 'REST API with Express' },
    { id: 'lab5', name: 'Lab 5', description: 'PostgreSQL and pg-promise' },
    { id: 'lab6', name: 'Lab 6', description: 'React Basics' },
    { id: 'lab7', name: 'Lab 7', description: 'GitHub Pages' },
    { id: 'lab8', name: 'Lab 8', description: 'Advanced React' },
    { id: 'lab9', name: 'Lab 9', description: 'Full Stack Application' }
];

// Function to generate HTML for projects or labs
function generateEntries(items, type) {
    return items.map(item => {
        const repoName = `cit281-${item.id}`;
        const repoUrl = `https://github.com/jackrbaca1/${repoName}`;
        const pagesUrl = `https://jackrbaca1.github.io/${repoName}`;
        
        return `
        <div class="${type}">
            <h3>${item.name}: ${item.description}</h3>
            <p>${item.detailedDescription || item.description}</p>
            <a href="${repoUrl}" target="_blank">View on GitHub</a>
            <a href="${pagesUrl}" target="_blank">View Live Demo</a>
        </div>`;
    }).join('\n');
}

// Read the current index.html
const indexPath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(indexPath, 'utf8');

// Generate project and lab entries
const projectsHtml = generateEntries(projects, 'project');
const labsHtml = generateEntries(labs, 'lab');

// Update the content
content = content.replace('<!-- Project entries will go here -->', projectsHtml);
content = content.replace('<!-- Lab entries will go here -->', labsHtml);

// Write the updated content back to index.html
fs.writeFileSync(indexPath, content, 'utf8');

console.log('Successfully updated index.html with project and lab entries!');
