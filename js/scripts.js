function helloWorld() {
   alert("Hello worldz");
}

function calc() {
   alert("aieee");
   var payDayIncl = 0;
   var billDay = 0;
   payDayIncl = document.Calculator.PayDayIncl.value;
   
   alert("document.Calculator.PayDayIncl="+payDayIncl);
   alert("document.Calculator.BillDay="+document.Calculator.BillDay);
   document.Calculator.Margin.value = 55;
 }
