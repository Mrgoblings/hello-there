<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>GG Tycoon</title>
    <style>
	* {
        margin: 0px;
        padding: 0px;
      }
	::-webkit-scrollbar
	{
		width: 12px;
	}
	::-webkit-scrollbar-thumb
	{
		background: linear-gradient(transparent,#87CEFA);
		border-radius: 6px;
	}
	::-webkit-scrollbar-thumb:hover
	{
		background: linear-gradient(transparent,#00FF00);
		border-radius: 6px;
	}
	img{
		position: relative;
		float: right;
	}
	.backgroundche{
		background: url("background2.png") no-repeat ;
	}
	p{
		margin-bottom:50px;
		font-family: Serif;
		font-size: 23px;
	}
	h1{
	  text-align:center; 
	  border-radius: 15px;
	  position: relative;
	  color: #fff;
	  margin-bottom: 100px;
	  background-color: #3CB371;
	}
	h2{
	  right: -50px;
	  bottom: -50px;
	  position: relative;
	}
	h3{
		position: relative;
		width: 600px;
		float: left;
		color: #9ACD32; 
		
	}
	h5{
		font-size: 27px;
		margin-bottom: 20px;
	}
    .boxes{
        max-height:2900px;
	  
	   max-width:1000px;
	   min-width:120px;
	   margin-left: 375px;
	   margin-right:50px;
	   background: #f9f9f9;
	   font-size: 24px;
	   padding:  25px;
	   position: relative;
	   right: 25px;
	   }
	.fon{
	      background: url('image-asset.jpg') no-repeat center ;
          background-size: cover;
          background-attachment: fixed;
	      height: 500px;
	}
      li a{
	    color:#000;
	    text-decoration:none;
	    position: fixed;
		display: flex;
		justify-content:centre;
		align-items:centre;
		overflow: hidden;
		flex-direction: row;
		flex-wrap: wrap;
		z-index: 1;
      }
      section{
		position: fixed;
		width: 100px;
		min-height: 100vh;
		display: flex;
		
      }
      #sidebar {
        position: fixed;
        width: 300px;
        height: 100%;
        background: #fff;
        left: -300px;
        transition: .4s;
      }
      #sidebar ul li {
		position: relative;
		bottom: -150px;
        color: #000;
        font-size: 23px;
        padding: 26px 24px;
		margin: 0 20px;
      }
	#sidebar .toggle-btn {
        position: absolute;
        top: 30px;
        left: 308px;
		cursor: pointer;
      }

      .toggle-btn span {
        width: 45px;
        height: 4px;
        background: #000;
        display: block;
        margin-top: 4px;
		left: 0px;
		transition: .4s;
      }
	  #sidebar.active {
        left: 0;
      }
	  .btn{
		position:relative;
		text-decoration: none;
		right: -470px;
		top: -70px;
		padding:20px 40px;
		cursor: pointer;
		background: #32CD32;
		border: 0;
		outline: none;
		border-radius: 30px;
		font-size:18px;
		transition: 2s;
	}
	.btn:hover{
		position:relative;
		right: -470px;
		text-decoration: none;
		top: -70px;
		padding:20px 40px;
		cursor: pointer;
		border: 0;
		outline: none;
		border-radius: 30px;
		background: #7FFF00;
		transition: 2s;
	}
	form{
		position:relative;
		text-decoration: none;
		padding:10px 30px;
		cursor: pointer;
		background: #32CD32;
		border: 0;
		outline: none;
		border-radius: 30px;
	}
    </style>
</head>
<body>
<div id="sidebar">
      <div class="toggle-btn" onclick ="show()">
        <span></span>
        <span></span>
        <span></span>
<section>
	<div class="toggle"></div>
</section>
      </div>
      <ul>
		<h2>HELLO THERE</h2>
			<li><a href="#Home">Начало</a></li>
			<li><a href="#Game">Игра</a></li>
			<li><a href="#Contact">Контакти</a></li>
			<li><a href="upload.php">Качете снимка</a></li>
			<li><a href="result.php">Галерия</a></li>
			<li><a href="login.html">Sing out</a></li>
      </ul>
    </div>
    <div class="backgroundche"> 
	<div class="boxes">
   <h1> <a name="Home">Начало</a></h1>
   <h5>Замърсяването на природата</h5> 
   <p>Както знаете, природата живее с нас и ние живеем с природата. За да се постигне хармония, тя се грижи за нас, но и ние трябва да се грижим за нея.</p>
   <div class="fon">
    </div>
<h5>Ето какво можете да направите, за да се погрижите за природата:</h5>
<br></br>
<ul>
	<li>Запознайте вашите близки с проблема свързан с околната среда и с изброените по-долу решениня.</li>
	<br>
	<li>Изключвайте всички електронни устройства, когато не ги използвате, за да не хабим излишно ток.</li>
	<br>
	<li>Спирайте водата от душа или кранчето, когато не я използвате.</li>
	<br>
	<li>Изберете си замърсено място близо до вас, нарамете пликчета за боклук и го почистете. Така не само ще помогнете значително за запазването на околната среда, но и ще получите и бонус пари в нашата игра. За да се запознаете повече с играта ни, продължете нататък.</li>
	<br>
</ul>
<br>

<p>Прочетете повече за природата на България  <a href="https://www.moew.government.bg/bg/priroda/">тук</a></p>
<h1> <a name="Game">Играта</a></h1>
<p></p><img src="durvo.png" width="300px" >
<h5>Какво представлява играта? </h5>
<p>Започваш играта и трябва през 5 мин. да почистваш езрото и парка от боклуци, които сортираш в кофи за рециклируеми отпадъци.
   Целта е да се развиеш и да си закупиш вятърни мелници, пречистателни станции, от които печелиш пари. 
   Събери най-много пари и бъди на 1-во място в класацията. 
   Има възможност да получиш бонус пари, ако почистиш замърсено място в истинския живот и изпратиш снимки преди и след като си го направил.</p>
<h5>Къде/как може да играете? </h5> 
 <p>Кликнете тук, за да играете => </p>
 <a href="start.html">
<p> <input type="button" class="btn" value="Играй сега" > </p>

<h1> <a name="Contact">Контакти</a></h1>
<h5>Свържете се с нас:</h5>
<p>Gmail: <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=jrjtWvPRdwzdBwLzscLZwJMtBTsrdBCcvDhhLClZJpfsPnkmrsKQMRxJfNlcmLGjLKvVWhQW">valerytodorov5@gmail.com</a><br>ABV: <a href="https://abv.bg">bobkatasad@abv.bg</a>
</p>

<h5>Пратете почистеното място <a href="upload.php">тук</a></h5>
<h5>Вижте галерията <a href="result.php">тук</a></h5>

<script>
      function show() {
        document.getElementById('sidebar').classList.toggle('active');
      }
</script>

</div>
</div>
</body>
</html>