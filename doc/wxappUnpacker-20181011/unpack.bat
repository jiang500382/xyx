@ech on

echo %1

echo %*
 
cd wxappUnpacker-master
call node wuWxapkg.js  %1
cd  ..
