<?php
$conn = @mysql_connect("localhost:3306","root","2461927976");
if (!$conn){
	die("�������ݿ�ʧ�ܣ�" . mysql_error());
}
mysql_select_db("user", $conn);
//�ַ�ת��������
mysql_query("set character set 'gbk'");
//д��
mysql_query("set names 'gbk'");
?>