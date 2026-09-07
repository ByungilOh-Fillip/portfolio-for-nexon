const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

// 1. AIRE
const aireCharts = `
const aireGatewayChart = \`flowchart LR
    A["BT_AI (Behavior Tree)"] -->|"Task Request"| B["AI Controller"]
    B -->|"Command"| C["Command Gateway (C++)"]
    C -->|"Execute"| D["Movement / Attack / Skill"]
    C -->|"Update State"| E["BlackBoard"]
    E -.->|"Condition Check"| A\`;

const aireWeaponChart = \`flowchart TD
    subgraph Data [Data Layer]
        DT_Weapon["DataTable (Weapon_DT)"]
        DA_Weapon["DataAsset (UWeaponData)"]
        DT_Weapon -.-> |Rows to Assets| DA_Weapon
    end
    
    subgraph Logic [Logic Layer]
        WP_Base["AWeaponBase (C++)"]
        WP_Melee["AWeapon_Melee"]
        WP_Range["AWeapon_Range"]
        WP_Base <|-- WP_Melee
        WP_Base <|-- WP_Range
    end
    
    DA_Weapon --> |Injected into| WP_Base\`;

const aireItemChart = \`flowchart TD
    subgraph Data [Item Data Layer]
        DA_Item["UItemData (DataAsset)"]
        DA_Item --> |Includes| Mesh["Static Mesh"]
        DA_Item --> |Includes| Icon["UI Icon (Texture2D)"]
        DA_Item --> |Includes| Stat["Effect Stats"]
    end
    
    subgraph System [Inventory System]
        InvComp["UInventoryComponent"]
        InvComp --> |Array of| DA_Item
    end
    
    subgraph UI [User Interface]
        UI_Inv["WBP_Inventory"]
        UI_Inv -.-> |Reads Icon/Name| InvComp
    end\`;
`;

content = content.replace("case 'aire':", "case 'aire':\n" + aireCharts);

// Replace AIRE Gateway Image with Mermaid
content = content.replace(
  '<img src={aiCommandGatewayImg} alt="AI Command Gateway" className="w-full h-auto object-contain p-4" />',
  '<Mermaid chart={aireGatewayChart} />'
);

// Replace AIRE Weapon Image with Mermaid
content = content.replace(
  '<img src={dddWeaponImg} alt="Weapon DDD" className="w-full h-auto object-contain" />',
  '<Mermaid chart={aireWeaponChart} />'
);

// Replace AIRE Item Image with Mermaid
content = content.replace(
  '<img src={dddItemImg} alt="Item DDD" className="w-full h-auto object-contain" />',
  '<Mermaid chart={aireItemChart} />'
);

// 2. PalWorld
const palCharts = `
const palArchChart = \`flowchart TD
    subgraph Data [Data Layer]
        DA_Pal["UDataAsset (UPalData)"]
        DA_Pal --> |Defines| Stats["Base Stats, Model, Type"]
    end
    
    subgraph Runtime [Runtime Layer]
        AC_Pal["UPalComponent (Actor Component)"]
        AC_Pal --> |Manages| HP["Current HP, Status"]
        AC_Pal --> |Uses| Tags["Gameplay Tags"]
    end
    
    DA_Pal -.->|Loaded by| AC_Pal
    AC_Pal --> |Replicated to| Clients["Client Proxies"]\`;
`;

content = content.replace("case 'palworld':", "case 'palworld':\n" + palCharts);

// Replace Palworld Image check with Mermaid
const palworldImageTarget = `{imgPalworldArch && (
                <div className="w-full bg-black border border-game-muted/20 rounded-xl overflow-hidden mt-4">
                  <img src={imgPalworldArch} alt="Architecture" className="w-full h-auto object-contain" />
                </div>
              )}`;

const palworldMermaid = `<div className="w-full bg-black/80 border border-game-muted/20 rounded-xl overflow-hidden mt-4 p-6 flex flex-col justify-center items-center">
                <span className="text-game-accent font-mono text-xs mb-4 w-full">▼ Data & Runtime Architecture (Mermaid)</span>
                <Mermaid chart={palArchChart} />
              </div>`;

content = content.replace(palworldImageTarget, palworldMermaid);

fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');

console.log("Replaced images with Mermaid");
