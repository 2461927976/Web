<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2018/8/21
 * Time: 10:40
 */
require_once ('connect.php');
$sql = "select * from introduce";
$query = mysqli_query($con,$sql);
if ($query&&mysqli_num_rows($query)){
    $about = mysqli_result($query,0,'about');
}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>关于我们</title>
    <link href="default.css" rel="stylesheet" type="text/css" />
</head>
<body>
<div id="wrapper">
    <!-- start header -->
    <div id="header">
        <div id="logo">
            <h1><a href="#">php与mysql<sup></sup></a></h1>
            <h2></h2>
        </div>
        <div id="menu">
            <ul>
                <li class="active"><a href="article.list.php">文章</a></li>
                <li><a href="about.php">关于我们</a></li>
                <li><a href="contact.php">联系我们</a></li>
            </ul>
        </div>
    </div>
    <!-- end header -->
</div>

<!-- start page -->
<div id="page">
    <!-- start content -->
    <div id="content">

        <div class="post">
            <h1 class="title">关于我们</h1>
            <div class="entry">
                <?php echo $about?>
            </div>

        </div>

    </div>
    <!-- end content -->
    <!-- start sidebar -->
    <div id="sidebar">
        <ul>
            <li id="search">
                <h2><b class="text1">Search</b></h2>
                <form method="get" action="">
                    <fieldset>
                        <input type="text" id="s" name="s" value="" />
                        <input type="submit" id="x" value="Search" />
                    </fieldset>
                </form>
            </li>
        </ul>
    </div>
    <!-- end sidebar -->
    <div style="clear: both;">&nbsp;</div>
</div>
<!-- end page -->
<!-- start footer -->
<div id="footer">
    <p id="legal"></p>
</div>
<!-- end footer -->
</body>
</html>
