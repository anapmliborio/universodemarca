const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1300,height:1280},deviceScaleFactor:2});
await p.goto('file:///home/user/universodemarca/imagem-frase/frase.html');await p.evaluate(()=>document.fonts.ready);await p.screenshot({path:'frase-pt.png'});await b.close();})();
