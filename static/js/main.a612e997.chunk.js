(this["webpackJsonptodo-machine"]=this["webpackJsonptodo-machine"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,C){},function(e,t,C){},function(e,t,C){},function(e,t,C){},function(e,t,C){},function(e,t,C){},function(e,t,C){},function(e,t,C){},function(e,t,C){},function(e,t,C){},function(e,t,C){"use strict";C.r(t);var n=C(1),o=C.n(n),r=C(4),c=C.n(r),a=C(6),l=C(2);var i=C(0),s=o.a.createContext();function u(e){var t=function(e,t){var C=o.a.useState(!1),n=Object(l.a)(C,2),r=n[0],c=n[1],a=o.a.useState(!0),i=Object(l.a)(a,2),s=i[0],u=i[1],d=o.a.useState(t),f=Object(l.a)(d,2),j=f[0],p=f[1];return o.a.useEffect((function(){setTimeout((function(){try{var C,n=localStorage.getItem(e);n?C=JSON.parse(n):(localStorage.setItem(e,JSON.stringify([t])),C=[t]),p(C),u(!1)}catch(r){c(r)}}),1e3)})),{item:j,saveItem:function(t){try{var C=JSON.stringify(t);localStorage.setItem(e,C),p(t)}catch(r){c(r)}},loading:s,error:r}}("TODOS_V1",[]),C=t.item,n=t.saveItem,r=t.loading,c=t.error,u=o.a.useState(""),d=Object(l.a)(u,2),f=d[0],j=d[1],p=o.a.useState(!1),m=Object(l.a)(p,2),O=m[0],h=m[1],b=C.filter((function(e){return!!e.completed})).length,x=C.length,v=[];v=!f.length>=1?C:C.filter((function(e){var t=e.text.toLowerCase(),C=f.toLowerCase();return t.includes(C)}));return Object(i.jsx)(s.Provider,{value:{loading:r,error:c,totalTodos:x,completedTodos:b,searchValue:f,setSearchValue:j,searchedTodos:v,addTodo:function(e){var t=Object(a.a)(C);t.push({completed:!1,text:e}),n(t)},completeTodo:function(e){var t=C.findIndex((function(t){return t.text===e})),o=Object(a.a)(C);o[t].completed=!0,n(o)},deleteTodo:function(e){var t=C.findIndex((function(t){return t.text===e})),o=Object(a.a)(C);o.splice(t,1),n(o)},openModal:O,setOpenModal:h},children:e.children})}C(13);function d(){var e=o.a.useContext(s),t=e.totalTodos,C=e.completedTodos;return Object(i.jsxs)("h2",{className:"TodoCounter",children:[" You have completed ",C," of ",t," TODOs "]})}C(14);var f,j,p,m,O,h=["title","titleId"];function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var C=arguments[t];for(var n in C)Object.prototype.hasOwnProperty.call(C,n)&&(e[n]=C[n])}return e},b.apply(this,arguments)}function x(e,t){if(null==e)return{};var C,n,o=function(e,t){if(null==e)return{};var C,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)C=r[n],t.indexOf(C)>=0||(o[C]=e[C]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)C=r[n],t.indexOf(C)>=0||Object.prototype.propertyIsEnumerable.call(e,C)&&(o[C]=e[C])}return o}function v(e,t){var C=e.title,o=e.titleId,r=x(e,h);return n.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:768,viewBox:"0 0 768 768",height:768,ref:t,"aria-labelledby":o},r),C?n.createElement("title",{id:o},C):null,f||(f=n.createElement("path",{fill:"#FFF",d:"M-76.8 -76.8H844.8000000000001V844.8000000000001H-76.8z"})),j||(j=n.createElement("path",{fill:"#FFF",d:"M-76.8 -76.8H844.8000000000001V844.8000000000001H-76.8z"})),p||(p=n.createElement("path",{fill:"#FFF",d:"M-76.8 -76.8H844.8000000000001V844.8000000000001H-76.8z"})),m||(m=n.createElement("path",{fill:"#2ECC71",d:"M 768 384 C 768 596 596 768 384 768 C 172 768 0 596 0 384 C 0 172 172 0 384 0 C 596 0 768 172 768 384 Z M 768 384",fillRule:"evenodd"})),O||(O=n.createElement("path",{fill:"#ECF0F1",d:"M 123.832031 392.5 L 327.5 596.167969 L 644.167969 279.5 L 576.332031 211.5 L 327.5 460.5 L 191.667969 324.667969 Z M 123.832031 392.5",fillRule:"evenodd"})))}var g,F,y,T,M,L,w,E,I,k,S=n.forwardRef(v),D=(C.p,["title","titleId"]);function N(){return N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var C=arguments[t];for(var n in C)Object.prototype.hasOwnProperty.call(C,n)&&(e[n]=C[n])}return e},N.apply(this,arguments)}function H(e,t){if(null==e)return{};var C,n,o=function(e,t){if(null==e)return{};var C,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)C=r[n],t.indexOf(C)>=0||(o[C]=e[C]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)C=r[n],t.indexOf(C)>=0||Object.prototype.propertyIsEnumerable.call(e,C)&&(o[C]=e[C])}return o}function V(e,t){var C=e.title,o=e.titleId,r=H(e,D);return n.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",width:768,viewBox:"0 0 768 768",height:768,ref:t,"aria-labelledby":o},r),C?n.createElement("title",{id:o},C):null,g||(g=n.createElement("path",{fill:"#FFF",d:"M-76.8 -76.8H844.8000000000001V844.8000000000001H-76.8z"})),F||(F=n.createElement("path",{fill:"#FFF",d:"M-76.8 -76.8H844.8000000000001V844.8000000000001H-76.8z"})),y||(y=n.createElement("path",{fill:"#FFF",d:"M-76.8 -76.8H844.8000000000001V844.8000000000001H-76.8z"})),T||(T=n.createElement("path",{fill:"#FF8D8D",d:"M 768.582031 383.917969 C 768.582031 390.203125 768.425781 396.488281 768.117188 402.765625 C 767.808594 409.046875 767.347656 415.3125 766.730469 421.570312 C 766.113281 427.828125 765.34375 434.066406 764.421875 440.285156 C 763.5 446.503906 762.425781 452.695312 761.199219 458.863281 C 759.972656 465.027344 758.59375 471.160156 757.066406 477.257812 C 755.539062 483.359375 753.863281 489.414062 752.039062 495.429688 C 750.214844 501.445312 748.242188 507.414062 746.125 513.335938 C 744.003906 519.253906 741.742188 525.117188 739.335938 530.925781 C 736.933594 536.734375 734.386719 542.480469 731.695312 548.164062 C 729.007812 553.847656 726.183594 559.460938 723.21875 565.007812 C 720.253906 570.550781 717.15625 576.019531 713.925781 581.414062 C 710.691406 586.804688 707.332031 592.113281 703.835938 597.34375 C 700.34375 602.570312 696.726562 607.707031 692.980469 612.757812 C 689.234375 617.808594 685.367188 622.765625 681.378906 627.625 C 677.390625 632.484375 673.285156 637.242188 669.0625 641.902344 C 664.84375 646.558594 660.507812 651.113281 656.0625 655.558594 C 651.617188 660.003906 647.066406 664.335938 642.40625 668.558594 C 637.746094 672.78125 632.988281 676.886719 628.128906 680.875 C 623.269531 684.863281 618.3125 688.730469 613.265625 692.472656 C 608.214844 696.21875 603.074219 699.839844 597.847656 703.332031 C 592.621094 706.824219 587.3125 710.1875 581.917969 713.421875 C 576.527344 716.652344 571.058594 719.75 565.511719 722.714844 C 559.96875 725.675781 554.351562 728.503906 548.667969 731.191406 C 542.988281 733.878906 537.242188 736.425781 531.433594 738.832031 C 525.625 741.238281 519.757812 743.5 513.839844 745.617188 C 507.921875 747.734375 501.953125 749.707031 495.9375 751.53125 C 489.917969 753.359375 483.863281 755.035156 477.765625 756.5625 C 471.664062 758.089844 465.53125 759.464844 459.367188 760.691406 C 453.199219 761.917969 447.007812 762.992188 440.789062 763.914062 C 434.570312 764.839844 428.332031 765.609375 422.074219 766.226562 C 415.816406 766.84375 409.550781 767.304688 403.269531 767.613281 C 396.992188 767.921875 390.707031 768.074219 384.421875 768.074219 C 378.132812 768.074219 371.851562 767.921875 365.570312 767.613281 C 359.292969 767.304688 353.023438 766.84375 346.765625 766.226562 C 340.507812 765.609375 334.273438 764.839844 328.050781 763.914062 C 321.832031 762.992188 315.640625 761.917969 309.476562 760.691406 C 303.308594 759.464844 297.175781 758.089844 291.078125 756.5625 C 284.980469 755.035156 278.921875 753.359375 272.90625 751.535156 C 266.886719 749.707031 260.921875 747.734375 255 745.617188 C 249.082031 743.5 243.21875 741.238281 237.410156 738.832031 C 231.601562 736.425781 225.855469 733.878906 220.171875 731.191406 C 214.488281 728.503906 208.875 725.675781 203.328125 722.714844 C 197.785156 719.75 192.316406 716.652344 186.921875 713.421875 C 181.53125 710.1875 176.21875 706.824219 170.992188 703.332031 C 165.765625 699.839844 160.625 696.222656 155.578125 692.476562 C 150.527344 688.730469 145.570312 684.863281 140.710938 680.875 C 135.851562 676.886719 131.09375 672.78125 126.433594 668.558594 C 121.777344 664.335938 117.222656 660.003906 112.777344 655.558594 C 108.332031 651.113281 104 646.558594 99.777344 641.902344 C 95.554688 637.242188 91.449219 632.484375 87.460938 627.625 C 83.472656 622.761719 79.605469 617.808594 75.859375 612.757812 C 72.117188 607.707031 68.496094 602.570312 65.003906 597.34375 C 61.511719 592.113281 58.148438 586.804688 54.914062 581.414062 C 51.683594 576.019531 48.585938 570.550781 45.621094 565.007812 C 42.65625 559.460938 39.832031 553.847656 37.144531 548.164062 C 34.457031 542.480469 31.910156 536.734375 29.503906 530.925781 C 27.097656 525.117188 24.835938 519.253906 22.71875 513.335938 C 20.597656 507.414062 18.628906 501.445312 16.800781 495.429688 C 14.976562 489.414062 13.300781 483.355469 11.773438 477.257812 C 10.246094 471.160156 8.867188 465.027344 7.640625 458.863281 C 6.414062 452.695312 5.339844 446.503906 4.417969 440.285156 C 3.496094 434.066406 2.726562 427.828125 2.109375 421.570312 C 1.496094 415.3125 1.03125 409.046875 0.722656 402.765625 C 0.414062 396.488281 0.261719 390.203125 0.261719 383.917969 C 0.261719 377.628906 0.414062 371.347656 0.722656 365.066406 C 1.03125 358.785156 1.496094 352.519531 2.109375 346.261719 C 2.726562 340.003906 3.496094 333.765625 4.417969 327.546875 C 5.339844 321.328125 6.414062 315.136719 7.640625 308.96875 C 8.867188 302.804688 10.246094 296.671875 11.773438 290.570312 C 13.300781 284.472656 14.976562 278.417969 16.800781 272.398438 C 18.628906 266.382812 20.597656 260.414062 22.71875 254.496094 C 24.835938 248.578125 27.097656 242.710938 29.503906 236.902344 C 31.910156 231.09375 34.457031 225.347656 37.144531 219.664062 C 39.832031 213.980469 42.65625 208.367188 45.621094 202.824219 C 48.585938 197.277344 51.683594 191.808594 54.914062 186.417969 C 58.148438 181.023438 61.511719 175.714844 65.003906 170.488281 C 68.496094 165.257812 72.117188 160.121094 75.859375 155.070312 C 79.605469 150.019531 83.472656 145.066406 87.460938 140.207031 C 91.449219 135.347656 95.554688 130.585938 99.777344 125.929688 C 104 121.269531 108.332031 116.71875 112.777344 112.273438 C 117.222656 107.828125 121.777344 103.492188 126.433594 99.273438 C 131.09375 95.050781 135.851562 90.945312 140.710938 86.957031 C 145.570312 82.96875 150.527344 79.101562 155.578125 75.355469 C 160.625 71.609375 165.765625 67.992188 170.992188 64.496094 C 176.21875 61.003906 181.53125 57.640625 186.921875 54.410156 C 192.316406 51.179688 197.785156 48.082031 203.328125 45.117188 C 208.875 42.152344 214.488281 39.328125 220.171875 36.640625 C 225.855469 33.949219 231.601562 31.402344 237.410156 29 C 243.21875 26.589844 249.082031 24.332031 255 22.210938 C 260.921875 20.09375 266.886719 18.121094 272.90625 16.296875 C 278.921875 14.472656 284.980469 12.796875 291.078125 11.269531 C 297.175781 9.742188 303.308594 8.363281 309.476562 7.136719 C 315.640625 5.910156 321.832031 4.835938 328.050781 3.914062 C 334.273438 2.992188 340.507812 2.222656 346.765625 1.605469 C 353.023438 0.988281 359.292969 0.527344 365.570312 0.21875 C 371.851562 -0.0898438 378.132812 -0.242188 384.421875 -0.242188 C 390.707031 -0.242188 396.992188 -0.0898438 403.269531 0.21875 C 409.550781 0.527344 415.816406 0.992188 422.074219 1.605469 C 428.332031 2.222656 434.570312 2.992188 440.789062 3.914062 C 447.007812 4.835938 453.199219 5.910156 459.367188 7.136719 C 465.53125 8.363281 471.664062 9.742188 477.765625 11.269531 C 483.863281 12.796875 489.917969 14.472656 495.9375 16.296875 C 501.953125 18.121094 507.921875 20.09375 513.839844 22.210938 C 519.757812 24.332031 525.625 26.589844 531.433594 29 C 537.242188 31.402344 542.988281 33.949219 548.667969 36.640625 C 554.351562 39.328125 559.96875 42.152344 565.511719 45.117188 C 571.058594 48.082031 576.527344 51.175781 581.917969 54.410156 C 587.3125 57.640625 592.621094 61.003906 597.847656 64.496094 C 603.074219 67.988281 608.214844 71.609375 613.265625 75.355469 C 618.3125 79.101562 623.269531 82.96875 628.128906 86.957031 C 632.988281 90.945312 637.746094 95.050781 642.40625 99.269531 C 647.066406 103.492188 651.617188 107.828125 656.0625 112.273438 C 660.507812 116.71875 664.84375 121.269531 669.0625 125.929688 C 673.285156 130.589844 677.390625 135.347656 681.378906 140.207031 C 685.367188 145.066406 689.234375 150.023438 692.980469 155.070312 C 696.726562 160.121094 700.34375 165.257812 703.835938 170.488281 C 707.332031 175.714844 710.691406 181.023438 713.925781 186.417969 C 717.15625 191.808594 720.253906 197.277344 723.21875 202.824219 C 726.183594 208.367188 729.007812 213.980469 731.695312 219.664062 C 734.386719 225.347656 736.933594 231.09375 739.335938 236.902344 C 741.742188 242.710938 744.003906 248.574219 746.125 254.496094 C 748.242188 260.414062 750.214844 266.382812 752.039062 272.398438 C 753.863281 278.417969 755.539062 284.472656 757.066406 290.574219 C 758.59375 296.671875 759.972656 302.804688 761.199219 308.96875 C 762.425781 315.136719 763.5 321.328125 764.421875 327.546875 C 765.34375 333.769531 766.113281 340.003906 766.730469 346.261719 C 767.347656 352.519531 767.808594 358.785156 768.117188 365.066406 C 768.425781 371.347656 768.582031 377.628906 768.582031 383.917969 Z M 768.582031 383.917969"})),M||(M=n.createElement("path",{fill:"#FFF",d:"M 285.308594 252.371094 L 483.527344 252.371094 C 484.089844 252.371094 484.648438 252.425781 485.199219 252.535156 C 485.75 252.644531 486.285156 252.804688 486.804688 253.019531 C 487.324219 253.238281 487.816406 253.5 488.285156 253.8125 C 488.753906 254.125 489.1875 254.480469 489.582031 254.878906 C 489.980469 255.277344 490.335938 255.707031 490.648438 256.175781 C 490.960938 256.644531 491.226562 257.136719 491.441406 257.65625 C 491.65625 258.175781 491.816406 258.710938 491.925781 259.261719 C 492.035156 259.816406 492.09375 260.371094 492.09375 260.933594 L 492.09375 561.984375 C 492.09375 562.546875 492.035156 563.101562 491.925781 563.652344 C 491.816406 564.207031 491.65625 564.742188 491.441406 565.261719 C 491.226562 565.78125 490.960938 566.273438 490.648438 566.742188 C 490.335938 567.207031 489.980469 567.640625 489.582031 568.039062 C 489.1875 568.4375 488.753906 568.792969 488.285156 569.105469 C 487.816406 569.417969 487.324219 569.679688 486.804688 569.894531 C 486.285156 570.109375 485.75 570.273438 485.199219 570.382812 C 484.648438 570.492188 484.089844 570.546875 483.527344 570.546875 L 285.308594 570.546875 C 284.746094 570.546875 284.1875 570.492188 283.636719 570.382812 C 283.085938 570.273438 282.550781 570.109375 282.03125 569.894531 C 281.511719 569.679688 281.015625 569.417969 280.550781 569.105469 C 280.082031 568.792969 279.648438 568.4375 279.25 568.039062 C 278.855469 567.640625 278.5 567.210938 278.1875 566.742188 C 277.875 566.273438 277.609375 565.78125 277.394531 565.261719 C 277.179688 564.742188 277.019531 564.207031 276.90625 563.652344 C 276.796875 563.101562 276.742188 562.546875 276.742188 561.984375 L 276.742188 260.933594 C 276.742188 260.371094 276.796875 259.816406 276.90625 259.261719 C 277.019531 258.710938 277.179688 258.175781 277.394531 257.65625 C 277.609375 257.136719 277.875 256.644531 278.1875 256.175781 C 278.5 255.707031 278.855469 255.277344 279.25 254.878906 C 279.648438 254.480469 280.082031 254.125 280.550781 253.8125 C 281.015625 253.5 281.511719 253.234375 282.03125 253.019531 C 282.550781 252.804688 283.085938 252.644531 283.636719 252.535156 C 284.1875 252.425781 284.746094 252.371094 285.308594 252.371094 Z M 285.308594 252.371094"})),L||(L=n.createElement("path",{strokeLinecap:"round",transform:"matrix(7.5455 0 0 7.5455 4.004 -7197.749)",fill:"none",strokeLinejoin:"round",d:"M 53.738078 984.399934 C 53.738078 984.511755 53.732383 984.623059 53.721511 984.734363 C 53.71064 984.84515 53.694074 984.955418 53.672331 985.065169 C 53.650587 985.174403 53.623667 985.2826 53.591053 985.389763 C 53.558956 985.496408 53.521164 985.601499 53.478713 985.70452 C 53.435745 985.807541 53.388117 985.908491 53.335312 986.006853 C 53.283025 986.105215 53.225561 986.200988 53.163438 986.293655 C 53.101315 986.38684 53.03505 986.476401 52.964126 986.562855 C 52.893202 986.648792 52.818655 986.731623 52.739448 986.810313 C 52.660758 986.88952 52.577927 986.964585 52.491473 987.034992 C 52.405536 987.105915 52.315975 987.172698 52.22279 987.234303 C 52.130123 987.296427 52.03435 987.35389 51.935988 987.406177 C 51.837626 987.458982 51.736676 987.50661 51.633655 987.549578 C 51.530634 987.592029 51.425543 987.629821 51.31838 987.662436 C 51.211735 987.694532 51.103537 987.721453 50.994304 987.743196 C 50.884553 987.765456 50.774285 987.781505 50.662981 987.792376 C 50.552194 987.803766 50.44089 987.808943 50.329069 987.808943 C 50.217247 987.808943 50.105943 987.803766 49.994639 987.792376 C 49.883853 987.781505 49.773584 987.765456 49.663833 987.743196 C 49.5546 987.721453 49.446402 987.694532 49.339239 987.661918 C 49.232595 987.629821 49.127503 987.592029 49.024482 987.549578 C 48.921461 987.50661 48.820511 987.458982 48.722149 987.406177 C 48.623788 987.35389 48.528014 987.296427 48.43483 987.234303 C 48.342163 987.172698 48.252602 987.105915 48.166147 987.034992 C 48.08021 986.964585 47.997379 986.88952 47.91869 986.810313 C 47.839483 986.731623 47.764417 986.648792 47.694011 986.562855 C 47.623087 986.476401 47.556305 986.38684 47.494699 986.293655 C 47.432576 986.200988 47.375112 986.105215 47.322307 986.006853 C 47.27002 985.908491 47.222393 985.807541 47.179424 985.70452 C 47.136973 985.601499 47.099182 985.496408 47.066567 985.389763 C 47.03447 985.2826 47.007032 985.174403 46.985289 985.065169 C 46.963546 984.955418 46.947497 984.84515 46.936626 984.734363 C 46.925237 984.623059 46.92006 984.511755 46.92006 984.399934 C 46.92006 984.28863 46.925237 984.176808 46.936626 984.066022 C 46.947497 983.954718 46.963546 983.844449 46.985289 983.734698 C 47.007032 983.625465 47.03447 983.517267 47.066567 983.410622 C 47.099182 983.30346 47.136973 983.198368 47.179424 983.095347 C 47.222393 982.992326 47.27002 982.891376 47.322307 982.793014 C 47.375112 982.694653 47.432576 982.59888 47.494699 982.506213 C 47.556305 982.413028 47.623087 982.323467 47.694011 982.23753 C 47.764417 982.151075 47.839483 982.068244 47.91869 981.989555 C 47.997379 981.910348 48.08021 981.8358 48.166147 981.764876 C 48.252602 981.693952 48.342163 981.627687 48.43483 981.565564 C 48.528014 981.503441 48.623788 981.445977 48.722149 981.39369 C 48.820511 981.340885 48.921461 981.293258 49.024482 981.250289 C 49.127503 981.207838 49.232595 981.170047 49.339239 981.13795 C 49.446402 981.105335 49.5546 981.078415 49.663833 981.056672 C 49.773584 981.034929 49.883853 981.018363 49.994639 981.007491 C 50.105943 980.99662 50.217247 980.990925 50.329069 980.990925 C 50.44089 980.990925 50.552194 980.99662 50.662981 981.007491 C 50.774285 981.018363 50.884553 981.034929 50.994304 981.056672 C 51.103537 981.078415 51.211735 981.105335 51.31838 981.13795 C 51.425543 981.170047 51.530634 981.207838 51.633655 981.250289 C 51.736676 981.293258 51.837626 981.340885 51.935988 981.39369 C 52.03435 981.445977 52.130123 981.503441 52.22279 981.565564 C 52.315975 981.627687 52.405536 981.693952 52.491473 981.764876 C 52.577927 981.8358 52.660758 981.910348 52.739448 981.989555 C 52.818655 982.068244 52.893202 982.151075 52.964126 982.237012 C 53.03505 982.323467 53.101315 982.413028 53.163438 982.505695 C 53.225561 982.59888 53.283025 982.694653 53.335312 982.793014 C 53.388117 982.891376 53.435745 982.992326 53.478713 983.095347 C 53.521164 983.198368 53.558956 983.30346 53.591053 983.410622 C 53.623667 983.517267 53.650587 983.625465 53.672331 983.734698 C 53.694074 983.844449 53.71064 983.954718 53.721511 984.066022 C 53.732383 984.176808 53.738078 984.28863 53.738078 984.399934 Z M 53.738078 984.399934",stroke:"#FFF",strokeWidth:2})),w||(w=n.createElement("path",{strokeLinecap:"round",transform:"matrix(7.5455 0 0 7.5455 4.004 -7197.749)",fill:"#FFF",strokeLinejoin:"round",d:"M 33.450204 984.719868 L 67.382914 984.719868 C 67.493183 984.719868 67.601898 984.73074 67.710096 984.751965 C 67.817776 984.773708 67.922868 984.805287 68.024336 984.847221 C 68.125803 984.889671 68.222612 984.940923 68.314244 985.002011 C 68.405875 985.063616 68.490259 985.132987 68.567913 985.210641 C 68.646085 985.288813 68.715456 985.373197 68.776544 985.464828 C 68.837631 985.555942 68.889401 985.652751 68.931334 985.754219 C 68.973785 985.856204 69.005364 985.960778 69.026589 986.068976 C 69.048333 986.176656 69.059204 986.28589 69.059204 986.396158 L 69.059204 988.325083 C 69.059204 988.434834 69.048333 988.544067 69.026589 988.651747 C 69.005364 988.759945 68.973785 988.864519 68.931334 988.965987 C 68.889401 989.067972 68.837631 989.164263 68.776544 989.255895 C 68.715456 989.347526 68.646085 989.432428 68.567913 989.510082 C 68.490259 989.587736 68.405875 989.657107 68.314244 989.718195 C 68.222612 989.779283 68.125803 989.831052 68.024336 989.873503 C 67.922868 989.915436 67.817776 989.947015 67.710096 989.968758 C 67.601898 989.989984 67.493183 990.000855 67.382914 990.000855 L 33.450204 990.000855 C 33.339935 990.000855 33.231219 989.989984 33.123022 989.968758 C 33.015341 989.947015 32.91025 989.915436 32.808782 989.873503 C 32.706796 989.831052 32.610505 989.779283 32.518874 989.718195 C 32.427242 989.657107 32.342858 989.587736 32.264687 989.510082 C 32.187033 989.432428 32.117662 989.347526 32.056574 989.255895 C 31.995486 989.164263 31.943717 989.067972 31.901784 988.965987 C 31.859333 988.864519 31.827754 988.759945 31.80601 988.651747 C 31.784785 988.544067 31.773913 988.434834 31.773913 988.325083 L 31.773913 986.396158 C 31.773913 986.28589 31.784785 986.176656 31.80601 986.068976 C 31.827754 985.960778 31.859333 985.856204 31.901784 985.754737 C 31.943717 985.652751 31.995486 985.55646 32.056574 985.464828 C 32.117662 985.373197 32.187033 985.288813 32.264687 985.210641 C 32.342858 985.132987 32.427242 985.063616 32.518874 985.002529 C 32.610505 984.940923 32.706796 984.889671 32.808782 984.847221 C 32.91025 984.805287 33.015341 984.773708 33.123022 984.751965 C 33.231219 984.73074 33.339935 984.719868 33.450204 984.719868 Z M 33.450204 984.719868",stroke:"#FF8D8D",strokeWidth:.778})),E||(E=n.createElement("path",{fill:"#FF8D8D",d:"M 321.667969 302.546875 C 322.355469 302.546875 323.035156 302.613281 323.710938 302.75 C 324.382812 302.882812 325.035156 303.078125 325.671875 303.34375 C 326.304688 303.605469 326.910156 303.925781 327.480469 304.308594 C 328.050781 304.691406 328.578125 305.125 329.0625 305.609375 C 329.550781 306.09375 329.984375 306.625 330.363281 307.195312 C 330.746094 307.765625 331.070312 308.367188 331.332031 309 C 331.59375 309.636719 331.792969 310.289062 331.925781 310.964844 C 332.058594 311.636719 332.128906 312.316406 332.128906 313.003906 L 332.128906 533.929688 C 332.128906 534.617188 332.058594 535.296875 331.925781 535.96875 C 331.792969 536.644531 331.59375 537.296875 331.332031 537.929688 C 331.070312 538.566406 330.746094 539.167969 330.363281 539.738281 C 329.984375 540.308594 329.550781 540.835938 329.0625 541.324219 C 328.578125 541.808594 328.050781 542.242188 327.480469 542.625 C 326.910156 543.003906 326.304688 543.328125 325.671875 543.589844 C 325.035156 543.851562 324.382812 544.050781 323.710938 544.1875 C 323.035156 544.320312 322.355469 544.386719 321.667969 544.386719 C 320.984375 544.386719 320.300781 544.320312 319.628906 544.1875 C 318.957031 544.054688 318.300781 543.855469 317.667969 543.589844 C 317.03125 543.328125 316.429688 543.007812 315.859375 542.625 C 315.289062 542.242188 314.761719 541.8125 314.273438 541.324219 C 313.789062 540.839844 313.355469 540.3125 312.972656 539.742188 C 312.59375 539.167969 312.269531 538.566406 312.007812 537.929688 C 311.746094 537.296875 311.546875 536.644531 311.414062 535.96875 C 311.277344 535.296875 311.210938 534.617188 311.210938 533.929688 L 311.210938 313.003906 C 311.210938 312.316406 311.277344 311.636719 311.414062 310.964844 C 311.546875 310.289062 311.746094 309.636719 312.007812 309.003906 C 312.269531 308.367188 312.59375 307.765625 312.972656 307.195312 C 313.355469 306.625 313.789062 306.09375 314.273438 305.609375 C 314.761719 305.125 315.289062 304.691406 315.859375 304.308594 C 316.429688 303.925781 317.03125 303.605469 317.667969 303.34375 C 318.300781 303.078125 318.957031 302.882812 319.628906 302.746094 C 320.300781 302.613281 320.984375 302.546875 321.667969 302.546875 Z M 321.667969 302.546875"})),I||(I=n.createElement("path",{fill:"#FF8D8D",d:"M 384.417969 302.546875 C 385.105469 302.546875 385.785156 302.613281 386.457031 302.75 C 387.132812 302.882812 387.785156 303.078125 388.417969 303.34375 C 389.054688 303.605469 389.65625 303.925781 390.226562 304.308594 C 390.796875 304.691406 391.328125 305.125 391.8125 305.609375 C 392.296875 306.09375 392.730469 306.625 393.113281 307.195312 C 393.496094 307.765625 393.816406 308.367188 394.078125 309 C 394.34375 309.636719 394.539062 310.289062 394.675781 310.964844 C 394.808594 311.636719 394.875 312.316406 394.875 313.003906 L 394.875 533.929688 C 394.875 534.617188 394.808594 535.296875 394.675781 535.96875 C 394.539062 536.644531 394.34375 537.296875 394.078125 537.929688 C 393.816406 538.566406 393.496094 539.167969 393.113281 539.738281 C 392.730469 540.308594 392.296875 540.835938 391.8125 541.324219 C 391.328125 541.808594 390.796875 542.242188 390.226562 542.625 C 389.65625 543.003906 389.054688 543.328125 388.417969 543.589844 C 387.785156 543.851562 387.132812 544.050781 386.457031 544.1875 C 385.785156 544.320312 385.105469 544.386719 384.417969 544.386719 C 383.730469 544.386719 383.050781 544.320312 382.378906 544.1875 C 381.703125 544.054688 381.050781 543.855469 380.414062 543.589844 C 379.78125 543.328125 379.179688 543.007812 378.609375 542.625 C 378.035156 542.242188 377.507812 541.8125 377.023438 541.324219 C 376.535156 540.839844 376.105469 540.3125 375.722656 539.742188 C 375.339844 539.167969 375.019531 538.566406 374.753906 537.929688 C 374.492188 537.296875 374.292969 536.644531 374.160156 535.96875 C 374.027344 535.296875 373.960938 534.617188 373.960938 533.929688 L 373.960938 313.003906 C 373.960938 312.316406 374.027344 311.636719 374.160156 310.964844 C 374.292969 310.289062 374.492188 309.636719 374.753906 309.003906 C 375.019531 308.367188 375.339844 307.765625 375.722656 307.195312 C 376.105469 306.625 376.535156 306.09375 377.023438 305.609375 C 377.507812 305.125 378.035156 304.691406 378.609375 304.308594 C 379.179688 303.925781 379.78125 303.605469 380.414062 303.34375 C 381.050781 303.078125 381.703125 302.882812 382.378906 302.746094 C 383.050781 302.613281 383.730469 302.546875 384.417969 302.546875 Z M 384.417969 302.546875"})),k||(k=n.createElement("path",{fill:"#FF8D8D",d:"M 447.164062 302.546875 C 447.851562 302.546875 448.53125 302.613281 449.207031 302.75 C 449.878906 302.882812 450.535156 303.078125 451.167969 303.34375 C 451.800781 303.605469 452.40625 303.925781 452.976562 304.308594 C 453.546875 304.691406 454.074219 305.125 454.5625 305.609375 C 455.046875 306.09375 455.480469 306.625 455.863281 307.195312 C 456.242188 307.765625 456.566406 308.367188 456.828125 309 C 457.089844 309.636719 457.289062 310.289062 457.421875 310.964844 C 457.558594 311.636719 457.625 312.316406 457.625 313.003906 L 457.625 533.929688 C 457.625 534.617188 457.558594 535.296875 457.421875 535.96875 C 457.289062 536.644531 457.089844 537.296875 456.828125 537.929688 C 456.566406 538.566406 456.242188 539.167969 455.863281 539.738281 C 455.480469 540.308594 455.046875 540.835938 454.5625 541.324219 C 454.074219 541.808594 453.546875 542.242188 452.976562 542.625 C 452.40625 543.003906 451.800781 543.328125 451.167969 543.589844 C 450.535156 543.851562 449.878906 544.050781 449.207031 544.1875 C 448.53125 544.320312 447.851562 544.386719 447.164062 544.386719 C 446.480469 544.386719 445.800781 544.320312 445.125 544.1875 C 444.453125 544.054688 443.796875 543.855469 443.164062 543.589844 C 442.53125 543.328125 441.925781 543.007812 441.355469 542.625 C 440.785156 542.242188 440.257812 541.8125 439.769531 541.324219 C 439.285156 540.839844 438.851562 540.3125 438.46875 539.742188 C 438.089844 539.167969 437.765625 538.566406 437.503906 537.929688 C 437.242188 537.296875 437.042969 536.644531 436.910156 535.96875 C 436.773438 535.296875 436.707031 534.617188 436.707031 533.929688 L 436.707031 313.003906 C 436.707031 312.316406 436.773438 311.636719 436.910156 310.964844 C 437.042969 310.289062 437.242188 309.636719 437.503906 309.003906 C 437.765625 308.367188 438.089844 307.765625 438.46875 307.195312 C 438.851562 306.625 439.285156 306.09375 439.769531 305.609375 C 440.257812 305.125 440.785156 304.691406 441.355469 304.308594 C 441.925781 303.925781 442.53125 303.605469 443.164062 303.34375 C 443.796875 303.078125 444.453125 302.882812 445.125 302.746094 C 445.800781 302.613281 446.480469 302.546875 447.164062 302.546875 Z M 447.164062 302.546875"})))}var Z=n.forwardRef(V),P=(C.p,{check:function(e){return Object(i.jsx)(S,{className:"Icon-svg Icon-svg--check",fill:e})},delete:function(e){return Object(i.jsx)(Z,{className:"Icon-svg Icon-svg--delete",fill:e})}});function z(e){var t=e.type,C=e.color,n=void 0===C?"gray":C,o=e.onClick;return Object(i.jsx)("span",{className:"Icon-container Icon-container--".concat(t),onClick:o,children:P[t](n)})}function B(e){var t=e.completed,C=e.onComplete;return Object(i.jsx)(z,{type:"check",color:t?"#4caf50":"gray",onClick:C})}function J(e){var t=e.onDelete;return Object(i.jsx)(z,{type:"delete",onClick:t})}C(15);function R(e){return Object(i.jsxs)("li",{className:"TodoItem",children:[Object(i.jsx)(B,{completed:e.completed,onComplete:e.onComplete}),Object(i.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--completed"),children:e.text}),Object(i.jsx)(J,{onDelete:e.onDelete})]})}C(16);function W(){var e=o.a.useState(""),t=Object(l.a)(e,2),C=t[0],n=t[1],r=o.a.useContext(s),c=r.addTodo,a=r.setOpenModal,u=function(e){e.preventDefault(),c(C),a(!1)};return Object(i.jsxs)("form",{onSubmit:u,children:[Object(i.jsx)("label",{children:" Write a new TODO "}),Object(i.jsx)("textarea",{value:C,onChange:function(e){n(e.target.value)},placeholder:"Chop Onion for lunch"}),Object(i.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(i.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button--cancel",onClick:function(){a(!1)},children:"Cancel"}),Object(i.jsx)("button",{type:"submit",className:"TodoForm-button TodoForm-button--add",onClick:u,children:"Add"})]})]})}C(17);function A(e){return Object(i.jsx)("section",{children:Object(i.jsx)("ul",{children:e.children})})}C(18);function Y(){var e=o.a.useContext(s),t=e.searchValue,C=e.setSearchValue;return[Object(i.jsx)("input",{className:"TodoSearch",placeholder:"Onion",value:t,onChange:function(e){console.log(e.target.value),C(e.target.value)}})]}C(19);function _(e){return Object(i.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal(!0)},children:"+"})}C(20);function q(e){var t=e.children;return c.a.createPortal(Object(i.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}function G(e){e.error;return Object(i.jsx)("p",{children:"Freak out! There was an error..."})}C(21);function K(){return Object(i.jsxs)("div",{className:"LoadingTodo-container",children:[Object(i.jsx)("span",{className:"LoadingTodo-completeIcon"}),Object(i.jsx)("p",{className:"LoadingTodo-text",children:"TODO's are loading..."}),Object(i.jsx)("span",{className:"LoadingTodo-deleteIcon"})]})}function Q(){return Object(i.jsx)("p",{children:"Create your first TODO!"})}function U(){var e=o.a.useContext(s),t=e.error,C=e.loading,n=e.searchedTodos,r=e.completeTodo,c=e.deleteTodo,a=e.openModal,l=e.setOpenModal;return Object(i.jsxs)(o.a.Fragment,{children:[Object(i.jsx)(d,{}),Object(i.jsx)(Y,{}),Object(i.jsxs)(A,{children:[t&&Object(i.jsx)(G,{error:t}),C&&Object(i.jsx)(K,{}),!C&&!n.length&&Object(i.jsx)(Q,{}),n.map((function(e){return Object(i.jsx)(R,{text:e.text,completed:e.completed,onComplete:function(){return r(e.text)},onDelete:function(){return c(e.text)}},e.text)}))]}),!!a&&Object(i.jsx)(q,{children:Object(i.jsx)(W,{})}),Object(i.jsx)(_,{setOpenModal:l})]})}var X=function(){return Object(i.jsx)(u,{children:Object(i.jsx)(U,{})})};C(22);c.a.render(Object(i.jsx)(X,{}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.a612e997.chunk.js.map