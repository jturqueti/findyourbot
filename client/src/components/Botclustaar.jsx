// import React, { Component } from 'react';
// import {Helmet} from "react-helmet";

// export default class Botclustaar extends Component {

//     render() {
//         return (
//                 <script>
//     window.clustaarSettings = {
//       bot_id: '60bf8a7970d02100340dfaba',
//       bot_token: 'eyJ2YWx1ZSI6IjJHU0cxMU5SUXE0NDVmN2MyemV1YVRqTGdiQzVWWGF2b016bXlCUVp5YlUiLCJzdWJqZWN0Ijp7InR5cGUiOiJib3QiLCJpZCI6IjYwYmY4YTc5NzBkMDIxMDAzNDBkZmFiYSJ9fQ==',
//     };
//     var callWebchat = function () {
//       var w = window;
//       var ic = w.Clustaar;
//       if (typeof ic === 'function') {
//         ic('reattach_activator');
//         ic('update', clustaarSettings)
//       } else {
//         var d = document;
//         var i = function () {
//           i.c(arguments)
//         };
//         i.q = [];
//         i.c = function (args) {
//           i.q.push(args)
//         };
//         w.Clustaar = i;
//         var l = function () {
//           var s = d.createElement('script');
//           s.type = 'text/javascript';
//           s.async = !0;
//           s.src = 'https://webchat.clustaar.io/assets/scripts/webchat.js';
//           var x = d.getElementsByTagName('script')[0];
//           x.parentNode.insertBefore(s, x)
//         }
//         l();
//       }
//     };
//     callWebchat()
// </script>
//         )
//     }
// }
