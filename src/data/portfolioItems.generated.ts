export const portfolioDisplayFolders = [{"label":"Symbols","folder":"Symbols"},{"label":"Background","folder":"Background"},{"label":"Transitions","folder":"Transition"},{"label":"Popups","folder":"Popups"},{"label":"Anticipation","folder":"Anticipation"},{"label":"UI Buttons","folder":"UI Buttons"}] as const;

export type DisplayFolder = (typeof portfolioDisplayFolders)[number]["folder"];

export type PortfolioItem = {
  id: string;
  title: string;
  sourceFolderName: string;
  displayFolder: DisplayFolder;
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
    "id": "symbols-anchor",
    "title": "Anchor",
    "sourceFolderName": "Anchor",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Anchor Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Anchor/anchor.json",
      "atlas": "/spine-assets/Symbols/Anchor/anchor.atlas",
      "textures": [
        "/spine-assets/Symbols/Anchor/anchor.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Anchor/thumbnail.webp",
    "animations": [
      "main"
    ]
  },
  {
    "id": "symbols-bag",
    "title": "Bag",
    "sourceFolderName": "Bag",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Bag Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Bag/bag.json",
      "atlas": "/spine-assets/Symbols/Bag/bag.atlas",
      "textures": [
        "/spine-assets/Symbols/Bag/bag.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Bag/thumbnail.webp",
    "animations": [
      "animation_3x"
    ]
  },
  {
    "id": "symbols-bell",
    "title": "Bell",
    "sourceFolderName": "Bell",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Bell Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Bell/c.json",
      "atlas": "/spine-assets/Symbols/Bell/c.atlas",
      "textures": [
        "/spine-assets/Symbols/Bell/c.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Bell/thumbnail.png",
    "animations": [
      "bell"
    ]
  },
  {
    "id": "symbols-boat",
    "title": "Boat",
    "sourceFolderName": "Boat",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Boat Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Boat/boat%20animation.json",
      "atlas": "/spine-assets/Symbols/Boat/boat%20animation.atlas",
      "textures": [
        "/spine-assets/Symbols/Boat/boat%20animation.png",
        "/spine-assets/Symbols/Boat/boat%20animation_2.png",
        "/spine-assets/Symbols/Boat/boat%20animation_3.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Boat/thumbnail.webp",
    "animations": [
      "animation"
    ]
  },
  {
    "id": "symbols-bone",
    "title": "Bone",
    "sourceFolderName": "Bone",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Bone Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Bone/bone.json",
      "atlas": "/spine-assets/Symbols/Bone/bone.atlas",
      "textures": [
        "/spine-assets/Symbols/Bone/bone.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Bone/thumbnail.webp",
    "animations": [
      "animation"
    ]
  },
  {
    "id": "symbols-butterfly",
    "title": "Butterfly",
    "sourceFolderName": "Butterfly",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Butterfly Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Butterfly/butter_Fly.json",
      "atlas": "/spine-assets/Symbols/Butterfly/butter_Fly.atlas",
      "textures": [
        "/spine-assets/Symbols/Butterfly/butter_Fly.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Butterfly/thumbnail.webp",
    "animations": [
      "animation"
    ]
  },
  {
    "id": "symbols-chocolate",
    "title": "Chocolate",
    "sourceFolderName": "Chocolate",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Chocolate Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Chocolate/chocolate-v2.json",
      "atlas": "/spine-assets/Symbols/Chocolate/chocolate-v2.atlas",
      "textures": [
        "/spine-assets/Symbols/Chocolate/chocolate-v2.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Chocolate/thumbnail.webp",
    "animations": [
      "win"
    ]
  },
  {
    "id": "symbols-chocolate-burst-multiplier",
    "title": "Chocolate Burst Multiplier",
    "sourceFolderName": "ChocolateBurstMultiplier",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Chocolate Burst Multiplier Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/ChocolateBurstMultiplier/multiplier.json",
      "atlas": "/spine-assets/Symbols/ChocolateBurstMultiplier/multiplier.atlas",
      "textures": [
        "/spine-assets/Symbols/ChocolateBurstMultiplier/multiplier.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/ChocolateBurstMultiplier/thumbnail.webp",
    "animations": [
      "50x"
    ]
  },
  {
    "id": "symbols-diamond-scatter",
    "title": "Diamond Scatter",
    "sourceFolderName": "DiamondScatter",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Diamond Scatter Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/DiamondScatter/Scatter.json",
      "atlas": "/spine-assets/Symbols/DiamondScatter/Scatter.atlas",
      "textures": [
        "/spine-assets/Symbols/DiamondScatter/Scatter.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/DiamondScatter/thumbnail.webp",
    "animations": [
      "win"
    ]
  },
  {
    "id": "symbols-dog",
    "title": "Dog",
    "sourceFolderName": "Dog",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Dog Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Dog/dog%202.json",
      "atlas": "/spine-assets/Symbols/Dog/dog%202.atlas",
      "textures": [
        "/spine-assets/Symbols/Dog/dog%202.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Dog/thumbnail.webp",
    "animations": [
      "saint"
    ]
  },
  {
    "id": "symbols-dolphin",
    "title": "Dolphin",
    "sourceFolderName": "Dolphin",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Dolphin Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Dolphin/C_Dolphin.json",
      "atlas": "/spine-assets/Symbols/Dolphin/C_Dolphin.atlas",
      "textures": [
        "/spine-assets/Symbols/Dolphin/C_Dolphin.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Dolphin/thumbnail.webp",
    "animations": [
      "win"
    ]
  },
  {
    "id": "symbols-dragon",
    "title": "Dragon",
    "sourceFolderName": "Dragon",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Dragon Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Dragon/Dragon.json",
      "atlas": "/spine-assets/Symbols/Dragon/Dragon.atlas",
      "textures": [
        "/spine-assets/Symbols/Dragon/Dragon.png",
        "/spine-assets/Symbols/Dragon/Dragon_2.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Dragon/thumbnail.webp",
    "animations": [
      "win"
    ]
  },
  {
    "id": "symbols-envelope",
    "title": "Envelope",
    "sourceFolderName": "Envelope",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Envelope Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Envelope/envelope.json",
      "atlas": "/spine-assets/Symbols/Envelope/envelope.atlas",
      "textures": [
        "/spine-assets/Symbols/Envelope/envelope.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Envelope/thumbnail.webp",
    "animations": [
      "animation"
    ]
  },
  {
    "id": "symbols-fairy",
    "title": "Fairy",
    "sourceFolderName": "Fairy",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Fairy Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Fairy/scatter.json",
      "atlas": "/spine-assets/Symbols/Fairy/scatter.atlas",
      "textures": [
        "/spine-assets/Symbols/Fairy/scatter.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Fairy/thumbnail.webp",
    "animations": [
      "s_win"
    ]
  },
  {
    "id": "symbols-hamster",
    "title": "Hamster",
    "sourceFolderName": "Hamster",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Hamster Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Hamster/a.json",
      "atlas": "/spine-assets/Symbols/Hamster/a.atlas",
      "textures": [
        "/spine-assets/Symbols/Hamster/a.png",
        "/spine-assets/Symbols/Hamster/a_2.png",
        "/spine-assets/Symbols/Hamster/a_3.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Hamster/thumbnail.webp",
    "animations": [
      "win"
    ]
  },
  {
    "id": "symbols-hat-magical",
    "title": "Hat Magical",
    "sourceFolderName": "HatMagical",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Hat Magical Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/HatMagical/hat.json",
      "atlas": "/spine-assets/Symbols/HatMagical/hat.atlas",
      "textures": [
        "/spine-assets/Symbols/HatMagical/hat.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/HatMagical/thumbnail.webp",
    "animations": [
      "animation"
    ]
  },
  {
    "id": "symbols-hat-skull",
    "title": "Hat Skull",
    "sourceFolderName": "HatSkull",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Hat Skull Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/HatSkull/hat.json",
      "atlas": "/spine-assets/Symbols/HatSkull/hat.atlas",
      "textures": [
        "/spine-assets/Symbols/HatSkull/hat.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/HatSkull/thumbnail.webp",
    "animations": [
      "main"
    ]
  },
  {
    "id": "symbols-hedgehog",
    "title": "Hedgehog",
    "sourceFolderName": "Hedgehog",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Hedgehog Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Hedgehog/scatter_01.json",
      "atlas": "/spine-assets/Symbols/Hedgehog/scatter_01.atlas",
      "textures": [
        "/spine-assets/Symbols/Hedgehog/scatter_01.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Hedgehog/thumbnail.webp",
    "animations": [
      "scatter_01_2x"
    ]
  },
  {
    "id": "symbols-hut",
    "title": "Hut",
    "sourceFolderName": "Hut",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Hut Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Hut/dog%20house.json",
      "atlas": "/spine-assets/Symbols/Hut/dog%20house.atlas",
      "textures": [
        "/spine-assets/Symbols/Hut/dog%20house.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Hut/thumbnail.webp",
    "animations": [
      "animation"
    ]
  },
  {
    "id": "symbols-jackpot",
    "title": "Jackpot",
    "sourceFolderName": "Jackpot",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Jackpot Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Jackpot/Jackpot.json",
      "atlas": "/spine-assets/Symbols/Jackpot/Jackpot.atlas",
      "textures": [
        "/spine-assets/Symbols/Jackpot/Jackpot.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Jackpot/thumbnail.webp",
    "animations": [
      "GRAND",
      "MAJOR",
      "MINI",
      "MINOR"
    ]
  },
  {
    "id": "symbols-lady-scatter",
    "title": "Lady Scatter",
    "sourceFolderName": "LadyScatter",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Lady Scatter Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/LadyScatter/female%20scatter.json",
      "atlas": "/spine-assets/Symbols/LadyScatter/female%20scatter.atlas",
      "textures": [
        "/spine-assets/Symbols/LadyScatter/female%20scatter.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/LadyScatter/thumbnail.webp",
    "animations": [
      "animation"
    ]
  },
  {
    "id": "symbols-lady-waitress",
    "title": "Lady Waitress",
    "sourceFolderName": "LadyWaitress",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Lady Waitress Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/LadyWaitress/WildAnimation.json",
      "atlas": "/spine-assets/Symbols/LadyWaitress/WildAnimation.atlas",
      "textures": [
        "/spine-assets/Symbols/LadyWaitress/WildAnimation.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/LadyWaitress/thumbnail.webp",
    "animations": [
      "avatar/win"
    ]
  },
  {
    "id": "symbols-lamp",
    "title": "Lamp",
    "sourceFolderName": "Lamp",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Lamp Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Lamp/Lamp.json",
      "atlas": "/spine-assets/Symbols/Lamp/Lamp.atlas",
      "textures": [
        "/spine-assets/Symbols/Lamp/Lamp.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Lamp/thumbnail.webp",
    "animations": [
      "animation"
    ]
  },
  {
    "id": "symbols-lollipop",
    "title": "Lollipop",
    "sourceFolderName": "Lollipop",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Lollipop Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Lollipop/lollipop.json",
      "atlas": "/spine-assets/Symbols/Lollipop/lollipop.atlas",
      "textures": [
        "/spine-assets/Symbols/Lollipop/lollipop.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Lollipop/thumbnail.webp",
    "animations": [
      "win"
    ]
  },
  {
    "id": "symbols-ninja",
    "title": "Ninja",
    "sourceFolderName": "Ninja",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Ninja Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Ninja/ninja_avatar.json",
      "atlas": "/spine-assets/Symbols/Ninja/ninja_avatar.atlas",
      "textures": [
        "/spine-assets/Symbols/Ninja/ninja_avatar.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Ninja/thumbnail.webp",
    "animations": [
      "idle",
      "idle_eye_blink",
      "win"
    ]
  },
  {
    "id": "symbols-parrot",
    "title": "Parrot",
    "sourceFolderName": "Parrot",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Parrot Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Parrot/PARROT.json",
      "atlas": "/spine-assets/Symbols/Parrot/PARROT.atlas",
      "textures": [
        "/spine-assets/Symbols/Parrot/PARROT.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Parrot/thumbnail.webp",
    "animations": [
      "animation"
    ]
  },
  {
    "id": "symbols-peepdi",
    "title": "Peepdi",
    "sourceFolderName": "Peepdi",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Peepdi Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Peepdi/peepdi.json",
      "atlas": "/spine-assets/Symbols/Peepdi/peepdi.atlas",
      "textures": [
        "/spine-assets/Symbols/Peepdi/peepdi.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Peepdi/thumbnail.webp",
    "animations": [
      "animation_3x"
    ]
  },
  {
    "id": "symbols-pug",
    "title": "Pug",
    "sourceFolderName": "Pug",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Pug Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Pug/wild.json",
      "atlas": "/spine-assets/Symbols/Pug/wild.atlas",
      "textures": [
        "/spine-assets/Symbols/Pug/wild.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Pug/thumbnail.webp",
    "animations": [
      "wild"
    ]
  },
  {
    "id": "symbols-royals",
    "title": "Royals",
    "sourceFolderName": "Royals",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Royals Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Royals/royals.json",
      "atlas": "/spine-assets/Symbols/Royals/royals.atlas",
      "textures": [
        "/spine-assets/Symbols/Royals/royals.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Royals/thumbnail.webp",
    "animations": [
      "club"
    ]
  },
  {
    "id": "symbols-santa",
    "title": "Santa",
    "sourceFolderName": "Santa",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Santa Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Santa/full_santa.json",
      "atlas": "/spine-assets/Symbols/Santa/full_santa.atlas",
      "textures": [
        "/spine-assets/Symbols/Santa/full_santa.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Santa/thumbnail.webp",
    "animations": [
      "win"
    ]
  },
  {
    "id": "symbols-scatter-chef",
    "title": "Scatter Chef",
    "sourceFolderName": "ScatterChef",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Scatter Chef Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/ScatterChef/scatter.json",
      "atlas": "/spine-assets/Symbols/ScatterChef/scatter.atlas",
      "textures": [
        "/spine-assets/Symbols/ScatterChef/scatter.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/ScatterChef/thumbnail.webp",
    "animations": [
      "main"
    ]
  },
  {
    "id": "symbols-slot-wheel",
    "title": "Slot Wheel",
    "sourceFolderName": "SlotWheel",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Slot Wheel Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/SlotWheel/slot.json",
      "atlas": "/spine-assets/Symbols/SlotWheel/slot.atlas",
      "textures": [
        "/spine-assets/Symbols/SlotWheel/slot.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/SlotWheel/thumbnail.webp",
    "animations": [
      "idle",
      "intro",
      "loop",
      "outro",
      "win"
    ]
  },
  {
    "id": "symbols-snowman",
    "title": "Snowman",
    "sourceFolderName": "Snowman",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Snowman Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Snowman/b.json",
      "atlas": "/spine-assets/Symbols/Snowman/b.atlas",
      "textures": [
        "/spine-assets/Symbols/Snowman/b.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Snowman/thumbnail.webp",
    "animations": [
      "snowman"
    ]
  },
  {
    "id": "symbols-squirrel",
    "title": "Squirrel",
    "sourceFolderName": "Squirrel",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Squirrel Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/Squirrel/b.json",
      "atlas": "/spine-assets/Symbols/Squirrel/b.atlas",
      "textures": [
        "/spine-assets/Symbols/Squirrel/b.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/Squirrel/thumbnail.webp",
    "animations": [
      "b_win"
    ]
  },
  {
    "id": "symbols-wild-hunter",
    "title": "Wild Hunter",
    "sourceFolderName": "WildHunter",
    "displayFolder": "Symbols",
    "category": "Symbol Animation",
    "description": "Wild Hunter Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Symbols",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Symbols/WildHunter/WILD.json",
      "atlas": "/spine-assets/Symbols/WildHunter/WILD.atlas",
      "textures": [
        "/spine-assets/Symbols/WildHunter/WILD.png"
      ]
    },
    "thumbnail": "/spine-assets/Symbols/WildHunter/thumbnail.webp",
    "animations": [
      "win"
    ]
  },
  {
    "id": "background-fish",
    "title": "Fish",
    "sourceFolderName": "Fish",
    "displayFolder": "Background",
    "category": "Background Animation",
    "description": "Fish Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Background",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Background/Fish/base%20game%20bg.json",
      "atlas": "/spine-assets/Background/Fish/base%20game%20bg.atlas",
      "textures": [
        "/spine-assets/Background/Fish/base%20game%20bg.png"
      ]
    },
    "thumbnail": "/spine-assets/Background/Fish/thumbnail.webp",
    "animations": [
      "Base Game",
      "Free Game"
    ]
  },
  {
    "id": "background-forest",
    "title": "Forest",
    "sourceFolderName": "Forest",
    "displayFolder": "Background",
    "category": "Background Animation",
    "description": "Forest Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Background",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Background/Forest/Background.json",
      "atlas": "/spine-assets/Background/Forest/Background.atlas",
      "textures": [
        "/spine-assets/Background/Forest/Background.png"
      ]
    },
    "thumbnail": "/spine-assets/Background/Forest/thumbnail.webp",
    "animations": [
      "Desktop/Base_game",
      "Desktop/Free_game"
    ]
  },
  {
    "id": "background-santa",
    "title": "Santa",
    "sourceFolderName": "Santa",
    "displayFolder": "Background",
    "category": "Background Animation",
    "description": "Santa Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Background",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Background/Santa/bg_jingle01.json",
      "atlas": "/spine-assets/Background/Santa/bg_jingle01.atlas",
      "textures": [
        "/spine-assets/Background/Santa/bg_jingle01.png",
        "/spine-assets/Background/Santa/bg_jingle01_2.png"
      ]
    },
    "thumbnail": "/spine-assets/Background/Santa/thumbnail.webp",
    "animations": [
      "freegame"
    ]
  },
  {
    "id": "background-way-of-the-dead",
    "title": "Way Of The Dead",
    "sourceFolderName": "WayOfTheDead",
    "displayFolder": "Background",
    "category": "Background Animation",
    "description": "Way Of The Dead Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Background",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Background/WayOfTheDead/main_bg.json",
      "atlas": "/spine-assets/Background/WayOfTheDead/main_bg.atlas",
      "textures": [
        "/spine-assets/Background/WayOfTheDead/main_bg.png"
      ]
    },
    "thumbnail": "/spine-assets/Background/WayOfTheDead/thumbnail.webp",
    "animations": [
      "basegame_desktop_bg",
      "basegame_desktop_reel-bg_movement",
      "basegame_portrait_bg"
    ]
  },
  {
    "id": "transition-dolphin-transition",
    "title": "Dolphin Transition",
    "sourceFolderName": "DolphinTransition",
    "displayFolder": "Transition",
    "category": "Transition Animation",
    "description": "Dolphin Transition Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Transition",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Transition/DolphinTransition/Dolphine.json",
      "atlas": "/spine-assets/Transition/DolphinTransition/Dolphine.atlas",
      "textures": [
        "/spine-assets/Transition/DolphinTransition/Dolphine.webp",
        "/spine-assets/Transition/DolphinTransition/Dolphine_2.webp",
        "/spine-assets/Transition/DolphinTransition/Dolphine_3.webp",
        "/spine-assets/Transition/DolphinTransition/Dolphine_4.webp"
      ]
    },
    "thumbnail": "/spine-assets/Transition/DolphinTransition/thumbnail.webp",
    "animations": [
      "transition"
    ]
  },
  {
    "id": "transition-leprecaun",
    "title": "Leprecaun",
    "sourceFolderName": "Leprecaun",
    "displayFolder": "Transition",
    "category": "Transition Animation",
    "description": "Leprecaun Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Transition",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Transition/Leprecaun/Lucky%20Quest%20Transition.json",
      "atlas": "/spine-assets/Transition/Leprecaun/Lucky%20Quest%20Transition.atlas",
      "textures": [
        "/spine-assets/Transition/Leprecaun/Lucky%20Quest%20Transition.png"
      ]
    },
    "thumbnail": "/spine-assets/Transition/Leprecaun/thumbnail.webp",
    "animations": [
      "Desktop",
      "Portrait"
    ]
  },
  {
    "id": "transition-sugar-rush",
    "title": "Sugar Rush",
    "sourceFolderName": "SugarRush",
    "displayFolder": "Transition",
    "category": "Transition Animation",
    "description": "Sugar Rush Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Transition",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Transition/SugarRush/skeleton.json",
      "atlas": "/spine-assets/Transition/SugarRush/skeleton.atlas",
      "textures": [
        "/spine-assets/Transition/SugarRush/skeleton.png"
      ]
    },
    "thumbnail": "/spine-assets/Transition/SugarRush/thumbnail.webp",
    "animations": [
      "landscape"
    ]
  },
  {
    "id": "popups-free-spins-dog",
    "title": "Free Spins Dog",
    "sourceFolderName": "FreeSpinsDog",
    "displayFolder": "Popups",
    "category": "Popup Animation",
    "description": "Free Spins Dog Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Popups",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Popups/FreeSpinsDog/all_win.json",
      "atlas": "/spine-assets/Popups/FreeSpinsDog/all_win.atlas",
      "textures": [
        "/spine-assets/Popups/FreeSpinsDog/all_win.png"
      ]
    },
    "thumbnail": "/spine-assets/Popups/FreeSpinsDog/thumbnail.webp",
    "animations": [
      "CONGRATULATIONS_FREE SPINS/intro",
      "CONGRATULATIONS_FREE SPINS/loop",
      "CONGRATULATIONS_FREE SPINS/outro"
    ]
  },
  {
    "id": "popups-wintext-water",
    "title": "Wintext Water",
    "sourceFolderName": "WintextWater",
    "displayFolder": "Popups",
    "category": "Popup Animation",
    "description": "Wintext Water Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Popups",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Popups/WintextWater/all%20win%20bg%20chopped%20final.json",
      "atlas": "/spine-assets/Popups/WintextWater/all%20win%20bg%20chopped%20final.atlas",
      "textures": [
        "/spine-assets/Popups/WintextWater/all%20win%20bg%20chopped%20final.png"
      ]
    },
    "thumbnail": "/spine-assets/Popups/WintextWater/thumbnail.webp",
    "animations": [
      "fantastic_intro",
      "fantastic_loop",
      "fantastic_outro"
    ]
  },
  {
    "id": "anticipation-1",
    "title": "1",
    "sourceFolderName": "1",
    "displayFolder": "Anticipation",
    "category": "Anticipation Animation",
    "description": "1 Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Anticipation",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Anticipation/1/Anticipation.json",
      "atlas": "/spine-assets/Anticipation/1/Anticipation.atlas",
      "textures": [
        "/spine-assets/Anticipation/1/Anticipation.png"
      ]
    },
    "thumbnail": "/spine-assets/Anticipation/1/thumbnail.webp",
    "animations": [
      "animation"
    ]
  },
  {
    "id": "anticipation-2",
    "title": "2",
    "sourceFolderName": "2",
    "displayFolder": "Anticipation",
    "category": "Anticipation Animation",
    "description": "2 Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "Anticipation",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/Anticipation/2/reel_anticipation.json",
      "atlas": "/spine-assets/Anticipation/2/reel_anticipation.atlas",
      "textures": [
        "/spine-assets/Anticipation/2/reel_anticipation.png"
      ]
    },
    "thumbnail": "/spine-assets/Anticipation/2/thumbnail.webp",
    "animations": [
      "loop"
    ]
  },
  {
    "id": "ui-buttons-clear",
    "title": "Clear",
    "sourceFolderName": "clear",
    "displayFolder": "UI Buttons",
    "category": "UI Animation",
    "description": "Clear Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "UI Buttons",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/UI%20Buttons/clear.json",
      "atlas": "/spine-assets/UI%20Buttons/clear.atlas",
      "textures": [
        "/spine-assets/UI%20Buttons/clear.png"
      ]
    },
    "thumbnail": null,
    "animations": [
      "disable_eng",
      "disable_sp",
      "hover_eng",
      "hover_sp",
      "normal_eng",
      "normal_sp"
    ]
  },
  {
    "id": "ui-buttons-deal",
    "title": "Deal",
    "sourceFolderName": "deal",
    "displayFolder": "UI Buttons",
    "category": "UI Animation",
    "description": "Deal Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "UI Buttons",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/UI%20Buttons/deal.json",
      "atlas": "/spine-assets/UI%20Buttons/deal.atlas",
      "textures": [
        "/spine-assets/UI%20Buttons/deal.png"
      ]
    },
    "thumbnail": null,
    "animations": [
      "disable_eng",
      "disable_sp",
      "hover_eng",
      "hover_sp",
      "normal_eng",
      "normal_sp"
    ]
  },
  {
    "id": "ui-buttons-double-down",
    "title": "Double Down",
    "sourceFolderName": "double_down",
    "displayFolder": "UI Buttons",
    "category": "UI Animation",
    "description": "Double Down Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "UI Buttons",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/UI%20Buttons/double_down.json",
      "atlas": "/spine-assets/UI%20Buttons/double_down.atlas",
      "textures": [
        "/spine-assets/UI%20Buttons/double_down.png"
      ]
    },
    "thumbnail": null,
    "animations": [
      "disable_eng",
      "disable_sp",
      "hover_eng",
      "hover_sp",
      "normal_eng",
      "normal_sp"
    ]
  },
  {
    "id": "ui-buttons-hit",
    "title": "Hit",
    "sourceFolderName": "hit",
    "displayFolder": "UI Buttons",
    "category": "UI Animation",
    "description": "Hit Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "UI Buttons",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/UI%20Buttons/hit.json",
      "atlas": "/spine-assets/UI%20Buttons/hit.atlas",
      "textures": [
        "/spine-assets/UI%20Buttons/hit.png"
      ]
    },
    "thumbnail": null,
    "animations": [
      "disable_eng",
      "disable_sp",
      "hover_eng",
      "hover_sp",
      "normal_eg",
      "normal_sp"
    ]
  },
  {
    "id": "ui-buttons-new-game",
    "title": "New Game",
    "sourceFolderName": "new_game",
    "displayFolder": "UI Buttons",
    "category": "UI Animation",
    "description": "New Game Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "UI Buttons",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/UI%20Buttons/new_game.json",
      "atlas": "/spine-assets/UI%20Buttons/new_game.atlas",
      "textures": [
        "/spine-assets/UI%20Buttons/new_game.png"
      ]
    },
    "thumbnail": null,
    "animations": [
      "disable_eng",
      "disable_sp",
      "hover_eng",
      "hover_sp",
      "normal_eng",
      "normal_sp"
    ]
  },
  {
    "id": "ui-buttons-no",
    "title": "No",
    "sourceFolderName": "no",
    "displayFolder": "UI Buttons",
    "category": "UI Animation",
    "description": "No Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "UI Buttons",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/UI%20Buttons/no.json",
      "atlas": "/spine-assets/UI%20Buttons/no.atlas",
      "textures": [
        "/spine-assets/UI%20Buttons/no.png"
      ]
    },
    "thumbnail": null,
    "animations": [
      "disable_eng",
      "disable_sp",
      "hover_eng",
      "hover_sp",
      "normal_eng",
      "normal_sp"
    ]
  },
  {
    "id": "ui-buttons-rebet-deal",
    "title": "Rebet Deal",
    "sourceFolderName": "rebet_deal",
    "displayFolder": "UI Buttons",
    "category": "UI Animation",
    "description": "Rebet Deal Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "UI Buttons",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/UI%20Buttons/rebet_deal.json",
      "atlas": "/spine-assets/UI%20Buttons/rebet_deal.atlas",
      "textures": [
        "/spine-assets/UI%20Buttons/rebet_deal.png"
      ]
    },
    "thumbnail": null,
    "animations": [
      "disable_eng",
      "disable_sp",
      "hover_eng",
      "hover_sp",
      "normal_eng",
      "normal_sp"
    ]
  },
  {
    "id": "ui-buttons-rebet",
    "title": "Rebet",
    "sourceFolderName": "rebet",
    "displayFolder": "UI Buttons",
    "category": "UI Animation",
    "description": "Rebet Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "UI Buttons",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/UI%20Buttons/rebet.json",
      "atlas": "/spine-assets/UI%20Buttons/rebet.atlas",
      "textures": [
        "/spine-assets/UI%20Buttons/rebet.png"
      ]
    },
    "thumbnail": null,
    "animations": [
      "disable_eng",
      "disable_sp",
      "hover_eng",
      "hover_sp",
      "normal_eng",
      "normal_sp"
    ]
  },
  {
    "id": "ui-buttons-split",
    "title": "Split",
    "sourceFolderName": "split",
    "displayFolder": "UI Buttons",
    "category": "UI Animation",
    "description": "Split Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "UI Buttons",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/UI%20Buttons/split.json",
      "atlas": "/spine-assets/UI%20Buttons/split.atlas",
      "textures": [
        "/spine-assets/UI%20Buttons/split.png"
      ]
    },
    "thumbnail": null,
    "animations": [
      "disable_eng",
      "disable_sp",
      "hover_eng",
      "hover_sp",
      "normal_eng",
      "normal_sp"
    ]
  },
  {
    "id": "ui-buttons-stand",
    "title": "Stand",
    "sourceFolderName": "stand",
    "displayFolder": "UI Buttons",
    "category": "UI Animation",
    "description": "Stand Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "UI Buttons",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/UI%20Buttons/stand.json",
      "atlas": "/spine-assets/UI%20Buttons/stand.atlas",
      "textures": [
        "/spine-assets/UI%20Buttons/stand.png"
      ]
    },
    "thumbnail": null,
    "animations": [
      "disable_eng",
      "disable_sp",
      "hover_eng",
      "hover_sp",
      "normal_eng",
      "normal_sp"
    ]
  },
  {
    "id": "ui-buttons-undo",
    "title": "Undo",
    "sourceFolderName": "undo",
    "displayFolder": "UI Buttons",
    "category": "UI Animation",
    "description": "Undo Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "UI Buttons",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/UI%20Buttons/undo.json",
      "atlas": "/spine-assets/UI%20Buttons/undo.atlas",
      "textures": [
        "/spine-assets/UI%20Buttons/undo.png"
      ]
    },
    "thumbnail": null,
    "animations": [
      "disable_eng",
      "disable_sp",
      "hover_eng",
      "hover_sp",
      "normal_eng",
      "normal_sp"
    ]
  },
  {
    "id": "ui-buttons-yes",
    "title": "Yes",
    "sourceFolderName": "yes",
    "displayFolder": "UI Buttons",
    "category": "UI Animation",
    "description": "Yes Spine animation prepared for game-ready portfolio presentation.",
    "tags": [
      "Spine 2D",
      "UI Buttons",
      "Game Ready"
    ],
    "spine": {
      "json": "/spine-assets/UI%20Buttons/yes.json",
      "atlas": "/spine-assets/UI%20Buttons/yes.atlas",
      "textures": [
        "/spine-assets/UI%20Buttons/yes.png"
      ]
    },
    "thumbnail": null,
    "animations": [
      "disable_eng",
      "disable_sp",
      "hover_eng",
      "hover_sp",
      "normal_eng",
      "normal_sp"
    ]
  }
];
