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
                scaleToFit: "height",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'a1',
                            type: 'image',
                            rect: ['232px', '-916px', '113px', '906px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px']
                        },
                        {
                            id: 'a1Copy4',
                            type: 'image',
                            rect: ['62px', '-916px', '113px', '906px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px']
                        },
                        {
                            id: 'a1Copy',
                            type: 'image',
                            rect: ['47px', '700px', '30px', '241px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px']
                        },
                        {
                            id: 'a1Copy2',
                            type: 'image',
                            rect: ['453px', '700px', '18px', '148px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px']
                        },
                        {
                            id: 'a1Copy8',
                            type: 'image',
                            rect: ['232px', '-916px', '113px', '906px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px']
                        },
                        {
                            id: 'a1Copy7',
                            type: 'image',
                            rect: ['62px', '-916px', '113px', '906px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px']
                        },
                        {
                            id: 'a1Copy6',
                            type: 'image',
                            rect: ['47px', '700px', '30px', '241px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px']
                        },
                        {
                            id: 'a1Copy5',
                            type: 'image',
                            rect: ['453px', '700px', '18px', '148px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Pasted.svg",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '550px', '651px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,0.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5856,
                    autoPlay: true,
                    data: [
                        [
                            "eid10",
                            "top",
                            4106,
                            1750,
                            "linear",
                            "${a1Copy2}",
                            '700px',
                            '-254px'
                        ],
                        [
                            "eid18",
                            "top",
                            4864,
                            942,
                            "linear",
                            "${a1Copy4}",
                            '700px',
                            '-916px'
                        ],
                        [
                            "eid26",
                            "top",
                            3558,
                            942,
                            "linear",
                            "${a1Copy8}",
                            '700px',
                            '-916px'
                        ],
                        [
                            "eid19",
                            "left",
                            5056,
                            0,
                            "linear",
                            "${a1Copy4}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid22",
                            "width",
                            2507,
                            0,
                            "linear",
                            "${a1Copy5}",
                            '18px',
                            '18px'
                        ],
                        [
                            "eid24",
                            "top",
                            1308,
                            942,
                            "linear",
                            "${a1Copy7}",
                            '700px',
                            '-916px'
                        ],
                        [
                            "eid17",
                            "width",
                            5171,
                            0,
                            "linear",
                            "${a1Copy2}",
                            '18px',
                            '18px'
                        ],
                        [
                            "eid21",
                            "height",
                            2507,
                            0,
                            "linear",
                            "${a1Copy5}",
                            '148px',
                            '148px'
                        ],
                        [
                            "eid15",
                            "height",
                            5171,
                            0,
                            "linear",
                            "${a1Copy2}",
                            '148px',
                            '148px'
                        ],
                        [
                            "eid20",
                            "top",
                            1442,
                            1750,
                            "linear",
                            "${a1Copy5}",
                            '700px',
                            '-254px'
                        ],
                        [
                            "eid5",
                            "top",
                            184,
                            942,
                            "linear",
                            "${a1}",
                            '700px',
                            '-916px'
                        ],
                        [
                            "eid6",
                            "top",
                            2250,
                            1750,
                            "linear",
                            "${a1Copy}",
                            '700px',
                            '-254px'
                        ],
                        [
                            "eid25",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${a1Copy7}",
                            '62px',
                            '62px'
                        ],
                        [
                            "eid23",
                            "top",
                            0,
                            1750,
                            "linear",
                            "${a1Copy6}",
                            '700px',
                            '-254px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("vert_edgeActions.js");
})("EDGE-50415994");
