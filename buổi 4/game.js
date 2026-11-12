"use strict";
// Chuyển logic anhhung.js sang giao diện DOM và lượt bất đồng bộ.
const $ = id => document.getElementById(id);
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
let hero, dragon, busy = false, ended = false, automatic = false, turn = 0, generation = 0;
let soundEnabled = true, audio;
const roles = {a:[15,-10,-5], b:[-15,10,5], c:[-15,0,15]};
function init() {
  generation++; automatic = false; busy = false; ended = false; turn = 0;
  const level = 2, xp = 150 * (level - 1) + 200, skillPoint = 5 + xp / 10;
  const [s,a,i] = roles[$('role').value];
  const name = $('name').value.trim() || 'Anh hùng';
  // Giữ phần kiểm tra tên của bài gốc; tên chính xác nhận +5 INT.
  const memoryBonus = name === 'Mã Tuấn Kiệt' ? 5 : -5;
  const maxHP = $('mode').value === 'demo' ? 1200 : 105;
  hero = {name, maxHP, hp:maxHP, str:.6*skillPoint+.1*xp+s, agi:.2*skillPoint+.2*xp+a, int:.2*skillPoint+10*level+memoryBonus+i};
  dragon = {hp:600,maxHP:600,str:100,agi:15,int:80};
  $('heroName').textContent = name;
  $('stats').textContent = `STR ${hero.str} · AGI ${hero.agi} · INT ${hero.int}`;
  $('hero').className = 'fighter hero'; $('dragon').className = 'fighter dragon';
  $('effects').replaceChildren(); $('log').replaceChildren();
  $('banner').textContent = 'Thanh kiếm đã sẵn sàng.';
  log($('mode').value === 'demo' ? 'Chế độ biểu diễn: chỉ tăng HP anh hùng lên 1200; công thức sát thương giữ nguyên.' : 'Chế độ gốc: anh hùng 105 HP, Rồng Già 600 HP.');
  render();
}
function render() {
  for(const [id,unit] of [['hero',hero],['dragon',dragon]]) {
    $(id+'HP').textContent = `${unit.hp} / ${unit.maxHP} HP`;
    $(id+'Bar').style.width = `${unit.hp/unit.maxHP*100}%`;
  }
  $('round').textContent = String(Math.max(1,turn)).padStart(2,'0');
  $('attack').disabled = busy || ended || automatic;
  $('auto').disabled = ended;
  $('auto').textContent = automatic ? 'Ⅱ Dừng tự động' : '▶ Tự động';
  $('auto').setAttribute('aria-pressed',String(automatic));
  $('reset').disabled = busy;
  for(const id of ['name','role','mode']) $(id).disabled = busy || automatic;
}
function log(message) {const li=document.createElement('li');li.textContent=message;$('log').prepend(li);while($('log').children.length>80)$('log').lastChild.remove();}
async function unlockAudio(){try{if(!audio)audio=new (window.AudioContext||window.webkitAudioContext)();if(audio.state==='suspended')await audio.resume();}catch{soundEnabled=false;$('sound').textContent='Âm thanh không khả dụng';}}
function tone(from,to,duration,type='sine',volume=.12,delay=0){
  if(!soundEnabled||!audio)return;
  const start=audio.currentTime+delay,osc=audio.createOscillator(),gain=audio.createGain();
  osc.type=type;osc.frequency.setValueAtTime(from,start);osc.frequency.exponentialRampToValueAtTime(Math.max(1,to),start+duration);
  gain.gain.setValueAtTime(.001,start);gain.gain.linearRampToValueAtTime(volume,start+.015);gain.gain.exponentialRampToValueAtTime(.001,start+duration);
  osc.connect(gain);gain.connect(audio.destination);osc.start(start);osc.stop(start+duration+.02);
}
function sound(kind){if(kind==='sword')tone(950,120,.2,'sawtooth',.06);if(kind==='fire')tone(160,35,.55,'sawtooth',.1);if(kind==='hit'){tone(110,35,.16,'triangle',.25);tone(600,60,.12,'square',.04);}if(kind==='miss')tone(550,1000,.1,'sine',.05);if(kind==='win')[440,554,659,880].forEach((f,i)=>tone(f,f,.3,'triangle',.12,i*.12));if(kind==='lose')tone(240,45,.8,'triangle',.16);}
function effect(className,x,y,text='',life=1000){const el=document.createElement('div');el.className=className;el.style.left=x+'%';el.style.top=y+'%';el.textContent=text;$('effects').append(el);setTimeout(()=>el.remove(),life);return el;}
function animate(id,name,ms=550){const el=$(id);el.classList.add(name);setTimeout(()=>el.classList.remove(name),ms);}
function impact(target,damage,critical,hit){
  const x=target==='hero'?24:73;
  effect('damage'+(!hit?' miss':critical?' critical':''),x,48,hit?`${critical?'CHÍ MẠNG ':''}−${damage}`:'NÉ ĐÒN');
  animate(target,hit?'hurt':'dodge');sound(hit?'hit':'miss');
  if(hit){animate('arena','shake',350);for(let i=0;i<14;i++){const p=effect('spark',x+3,66,'',650);const angle=Math.random()*Math.PI*2;p.style.setProperty('--x',Math.cos(angle)*100+'px');p.style.setProperty('--y',Math.sin(angle)*80+'px');}}
}
// Code gốc: hit nếu random*100 > AGI đối thủ; chí mạng cộng thêm STR*2.
function roll(attacker,defender){const hit=Math.random()*100>defender.agi;const critical=hit&&Math.random()*100<attacker.int;return {hit,critical,damage:hit?attacker.str*(critical?3:1):0};}
function finish(){
  if(hero.hp>0&&dragon.hp>0)return false;
  ended=true;automatic=false;const won=dragon.hp<=0;
  $(won?'dragon':'hero').classList.add('dead');
  $('banner').textContent=won?'CHIẾN THẮNG! Bạn đã hạ Rồng Già.':'THẤT BẠI! Anh hùng đã gục ngã.';
  log($('banner').textContent);sound(won?'win':'lose');return true;
}
async function strike(attacker,defender,id,target){
  const result=roll(attacker,defender);
  $('banner').textContent=id==='hero'?'TRẢM LONG! Anh hùng vung kiếm…':'HỎA CẦU! Rồng phun lửa…';
  animate(id,'lunge');sound(id==='hero'?'sword':'fire');
  if(id==='dragon')effect('fireball',67,56,'',550);
  await wait(480);
  if(id==='hero')effect('slash',69,49,'',450);
  defender.hp=Math.max(0,defender.hp-result.damage);
  impact(target,result.damage,result.critical,result.hit);render();
  log(`Lượt ${turn} · ${id==='hero'?hero.name:'Rồng Già'}: ${result.hit?`${result.critical?'CHÍ MẠNG! ':''}Gây ${result.damage} sát thương.`:'Đối thủ né được đòn!'}`);
  await wait(650);
}
async function battleTurn(){
  if(busy||ended)return;busy=true;turn++;render();
  try{await strike(hero,dragon,'hero','dragon');if(!finish()){await strike(dragon,hero,'dragon','hero');if(!finish())$('banner').textContent='Sẵn sàng cho lượt tiếp theo.';}}
  finally{busy=false;render();}
  const token=generation;
  if(automatic&&!ended){await wait(650);if(token===generation&&automatic&&!busy)battleTurn();}
}
$('attack').addEventListener('click',async()=>{await unlockAudio();battleTurn();});
$('auto').addEventListener('click',async()=>{await unlockAudio();automatic=!automatic;render();if(automatic&&!busy)battleTurn();});
$('reset').addEventListener('click',init);
$('sound').addEventListener('click',async()=>{soundEnabled=!soundEnabled;if(soundEnabled)await unlockAudio();$('sound').textContent=`♫ Âm thanh: ${soundEnabled?'bật':'tắt'}`;$('sound').setAttribute('aria-pressed',String(soundEnabled));});
document.addEventListener('keydown',e=>{if(e.code==='Space'&&!e.repeat&&!['INPUT','SELECT','BUTTON','TEXTAREA'].includes(document.activeElement.tagName)){e.preventDefault();if(!$('attack').disabled)$('attack').click();}});
init();
