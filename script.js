document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const lineHeight = 24;
    ctx.font = `bold ${fontSize}px 'Courier New', Courier, monospace`;
    
    const codeLines = [
        'document.addEventListener(\'DOMContentLoaded\', () => {',
        '    const canvas = document.getElementById(\'matrix-canvas\');',
        '    if (!canvas) return;',
        '',
        '    const ctx = canvas.getContext(\'2d\');',
        '',
        '    canvas.width = window.innerWidth;',
        '    canvas.height = window.innerHeight;',
        '',
        '    const fontSize = 16;',
        '    const lineHeight = 24;',
        '    ctx.font = `bold ${fontSize}px \'Courier New\', Courier, monospace`;',
        '    ',
        '    const titulosGremio = [',
        '        \'Copa Intercontinental: 1983\',',
        '        \'Grêmio 2x1 Hamburgo - Mundial 1983\',',
        '        \'Copa Libertadores da América: 1983\',',
        '        \'Copa Libertadores da América: 1995\',',
        '        \'Copa Libertadores da América: 2017\',',
        '        \'Tricampeão da América\',',
        '        \'Recopa Sul-Americana: 1996\',',
        '        \'Recopa Sul-Americana: 2018\',',
        '        \'Campeonato Brasileiro: 1981\',',
        '        \'Campeonato Brasileiro: 1996\',',
        '        \'Bicampeão Brasileiro\',',
        '        \'Copa do Brasil: 1989\',',
        '        \'Copa do Brasil: 1994\',',
        '        \'Copa do Brasil: 1997\',',
        '        \'Copa do Brasil: 2001\',',
        '        \'Copa do Brasil: 2016\',',
        '        \'Pentacampeão da Copa do Brasil\',',
        '        \'Supercopa do Brasil: 1990\',',
        '        \'Brasileirão Série B: 2005 - A Batalha dos Aflitos\',',
        '        \'Copa Sul: 1999\',',
        '        \'Campeonato Gaúcho: 43 Vezes\',',
        '        \'Heptacampeão Gaúcho: 2018-2024\',',
        '        \'Recopa Gaúcha: 2019, 2021, 2022, 2023\',',
        '        \'Imortal Tricolor\'',
        '    ];',
        '',
        '    let currentIndex = 0;',
        '    let completedLines = [];',
        '    ',
        '    let activeTyper = {',
        '        text: titulosGremio[currentIndex],',
        '        charIndex: 0,',
        '        speed: 86,',
        '        lastTime: 0',
        '    };',
        '',
        '    function setupNextTyper() {',
        '        currentIndex = (currentIndex + 1) % titulosGremio.length;',
        '        activeTyper = {',
        '            text: titulosGremio[currentIndex],',
        '            charIndex: 0,',
        '            speed: 86,',
        '            lastTime: performance.now()',
        '        };',
        '    }',
        '',
        '    function draw(currentTime) {',
        '        ctx.fillStyle = \'#000\';',
        '        ctx.fillRect(0, 0, canvas.width, canvas.height);',
        '',
        '        ctx.fillStyle = \'#00ff41\';',
        '        ctx.shadowColor = \'#00ff41\';',
        '        ctx.shadowBlur = 7;',
        '',
        '        completedLines.forEach(line => {',
        '            ctx.fillText(line.text, 15, line.y);',
        '        });',
        '',
        '        if (currentTime - activeTyper.lastTime > activeTyper.speed) {',
        '            if (activeTyper.charIndex < activeTyper.text.length) {',
        '                activeTyper.charIndex++;',
        '                activeTyper.lastTime = currentTime;',
        '            }',
        '        }',
        '        const currentLineY = completedLines.length * lineHeight + 40;',
        '        const typingText = activeTyper.text.substring(0, activeTyper.charIndex);',
        '        ctx.fillText(typingText + \'|\', 15, currentLineY);',
        '',
        '        if (activeTyper.charIndex === activeTyper.text.length) {',
        '            completedLines.push({ text: activeTyper.text, y: currentLineY });',
        '            setupNextTyper();',
        '',
        '            const maxLines = Math.floor((canvas.height - 40) / lineHeight);',
        '            if (completedLines.length > maxLines) {',
        '                completedLines.shift();',
        '                completedLines.forEach(line => {',
        '                    line.y -= lineHeight;',
        '                });',
        '            }',
        '        }',
        '        ',
        '        requestAnimationFrame(draw);',
        '    }',
        '',
        '    requestAnimationFrame(draw);',
        '',
        '    window.addEventListener(\'resize\', () => {',
        '        canvas.width = window.innerWidth;',
        '        canvas.height = window.innerHeight;',
        '        ctx.font = `bold ${fontSize}px \'Courier New\', Courier, monospace`;',
        '        completedLines = [];',
        '        currentIndex = 0;',
        '        setupNextTyper();',
        '    });',
        '});'
    ];

    let currentIndex = 0;
    let completedLines = [];
    
    let activeTyper = {
        text: codeLines[currentIndex],
        charIndex: 0,
        speed: 86,
        lastTime: 0
    };

    function setupNextTyper() {
        currentIndex = (currentIndex + 1) % codeLines.length;
        activeTyper = {
            text: codeLines[currentIndex],
            charIndex: 0,
            speed: 86,
            lastTime: performance.now()
        };
    }

    function draw(currentTime) {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff41';
        ctx.shadowColor = '#00ff41';
        ctx.shadowBlur = 7;

        completedLines.forEach(line => {
            ctx.fillText(line.text, 15, line.y);
        });

        if (currentTime - activeTyper.lastTime > activeTyper.speed) {
            if (activeTyper.charIndex < activeTyper.text.length) {
                activeTyper.charIndex++;
                activeTyper.lastTime = currentTime;
            }
        }
        const currentLineY = completedLines.length * lineHeight + 40;
        const typingText = activeTyper.text.substring(0, activeTyper.charIndex);
        ctx.fillText(typingText + '|', 15, currentLineY);

        if (activeTyper.charIndex === activeTyper.text.length) {
            completedLines.push({ text: activeTyper.text, y: currentLineY });
            setupNextTyper();

            const maxLines = Math.floor((canvas.height - 40) / lineHeight);
            if (completedLines.length > maxLines) {
                completedLines.shift();
                completedLines.forEach(line => {
                    line.y -= lineHeight;
                });
            }
        }
        
        requestAnimationFrame(draw);
    }

    requestAnimationFrame(draw);

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.font = `bold ${fontSize}px 'Courier New', Courier, monospace`;
        completedLines = [];
        currentIndex = 0;
        setupNextTyper();
    });
});