var html =  '<!DOCTYPE html>'+
'<html lang="fr">'+
'<head>'+
'<meta charset="UTF-8">'+
'<meta name="viewport" content="width=device-width, initial-scale=1.0">'+
'<title id="pageTitle">SKALA · MW Clicker</title>'+
''+
'<!-- Supabase -->'+
'<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>'+
''+
'<style>'+
'*{box-sizing:border-box}'+
''+
'body{'+
'    margin:0;'+
'    min-height:100vh;'+
'    font-family:Inter,Arial,sans-serif;'+
'    color:white;'+
'    background:'+
'        radial-gradient(circle at 15% 10%,#292061 0,transparent 35%),'+
'        radial-gradient(circle at 85% 90%,#075b55 0,transparent 32%),'+
'        #07080e;'+
'}'+
''+
'button,input,select{font-family:inherit}'+
''+
'/* ================= AUTH ================= */'+
''+
'#authScreen{'+
'    position:fixed;'+
'    inset:0;'+
'    z-index:9999;'+
'    display:flex;'+
'    align-items:center;'+
'    justify-content:center;'+
'    padding:20px;'+
'    background:'+
'        radial-gradient(circle at 50% 30%,rgba(99,87,230,.25),transparent 45%),'+
'        #07080e;'+
'}'+
''+
'.auth-box{'+
'    width:420px;'+
'    max-width:100%;'+
'    padding:32px;'+
'    border-radius:25px;'+
'    background:rgba(16,17,28,.94);'+
'    border:1px solid rgba(255,255,255,.1);'+
'    box-shadow:0 25px 100px rgba(0,0,0,.6);'+
'    backdrop-filter:blur(25px);'+
'}'+
''+
'.auth-logo{'+
'    text-align:center;'+
'    font-size:32px;'+
'    font-weight:900;'+
'}'+
''+
'.auth-logo span,'+
'.logo span{'+
'    color:#8174ff;'+
'}'+
''+
'.auth-subtitle{'+
'    text-align:center;'+
'    color:#777986;'+
'    font-size:12px;'+
'    margin:5px 0 25px;'+
'}'+
''+
'.auth-tabs{'+
'    display:grid;'+
'    grid-template-columns:1fr 1fr;'+
'    gap:8px;'+
'    margin-bottom:20px;'+
'}'+
''+
'.auth-tab{'+
'    padding:11px;'+
'    border:0;'+
'    border-radius:10px;'+
'    cursor:pointer;'+
'    color:#888;'+
'    background:#22232e;'+
'    font-weight:bold;'+
'}'+
''+
'.auth-tab.active{'+
'    color:white;'+
'    background:#6357e6;'+
'}'+
''+
'.auth-form{'+
'    display:none;'+
'}'+
''+
'.auth-form.active{'+
'    display:block;'+
'}'+
''+
'.auth-label{'+
'    display:block;'+
'    margin:13px 0 6px;'+
'    color:#aaa;'+
'    font-size:12px;'+
'}'+
''+
'.auth-input{'+
'    width:100%;'+
'    padding:13px;'+
'    border-radius:11px;'+
'    border:1px solid rgba(255,255,255,.08);'+
'    outline:none;'+
'    color:white;'+
'    background:#0d0e16;'+
'}'+
''+
'.auth-input:focus{'+
'    border-color:#7064ff;'+
'    box-shadow:0 0 0 3px rgba(112,100,255,.1);'+
'}'+
''+
'.auth-submit{'+
'    width:100%;'+
'    margin-top:20px;'+
'    padding:13px;'+
'    border:0;'+
'    border-radius:11px;'+
'    cursor:pointer;'+
'    color:white;'+
'    background:linear-gradient(90deg,#6357e6,#8174ff);'+
'    font-weight:900;'+
'}'+
''+
'.auth-message{'+
'    min-height:18px;'+
'    margin-top:12px;'+
'    text-align:center;'+
'    font-size:12px;'+
'    color:#ff7777;'+
'}'+
''+
'.auth-note{'+
'    margin-top:18px;'+
'    color:#666875;'+
'    text-align:center;'+
'    font-size:10px;'+
'    line-height:1.5;'+
'}'+
''+
'/* ================= HEADER ================= */'+
''+
'header{'+
'    height:76px;'+
'    display:flex;'+
'    align-items:center;'+
'    justify-content:space-between;'+
'    gap:20px;'+
'    padding:0 32px;'+
'    position:sticky;'+
'    top:0;'+
'    z-index:50;'+
'    background:rgba(8,9,15,.82);'+
'    border-bottom:1px solid rgba(255,255,255,.08);'+
'    backdrop-filter:blur(20px);'+
'}'+
''+
'.logo{'+
'    font-size:25px;'+
'    font-weight:900;'+
'}'+
''+
'.header-stats{'+
'    display:flex;'+
'    gap:10px;'+
'    flex-wrap:wrap;'+
'    justify-content:flex-end;'+
'    align-items:center;'+
'}'+
''+
'.header-pill{'+
'    padding:9px 14px;'+
'    border-radius:30px;'+
'    background:rgba(124,108,255,.11);'+
'    border:1px solid rgba(124,108,255,.25);'+
'    color:#c0baff;'+
'    font-size:13px;'+
'    font-weight:bold;'+
'}'+
''+
'.language-pill{'+
'    display:flex;'+
'    align-items:center;'+
'    gap:5px;'+
'}'+
''+
'#languageSelect{'+
'    background:transparent;'+
'    color:inherit;'+
'    border:none;'+
'    outline:none;'+
'    font-family:inherit;'+
'    font-weight:bold;'+
'    cursor:pointer;'+
'}'+
''+
'#languageSelect option{'+
'    background:#191a25;'+
'    color:white;'+
'}'+
''+
'.user-pill{'+
'    color:#67ffac;'+
'    border-color:rgba(103,255,172,.2);'+
'    background:rgba(103,255,172,.07);'+
'}'+
''+
'.logout{'+
'    color:#ff8b8b;'+
'    cursor:pointer;'+
'}'+
''+
'/* ================= GAME ================= */'+
''+
'.game{'+
'    width:1350px;'+
'    max-width:95%;'+
'    margin:28px auto;'+
'    display:grid;'+
'    grid-template-columns:minmax(350px,1fr) 500px;'+
'    gap:22px;'+
'}'+
''+
'.panel{'+
'    background:rgba(16,17,28,.86);'+
'    border:1px solid rgba(255,255,255,.075);'+
'    border-radius:25px;'+
'    padding:26px;'+
'    box-shadow:0 20px 70px rgba(0,0,0,.35);'+
'    backdrop-filter:blur(20px);'+
'}'+
''+
'.sticky-game{'+
'    position:sticky;'+
'    top:100px;'+
'    align-self:start;'+
'}'+
''+
'.money-title{'+
'    text-align:center;'+
'    color:#858694;'+
'    text-transform:uppercase;'+
'    letter-spacing:2px;'+
'    font-size:12px;'+
'}'+
''+
'.money{'+
'    text-align:center;'+
'    font-size:clamp(42px,6vw,72px);'+
'    font-weight:900;'+
'    margin:6px 0 25px;'+
'    background:linear-gradient(90deg,#fff,#aaa1ff,#67ffb1);'+
'    -webkit-background-clip:text;'+
'    -webkit-text-fill-color:transparent;'+
'    word-break:break-word;'+
'}'+
''+
'.click-zone{'+
'    display:flex;'+
'    justify-content:center;'+
'    margin:28px 0;'+
'}'+
''+
'#clickButton{'+
'    display:flex;'+
'    flex-direction:column;'+
'    align-items:center;'+
'    justify-content:center;'+
'    gap:5px;'+
'    width:235px;'+
'    height:235px;'+
'    border:8px solid #651515;'+
'    border-radius:50%;'+
'    cursor:pointer;'+
'    color:#fff4e8;'+
'    font-weight:900;'+
'    background:radial-gradient(circle at 35% 25%,#ff7777,#d71920 48%,#7f080e 82%);'+
'    box-shadow:'+
'        0 0 0 4px #2b0a0a,'+
'        0 0 30px rgba(255,35,35,.55),'+
'        0 0 85px rgba(220,20,20,.24),'+
'        inset 0 0 28px rgba(60,0,0,.45);'+
'    text-shadow:0 2px 4px rgba(0,0,0,.6);'+
'    transition:transform .1s,filter .1s;'+
'}'+
''+
'#clickButton:hover{'+
'    transform:scale(1.03);'+
'    filter:brightness(1.12);'+
'}'+
''+
'#clickButton:active{'+
'    transform:scale(.91);'+
'}'+
''+
'/* AZ-5 : impulsion d\'urgence à chaque clic */'+
'#clickButton{'+
'    position:relative;'+
'    isolation:isolate;'+
'}'+
'#clickButton::before{'+
'    content:"";'+
'    position:absolute;'+
'    inset:-17px;'+
'    border:3px solid rgba(255,45,45,0);'+
'    border-radius:50%;'+
'    pointer-events:none;'+
'    z-index:-1;'+
'}'+
'#clickButton.az5-pressed::before{'+
'    animation:az5Shock .55s ease-out;'+
'}'+
'#clickButton.az5-pressed{'+
'    animation:az5ButtonPulse .42s ease-out;'+
'}'+
'body.az5-alarm::after{'+
'    content:"";'+
'    position:fixed;'+
'    inset:0;'+
'    z-index:9998;'+
'    pointer-events:none;'+
'    background:rgba(255,0,0,0);'+
'    animation:az5ScreenFlash .42s ease-out;'+
'}'+
'.az5-alert{'+
'    position:fixed;'+
'    top:18px;'+
'    left:50%;'+
'    transform:translateX(-50%);'+
'    z-index:9999;'+
'    max-width:calc(100vw - 28px);'+
'    padding:12px 18px;'+
'    border:2px solid #ff7777;'+
'    border-radius:10px;'+
'    background:linear-gradient(135deg,#7f080e,#260306);'+
'    color:#fff;'+
'    font-weight:900;'+
'    letter-spacing:1px;'+
'    text-align:center;'+
'    box-shadow:0 0 28px rgba(255,0,0,.7);'+
'    animation:az5Alert .95s ease-out forwards;'+
'    pointer-events:none;'+
'}'+
'@keyframes az5Shock{'+
'    0%{inset:-3px;border-color:rgba(255,70,70,.95);opacity:1}'+
'    100%{inset:-35px;border-color:rgba(255,30,30,0);opacity:0}'+
'}'+
'@keyframes az5ButtonPulse{'+
'    0%,100%{filter:brightness(1)}'+
'    20%{filter:brightness(1.65)}'+
'    45%{filter:brightness(.82)}'+
'    70%{filter:brightness(1.35)}'+
'}'+
'@keyframes az5ScreenFlash{'+
'    0%,100%{background:rgba(255,0,0,0)}'+
'    18%{background:rgba(255,0,0,.19)}'+
'    38%{background:rgba(255,0,0,.04)}'+
'    58%{background:rgba(255,0,0,.14)}'+
'}'+
'@keyframes az5Alert{'+
'    0%{opacity:0;top:0}'+
'    12%,65%{opacity:1;top:18px}'+
'    100%{opacity:0;top:8px}'+
'}'+
'@media (prefers-reduced-motion:reduce){'+
'    #clickButton.az5-pressed,'+
'    #clickButton.az5-pressed::before,'+
'    body.az5-alarm::after,'+
'    .az5-alert{animation-duration:.01ms!important}'+
'}'+
''+
'.az5-symbol{'+
'    font-size:42px;'+
'    line-height:1;'+
'}'+
''+
'.az5-label{'+
'    font-size:32px;'+
'    letter-spacing:2px;'+
'}'+
''+
'.az5-gain{'+
'    font-size:17px;'+
'    color:#ffe0bd;'+
'}'+
''+
'.floating{'+
'    position:fixed;'+
'    z-index:999;'+
'    pointer-events:none;'+
'    color:#66ffab;'+
'    font-size:23px;'+
'    font-weight:900;'+
'    animation:floatingMoney .85s ease-out forwards;'+
'}'+
''+
'@keyframes floatingMoney{'+
'    0%{'+
'        opacity:1;'+
'        transform:translate(-50%,0) scale(.8);'+
'    }'+
''+
'    100%{'+
'        opacity:0;'+
'        transform:translate(-50%,-100px) scale(1.35);'+
'    }'+
'}'+
''+
'/* ================= STATS ================= */'+
''+
'.stats{'+
'    display:grid;'+
'    grid-template-columns:repeat(2,1fr);'+
'    gap:10px;'+
'}'+
''+
'.stat{'+
'    padding:15px;'+
'    border-radius:15px;'+
'    background:rgba(255,255,255,.04);'+
'    border:1px solid rgba(255,255,255,.06);'+
'    text-align:center;'+
'}'+
''+
'.stat-icon{'+
'    font-size:23px;'+
'}'+
''+
'.stat-value{'+
'    margin-top:5px;'+
'    font-size:19px;'+
'    font-weight:bold;'+
'}'+
''+
'.stat-label{'+
'    margin-top:4px;'+
'    color:#777986;'+
'    font-size:10px;'+
'    letter-spacing:1px;'+
'}'+
''+
'/* ================= XP ================= */'+
''+
'.xp-box{'+
'    margin-top:20px;'+
'}'+
''+
'.xp-info{'+
'    display:flex;'+
'    justify-content:space-between;'+
'    margin-bottom:8px;'+
'    color:#8b8c9a;'+
'    font-size:12px;'+
'}'+
''+
'.xp-bar{'+
'    height:10px;'+
'    border-radius:20px;'+
'    background:#242531;'+
'    overflow:hidden;'+
'}'+
''+
'.xp-progress{'+
'    width:0;'+
'    height:100%;'+
'    border-radius:20px;'+
'    background:linear-gradient(90deg,#6f61ff,#9f95ff);'+
'    transition:width .25s;'+
'}'+
''+
'/* ================= PRESTIGE ================= */'+
''+
'.prestige-box{'+
'    margin-top:22px;'+
'    padding:20px;'+
'    border-radius:18px;'+
'    background:'+
'        radial-gradient(circle at 80% 20%,rgba(255,196,68,.16),transparent 40%),'+
'        rgba(255,193,58,.05);'+
'    border:1px solid rgba(255,196,68,.25);'+
'}'+
''+
'.prestige-title{'+
'    font-size:20px;'+
'    font-weight:900;'+
'    color:#ffd96a;'+
'}'+
''+
'.prestige-desc{'+
'    margin:8px 0 15px;'+
'    color:#aaa9a0;'+
'    font-size:12px;'+
'    line-height:1.5;'+
'}'+
''+
'.prestige-info{'+
'    display:grid;'+
'    grid-template-columns:1fr 1fr;'+
'    gap:8px;'+
'    margin-bottom:13px;'+
'}'+
''+
'.prestige-stat{'+
'    padding:10px;'+
'    text-align:center;'+
'    border-radius:12px;'+
'    background:rgba(255,255,255,.04);'+
'}'+
''+
'.prestige-stat strong{'+
'    display:block;'+
'    color:#ffe397;'+
'    font-size:18px;'+
'}'+
''+
'.prestige-stat span{'+
'    color:#86847b;'+
'    font-size:10px;'+
'}'+
''+
'#prestigeButton{'+
'    width:100%;'+
'    padding:13px;'+
'    border:0;'+
'    border-radius:12px;'+
'    cursor:pointer;'+
'    font-size:14px;'+
'    font-weight:900;'+
'    color:#281d00;'+
'    background:linear-gradient(90deg,#f6ba31,#ffe787);'+
'}'+
''+
'#prestigeButton:disabled{'+
'    cursor:not-allowed;'+
'    color:#777;'+
'    background:#292a31;'+
'}'+
''+
'.super-rebirth-box{margin-top:18px;padding:16px;border:1px solid rgba(160,120,255,.45);border-radius:16px;background:linear-gradient(135deg,rgba(87,45,145,.22),rgba(15,20,45,.8))}'+
'.super-rebirth-box p{color:#aaa9c5;line-height:1.5;font-size:12px}'+
'#superPrestigeButton{width:100%;padding:13px;border:0;border-radius:12px;cursor:pointer;font-weight:900;color:white;background:linear-gradient(90deg,#7c3aed,#2563eb)}'+
'#superPrestigeButton:disabled{opacity:.45;cursor:not-allowed}'+
'.maintenance-button{width:100%;margin-top:8px;padding:8px;border:1px solid rgba(80,200,160,.5);border-radius:9px;background:rgba(30,130,95,.15);color:inherit;cursor:pointer;font-weight:700}'+
'.maintenance-button:disabled{opacity:.45;cursor:not-allowed}'+
''+
'/* ================= SHOP ================= */'+
''+
'.shop-header{'+
'    display:flex;'+
'    justify-content:space-between;'+
'    align-items:center;'+
'    margin-bottom:17px;'+
'}'+
''+
'.shop-header h2{'+
'    margin:0;'+
'    font-size:24px;'+
'}'+
''+
'.shop-subtitle{'+
'    color:#737481;'+
'    font-size:11px;'+
'}'+
''+
'.shop-list{'+
'    max-height:calc(100vh - 215px);'+
'    padding-right:5px;'+
'    overflow-y:auto;'+
'}'+
''+
'.shop-list::-webkit-scrollbar{'+
'    width:6px;'+
'}'+
''+
'.shop-list::-webkit-scrollbar-thumb{'+
'    border-radius:10px;'+
'    background:#393a48;'+
'}'+
''+
'.upgrade{'+
'    position:relative;'+
'    margin-bottom:11px;'+
'    padding:17px;'+
'    border-radius:17px;'+
'    background:linear-gradient('+
'        135deg,'+
'        rgba(255,255,255,.055),'+
'        rgba(255,255,255,.018)'+
'    );'+
'    border:1px solid rgba(255,255,255,.07);'+
'    transition:.2s;'+
'}'+
''+
'.upgrade:hover{'+
'    transform:translateY(-2px);'+
'    border-color:rgba(124,108,255,.42);'+
'    background:rgba(124,108,255,.075);'+
'}'+
''+
'.upgrade-top{'+
'    display:flex;'+
'    align-items:center;'+
'    gap:13px;'+
'}'+
''+
'.upgrade-icon{'+
'    flex:0 0 auto;'+
'    width:48px;'+
'    height:48px;'+
'    display:grid;'+
'    place-items:center;'+
'    border-radius:13px;'+
'    background:rgba(124,108,255,.12);'+
'    border:1px solid rgba(124,108,255,.2);'+
'    font-size:24px;'+
'}'+
''+
'.upgrade-name{'+
'    margin:0 65px 0 0;'+
'    font-size:15px;'+
'}'+
''+
'.upgrade-description{'+
'    margin:5px 0 0;'+
'    color:#80818d;'+
'    font-size:11px;'+
'    line-height:1.45;'+
'}'+
''+
'.owned{'+
'    position:absolute;'+
'    top:15px;'+
'    right:15px;'+
'    padding:4px 8px;'+
'    border-radius:8px;'+
'    color:#67ffac;'+
'    background:rgba(101,255,161,.1);'+
'    font-size:10px;'+
'    font-weight:bold;'+
'}'+
''+
'.buy{'+
'    width:100%;'+
'    margin-top:13px;'+
'    padding:10px;'+
'    border:0;'+
'    border-radius:10px;'+
'    cursor:pointer;'+
'    color:white;'+
'    background:#6357e6;'+
'    font-size:12px;'+
'    font-weight:bold;'+
'    transition:.18s;'+
'}'+
''+
'.buy:hover:not(:disabled){'+
'    transform:translateY(-1px);'+
'    background:#796eff;'+
'}'+
''+
'.buy:disabled{'+
'    cursor:not-allowed;'+
'    color:#656671;'+
'    background:#292a34;'+
'}'+
''+
'/* ================= SÉLECTEUR DE QUANTITÉ ================= */'+
'.buy-mode{'+
'    display:flex;'+
'    align-items:center;'+
'    gap:6px;'+
'    margin:0 0 14px;'+
'    padding:8px;'+
'    border:1px dashed var(--skala-line,#326746);'+
'}'+
'.buy-mode-label{'+
'    flex:0 0 auto;'+
'    font-size:10px;'+
'    letter-spacing:1px;'+
'    opacity:.8;'+
'}'+
'.buy-mode-btn{'+
'    flex:1;'+
'    min-height:32px;'+
'    padding:6px 8px!important;'+
'    cursor:pointer;'+
'    font-size:12px;'+
'    font-weight:900!important;'+
'}'+
'.buy-mode-btn.active{'+
'    color:#020704!important;'+
'    background:var(--skala-green-bright,#65ff8a)!important;'+
'    border-color:var(--skala-green-bright,#65ff8a)!important;'+
'    text-shadow:none!important;'+
'}'+
''+
'/* ================= NOTIFICATION ================= */'+
''+
'#notification{'+
'    position:fixed;'+
'    right:24px;'+
'    bottom:24px;'+
'    z-index:11000;'+
'    max-width:320px;'+
'    padding:15px 19px;'+
'    border-radius:13px;'+
'    background:#191a25;'+
'    border:1px solid rgba(255,255,255,.1);'+
'    box-shadow:0 15px 50px rgba(0,0,0,.5);'+
'    opacity:0;'+
'    transform:translateY(100px);'+
'    transition:.3s;'+
'}'+
''+
'#notification.show{'+
'    opacity:1;'+
'    transform:translateY(0);'+
'}'+
''+
'/* ================= ADMIN ================= */'+
''+
'#adminButton{'+
'    display:none;'+
'}'+
''+
'#adminButton.show{'+
'    display:inline-flex;'+
'}'+
''+
'#adminPanel{'+
'    position:fixed;'+
'    inset:0;'+
'    z-index:9500;'+
'    display:none;'+
'    overflow:auto;'+
'    padding:0;'+
'    background:#08090e;'+
'}'+
''+
'#adminPanel.show{'+
'    display:block;'+
'}'+
''+
'.admin-window{'+
'    width:100%;'+
'    min-height:100%;'+
'    background:'+
'        radial-gradient(circle at 15% 0%,rgba(125,92,255,.10),transparent 28%),'+
'        radial-gradient(circle at 90% 10%,rgba(0,210,255,.06),transparent 25%),'+
'        #08090e;'+
'}'+
''+
'.admin-top{'+
'    position:sticky;'+
'    top:0;'+
'    z-index:5;'+
'    display:flex;'+
'    align-items:center;'+
'    justify-content:space-between;'+
'    gap:20px;'+
'    padding:20px 30px;'+
'    background:rgba(8,9,14,.86);'+
'    border-bottom:1px solid rgba(255,255,255,.07);'+
'    backdrop-filter:blur(18px);'+
'}'+
''+
'.admin-brand{'+
'    display:flex;'+
'    align-items:center;'+
'    gap:13px;'+
'}'+
''+
'.admin-logo{'+
'    width:42px;'+
'    height:42px;'+
'    display:grid;'+
'    place-items:center;'+
'    border-radius:13px;'+
'    background:linear-gradient(145deg,#262331,#171720);'+
'    border:1px solid rgba(255,255,255,.10);'+
'    font-size:20px;'+
'}'+
''+
'.admin-title{'+
'    margin:0;'+
'    color:#fff;'+
'    font-size:21px;'+
'    line-height:1.1;'+
'    font-weight:900;'+
'}'+
''+
'.admin-subtitle{'+
'    margin:5px 0 0;'+
'    color:#777b8b;'+
'    font-size:11px;'+
'}'+
''+
'.admin-actions{'+
'    display:flex;'+
'    gap:8px;'+
'}'+
''+
'.admin-btn{'+
'    border:1px solid rgba(255,255,255,.08);'+
'    border-radius:10px;'+
'    padding:9px 12px;'+
'    cursor:pointer;'+
'    color:#dfe1e8;'+
'    background:#151720;'+
'    font-size:11px;'+
'    font-weight:800;'+
'    transition:.15s ease;'+
'}'+
''+
'.admin-btn:hover{'+
'    background:#1d1f2a;'+
'    border-color:rgba(255,255,255,.15);'+
'    transform:translateY(-1px);'+
'}'+
''+
'.admin-btn.gold{'+
'    color:#fff;'+
'    background:#7657d9;'+
'    border-color:#8569e8;'+
'}'+
''+
'.admin-content{'+
'    width:min(1200px,calc(100% - 50px));'+
'    margin:0 auto;'+
'    padding:25px 0 45px;'+
'}'+
''+
'.admin-stats{'+
'    display:grid;'+
'    grid-template-columns:repeat(4,1fr);'+
'    gap:12px;'+
'    margin-bottom:18px;'+
'}'+
''+
'.admin-stat{'+
'    padding:15px 17px;'+
'    border:1px solid rgba(255,255,255,.065);'+
'    border-radius:15px;'+
'    background:rgba(18,19,27,.78);'+
'}'+
''+
'.admin-stat-label{'+
'    color:#737786;'+
'    font-size:10px;'+
'    font-weight:800;'+
'    text-transform:uppercase;'+
'    letter-spacing:.7px;'+
'}'+
''+
'.admin-stat-value{'+
'    margin-top:5px;'+
'    color:#fff;'+
'    font-size:22px;'+
'    font-weight:900;'+
'}'+
''+
'.admin-toolbar{'+
'    display:flex;'+
'    align-items:center;'+
'    justify-content:space-between;'+
'    gap:12px;'+
'    margin-bottom:12px;'+
'}'+
''+
'.admin-search-wrap{'+
'    position:relative;'+
'    flex:1;'+
'}'+
''+
'.admin-search-icon{'+
'    position:absolute;'+
'    left:13px;'+
'    top:50%;'+
'    transform:translateY(-50%);'+
'    color:#6f7382;'+
'    font-size:13px;'+
'    pointer-events:none;'+
'}'+
''+
'.admin-search{'+
'    width:100%;'+
'    padding:11px 14px 11px 35px;'+
'    border-radius:11px;'+
'    border:1px solid rgba(255,255,255,.075);'+
'    outline:none;'+
'    background:#12131b;'+
'    color:#fff;'+
'    font-size:12px;'+
'}'+
''+
'.admin-search:focus{'+
'    border-color:rgba(133,105,232,.65);'+
'    box-shadow:0 0 0 3px rgba(133,105,232,.08);'+
'}'+
''+
'.admin-message{'+
'    min-height:18px;'+
'    margin:8px 2px 12px;'+
'    color:#7d8190;'+
'    font-size:11px;'+
'}'+
''+
'.admin-table-wrap{'+
'    overflow:auto;'+
'    border:1px solid rgba(255,255,255,.07);'+
'    border-radius:17px;'+
'    background:rgba(14,15,22,.82);'+
'}'+
''+
'.admin-table{'+
'    width:100%;'+
'    border-collapse:collapse;'+
'    min-width:930px;'+
'}'+
''+
'.admin-table th{'+
'    padding:12px 13px;'+
'    color:#707483;'+
'    background:#11121a;'+
'    border-bottom:1px solid rgba(255,255,255,.07);'+
'    text-align:left;'+
'    font-size:9px;'+
'    font-weight:900;'+
'    text-transform:uppercase;'+
'    letter-spacing:.75px;'+
'}'+
''+
'.admin-table td{'+
'    padding:13px;'+
'    color:#d8dae1;'+
'    border-bottom:1px solid rgba(255,255,255,.045);'+
'    font-size:11px;'+
'    vertical-align:middle;'+
'}'+
''+
'.admin-table tbody tr:hover{'+
'    background:rgba(255,255,255,.025);'+
'}'+
''+
'.admin-table tbody tr:last-child td{'+
'    border-bottom:0;'+
'}'+
''+
'.admin-player{'+
'    color:#fff;'+
'    font-size:12px;'+
'    font-weight:900;'+
'}'+
''+
'.admin-muted{'+
'    max-width:170px;'+
'    margin-top:3px;'+
'    overflow:hidden;'+
'    color:#626674;'+
'    font-size:9px;'+
'    text-overflow:ellipsis;'+
'}'+
''+
'.admin-badge{'+
'    display:inline-flex;'+
'    align-items:center;'+
'    gap:5px;'+
'    padding:5px 8px;'+
'    border-radius:999px;'+
'    font-size:9px;'+
'    font-weight:900;'+
'}'+
''+
'.admin-badge::before{'+
'    content:"";'+
'    width:5px;'+
'    height:5px;'+
'    border-radius:50%;'+
'}'+
''+
'.admin-badge.ok{'+
'    color:#72e5a8;'+
'    background:rgba(72,220,140,.08);'+
'}'+
''+
'.admin-badge.ok::before{'+
'    background:#55d991;'+
'}'+
''+
'.admin-badge.banned{'+
'    color:#ff8e96;'+
'    background:rgba(255,70,85,.09);'+
'}'+
''+
'.admin-badge.banned::before{'+
'    background:#ff6975;'+
'}'+
''+
'.admin-row-actions{'+
'    display:flex;'+
'    gap:5px;'+
'}'+
''+
'.admin-mini{'+
'    border:1px solid rgba(255,255,255,.06);'+
'    border-radius:8px;'+
'    padding:7px 8px;'+
'    cursor:pointer;'+
'    color:#cfd1d9;'+
'    background:#191a23;'+
'    font-size:9px;'+
'    font-weight:800;'+
'}'+
''+
'.admin-mini.money{'+
'    color:#7ee3a6;'+
'}'+
''+
'.admin-mini.xp{'+
'    color:#b4a2ff;'+
'}'+
''+
'.admin-mini.shards{'+
'    color:#f0c56b;'+
'}'+
''+
'.admin-mini.ban{'+
'    color:#ff8d95;'+
'}'+
''+
'.admin-mini.unban{'+
'    color:#74dfab;'+
'}'+
''+
'/* ================= BAN ================= */'+
''+
'#banScreen{'+
'    position:fixed;'+
'    inset:0;'+
'    z-index:10000;'+
'    display:none;'+
'    align-items:center;'+
'    justify-content:center;'+
'    padding:20px;'+
'    background:'+
'        radial-gradient(circle at 50% 30%,rgba(255,70,70,.16),transparent 45%),'+
'        #07080e;'+
'}'+
''+
'#banScreen.show{'+
'    display:flex;'+
'}'+
''+
'.ban-box{'+
'    width:520px;'+
'    max-width:100%;'+
'    padding:35px;'+
'    border-radius:25px;'+
'    text-align:center;'+
'    background:rgba(16,17,28,.96);'+
'    border:1px solid rgba(255,80,80,.25);'+
'    box-shadow:0 25px 100px rgba(0,0,0,.65);'+
'}'+
''+
'.ban-icon{'+
'    font-size:60px;'+
'    margin-bottom:10px;'+
'}'+
''+
'.ban-title{'+
'    margin:0;'+
'    color:#ff6f6f;'+
'    font-size:30px;'+
'    font-weight:900;'+
'}'+
''+
'.ban-text{'+
'    margin:10px 0 25px;'+
'    color:#999ba8;'+
'    font-size:13px;'+
'    line-height:1.6;'+
'}'+
''+
'.ban-info{'+
'    display:grid;'+
'    gap:10px;'+
'    margin-bottom:22px;'+
'}'+
''+
'.ban-row{'+
'    padding:13px;'+
'    border-radius:12px;'+
'    background:rgba(255,255,255,.04);'+
'    border:1px solid rgba(255,255,255,.06);'+
'}'+
''+
'.ban-row strong{'+
'    display:block;'+
'    color:#ff9b9b;'+
'    font-size:11px;'+
'    margin-bottom:5px;'+
'}'+
''+
'.ban-row span{'+
'    color:#ddd;'+
'    font-size:13px;'+
'    word-break:break-word;'+
'}'+
''+
'#banLogoutButton{'+
'    width:100%;'+
'    padding:13px;'+
'    border:0;'+
'    border-radius:12px;'+
'    cursor:pointer;'+
'    color:white;'+
'    background:#8f3030;'+
'    font-weight:900;'+
'}'+
''+
''+
'/* ================= BOUTIQUE DES ÉCLATS ================= */'+
'.shard-shop-box{margin-top:22px;padding:20px;border-radius:18px;background:radial-gradient(circle at 85% 15%,rgba(153,120,255,.18),transparent 42%),rgba(124,108,255,.045);border:1px solid rgba(157,130,255,.25)}'+
'.shard-shop-header{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:14px}'+
'.shard-shop-title{margin:0;color:#d7ccff;font-size:19px;font-weight:900}'+
'.shard-shop-balance{padding:7px 10px;border-radius:10px;color:#f0d9ff;background:rgba(167,121,255,.12);border:1px solid rgba(167,121,255,.22);font-size:11px;font-weight:900}'+
'.shard-shop-desc{margin:0 0 13px;color:#89849b;font-size:11px;line-height:1.5}'+
'.shard-shop-list{display:grid;gap:9px}'+
'.shard-item{padding:13px;border-radius:14px;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.06)}'+
'.shard-item-top{display:flex;align-items:center;gap:10px}'+
'.shard-item-icon{width:39px;height:39px;flex:0 0 auto;display:grid;place-items:center;border-radius:11px;background:rgba(157,130,255,.12);border:1px solid rgba(157,130,255,.18);font-size:19px}'+
'.shard-item-name{margin:0;color:#eeeaff;font-size:12px;font-weight:900}'+
'.shard-item-desc{margin:3px 0 0;color:#777487;font-size:10px;line-height:1.35}'+
'.shard-item-owned{margin-left:auto;color:#c7b9ff;font-size:10px;font-weight:900}'+
'.shard-buy{width:100%;margin-top:10px;padding:9px;border:0;border-radius:9px;cursor:pointer;color:white;background:linear-gradient(90deg,#6954cf,#8b72ff);font-size:10px;font-weight:900}'+
'.shard-buy:hover:not(:disabled){filter:brightness(1.12);transform:translateY(-1px)}'+
'.shard-buy:disabled{cursor:not-allowed;color:#646170;background:#292731}'+
''+
''+
'/* ================= FONCTIONNEMENT / RISQUE RÉACTEURS ================= */'+
'.reactor-operation{margin-top:10px;padding:10px 11px;border-radius:11px;background:rgba(255,120,70,.045);border:1px solid rgba(255,120,70,.14)}'+
'.reactor-operation-head{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:7px}'+
'.reactor-operation-label{font-size:9px;font-weight:900;color:#aaa6b4;text-transform:uppercase;letter-spacing:.5px}'+
'.reactor-risk{font-size:10px;font-weight:900}'+
'.reactor-risk-bar{height:6px;border-radius:99px;overflow:hidden;background:#25232b}'+
'.reactor-risk-fill{height:100%;width:0;border-radius:99px;transition:width .3s ease}'+
'.reactor-operation-info{display:flex;align-items:center;justify-content:space-between;gap:8px;margin-top:7px}'+
'.reactor-operation-status{font-size:9px;color:#777487}'+
'.reactor-operation-status strong{font-weight:900}'+
'.employee-badge{display:inline-flex;align-items:center;gap:4px;margin-top:7px;padding:5px 7px;border-radius:7px;background:rgba(100,180,255,.06);border:1px solid rgba(100,180,255,.11);font-size:8px;color:#8ea9c4}'+
''+
'/* ================= MOBILE ================= */'+
''+
'@media(max-width:900px){'+
'    .game{'+
'        grid-template-columns:1fr;'+
'    }'+
''+
'    .sticky-game{'+
'        position:static;'+
'    }'+
''+
'    .shop-list{'+
'        max-height:none;'+
'        overflow:visible;'+
'    }'+
'}'+
''+
'@media(max-width:800px){'+
'    .admin-top{'+
'        padding:16px;'+
'    }'+
''+
'    .admin-content{'+
'        width:calc(100% - 20px);'+
'        padding-top:15px;'+
'    }'+
''+
'    .admin-stats{'+
'        grid-template-columns:repeat(2,1fr);'+
'    }'+
'}'+
''+
'@media(max-width:550px){'+
'    header{'+
'        height:auto;'+
'        padding:15px;'+
'        align-items:flex-start;'+
'        flex-direction:column;'+
'    }'+
''+
'    .header-stats{'+
'        justify-content:flex-start;'+
'    }'+
''+
'    .panel{'+
'        padding:18px;'+
'    }'+
''+
'    #clickButton{'+
'        width:185px;'+
'        height:185px;'+
'        font-size:22px;'+
'    }'+
''+
'    .stats{'+
'        grid-template-columns:1fr 1fr;'+
'    }'+
'}'+
''+
'@media(max-width:500px){'+
'    .admin-top{'+
'        align-items:flex-start;'+
'        flex-direction:column;'+
'    }'+
''+
'    .admin-actions{'+
'        width:100%;'+
'    }'+
''+
'    .admin-btn{'+
'        flex:1;'+
'    }'+
'}'+
''+
''+
'/* ========================================================='+
'   SKALA — esthétique terminal industriel soviétique'+
'   Habillage visuel uniquement : aucune logique du jeu modifiée.'+
'========================================================= */'+
':root{'+
'    --skala-bg:#030906;'+
'    --skala-panel:#07130d;'+
'    --skala-panel-2:#0a1a11;'+
'    --skala-line:#28583a;'+
'    --skala-green:#a5ffb5;'+
'    --skala-green-bright:#58ff82;'+
'    --skala-dim:#6eaa7d;'+
'    --skala-amber:#ffc85a;'+
'    --skala-red:#ff4141;'+
'}'+
'html{'+
'    background:var(--skala-bg);'+
'    color-scheme:dark;'+
'}'+
'body{'+
'    color:var(--skala-green)!important;'+
'    font-family:"Courier New",Consolas,monospace!important;'+
'    background:'+
'        repeating-linear-gradient('+
'            to bottom,'+
'            rgba(94,255,135,.035) 0px,'+
'            rgba(94,255,135,.035) 1px,'+
'            transparent 1px,'+
'            transparent 4px'+
'        ),'+
'        radial-gradient(ellipse at center, #0a1a10 0%, #030906 78%)!important;'+
'    text-shadow:0 0 5px rgba(88,255,130,.16);'+
'}'+
'body::before{'+
'    content:"";'+
'    position:fixed;'+
'    inset:0;'+
'    z-index:9997;'+
'    pointer-events:none;'+
'    opacity:.12;'+
'    background:repeating-linear-gradient('+
'        0deg,'+
'        transparent 0px,'+
'        transparent 2px,'+
'        rgba(0,0,0,.55) 3px,'+
'        rgba(0,0,0,.55) 4px'+
'    );'+
'}'+
'button,input,select,textarea{'+
'    font-family:"Courier New",Consolas,monospace!important;'+
'}'+
'button,input,select,textarea,'+
'.panel,.auth-box,.ban-box,.admin-window,'+
'.prestige-box,.super-rebirth-box,.shard-shop-box,'+
'.upgrade,.shard-item,.stat,.admin-stat{'+
'    border-radius:2px!important;'+
'}'+
'.panel,.auth-box,.ban-box,.admin-window,'+
'.prestige-box,.super-rebirth-box,.shard-shop-box{'+
'    color:var(--skala-green)!important;'+
'    background:linear-gradient(145deg,rgba(7,19,12,.98),rgba(3,10,6,.98))!important;'+
'    border:1px solid var(--skala-line)!important;'+
'    box-shadow:inset 0 0 0 1px rgba(88,255,130,.035),0 0 18px rgba(20,110,48,.09)!important;'+
'    backdrop-filter:none!important;'+
'}'+
'.authScreen,#authScreen,#banScreen{'+
'    background:var(--skala-bg)!important;'+
'}'+
'.auth-logo,.logo,.admin-logo{'+
'    color:var(--skala-green-bright)!important;'+
'    text-shadow:0 0 12px rgba(88,255,130,.35)!important;'+
'    letter-spacing:3px!important;'+
'}'+
'.auth-subtitle,.auth-note,.shop-subtitle,.prestige-desc,'+
'.shard-shop-desc,.admin-subtitle,.admin-muted,'+
'.upgrade-description,.shard-item-desc{'+
'    color:var(--skala-dim)!important;'+
'}'+
'.auth-label,.label,.stat-label,.money-title,'+
'.prestige-title,.shard-shop-title,.admin-title,'+
'.admin-stat-label,.reactor-operation-label{'+
'    color:var(--skala-green)!important;'+
'    text-transform:uppercase;'+
'    letter-spacing:1px;'+
'}'+
'.auth-input,.admin-search,.admin-search-wrap input,'+
'input,select,textarea{'+
'    color:var(--skala-green)!important;'+
'    background:#020704!important;'+
'    border:1px solid var(--skala-line)!important;'+
'    outline-color:var(--skala-green-bright)!important;'+
'    box-shadow:inset 0 0 8px rgba(0,0,0,.55)!important;'+
'}'+
'input::placeholder,textarea::placeholder{'+
'    color:#547d5e!important;'+
'}'+
'button,.buy,.shard-buy,.auth-submit,.logout,'+
'.maintenance-button,.admin-btn,.auth-tab,'+
'#prestigeButton,#superPrestigeButton{'+
'    color:var(--skala-green)!important;'+
'    background:linear-gradient(#102819,#07140b)!important;'+
'    border:1px solid #39734b!important;'+
'    box-shadow:inset 0 0 0 1px rgba(165,255,181,.035)!important;'+
'    text-transform:uppercase;'+
'    letter-spacing:.4px;'+
'    transition:background .12s linear,border-color .12s linear,filter .12s linear!important;'+
'}'+
'button:hover,.buy:hover,.shard-buy:hover,.auth-submit:hover,'+
'.logout:hover,.maintenance-button:hover,.admin-btn:hover{'+
'    background:#173c23!important;'+
'    border-color:var(--skala-green-bright)!important;'+
'    filter:brightness(1.08);'+
'}'+
'button:disabled,.buy:disabled,.shard-buy:disabled{'+
'    color:#55715c!important;'+
'    background:#08100b!important;'+
'    border-color:#203b29!important;'+
'    opacity:.62;'+
'}'+
'.auth-tab.active,.auth-tab[aria-selected="true"]{'+
'    color:#020704!important;'+
'    background:var(--skala-green-bright)!important;'+
'    border-color:var(--skala-green-bright)!important;'+
'    text-shadow:none!important;'+
'}'+
'.header-pill,.language-pill,.user-pill,.employee-badge,'+
'.admin-badge,.owned,.header-stats{'+
'    color:var(--skala-green)!important;'+
'    background:#07150b!important;'+
'    border:1px solid var(--skala-line)!important;'+
'    box-shadow:none!important;'+
'}'+
'.money,.stat-value,.admin-stat-value,.prestige-stat,'+
'.shard-shop-balance,.xp-info{'+
'    color:var(--skala-green-bright)!important;'+
'    text-shadow:0 0 7px rgba(88,255,130,.18);'+
'}'+
'.stats,.header-stats,.admin-stats{'+
'    gap:8px!important;'+
'}'+
'.stat,.admin-stat{'+
'    color:var(--skala-green)!important;'+
'    background:rgba(5,17,9,.9)!important;'+
'    border:1px solid var(--skala-line)!important;'+
'    box-shadow:inset 0 0 12px rgba(0,0,0,.2)!important;'+
'}'+
'.stat-icon,.upgrade-icon,.shard-item-icon{'+
'    filter:saturate(.65);'+
'}'+
'.upgrade,.shard-item,.admin-player,.admin-table-wrap{'+
'    color:var(--skala-green)!important;'+
'    background:linear-gradient(90deg,rgba(8,24,13,.97),rgba(4,13,7,.97))!important;'+
'    border:1px solid #214b30!important;'+
'    box-shadow:none!important;'+
'}'+
'.upgrade:hover,.shard-item:hover{'+
'    border-color:#58a96d!important;'+
'    background:#0b2112!important;'+
'}'+
'.upgrade-name,.shard-item-name,.admin-player strong{'+
'    color:#c1ffcc!important;'+
'}'+
'.upgrade-description,.shard-item-desc{'+
'    line-height:1.5;'+
'}'+
'.shop-header,.reactor-operation-head,.shard-shop-header,.admin-top{'+
'    border-bottom:1px dashed var(--skala-line)!important;'+
'}'+
'.xp-box,.xp-progress,.reactor-risk-bar{'+
'    background:#020704!important;'+
'    border:1px solid var(--skala-line)!important;'+
'    border-radius:0!important;'+
'}'+
'.xp-progress>*, .reactor-risk-fill{'+
'    border-radius:0!important;'+
'}'+
'.xp-progress{'+
'    box-shadow:inset 0 0 5px #000!important;'+
'}'+
'#clickButton{'+
'    border:2px solid #ff4141!important;'+
'    background:radial-gradient(circle at 50% 35%,#b51c1c 0%,#650707 66%,#260303 100%)!important;'+
'    color:#fff!important;'+
'    box-shadow:0 0 14px rgba(255,30,30,.25),inset 0 0 0 2px rgba(255,255,255,.05)!important;'+
'    text-shadow:0 0 8px rgba(255,255,255,.3)!important;'+
'}'+
'#clickButton:hover{'+
'    border-color:#ff7777!important;'+
'    background:radial-gradient(circle at 50% 35%,#d52424 0%,#7c0808 66%,#310303 100%)!important;'+
'}'+
'.az5-alert{'+
'    font-family:"Courier New",Consolas,monospace!important;'+
'    border:2px solid #ff4141!important;'+
'    border-radius:0!important;'+
'    background:#260303!important;'+
'    box-shadow:0 0 24px rgba(255,0,0,.35)!important;'+
'}'+
'#notification,.auth-message,.admin-message{'+
'    border-radius:0!important;'+
'    font-family:"Courier New",Consolas,monospace!important;'+
'}'+
'table,.admin-table{'+
'    border-collapse:collapse!important;'+
'    color:var(--skala-green)!important;'+
'}'+
'th,td,.admin-table th,.admin-table td{'+
'    border-color:var(--skala-line)!important;'+
'}'+
'th,.admin-table th{'+
'    color:#c1ffcc!important;'+
'    background:#0b2112!important;'+
'    text-transform:uppercase;'+
'}'+
'.admin-toolbar,.admin-content{'+
'    color:var(--skala-green)!important;'+
'}'+
'::selection{'+
'    color:#020704!important;'+
'    background:var(--skala-green-bright)!important;'+
'}'+
'a{'+
'    color:var(--skala-green-bright)!important;'+
'}'+
'@media (prefers-reduced-motion:reduce){'+
'    *,*::before,*::after{'+
'        transition:none!important;'+
'        animation-duration:.01ms!important;'+
'    }'+
'}'+
'@media(max-width:600px){'+
'    body::before{opacity:.07}'+
'    .panel,.auth-box,.ban-box,.admin-window{'+
'        box-shadow:inset 0 0 0 1px rgba(88,255,130,.025)!important;'+
'    }'+
'}'+
''+
''+
'/* ========================================================='+
'   SKALA UI — POLISH DE LA CONSOLE (sans toucher au gameplay)'+
'========================================================= */'+
':root{'+
'    --skala-bg:#020604;'+
'    --skala-panel:#06100a;'+
'    --skala-panel-2:#0a1a10;'+
'    --skala-line:#326746;'+
'    --skala-green:#b5ffc1;'+
'    --skala-green-bright:#65ff8a;'+
'    --skala-dim:#79ad86;'+
'    --skala-amber:#ffd166;'+
'    --skala-red:#ff4141;'+
'}'+
'html{scroll-behavior:smooth;scroll-padding-top:92px}'+
'body{'+
'    background-color:var(--skala-bg)!important;'+
'    background-image:'+
'      linear-gradient(rgba(91,255,132,.025) 1px,transparent 1px),'+
'      linear-gradient(90deg,rgba(91,255,132,.025) 1px,transparent 1px),'+
'      radial-gradient(ellipse at 50% 0%,#102b18 0%,#030906 58%,#010302 100%)!important;'+
'    background-size:28px 28px,28px 28px,auto!important;'+
'}'+
'body::after{'+
'    content:"SKALA / SYSTÈME DE CONTRÔLE — TERMINAL OPÉRATIONNEL";'+
'    position:fixed;right:12px;bottom:8px;z-index:9996;pointer-events:none;'+
'    padding:4px 7px;color:#57936a;background:rgba(1,6,3,.82);'+
'    border:1px solid rgba(88,255,130,.22);font:10px "Courier New",monospace;'+
'    letter-spacing:1px;opacity:.68;'+
'}'+
'header{'+
'    min-height:78px;height:auto;padding:12px clamp(12px,2.5vw,34px)!important;'+
'    background:rgba(2,8,4,.97)!important;border-bottom:1px solid #3a8050!important;'+
'    box-shadow:0 5px 24px rgba(0,0,0,.55),inset 0 -2px rgba(88,255,130,.04)!important;'+
'}'+
'.logo{font-size:clamp(17px,2vw,25px)!important;letter-spacing:2px!important;white-space:nowrap}'+
'.logo::before{content:"▣ ";color:var(--skala-green-bright)}'+
'.header-stats{gap:7px!important}'+
'.header-pill{padding:8px 10px!important;font-size:11px!important;letter-spacing:.35px}'+
'.game{'+
'    width:min(1480px,96%)!important;grid-template-columns:minmax(0,1.08fr) minmax(360px,.92fr)!important;'+
'    gap:16px!important;margin:20px auto 48px!important;align-items:start;'+
'}'+
'.panel{'+
'    position:relative;overflow:hidden;padding:clamp(15px,2vw,25px)!important;'+
'    background:linear-gradient(135deg,rgba(7,20,11,.98),rgba(2,8,4,.98))!important;'+
'    border:1px solid #326746!important;'+
'    box-shadow:inset 0 0 0 1px rgba(101,255,138,.045),0 12px 32px rgba(0,0,0,.38)!important;'+
'}'+
'.panel::before{'+
'    content:"";position:absolute;top:0;left:0;right:0;height:3px;'+
'    background:linear-gradient(90deg,#28583a,#65ff8a 45%,#28583a);opacity:.8;pointer-events:none;'+
'}'+
'.sticky-game{top:96px!important}'+
'.money-title,.shop-title,.shop-header h2,.reactor-operation-head,.prestige-title,.shard-shop-title{'+
'    text-shadow:0 0 8px rgba(101,255,138,.18)!important;'+
'}'+
'.money{font-size:clamp(36px,4.8vw,68px)!important;line-height:1.08;letter-spacing:-1px;margin:12px 0 22px!important;overflow-wrap:anywhere}'+
'#clickButton{'+
'    position:relative;width:clamp(170px,18vw,225px)!important;height:clamp(170px,18vw,225px)!important;'+
'    border:3px solid #ff5252!important;outline:1px solid rgba(255,65,65,.24);outline-offset:5px;'+
'    background:radial-gradient(circle at 50% 30%,#a51e1e 0%,#4e0909 62%,#170303 100%)!important;'+
'    box-shadow:0 0 0 8px rgba(255,65,65,.035),0 0 26px rgba(255,25,25,.22),inset 0 0 24px rgba(0,0,0,.6)!important;'+
'    font-size:clamp(19px,2vw,26px)!important;letter-spacing:2px!important;'+
'    transition:transform .08s ease,filter .12s ease!important;'+
'}'+
'#clickButton::before{content:"COMMANDE";font-size:10px;letter-spacing:3px;color:#ffb3b3;opacity:.88}'+
'#clickButton:active{transform:scale(.975)!important;filter:brightness(1.25)}'+
'.stats{gap:9px!important}'+
'.stat{padding:12px!important;min-width:0}'+
'.stat-label{font-size:10px!important;letter-spacing:1px}'+
'.stat-value{overflow-wrap:anywhere;font-size:clamp(15px,1.8vw,22px)!important}'+
'.shop-header,.reactor-operation-head,.shard-shop-header,.admin-top{'+
'    padding-bottom:12px!important;margin-bottom:14px!important;'+
'}'+
'.upgrade,.shard-item{'+
'    position:relative;padding:14px!important;margin-bottom:9px!important;'+
'    background:linear-gradient(100deg,rgba(9,29,15,.98),rgba(3,12,6,.98))!important;'+
'    border:1px solid #28583a!important;transition:border-color .15s,background .15s,transform .15s!important;'+
'}'+
'.upgrade:hover,.shard-item:hover{transform:translateY(-1px);border-color:#65ff8a!important;box-shadow:0 0 12px rgba(101,255,138,.06)!important}'+
'.upgrade-name,.shard-item-name{font-size:14px!important;letter-spacing:.25px}'+
'.upgrade-description,.shard-item-desc{font-size:11px!important;line-height:1.55!important}'+
'button,.buy,.shard-buy,.maintenance-button,.admin-btn,#prestigeButton,#superPrestigeButton{'+
'    min-height:35px;padding:8px 12px!important;font-weight:700!important;'+
'}'+
'button:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{'+
'    outline:2px solid var(--skala-green-bright)!important;outline-offset:3px!important;'+
'}'+
'#notification{border:1px solid var(--skala-line)!important;background:#06150a!important;box-shadow:0 8px 24px rgba(0,0,0,.45)!important}'+
'.xp-box{height:12px!important;margin:8px 0 12px!important}'+
'.xp-progress{height:100%!important}'+
'.admin-window{max-width:min(1100px,96vw)!important}'+
'.admin-table-wrap{overflow:auto!important}'+
'.admin-table{min-width:680px}'+
'.auth-box{max-width:440px!important;padding:clamp(20px,4vw,34px)!important}'+
'.auth-logo{font-size:clamp(25px,4vw,34px)!important}'+
'#authScreen,#banScreen{background:radial-gradient(ellipse at center,#102a18 0%,#020604 72%)!important}'+
'::selection{background:var(--skala-green-bright)!important;color:#020604!important}'+
'@media(max-width:1000px){'+
'    .game{grid-template-columns:minmax(0,1fr)!important;width:min(760px,95%)!important}'+
'    .sticky-game{position:relative;top:auto!important}'+
'    header{align-items:flex-start;flex-direction:column;gap:10px!important}'+
'    .header-stats{justify-content:flex-start!important;width:100%}'+
'}'+
'@media(max-width:600px){'+
'    body::after{display:none}'+
'    .game{width:calc(100% - 18px)!important;margin:10px auto 30px!important;gap:11px!important}'+
'    .panel{padding:15px!important}'+
'    .header-stats{gap:5px!important}'+
'    .header-pill{font-size:10px!important;padding:7px 8px!important}'+
'    .money{font-size:clamp(30px,9vw,48px)!important}'+
'    #clickButton{width:175px!important;height:175px!important}'+
'    .stat{padding:9px!important}'+
'    .upgrade,.shard-item{padding:11px!important}'+
'}'+
'@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}#clickButton:active,.upgrade:hover,.shard-item:hover{transform:none!important}}'+
''+
'</style>'+
'</head>'+
''+
'<body>'+
''+
'<!-- ================= AUTH ================= -->'+
''+
'<div id="authScreen">'+
''+
'    <div class="auth-box">'+
''+
'        <div class="auth-logo">'+
'            <span class="brand-currency-symbol">€</span> <span>CLICKER</span>'+
'        </div>'+
''+
'        <div class="auth-subtitle">'+
'            Connecte-toi pour retrouver ton empire'+
'        </div>'+
''+
'        <div class="auth-tabs">'+
'            <button class="auth-tab active" id="loginTab" type="button">'+
'                Connexion'+
'            </button>'+
''+
'            <button class="auth-tab" id="registerTab" type="button">'+
'                Inscription'+
'            </button>'+
'        </div>'+
''+
'        <form id="loginForm" class="auth-form active">'+
''+
'            <label class="auth-label">Adresse e-mail</label>'+
''+
'            <input'+
'                class="auth-input"'+
'                id="loginEmail"'+
'                type="email"'+
'                autocomplete="email"'+
'                required'+
'                placeholder="ton@email.com"'+
'            >'+
''+
'            <label class="auth-label">Mot de passe</label>'+
''+
'            <input'+
'                class="auth-input"'+
'                id="loginPassword"'+
'                type="password"'+
'                autocomplete="current-password"'+
'                required'+
'            >'+
''+
'            <button class="auth-submit" id="loginSubmit" type="button">'+
'                🔑 Se connecter'+
'            </button>'+
''+
'        </form>'+
''+
'        <form id="registerForm" class="auth-form">'+
''+
'            <label class="auth-label">Pseudo</label>'+
''+
'            <input'+
'                class="auth-input"'+
'                id="registerUsername"'+
'                autocomplete="username"'+
'                minlength="3"'+
'                maxlength="20"'+
'                required'+
'                placeholder="Ex : Gabriel123"'+
'            >'+
''+
'            <label class="auth-label">Adresse e-mail</label>'+
''+
'            <input'+
'                class="auth-input"'+
'                id="registerEmail"'+
'                type="email"'+
'                autocomplete="email"'+
'                required'+
'                placeholder="ton@email.com"'+
'            >'+
''+
'            <label class="auth-label">Mot de passe</label>'+
''+
'            <input'+
'                class="auth-input"'+
'                id="registerPassword"'+
'                type="password"'+
'                autocomplete="new-password"'+
'                minlength="6"'+
'                required'+
'            >'+
''+
'            <label class="auth-label">Confirmer le mot de passe</label>'+
''+
'            <input'+
'                class="auth-input"'+
'                id="registerPasswordConfirm"'+
'                type="password"'+
'                autocomplete="new-password"'+
'                minlength="6"'+
'                required'+
'            >'+
''+
'            <button class="auth-submit" id="registerSubmit" type="button">'+
'                🚀 Créer mon compte'+
'            </button>'+
''+
'        </form>'+
''+
'        <div class="auth-message" id="authMessage"></div>'+
''+
'        <div class="auth-note">'+
'            Ton compte et ta partie sont stockés en ligne avec Supabase.'+
'            Ton mot de passe n\'est pas enregistré dans le jeu.'+
'        </div>'+
''+
'    </div>'+
'</div>'+
''+
''+
'<!-- ================= BAN ================= -->'+
''+
'<div id="banScreen">'+
''+
'    <div class="ban-box">'+
''+
'        <div class="ban-icon">🚫</div>'+
''+
'        <h1 class="ban-title">Compte banni</h1>'+
''+
'        <div class="ban-text">'+
'            Ton accès à <span class="brand-currency-name">€ Clicker</span> a été suspendu.'+
'            Tu ne peux plus jouer ni modifier ta sauvegarde'+
'            tant que cette sanction est active.'+
'        </div>'+
''+
'        <div class="ban-info">'+
''+
'            <div class="ban-row">'+
'                <strong>JOUEUR</strong>'+
'                <span id="banUsername">Joueur</span>'+
'            </div>'+
''+
'            <div class="ban-row">'+
'                <strong>RAISON</strong>'+
'                <span id="banReason">Aucune raison indiquée</span>'+
'            </div>'+
''+
'            <div class="ban-row">'+
'                <strong>EXPIRATION</strong>'+
'                <span id="banExpiration">Permanent</span>'+
'            </div>'+
''+
'        </div>'+
''+
'        <button id="banLogoutButton" type="button">'+
'            🚪 Se déconnecter'+
'        </button>'+
''+
'    </div>'+
'</div>'+
''+
''+
'<!-- ================= ADMIN ================= -->'+
''+
'<div id="adminPanel">'+
''+
'    <div class="admin-window">'+
''+
'        <div class="admin-top">'+
''+
'            <div class="admin-brand">'+
''+
'                <div class="admin-logo">👑</div>'+
''+
'                <div>'+
'                    <h2 class="admin-title">Administration</h2>'+
'                    <div class="admin-subtitle">'+
'                        Gestion des joueurs · <span class="brand-currency-name">€ Clicker</span>'+
'                    </div>'+
'                </div>'+
''+
'            </div>'+
''+
'            <div class="admin-actions">'+
''+
'                <button'+
'                    class="admin-btn gold"'+
'                    id="adminRefresh"'+
'                    type="button"'+
'                >'+
'                    🔄 Actualiser'+
'                </button>'+
''+
'                <button'+
'                    class="admin-btn"'+
'                    id="adminClose"'+
'                    type="button"'+
'                >'+
'                    ✕ Fermer'+
'                </button>'+
''+
'            </div>'+
''+
'        </div>'+
''+
'        <div class="admin-content">'+
''+
'            <div class="admin-stats">'+
''+
'                <div class="admin-stat">'+
'                    <div class="admin-stat-label">Joueurs</div>'+
'                    <div class="admin-stat-value" id="adminTotalPlayers">0</div>'+
'                </div>'+
''+
'                <div class="admin-stat">'+
'                    <div class="admin-stat-label">Actifs</div>'+
'                    <div class="admin-stat-value" id="adminActivePlayers">0</div>'+
'                </div>'+
''+
'                <div class="admin-stat">'+
'                    <div class="admin-stat-label">Bannis</div>'+
'                    <div class="admin-stat-value" id="adminBannedPlayers">0</div>'+
'                </div>'+
''+
'                <div class="admin-stat">'+
'                    <div class="admin-stat-label">Statut</div>'+
'                    <div class="admin-stat-value">EN LIGNE</div>'+
'                </div>'+
''+
'            </div>'+
''+
'            <div class="admin-toolbar">'+
''+
'                <div class="admin-search-wrap">'+
''+
'                    <span class="admin-search-icon">⌕</span>'+
''+
'                    <input'+
'                        id="adminSearch"'+
'                        class="admin-search"'+
'                        type="search"'+
'                        placeholder="Rechercher un joueur..."'+
'                    >'+
''+
'                </div>'+
''+
'            </div>'+
''+
'            <div class="admin-message" id="adminMessage"></div>'+
''+
'            <div class="admin-table-wrap">'+
''+
'                <table class="admin-table">'+
''+
'                    <thead>'+
''+
'                        <tr>'+
'                            <th>Joueur</th>'+
'                            <th>Argent</th>'+
'                            <th>XP</th>'+
'                            <th>Niveau</th>'+
'                            <th>Renaissance</th>'+
'                            <th>Shards</th>'+
'                            <th>Statut</th>'+
'                            <th>Actions</th>'+
'                        </tr>'+
''+
'                    </thead>'+
''+
'                    <tbody id="adminPlayersBody">'+
''+
'                        <tr>'+
'                            <td colspan="8">Chargement...</td>'+
'                        </tr>'+
''+
'                    </tbody>'+
''+
'                </table>'+
''+
'            </div>'+
''+
'        </div>'+
''+
'    </div>'+
'</div>'+
''+
''+
'<!-- ================= GAME ================= -->'+
''+
'<div id="gameScreen" style="display:none">'+
''+
'    <header>'+
''+
'        <div class="logo">'+
'            <span class="brand-currency-symbol">€</span> <span>CLICKER</span>'+
'        </div>'+
''+
'        <div class="header-stats">'+
''+
'            <div class="header-pill language-pill">'+
'                🌐'+
''+
'                <select id="languageSelect">'+
''+
'                    <option value="fr">Français</option>'+
'                    <option value="en">English</option>'+
'                    <option value="ru">Русский</option>'+
''+
'                </select>'+
''+
'            </div>'+
''+
'            <div class="header-pill user-pill">'+
'                👤 <span id="currentUsername"></span>'+
'            </div>'+
''+
'            <div class="header-pill">'+
'                ⭐ Niveau <span id="level">1</span>'+
'            </div>'+
''+
'            <div class="header-pill">'+
'                ♻️ Renaissance <span id="prestigeLevel">0</span>'+
'            </div>'+
''+
'            <div class="header-pill">'+
'                ✨ x<span id="globalMultiplier">1</span>'+
'            </div>'+
''+
'            <button'+
'                class="header-pill"'+
'                id="adminButton"'+
'                type="button"'+
'            >'+
'                👑 Admin'+
'            </button>'+
''+
'            <button'+
'                class="header-pill logout"'+
'                id="logoutButton"'+
'                type="button"'+
'            >'+
'                🚪 Déconnexion'+
'            </button>'+
''+
'        </div>'+
''+
'    </header>'+
''+
'    <main class="game">'+
''+
'        <section class="panel sticky-game">'+
''+
'            <div class="money-title">'+
'                Ton empire'+
'            </div>'+
''+
'            <div class="money">'+
'                <span id="money">0</span>'+
'                <span class="currency-symbol">€</span>'+
'            </div>'+
''+
'            <div class="click-zone">'+
''+
'                <button id="clickButton"'+
'                        type="button"'+
'                        aria-label="AZ-5 : cliquer pour produire des MW"'+
'                        title="AZ-5 — commande de production SKALA">'+
'                    <span class="az5-symbol" aria-hidden="true">☢</span>'+
'                    <span class="az5-label">AZ-5</span>'+
'                    <span class="az5-gain">'+
'                        +<span id="clickValue">1</span>'+
'                        <span class="currency-symbol">€</span>'+
'                    </span>'+
'                </button>'+
''+
'            </div>'+
''+
'            <div class="stats">'+
''+
'                <div class="stat">'+
''+
'                    <div class="stat-icon">👆</div>'+
''+
'                    <div class="stat-value">'+
'                        <span id="perClick">1</span>'+
'                        <span class="currency-symbol">€</span>'+
'                    </div>'+
''+
'                    <div class="stat-label">'+
'                        PAR CLIC'+
'                    </div>'+
''+
'                </div>'+
''+
'                <div class="stat">'+
''+
'                    <div class="stat-icon">⚡</div>'+
''+
'                    <div class="stat-value">'+
'                        <span id="perSecond">0</span>'+
'                        <span class="currency-symbol">€</span>'+
'                    </div>'+
''+
'                    <div class="stat-label">'+
'                        PAR SECONDE'+
'                    </div>'+
''+
'                </div>'+
''+
'                <div class="stat">'+
''+
'                    <div class="stat-icon">🛒</div>'+
''+
'                    <div class="stat-value">'+
'                        <span id="upgradeCount">0</span>'+
'                    </div>'+
''+
'                    <div class="stat-label">'+
'                        AMÉLIORATIONS'+
'                    </div>'+
''+
'                </div>'+
''+
'                <div class="stat">'+
''+
'                    <div class="stat-icon">🏦</div>'+
''+
'                    <div class="stat-value">'+
'                        <span id="totalEarned">0</span>'+
'                        <span class="currency-symbol">€</span>'+
'                    </div>'+
''+
'                    <div class="stat-label">'+
'                        TOTAL GAGNÉ'+
'                    </div>'+
''+
'                </div>'+
''+
'            </div>'+
''+
'            <div class="xp-box">'+
''+
'                <div class="xp-info">'+
''+
'                    <span>Progression</span>'+
''+
'                    <span>'+
'                        <span id="xp">0</span> /'+
'                        <span id="xpMax">100</span> XP'+
'                    </span>'+
''+
'                </div>'+
''+
'                <div class="xp-bar">'+
'                    <div'+
'                        class="xp-progress"'+
'                        id="xpProgress"'+
'                    ></div>'+
'                </div>'+
''+
'            </div>'+
''+
'            <div class="prestige-box">'+
''+
'                <div class="prestige-title">'+
'                    ♻️ Renaissance'+
'                </div>'+
''+
'                <div class="prestige-desc">'+
'                    Recommence ta partie à zéro pour obtenir des'+
'                    <strong>Éclats de Renaissance</strong>.'+
'                    Ils augmentent définitivement tous tes revenus.'+
'                </div>'+
''+
'                <div class="prestige-info">'+
''+
'                    <div class="prestige-stat">'+
''+
'                        <strong id="prestigeShards">'+
'                            0'+
'                        </strong>'+
''+
'                        <span>'+
'                            ÉCLATS POSSÉDÉS'+
'                        </span>'+
''+
'                    </div>'+
''+
'                    <div class="prestige-stat">'+
''+
'                        <strong>'+
'                            +<span id="prestigeGain">0</span>'+
'                        </strong>'+
''+
'                        <span>'+
'                            PROCHAINE RENAISSANCE'+
'                        </span>'+
''+
'                    </div>'+
''+
'                </div>'+
''+
'                <button'+
'                    id="prestigeButton"'+
'                    disabled'+
'                >'+
'                    Renaissance indisponible'+
'                </button>'+
''+
'            '+
''+
'            <div class="shard-shop-box">'+
'                <div class="shard-shop-header">'+
'                    <h3 class="shard-shop-title">✨ Boutique des Éclats</h3>'+
'                    <div class="shard-shop-balance">✨ <span id="shardShopBalance">0</span></div>'+
'                </div>'+
'                <p class="shard-shop-desc">Dépense tes Éclats de Renaissance pour débloquer des bonus permanents. Les améliorations achetées survivent aux prochaines Renaissances.</p>'+
'                <div class="shard-shop-list" id="shardShopList"></div>'+
'            </div>'+
'            <div class="super-rebirth-box">'+
'                <div class="prestige-title">🌌 Super Renaissance</div>'+
'                <p id="superPrestigeDescription">Réinitialise la progression normale pour gagner des Fragments Overpeter. Les bonus Overpeter restent acquis.</p>'+
'                <div class="prestige-info">'+
'                    <div class="prestige-stat"><strong id="superPrestigeLevel">0</strong><span id="superPrestigeLabel">SUPER RENAISSANCES</span></div>'+
'                    <div class="prestige-stat"><strong id="overpeterShards">0</strong><span id="overpeterShardsLabel">FRAGMENTS OVERPETER</span></div>'+
'                </div>'+
'                <button id="superPrestigeButton" type="button" disabled>🔒 Super Renaissance indisponible</button>'+
'                <div class="shard-shop-list" id="overpeterShopList"></div>'+
'            </div>'+
'</div>'+
''+
'        </section>'+
''+
'        <section class="panel">'+
''+
'            <div class="shop-header">'+
''+
'                <h2>🛒 Boutique</h2>'+
''+
'                <div class="shop-subtitle">'+
'                    AMÉLIORE TON EMPIRE'+
'                </div>'+
''+
'            </div>'+
''+
'            <div class="buy-mode" id="buyMode">'+
'                <span class="buy-mode-label">QUANTITÉ</span>'+
'                <button type="button" class="buy-mode-btn" data-mode="1">x1</button>'+
'                <button type="button" class="buy-mode-btn" data-mode="10">x10</button>'+
'                <button type="button" class="buy-mode-btn" data-mode="100">x100</button>'+
'                <button type="button" class="buy-mode-btn" data-mode="max">MAX</button>'+
'            </div>'+
''+
'            <div'+
'                class="shop-list"'+
'                id="shopList"'+
'            ></div>'+
'        </section>'+
''+
'    </main>'+
''+
'</div>'+
''+
'<div id="notification"></div>'+
''+
''+
'<script>'+
'"use strict";'+
''+
'/* ========================================================='+
'   SUPABASE'+
'========================================================= */'+
''+
'const SUPABASE_URL ='+
'    "https://cedahfjtmhxddjkldhen.supabase.co";'+
''+
'const SUPABASE_KEY ='+
'    "sb_publishable_PCpVfnXjB6CXRrI4yMwthQ_kFS5oipW";'+
''+
'const { createClient } = window.supabase;'+
''+
'const supabaseClient ='+
'    createClient('+
'        SUPABASE_URL,'+
'        SUPABASE_KEY'+
'    );'+
''+
''+
'/* ========================================================='+
'   VARIABLES'+
'========================================================= */'+
''+
'let currentUser = null;'+
'let currentUsername = null;'+
'let saveData = null;'+
''+
'let notificationTimeout = null;'+
'let saveInProgress = false;'+
''+
'let isBanned = false;'+
'let isAdmin = false;'+
'let adminPlayers = [];'+
''+
'let currentLang ='+
'    localStorage.getItem("clicker_language") || "fr";'+
''+
'if(!["fr","en","ru"].includes(currentLang)){'+
'    currentLang = "fr";'+
'}'+
''+
'let banCheckInProgress = false;'+
''+
''+
'/* ========================================================='+
'   TRADUCTIONS'+
'========================================================= */'+
''+
'const translations = {'+
''+
'    fr: {'+
''+
'        buy: "Acheter",'+
'        notEnough: "Il te manque",'+
'        bought: "acheté !",'+
''+
'        empire: "Ton empire",'+
''+
'        perClick: "PAR CLIC",'+
'        perSecond: "PAR SECONDE",'+
'        upgrades: "AMÉLIORATIONS",'+
'        totalEarned: "TOTAL GAGNÉ",'+
''+
'        shopTitle: "Boutique",'+
'        shopSubtitle: "AMÉLIORE TON EMPIRE",'+
''+
'        items: {'+
''+
'            mouse: {'+
'                name:"Souris améliorée",'+
'                desc:"+1 {CURRENCY} par clic"'+
'            },'+
''+
'            keyboard: {'+
'                name:"Clavier mécanique",'+
'                desc:"+3 {CURRENCY} par clic"'+
'            },'+
''+
'            turbo: {'+
'                name:"Turbo clic",'+
'                desc:"+10 {CURRENCY} par clic"'+
'            },'+
''+
'            worker: {'+
'                name:"Robot collecteur",'+
'                desc:"+2 {CURRENCY} automatiquement par seconde"'+
'            },'+
''+
'            server: {'+
'                name:"Serveur automatique",'+
'                desc:"+12 {CURRENCY} par seconde"'+
'            },'+
''+
'            diamond: {'+
'                name:"Clic diamant",'+
'                desc:"+50 {CURRENCY} par clic"'+
'            },'+
''+
'            factory: {'+
'                name:"Usine",'+
'                desc:"+80 {CURRENCY} par seconde"'+
'            },'+
''+
'            bank: {'+
'                name:"Banque",'+
'                desc:"+450 {CURRENCY} par seconde"'+
'            },'+
''+
'            quantumMouse: {'+
'                name:"Souris quantique",'+
'                desc:"+1 000 {CURRENCY} par clic"'+
'            },'+
''+
'            datacenter: {'+
'                name:"Data Center",'+
'                desc:"+5 000 {CURRENCY} par seconde"'+
'            },'+
''+
'            mine: {'+
'                name:"Mine automatisée",'+
'                desc:"+25 000 {CURRENCY} par seconde"'+
'            },'+
''+
'            megaFactory: {'+
'                name:"Méga usine",'+
'                desc:"+150 000 {CURRENCY} par seconde"'+
'            },'+
''+
'            rbmk1000: {'+
'                name:"RBMK-1000",'+
'                desc:"+100 {CURRENCY} par clic"'+
'            },'+
''+
'            rbmk1500: {'+
'                name:"RBMK-1500",'+
'                desc:"+500 {CURRENCY} par clic et +50 {CURRENCY}/s"'+
'            },'+
''+
'            chernobyl: {'+
'                name:"Tchernobyl",'+
'                desc:"+2 500 {CURRENCY} par clic et +250 {CURRENCY}/s"'+
'            },'+
''+
'            akimov: {'+
'                name:"Akimov",'+
'                desc:"+20% de rendement"'+
'            },'+
''+
'            diatlov: {'+
'                name:"Diatlov",'+
'                desc:"+100% de production — risque de catastrophe"'+
'            },'+
''+
'            employeeUntrained: { name:"Employé non formé", desc:"Recrute un employé peu formé : aucun bonus, risque d’incident accru" },'+
'            employeeBasic: { name:"Employé débutant", desc:"+3% de production et légère réduction du risque" },'+
'            employeeTrained: { name:"Employé formé", desc:"+8% de production et réduction du risque" },'+
'            employeeExpert: { name:"Ingénieur expert", desc:"+15% de production et forte réduction du risque" },'+
''+
'            ai: {'+
'                name:"Intelligence artificielle",'+
'                desc:"+750 000 {CURRENCY} par seconde"'+
'            },'+
''+
'            rocket: {'+
'                name:"Entreprise spatiale",'+
'                desc:"+4 M {CURRENCY} par seconde"'+
'            },'+
''+
'            moon: {'+
'                name:"Base lunaire",'+
'                desc:"+20 M {CURRENCY} par seconde"'+
'            },'+
''+
'            planet: {'+
'                name:"Colonie planétaire",'+
'                desc:"+100 M {CURRENCY} par seconde"'+
'            },'+
''+
'            star: {'+
'                name:"Centrale stellaire",'+
'                desc:"+500 M {CURRENCY} par seconde"'+
'            },'+
''+
'            galaxy: {'+
'                name:"Empire galactique",'+
'                desc:"+5 Md {CURRENCY} par seconde"'+
'            },'+
''+
'            blackhole: {'+
'                name:"Extracteur de trou noir",'+
'                desc:"+50 Md {CURRENCY} par seconde"'+
'            },'+
''+
'            dimension: {'+
'                name:"Mine dimensionnelle",'+
'                desc:"+1 000 Md {CURRENCY} par seconde"'+
'            }'+
''+
'        }'+
''+
'    },'+
''+
''+
'    en: {'+
''+
'        buy:"Buy",'+
'        notEnough:"You need",'+
'        bought:"purchased!",'+
''+
'        empire:"Your Empire",'+
''+
'        perClick:"PER CLICK",'+
'        perSecond:"PER SECOND",'+
'        upgrades:"UPGRADES",'+
'        totalEarned:"TOTAL EARNED",'+
''+
'        shopTitle:"Shop",'+
'        shopSubtitle:"UPGRADE YOUR EMPIRE",'+
''+
'        items: {'+
''+
'            mouse: {'+
'                name:"Upgraded Mouse",'+
'                desc:"+1 {CURRENCY} per click"'+
'            },'+
''+
'            keyboard: {'+
'                name:"Mechanical Keyboard",'+
'                desc:"+3 {CURRENCY} per click"'+
'            },'+
''+
'            turbo: {'+
'                name:"Turbo Click",'+
'                desc:"+10 {CURRENCY} per click"'+
'            },'+
''+
'            worker: {'+
'                name:"Collector Robot",'+
'                desc:"+2 {CURRENCY} automatically per second"'+
'            },'+
''+
'            server: {'+
'                name:"Automatic Server",'+
'                desc:"+12 {CURRENCY} per second"'+
'            },'+
''+
'            diamond: {'+
'                name:"Diamond Click",'+
'                desc:"+50 {CURRENCY} per click"'+
'            },'+
''+
'            factory: {'+
'                name:"Factory",'+
'                desc:"+80 {CURRENCY} per second"'+
'            },'+
''+
'            bank: {'+
'                name:"Bank",'+
'                desc:"+450 {CURRENCY} per second"'+
'            },'+
''+
'            quantumMouse: {'+
'                name:"Quantum Mouse",'+
'                desc:"+1,000 {CURRENCY} per click"'+
'            },'+
''+
'            datacenter: {'+
'                name:"Data Center",'+
'                desc:"+5,000 {CURRENCY} per second"'+
'            },'+
''+
'            mine: {'+
'                name:"Automated Mine",'+
'                desc:"+25,000 {CURRENCY} per second"'+
'            },'+
''+
'            megaFactory: {'+
'                name:"Mega Factory",'+
'                desc:"+150,000 {CURRENCY} per second"'+
'            },'+
''+
'            rbmk1000: {'+
'                name:"RBMK-1000",'+
'                desc:"+100 {CURRENCY} per click"'+
'            },'+
''+
'            rbmk1500: {'+
'                name:"RBMK-1500",'+
'                desc:"+500 {CURRENCY} per click and +50 {CURRENCY}/s"'+
'            },'+
''+
'            chernobyl: {'+
'                name:"Chernobyl",'+
'                desc:"+2,500 {CURRENCY} per click and +250 {CURRENCY}/s"'+
'            },'+
''+
'            akimov: {'+
'                name:"Akimov",'+
'                desc:"+20% efficiency"'+
'            },'+
''+
'            diatlov: {'+
'                name:"Dyatlov",'+
'                desc:"+100% production — catastrophe risk"'+
'            },'+
''+
'            employeeUntrained: { name:"Untrained employee", desc:"No bonus, but increases incident risk" },'+
'            employeeBasic: { name:"Junior employee", desc:"+3% production and slight risk reduction" },'+
'            employeeTrained: { name:"Trained employee", desc:"+8% production and risk reduction" },'+
'            employeeExpert: { name:"Expert engineer", desc:"+15% production and strong risk reduction" },'+
''+
'            ai: {'+
'                name:"Artificial Intelligence",'+
'                desc:"+750,000 {CURRENCY} per second"'+
'            },'+
''+
'            rocket: {'+
'                name:"Space Company",'+
'                desc:"+4M {CURRENCY} per second"'+
'            },'+
''+
'            moon: {'+
'                name:"Lunar Base",'+
'                desc:"+20M {CURRENCY} per second"'+
'            },'+
''+
'            planet: {'+
'                name:"Planetary Colony",'+
'                desc:"+100M {CURRENCY} per second"'+
'            },'+
''+
'            star: {'+
'                name:"Stellar Power Plant",'+
'                desc:"+500M {CURRENCY} per second"'+
'            },'+
''+
'            galaxy: {'+
'                name:"Galactic Empire",'+
'                desc:"+5B {CURRENCY} per second"'+
'            },'+
''+
'            blackhole: {'+
'                name:"Black Hole Extractor",'+
'                desc:"+50B {CURRENCY} per second"'+
'            },'+
''+
'            dimension: {'+
'                name:"Dimensional Mine",'+
'                desc:"+1,000B {CURRENCY} per second"'+
'            }'+
''+
'        }'+
''+
'    },'+
''+
''+
'    ru: {'+
''+
'        buy:"Купить",'+
'        notEnough:"Не хватает",'+
'        bought:"куплено!",'+
''+
'        empire:"Ваша империя",'+
''+
'        perClick:"ЗА КЛИК",'+
'        perSecond:"В СЕКУНДУ",'+
'        upgrades:"УЛУЧШЕНИЯ",'+
'        totalEarned:"ВСЕГО ЗАРАБОТАНО",'+
''+
'        shopTitle:"Магазин",'+
'        shopSubtitle:"УЛУЧШАЙТЕ СВОЮ ИМПЕРИЮ",'+
''+
'        items: {'+
''+
'            mouse: {'+
'                name:"Улучшенная мышь",'+
'                desc:"+1 {CURRENCY} за клик"'+
'            },'+
''+
'            keyboard: {'+
'                name:"Механическая клавиатура",'+
'                desc:"+3 {CURRENCY} за клик"'+
'            },'+
''+
'            turbo: {'+
'                name:"Турбо клик",'+
'                desc:"+10 {CURRENCY} за клик"'+
'            },'+
''+
'            worker: {'+
'                name:"Робот-сборщик",'+
'                desc:"+2 {CURRENCY} автоматически в секунду"'+
'            },'+
''+
'            server: {'+
'                name:"Автоматический сервер",'+
'                desc:"+12 {CURRENCY} в секунду"'+
'            },'+
''+
'            diamond: {'+
'                name:"Алмазный клик",'+
'                desc:"+50 {CURRENCY} за клик"'+
'            },'+
''+
'            factory: {'+
'                name:"Завод",'+
'                desc:"+80 {CURRENCY} в секунду"'+
'            },'+
''+
'            bank: {'+
'                name:"Банк",'+
'                desc:"+450 {CURRENCY} в секунду"'+
'            },'+
''+
'            quantumMouse: {'+
'                name:"Квантовая мышь",'+
'                desc:"+1 000 {CURRENCY} за клик"'+
'            },'+
''+
'            datacenter: {'+
'                name:"Дата-центр",'+
'                desc:"+5 000 {CURRENCY} в секунду"'+
'            },'+
''+
'            mine: {'+
'                name:"Автоматизированная шахта",'+
'                desc:"+25 000 {CURRENCY} в секунду"'+
'            },'+
''+
'            megaFactory: {'+
'                name:"Мегазавод",'+
'                desc:"+150 000 {CURRENCY} в секунду"'+
'            },'+
''+
'            rbmk1000: {'+
'                name:"РБМК-1000",'+
'                desc:"+100 {CURRENCY} за клик"'+
'            },'+
''+
'            rbmk1500: {'+
'                name:"РБМК-1500",'+
'                desc:"+500 {CURRENCY} за клик и +50 {CURRENCY}/с"'+
'            },'+
''+
'            chernobyl: {'+
'                name:"Чернобыль",'+
'                desc:"+2 500 {CURRENCY} за клик и +250 {CURRENCY}/с"'+
'            },'+
''+
'            akimov: {'+
'                name:"Акимов",'+
'                desc:"+20% эффективности"'+
'            },'+
''+
'            diatlov: {'+
'                name:"Дятлов",'+
'                desc:"+100% производства — риск катастрофы"'+
'            },'+
''+
'            employeeUntrained: { name:"Неподготовленный сотрудник", desc:"Без бонуса, но повышает риск аварии" },'+
'            employeeBasic: { name:"Начинающий сотрудник", desc:"+3% к производству и небольшое снижение риска" },'+
'            employeeTrained: { name:"Обученный сотрудник", desc:"+8% к производству и снижение риска" },'+
'            employeeExpert: { name:"Инженер-эксперт", desc:"+15% к производству и сильное снижение риска" },'+
''+
'            ai: {'+
'                name:"Искусственный интеллект",'+
'                desc:"+750 000 {CURRENCY} в секунду"'+
'            },'+
''+
'            rocket: {'+
'                name:"Космическая компания",'+
'                desc:"+4 млн {CURRENCY} в секунду"'+
'            },'+
''+
'            moon: {'+
'                name:"Лунная база",'+
'                desc:"+20 млн {CURRENCY} в секунду"'+
'            },'+
''+
'            planet: {'+
'                name:"Планетарная колония",'+
'                desc:"+100 млн {CURRENCY} в секунду"'+
'            },'+
''+
'            star: {'+
'                name:"Звездная электростанция",'+
'                desc:"+500 млн {CURRENCY} в секунду"'+
'            },'+
''+
'            galaxy: {'+
'                name:"Галактическая империя",'+
'                desc:"+5 млрд {CURRENCY} в секунду"'+
'            },'+
''+
'            blackhole: {'+
'                name:"Экстрактор черной дыры",'+
'                desc:"+50 млрд {CURRENCY} в секунду"'+
'            },'+
''+
'            dimension: {'+
'                name:"Пространственная шахта",'+
'                desc:"+1 000 млрд {CURRENCY} в секунду"'+
'            }'+
''+
'        }'+
''+
'    }'+
''+
'};'+
''+
''+
'/* ========================================================='+
'   UPGRADES'+
'========================================================= */'+
''+
'const upgradesData = ['+
''+
'    {'+
'        id:"mouse",'+
'        icon:"🖱️",'+
'        name:"Souris améliorée",'+
'        description:"+1 {CURRENCY} par clic",'+
'        basePrice:10,'+
'        priceGrowth:1.35,'+
'        click:1,'+
'        auto:0,'+
'        category:"beginning"'+
'    },'+
''+
'    {'+
'        id:"keyboard",'+
'        icon:"⌨️",'+
'        name:"Clavier mécanique",'+
'        description:"+3 {CURRENCY} par clic",'+
'        basePrice:35,'+
'        priceGrowth:1.38,'+
'        click:3,'+
'        auto:0,'+
'        category:"beginning"'+
'    },'+
''+
'    {'+
'        id:"turbo",'+
'        icon:"⚡",'+
'        name:"Turbo clic",'+
'        description:"+10 {CURRENCY} par clic",'+
'        basePrice:150,'+
'        priceGrowth:1.40,'+
'        click:10,'+
'        auto:0,'+
'        category:"beginning"'+
'    },'+
''+
'    {'+
'        id:"worker",'+
'        icon:"🤖",'+
'        name:"Robot collecteur",'+
'        description:"+2 {CURRENCY} automatiquement par seconde",'+
'        basePrice:250,'+
'        priceGrowth:1.42,'+
'        click:0,'+
'        auto:2,'+
'        category:"beginning"'+
'    },'+
''+
'    {'+
'        id:"server",'+
'        icon:"🖥️",'+
'        name:"Serveur automatique",'+
'        description:"+12 {CURRENCY} par seconde",'+
'        basePrice:1200,'+
'        priceGrowth:1.44,'+
'        click:0,'+
'        auto:12,'+
'        category:"beginning"'+
'    },'+
''+
'    {'+
'        id:"diamond",'+
'        icon:"💎",'+
'        name:"Clic diamant",'+
'        description:"+50 {CURRENCY} par clic",'+
'        basePrice:3000,'+
'        priceGrowth:1.46,'+
'        click:50,'+
'        auto:0,'+
'        category:"beginning"'+
'    },'+
''+
'    {'+
'        id:"factory",'+
'        icon:"🏭",'+
'        name:"Usine",'+
'        description:"+80 {CURRENCY} par seconde",'+
'        basePrice:10000,'+
'        priceGrowth:1.48,'+
'        click:0,'+
'        auto:80,'+
'        category:"industry"'+
'    },'+
''+
'    {'+
'        id:"bank",'+
'        icon:"🏦",'+
'        name:"Banque",'+
'        description:"+450 {CURRENCY} par seconde",'+
'        basePrice:50000,'+
'        priceGrowth:1.50,'+
'        click:0,'+
'        auto:450,'+
'        category:"industry"'+
'    },'+
''+
'    {'+
'        id:"quantumMouse",'+
'        icon:"🌀",'+
'        name:"Souris quantique",'+
'        description:"+1 000 {CURRENCY} par clic",'+
'        basePrice:150000,'+
'        priceGrowth:1.52,'+
'        click:1000,'+
'        auto:0,'+
'        category:"industry"'+
'    },'+
''+
'    {'+
'        id:"datacenter",'+
'        icon:"🌐",'+
'        name:"Data Center",'+
'        description:"+5 000 {CURRENCY} par seconde",'+
'        basePrice:500000,'+
'        priceGrowth:1.54,'+
'        click:0,'+
'        auto:5000,'+
'        category:"industry"'+
'    },'+
''+
'    {'+
'        id:"mine",'+
'        icon:"⛏️",'+
'        name:"Mine automatisée",'+
'        description:"+25 000 {CURRENCY} par seconde",'+
'        basePrice:2500000,'+
'        priceGrowth:1.55,'+
'        click:0,'+
'        auto:25000,'+
'        category:"industry"'+
'    },'+
''+
'    {'+
'        id:"megaFactory",'+
'        icon:"🏗️",'+
'        name:"Méga usine",'+
'        description:"+150 000 {CURRENCY} par seconde",'+
'        basePrice:10000000,'+
'        priceGrowth:1.57,'+
'        click:0,'+
'        auto:150000,'+
'        category:"industry"'+
'    },'+
''+
'    {'+
'        id:"rbmk1000",'+
'        icon:"☢️",'+
'        name:"RBMK-1000",'+
'        description:"+100 {CURRENCY} par clic",'+
'        basePrice:5000,'+
'        priceGrowth:1.55,'+
'        click:100,'+
'        auto:0,'+
'        category:"rbmk"'+
'    },'+
''+
'    {'+
'        id:"rbmk1500",'+
'        icon:"☢️",'+
'        name:"RBMK-1500",'+
'        description:"+500 {CURRENCY} par clic et +50 {CURRENCY}/s",'+
'        basePrice:25000,'+
'        priceGrowth:1.58,'+
'        click:500,'+
'        auto:50,'+
'        category:"rbmk"'+
'    },'+
''+
'    {'+
'        id:"chernobyl",'+
'        icon:"☢️",'+
'        name:"Tchernobyl",'+
'        description:"+2 500 {CURRENCY} par clic et +250 {CURRENCY}/s",'+
'        basePrice:100000,'+
'        priceGrowth:1.60,'+
'        click:2500,'+
'        auto:250,'+
'        category:"rbmk"'+
'    },'+
''+
'    {'+
'        id:"ai",'+
'        icon:"🧠",'+
'        name:"Intelligence artificielle",'+
'        description:"+750 000 {CURRENCY} par seconde",'+
'        basePrice:50000000,'+
'        priceGrowth:1.58,'+
'        click:0,'+
'        auto:750000,'+
'        category:"technology"'+
'    },'+
''+
'    {'+
'        id:"rocket",'+
'        icon:"🚀",'+
'        name:"Entreprise spatiale",'+
'        description:"+4 M {CURRENCY} par seconde",'+
'        basePrice:250000000,'+
'        priceGrowth:1.60,'+
'        click:0,'+
'        auto:4000000,'+
'        category:"technology"'+
'    },'+
''+
'    {'+
'        id:"moon",'+
'        icon:"🌕",'+
'        name:"Base lunaire",'+
'        description:"+20 M {CURRENCY} par seconde",'+
'        basePrice:1000000000,'+
'        priceGrowth:1.62,'+
'        click:0,'+
'        auto:20000000,'+
'        category:"technology"'+
'    },'+
''+
'    {'+
'        id:"planet",'+
'        icon:"🪐",'+
'        name:"Colonie planétaire",'+
'        description:"+100 M {CURRENCY} par seconde",'+
'        basePrice:5000000000,'+
'        priceGrowth:1.64,'+
'        click:0,'+
'        auto:100000000,'+
'        category:"technology"'+
'    },'+
''+
'    {'+
'        id:"star",'+
'        icon:"⭐",'+
'        name:"Centrale stellaire",'+
'        description:"+500 M {CURRENCY} par seconde",'+
'        basePrice:25000000000,'+
'        priceGrowth:1.66,'+
'        click:0,'+
'        auto:500000000,'+
'        category:"technology"'+
'    },'+
''+
'    {'+
'        id:"galaxy",'+
'        icon:"🌌",'+
'        name:"Empire galactique",'+
'        description:"+5 Md {CURRENCY} par seconde",'+
'        basePrice:250000000000,'+
'        priceGrowth:1.68,'+
'        click:0,'+
'        auto:5000000000,'+
'        category:"technology"'+
'    },'+
''+
'    {'+
'        id:"blackhole",'+
'        icon:"🕳️",'+
'        name:"Extracteur de trou noir",'+
'        description:"+50 Md {CURRENCY} par seconde",'+
'        basePrice:2500000000000,'+
'        priceGrowth:1.70,'+
'        click:0,'+
'        auto:50000000000,'+
'        category:"technology"'+
'    },'+
''+
'    {'+
'        id:"dimension",'+
'        icon:"🔮",'+
'        name:"Mine dimensionnelle",'+
'        description:"+1 000 Md {CURRENCY} par seconde",'+
'        basePrice:50000000000000,'+
'        priceGrowth:1.72,'+
'        click:0,'+
'        auto:1000000000000,'+
'        category:"technology"'+
'    },'+
''+
'    {'+
'        id:"akimov",'+
'        icon:"👨‍🔬",'+
'        name:"Akimov",'+
'        description:"+20% de rendement",'+
'        basePrice:5000000,'+
'        priceGrowth:1,'+
'        click:0,'+
'        auto:0,'+
'        special:"akimov",'+
'        maxOwned:1,'+
'        category:"personnel"'+
'    },'+
''+
'    {'+
'        id:"diatlov",'+
'        icon:"⚠️",'+
'        name:"DIATLOV",'+
'        description:"+100% de production — risque de catastrophe",'+
'        basePrice:25000000,'+
'        priceGrowth:1,'+
'        click:0,'+
'        auto:0,'+
'        special:"diatlov",'+
'        maxOwned:1,'+
'        category:"personnel"'+
'    },'+
''+
'    {'+
'        id:"employeeUntrained",'+
'        icon:"👷",'+
'        name:"Employé non formé",'+
'        description:"Recrute un employé peu formé : aucun bonus, risque d\'incident accru",'+
'        basePrice:50000,'+
'        priceGrowth:1.25,'+
'        click:0,'+
'        auto:0,'+
'        special:"employee",'+
'        category:"personnel"'+
'    },'+
''+
'    {'+
'        id:"employeeBasic",'+
'        icon:"🧑‍🔧",'+
'        name:"Employé débutant",'+
'        description:"+3% de production et légère réduction du risque",'+
'        basePrice:150000,'+
'        priceGrowth:1.28,'+
'        click:0,'+
'        auto:0,'+
'        special:"employee",'+
'        category:"personnel"'+
'    },'+
''+
'    {'+
'        id:"employeeTrained",'+
'        icon:"👨‍🔧",'+
'        name:"Employé formé",'+
'        description:"+8% de production et réduction du risque",'+
'        basePrice:500000,'+
'        priceGrowth:1.30,'+
'        click:0,'+
'        auto:0,'+
'        special:"employee",'+
'        category:"personnel"'+
'    },'+
''+
'    {'+
'        id:"employeeExpert",'+
'        icon:"👨‍🔬",'+
'        name:"Ingénieur expert",'+
'        description:"+15% de production et forte réduction du risque",'+
'        basePrice:2000000,'+
'        priceGrowth:1.32,'+
'        click:0,'+
'        auto:0,'+
'        special:"employee",'+
'        category:"personnel"'+
'    }'+
''+
'];'+
''+
'// 1 000 améliorations normales générées pour prolonger la progression.'+
'for(let i=1;i<=1000;i++){'+
'    const amount=Math.min(1e100,Math.pow(10,Math.min(100,3+i*0.08)));'+
'    upgradesData.push({'+
'        id:"empireUpgrade"+String(i).padStart(4,"0"),'+
'        icon:["🏭","🛰️","🧪","⚙️","🌐","🔋","🧬","💠"][i%8],'+
'        name:"Extension d’empire "+i,'+
'        description:"Amélioration progressive : production renforcée",'+
'        basePrice:Math.min(1e300,Math.pow(10,15+i*.12)),'+
'        priceGrowth:1.045+(i%12)*.002,'+
'        click:amount*.1,'+
'        auto:amount,'+
'        category:"industry",'+
'        generatedUpgrade:true,'+
'        tierIndex:i'+
'    });'+
'}'+
'// Upgrades Overpeter : prix géants, dont 10^60 et au-delà.'+
'for(let i=1;i<=12;i++){'+
'    upgradesData.push({'+
'        id:"overpeter"+i,icon:"🪐",name:"Overpeter Ω-"+String(i).padStart(2,"0"),'+
'        description:"Production cosmique · prix exponentiel",'+
'        basePrice:Math.pow(10,Math.min(300,53+i*20)),priceGrowth:1.25,'+
'        click:Math.pow(10,Math.min(240,35+i*12)),auto:Math.pow(10,Math.min(250,40+i*14)),'+
'        category:"overpeter",generatedUpgrade:true,tierIndex:1000+i'+
'    });'+
'}'+
''+
'/* ========================================================='+
'   SAVE PAR DÉFAUT'+
'========================================================= */'+
''+
'function defaultSave(){'+
''+
'    const upgrades = {};'+
''+
'    for(const upgrade of upgradesData){'+
'        upgrades[upgrade.id] = 0;'+
'    }'+
''+
'    upgrades._shardShop = {'+
'        power:0,'+
'        click:0,'+
'        auto:0,'+
'        spent:0'+
'    };'+
''+
'    upgrades._operation = {'+
'        rbmk1000:0,'+
'        rbmk1500:0,'+
'        chernobyl:0,'+
'        lastTick:Date.now(),'+
'        explosions:0'+
'    };'+
''+
'    upgrades._overpeter={superPrestige:0,overpeterShards:0,overpeterShop:{power:0,click:0,auto:0,spent:0}};'+
''+
'    return {'+
''+
'        money:0,'+
''+
'        /* IMPORTANT :'+
'           Le jeu utilise totalEarned côté JavaScript.'+
'        */'+
'        totalEarned:0,'+
''+
'        xp:0,'+
''+
'        level:1,'+
''+
'        prestige:0,'+
''+
'        prestigeShards:0,'+
'        superPrestige:0,'+
'        overpeterShards:0,'+
'        overpeterShop:{power:0,click:0,auto:0,spent:0},'+
''+
'        clicks:0,'+
''+
'        upgrades:upgrades,'+
''+
'        username:currentUsername || "Player"'+
''+
'    };'+
'}'+
''+
''+
'/* ========================================================='+
'   RÉPARATION SAVE'+
'========================================================= */'+
''+
'function repairSave(data){'+
''+
'    const fresh = defaultSave();'+
''+
'    if(!data || typeof data !== "object"){'+
'        return fresh;'+
'    }'+
''+
'    if('+
'        Number.isFinite(Number(data.money)) &&'+
'        Number(data.money) >= 0'+
'    ){'+
'        fresh.money = Number(data.money);'+
'    }'+
''+
'    /*'+
'       Compatibilité avec les anciennes sauvegardes.'+
'       On accepte totalEarned ET total_earned.'+
'    */'+
''+
'    const totalEarned ='+
'        data.totalEarned ??'+
'        data.total_earned;'+
''+
'    if('+
'        Number.isFinite(Number(totalEarned)) &&'+
'        Number(totalEarned) >= 0'+
'    ){'+
'        fresh.totalEarned ='+
'            Number(totalEarned);'+
'    }'+
''+
'    if('+
'        Number.isFinite(Number(data.xp)) &&'+
'        Number(data.xp) >= 0'+
'    ){'+
'        fresh.xp = Number(data.xp);'+
'    }'+
''+
'    if('+
'        Number.isFinite(Number(data.level)) &&'+
'        Number(data.level) >= 1'+
'    ){'+
'        fresh.level ='+
'            Math.floor(Number(data.level));'+
'    }'+
''+
'    if('+
'        Number.isFinite(Number(data.prestige)) &&'+
'        Number(data.prestige) >= 0'+
'    ){'+
'        fresh.prestige ='+
'            Math.floor(Number(data.prestige));'+
'    }'+
''+
'    const overpeterData=(data.upgrades&&data.upgrades._overpeter)||{};'+
'    const superPrestige=Number(data.superPrestige??overpeterData.superPrestige??0);'+
'    if(Number.isFinite(superPrestige)&&superPrestige>=0) fresh.superPrestige=Math.floor(superPrestige);'+
'    const overpeterShards=Number(data.overpeterShards??overpeterData.overpeterShards??0);'+
'    if(Number.isFinite(overpeterShards)&&overpeterShards>=0) fresh.overpeterShards=Math.floor(overpeterShards);'+
'    const savedOverpeterShop=data.overpeterShop||overpeterData.overpeterShop;'+
'    if(savedOverpeterShop&&typeof savedOverpeterShop==="object"){'+
'        for(const key of ["power","click","auto","spent"]){const v=Number(savedOverpeterShop[key]||0);if(Number.isFinite(v)&&v>=0)fresh.overpeterShop[key]=Math.floor(v);}'+
'    }'+
'    fresh.upgrades._overpeter={superPrestige:fresh.superPrestige,overpeterShards:fresh.overpeterShards,overpeterShop:fresh.overpeterShop};'+
'    const shards ='+
'        data.prestigeShards ??'+
'        data.prestige_shards;'+
''+
'    if('+
'        Number.isFinite(Number(shards)) &&'+
'        Number(shards) >= 0'+
'    ){'+
'        fresh.prestigeShards ='+
'            Math.floor(Number(shards));'+
'    }'+
''+
'    if('+
'        data.upgrades &&'+
'        typeof data.upgrades === "object"'+
'    ){'+
''+
'        for(const upgrade of upgradesData){'+
''+
'            const owned ='+
'                Number('+
'                    data.upgrades[upgrade.id]'+
'                );'+
''+
'            if('+
'                Number.isFinite(owned) &&'+
'                owned >= 0'+
'            ){'+
''+
'                fresh.upgrades[upgrade.id] ='+
'                    Math.floor(owned);'+
''+
'            }'+
''+
'        }'+
''+
'    }'+
''+
'    if(data.upgrades && data.upgrades._shardShop && typeof data.upgrades._shardShop === "object"){'+
'        const shardShop = data.upgrades._shardShop;'+
'        for(const key of ["power","click","auto","spent"]){'+
'            const value = Number(shardShop[key]);'+
'            if(Number.isFinite(value) && value >= 0){'+
'                fresh.upgrades._shardShop[key] = Math.floor(value);'+
'            }'+
'        }'+
'    }'+
''+
'    if(data.upgrades && data.upgrades._operation && typeof data.upgrades._operation === "object"){'+
'        const operation = data.upgrades._operation;'+
'        for(const key of ["rbmk1000","rbmk1500","chernobyl"]){'+
'            const value = Number(operation[key]);'+
'            if(Number.isFinite(value)){'+
'                fresh.upgrades._operation[key] = Math.max(0, Math.min(100, value));'+
'            }'+
'        }'+
'        const lastTick = Number(operation.lastTick);'+
'        if(Number.isFinite(lastTick) && lastTick > 0){'+
'            fresh.upgrades._operation.lastTick = lastTick;'+
'        }'+
'        const explosions = Number(operation.explosions);'+
'        if(Number.isFinite(explosions) && explosions >= 0){'+
'            fresh.upgrades._operation.explosions = Math.floor(explosions);'+
'        }'+
'    } else if(data.upgrades && data.upgrades._maintenance && typeof data.upgrades._maintenance === "object"){'+
'        // Compatibilité : les anciennes sauvegardes convertissent l\'usure en risque.'+
'        const maintenance = data.upgrades._maintenance;'+
'        for(const key of ["rbmk1000","rbmk1500","chernobyl"]){'+
'            const value = Number(maintenance[key]);'+
'            if(Number.isFinite(value)){'+
'                fresh.upgrades._operation[key] = Math.max(0, Math.min(100, 100 - value));'+
'            }'+
'        }'+
'        const lastTick = Number(maintenance.lastTick);'+
'        if(Number.isFinite(lastTick) && lastTick > 0){'+
'            fresh.upgrades._operation.lastTick = lastTick;'+
'        }'+
'    }'+
''+
'    return fresh;'+
'}'+
''+
''+
'/* ========================================================='+
'   AUTH MESSAGE'+
'========================================================= */'+
''+
'function showAuthMessage('+
'    message,'+
'    isError=true'+
'){'+
''+
'    const box ='+
'        document.getElementById('+
'            "authMessage"'+
'        );'+
''+
'    box.textContent = message;'+
''+
'    box.style.color ='+
'        isError'+
'        ? "#ff7777"'+
'        : "#67ffac";'+
'}'+
''+
''+
'/* ========================================================='+
'   INSCRIPTION'+
'========================================================= */'+
''+
'async function register(){'+
''+
'    const username ='+
'        document'+
'            .getElementById('+
'                "registerUsername"'+
'            )'+
'            .value'+
'            .trim();'+
''+
'    const email ='+
'        document'+
'            .getElementById('+
'                "registerEmail"'+
'            )'+
'            .value'+
'            .trim();'+
''+
'    const password ='+
'        document'+
'            .getElementById('+
'                "registerPassword"'+
'            )'+
'            .value;'+
''+
'    const confirmation ='+
'        document'+
'            .getElementById('+
'                "registerPasswordConfirm"'+
'            )'+
'            .value;'+
''+
''+
'    if('+
'        !/^[a-zA-Z0-9_-]{3,20}$/'+
'            .test(username)'+
'    ){'+
''+
'        showAuthMessage('+
'            "❌ Le pseudo doit contenir 3 à 20 caractères : lettres, chiffres, _ ou -."'+
'        );'+
''+
'        return;'+
'    }'+
''+
''+
'    if(password.length < 6){'+
''+
'        showAuthMessage('+
'            "❌ Le mot de passe doit contenir au moins 6 caractères."'+
'        );'+
''+
'        return;'+
'    }'+
''+
''+
'    if(password !== confirmation){'+
''+
'        showAuthMessage('+
'            "❌ Les mots de passe ne correspondent pas."'+
'        );'+
''+
'        return;'+
'    }'+
''+
''+
'    showAuthMessage('+
'        "⏳ Création du compte...",'+
'        false'+
'    );'+
''+
''+
'    const {'+
'        data,'+
'        error'+
'    } ='+
'        await supabaseClient.auth.signUp({'+
''+
'            email,'+
'            password,'+
''+
'            options:{'+
'                data:{'+
'                    username:username'+
'                }'+
'            }'+
''+
'        });'+
''+
''+
'    if(error){'+
''+
'        showAuthMessage('+
'            "❌ "+'+
'            translateAuthError('+
'                error.message'+
'            )'+
'        );'+
''+
'        return;'+
'    }'+
''+
''+
'    if(!data.user){'+
''+
'        showAuthMessage('+
'            "❌ Impossible de créer le compte."'+
'        );'+
''+
'        return;'+
'    }'+
''+
''+
'    if(!data.session){'+
''+
'        showAuthMessage('+
'            "✅ Compte créé ! Vérifie ton e-mail puis connecte-toi.",'+
'            false'+
'        );'+
''+
'        return;'+
'    }'+
''+
''+
'    currentUser ='+
'        data.user;'+
''+
'    currentUsername ='+
'        username;'+
''+
'    saveData ='+
'        defaultSave();'+
''+
''+
'    const {'+
'        error:saveError'+
'    } ='+
'        await supabaseClient'+
'            .from("game_saves")'+
'            .insert({'+
''+
'                id:currentUser.id,'+
''+
'                username:username,'+
''+
'                money:saveData.money,'+
''+
'                total_earned:'+
'                    saveData.totalEarned,'+
''+
'                xp:saveData.xp,'+
''+
'                level:saveData.level,'+
''+
'                prestige:'+
'                    saveData.prestige,'+
''+
'                prestige_shards:'+
'                    saveData.prestigeShards,'+
''+
'                upgrades:'+
'                    saveData.upgrades'+
''+
'            });'+
''+
''+
'    if(saveError){'+
''+
'        console.error('+
'            "Erreur création sauvegarde:",'+
'            saveError'+
'        );'+
''+
'        /*'+
'           Le compte Supabase existe.'+
'           On tente quand même de charger la partie.'+
'        */'+
''+
'        showAuthMessage('+
'            "⚠️ Compte créé, mais la sauvegarde n\'a pas pu être créée."'+
'        );'+
''+
'        return;'+
'    }'+
''+
''+
'    enterGame();'+
'}'+
''+
''+
'/* ========================================================='+
'   CONNEXION'+
'========================================================= */'+
''+
'async function login(){'+
''+
'    const email ='+
'        document'+
'            .getElementById('+
'                "loginEmail"'+
'            )'+
'            .value'+
'            .trim();'+
''+
'    const password ='+
'        document'+
'            .getElementById('+
'                "loginPassword"'+
'            )'+
'            .value;'+
''+
''+
'    showAuthMessage('+
'        "⏳ Connexion...",'+
'        false'+
'    );'+
''+
''+
'    const {'+
'        data,'+
'        error'+
'    } ='+
'        await supabaseClient.auth'+
'            .signInWithPassword({'+
''+
'                email,'+
'                password'+
''+
'            });'+
''+
''+
'    if(error){'+
''+
'        showAuthMessage('+
'            "❌ "+'+
'            translateAuthError('+
'                error.message'+
'            )'+
'        );'+
''+
'        return;'+
'    }'+
''+
''+
'    currentUser ='+
'        data.user;'+
''+
'    await loadGame();'+
'}'+
''+
''+
'/* ========================================================='+
'   ADMIN'+
'========================================================= */'+
''+
'function setAdminMessage('+
'    message,'+
'    error=false'+
'){'+
''+
'    const el ='+
'        document.getElementById('+
'            "adminMessage"'+
'        );'+
''+
'    if(!el) return;'+
''+
'    el.textContent ='+
'        message || "";'+
''+
'    el.style.color ='+
'        error'+
'        ? "#ff8d8d"'+
'        : "#aeb0bd";'+
'}'+
''+
''+
'async function checkAdmin(){'+
''+
'    if(!currentUser){'+
'        return false;'+
'    }'+
''+
'    try{'+
''+
'        const {'+
'            data,'+
'            error'+
'        } ='+
'            await supabaseClient.rpc('+
'                "is_admin"'+
'            );'+
''+
''+
'        if(error){'+
''+
'            console.error('+
'                "Erreur vérification admin:",'+
'                error'+
'            );'+
''+
'            isAdmin = false;'+
''+
'            return false;'+
'        }'+
''+
''+
'        isAdmin ='+
'            data === true;'+
''+
''+
'        const button ='+
'            document.getElementById('+
'                "adminButton"'+
'            );'+
''+
''+
'        if(button){'+
''+
'            button.classList.toggle('+
'                "show",'+
'                isAdmin'+
'            );'+
''+
'        }'+
''+
''+
'        return isAdmin;'+
''+
'    }'+
'    catch(error){'+
''+
'        console.error(error);'+
''+
'        isAdmin = false;'+
''+
'        return false;'+
'    }'+
'}'+
''+
''+
'function closeAdminPanel(){'+
''+
'    document'+
'        .getElementById('+
'            "adminPanel"'+
'        )'+
'        ?.classList.remove('+
'            "show"'+
'        );'+
'}'+
''+
''+
'function openAdminPanel(){'+
''+
'    if(!isAdmin){'+
'        return;'+
'    }'+
''+
'    document'+
'        .getElementById('+
'            "adminPanel"'+
'        )'+
'        ?.classList.add('+
'            "show"'+
'        );'+
''+
'    loadAdminPlayers();'+
'}'+
''+
''+
'function escapeAdminHtml(value){'+
''+
'    return String('+
'        value ?? ""'+
'    )'+
'        .replaceAll('+
'            "&",'+
'            "&"'+
'        )'+
'        .replaceAll('+
'            "<",'+
'            "<"'+
'        )'+
'        .replaceAll('+
'            ">",'+
'            ">"'+
'        )'+
'        .replaceAll('+
'            \'"\','+
'            """'+
'        )'+
'        .replaceAll('+
'            "\'",'+
'            "\'"'+
'        );'+
'}'+
''+
''+
'function getPlayerId(player){'+
''+
'    return ('+
'        player.id ||'+
'        player.user_id ||'+
'        player.target_id'+
'    );'+
'}'+
''+
''+
'function getPlayerName(player){'+
''+
'    return ('+
'        player.username ||'+
'        player.name ||'+
'        player.email ||'+
'        getPlayerId(player) ||'+
'        "Joueur"'+
'    );'+
'}'+
''+
''+
'function isPlayerBanned(player){'+
''+
'    return ('+
'        player.banned === true ||'+
'        player.is_banned === true ||'+
'        player.status === "banned"'+
'    );'+
'}'+
''+
''+
'function renderAdminPlayers(){'+
''+
'    const body ='+
'        document.getElementById('+
'            "adminPlayersBody"'+
'        );'+
''+
'    const search ='+
'        ('+
'            document.getElementById('+
'                "adminSearch"'+
'            )?.value || ""'+
'        )'+
'        .trim()'+
'        .toLowerCase();'+
''+
''+
'    if(!body){'+
'        return;'+
'    }'+
''+
''+
'    const totalEl ='+
'        document.getElementById('+
'            "adminTotalPlayers"'+
'        );'+
''+
'    const activeEl ='+
'        document.getElementById('+
'            "adminActivePlayers"'+
'        );'+
''+
'    const bannedEl ='+
'        document.getElementById('+
'            "adminBannedPlayers"'+
'        );'+
''+
''+
'    const bannedCount ='+
'        adminPlayers.filter('+
'            isPlayerBanned'+
'        ).length;'+
''+
''+
'    if(totalEl){'+
''+
'        totalEl.textContent ='+
'            adminPlayers.length'+
'                .toLocaleString('+
'                    getCurrencyLocale()'+
'                );'+
''+
'    }'+
''+
''+
'    if(activeEl){'+
''+
'        activeEl.textContent ='+
'            Math.max('+
'                0,'+
'                adminPlayers.length -'+
'                bannedCount'+
'            )'+
'            .toLocaleString('+
'                getCurrencyLocale()'+
'            );'+
''+
'    }'+
''+
''+
'    if(bannedEl){'+
''+
'        bannedEl.textContent ='+
'            bannedCount'+
'                .toLocaleString('+
'                    getCurrencyLocale()'+
'                );'+
''+
'    }'+
''+
''+
'    const filtered ='+
'        adminPlayers.filter('+
'            player => {'+
''+
'                const text = ['+
''+
'                    getPlayerName('+
'                        player'+
'                    ),'+
''+
'                    getPlayerId('+
'                        player'+
'                    ),'+
''+
'                    player.email || ""'+
''+
'                ]'+
'                .join(" ")'+
'                .toLowerCase();'+
''+
''+
'                return ('+
'                    !search ||'+
'                    text.includes('+
'                        search'+
'                    )'+
'                );'+
''+
'            }'+
'        );'+
''+
''+
'    if(!filtered.length){'+
''+
'        body.innerHTML ='+
'            `'+
'            <tr>'+
'                <td colspan="8">'+
'                    Aucun joueur trouvé.'+
'                </td>'+
'            </tr>'+
'            `;'+
''+
'        return;'+
'    }'+
''+
''+
'    body.innerHTML ='+
'        filtered.map('+
'            player => {'+
''+
'                const id ='+
'                    getPlayerId('+
'                        player'+
'                    );'+
''+
'                const banned ='+
'                    isPlayerBanned('+
'                        player'+
'                    );'+
''+
'                const money ='+
'                    Number('+
'                        player.money ?? 0'+
'                    );'+
''+
'                const xp ='+
'                    Number('+
'                        player.xp ?? 0'+
'                    );'+
''+
'                const level ='+
'                    Number('+
'                        player.level ?? 1'+
'                    );'+
''+
'                const prestige ='+
'                    Number('+
'                        player.prestige ?? 0'+
'                    );'+
''+
'                const shards ='+
'                    Number('+
'                        player.prestige_shards ??'+
'                        player.prestigeShards ??'+
'                        0'+
'                    );'+
''+
''+
'                return `'+
''+
'<tr>'+
''+
'<td>'+
''+
'    <div class="admin-player">'+
'        ${escapeAdminHtml('+
'            getPlayerName(player)'+
'        )}'+
'    </div>'+
''+
'    <div class="admin-muted">'+
'        ${escapeAdminHtml(id)}'+
'    </div>'+
''+
'</td>'+
''+
'<td>'+
'    ${money.toLocaleString('+
'        getCurrencyLocale()'+
'    )}'+
'    ${getCurrencySymbol()}'+
'</td>'+
''+
'<td>'+
'    ${xp.toLocaleString('+
'        getCurrencyLocale()'+
'    )}'+
'</td>'+
''+
'<td>'+
'    ${level.toLocaleString('+
'        getCurrencyLocale()'+
'    )}'+
'</td>'+
''+
'<td>'+
'    ${prestige.toLocaleString('+
'        getCurrencyLocale()'+
'    )}'+
'</td>'+
''+
'<td>'+
'    ${shards.toLocaleString('+
'        getCurrencyLocale()'+
'    )}'+
'</td>'+
''+
'<td>'+
''+
'    <span class="admin-badge ${'+
'        banned'+
'        ? "banned"'+
'        : "ok"'+
'    }">'+
''+
'        ${'+
'            banned'+
'            ? "BANNI"'+
'            : "ACTIF"'+
'        }'+
''+
'    </span>'+
''+
'</td>'+
''+
'<td>'+
''+
'    <div class="admin-row-actions">'+
''+
'        <button'+
'            class="admin-mini money"'+
'            data-admin-action="money"'+
'            data-player="${escapeAdminHtml(id)}"'+
'        >'+
'            💰 +1M'+
'        </button>'+
''+
'        <button'+
'            class="admin-mini xp"'+
'            data-admin-action="xp"'+
'            data-player="${escapeAdminHtml(id)}"'+
'        >'+
'            ⭐ +10K'+
'        </button>'+
''+
'        <button'+
'            class="admin-mini shards"'+
'            data-admin-action="shards"'+
'            data-player="${escapeAdminHtml(id)}"'+
'        >'+
'            💎 +10'+
'        </button>'+
''+
'        ${'+
'            banned'+
''+
'            ?'+
''+
'            `<button'+
'                class="admin-mini unban"'+
'                data-admin-action="unban"'+
'                data-player="${escapeAdminHtml(id)}"'+
'            >'+
'                🔓 Débannir'+
'            </button>`'+
''+
'            :'+
''+
'            `<button'+
'                class="admin-mini ban"'+
'                data-admin-action="ban"'+
'                data-player="${escapeAdminHtml(id)}"'+
'            >'+
'                🔨 Bannir'+
'            </button>`'+
'        }'+
''+
'    </div>'+
''+
'</td>'+
''+
'</tr>'+
''+
'`;'+
''+
'            }'+
'        ).join("");'+
'}'+
''+
''+
'async function loadAdminPlayers(){'+
''+
'    if(!isAdmin){'+
'        return;'+
'    }'+
''+
''+
'    const body ='+
'        document.getElementById('+
'            "adminPlayersBody"'+
'        );'+
''+
''+
'    if(body){'+
''+
'        body.innerHTML ='+
'            `'+
'            <tr>'+
'                <td colspan="8">'+
'                    ⏳ Chargement des joueurs...'+
'                </td>'+
'            </tr>'+
'            `;'+
''+
'    }'+
''+
''+
'    setAdminMessage('+
'        "⏳ Chargement..."'+
'    );'+
''+
''+
'    try{'+
''+
'        const {'+
'            data,'+
'            error'+
'        } ='+
'            await supabaseClient.rpc('+
'                "admin_list_players"'+
'            );'+
''+
''+
'        if(error){'+
''+
'            console.error(error);'+
''+
'            setAdminMessage('+
'                "❌ Impossible de charger les joueurs : "+'+
'                error.message,'+
'                true'+
'            );'+
''+
'            return;'+
'        }'+
''+
''+
'        adminPlayers ='+
'            Array.isArray(data)'+
'            ? data'+
'            : ('+
'                data'+
'                ? [data]'+
'                : []'+
'            );'+
''+
''+
'        renderAdminPlayers();'+
''+
''+
'        setAdminMessage('+
'            `${adminPlayers.length} joueur(s) chargé(s).`'+
'        );'+
''+
'    }'+
'    catch(error){'+
''+
'        console.error(error);'+
''+
'        setAdminMessage('+
'            "❌ Erreur lors du chargement.",'+
'            true'+
'        );'+
''+
'    }'+
'}'+
''+
''+
'async function adminGiveMoney(playerId){'+
''+
'console.log("=== ADMIN MONEY ===");'+
'console.log("playerId =", playerId);'+
''+
'const amount = 1000000;'+
''+
'const params = {'+
'    target_id: playerId,'+
'    amount: amount'+
'};'+
''+
'console.log("RPC params =", params);'+
''+
'const { data, error } ='+
'    await supabaseClient.rpc('+
'        "admin_give_money",'+
'        params'+
'    );'+
''+
'console.log("RPC data =", data);'+
'console.log("RPC error =", error);'+
''+
'if(error){'+
''+
'    console.error(error);'+
''+
'    setAdminMessage('+
'        "❌ " + error.message,'+
'        true'+
'    );'+
''+
'    return;'+
'}'+
'const {'+
'    data: latestSave,'+
'    error: latestSaveError'+
'} = await supabaseClient'+
'    .from("game_saves")'+
'    .select(`'+
'        money,'+
'        total_earned,'+
'        xp,'+
'        level,'+
'        prestige,'+
'        prestige_shards,'+
'        upgrades'+
'    `)'+
'    .eq("id", currentUser.id)'+
'    .single();'+
''+
'if(!latestSaveError && latestSave){'+
''+
'    saveData.money ='+
'        Number(latestSave.money);'+
''+
'    saveData.totalEarned ='+
'        Number(latestSave.total_earned);'+
''+
'    saveData.xp ='+
'        Number(latestSave.xp);'+
''+
'    saveData.level ='+
'        Number(latestSave.level);'+
''+
'    saveData.prestige ='+
'        Number(latestSave.prestige);'+
''+
'    saveData.prestigeShards ='+
'        Number(latestSave.prestige_shards);'+
''+
'    saveData.upgrades ='+
'        latestSave.upgrades;'+
''+
'}'+
'setAdminMessage('+
'    `✅ 1 000 000 ${getCurrencySymbol()} ajoutés.`'+
');'+
''+
'await loadAdminPlayers();'+
''+
''+
'}'+
''+
''+
'async function adminGiveXP('+
'    playerId'+
'){'+
''+
'    const amount ='+
'        10000;'+
''+
''+
'    if('+
'        !confirm('+
'            `Donner ${amount.toLocaleString('+
'                getCurrencyLocale()'+
'            )} XP à ce joueur ?`'+
'        )'+
'    ){'+
'        return;'+
'    }'+
''+
''+
'    setAdminMessage('+
'        "⏳ Attribution de l\'XP..."'+
'    );'+
''+
''+
'    const {'+
'        data,'+
'        error'+
'    } ='+
'        await supabaseClient.rpc('+
'            "admin_give_xp",'+
'            {'+
'                target_id: playerId,'+
'                amount: amount'+
'            }'+
'        );'+
''+
''+
'    console.log('+
'        "XP RPC =",'+
'        data'+
'    );'+
''+
'    console.log('+
'        "XP ERROR =",'+
'        error'+
'    );'+
''+
''+
'    if(error){'+
''+
'        console.error(error);'+
''+
'        setAdminMessage('+
'            "❌ " + error.message,'+
'            true'+
'        );'+
''+
'        return;'+
'    }'+
''+
''+
'    /*'+
'     * Relire la vraie valeur depuis Supabase'+
'     */'+
'    const {'+
'        data: latestSave,'+
'        error: latestSaveError'+
'    } ='+
'        await supabaseClient'+
'            .from("game_saves")'+
'            .select("xp")'+
'            .eq("id", playerId)'+
'            .single();'+
''+
''+
'    if('+
'        !latestSaveError &&'+
'        latestSave'+
'    ){'+
''+
'        /*'+
'         * Si c\'est le joueur actuellement connecté,'+
'         * synchroniser la sauvegarde locale.'+
'         */'+
'        if('+
'            currentUser &&'+
'            playerId === currentUser.id'+
'        ){'+
''+
'            saveData.xp ='+
'                Number('+
'                    latestSave.xp'+
'                );'+
''+
'        }'+
''+
'    }'+
''+
''+
'    setAdminMessage('+
'        "✅ 10 000 XP ajoutés."'+
'    );'+
''+
''+
'    await loadAdminPlayers();'+
'}'+
''+
''+
'async function adminGiveShards('+
'    playerId'+
'){'+
''+
'    const amount ='+
'        10;'+
''+
''+
'    if('+
'        !confirm('+
'            `Donner ${amount} shards à ce joueur ?`'+
'        )'+
'    ){'+
'        return;'+
'    }'+
''+
''+
'    setAdminMessage('+
'        "⏳ Attribution des shards..."'+
'    );'+
''+
''+
'    const {'+
'        data,'+
'        error'+
'    } ='+
'        await supabaseClient.rpc('+
'            "admin_give_shards",'+
'            {'+
'                target_id: playerId,'+
'                amount: amount'+
'            }'+
'        );'+
''+
''+
'    console.log('+
'        "SHARDS RPC =",'+
'        data'+
'    );'+
''+
'    console.log('+
'        "SHARDS ERROR =",'+
'        error'+
'    );'+
''+
''+
'    if(error){'+
''+
'        console.error(error);'+
''+
'        setAdminMessage('+
'            "❌ " + error.message,'+
'            true'+
'        );'+
''+
'        return;'+
'    }'+
''+
''+
'    /*'+
'     * Relire la vraie valeur depuis Supabase'+
'     */'+
'    const {'+
'        data: latestSave,'+
'        error: latestSaveError'+
'    } ='+
'        await supabaseClient'+
'            .from("game_saves")'+
'            .select("prestige_shards")'+
'            .eq("id", playerId)'+
'            .single();'+
''+
''+
'    if('+
'        !latestSaveError &&'+
'        latestSave'+
'    ){'+
''+
'        /*'+
'         * Synchroniser la sauvegarde locale'+
'         * si on modifie le joueur connecté.'+
'         */'+
'        if('+
'            currentUser &&'+
'            playerId === currentUser.id'+
'        ){'+
''+
'            saveData.prestigeShards ='+
'                Number('+
'                    latestSave.prestige_shards'+
'                );'+
''+
'        }'+
''+
'    }'+
''+
''+
'    setAdminMessage('+
'        "✅ 10 shards ajoutés."'+
'    );'+
''+
''+
'    await loadAdminPlayers();'+
'}'+
''+
'async function adminBan('+
'    playerId'+
'){'+
''+
'    const reason ='+
'        prompt('+
'            "Raison du bannissement :",'+
'            "Violation des règles"'+
'        );'+
''+
''+
'    if(reason === null){'+
'        return;'+
'    }'+
''+
''+
'    const durationText ='+
'        prompt('+
''+
'            "Durée du bannissement en heures.\\n\\n"+'+
'            "Exemples : 1 = 1 heure, 24 = 1 jour, 168 = 7 jours.\\n"+'+
'            "Laisse vide pour un bannissement permanent.",'+
''+
'            "24"'+
''+
'        );'+
''+
''+
'    if(durationText === null){'+
'        return;'+
'    }'+
''+
''+
'    let durationHours ='+
'        0;'+
''+
''+
'    if('+
'        durationText.trim() !== ""'+
'    ){'+
''+
'        durationHours ='+
'            Number.parseInt('+
'                durationText.trim(),'+
'                10'+
'            );'+
''+
''+
'        if('+
'            !Number.isInteger('+
'                durationHours'+
'            ) ||'+
'            durationHours < 1'+
'        ){'+
''+
'            alert('+
'                "❌ Durée invalide."'+
'            );'+
''+
'            return;'+
'        }'+
''+
'    }'+
''+
''+
'    if('+
'        !confirm('+
''+
'            `Bannir ce joueur ?\\n\\n`+'+
''+
'            `Raison : ${'+
'                reason ||'+
'                "Aucune raison indiquée"'+
'            }\\n`+'+
''+
'            `Durée : ${'+
'                durationHours === 0'+
'                ? "Permanent"'+
'                : durationHours+" heure(s)"'+
'            }`'+
''+
'        )'+
'    ){'+
'        return;'+
'    }'+
''+
''+
'    setAdminMessage('+
'        "⏳ Bannissement..."'+
'    );'+
''+
''+
'    const {'+
'        error'+
'    } ='+
'        await supabaseClient.rpc('+
'            "admin_ban_player",'+
'            {'+
''+
'                target_id:playerId,'+
''+
'                ban_reason:'+
'                    reason ||'+
'                    "Aucune raison indiquée",'+
''+
'                duration_hours:'+
'                    durationHours'+
''+
'            }'+
'        );'+
''+
''+
'    if(error){'+
''+
'        console.error(error);'+
''+
'        setAdminMessage('+
'            "❌ "+error.message,'+
'            true'+
'        );'+
''+
'        return;'+
'    }'+
''+
''+
'    setAdminMessage('+
'        "✅ Joueur banni."'+
'    );'+
''+
''+
'    await loadAdminPlayers();'+
'}'+
''+
''+
'async function adminUnban('+
'    playerId'+
'){'+
''+
'    if('+
'        !confirm('+
'            "Débannir ce joueur ?"'+
'        )'+
'    ){'+
'        return;'+
'    }'+
''+
''+
'    setAdminMessage('+
'        "⏳ Débannissement..."'+
'    );'+
''+
''+
'    const {'+
'        error'+
'    } ='+
'        await supabaseClient.rpc('+
'            "admin_unban_player",'+
'            {'+
'                target_id:playerId'+
'            }'+
'        );'+
''+
''+
'    if(error){'+
''+
'        console.error(error);'+
''+
'        setAdminMessage('+
'            "❌ "+error.message,'+
'            true'+
'        );'+
''+
'        return;'+
'    }'+
''+
''+
'    setAdminMessage('+
'        "✅ Joueur débanni."'+
'    );'+
''+
''+
'    await loadAdminPlayers();'+
'}'+
''+
''+
'document'+
'    .getElementById('+
'        "adminButton"'+
'    )'+
'    ?.addEventListener('+
'        "click",'+
'        openAdminPanel'+
'    );'+
''+
''+
'document'+
'    .getElementById('+
'        "adminClose"'+
'    )'+
'    ?.addEventListener('+
'        "click",'+
'        closeAdminPanel'+
'    );'+
''+
''+
'document'+
'    .getElementById('+
'        "adminRefresh"'+
'    )'+
'    ?.addEventListener('+
'        "click",'+
'        loadAdminPlayers'+
'    );'+
''+
''+
'document'+
'    .getElementById('+
'        "adminSearch"'+
'    )'+
'    ?.addEventListener('+
'        "input",'+
'        renderAdminPlayers'+
'    );'+
''+
''+
'document'+
'    .getElementById('+
'        "adminPlayersBody"'+
'    )'+
'    ?.addEventListener('+
'        "click",'+
'        async event => {'+
''+
'            const button ='+
'                event.target.closest('+
'                    "[data-admin-action]"'+
'                );'+
''+
''+
'            if(!button){'+
'                return;'+
'            }'+
''+
''+
'            const action ='+
'                button.dataset.adminAction;'+
''+
''+
'            const playerId ='+
'                button.dataset.player;'+
''+
''+
'            if(!playerId){'+
'                return;'+
'            }'+
''+
''+
'            if(action === "money"){'+
'                await adminGiveMoney('+
'                    playerId'+
'                );'+
'            }'+
''+
'            else if(action === "xp"){'+
'                await adminGiveXP('+
'                    playerId'+
'                );'+
'            }'+
''+
'            else if(action === "shards"){'+
'                await adminGiveShards('+
'                    playerId'+
'                );'+
'            }'+
''+
'            else if(action === "ban"){'+
'                await adminBan('+
'                    playerId'+
'                );'+
'            }'+
''+
'            else if(action === "unban"){'+
'                await adminUnban('+
'                    playerId'+
'                );'+
'            }'+
''+
'        }'+
'    );'+
''+
''+
'/* ========================================================='+
'   BAN'+
'========================================================= */'+
''+
'async function checkBan(){'+
''+
'    if(!currentUser){'+
'        return false;'+
'    }'+
''+
''+
'    if(banCheckInProgress){'+
'        return false;'+
'    }'+
''+
''+
'    banCheckInProgress ='+
'        true;'+
''+
''+
'    try{'+
''+
'        const {'+
'            data,'+
'            error'+
'        } ='+
'            await supabaseClient.rpc('+
'                "is_user_banned",'+
'                {'+
'                    uid:currentUser.id'+
'                }'+
'            );'+
''+
''+
'        if(error){'+
''+
'            console.error('+
'                "Erreur vérification ban:",'+
'                error'+
'            );'+
''+
'            isBanned = false;'+
''+
'            return false;'+
'        }'+
''+
''+
'        isBanned ='+
'            data === true;'+
''+
''+
'        if(isBanned){'+
''+
'            console.warn('+
'                "Utilisateur banni."'+
'            );'+
''+
''+
'            showBanScreen('+
'                "Compte banni",'+
'                null'+
'            );'+
''+
''+
'            await supabaseClient.auth.signOut();'+
''+
''+
'            currentUser = null;'+
'            currentUsername = null;'+
'            saveData = null;'+
'            isAdmin = false;'+
''+
''+
'            return true;'+
'        }'+
''+
''+
'        return false;'+
''+
'    }'+
'    catch(error){'+
''+
'        console.error('+
'            "Erreur vérification ban:",'+
'            error'+
'        );'+
''+
'        isBanned = false;'+
''+
'        return false;'+
''+
'    }'+
'    finally{'+
''+
'        banCheckInProgress ='+
'            false;'+
''+
'    }'+
'}'+
''+
''+
'/* ========================================================='+
'   ÉCRAN BAN'+
'========================================================= */'+
''+
'function showBanScreen('+
'    reason,'+
'    expiresAt'+
'){'+
''+
'    document.getElementById('+
'        "authScreen"'+
'    ).style.display ='+
'        "none";'+
''+
''+
'    document.getElementById('+
'        "gameScreen"'+
'    ).style.display ='+
'        "none";'+
''+
''+
'    document'+
'        .getElementById('+
'            "banScreen"'+
'        )'+
'        .classList.add('+
'            "show"'+
'        );'+
''+
''+
'    document.getElementById('+
'        "banUsername"'+
'    ).textContent ='+
'        currentUsername ||'+
'        currentUser?.email ||'+
'        "Joueur";'+
''+
''+
'    document.getElementById('+
'        "banReason"'+
'    ).textContent ='+
'        reason ||'+
'        "Aucune raison indiquée";'+
''+
''+
'    const expiration ='+
'        document.getElementById('+
'            "banExpiration"'+
'        );'+
''+
''+
'    if(!expiresAt){'+
''+
'        expiration.textContent ='+
'            "Permanent";'+
''+
'    }'+
'    else{'+
''+
'        const date ='+
'            new Date('+
'                expiresAt'+
'            );'+
''+
''+
'        expiration.textContent ='+
'            date.toLocaleString('+
'                getCurrencyLocale(),'+
'                {'+
'                    dateStyle:"medium",'+
'                    timeStyle:"short"'+
'                }'+
'            );'+
''+
'    }'+
'}'+
''+
''+
'/* ========================================================='+
'   CHARGEMENT JEU'+
'========================================================= */'+
''+
'async function loadGame(){'+
''+
'    if(!currentUser){'+
'        return;'+
'    }'+
''+
''+
'    if(await checkBan()){'+
'        return;'+
'    }'+
''+
''+
'    await checkAdmin();'+
''+
''+
'    const {'+
'        data,'+
'        error'+
'    } ='+
'        await supabaseClient'+
'            .from("game_saves")'+
'            .select("*")'+
'            .eq('+
'                "id",'+
'                currentUser.id'+
'            )'+
'            .maybeSingle();'+
''+
''+
'    if(error){'+
''+
'        console.error('+
'            "Erreur chargement:",'+
'            error'+
'        );'+
''+
''+
'        showAuthMessage('+
'            "❌ Impossible de charger la sauvegarde."'+
'        );'+
''+
''+
'        return;'+
'    }'+
''+
''+
'    if(!data){'+
''+
'        currentUsername ='+
'            currentUser'+
'                .user_metadata'+
'                ?.username ||'+
'            currentUser.email'+
'                ?.split("@")[0] ||'+
'            "Joueur";'+
''+
''+
'        saveData ='+
'            defaultSave();'+
''+
''+
'        await save();'+
''+
'    }'+
''+
'    else{'+
''+
'        currentUsername ='+
'            data.username ||'+
'            currentUser'+
'                .user_metadata'+
'                ?.username ||'+
'            currentUser.email'+
'                ?.split("@")[0] ||'+
'            "Joueur";'+
''+
''+
'        saveData ='+
'            repairSave({'+
''+
'                money:data.money,'+
''+
'                totalEarned:'+
'                    data.total_earned,'+
''+
'                xp:data.xp,'+
''+
'                level:data.level,'+
''+
'                prestige:data.prestige,'+
''+
'                prestigeShards:'+
'                    data.prestige_shards,'+
''+
'                upgrades:data.upgrades'+
''+
'            });'+
''+
'    }'+
''+
''+
'    enterGame();'+
'}'+
''+
''+
'/* ========================================================='+
'   ENTRER JEU'+
'========================================================= */'+
''+
'function enterGame(){'+
''+
'    document.getElementById('+
'        "currentUsername"'+
'    ).textContent ='+
'        currentUsername;'+
''+
''+
'    document.getElementById('+
'        "authScreen"'+
'    ).style.display ='+
'        "none";'+
''+
''+
'    document.getElementById('+
'        "banScreen"'+
'    ).classList.remove('+
'        "show"'+
'    );'+
''+
''+
'    document.getElementById('+
'        "gameScreen"'+
'    ).style.display ='+
'        "block";'+
''+
''+
'    createShop();'+
'    createShardShop();'+
''+
'    changeLanguage('+
'        currentLang'+
'    );'+
''+
'    update();'+
''+
''+
'    notify('+
'        "👋 Bienvenue "+'+
'        currentUsername+'+
'        " !"'+
'    );'+
'}'+
''+
''+
'/* ========================================================='+
'   SAUVEGARDE SUPABASE'+
'========================================================= */'+
''+
'async function save(){'+
''+
'    if('+
'        !currentUser ||'+
'        !saveData ||'+
'        saveInProgress ||'+
'        isBanned'+
'    ){'+
'        return;'+
'    }'+
''+
''+
'    updateReactorOperation();'+
'    saveData.upgrades._overpeter={superPrestige:Number(saveData.superPrestige||0),overpeterShards:Number(saveData.overpeterShards||0),overpeterShop:saveData.overpeterShop||{power:0,click:0,auto:0,spent:0}};'+
''+
'    saveInProgress ='+
'        true;'+
''+
''+
'    try{'+
''+
'        const {'+
'            error'+
'        } ='+
'            await supabaseClient'+
'                .from("game_saves")'+
'                .upsert('+
''+
'                    {'+
''+
'                        id:'+
'                            currentUser.id,'+
''+
'                        username:'+
'                            currentUsername,'+
''+
'                        money:'+
'                            saveData.money,'+
''+
'                        total_earned:'+
'                            saveData.totalEarned,'+
''+
'                        xp:'+
'                            saveData.xp,'+
''+
'                        level:'+
'                            saveData.level,'+
''+
'                        prestige:'+
'                            saveData.prestige,'+
''+
'                        prestige_shards:'+
'                            saveData.prestigeShards,'+
''+
'                        upgrades:'+
'                            saveData.upgrades,'+
''+
'                        updated_at:'+
'                            new Date()'+
'                                .toISOString()'+
''+
'                    },'+
''+
'                    {'+
'                        onConflict:"id"'+
'                    }'+
''+
'                );'+
''+
''+
'        if(error){'+
''+
'            console.error('+
'                "Erreur sauvegarde:",'+
'                error'+
'            );'+
''+
'        }'+
''+
'    }'+
'    catch(error){'+
''+
'        console.error('+
'            "Erreur sauvegarde:",'+
'            error'+
'        );'+
''+
'    }'+
'    finally{'+
''+
'        saveInProgress ='+
'            false;'+
''+
'    }'+
'}'+
''+
''+
'/* ========================================================='+
'   DÉCONNEXION'+
'========================================================= */'+
''+
'document'+
'    .getElementById('+
'        "logoutButton"'+
'    )'+
'    .addEventListener('+
'        "click",'+
'        async()=>{'+
''+
'            await save();'+
''+
'            await supabaseClient'+
'                .auth'+
'                .signOut();'+
''+
'            currentUser = null;'+
'            currentUsername = null;'+
'            saveData = null;'+
'            isAdmin = false;'+
''+
'            location.reload();'+
''+
'        }'+
'    );'+
''+
''+
'/* ========================================================='+
'   DÉCONNEXION BAN'+
'========================================================= */'+
''+
'document'+
'    .getElementById('+
'        "banLogoutButton"'+
'    )'+
'    .addEventListener('+
'        "click",'+
'        async()=>{'+
''+
'            await supabaseClient'+
'                .auth'+
'                .signOut();'+
''+
'            currentUser = null;'+
'            currentUsername = null;'+
'            saveData = null;'+
'            isBanned = false;'+
''+
'            location.reload();'+
''+
'        }'+
'    );'+
''+
''+
'/* ========================================================='+
'   ERREURS AUTH'+
'========================================================= */'+
''+
'function translateAuthError('+
'    message'+
'){'+
''+
'    if('+
'        message.includes('+
'            "Invalid login credentials"'+
'        )'+
'    ){'+
''+
'        return "Identifiant ou mot de passe incorrect.";'+
''+
'    }'+
''+
''+
'    if('+
'        message.includes('+
'            "Email not confirmed"'+
'        )'+
'    ){'+
''+
'        return "Ton adresse e-mail n\'est pas encore confirmée.";'+
''+
'    }'+
''+
''+
'    if('+
'        message.includes('+
'            "User already registered"'+
'        )'+
'    ){'+
''+
'        return "Cette adresse e-mail possède déjà un compte.";'+
''+
'    }'+
''+
''+
'    if('+
'        message.includes('+
'            "Password should be at least"'+
'        )'+
'    ){'+
''+
'        return "Le mot de passe est trop court.";'+
''+
'    }'+
''+
''+
'    if('+
'        message.includes('+
'            "Unable to validate email"'+
'        )'+
'    ){'+
''+
'        return "Adresse e-mail invalide.";'+
''+
'    }'+
''+
''+
'    return message;'+
'}'+
''+
''+
'/* ========================================================='+
'   CURRENCY'+
'========================================================= */'+
''+
'function getCurrencySymbol(){'+
''+
'    // Unité d\'affichage SKALA : la production est exprimée en MW'+
'    // dans toutes les langues. Les valeurs internes de sauvegarde'+
'    // restent inchangées pour préserver les parties existantes.'+
'    return "MW";'+
'}'+
''+
''+
'function getCurrencyLocale(){'+
''+
'    if(currentLang === "en"){'+
'        return "en-GB";'+
'    }'+
''+
'    if(currentLang === "ru"){'+
'        return "ru-RU";'+
'    }'+
''+
'    return "fr-FR";'+
'}'+
''+
''+
'function currencyText('+
'    number'+
'){'+
''+
'    return ('+
'        formatNumber(number)+'+
'        " "+'+
'        getCurrencySymbol()'+
'    );'+
'}'+
''+
''+
'function updateCurrencySymbols(){'+
''+
'    const symbol ='+
'        getCurrencySymbol();'+
''+
'    const currencyName ='+
'        "SKALA · MW Clicker";'+
''+
'    document'+
'        .querySelectorAll('+
'            ".currency-symbol"'+
'        )'+
'        .forEach('+
'            element => {'+
''+
'                element.textContent ='+
'                    symbol;'+
''+
'            }'+
'        );'+
''+
'    document'+
'        .querySelectorAll('+
'            ".brand-currency-symbol"'+
'        )'+
'        .forEach('+
'            element => {'+
''+
'                element.textContent ='+
'                    symbol;'+
''+
'            }'+
'        );'+
''+
'    document'+
'        .querySelectorAll('+
'            ".brand-currency-name"'+
'        )'+
'        .forEach('+
'            element => {'+
''+
'                element.textContent ='+
'                    currencyName;'+
''+
'            }'+
'        );'+
''+
'    document.title ='+
'        currencyName;'+
'}'+
''+
''+
'/* ========================================================='+
'   MULTIPLICATEUR'+
'========================================================= */'+
''+
'/* ========================================================='+
'   ARITHMÉTIQUE SÉCURISÉE — PROTECTION CONTRE INFINITY'+
'   Les valeurs du jeu restent des Number pour compatibilité'+
'   avec les sauvegardes Supabase. Le plafond évite Infinity.'+
'========================================================= */'+
'const MAX_GAME_VALUE = 1e300;'+
'const MAX_GAME_LOG2 = Math.log2(MAX_GAME_VALUE);'+
''+
'function safeGameNumber(value, fallback=0){'+
'    const n=Number(value);'+
'    if(Number.isNaN(n)) return fallback;'+
'    if(n===Infinity) return MAX_GAME_VALUE;'+
'    if(n===-Infinity) return -MAX_GAME_VALUE;'+
'    return Math.max(-MAX_GAME_VALUE,Math.min(MAX_GAME_VALUE,n));'+
'}'+
''+
'function safeGameAdd(a,b){'+
'    return safeGameNumber(safeGameNumber(a)+safeGameNumber(b));'+
'}'+
''+
'function safeGameMultiply(a,b){'+
'    a=safeGameNumber(a); b=safeGameNumber(b);'+
'    if(a===0 || b===0) return 0;'+
'    const result=a*b;'+
'    if(!Number.isFinite(result)) return Math.sign(a)*Math.sign(b)*MAX_GAME_VALUE;'+
'    return Math.max(-MAX_GAME_VALUE,Math.min(MAX_GAME_VALUE,result));'+
'}'+
''+
'function safePowerOfTwo(exponent){'+
'    exponent=Math.max(0,safeGameNumber(exponent));'+
'    if(exponent>=MAX_GAME_LOG2) return MAX_GAME_VALUE;'+
'    return Math.pow(2,exponent);'+
'}'+
''+
'function log2PositiveSum(values){'+
'    const logs=values.filter(v=>Number.isFinite(v)&&v>0).map(v=>Math.log2(v));'+
'    if(!logs.length) return 0;'+
'    const maxLog=Math.max(...logs);'+
'    let scaled=0;'+
'    for(const log of logs) scaled+=Math.pow(2,log-maxLog);'+
'    return maxLog+Math.log2(scaled);'+
'}'+
''+
'function getPrestigeMultiplier(){'+
''+
'    if(!saveData){'+
'        return 1;'+
'    }'+
''+
'    const state = getShardShopState();'+
'    const shards = safeGameNumber(saveData.prestigeShards);'+
'    const spent = safeGameNumber(state.spent || 0);'+
'    const shopPower = safeGameNumber(state.power || 0);'+
''+
'    const superLevels=Math.max(0,safeGameNumber(saveData.superPrestige||0));'+
'    const overpeterPower=Math.max(0,safeGameNumber(saveData.overpeterShop?.power||0));'+
''+
'    // Calcul en logarithmes : on ne calcule jamais 2^niveau directement'+
'    // lorsque le résultat dépasserait la capacité d\'un Number.'+
'    const logBase=log2PositiveSum([1,safeGameMultiply(shards+spent,.25),safeGameMultiply(shopPower,.05)]);'+
'    const totalLog2=logBase+superLevels+overpeterPower;'+
'    return safePowerOfTwo(totalLog2);'+
'}'+
''+
''+
'/* ========================================================='+
'   FONCTIONNEMENT DES RÉACTEURS / RISQUE D\'EXPLOSION'+
'========================================================= */'+
''+
'const reactorOperationIds = ["rbmk1000","rbmk1500","chernobyl"];'+
''+
'const reactorRiskBase = {'+
'    rbmk1000:0.045,'+
'    rbmk1500:0.075,'+
'    chernobyl:0.12'+
'};'+
''+
'function getOperationState(){'+
'    if(!saveData){'+
'        return {rbmk1000:0,rbmk1500:0,chernobyl:0,lastTick:Date.now(),explosions:0};'+
'    }'+
'    if(!saveData.upgrades._operation || typeof saveData.upgrades._operation !== "object"){'+
'        saveData.upgrades._operation={rbmk1000:0,rbmk1500:0,chernobyl:0,lastTick:Date.now(),explosions:0};'+
'    }'+
'    const state=saveData.upgrades._operation;'+
'    for(const id of reactorOperationIds){'+
'        const value=Number(state[id]);'+
'        state[id]=Number.isFinite(value)?Math.max(0,Math.min(100,value)):0;'+
'    }'+
'    if(!Number.isFinite(Number(state.lastTick)) || Number(state.lastTick)<=0) state.lastTick=Date.now();'+
'    if(!Number.isFinite(Number(state.explosions)) || Number(state.explosions)<0) state.explosions=0;'+
'    return state;'+
'}'+
''+
'function isOperationReactor(id){'+
'    return reactorOperationIds.includes(id);'+
'}'+
''+
'function getEmployeeStats(){'+
'    if(!saveData) return {production:0,risk:0,total:0};'+
''+
'    const employees = ['+
'        {id:"employeeUntrained",production:0,risk:0.12},'+
'        {id:"employeeBasic",production:0.03,risk:-0.02},'+
'        {id:"employeeTrained",production:0.08,risk:-0.06},'+
'        {id:"employeeExpert",production:0.15,risk:-0.12}'+
'    ];'+
''+
'    let production=0;'+
'    let risk=0;'+
'    let total=0;'+
''+
'    for(const employee of employees){'+
'        const owned=Number(saveData.upgrades[employee.id]||0);'+
'        total+=owned;'+
'        production=safeGameAdd(production,safeGameMultiply(employee.production,owned));'+
'        risk=safeGameAdd(risk,safeGameMultiply(employee.risk,owned));'+
'    }'+
''+
'    return {production,risk,total};'+
'}'+
''+
'function getEmployeeProductionMultiplier(){'+
'    return safeGameAdd(1,getEmployeeStats().production);'+
'}'+
''+
'function getEmployeeRiskModifier(){'+
'    return getEmployeeStats().risk;'+
'}'+
''+
'function getReactorRisk(id){'+
'    if(!isOperationReactor(id) || !saveData) return 0;'+
'    return Math.max(0,Math.min(100,Number(getOperationState()[id]||0)));'+
'}'+
''+
'function getReactorEfficiency(id){'+
'    // Le réacteur continue toujours de produire : le risque n\'est plus une panne.'+
'    return isOperationReactor(id) ? 1 : 1;'+
'}'+
''+
'function getRiskLabel(risk){'+
'    if(risk < 15) return "🟢 Stable";'+
'    if(risk < 35) return "🟡 Vigilance";'+
'    if(risk < 60) return "🟠 Risqué";'+
'    if(risk < 80) return "🔴 Critique";'+
'    return "☢️ Danger extrême";'+
'}'+
''+
'function getRiskColor(risk){'+
'    if(risk < 15) return "#62e89b";'+
'    if(risk < 35) return "#d9d35d";'+
'    if(risk < 60) return "#ffb347";'+
'    if(risk < 80) return "#ff765f";'+
'    return "#ff3f55";'+
'}'+
''+
'function reactorExplosionChancePerMinute(id){'+
'    const owned=Number(saveData?.upgrades?.[id]||0);'+
'    if(owned<=0) return 0;'+
''+
'    const risk=getReactorRisk(id);'+
'    const employeeModifier=getEmployeeRiskModifier();'+
'    const modifier=Math.max(0.35,1+employeeModifier);'+
''+
'    // Le risque est volontairement un mécanisme de jeu : plus il monte, plus l\'explosion devient probable.'+
'    return Math.max(0,Math.min(0.25,(risk/100)*0.0025*modifier));'+
'}'+
''+
'function triggerReactorExplosion(id){'+
'    if(!saveData) return;'+
''+
'    const state=getOperationState();'+
'    const upgrade=upgradesData.find(item=>item.id===id);'+
'    if(!upgrade) return;'+
''+
'    const owned=Number(saveData.upgrades[id]||0);'+
'    if(owned<=0) return;'+
''+
'    // Une explosion retire un exemplaire du réacteur et une partie de l\'argent.'+
'    saveData.upgrades[id]=Math.max(0,owned-1);'+
'    state[id]=0;'+
'    state.explosions=Math.floor(Number(state.explosions||0))+1;'+
'    const loss=Math.min(saveData.money,Math.max(0,saveData.money*0.10));'+
'    saveData.money-=loss;'+
''+
'    notify("💥 INCIDENT : "+upgrade.name+" a explosé ! Réacteur perdu, -10 % d\'argent.");'+
'}'+
''+
'function updateReactorOperation(){'+
'    if(!saveData || isBanned) return false;'+
''+
'    const state=getOperationState();'+
'    const now=Date.now();'+
'    const last=Number(state.lastTick)||now;'+
'    const elapsedMinutes=Math.max(0,Math.min(10,(now-last)/60000));'+
'    if(elapsedMinutes<=0){state.lastTick=now;return false;}'+
''+
'    let changed=false;'+
''+
'    for(const id of reactorOperationIds){'+
'        const owned=Number(saveData.upgrades[id]||0);'+
'        if(owned<=0){'+
'            state[id]=0;'+
'            continue;'+
'        }'+
''+
'        const riskGain=reactorRiskBase[id]*(1+Math.min(owned-1,20)*0.04);'+
'        const before=Number(state[id]||0);'+
'        state[id]=Math.min(100,before+riskGain*elapsedMinutes);'+
'        if(state[id]!==before) changed=true;'+
''+
'        const chance=reactorExplosionChancePerMinute(id);'+
'        if(chance>0){'+
'            const probability=1-Math.pow(1-chance,elapsedMinutes);'+
'            if(Math.random()<probability){'+
'                triggerReactorExplosion(id);'+
'                changed=true;'+
'            }'+
'        }'+
'    }'+
''+
'    state.lastTick=now;'+
'    return changed;'+
'}'+
''+
'function performReactorMaintenance(id){'+
'    if(!saveData||isBanned)return;'+
'    const upgrade=upgradesData.find(item=>item.id===id);'+
'    const owned=Number(saveData.upgrades[id]||0);'+
'    if(!upgrade||owned<=0){notify("❌ Aucun réacteur à entretenir.");return;}'+
'    const state=getOperationState();'+
'    const price=Math.max(1,Math.floor(upgrade.basePrice*.05));'+
'    if(saveData.money<price){notify("❌ Fonds insuffisants pour la maintenance : "+formatNumber(price)+" "+getCurrencySymbol()+".");return;}'+
'    if(Number(state[id]||0)<=0){notify("✅ Le réacteur n\'a pas besoin de maintenance.");return;}'+
'    saveData.money-=price;'+
'    state[id]=Math.max(0,Number(state[id]||0)-35);'+
'    state.lastTick=Date.now();'+
'    notify("🔧 Maintenance terminée : le réacteur reste en fonctionnement, risque réduit de 35 points.");'+
'    update();'+
'}'+
''+
'function updateReactorOperationUI(upgrade){'+
'    if(!isOperationReactor(upgrade.id)) return;'+
''+
'    const owned=Number(saveData?.upgrades?.[upgrade.id]||0);'+
'    const risk=owned>0?getReactorRisk(upgrade.id):0;'+
'    const fill=document.getElementById(upgrade.id+"RiskFill");'+
'    const label=document.getElementById(upgrade.id+"Risk");'+
'    const status=document.getElementById(upgrade.id+"OperationStatus");'+
'    const chance=document.getElementById(upgrade.id+"ExplosionChance");'+
'    const maintenanceButton=document.getElementById(upgrade.id+"Maintenance");'+
'    if(maintenanceButton){'+
'        const cost=Math.max(1,Math.floor(upgrade.basePrice*.05));'+
'        maintenanceButton.disabled=owned<=0||!saveData||saveData.money<cost||risk<=0;'+
'        const labels={fr:"🔧 Maintenance",en:"🔧 Maintenance",ru:"🔧 Техобслуживание"};'+
'        const currency=currentLang==="ru"?"":(" "+getCurrencySymbol());'+
'        maintenanceButton.textContent=(labels[currentLang]||labels.fr)+" · "+formatNumber(cost)+currency+" (−35%)";'+
'    }'+
''+
'    if(fill){'+
'        fill.style.width=Math.max(0,Math.min(100,risk))+"%";'+
'        fill.style.background=getRiskColor(risk);'+
'    }'+
'    if(label){'+
'        label.textContent=owned>0?risk.toFixed(1)+" %":"Arrêté";'+
'        label.style.color=getRiskColor(risk);'+
'    }'+
'    if(status){'+
'        status.innerHTML=owned>0?"⚙️ "+getRiskLabel(risk):"⏹️ Aucun réacteur";'+
'    }'+
'    if(chance){'+
'        const perMinute=reactorExplosionChancePerMinute(upgrade.id)*100;'+
'        chance.textContent=owned>0?"Risque d\'incident : "+perMinute.toFixed(3)+" %/min":"Aucun risque";'+
'    }'+
'}'+
''+
'/* ========================================================='+
'   GAINS'+
'========================================================= */'+
''+
'function getPersonnelMultiplier(){'+
''+
'    if(!saveData){'+
'        return 1;'+
'    }'+
''+
'    let multiplier = 1;'+
''+
'    const akimov ='+
'        Number(saveData.upgrades.akimov || 0);'+
''+
'    const diatlov ='+
'        Number(saveData.upgrades.diatlov || 0);'+
''+
'    if(akimov > 0){'+
'        multiplier = safeGameMultiply(multiplier,1+safeGameMultiply(0.20,akimov));'+
'    }'+
''+
'    if(diatlov > 0){'+
'        multiplier ='+
'            safeGameMultiply(multiplier,safePowerOfTwo(diatlov));'+
'    }'+
''+
'    multiplier = safeGameMultiply(multiplier,getEmployeeProductionMultiplier());'+
''+
'    return multiplier;'+
'}'+
''+
''+
'function getBaseClickValue(){'+
''+
'    if(!saveData){'+
'        return 1;'+
'    }'+
''+
'    let value = 1;'+
''+
'    for('+
'        const upgrade'+
'        of upgradesData'+
'    ){'+
''+
'        const owned ='+
'            saveData.upgrades[upgrade.id] || 0;'+
''+
'        if('+
'            upgrade.special === "akimov" ||'+
'            upgrade.special === "diatlov" ||'+
'            upgrade.special === "employee"'+
'        ){'+
'            continue;'+
'        }'+
''+
'        const efficiency ='+
'            getReactorEfficiency('+
'                upgrade.id'+
'            );'+
''+
'        value = safeGameAdd(value,safeGameMultiply(safeGameMultiply(upgrade.click,owned),efficiency));'+
'    }'+
''+
'    return safeGameMultiply(value,getPersonnelMultiplier());'+
'}'+
''+
''+
'function getClickValue(){'+
''+
'    const state ='+
'        getShardShopState();'+
''+
'    const overpeterClick=1+safeGameMultiply(Number(saveData.overpeterShop?.click||0),2.5);'+
'    let result=safeGameMultiply(getBaseClickValue(),getPrestigeMultiplier());'+
'    result=safeGameMultiply(result,1+safeGameMultiply(Number(state.click||0),.10));'+
'    return safeGameMultiply(result,overpeterClick);'+
'}'+
''+
''+
'function getPerSecond(){'+
''+
'    if(!saveData){'+
'        return 0;'+
'    }'+
''+
'    let value = 0;'+
''+
'    for('+
'        const upgrade'+
'        of upgradesData'+
'    ){'+
''+
'        const owned ='+
'            saveData.upgrades[upgrade.id] || 0;'+
''+
'        if('+
'            upgrade.special === "akimov" ||'+
'            upgrade.special === "diatlov" ||'+
'            upgrade.special === "employee"'+
'        ){'+
'            continue;'+
'        }'+
''+
'        const efficiency ='+
'            getReactorEfficiency('+
'                upgrade.id'+
'            );'+
''+
'        value = safeGameAdd(value,safeGameMultiply(safeGameMultiply(upgrade.auto,owned),efficiency));'+
'    }'+
''+
'    const state ='+
'        getShardShopState();'+
''+
'    const overpeterAuto=1+safeGameMultiply(Number(saveData.overpeterShop?.auto||0),2.5);'+
'    let result=safeGameMultiply(value,getPersonnelMultiplier());'+
'    result=safeGameMultiply(result,getPrestigeMultiplier());'+
'    result=safeGameMultiply(result,1+safeGameMultiply(Number(state.auto||0),.10));'+
'    return safeGameMultiply(result,overpeterAuto);'+
'}'+
''+
''+
'/* ========================================================='+
'   PRIX'+
'========================================================= */'+
''+
'function getPrice('+
'    upgrade'+
'){'+
''+
'    const owned ='+
'        saveData'+
'            .upgrades['+
'                upgrade.id'+
'            ] || 0;'+
''+
''+
'    const raw=upgrade.basePrice*Math.pow(upgrade.priceGrowth,owned);'+
'    return Math.floor(Math.min(1e300,Number.isFinite(raw)?raw:1e300));'+
'}'+
''+
'/* ========================================================='+
'   ACHAT EN QUANTITÉ (x1 / x10 / x100 / MAX)'+
'========================================================= */'+
''+
'let buyMode = localStorage.getItem("clicker_buy_mode") || "1";'+
'if(!["1","10","100","max"].includes(buyMode)){'+
'    buyMode = "1";'+
'}'+
''+
'function bulkCost(upgrade, owned, n){'+
'    const g = upgrade.priceGrowth;'+
'    const raw = upgrade.basePrice * Math.pow(g, owned);'+
''+
'    if(n <= 1){'+
'        return Math.floor(Math.min(1e300, Number.isFinite(raw) ? raw : 1e300));'+
'    }'+
''+
'    const total = (g === 1)'+
'        ? raw * n'+
'        : raw * (Math.pow(g, n) - 1) / (g - 1);'+
''+
'    return Number.isFinite(total)'+
'        ? Math.floor(Math.min(1e300, total))'+
'        : Infinity;'+
'}'+
''+
'function getBulkPurchase(upgrade){'+
'    const owned = Number(saveData.upgrades[upgrade.id] || 0);'+
''+
'    const remaining = upgrade.maxOwned'+
'        ? Math.max(0, upgrade.maxOwned - owned)'+
'        : Infinity;'+
''+
'    let count;'+
''+
'    if(buyMode === "max"){'+
'        const g = upgrade.priceGrowth;'+
'        const first = bulkCost(upgrade, owned, 1);'+
''+
'        if(saveData.money < first){'+
'            count = 1;'+
'        }'+
'        else if(g === 1){'+
'            count = Math.floor(saveData.money / first);'+
'        }'+
'        else{'+
'            count = Math.floor('+
'                Math.log(1 + saveData.money * (g - 1) / first) / Math.log(g)'+
'            );'+
'            count = Math.max(1, Math.min(count, 100000));'+
''+
'            let guard = 0;'+
'            while('+
'                count > 1 &&'+
'                bulkCost(upgrade, owned, count) > saveData.money &&'+
'                guard++ < 50'+
'            ){'+
'                count--;'+
'            }'+
'        }'+
'    }'+
'    else{'+
'        count = Number(buyMode);'+
'    }'+
''+
'    count = Math.min(count, remaining);'+
'    if(!(count >= 1)) count = 1;'+
''+
'    return {'+
'        count,'+
'        cost: bulkCost(upgrade, owned, count)'+
'    };'+
'}'+
''+
'function setBuyMode(mode){'+
'    if(!["1","10","100","max"].includes(mode)) return;'+
'    buyMode = mode;'+
'    localStorage.setItem("clicker_buy_mode", mode);'+
''+
'    document.querySelectorAll(".buy-mode-btn").forEach(btn => {'+
'        btn.classList.toggle("active", btn.dataset.mode === mode);'+
'    });'+
''+
'    if(saveData) update();'+
'}'+
''+
'document.querySelectorAll(".buy-mode-btn").forEach(btn => {'+
'    btn.addEventListener("click", () => setBuyMode(btn.dataset.mode));'+
'    btn.classList.toggle("active", btn.dataset.mode === buyMode);'+
'});'+
''+
'/* ========================================================='+
'   FORMATAGE'+
'========================================================= */'+
''+
'function formatNumber('+
'    number'+
'){'+
''+
'    if(!Number.isFinite(number)){'+
'        return "∞";'+
'    }'+
''+
''+
'    const abs ='+
'        Math.abs(number);'+
''+
''+
'    // Notation compacte dès 100, puis suffixes usuels et notation exponentielle.'+
'    const units = ['+
'        {value:1e300,name:"e300"}, {value:1e270,name:"e270"},'+
'        {value:1e240,name:"e240"}, {value:1e210,name:"e210"},'+
'        {value:1e180,name:"e180"}, {value:1e150,name:"e150"},'+
'        {value:1e120,name:"e120"}, {value:1e100,name:"e100"},'+
'        {value:1e90,name:"e90"}, {value:1e80,name:"e80"},'+
'        {value:1e70,name:"e70"}, {value:1e60,name:"e60"},'+
'        {value:1e50,name:"e50"}, {value:1e40,name:"e40"},'+
'        {value:1e30,name:"e30"}, {value:1e24,name:"e24"},'+
'        {value:1e21,name:"e21"}, {value:1e18,name:"Qi"},'+
'        {value:1e15,name:"Qa"}, {value:1e12,name:"T"},'+
'        {value:1e9,name:"Md"}, {value:1e6,name:"M"},'+
'        {value:1e3,name:"k"}, {value:1e2,name:"h"}'+
'    ];'+
''+
''+
'    for('+
'        const unit'+
'        of units'+
'    ){'+
''+
'        if('+
'            abs >= unit.value'+
'        ){'+
''+
'            return ('+
''+
'                number /'+
'                unit.value'+
''+
'            )'+
'            .toFixed(2)'+
'            .replace('+
'                ".00",'+
'                ""'+
'            )'+
'            .replace('+
'                ".0",'+
'                ""'+
'            )+'+
'            " "+'+
'            unit.name;'+
''+
'        }'+
''+
'    }'+
''+
''+
'    return Math.floor('+
'        number'+
'    ).toLocaleString('+
'        getCurrencyLocale()'+
'    );'+
'}'+
''+
''+
'/* ========================================================='+
'   BOUTIQUE'+
'========================================================= */'+
''+
'const shopList ='+
'    document.getElementById('+
'        "shopList"'+
'    );'+
''+
''+
'function localizeUpgradeCurrency('+
'    text'+
'){'+
''+
'    if('+
'        typeof text !== "string"'+
'    ){'+
'        return text;'+
'    }'+
''+
''+
'    return text.replace('+
'        /\\{CURRENCY\\}/g,'+
'        getCurrencySymbol()'+
'    );'+
'}'+
''+
''+
'function getUpgradeTranslation('+
'    upgrade'+
'){'+
''+
'    const translated ='+
'        translations['+
'            currentLang'+
'        ]'+
'        ?.items'+
'        ?.['+
'            upgrade.id'+
'        ];'+
''+
''+
'    let generatedName=upgrade.name;'+
'    let generatedDescription=upgrade.description;'+
'    if(upgrade.generatedUpgrade){'+
'        if(currentLang==="en"){'+
'            generatedName=upgrade.category==="overpeter"?"Overpeter Ω-"+String(upgrade.tierIndex-1000).padStart(2,"0"):"Empire Expansion "+upgrade.tierIndex;'+
'            generatedDescription=upgrade.category==="overpeter"?"Cosmic production · exponential price":"Progressive upgrade: increased production";'+
'        }else if(currentLang==="ru"){'+
'            generatedName=upgrade.category==="overpeter"?"Оверпетер Ω-"+String(upgrade.tierIndex-1000).padStart(2,"0"):"Расширение империи "+upgrade.tierIndex;'+
'            generatedDescription=upgrade.category==="overpeter"?"Космическое производство · экспоненциальная цена":"Улучшение: увеличение производства";'+
'        }'+
'    }'+
'    return {'+
'        name:translated?.name||generatedName,'+
'        description:localizeUpgradeCurrency(translated?.desc||generatedDescription)'+
'    };'+
'}'+
''+
''+
'function createShop(){'+
''+
'    if(!shopList){'+
'        return;'+
'    }'+
''+
''+
'    shopList.innerHTML ='+
'        "";'+
''+
''+
'    const translation ='+
'        translations['+
'            currentLang'+
'        ];'+
''+
''+
'    for('+
'        const upgrade'+
'        of upgradesData'+
'    ){'+
''+
'        const card ='+
'            document.createElement('+
'                "div"'+
'            );'+
''+
''+
'        card.className ='+
'            "upgrade";'+
''+
''+
'        const translated ='+
'            getUpgradeTranslation('+
'                upgrade'+
'            );'+
''+
''+
'        card.innerHTML = `'+
''+
'            <div class="owned">'+
'                x<span id="${upgrade.id}Owned">0</span>'+
'            </div>'+
''+
'            <div class="upgrade-top">'+
''+
'                <div class="upgrade-icon">'+
'                    ${upgrade.icon}'+
'                </div>'+
''+
'                <div>'+
''+
'                    <h3 class="upgrade-name">'+
'                        ${escapeHtml('+
'                            translated.name'+
'                        )}'+
'                    </h3>'+
''+
'                    <p class="upgrade-description">'+
'                        ${escapeHtml('+
'                            translated.description'+
'                        )}'+
'                    </p>'+
''+
'                </div>'+
''+
'            </div>'+
''+
'            ${isOperationReactor(upgrade.id) ? `'+
'                <div class="reactor-operation">'+
'                    <div class="reactor-operation-head">'+
'                        <span class="reactor-operation-label">⚙️ Fonctionnement</span>'+
'                        <span class="reactor-risk" id="${upgrade.id}Risk">0.0 %</span>'+
'                    </div>'+
'                    <div class="reactor-risk-bar">'+
'                        <div class="reactor-risk-fill" id="${upgrade.id}RiskFill"></div>'+
'                    </div>'+
'                    <div class="reactor-operation-info">'+
'                        <span class="reactor-operation-status" id="${upgrade.id}OperationStatus">⚙️ Stable</span>'+
'                        <span class="reactor-operation-status" id="${upgrade.id}ExplosionChance">Risque d\'incident : 0.000 %/min</span>'+
'                    </div>'+
'                    <button class="maintenance-button" id="${upgrade.id}Maintenance" type="button">🔧 Maintenance · réduction du risque</button>'+
'                </div>'+
'            ` : ""}'+
''+
'            <button'+
'                class="buy"'+
'                id="${upgrade.id}Buy"'+
'            >'+
''+
'                ${translation.buy} ·'+
''+
'                <span'+
'                    id="${upgrade.id}Price"'+
'                >'+
'                    0'+
'                </span>'+
''+
'                <span class="currency-symbol">'+
'                    ${getCurrencySymbol()}'+
'                </span>'+
''+
'            </button>'+
''+
'        `;'+
''+
''+
'        shopList.appendChild('+
'            card'+
'        );'+
''+
''+
'        document'+
'            .getElementById('+
'                upgrade.id+'+
'                "Buy"'+
'            )'+
'            .addEventListener('+
'                "click",'+
'                ()=>{'+
'                    buyUpgrade(upgrade);'+
'                }'+
'            );'+
''+
'        if(isOperationReactor(upgrade.id)){'+
'            document.getElementById(upgrade.id+"Maintenance").addEventListener("click",()=>performReactorMaintenance(upgrade.id));'+
'        }'+
''+
'    }'+
'}'+
''+
''+
'/* ========================================================='+
'   BOUTIQUE DES ÉCLATS'+
'========================================================= */'+
''+
'const shardShopList = document.getElementById("shardShopList");'+
''+
'const shardShopData = ['+
'    {id:"power",icon:"🌟",name:{fr:"Cœur de Renaissance",en:"Rebirth Core",ru:"Ядро Возрождения"},desc:{fr:"+5% à tous les revenus par niveau",en:"+5% to all income per level",ru:"+5% ко всему доходу за уровень"},cost:5,growth:2,max:20},'+
'    {id:"click",icon:"✨",name:{fr:"Clic céleste",en:"Celestial Click",ru:"Небесный клик"},desc:{fr:"+10% aux revenus des clics par niveau",en:"+10% click income per level",ru:"+10% дохода от кликов за уровень"},cost:8,growth:3,max:10},'+
'    {id:"auto",icon:"⚙️",name:{fr:"Flux éternel",en:"Eternal Flow",ru:"Вечный поток"},desc:{fr:"+10% aux revenus automatiques par niveau",en:"+10% automatic income per level",ru:"+10% автоматического дохода за уровень"},cost:8,growth:3,max:10}'+
'];'+
''+
'function getShardShopState(){'+
'    if(!saveData){return {power:0,click:0,auto:0,spent:0};}'+
'    if(!saveData.upgrades._shardShop || typeof saveData.upgrades._shardShop !== "object"){'+
'        saveData.upgrades._shardShop={power:0,click:0,auto:0,spent:0};'+
'    }'+
'    return saveData.upgrades._shardShop;'+
'}'+
''+
'function getShardShopPrice(item){'+
'    const state=getShardShopState();'+
'    return item.cost + Number(state[item.id]||0)*item.growth;'+
'}'+
''+
'function getShardShopText(item){'+
'    return {name:item.name[currentLang]||item.name.fr,desc:item.desc[currentLang]||item.desc.fr};'+
'}'+
''+
'function createShardShop(){'+
'    if(!shardShopList || !saveData){return;}'+
'    shardShopList.innerHTML="";'+
'    for(const item of shardShopData){'+
'        const state=getShardShopState();'+
'        const owned=Number(state[item.id]||0);'+
'        const price=getShardShopPrice(item);'+
'        const text=getShardShopText(item);'+
'        const card=document.createElement("div");'+
'        card.className="shard-item";'+
'        card.innerHTML=`<div class="shard-item-top"><div class="shard-item-icon">${item.icon}</div><div><h4 class="shard-item-name">${escapeHtml(text.name)}</h4><p class="shard-item-desc">${escapeHtml(text.desc)}</p></div><div class="shard-item-owned">${owned}/${item.max}</div></div><button class="shard-buy" id="shardBuy_${item.id}">${owned>=item.max?"✓ MAX":"✨ Acheter · "+price+" Éclat(s)"}</button>`;'+
'        shardShopList.appendChild(card);'+
'        document.getElementById("shardBuy_"+item.id).addEventListener("click",()=>buyShardUpgrade(item));'+
'    }'+
'    updateShardShop();'+
'}'+
''+
'function updateShardShop(){'+
'    if(!saveData){return;}'+
'    const state=getShardShopState();'+
'    const balance=document.getElementById("shardShopBalance");'+
'    if(balance){balance.textContent=saveData.prestigeShards;}'+
'    for(const item of shardShopData){'+
'        const owned=Number(state[item.id]||0);'+
'        const price=getShardShopPrice(item);'+
'        const button=document.getElementById("shardBuy_"+item.id);'+
'        if(!button){continue;}'+
'        button.disabled=owned>=item.max || saveData.prestigeShards<price;'+
'        button.textContent=owned>=item.max?"✓ MAX":"✨ Acheter · "+price+" Éclat(s)";'+
'        const ownedElement=button.parentElement.querySelector(".shard-item-owned");'+
'        if(ownedElement){ownedElement.textContent=owned+"/"+item.max;}'+
'    }'+
'}'+
''+
'function buyShardUpgrade(item){'+
'    if(isBanned || !saveData){return;}'+
'    const state=getShardShopState();'+
'    const owned=Number(state[item.id]||0);'+
'    if(owned>=item.max){notify("✨ Cette amélioration est au maximum.");return;}'+
'    const price=getShardShopPrice(item);'+
'    if(saveData.prestigeShards<price){notify("❌ Il te manque "+(price-saveData.prestigeShards)+" Éclat(s).");return;}'+
'    saveData.prestigeShards-=price;'+
'    state[item.id]=owned+1;'+
'    state.spent=Number(state.spent||0)+price;'+
'    const text=getShardShopText(item);'+
'    notify("✨ "+text.name+" niveau "+state[item.id]+" !");'+
'    update();'+
'}'+
''+
''+
'function escapeHtml('+
'    value'+
'){'+
''+
'    return String('+
'        value ?? ""'+
'    )'+
'    .replaceAll('+
'        "&",'+
'        "&"'+
'    )'+
'    .replaceAll('+
'        "<",'+
'        "<"'+
'    )'+
'    .replaceAll('+
'        ">",'+
'        ">"'+
'    )'+
'    .replaceAll('+
'        \'"\','+
'        """'+
'    )'+
'    .replaceAll('+
'        "\'",'+
'        "\'"'+
'    );'+
'}'+
''+
''+
'/* ========================================================='+
'   ACHAT'+
'========================================================= */'+
''+
'function buyUpgrade('+
'    upgrade'+
'){'+
''+
'    if('+
'        isBanned ||'+
'        !saveData'+
'    ){'+
'        return;'+
'    }'+
''+
''+
'    const ownedBefore ='+
'        Number('+
'            saveData.upgrades[upgrade.id] || 0'+
'        );'+
''+
'    if('+
'        upgrade.maxOwned &&'+
'        ownedBefore >= upgrade.maxOwned'+
'    ){'+
'        notify('+
'            "❌ "+'+
'            getUpgradeTranslation(upgrade).name+'+
'            " est déjà recruté."'+
'        );'+
'        return;'+
'    }'+
''+
''+
'    const bulk = getBulkPurchase(upgrade);'+
'    const price = bulk.cost;'+
'    const count = bulk.count;'+
''+
''+
'    if('+
'        !Number.isFinite(price) ||'+
'        saveData.money < price'+
'    ){'+
''+
'        notify('+
''+
'            "❌ "+'+
'            translations['+
'                currentLang'+
'            ].notEnough+'+
'            " "+'+
'            formatNumber('+
'                price -'+
'                saveData.money'+
'            )+'+
'            " "+'+
'            getCurrencySymbol()'+
''+
'        );'+
''+
'        return;'+
'    }'+
''+
''+
'    saveData.money -='+
'        price;'+
''+
''+
'    saveData.upgrades['+
'        upgrade.id'+
'    ] += count;'+
''+
''+
'    const translated ='+
'        getUpgradeTranslation('+
'            upgrade'+
'        );'+
''+
''+
'    notify('+
''+
'        upgrade.icon+'+
'        " "+'+
'        (count > 1 ? "x"+formatNumber(count)+" " : "")+'+
'        translated.name+'+
'        " "+'+
'        translations['+
'            currentLang'+
'        ].bought'+
''+
'    );'+
''+
''+
'    update();'+
'}'+
''+
''+
'/* ========================================================='+
'   ARGENT'+
'========================================================= */'+
''+
'function addMoney('+
'    amount'+
'){'+
''+
'    if(isBanned || !saveData || Number.isNaN(Number(amount)) || Number(amount)<=0){'+
'        return;'+
'    }'+
''+
'    amount=safeGameNumber(amount);'+
'    saveData.money=safeGameAdd(saveData.money,amount);'+
'    saveData.totalEarned=safeGameAdd(saveData.totalEarned,amount);'+
''+
''+
'    saveData.xp +='+
'        Math.max('+
'            1,'+
'            Math.log10('+
'                amount + 1'+
'            ) * 4'+
'        );'+
''+
''+
'    let xpNeeded ='+
'        getXpNeeded();'+
''+
''+
'    while('+
'        saveData.xp >='+
'        xpNeeded'+
'    ){'+
''+
'        saveData.xp -='+
'            xpNeeded;'+
''+
''+
'        saveData.level++;'+
''+
''+
'        xpNeeded ='+
'            getXpNeeded();'+
''+
''+
'        notify('+
'            "⭐ Niveau "+'+
'            saveData.level+'+
'            " atteint !"'+
'        );'+
''+
'    }'+
''+
''+
'    update();'+
'}'+
''+
''+
'/* ========================================================='+
'   XP'+
'========================================================= */'+
''+
'function getXpNeeded(){'+
''+
'    return Math.floor('+
''+
'        100 *'+
'        Math.pow('+
'            saveData.level,'+
'            1.35'+
'        )'+
''+
'    );'+
'}'+
''+
''+
'/* ========================================================='+
'   CLIC'+
'========================================================= */'+
''+
'document'+
'    .getElementById('+
'        "clickButton"'+
'    )'+
'    .addEventListener('+
'        "click",'+
'        event => {'+
''+
'            if('+
'                isBanned ||'+
'                !saveData'+
'            ){'+
'                return;'+
'            }'+
''+
''+
'            // Effets visuels AZ-5 : ils ne modifient pas les gains du clic.'+
'            const az5Button = event.currentTarget;'+
'            az5Button.classList.remove("az5-pressed");'+
'            document.body.classList.remove("az5-alarm");'+
'            void az5Button.offsetWidth; // relance l\'animation si on clique rapidement'+
'            az5Button.classList.add("az5-pressed");'+
'            document.body.classList.add("az5-alarm");'+
''+
'            const oldAlert = document.getElementById("az5Alert");'+
'            if (oldAlert) oldAlert.remove();'+
'            const az5Alert = document.createElement("div");'+
'            az5Alert.id = "az5Alert";'+
'            az5Alert.className = "az5-alert";'+
'            az5Alert.setAttribute("role", "status");'+
'            az5Alert.textContent = "☢ AZ-5 ACTIVÉ — IMPULSION D\'URGENCE ☢";'+
'            document.body.appendChild(az5Alert);'+
''+
'            window.setTimeout(() => {'+
'                az5Button.classList.remove("az5-pressed");'+
'                document.body.classList.remove("az5-alarm");'+
'                az5Alert.remove();'+
'            }, 1000);'+
''+
'            const gain ='+
'                getClickValue();'+
''+
''+
'            saveData.clicks++;'+
''+
''+
'            addMoney('+
'                gain'+
'            );'+
''+
''+
'            const floating ='+
'                document.createElement('+
'                    "div"'+
'                );'+
''+
''+
'            floating.className ='+
'                "floating";'+
''+
''+
'            floating.textContent ='+
'                "+"+'+
'                formatNumber('+
'                    gain'+
'                )+'+
'                " "+'+
'                getCurrencySymbol();'+
''+
''+
'            floating.style.left ='+
'                event.clientX+'+
'                "px";'+
''+
''+
'            floating.style.top ='+
'                event.clientY+'+
'                "px";'+
''+
''+
'            document.body.appendChild('+
'                floating'+
'            );'+
''+
''+
'            setTimeout('+
'                ()=>{'+
'                    floating.remove();'+
'                },'+
'                850'+
'            );'+
''+
'        }'+
'    );'+
''+
''+
'/* ========================================================='+
'   RENAISSANCE'+
'========================================================= */'+
''+
'const PRESTIGE_REQUIREMENT ='+
'    1e12;'+
''+
''+
'function getPrestigeGain(){'+
''+
'    if('+
'        !saveData ||'+
'        saveData.totalEarned <'+
'        PRESTIGE_REQUIREMENT'+
'    ){'+
''+
'        return 0;'+
'    }'+
''+
''+
'    return Math.max('+
''+
'        1,'+
''+
'        Math.floor('+
''+
'            Math.sqrt('+
'                Math.min(MAX_GAME_VALUE, safeGameNumber(saveData.totalEarned) / PRESTIGE_REQUIREMENT)'+
'            )'+
''+
'        )'+
''+
'    );'+
'}'+
''+
''+
'async function prestige(){'+
''+
'    if('+
'        isBanned ||'+
'        !saveData'+
'    ){'+
'        return;'+
'    }'+
''+
''+
'    const gain ='+
'        getPrestigeGain();'+
''+
''+
'    if(gain <= 0){'+
''+
'        notify('+
''+
'            "🔒 Atteins au moins "+'+
'            formatNumber('+
'                PRESTIGE_REQUIREMENT'+
'            )+'+
'            " "+'+
'            getCurrencySymbol()+'+
'            " de gains."'+
''+
'        );'+
''+
'        return;'+
'    }'+
''+
''+
'    const confirmPrestige ='+
'        confirm('+
''+
'            "Faire une Renaissance ?\\n\\n"+'+
'            "Tu vas perdre ton argent, tes niveaux et tes améliorations.\\n\\n"+'+
'            "Tu conserveras tes Éclats de Renaissance et gagneras +"+'+
'            gain+'+
'            " éclat(s).\\n\\n"+'+
'            "Chaque éclat donne +25 % à tous tes revenus."'+
''+
'        );'+
''+
''+
'    if(!confirmPrestige){'+
'        return;'+
'    }'+
''+
''+
'    saveData.prestige=safeGameAdd(saveData.prestige,1);'+
'    saveData.prestigeShards=safeGameAdd(saveData.prestigeShards,gain);'+
''+
''+
'    saveData.money ='+
'        0;'+
''+
''+
'    saveData.totalEarned ='+
'        0;'+
''+
''+
'    saveData.xp ='+
'        0;'+
''+
''+
'    saveData.level ='+
'        1;'+
''+
''+
'    for('+
'        const upgrade'+
'        of upgradesData'+
'    ){'+
''+
'        saveData.upgrades['+
'            upgrade.id'+
'        ] = 0;'+
''+
'    }'+
''+
'    saveData.upgrades._operation = {'+
'        rbmk1000:0,'+
'        rbmk1500:0,'+
'        chernobyl:0,'+
'        lastTick:Date.now(),'+
'        explosions:0'+
'    };'+
''+
''+
'    await save();'+
''+
''+
'    notify('+
''+
'        "♻️ Renaissance "+'+
'        saveData.prestige+'+
'        " ! Multiplicateur x"+'+
'        getPrestigeMultiplier()'+
'            .toFixed(2)'+
''+
'    );'+
''+
''+
'    update();'+
'}'+
''+
''+
'document'+
'    .getElementById('+
'        "prestigeButton"'+
'    )'+
'    .addEventListener('+
'        "click",'+
'        prestige'+
'    );'+
''+
''+
'/* ========================================================='+
'   SUPER RENAISSANCE & BOUTIQUE OVERPETER'+
'========================================================= */'+
'const overpeterShopItems=['+
'    {id:"power",name:{fr:"Singularité Overpeter",en:"Overpeter Singularity",ru:"Сингулярность Оверпетер"},desc:{fr:"Double le multiplicateur global par niveau",en:"Doubles the global multiplier per level",ru:"Удваивает общий множитель за уровень"},cost:1,growth:3,max:100},'+
'    {id:"click",name:{fr:"Clic omniversel",en:"Omniversal Click",ru:"Вселенский клик"},desc:{fr:"Bonus permanent aux clics",en:"Permanent click bonus",ru:"Постоянный бонус к кликам"},cost:2,growth:4,max:100},'+
'    {id:"auto",name:{fr:"Flux Overpeter",en:"Overpeter Flow",ru:"Поток Оверпетер"},desc:{fr:"Bonus permanent à la production automatique",en:"Permanent automatic-income bonus",ru:"Постоянный бонус к автоматическому доходу"},cost:2,growth:4,max:100}'+
'];'+
'function getOverpeterShopPrice(item){return Math.floor(item.cost*Math.pow(item.growth,Number(saveData?.overpeterShop?.[item.id]||0)));}'+
'function createOverpeterShop(){'+
'    const list=document.getElementById("overpeterShopList");'+
'    if(!list||!saveData)return;'+
'    list.innerHTML="";'+
'    for(const item of overpeterShopItems){'+
'        const level=Number(saveData.overpeterShop?.[item.id]||0),price=getOverpeterShopPrice(item);'+
'        const title=item.name[currentLang]||item.name.fr,desc=item.desc[currentLang]||item.desc.fr;'+
'        const card=document.createElement("div");card.className="shard-item";'+
'        card.innerHTML="<div class=\'shard-item-top\'><div><h4 class=\'shard-item-name\'>"+escapeHtml(title)+"</h4><p class=\'shard-item-desc\'>"+escapeHtml(desc)+"</p></div><div class=\'shard-item-owned\'>"+level+"/"+item.max+"</div></div><button class=\'shard-buy\' type=\'button\'>"+(currentLang==="ru"?"Купить":currentLang==="en"?"Buy":"Acheter")+" · "+formatNumber(price)+" fragment(s)</button>";'+
'        const button=card.querySelector("button");button.disabled=level>=item.max||saveData.overpeterShards<price;'+
'        button.addEventListener("click",()=>{'+
'            if(!saveData||saveData.overpeterShards<price||level>=item.max)return;'+
'            saveData.overpeterShards-=price;saveData.overpeterShop[item.id]=level+1;'+
'            saveData.overpeterShop.spent=Number(saveData.overpeterShop.spent||0)+price;'+
'            notify("🌌 "+title+" · niveau "+(level+1));update();'+
'        });'+
'        list.appendChild(card);'+
'    }'+
'}'+
'function getSuperPrestigeGain(){'+
'    if(!saveData||Number(saveData.prestige||0)<10||Number(saveData.totalEarned||0)<1e24)return 0;'+
'    return Math.max(1,Math.floor(Math.sqrt(Math.min(MAX_GAME_VALUE,safeGameNumber(saveData.totalEarned)/1e24))));'+
'}'+
'async function superPrestige(){'+
'    if(!saveData||isBanned)return;'+
'    const gain=getSuperPrestigeGain();'+
'    if(gain<=0){notify("🔒 Il faut au moins 10 Renaissances et 1e24 de gains pour la Super Renaissance.");return;}'+
'    const promptText=currentLang==="en"?"Launch a Super Rebirth? Money, levels and normal upgrades will reset. Rebirth shards and Overpeter bonuses are kept. You gain "+gain+" Overpeter fragment(s).":currentLang==="ru"?"Начать Супер-возрождение? Деньги, уровни и обычные улучшения сбросятся. Осколки возрождения и бонусы Оверпетер сохранятся. Вы получите фрагменты: "+gain+".":"Lancer une Super Renaissance ? L\'argent, les niveaux et les améliorations normales seront réinitialisés. Les Éclats et bonus Overpeter seront conservés. Tu gagneras "+gain+" fragment(s) Overpeter.";'+
'    if(!confirm("🌌 "+promptText))return;'+
'    saveData.superPrestige=safeGameAdd(saveData.superPrestige||0,1);'+
'    saveData.overpeterShards=safeGameAdd(saveData.overpeterShards||0,gain);'+
'    saveData.prestige=0;saveData.money=0;saveData.totalEarned=0;saveData.xp=0;saveData.level=1;saveData.clicks=0;'+
'    for(const upgrade of upgradesData)saveData.upgrades[upgrade.id]=0;'+
'    saveData.upgrades._shardShop=saveData.upgrades._shardShop||{power:0,click:0,auto:0,spent:0};'+
'    saveData.upgrades._operation={rbmk1000:0,rbmk1500:0,chernobyl:0,lastTick:Date.now(),explosions:0};'+
'    await save();notify("🌌 Super Renaissance "+saveData.superPrestige+" ! +"+gain+" fragment(s) Overpeter.");update();'+
'}'+
'const superPrestigeButton=document.getElementById("superPrestigeButton");'+
'if(superPrestigeButton)superPrestigeButton.addEventListener("click",superPrestige);'+
''+
'/* ========================================================='+
'   AFFICHAGE'+
'========================================================= */'+
''+
'function update(){'+
''+
'    if(!saveData){'+
'        return;'+
'    }'+
''+
''+
'    const click ='+
'        getClickValue();'+
''+
''+
'    const perSecond ='+
'        getPerSecond();'+
''+
''+
'    const multiplier ='+
'        getPrestigeMultiplier();'+
''+
'    const superLevel=document.getElementById("superPrestigeLevel");'+
'    const overpeterBalance=document.getElementById("overpeterShards");'+
'    const superButton=document.getElementById("superPrestigeButton");'+
'    if(superLevel)superLevel.textContent=Number(saveData.superPrestige||0);'+
'    if(overpeterBalance)overpeterBalance.textContent=formatNumber(Number(saveData.overpeterShards||0));'+
'    if(superButton){'+
'        const gain=getSuperPrestigeGain();'+
'        superButton.disabled=gain<=0;'+
'        superButton.textContent=gain>0?(currentLang==="en"?"🌌 Super Rebirth · +":"🌌 Super Renaissance · +")+formatNumber(gain)+(currentLang==="ru"?" фрагм.":" fragment(s)"):(currentLang==="en"?"🔒 Requires 10 Rebirths + 1e24 earned":currentLang==="ru"?"🔒 Нужно 10 возрождений + 1e24":"🔒 Super Renaissance · 10 Renaissances + 1e24 de gains");'+
'    }'+
'    createOverpeterShop();'+
''+
''+
'    document.getElementById('+
'        "money"'+
'    ).textContent ='+
'        formatNumber('+
'            saveData.money'+
'        );'+
''+
''+
'    document.getElementById('+
'        "clickValue"'+
'    ).textContent ='+
'        formatNumber('+
'            click'+
'        );'+
''+
''+
'    document.getElementById('+
'        "perClick"'+
'    ).textContent ='+
'        formatNumber('+
'            click'+
'        );'+
''+
''+
'    document.getElementById('+
'        "perSecond"'+
'    ).textContent ='+
'        formatNumber('+
'            perSecond'+
'        );'+
''+
''+
'    document.getElementById('+
'        "level"'+
'    ).textContent ='+
'        saveData.level;'+
''+
''+
'    document.getElementById('+
'        "prestigeLevel"'+
'    ).textContent ='+
'        saveData.prestige;'+
''+
''+
'    document.getElementById('+
'        "prestigeShards"'+
'    ).textContent ='+
'        saveData.prestigeShards;'+
''+
''+
'    document.getElementById('+
'        "globalMultiplier"'+
'    ).textContent ='+
'        multiplier.toFixed('+
'            2'+
'        );'+
''+
''+
'    document.getElementById('+
'        "totalEarned"'+
'    ).textContent ='+
'        formatNumber('+
'            saveData.totalEarned'+
'        );'+
''+
''+
'    let upgradeCount ='+
'        0;'+
''+
''+
'    for('+
'        const upgrade'+
'        of upgradesData'+
'    ){'+
''+
'        const owned ='+
'            saveData.upgrades['+
'                upgrade.id'+
'            ] || 0;'+
''+
''+
'        upgradeCount +='+
'            owned;'+
''+
'            const bulk ='+
'            getBulkPurchase('+
'                upgrade'+
'            );'+
''+
'        const price ='+
'            bulk.cost;'+
''+
''+
'        const ownedElement ='+
'            document.getElementById('+
'                upgrade.id+'+
'                "Owned"'+
'            );'+
''+
''+
'        const priceElement ='+
'            document.getElementById('+
'                upgrade.id+'+
'                "Price"'+
'            );'+
''+
''+
'        const buyElement ='+
'            document.getElementById('+
'                upgrade.id+'+
'                "Buy"'+
'            );'+
''+
''+
'        if(ownedElement){'+
''+
'            ownedElement.textContent ='+
'                owned;'+
''+
'        }'+
''+
''+
'        if(priceElement){'+
''+
'            priceElement.textContent ='+
'                formatNumber('+
'                    price'+
'                );'+
''+
'        }'+
''+
''+
'        if(buyElement){'+
''+
'            const maxReached ='+
'                upgrade.maxOwned &&'+
'                owned >= upgrade.maxOwned;'+
''+
'            buyElement.disabled ='+
'                maxReached ||'+
'                saveData.money <'+
'                price;'+
''+
'            if(maxReached){'+
'                buyElement.textContent = "✓ Déjà recruté";'+
'            }else{'+
'                buyElement.innerHTML ='+
'                    translations[currentLang].buy+'+
'                    " · <span id=\\""+upgrade.id+"Price\\">"+'+
'                    formatNumber(price)+'+
'                    "</span> <span class=\\"currency-symbol\\">"+'+
'                    getCurrencySymbol()+'+
'                    "</span>";'+
'            }'+
''+
'        }'+
''+
'        updateReactorOperationUI(upgrade);'+
''+
'    }'+
''+
''+
'    document.getElementById('+
'        "upgradeCount"'+
'    ).textContent ='+
'        upgradeCount;'+
''+
''+
'    const xpNeeded ='+
'        getXpNeeded();'+
''+
''+
'    document.getElementById('+
'        "xp"'+
'    ).textContent ='+
'        Math.floor('+
'            saveData.xp'+
'        );'+
''+
''+
'    document.getElementById('+
'        "xpMax"'+
'    ).textContent ='+
'        xpNeeded;'+
''+
''+
'    document.getElementById('+
'        "xpProgress"'+
'    ).style.width ='+
''+
'        Math.min('+
''+
'            saveData.xp /'+
'            xpNeeded *'+
'            100,'+
''+
'            100'+
''+
'        )+'+
'        "%";'+
''+
''+
'    const prestigeGain ='+
'        getPrestigeGain();'+
''+
''+
'    document.getElementById('+
'        "prestigeGain"'+
'    ).textContent ='+
'        prestigeGain;'+
''+
''+
'    const prestigeButton ='+
'        document.getElementById('+
'            "prestigeButton"'+
'        );'+
''+
''+
'    if(prestigeGain > 0){'+
''+
'        prestigeButton.disabled ='+
'            false;'+
''+
''+
'        prestigeButton.textContent ='+
''+
'            "♻️ Renaissance · +"+'+
'            prestigeGain+'+
'            " éclat(s)";'+
''+
'    }'+
'    else{'+
''+
'        prestigeButton.disabled ='+
'            true;'+
''+
''+
'        prestigeButton.textContent ='+
''+
'            "🔒 Renaissance à "+'+
'            formatNumber('+
'                PRESTIGE_REQUIREMENT'+
'            )+'+
'            " "+'+
'            getCurrencySymbol()+'+
'            " de gains";'+
''+
'    }'+
''+
'    updateShardShop();'+
'}'+
''+
''+
'/* ========================================================='+
'   REVENU AUTOMATIQUE'+
'========================================================= */'+
''+
'setInterval('+
'    ()=>{'+
''+
'        if('+
'            !saveData ||'+
'            isBanned'+
'        ){'+
'            return;'+
'        }'+
''+
'        const reactorChanged = updateReactorOperation();'+
'        if(reactorChanged){'+
'            update();'+
'        }'+
''+
''+
'        const income ='+
'            getPerSecond();'+
''+
''+
'        if(income > 0){'+
''+
'            const gain = safeGameNumber(income/10);'+
'            saveData.money=safeGameAdd(saveData.money,gain);'+
'            saveData.totalEarned=safeGameAdd(saveData.totalEarned,gain);'+
'            update();'+
''+
'        }'+
''+
'    },'+
'    100'+
');'+
''+
''+
'/* ========================================================='+
'   SAUVEGARDE AUTO'+
'========================================================= */'+
''+
'setInterval('+
'    ()=>{'+
''+
'        save();'+
''+
'    },'+
'    3000'+
');'+
''+
''+
'/* ========================================================='+
'   NOTIFICATIONS'+
'========================================================= */'+
''+
'function notify('+
'    text'+
'){'+
''+
'    const box ='+
'        document.getElementById('+
'            "notification"'+
'        );'+
''+
''+
'    box.textContent ='+
'        text;'+
''+
''+
'    box.classList.add('+
'        "show"'+
'    );'+
''+
''+
'    clearTimeout('+
'        notificationTimeout'+
'    );'+
''+
''+
'    notificationTimeout ='+
'        setTimeout('+
'            ()=>{'+
''+
'                box.classList.remove('+
'                    "show"'+
'                );'+
''+
'            },'+
'            2000'+
'        );'+
'}'+
''+
''+
'/* ========================================================='+
'   CHANGEMENT DE LANGUE'+
'========================================================= */'+
''+
'function changeLanguage('+
'    lang'+
'){'+
''+
'    if('+
'        !translations[lang]'+
'    ){'+
'        return;'+
'    }'+
''+
''+
'    currentLang ='+
'        lang;'+
''+
''+
'    localStorage.setItem('+
'        "clicker_language",'+
'        lang'+
'    );'+
''+
''+
'    document.documentElement'+
'        .lang ='+
'        lang;'+
''+
''+
'    const t ='+
'        translations['+
'            currentLang'+
'        ];'+
''+
''+
'    const selector ='+
'        document.getElementById('+
'            "languageSelect"'+
'        );'+
''+
''+
'    if(selector){'+
'        selector.value ='+
'            currentLang;'+
'    }'+
''+
''+
'    updateCurrencySymbols();'+
'    createShardShop();'+
''+
''+
'    const moneyTitle ='+
'        document.querySelector('+
'            ".money-title"'+
'        );'+
''+
''+
'    if(moneyTitle){'+
'        moneyTitle.textContent ='+
'            t.empire;'+
'    }'+
''+
''+
'    const statLabels ='+
'        document.querySelectorAll('+
'            ".stat-label"'+
'        );'+
''+
''+
'    if('+
'        statLabels.length >= 4'+
'    ){'+
''+
'        statLabels[0].textContent ='+
'            t.perClick;'+
''+
'        statLabels[1].textContent ='+
'            t.perSecond;'+
''+
'        statLabels[2].textContent ='+
'            t.upgrades;'+
''+
'        statLabels[3].textContent ='+
'            t.totalEarned;'+
''+
'    }'+
''+
''+
'    const shopHeading ='+
'        document.querySelector('+
'            ".shop-header h2"'+
'        );'+
''+
''+
'    if(shopHeading){'+
''+
'        shopHeading.textContent ='+
'            "🛒 "+'+
'            t.shopTitle;'+
''+
'    }'+
''+
''+
'    const shopSub ='+
'        document.querySelector('+
'            ".shop-subtitle"'+
'        );'+
''+
''+
'    if(shopSub){'+
''+
'        shopSub.textContent ='+
'            t.shopSubtitle;'+
''+
'    }'+
''+
''+
'    createShop();'+
''+
''+
'    update();'+
'}'+
''+
''+
'/* ========================================================='+
'   SELECTEUR DE LANGUE'+
'========================================================= */'+
''+
'document'+
'    .getElementById('+
'        "languageSelect"'+
'    )'+
'    .addEventListener('+
'        "change",'+
'        event => {'+
''+
'            changeLanguage('+
'                event.target.value'+
'            );'+
''+
'        }'+
'    );'+
''+
''+
'/* ========================================================='+
'   AUTH SUPABASE AU DÉMARRAGE'+
'========================================================= */'+
''+
'async function start(){'+
''+
'    try{'+
''+
'        const {'+
'            data,'+
'            error'+
'        } ='+
'            await supabaseClient'+
'                .auth'+
'                .getSession();'+
''+
''+
'        if(error){'+
''+
'            console.error('+
'                "Erreur session Supabase:",'+
'                error'+
'            );'+
''+
'            showAuthMessage('+
'                "❌ Impossible de vérifier la session."'+
'            );'+
''+
'            return;'+
'        }'+
''+
''+
'        const session ='+
'            data?.session;'+
''+
''+
'        if(session){'+
''+
'            currentUser ='+
'                session.user;'+
''+
''+
'            await loadGame();'+
''+
'        }'+
'        else{'+
''+
'            document.getElementById('+
'                "authScreen"'+
'            ).style.display ='+
'                "flex";'+
''+
''+
'            document.getElementById('+
'                "gameScreen"'+
'            ).style.display ='+
'                "none";'+
''+
'        }'+
''+
'    }'+
'    catch(error){'+
''+
'        console.error('+
'            "Erreur démarrage:",'+
'            error'+
'        );'+
''+
'        showAuthMessage('+
'            "❌ Erreur de connexion à Supabase."'+
'        );'+
''+
'    }'+
'}'+
''+
''+
'/* ========================================================='+
'   ONGLETS AUTH'+
'========================================================= */'+
''+
'document'+
'    .getElementById('+
'        "loginTab"'+
'    )'+
'    .addEventListener('+
'        "click",'+
'        ()=>{'+
''+
'            document'+
'                .getElementById('+
'                    "loginTab"'+
'                )'+
'                .classList.add('+
'                    "active"'+
'                );'+
''+
''+
'            document'+
'                .getElementById('+
'                    "registerTab"'+
'                )'+
'                .classList.remove('+
'                    "active"'+
'                );'+
''+
''+
'            document'+
'                .getElementById('+
'                    "loginForm"'+
'                )'+
'                .classList.add('+
'                    "active"'+
'                );'+
''+
''+
'            document'+
'                .getElementById('+
'                    "registerForm"'+
'                )'+
'                .classList.remove('+
'                    "active"'+
'                );'+
''+
''+
'            showAuthMessage('+
'                ""'+
'            );'+
''+
'        }'+
'    );'+
''+
''+
'document'+
'    .getElementById('+
'        "registerTab"'+
'    )'+
'    .addEventListener('+
'        "click",'+
'        ()=>{'+
''+
'            document'+
'                .getElementById('+
'                    "registerTab"'+
'                )'+
'                .classList.add('+
'                    "active"'+
'                );'+
''+
''+
'            document'+
'                .getElementById('+
'                    "loginTab"'+
'                )'+
'                .classList.remove('+
'                    "active"'+
'                );'+
''+
''+
'            document'+
'                .getElementById('+
'                    "registerForm"'+
'                )'+
'                .classList.add('+
'                    "active"'+
'                );'+
''+
''+
'            document'+
'                .getElementById('+
'                    "loginForm"'+
'                )'+
'                .classList.remove('+
'                    "active"'+
'                );'+
''+
''+
'            showAuthMessage('+
'                ""'+
'            );'+
''+
'        }'+
'    );'+
''+
''+
'/* ========================================================='+
'   FORMULAIRES'+
'========================================================= */'+
''+
'document'+
'    .getElementById("loginSubmit")'+
'    .addEventListener("click", async () => {'+
'        const form = document.getElementById("loginForm");'+
'        if (!form.reportValidity()) return;'+
'        try {'+
'            await login();'+
'        } catch (error) {'+
'            console.error("Erreur de connexion Supabase:", error);'+
'            showAuthMessage("❌ Connexion impossible. Vérifie la connexion réseau et la console.");'+
'        }'+
'    });'+
''+
''+
'document'+
'    .getElementById("registerSubmit")'+
'    .addEventListener("click", async () => {'+
'        const form = document.getElementById("registerForm");'+
'        if (!form.reportValidity()) return;'+
'        try {'+
'            await register();'+
'        } catch (error) {'+
'            console.error("Erreur d\'inscription Supabase:", error);'+
'            showAuthMessage("❌ Inscription impossible. Vérifie la connexion réseau et la console.");'+
'        }'+
'    });'+
''+
''+
'/* ========================================================='+
'   SESSION'+
'========================================================= */'+
''+
'supabaseClient'+
'    .auth'+
'    .onAuthStateChange('+
'        async('+
'            event,'+
'            session'+
'        )=>{'+
''+
'            if('+
'                event ==='+
'                "SIGNED_OUT"'+
'            ){'+
''+
'                currentUser ='+
'                    null;'+
''+
'                currentUsername ='+
'                    null;'+
''+
'                saveData ='+
'                    null;'+
''+
'                isAdmin ='+
'                    false;'+
''+
'                adminPlayers ='+
'                    [];'+
''+
'                document'+
'                    .getElementById('+
'                        "adminButton"'+
'                    )'+
'                    ?.classList'+
'                    .remove('+
'                        "show"'+
'                    );'+
''+
'                closeAdminPanel();'+
''+
'            }'+
''+
'        }'+
'    );'+
''+
''+
'/* ========================================================='+
'   SURVEILLANCE BAN'+
'========================================================= */'+
''+
'setInterval('+
'    async()=>{'+
''+
'        if('+
''+
'            currentUser &&'+
''+
'            !isBanned &&'+
''+
'            document.getElementById('+
'                "gameScreen"'+
'            ).style.display !=='+
'                "none"'+
''+
'        ){'+
''+
'            await checkBan();'+
''+
'        }'+
''+
'    },'+
'    5000'+
');'+
''+
''+
'/* ========================================================='+
'   INITIALISATION'+
'========================================================= */'+
''+
'changeLanguage('+
'    currentLang'+
');'+
''+
'start();'+
''+
'</script>'+
''+
'</body>'+
'</html>';

if (typeof document !== "undefined") {
    document.open();
    document.write(html);
    document.close();
}