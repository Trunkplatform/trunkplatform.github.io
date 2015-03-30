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
                            id: 'Group3',
                            type: 'group',
                            rect: ['-301px', '-143', '945', '905', 'auto', 'auto'],
                            c: [
                            {
                                id: 'Text2',
                                type: 'text',
                                rect: ['435px', '-65px', '255px', '302px', 'auto', 'auto'],
                                text: "e.toUpperCase())&amp;&amp;!b.isContentEditable):e=!1,e=!e);if(e||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey||\"INPUT\"==b.tagName.toUpperCase()&amp;&amp;b.type&amp;&amp;b.type.toUpperCase()in v&amp;&amp;32==c)return!1;if(a.originalTarge.toUpperCase())&amp;&amp;!b.isContentEditable):e=!1,e=!e);if(e||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey||\"INPUT\"==b.tagName.toUpperCase()&amp;&amp;b.type&amp;&amp;b.type.toUpperCase()in v&amp;&amp;32==c)return!1;if(a.originalTarget&amp;&amp;<br><br>a.originalTarget!=b)return!0;(a=b.tagName in fa)||(a=b.getAttributeNode(\"tabindex\"),a=null!=a&amp;&amp;a.specified);if(!(a&amp;&amp;0&lt;=b.tabIndex)||b.disabled)return!1;b=\"INPUT\"!=b.tagName.toUpperCase()||b.type;a=!(d in w)&amp;&amp;13==c;return(0==w[d]%c||a)&amp;&amp;!!b},fa={A:1,INPUT:<br>et&amp;&amp;<br><br>a.originalTarget!=b)return!0;(a=b.tagName in fa)||(a=b.getAttributeNode(\"tabindex\"),a=null!=a&amp;&amp;a.specified);if(!(a&amp;&amp;0&lt;=b.tabIndex)||b.disabled)return!1;b=\"INPUT\"!=b.tagName.toUpperCase()||b.type;a=!(d in w)&amp;&amp;13==c;return(0==w[d]%c||a)&amp;&amp;!!b},fa={A:1,INPUT:<br>",
                                align: "left",
                                font: ['Lucida Console, Monaco, monospace', [10, "px"], "rgba(255,255,255,1.00)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"],
                                transform: [[],['10']]
                            },
                            {
                                id: 'Group',
                                type: 'group',
                                rect: ['604px', '251px', '406', '348', 'auto', 'auto'],
                                c: [
                                {
                                    id: 'gearCopy',
                                    type: 'image',
                                    rect: ['217px', '158px', '156px', '156px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"gear.png",'0px','0px']
                                },
                                {
                                    id: 'gear',
                                    type: 'image',
                                    rect: ['42px', '42px', '210px', '210px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"gear.png",'0px','0px']
                                }]
                            },
                            {
                                id: 'Group2',
                                type: 'group',
                                rect: ['461px', '275px', '349', '349', 'auto', 'auto'],
                                transform: [[],['-5'],[],[],['58%','8%']],
                                c: [
                                {
                                    id: 'tie2',
                                    type: 'image',
                                    rect: ['46px', '24px', '300px', '300px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"tie2.png",'0px','0px'],
                                    transform: [[],['-2'],[],[],['49%','10%']]
                                },
                                {
                                    id: 'tie1',
                                    type: 'image',
                                    rect: ['51px', '24px', '300px', '300px', 'auto', 'auto'],
                                    fill: ["rgba(0,0,0,0)",im+"tie1.png",'0px','0px'],
                                    transform: [[],['9'],[],[],['50%','1%']]
                                }]
                            },
                            {
                                id: 'maskphone',
                                type: 'image',
                                rect: ['111px', '70px', '763px', '763px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)",im+"maskphone.png",'0px','0px'],
                                transform: [[],['12']]
                            },
                            {
                                id: 'shadow',
                                type: 'image',
                                rect: ['306px', '528px', '334px', '97px', 'auto', 'auto'],
                                opacity: '0.43622967479675',
                                fill: ["rgba(0,0,0,0)",im+"shadow.png",'0px','0px'],
                                transform: [[],['180']]
                            },
                            {
                                id: 'block_out',
                                type: 'rect',
                                rect: ['0px', '603px', '739px', '141px', 'auto', 'auto'],
                                fill: ["rgba(152,152,152,1.00)"],
                                stroke: [0,"rgba(0,0,0,1)","none"]
                            }]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '373px', '474px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(152,152,152,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 7102,
                    autoPlay: true,
                    data: [
                        [
                            "eid36",
                            "rotateZ",
                            4230,
                            154,
                            "linear",
                            "${Group2}",
                            '-5deg',
                            '-4deg'
                        ],
                        [
                            "eid43",
                            "rotateZ",
                            4384,
                            106,
                            "linear",
                            "${Group2}",
                            '-4deg',
                            '12deg'
                        ],
                        [
                            "eid45",
                            "rotateZ",
                            4490,
                            51,
                            "linear",
                            "${Group2}",
                            '12deg',
                            '16deg'
                        ],
                        [
                            "eid52",
                            "rotateZ",
                            4607,
                            527,
                            "easeOutBounce",
                            "${Group2}",
                            '16deg',
                            '-3deg'
                        ],
                        [
                            "eid9",
                            "rotateZ",
                            0,
                            4000,
                            "linear",
                            "${gear}",
                            '0deg',
                            '773deg'
                        ],
                        [
                            "eid104",
                            "left",
                            1834,
                            2166,
                            "linear",
                            "${Group2}",
                            '472px',
                            '567px'
                        ],
                        [
                            "eid24",
                            "left",
                            4000,
                            322,
                            "linear",
                            "${Group2}",
                            '567px',
                            '350px'
                        ],
                        [
                            "eid39",
                            "left",
                            4322,
                            168,
                            "linear",
                            "${Group2}",
                            '350px',
                            '308px'
                        ],
                        [
                            "eid64",
                            "left",
                            6401,
                            126,
                            "easeInOutQuad",
                            "${Group2}",
                            '308px',
                            '357px'
                        ],
                        [
                            "eid65",
                            "left",
                            6528,
                            438,
                            "easeInOutQuad",
                            "${Group2}",
                            '357px',
                            '-17px'
                        ],
                        [
                            "eid4",
                            "rotateZ",
                            3000,
                            0,
                            "linear",
                            "${Text2}",
                            '10deg',
                            '10deg'
                        ],
                        [
                            "eid110",
                            "color",
                            1324,
                            0,
                            "linear",
                            "${Text2}",
                            'rgba(255,255,255,1.00)',
                            'rgba(255,255,255,1.00)'
                        ],
                        [
                            "eid31",
                            "rotateZ",
                            4230,
                            92,
                            "linear",
                            "${tie2}",
                            '-2deg',
                            '-7deg'
                        ],
                        [
                            "eid41",
                            "rotateZ",
                            4322,
                            107,
                            "linear",
                            "${tie2}",
                            '-7deg',
                            '3deg'
                        ],
                        [
                            "eid47",
                            "rotateZ",
                            4429,
                            112,
                            "linear",
                            "${tie2}",
                            '3deg',
                            '6deg'
                        ],
                        [
                            "eid49",
                            "rotateZ",
                            4541,
                            182,
                            "linear",
                            "${tie2}",
                            '6deg',
                            '11deg'
                        ],
                        [
                            "eid55",
                            "rotateZ",
                            4723,
                            153,
                            "easeOutElastic",
                            "${tie2}",
                            '11deg',
                            '4deg'
                        ],
                        [
                            "eid57",
                            "rotateZ",
                            4876,
                            206,
                            "easeOutElastic",
                            "${tie2}",
                            '4deg',
                            '12deg'
                        ],
                        [
                            "eid67",
                            "rotateZ",
                            5082,
                            462,
                            "easeOutElastic",
                            "${tie2}",
                            '12deg',
                            '9deg'
                        ],
                        [
                            "eid84",
                            "rotateZ",
                            6685,
                            392,
                            "easeOutElastic",
                            "${tie2}",
                            '9deg',
                            '-13deg'
                        ],
                        [
                            "eid102",
                            "width",
                            1423,
                            0,
                            "easeInOutQuad",
                            "${maskphone}",
                            '763px',
                            '763px'
                        ],
                        [
                            "eid76",
                            "top",
                            1391,
                            32,
                            "easeInQuad",
                            "${maskphone}",
                            '72px',
                            '71px'
                        ],
                        [
                            "eid99",
                            "top",
                            1423,
                            73,
                            "easeOutQuad",
                            "${maskphone}",
                            '71px',
                            '61px'
                        ],
                        [
                            "eid77",
                            "top",
                            1496,
                            162,
                            "easeInOutQuad",
                            "${maskphone}",
                            '61px',
                            '72px'
                        ],
                        [
                            "eid106",
                            "height",
                            7102,
                            0,
                            "easeInOutQuad",
                            "${Stage}",
                            '474px',
                            '474px'
                        ],
                        [
                            "eid100",
                            "height",
                            1423,
                            0,
                            "easeInOutQuad",
                            "${maskphone}",
                            '763px',
                            '763px'
                        ],
                        [
                            "eid6",
                            "left",
                            1500,
                            1500,
                            "linear",
                            "${Text2}",
                            '435px',
                            '280px'
                        ],
                        [
                            "eid60",
                            "left",
                            0,
                            3950,
                            "easeOutBounce",
                            "${Group}",
                            '604px',
                            '299px'
                        ],
                        [
                            "eid17",
                            "left",
                            3950,
                            50,
                            "linear",
                            "${Group}",
                            '299px',
                            '284px'
                        ],
                        [
                            "eid19",
                            "left",
                            4000,
                            134,
                            "linear",
                            "${Group}",
                            '284px',
                            '177px'
                        ],
                        [
                            "eid20",
                            "left",
                            4134,
                            96,
                            "linear",
                            "${Group}",
                            '177px',
                            '-61px'
                        ],
                        [
                            "eid3",
                            "top",
                            1500,
                            1500,
                            "linear",
                            "${Text2}",
                            '-65px',
                            '684px'
                        ],
                        [
                            "eid109",
                            "background-color",
                            331,
                            0,
                            "linear",
                            "${Stage}",
                            'rgba(152,152,152,1.00)',
                            'rgba(152,152,152,1.00)'
                        ],
                        [
                            "eid87",
                            "top",
                            1588,
                            0,
                            "linear",
                            "${Group2}",
                            '274px',
                            '274px'
                        ],
                        [
                            "eid105",
                            "top",
                            1834,
                            0,
                            "linear",
                            "${Group2}",
                            '274px',
                            '274px'
                        ],
                        [
                            "eid101",
                            "left",
                            1423,
                            0,
                            "easeInOutQuad",
                            "${maskphone}",
                            '111px',
                            '111px'
                        ],
                        [
                            "eid11",
                            "rotateZ",
                            0,
                            4000,
                            "linear",
                            "${gearCopy}",
                            '0deg',
                            '-1207deg'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("phone_edgeActions.js");
})("EDGE-52208075");
