mapsArr = [
    [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
        -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
        -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
        -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
        -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
        -1,-1,-1,-1,-1,83,85,-1,-1,-1,-1,-1,-1,-1,-1,
        -1,-1,-1,-1,-1,99,101,-1,-1,-1,-1,-1,-1,-1,141,
        84,84,84,84,84,100,100,84,84,84,85,-1,-1,83,84,
        100,100,100,100,100,100,100,100,100,100,101,-1,-1,99,100,
        100,100,100,100,100,100,100,100,100,100,101,-1,-1,99,100
    ],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,36,0,0,84,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,68,0,
        0,0,0,0,36,0,0,0,0,36,0,0,0,68,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,68,141,
        0,0,0,0,0,0,84,84,84,49,49,49,84,100,84,
        0,0,0,0,36,0,100,100,100,100,100,100,100,100,100,
        84,84,84,0,0,0,100,100,100,100,100,100,100,100,100,
        100,100,100,49,49,49,100,100,100,100,100,100,100,100,100
    ],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,141,
        0,0,0,0,0,0,0,0,0,0,0,0,0,83,84,
        0,0,0,0,0,0,0,0,0,0,0,0,0,99,100,
        0,0,0,0,0,0,0,0,0,0,0,0,83,100,100,
        0,0,0,0,0,0,0,0,0,0,83,49,100,100,100,
        0,0,0,0,0,0,0,0,83,49,100,100,100,100,100,
        0,0,0,0,0,0,83,49,100,100,100,100,100,100,100,
        0,0,0,0,83,49,100,100,100,100,100,100,100,100,100,
        84,84,84,84,100,100,100,100,100,100,100,100,100,100,100,
    ],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,141,
        0,0,0,0,0,0,0,0,0,0,0,0,0,35,36,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,36,0,0,0,0,0,
        0,0,0,0,0,36,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,36,
        0,0,0,0,0,0,0,36,0,0,0,0,0,0,0,
        0,0,0,0,36,0,0,0,0,0,0,0,36,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        84,84,84,49,49,49,49,49,49,49,49,49,49,49,49
    ],
        [0,0,0,0,0,0,0,0,144,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,83,49,84,49,85,0,0,0,83,84,84,85,0,
        85,0,0,0,0,0,144,0,0,0,68,0,0,0,0,
        0,0,0,0,0,0,0,49,49,84,68,0,0,83,84,
        0,35,37,0,0,0,0,0,0,0,68,0,0,144,0,
        0,0,0,0,35,49,0,0,0,0,68,0,0,0,0,
        0,0,0,0,0,0,0,35,37,0,68,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,68,0,0,0,141,
        84,84,84,84,84,84,84,84,84,84,84,49,49,84,84
    ],
        
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,141,
        0,0,36,0,0,36,0,0,36,0,0,36,0,0,35,
        37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        49,84,49,84,49,84,49,84,49,84,49,85,0,0,0,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,35,
        0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
        84,85,0,0,83,85,0,0,83,85,0,83,85,0,0,
        100,101,0,0,99,101,0,0,99,101,0,99,101,0,0,
    ],
        [0,0,0,0,0,0,0,0,0,68,0,0,0,0,0,
        0,0,0,0,0,0,0,0,0,68,0,19,0,0,0,
        0,0,0,0,0,0,0,0,0,68,0,0,0,141,0,
        0,0,0,0,0,20,0,0,0,0,0,0,83,84,84,
        0,0,0,20,0,0,0,0,0,0,0,0,99,100,100,
        0,0,0,0,0,0,0,0,0,20,0,0,99,100,100,
        0,20,0,0,0,0,0,0,0,0,0,0,99,100,100,
        0,0,0,0,0,0,0,0,0,0,0,0,99,100,100,
        0,0,0,0,20,0,0,0,0,0,0,0,99,100,100,
        84,84,85,0,0,0,0,0,0,0,0,0,99,100,100,
    ] 
];

function mapFunk() {
    world.map = []
    world.map = mapsArr[LevelNum];
    buffer.clearRect(0,0,480,320);
   

}