import{u as V,r as a,c as j,o as U,a as v,b as h,d as e,e as S,w as o,v as M,f as m,g as f,t as p,F as N,l as L}from"./index-NDOucOLP.js";const B={class:"w-full h-screen flex flex-col items-center bg-white p-4"},F=["src"],D={class:"bg-white w-full flex flex-col justify-end items-center mt-5"},H={class:"rounded-lg border bg-card text-card-foreground shadow-sm m-4","data-v0-t":"card"},O=["innerHTML"],R={key:0,class:"bg-white flex flex-col justify-end items-center mt-5"},q=e("option",{value:"",selected:""},"부지의 목적을 선택해주세요",-1),z=e("option",{value:"음식점"},"음식점",-1),E=e("option",{value:"농사"},"농사",-1),J=e("option",{value:"가게"},"가게",-1),P=[q,z,E,J],$={key:1,class:"bg-white w-full flex flex-col justify-end items-center mt-5"},A={class:"relative inline-flex items-center cursor-pointer"},G=e("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"},null,-1),I={class:"ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"},K={class:"relative inline-flex items-center cursor-pointer mt-5"},Q=e("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"},null,-1),W={class:"ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"},X={class:"relative inline-flex items-center cursor-pointer mt-5"},Y=e("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"},null,-1),Z={class:"ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"},ee={class:"relative inline-flex items-center cursor-pointer mt-5"},te=e("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"},null,-1),re={class:"ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"},ae={class:"relative inline-flex items-center cursor-pointer mt-5"},se=e("div",{class:"w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"},null,-1),le={class:"ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"},oe={key:0,class:"fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"},ne=e("div",{class:"text-center text-white"},[e("p",{class:"text-xl font-semibold"},"부지렁이가 움직이는 중...")],-1),ue=[ne],de={__name:"Step2",setup(ie){const _=V(),b=a(""),s=a(0),x=a(!1),g=a(!1),l=a(""),n=a(!1),u=a(!1),i=a(!1),c=a(!1),d=a(!1),w=j(()=>b.value.substring(0,s.value)),T=y=>{b.value=y,k()},k=()=>{if(s.value==b.value.length){x.value=!0;return}b.value.substring(s.value,s.value+1)=="<"?s.value+=4:s.value++,setTimeout(k,50)};U(()=>{T("안녕하세요!<br/>부지렁이입니다!<br/>제주 위성데이터를 활용하여<br/>제주도의 좋은 부지를 추천해드릴게요!<br/><br/>부지의 목적과 세부옵션을 선택해주세요!")});const C=async()=>{if(l.value==""||l.value!="음식점"){alert(`부지의 목적을 선택해주세요.
현재 음식점만 선택이 가능합니다!`);return}g.value=!0;const t=await(await fetch("/api/getRecommender",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({businessType:l.value,similarCnt:n.value,userCnt:u.value,visitCnt:i.value,workCnt:c.value,liveCnt:d.value})})).json();if(!t.result){alert(t.error),g.value=!1;return}g.value=!1,_.push({path:"/step3",query:{businessType:l.value,similarCnt:n.value,userCnt:u.value,visitCnt:i.value,workCnt:c.value,liveCnt:d.value,mapName:t.data[0]}})};return(y,t)=>(v(),h(N,null,[e("div",B,[e("img",{className:"mt-16 mx-auto",src:S(L)},null,8,F),e("div",D,[e("div",H,[e("div",{class:"py-4 px-6 text-sm text-gray-500 dark:text-gray-400",innerHTML:w.value},null,8,O)])]),x.value?(v(),h("div",R,[o(e("select",{"onUpdate:modelValue":t[0]||(t[0]=r=>l.value=r),class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"},P,512),[[M,l.value]])])):m("",!0),x.value?(v(),h("div",$,[e("label",A,[o(e("input",{type:"checkbox",value:"True",class:"sr-only peer","onUpdate:modelValue":t[1]||(t[1]=r=>n.value=r)},null,512),[[f,n.value]]),G,e("span",I,"유사업종이 "+p(n.value?"많은":"적은")+" 곳",1)]),e("label",K,[o(e("input",{type:"checkbox",value:"True",class:"sr-only peer","onUpdate:modelValue":t[2]||(t[2]=r=>u.value=r)},null,512),[[f,u.value]]),Q,e("span",W,"이용자수가 "+p(u.value?"많은":"적은")+" 곳",1)]),e("label",X,[o(e("input",{type:"checkbox",value:"True",class:"sr-only peer","onUpdate:modelValue":t[3]||(t[3]=r=>i.value=r)},null,512),[[f,i.value]]),Y,e("span",Z,"방문인구가 "+p(i.value?"많은":"적은")+" 곳",1)]),e("label",ee,[o(e("input",{type:"checkbox",value:"True",class:"sr-only peer","onUpdate:modelValue":t[4]||(t[4]=r=>c.value=r)},null,512),[[f,c.value]]),te,e("span",re,"근무인구가 "+p(c.value?"많은":"적은")+" 곳",1)]),e("label",ae,[o(e("input",{type:"checkbox",value:"True",class:"sr-only peer","onUpdate:modelValue":t[5]||(t[5]=r=>d.value=r)},null,512),[[f,d.value]]),se,e("span",le,"거주인구가 "+p(d.value?"많은":"적은")+" 곳",1)]),e("button",{onClick:t[6]||(t[6]=r=>C()),class:"mt-10 inline-flex items-center justify-center text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-blue-500 text-white font-bold py-2 px-8 rounded"}," 추천받기 ")])):m("",!0)]),g.value?(v(),h("div",oe,ue)):m("",!0)],64))}};export{de as default};