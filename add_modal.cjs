const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

content = content.replace(
  "export default function ProjectDetail() {",
  "export default function ProjectDetail() {\n  const [selectedImg, setSelectedImg] = useState<string | null>(null);"
);

const modalCode = `
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <img 
            src={selectedImg} 
            className="max-w-full max-h-full object-contain rounded-lg" 
            alt="Enlarged" 
          />
        </div>
      )}
    </div>
  );
}`;

content = content.replace(
  "    </div>\n  );\n}",
  modalCode
);

fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');
console.log("Added modal and state.");
