import{u as C,r as a,c as V,o as U,a as h,b as m,d as e,e as j,w as s,v as S,f as x,g as c,t as f,l as M}from"./index-X1NvFDHz.js";const N={class:"w-full h-screen flex flex-col items-center bg-white p-4"},B=["src"],L={class:"bg-white w-full flex flex-col justify-end items-center mt-5"},D={class:"rounded-lg border bg-card text-card-foreground shadow-sm m-4","data-v0-t":"card"},H=["innerHTML"],O={key:0,class:"bg-white flex flex-col justify-end items-center mt-5"},R=e("option",{value:"",selected:""},"부지의 목적을 선택해주세요",-1),q=e("option",{value:"음식점"},"음식점",-1),E=e("option",{value:"농사"},"농사",-1),F=e("option",{value:"가게"},"가게",-1),J=[R,q,E,F],P={key:1,class:"bg-white w-full flex flex-col justify-end items-center mt-5"},$={class:"relative inline-flex items-center cursor-pointer"},z=e("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"},null,-1),A={class:"ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"},G={class:"relative inline-flex items-center cursor-pointer mt-5"},I=e("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"},null,-1),K={class:"ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"},Q={class:"relative inline-flex items-center cursor-pointer mt-5"},W=e("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"},null,-1),X={class:"ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"},Y={class:"relative inline-flex items-center cursor-pointer mt-5"},Z=e("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"},null,-1),ee={class:"ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"},te={class:"relative inline-flex items-center cursor-pointer mt-5"},re=e("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"},null,-1),ae={class:"ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"},oe={__name:"Step2",setup(le){const k=C(),p=a(""),l=a(0),g=a(!1),b=a(""),o=a(!1),n=a(!1),u=a(!1),i=a(!1),d=a(!1),_=V(()=>p.value.substring(0,l.value)),w=v=>{p.value=v,y()},y=()=>{if(l.value==p.value.length){g.value=!0;return}p.value.substring(l.value,l.value+1)=="<"?l.value+=4:l.value++,setTimeout(y,50)};U(()=>{w("안녕하세요!<br/>부지렁이입니다!<br/>제주 위성데이터를 활용하여<br/>제주도의 좋은 부지를 추천해드릴게요!<br/><br/>부지의 목적과 세부옵션을 선택해주세요!")});const T=async()=>{const t=await(await fetch("/api/getRecommender",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({businessType:b.value,similarCnt:o.value,userCnt:n.value,visitCnt:u.value,workCnt:i.value,liveCnt:d.value})})).json();if(!t.result){alert(t.error);return}k.push({path:"/step3",query:{businessType:b.value,similarCnt:o.value,userCnt:n.value,visitCnt:u.value,workCnt:i.value,liveCnt:d.value,mapName:t.data[0]}})};return(v,t)=>(h(),m("div",N,[e("img",{className:"mt-16 mx-auto",src:j(M)},null,8,B),e("div",L,[e("div",D,[e("div",{class:"py-4 px-6 text-sm text-gray-500 dark:text-gray-400",innerHTML:_.value},null,8,H)])]),g.value?(h(),m("div",O,[s(e("select",{"onUpdate:modelValue":t[0]||(t[0]=r=>b.value=r),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},J,512),[[S,b.value]])])):x("",!0),g.value?(h(),m("div",P,[e("label",$,[s(e("input",{type:"checkbox",value:"True",class:"sr-only peer","onUpdate:modelValue":t[1]||(t[1]=r=>o.value=r)},null,512),[[c,o.value]]),z,e("span",A,"유사업종이 "+f(o.value?"많은":"적은")+" 곳",1)]),e("label",G,[s(e("input",{type:"checkbox",value:"True",class:"sr-only peer","onUpdate:modelValue":t[2]||(t[2]=r=>n.value=r)},null,512),[[c,n.value]]),I,e("span",K,"이용자수가 "+f(n.value?"많은":"적은")+" 곳",1)]),e("label",Q,[s(e("input",{type:"checkbox",value:"True",class:"sr-only peer","onUpdate:modelValue":t[3]||(t[3]=r=>u.value=r)},null,512),[[c,u.value]]),W,e("span",X,"방문인구가 "+f(u.value?"많은":"적은")+" 곳",1)]),e("label",Y,[s(e("input",{type:"checkbox",value:"True",class:"sr-only peer","onUpdate:modelValue":t[4]||(t[4]=r=>i.value=r)},null,512),[[c,i.value]]),Z,e("span",ee,"근무인구가 "+f(i.value?"많은":"적은")+" 곳",1)]),e("label",te,[s(e("input",{type:"checkbox",value:"True",class:"sr-only peer","onUpdate:modelValue":t[5]||(t[5]=r=>d.value=r)},null,512),[[c,d.value]]),re,e("span",ae,"거주인구가 "+f(d.value?"많은":"적은")+" 곳",1)]),e("button",{onClick:t[6]||(t[6]=r=>T()),class:"mt-10 inline-flex items-center justify-center text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-blue-500 text-white font-bold py-2 px-8 rounded"}," 추천받기 ")])):x("",!0)]))}};export{oe as default};