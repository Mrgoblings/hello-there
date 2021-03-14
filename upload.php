
application/x-httpd-php upload.php ( HTML document, ASCII text, with CRLF line terminators )
<!DOCTYPE html>
<html>
<head>
  <title>Upload your files</title>
</head>
<body>
<style>
body{
    width: 100%;
    height: 100vh;
    margin: 0;
    overflow: hidden;
    background: linear-gradient(to top,#00FF7F,#F5E8E5,#fff);
    padding: 30px;
    font-size:10px;

}
form{
    margin: 200px auto 0 auto;
    display: flex;
    position: center;
    flex-direction: column;
}

input{
    width: 200px;
    margin: 10px auto;
    height: 30px;
    padding: 0 10px;
    border-radius: 4px;
}
h1{
    font-size: 50px;
}
.btn{
		position:relative;
		text-decoration: none;
		left:200px;
		top: -70px;
		height:20px;
		width: 60px;
		padding:20px 80px;
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
		text-decoration: none;
		height:20px;
		width: 60px;
		top: -70px;
		padding:20px 80px;
		cursor: pointer;
		border: 0;
		outline: none;
		border-radius: 30px;
		background: #7FFF00;
		transition: 2s;
	}
.btno{
		position:relative;
		text-decoration: none;
		left:800px;
		top: -70px;
		height:20px;
		width: 60px;
		padding:20px 80px;
		cursor: pointer;
		background: #32CD32;
		border: 0;
		outline: none;
		border-radius: 30px;
		font-size:18px;
		transition: 2s;
	}
.btno:hover{
		position:relative;
		text-decoration: none;
		height:20px;
		width: 60px;
		top: -70px;
		padding:20px 80px;
		cursor: pointer;
		border: 0;
		outline: none;
		border-radius: 30px;
		background: #7FFF00;
		transition: 2s;
	}
</style>
  <form enctype="multipart/form-data" action="upload.php" method="POST">
    <h1>Upload your file</h1>
    <input type="file" name="uploaded_file"></input><br />
    <input type="submit" value="Upload"></input>
  </form>
  <a href="index.php">
  <input type="button" class="btn" value="Go back"></input>
  </a>
  <a href="result.php">
  <input type="button" class="btno" value="Gallery"></input>
  </a>
</body>
</html>
<?PHP
  if(!empty($_FILES['uploaded_file']))
  {
    $path = "uploads/";
    $path = $path . basename( $_FILES['uploaded_file']['name']);

    if(move_uploaded_file($_FILES['uploaded_file']['tmp_name'], $path)) {
      echo "The file ".  basename( $_FILES['uploaded_file']['name']). 
      " has been uploaded";
    } else{
        echo "There was an error uploading the file, please try again!";
    }
  }
?>