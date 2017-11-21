function scoreme()
{
<!--
 
//  Script Made by Scott Campbell (ksc@utep.edu)  ( You are free to use/modify this
//  this code to your own making, but, please recognize my efforts by including
//  this three-line comment in your code.... Thank You and God Bless.
 
var total=15                // Total number of blanks in quiz
var correct=total;          // Set number of correct to Total number in Quiz
 
//  Get answer and response and convert to Upper case
 sa01 = document.FXY1.NA01.value.toUpperCase(); sb01 = document.FXY1.NB01.value.toUpperCase();
 
//  If Response is not correct then mark it (INCORRECT) and reduce correct reponse by 1
 if(sa01!=sb01) { document.FXY1.NB01.value="INCORRECT!"; correct=correct-1;}
 
// Repeat for each blank in quiz (notice the 01, 02, 03...10
 sa02 = document.FXY1.NA02.value.toUpperCase(); sb02 = document.FXY1.NB02.value.toUpperCase();
 if(sa02!=sb02) { document.FXY1.NB02.value="INCORRECT!"; correct=correct-1;}
 
 sa03 = document.FXY1.NA03.value.toUpperCase(); sb03 = document.FXY1.NB03.value.toUpperCase();
 if(sa03!=sb03) { document.FXY1.NB03.value="INCORRECT!"; correct=correct-1;}
 
 sa04 = document.FXY1.NA04.value.toUpperCase(); sb04 = document.FXY1.NB04.value.toUpperCase();
 if(sa04!=sb04) { document.FXY1.NB04.value="INCORRECT!"; correct=correct-1;}
 
 sa05 = document.FXY1.NA05.value.toUpperCase(); sb05 = document.FXY1.NB05.value.toUpperCase();
 if(sa05!=sb05) { document.FXY1.NB05.value="INCORRECT!"; correct=correct-1;}
 
 sa06 = document.FXY1.NA06.value.toUpperCase(); sb06 = document.FXY1.NB06.value.toUpperCase();
 if(sa06!=sb06) { document.FXY1.NB06.value="INCORRECT!"; correct=correct-1;}
 
 sa07 = document.FXY1.NA07.value.toUpperCase(); sb07 = document.FXY1.NB07.value.toUpperCase();
 if(sa07!=sb07) { document.FXY1.NB07.value="INCORRECT!"; correct=correct-1;}
 
 sa08 = document.FXY1.NA08.value.toUpperCase(); sb08 = document.FXY1.NB08.value.toUpperCase();
 if(sa08!=sb08) { document.FXY1.NB08.value="INCORRECT!"; correct=correct-1;}
 
 sa09 = document.FXY1.NA09.value.toUpperCase(); sb09 = document.FXY1.NB09.value.toUpperCase();
 if(sa09!=sb09) { document.FXY1.NB09.value="INCORRECT!"; correct=correct-1;}
 
 sa10 = document.FXY1.NA10.value.toUpperCase(); sb10 = document.FXY1.NB10.value.toUpperCase();
 if(sa10!=sb10) { document.FXY1.NB10.value="INCORRECT!"; correct=correct-1;}
 
 sa11 = document.FXY1.NA11.value.toUpperCase(); sb11 = document.FXY1.NB11.value.toUpperCase();
 if(sa11!=sb11) { document.FXY1.NB11.value="INCORRECT!"; correct=correct-1;}


 sa12 = document.FXY1.NA12.value.toUpperCase(); sb12 = document.FXY1.NB12.value.toUpperCase();
 if(sa12!=sb12) { document.FXY1.NB12.value="INCORRECT!"; correct=correct-1;}

 sa13 = document.FXY1.NA13.value.toUpperCase(); sb13 = document.FXY1.NB13.value.toUpperCase();
 if(sa13!=sb13) { document.FXY1.NB13.value="INCORRECT!"; correct=correct-1;}

 sa14 = document.FXY1.NA14.value.toUpperCase(); sb14 = document.FXY1.NB14.value.toUpperCase();
 if(sa14!=sb14) { document.FXY1.NB14.value="INCORRECT!"; correct=correct-1;}

sa15 = document.FXY1.NA15.value.toUpperCase(); sb15 = document.FXY1.NB15.value.toUpperCase();
 if(sa15!=sb15) { document.FXY1.NB15.value="INCORRECT!"; correct=correct-1;}

//sa16 = document.FXY1.NA11.value.toUpperCase(); sb16 = document.FXY1.NB16.value.toUpperCase();
// if(sa16!=sb16) { document.FXY1.NB16.value="INCORRECT!"; correct=correct-1;}
//
//sa17 = document.FXY1.NA11.value.toUpperCase(); sb17 = document.FXY1.NB17.value.toUpperCase();
// if(sa17!=sb17) { document.FXY1.NB17.value="INCORRECT!"; correct=correct-1;}
//
//sa18 = document.FXY1.NA11.value.toUpperCase(); sb18 = document.FXY1.NB18.value.toUpperCase();
// if(sa18!=sb18) { document.FXY1.NB18.value="INCORRECT!"; correct=correct-1;}

// Obtain number of correct and give number of correct out of total
 document.FXY1.ovrXX.value="You got " + correct + " out of " + total + " correct.";
 
-->
}