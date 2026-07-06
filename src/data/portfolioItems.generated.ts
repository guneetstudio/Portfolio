export type PortfolioItem = {
  id: string;
  title: string;
  sourceFolderName: string;
  category: string;
  description: string;
  tags: string[];
  spine: {
    json: string | null;
    atlas: string | null;
    textures: string[];
  };
  thumbnail: string | null;
  animations: string[];
};

export const portfolioItems: PortfolioItem[] = [
  {
    "id": "bag",
    "title": "Bag",
    "sourceFolderName": "Bag",
    "category": "Feature Asset / Prop",
    "description": "Feature prop animation with crisp timing and polished game-ready presentation.",
    "tags": [
      "Spine 2D",
      "Feature Asset",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Bag/bag.json",
      "atlas": "/spine-assets/Bag/bag.atlas",
      "textures": [
        "/spine-assets/Bag/bag.png"
      ]
    },
    "thumbnail": "/spine-assets/Bag/thumbnail.webp",
    "animations": [
      "animation_3x"
    ]
  },
  {
    "id": "butterfly",
    "title": "Butterfly",
    "sourceFolderName": "Butterfly",
    "category": "VFX / Character Motion",
    "description": "Butterfly motion with light VFX energy and clean Spine playback.",
    "tags": [
      "Spine 2D",
      "Character",
      "VFX",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Butterfly/butter_Fly.json",
      "atlas": "/spine-assets/Butterfly/butter_Fly.atlas",
      "textures": [
        "/spine-assets/Butterfly/butter_Fly.png"
      ]
    },
    "thumbnail": "/spine-assets/Butterfly/thumbnail.webp",
    "animations": [
      "animation"
    ]
  },
  {
    "id": "chocolate",
    "title": "Chocolate",
    "sourceFolderName": "Chocolate",
    "category": "Feature Asset / Prop",
    "description": "Chocolate feature asset animation with clean timing and presentation.",
    "tags": [
      "Spine 2D",
      "Feature Asset",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Chocolate/chocolate.json",
      "atlas": "/spine-assets/Chocolate/chocolate.atlas",
      "textures": [
        "/spine-assets/Chocolate/chocolate.png"
      ]
    },
    "thumbnail": "/spine-assets/Chocolate/thumbnail.webp",
    "animations": [
      "win"
    ]
  },
  {
    "id": "chocolate-burst-multiplier",
    "title": "Chocolate Burst Multiplier",
    "sourceFolderName": "ChocolateBurstMultiplier",
    "category": "VFX / Feature Animation",
    "description": "Chocolate Burst Multiplier feature animation with punchy VFX timing and game-ready impact.",
    "tags": [
      "Spine 2D",
      "Feature Asset",
      "VFX",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/ChocolateBurstMultiplier/multiplier.json",
      "atlas": "/spine-assets/ChocolateBurstMultiplier/multiplier.atlas",
      "textures": [
        "/spine-assets/ChocolateBurstMultiplier/multiplier.png"
      ]
    },
    "thumbnail": "/spine-assets/ChocolateBurstMultiplier/thumbnail.webp",
    "animations": [
      "50x"
    ]
  },
  {
    "id": "diamond-scatter",
    "title": "Diamond Scatter",
    "sourceFolderName": "DiamondScatter",
    "category": "Symbol Animation",
    "description": "Scatter symbol animation built for strong visual readability and slot-game impact.",
    "tags": [
      "Spine 2D",
      "Symbol",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/DiamondScatter/Scatter.json",
      "atlas": "/spine-assets/DiamondScatter/Scatter.atlas",
      "textures": [
        "/spine-assets/DiamondScatter/Scatter.png"
      ]
    },
    "thumbnail": "/spine-assets/DiamondScatter/thumbnail.webp",
    "animations": [
      "win"
    ]
  },
  {
    "id": "dog",
    "title": "Dog",
    "sourceFolderName": "Dog",
    "category": "Character Animation",
    "description": "Character animation with readable Spine motion and casino-game timing.",
    "tags": [
      "Spine 2D",
      "Character",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Dog/dog%202.json",
      "atlas": "/spine-assets/Dog/dog%202.atlas",
      "textures": [
        "/spine-assets/Dog/dog%202.png"
      ]
    },
    "thumbnail": "/spine-assets/Dog/thumbnail.webp",
    "animations": [
      "saint"
    ]
  },
  {
    "id": "dolphin",
    "title": "Dolphin",
    "sourceFolderName": "Dolphin",
    "category": "Character Animation",
    "description": "Smooth character motion focused on playful timing and clean Spine playback.",
    "tags": [
      "Spine 2D",
      "Character",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Dolphin/C_Dolphin.json",
      "atlas": "/spine-assets/Dolphin/C_Dolphin.atlas",
      "textures": [
        "/spine-assets/Dolphin/C_Dolphin.png",
        "/spine-assets/Dolphin/C_Dolphin_2.png",
        "/spine-assets/Dolphin/C_Dolphin_3.png"
      ]
    },
    "thumbnail": "/spine-assets/Dolphin/thumbnail.webp",
    "animations": [
      "win"
    ]
  },
  {
    "id": "dragon",
    "title": "Dragon",
    "sourceFolderName": "Dragon",
    "category": "Character Animation",
    "description": "Dragon character animation with clean Spine timing and game-ready motion.",
    "tags": [
      "Spine 2D",
      "Character",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Dragon/Dragon.json",
      "atlas": "/spine-assets/Dragon/Dragon.atlas",
      "textures": [
        "/spine-assets/Dragon/Dragon.png",
        "/spine-assets/Dragon/Dragon_2.png"
      ]
    },
    "thumbnail": "/spine-assets/Dragon/thumbnail.webp",
    "animations": [
      "win"
    ]
  },
  {
    "id": "envelope",
    "title": "Envelope",
    "sourceFolderName": "Envelope",
    "category": "Feature Asset / Prop",
    "description": "Envelope feature asset animation with clean timing and presentation.",
    "tags": [
      "Spine 2D",
      "Feature Asset",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Envelope/envelope.json",
      "atlas": "/spine-assets/Envelope/envelope.atlas",
      "textures": [
        "/spine-assets/Envelope/envelope.png"
      ]
    },
    "thumbnail": "/spine-assets/Envelope/thumbnail.webp",
    "animations": [
      "animation"
    ]
  },
  {
    "id": "hamster",
    "title": "Hamster",
    "sourceFolderName": "Hamster",
    "category": "Character Animation",
    "description": "Hamster character animation with clean Spine timing and game-ready motion.",
    "tags": [
      "Spine 2D",
      "Character",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Hamster/a.json",
      "atlas": "/spine-assets/Hamster/a.atlas",
      "textures": [
        "/spine-assets/Hamster/a.png",
        "/spine-assets/Hamster/a_2.png",
        "/spine-assets/Hamster/a_3.png"
      ]
    },
    "thumbnail": "/spine-assets/Hamster/thumbnail.webp",
    "animations": [
      "win"
    ]
  },
  {
    "id": "hedgehog",
    "title": "Hedgehog",
    "sourceFolderName": "Hedgehog",
    "category": "Character Animation",
    "description": "Hedgehog character animation with clean Spine timing and game-ready motion.",
    "tags": [
      "Spine 2D",
      "Character",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Hedgehog/scatter_01.json",
      "atlas": "/spine-assets/Hedgehog/scatter_01.atlas",
      "textures": [
        "/spine-assets/Hedgehog/scatter_01.png"
      ]
    },
    "thumbnail": "/spine-assets/Hedgehog/thumbnail.webp",
    "animations": [
      "scatter_01_2x"
    ]
  },
  {
    "id": "lady-waitress",
    "title": "Lady Waitress",
    "sourceFolderName": "LadyWaitress",
    "category": "Character Animation",
    "description": "Lady Waitress character animation with clean Spine timing and game-ready motion.",
    "tags": [
      "Spine 2D",
      "Character",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/LadyWaitress/WildAnimation.json",
      "atlas": "/spine-assets/LadyWaitress/WildAnimation.atlas",
      "textures": [
        "/spine-assets/LadyWaitress/WildAnimation.png"
      ]
    },
    "thumbnail": "/spine-assets/LadyWaitress/thumbnail.webp",
    "animations": [
      "avatar/win"
    ]
  },
  {
    "id": "lamp",
    "title": "Lamp",
    "sourceFolderName": "Lamp",
    "category": "Feature Asset / Prop",
    "description": "Lamp feature asset animation with clean timing and presentation.",
    "tags": [
      "Spine 2D",
      "Feature Asset",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Lamp/Lamp.json",
      "atlas": "/spine-assets/Lamp/Lamp.atlas",
      "textures": [
        "/spine-assets/Lamp/Lamp.png"
      ]
    },
    "thumbnail": "/spine-assets/Lamp/thumbnail.webp",
    "animations": [
      "animation"
    ]
  },
  {
    "id": "lollipop",
    "title": "Lollipop",
    "sourceFolderName": "Lollipop",
    "category": "Feature Asset / Prop",
    "description": "Lollipop feature asset animation with clean timing and presentation.",
    "tags": [
      "Spine 2D",
      "Feature Asset",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Lollipop/lollipop.json",
      "atlas": "/spine-assets/Lollipop/lollipop.atlas",
      "textures": [
        "/spine-assets/Lollipop/lollipop.png"
      ]
    },
    "thumbnail": "/spine-assets/Lollipop/thumbnail.webp",
    "animations": [
      "win"
    ]
  },
  {
    "id": "owl",
    "title": "Owl",
    "sourceFolderName": "Owl",
    "category": "Character Animation",
    "description": "Owl character animation with clean Spine timing and game-ready motion.",
    "tags": [
      "Spine 2D",
      "Character",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Owl/OwlReel.json",
      "atlas": "/spine-assets/Owl/OwlReel.atlas",
      "textures": [
        "/spine-assets/Owl/OwlReel.png"
      ]
    },
    "thumbnail": "/spine-assets/Owl/thumbnail.webp",
    "animations": [
      "3Idle"
    ]
  },
  {
    "id": "peepdi",
    "title": "Peepdi",
    "sourceFolderName": "Peepdi",
    "category": "Spine Animation",
    "description": "Peepdi Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Peepdi/peepdi.json",
      "atlas": "/spine-assets/Peepdi/peepdi.atlas",
      "textures": [
        "/spine-assets/Peepdi/peepdi.png"
      ]
    },
    "thumbnail": "/spine-assets/Peepdi/thumbnail.webp",
    "animations": [
      "animation_3x"
    ]
  },
  {
    "id": "red-scatter",
    "title": "Red Scatter",
    "sourceFolderName": "RedScatter",
    "category": "Symbol Animation",
    "description": "Red Scatter symbol animation focused on slot-game readability and impact.",
    "tags": [
      "Spine 2D",
      "Symbol",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/RedScatter/BlueScatter.json",
      "atlas": "/spine-assets/RedScatter/BlueScatter.atlas",
      "textures": [
        "/spine-assets/RedScatter/BlueScatter.png"
      ]
    },
    "thumbnail": "/spine-assets/RedScatter/thumbnail.webp",
    "animations": [
      "Win2"
    ]
  },
  {
    "id": "royals",
    "title": "Royals",
    "sourceFolderName": "Royals",
    "category": "Feature Asset / Prop",
    "description": "Royals feature asset animation with clean timing and presentation.",
    "tags": [
      "Spine 2D",
      "Feature Asset",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Royals/royals.json",
      "atlas": "/spine-assets/Royals/royals.atlas",
      "textures": [
        "/spine-assets/Royals/royals.png"
      ]
    },
    "thumbnail": "/spine-assets/Royals/thumbnail.webp",
    "animations": [
      "club"
    ]
  },
  {
    "id": "santa",
    "title": "Santa",
    "sourceFolderName": "Santa",
    "category": "Character Animation",
    "description": "Santa character animation with clean Spine timing and game-ready motion.",
    "tags": [
      "Spine 2D",
      "Character",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Santa/full_santa.json",
      "atlas": "/spine-assets/Santa/full_santa.atlas",
      "textures": [
        "/spine-assets/Santa/full_santa.png"
      ]
    },
    "thumbnail": "/spine-assets/Santa/thumbnail.webp",
    "animations": [
      "win"
    ]
  },
  {
    "id": "scatter-chef",
    "title": "Scatter Chef",
    "sourceFolderName": "ScatterChef",
    "category": "Symbol Animation",
    "description": "Scatter Chef symbol animation focused on slot-game readability and impact.",
    "tags": [
      "Spine 2D",
      "Symbol",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/ScatterChef/scatter.json",
      "atlas": "/spine-assets/ScatterChef/scatter.atlas",
      "textures": [
        "/spine-assets/ScatterChef/scatter.png"
      ]
    },
    "thumbnail": "/spine-assets/ScatterChef/thumbnail.webp",
    "animations": [
      "main"
    ]
  },
  {
    "id": "slot-wheel",
    "title": "Slot Wheel",
    "sourceFolderName": "SlotWheel",
    "category": "Feature Asset / Prop",
    "description": "Slot Wheel feature asset animation with clean timing and presentation.",
    "tags": [
      "Spine 2D",
      "Feature Asset",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/SlotWheel/slot.json",
      "atlas": "/spine-assets/SlotWheel/slot.atlas",
      "textures": [
        "/spine-assets/SlotWheel/slot.png"
      ]
    },
    "thumbnail": "/spine-assets/SlotWheel/thumbnail.webp",
    "animations": [
      "idle",
      "intro",
      "loop",
      "outro",
      "win"
    ]
  },
  {
    "id": "snowman",
    "title": "Snowman",
    "sourceFolderName": "Snowman",
    "category": "Character Animation",
    "description": "Snowman character animation with clean Spine timing and game-ready motion.",
    "tags": [
      "Spine 2D",
      "Character",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Snowman/b.json",
      "atlas": "/spine-assets/Snowman/b.atlas",
      "textures": [
        "/spine-assets/Snowman/b.png"
      ]
    },
    "thumbnail": "/spine-assets/Snowman/thumbnail.webp",
    "animations": [
      "snowman"
    ]
  },
  {
    "id": "wild-hunter",
    "title": "Wild Hunter",
    "sourceFolderName": "WildHunter",
    "category": "Character Animation",
    "description": "Wild Hunter character animation with clean Spine timing and game-ready motion.",
    "tags": [
      "Spine 2D",
      "Character",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/WildHunter/WILD.json",
      "atlas": "/spine-assets/WildHunter/WILD.atlas",
      "textures": [
        "/spine-assets/WildHunter/WILD.png"
      ]
    },
    "thumbnail": "/spine-assets/WildHunter/thumbnail.webp",
    "animations": [
      "win"
    ]
  },
  {
    "id": "zeus",
    "title": "Zeus",
    "sourceFolderName": "Zeus",
    "category": "Spine Animation",
    "description": "Zeus Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Zeus/H1.json",
      "atlas": "/spine-assets/Zeus/H1.atlas",
      "textures": [
        "/spine-assets/Zeus/H1.png"
      ]
    },
    "thumbnail": "/spine-assets/Zeus/thumbnail.webp",
    "animations": [
      "win"
    ]
  }
];
