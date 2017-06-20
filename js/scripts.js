function helloWorld() {
   alert("Hello worldz");
}

function calc() {
   alert("aieee");
   var payDayIncl = 0;
   var billDay = 0;
   var margin = 0;
   
   payDayIncl = document.Calculator.PayDayIncl.value;
   billDay = document.Calculator.BillDay.value;
   margin = (billDay-payDayIncl)/billDay;
      
   alert("document.Calculator.PayDayIncl="+payDayIncl);
   alert("document.Calculator.BillDay="+billDay);

   alert("margin="+margin);

   document.Calculator.Margin.value = margin;
 
}
