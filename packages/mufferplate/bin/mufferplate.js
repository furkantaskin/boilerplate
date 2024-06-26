import S from"node:process";import A from"node:fs";import P from"node:path";import we from"util";import k from"picocolors";import{cac as ye}from"cac";import x from"picocolors";function r(t,e){switch(e){case"info":console.log(`${x.cyan("[INFO]")} ${t}`);break;case"success":console.log(`${x.green("[SUCCESS]")} ${t}`);break;case"warning":console.log(`${x.yellow("[WARNING]")} ${t}`);break;case"error":console.log(`${x.red("[ERROR]")} ${t}`);break;default:console.log(x.white(t));break}return!0}import se from"node:process";var L=["mufferplate.config.js","mufferplate.config.mjs","mufferplate.config.cjs","mf.config.js","mf.config.mjs","mf.config.cjs"],z=`/*!
**********

${new Date().toLocaleDateString()}
Made with mufferplate
Visit: https://github.com/furkantaskin/mufferplate

**********
!*/`,B=`/*!
**********

${new Date().toLocaleDateString()}
Made with mufferplate
Visit: https://github.com/furkantaskin/mufferplate

**********
!*/`,u=se.cwd();import{performance as K}from"node:perf_hooks";import G from"node:fs";import d from"picocolors";import*as F from"sass-embedded";import oe from"chokidar";import te from"node:fs";import{transform as ie}from"lightningcss";function C(t,e,s=!0){let i;try{let{code:o}=ie({filename:"",code:Buffer.from(t),minify:!0,sourceMap:!1,inputSourceMap:void 0}),l=`${(s?B+`
`:"")+o.toString()}`;te.writeFileSync(e,l,{encoding:"utf-8",flag:"w"})}catch(o){r("Error while bundling: "+o,"error")}return!0}import y from"node:path";import h from"node:fs";function E(t){let e="",s;for(let i of t)if(!h.existsSync(y.join(u,i)))r(`File not found: ${i}`,"error");else if(!h.statSync(i).isFile()){e=i,r(`Directory detected: ${e}. Other file declarations will be ignored
`,"info");break}try{if(t!==null){let i=[];return e!==""?(s=h.readdirSync(y.join(u,e)).filter(o=>y.extname(o)===".js"||y.extname(o)===".ts"),i=s.map(o=>y.join(u,e,o))):i=t.map(o=>y.join(u,o)),i}}catch(i){return r(`Caught error on gettting directory information. Error: ${i}`,"error"),null}}function W(t,e=[]){if(h.existsSync(t))for(let s of h.readdirSync(t))s===".git"||e.includes(s)||h.rmSync(y.resolve(t,s),{recursive:!0,force:!0})}function b(t){let e=h.statSync(t).size,s;return e<1024*1024?s=(e/1024).toFixed(2)+" KB":s=(e/(1024*1024)).toFixed(2)+" MB",s}var I=new Set(["js","sass","tailwind","purge"]),p={js:{enable:!0,entryPoints:["src/js"],outdir:"theme/assets/js",dev:{entryPoints:["src/js"],bundle:!0,logLevel:"warning",splitting:!1,format:"iife",chunkNames:"chunks/[name]-[hash]",treeShaking:!1,metafile:!1,sourcemap:"inline",minify:!1,legalComments:"none"},build:{entryPoints:["src/js"],bundle:!0,logLevel:"info",splitting:!1,format:"iife",chunkNames:"chunks/[name]-[hash]",treeShaking:!0,metafile:!1,sourcemap:!1,minify:!0,legalComments:"eof",signed:!0,obfuscate:!1}},sass:{enable:!0,inputFile:"src/css/scss/main.scss",outputFile:"theme/assets/css/main.css",depsDir:["src/css/scss/**/*.scss"],dev:{inputFile:"src/css/scss/main.scss",outputFile:"theme/assets/css/main.css",depsDir:["src/css/scss/**/*.scss"],polling:10,watchDeps:!0,sourcemap:!0,style:"expanded",charset:!1,verbose:!1,signed:!1},build:{inputFile:"src/css/scss/main.scss",outputFile:"theme/assets/css/main.css",depsDir:["src/css/scss/**/*.scss"],polling:10,watchDeps:!0,sourcemap:!1,style:"compressed",charset:!1,verbose:!1,signed:!0}},tailwind:{enable:!1,postConfigPath:"mf_config/postcss.config.js",twInputFile:"src/css/app.css",twOutputFile:"theme/assets/css/app.css",useScss:!1,sass:{inputFile:"src/css/scss/main.scss",outputFile:"src/css/libs.css",depsDir:["src/css/scss/**/*.scss"]}},purge:{file:"theme/assets/css/main.css",output:!1,purgeCss:{content:["./theme/*.php","./theme/template/*.php","./theme/assets/js/*.js","./inc/*.php"],safelist:["swiper-pagination-bullet"],fontFace:!1,keyframes:!1,defaultExtractor:t=>t.match(/[\w-/:.-]+/g)||[]},desktopFirst:!0}};async function v(t,e,s=!1){let i=null,o=K.now(),n=e?t?.inputFile??t?.build?.inputFile:t?.inputFile??t?.dev?.inputFile,l=e?t?.outputFile??t?.build?.outputFile:t?.outputFile??t?.dev?.outputFile;console.log(d.magenta(`${s?`
Precompiling SCSS. `:""}Processing ${d.bold(n)}`));try{let a="";if(e?(i=await F.compileAsync(n,{charset:!0,importers:[new F.NodePackageImporter],style:"compressed",sourceMap:t?.build?.sourcemap??!1}),!s&&C(i.css,l,!0)):(i=await F.compileAsync(n,{charset:!0,importers:[new F.NodePackageImporter],style:"expanded",sourceMap:t?.dev?.sourcemap??!0,sourceMapIncludeSources:!1}),a=t?.sourcemap?`
/*# sourceMappingURL=data:application/json;utf-8,`+encodeURIComponent(JSON.stringify(i.sourceMap))+` */
`:"",G.writeFileSync(l,`${i.css.toString()+a}`,{encoding:"utf-8",flag:"w"})),s)return e&&G.writeFileSync(l,`${i.css.toString()+a}`,{encoding:"utf-8",flag:"w"}),{code:i.css.toString(),map:i.sourceMap};let f=K.now()-o;return f=f<1e3?`${f.toFixed(2)} ms`:`${(f/1e3).toFixed(2)}1 s`,console.log(d.green(`${d.bold(n)} compiled in ${d.bold(f)}    ${!s&&d.cyan("("+b(l)+")")}`)),!0}catch(a){a?.sassMessage?r(`Error while compiling ${d.bold(n)}: 
${d.red(a.sassMessage)}
 ${d.red(a.sassStack)}`,"error"):r(`Error while compiling ${d.bold(n)}: 
${a}`,"error")}}async function V(t={}){let e={...p?.sass,...t?.dev};await v(e,!1),console.log(d.dim(`
Watching SCSS files for changes...`)),oe.watch(e?.depsDir,{awaitWriteFinish:{stabilityThreshold:50,pollInterval:e?.polling??100}}).on("change",async()=>{await v(e,!1),console.log(d.dim(`
Waiting for file changes...
`))})}async function Q(t={}){let e={...p?.sass,...t?.build};await v(e,!0)}import ne from"node:fs";import Y from"node:path";import re from"postcss";import ae from"tailwindcss";import{bundle as le}from"lightningcss";import ce from"chokidar";import g from"picocolors";var T;async function M(t,e,s){let i=performance.now(),o=t.twInputFile,n=t.twOutputFile;if(console.log(g.cyan(`Processing ${g.bold(t.twInputFile)}`)),e){let m=performance.now();T=await v(t.sass,s,e),T&&console.log(g.magenta(`SCSS precompiled in ${(performance.now()-m).toFixed(2)}ms
`))}let l=le({filename:o,minify:s,sourceMap:!s,inputSourceMap:T?.map?T.map.toString():void 0,analyzeDependencies:!0,projectRoot:Y.join(u,Y.dirname(o))}),a=[],f=l.code.toString(),c=l.map?.toString();c!==void 0&&(c=JSON.parse(c),typeof c=="object"&&(c.sources=c.sources.map((m,ee)=>(a.push(m),ee===0?m.replace(/^.*[\\\/]/,""):m)),c=JSON.stringify(c)));try{await re([ae]).process(f,{from:o,to:n,map:c?{prev:c,inline:!0,sourcesContent:!1}:!1}).then(m=>{s?C(m.css,n):ne.writeFileSync(n,m.css,{encoding:"utf-8",flag:"w"})}).catch(m=>{r(`Error while compiling ${g.bold(o)}: 
${m}`,"error")})}catch(m){r(`Error while reading ${g.bold(o)}: 
${m}`,"error"),process.exit(1)}let w=performance.now()-i;w=w<1e3?`${w.toFixed(2)} ms`:`${(w/1e3).toFixed(2)}1 s`,console.log(g.green(`${g.bold(o)} compiled in ${g.bold(w)}    ${g.cyan("("+await b(n)+")")}`))}async function J(t={},e){let s={...p.tailwind,...t},i=await import(`file://${u}/tailwind.config.cjs`),o=[];s.sass={...p.sass?.dev,...s.sass},await M(s,e,!1),console.log(g.dim(`
Waiting for file changes...`)),o=e?[...i.default.content,s.twInputFile,s?.sass?.inputFile,...s?.sass?.depsDir]:[...i.default.content,s.twInputFile],ce.watch(o,{awaitWriteFinish:{stabilityThreshold:50}}).on("change",async l=>{await M(s,l.split(".").pop()==="scss",!1),console.log(g.dim(`
Waiting for file changes...
`))})}async function D(t={},e){let s={...p.tailwind,...t};s.sass={...p.sass?.build,...s.sass},await M(s,e,!0)}import U from"node:path";import{fileURLToPath as fe}from"node:url";import $ from"node:fs";import ue from"javascript-obfuscator";import O from"esbuild";import N from"picocolors";async function q(t){let e=0,s={...p?.js,...t},i=0;console.log(s),s!==void 0&&s.dev!==void 0&&(s.dev.entryPoints=t.entryPoints??s.dev?.entryPoints??s.entryPoints,s.dev.outdir=t.outdir??s.dev?.outdir??s.outdir);let o={name:"watch-plugin",setup(l){l.onStart(()=>{console.log(N.yellow(`
Processing JS files...`)),i=performance.now()}),l.onEnd(async a=>{let f=(performance.now()-i).toFixed(2);a.errors.length>0?r(`Build failed. Error: ${a.errors[0].text}`,"error"):(console.log(e===0?"Built":"Rebuilt",N.cyan(`(${f}ms)
`)),e+=1,s.dev?.metafile&&(console.log(await O.analyzeMetafile(a.metafile)),$.writeFileSync("bundlemeta.json",JSON.stringify(a.metafile))))})}};s.dev.entryPoints=E(s.dev.entryPoints),(await O.context({...s.dev,plugins:[o]})).watch()}async function H(t){let e={...p.js,...t},s=U.dirname(fe(import.meta.url)),i=!1;e!==void 0&&e.build!==void 0&&(e.build.entryPoints=t.entryPoints??e.build?.entryPoints??e.entryPoints,e.build.outdir=t.outdir??e.build?.outdir??e.outdir),e=e.build,e.entryPoints=E(e.entryPoints),e.splitting&&(r("Splitting is enabled. Module is converted to esm.","info"),r("Clearing old chunk files...","info"),W(e.outdir,["chunks"]),e.format="esm"),e.signed&&(e.inject=[U.join(s,"signature.js")]),e.obfuscate&&(i=!0),e.banner={js:z},delete e.signed,delete e.obfuscate;let o=await O.build(e);if(e.metafile&&(console.log(await O.analyzeMetafile(o.metafile)),$.writeFileSync("bundlemeta.json",JSON.stringify(o.metafile))),i){let n=U.join(u,e.outdir);await $.promises.readdir(n).then(l=>{l.forEach(async a=>{let f=U.join(n,a);try{console.log(`
Obfuscating`,a,`
`);let c=await $.promises.readFile(f,"utf8"),w=await ue.obfuscate(c,{compact:!0,controlFlowFlattening:!0,controlFlowFlatteningThreshold:1,numbersToExpressions:!0,simplify:!0,shuffleStringArray:!0,splitStrings:!0,stringArrayThreshold:1}).getObfuscatedCode();await $.promises.writeFile(f,w,"utf8"),r(`${N.yellow(a)} obfuscated successfully. Total size is ${($.statSync(f).size/1024).toFixed(3)} kB`,"success")}catch(c){r(`Error obfuscating file ${a}: ${c}`,"error")}})}).catch(l=>{r(`Error reading directory ${n}: ${l}`,"error")})}}import pe from"node:fs";import me from"postcss";import de from"@fullhuman/postcss-purgecss";import ge from"postcss-sort-media-queries";import R from"picocolors";async function X(t={}){let e=performance.now();console.log(R.cyan("Purging CSS..."));let s={...p.purge,...t},i=s.file,o=s.output?s.output:s.file,n=b(i),l=s.purgeCss,a={sort:s.desktopFirst?"desktop-first":"mobile-first"},f=[de(l),ge(a)];await me(f).process(pe.readFileSync(i,"utf-8"),{from:i,to:o??i}).then(c=>{C(c.css,o,!1),console.log(R.green(`Purge process completed in ${((performance.now()-e)/1e3).toFixed(2)}s    ${R.cyan("("+n+" -> "+b(o)+")")}`))}).catch(c=>{r(`Error while compiling ${R.bold(i)}: 
${c}`,"error")})}var j=ye("mufferplate");var Z={};console.clear();console.log(k.green(`🗲    MUFFERPLATE    🗲
`));async function _(t=""){let e=t||"";e&&(e=P.resolve(u,e));let s=t||!1;if(!e){for(let i of L)if(e=P.resolve(u,i),!(!A.existsSync(e)&&(e=P.resolve(u,"mf_config",i),!A.existsSync(e)))){s=!0;break}}return console.log("Using config file: ",k.yellow(e)),s?Z=await(await import(`file://${e}`)).default:r("No config file found. Using default config","info"),Z}j.command("[...root]","Run mufferplate in development mode. You can use 'tailwind' 'js' and 'sass' as main arguments. Single argument will run the bundler for the specified type ('js' for only JavaScript bundling, 'tailwind' for running Tailwind alone etc.)").alias("dev").option("--use-scss","Use SCSS precompile with tailwind").option("--config <path>","Custom config file location").action(async(t,e)=>{let s=await _(e.config);console.log("Running under development mode.");let i={js:async()=>q({...s.js}),sass:async()=>V({...s.sass}),tailwind:{plain:async()=>J({...s.tailwind},!1),sass:async()=>{J({useScss:!0,...s.tailwind},!0)}}};t.length?(t.forEach(o=>{I.has(o)||(r(`Invalid argument: ${k.yellow(o)}`,"error"),S.exit(1))}),t.includes("tailwind")&&t.includes("sass")?(r("Cannot use Sass and Tailwind together. If you want to use Tailwind as default with Sass, please use --use-scss flag","error"),S.exit(1)):t.forEach(async o=>{let n=o;n==="tailwind"?e.useScss?await i[n].sass():await i[n].plain():await i[n]()})):(s.tailwind?.enable&&s.sass?.enable&&(r("Cannot use Sass and Tailwind together. If you want to use Tailwind as default with Sass, please change useCss to true in tailwind and disable sass in config file","error"),S.exit(1)),Object.keys(s).forEach(async o=>{let n=o;s[n]?.enable&&(n==="tailwind"?e.useScss?await i[n].sass():await i[n].plain():await i[n]())}))});j.command("build [...root]","Build your project").option("--config <path>","Custom config file location").option("--use-scss","Use scss with tailwind").action(async(t,e)=>{let s=await _(e.config),i=Object.keys(s);console.log(`Running under production mode
`);let o={js:async()=>await H({...s.js}),sass:async()=>await Q({...s.sass}),tailwind:{plain:async()=>await D({...s.tailwind},!1),sass:async()=>{await D({...s.tailwind},!0)}}};if(t.length)if(t.forEach(n=>{I.has(n)||(r(`Invalid argument: ${k.yellow(n)}`,"error"),S.exit(1))}),t.includes("tailwind")&&t.includes("sass"))r("Cannot use Sass and Tailwind together. If you want to use Tailwind as default with Sass, please use --use-scss flag","error"),S.exit(1);else for(let n of t)n==="tailwind"?e.useScss?await o[n].sass():await o[n].plain():await o[n]();else{s.tailwind?.enable&&s.sass?.enable&&(r("Cannot use Sass and Tailwind together. If you want to use Tailwind as default with Sass, please change useCss to true in tailwind and disable sass in config file","error"),S.exit(1));for(let n of i)s[n]?.enable&&(n==="tailwind"?e.useScss?await o[n].sass():await o[n].plain():await o[n]())}t.includes("tailwind")&&t.includes("sass")&&(r("Cannot use Sass and Tailwind together. If you want to use Tailwind as default with Sass, please use --use-scss flag","error"),S.exit(1))});j.command("purge [...root]","Purge the CSS file (use it for Sass)").action(async(t,e)=>{let s=await _(e.config);await X(s.purge)});j.command("init","Initialize the configuration file").action(async t=>{let e=p;delete e.purge?.purgeCss?.defaultExtractor,A.writeFileSync(P.join(u,"mufferplate.config.js"),`/** @type {import('mufferplate').MufferConfig} */
export default `+we.inspect(e,!1,null))});j.help();j.parse();
