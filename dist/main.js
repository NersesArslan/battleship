(()=>{"use strict";const e=e=>{let t=0;return{length:e,hit:()=>{t++},isSunk:()=>t===e,hits:t}};e(5),e(4),e(3),e(3),e(2);let t=[];(()=>{for(let e=0;e<10;e++){t[e]=[];for(let r=0;r<10;r++)t[e][r]=0}})(),console.log(((e,t)=>{let r=t[0],l=t[1],n=[];if(r<0||r>9||l<0||l>9)return"Please enter valid coordinates";for(let e=0;e<4;e++)n[e]=[r+e,l];return n})(0,[4,4]))})();