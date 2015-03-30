/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'compas',
                            type: 'image',
                            rect: ['-14px', '-98px', '501px', '530px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"compas.png",'0px','0px']
                        },
                        {
                            id: 'cursor',
                            type: 'image',
                            rect: ['129px', '-61px', '200px', '269px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"cursor.png",'0px','0px'],
                            transform: [[],['723'],[],['0.74','0.74'],['54%','85%']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '469px', '366px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 10000,
                    autoPlay: true,
                    data: [
                        [
                            "eid11",
                            "top",
                            7498,
                            0,
                            "easeOutQuad",
                            "${cursor}",
                            '-61px',
                            '-61px'
                        ],
                        [
                            "eid4",
                            "rotateZ",
                            1500,
                            750,
                            "easeInCubic",
                            "${cursor}",
                            '3deg',
                            '-7deg'
                        ],
                        [
                            "eid5",
                            "rotateZ",
                            2250,
                            3185,
                            "easeInOutBack",
                            "${cursor}",
                            '-7deg',
                            '711deg'
                        ],
                        [
                            "eid8",
                            "rotateZ",
                            5435,
                            565,
                            "easeOutQuad",
                            "${cursor}",
                            '711deg',
                            '723deg'
                        ],
                        [
                            "eid10",
                            "left",
                            7498,
                            0,
                            "easeOutQuad",
                            "${cursor}",
                            '129px',
                            '129px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("compas_edgeActions.js");
})("EDGE-63834193");
