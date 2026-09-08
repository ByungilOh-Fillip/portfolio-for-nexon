const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const newOrder = `<>
      <Hero />
      <About />
      <ProjectList />
      <OtherWorks />
      <Skills />
    </>`;

content = content.replace(/<>\s*<Hero \/>\s*<About \/>\s*<Skills \/>\s*<ProjectList \/>\s*<OtherWorks \/>\s*<\/>/, newOrder);
fs.writeFileSync('src/pages/Home.tsx', content, 'utf8');
console.log("Updated Home.tsx");
