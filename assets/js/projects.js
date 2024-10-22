const fs = require('fs');
const path = require('path');

// Read project data from JSON file
const projectData = JSON.parse(fs.readFileSync('C:\\Users\\id488\\Documents\\GitHub\\ShadowLumia.github.io\\assets\\json\\projects.json', 'utf8'));

const styles = `
body {
    font-family: Arial, sans-serif;
    background-color: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}
header, footer {
    text-align: center;
    margin: 20px 0;
}
.project-container {
    width: 80%;
    max-width: 1200px;
}
.project-card {
    border: 1px solid #e74c3c;
    padding: 20px;
    background-color: #1c1c1c;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(231, 76, 60, 0.2);
    margin-bottom: 20px;
    transition: transform 0.2s;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.project-card:hover {
    transform: scale(1.05);
}
.project-card h3 {
    margin-top: 0;
    color: #e74c3c;
}
.project-card p {
    margin: 10px 0;
    color: #c0392b;
}
.project-card img, .project-card iframe {
    max-width: 100%;
    border-radius: 5px;
    margin: 10px 0;
}
.project-card a {
    color: #e74c3c;
    text-decoration: none;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #e74c3c;
    border-radius: 5px;
    transition: background-color 0.2s;
}
.project-card a:hover {
    background-color: #e74c3c;
    color: #fff;
}
`;

const createProjectPage = (project) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${project.title}</title>
        <style>${styles}</style>
    </head>
    <body>
        <header>
            <h1>${project.title}</h1>
        </header>
        <div class="project-container">
            <div class="project-card">
                <h3>${project.title}</h3>
                <p>Type: ${project.type}</p>
                <p>Status: ${project.status}</p>
                <img src="${project.imageUrl}" alt="${project.title}">
                <iframe src="${project.videoUrl}" allowfullscreen></iframe>
                <p><a href="${project.itchUrl}">Visit the Itch.io page</a></p>
            </div>
        </div>
        <footer>
            <p>&copy; Kieran Lewis. All Rights Reserved.</p>
            <a href="../index.html">Back to Home</a>
        </footer>
    </body>
    </html>
    `;
};

const outputDir = 'C:\\Users\\id488\\Documents\\GitHub\\ShadowLumia.github.io\\projects';

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

projectData.forEach(project => {
    const content = createProjectPage(project);
    const fileName = project.title.replace(/ /g, '_').toLowerCase() + '.html';
    fs.writeFileSync(path.join(outputDir, fileName), content);
});

console.log('Project pages generated!');
