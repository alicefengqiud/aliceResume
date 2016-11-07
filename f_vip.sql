SET NAMES UTF8;
DROP DATABASE IF EXISTS f_vip;
CREATE DATABASE f_vip CHARSET=UTF8;
USE f_vip;


#卖点展示表f_vip_more_brand

CREATE TABLE f_vip_more_brand(
  mbid INT PRIMARY KEY AUTO_INCREMENT,
  mbpic VARCHAR(64)
);
INSERT INTO f_vip_more_brand VALUES
	('1','images/brand-show-1.jpg'),
	('2','images/brand-show-2.jpg'),
	('3','images/brand-show-3.jpg'),
	('4','images/brand-show-4.jpg'),
	('5','images/brand-show-5.jpg'),
	('6','images/brand-show-6.jpg');

#所有女装图片表
CREATE TABLE f_vip_woman(
  wid INT PRIMARY KEY AUTO_INCREMENT,
  wpic VARCHAR(64),
  wtheme VARCHAR(32),
  wtime VARCHAR(32)
);
INSERT INTO f_vip_woman VALUES
	('1','images/woman-1.jpg','国庆狂欢购 折上8.8折','2016/10/22 24:00:00'),
	('2','images/woman-2.jpg','粉红力量 关爱乳房','2016/10/18 24:00:00'),
	('3','images/woman-3.jpg','一加到底 低至5元','2016/10/19 24:00:00'),
	('4','images/woman-4.jpg','富贵人生 高端路线','2016/10/24 24:00:00'),
	('5','images/woman-5.jpg','时尚前沿 引领风尚','2016/10/22 24:00:00'),
	('6','images/woman-6.jpg','羽绒有货 有型有料','2016/10/18 24:00:00'),
	('7','images/woman-7.jpg','国庆狂欢购 折上8.8折','2016/10/15 18:58:00'),
	('8','images/woman-8.jpg','国庆狂欢购 折上8.8折','2016/10/24 24:00:00'),
	('9','images/woman-9.jpg','国庆狂欢购 折上8.8折','2016/10/23 24:00:00'),
	('10','images/woman-10.jpg','国庆狂欢购 折上8.8折','2016/10/16 24:00:00'),
	('11','images/woman-11.jpg','国庆狂欢购 折上8.8折','2016/10/20 24:00:00'),
	('12','images/woman-12.jpg','国庆狂欢购 折上8.8折','2016/10/14 24:00:00'),
	('13','images/woman-13.jpg','国庆狂欢购 折上8.8折','2016/10/28 24:00:00'),
	('14','images/woman-14.jpg','国庆狂欢购 折上8.8折','2016/10/16 24:00:00'),
	('15','images/woman-15.jpg','国庆狂欢购 折上8.8折','2016/10/24 24:00:00'),
	('16','images/woman-16.jpg','国庆狂欢购 折上8.8折','2016/10/23 24:00:00');


#所有鞋包图片表
CREATE TABLE f_vip_shoes(
  sid INT PRIMARY KEY AUTO_INCREMENT,
  spic VARCHAR(64),
  stheme VARCHAR(32),
  stime VARCHAR(32)
);
INSERT INTO f_vip_shoes VALUES
	('1','images/shoes-1.jpg','国庆狂欢购 折上8.8折','2016/10/22 24:00:00'),
	('2','images/shoes-2.jpg','粉红力量 关爱乳房','2016/10/19 24:00:00'),
	('3','images/shoes-3.jpg','一加到底 低至5元','2016/10/16 24:00:00'),
	('4','images/shoes-4.jpg','富贵人生 高端路线','2016/10/24 24:00:00'),
	('5','images/shoes-5.jpg','时尚前沿 引领风尚','2016/10/22 24:00:00'),
	('6','images/shoes-6.jpg','羽绒有货 有型有料','2016/10/16 24:00:00'),
	('7','images/shoes-7.jpg','国庆狂欢购 折上8.8折','2016/10/26 18:58:00'),
	('8','images/shoes-8.jpg','国庆狂欢购 折上8.8折','2016/10/24 24:00:00'),
	('9','images/shoes-9.jpg','国庆狂欢购 折上8.8折','2016/10/23 24:00:00'),
	('10','images/shoes-10.jpg','国庆狂欢购 折上8.8折','2016/10/21 24:00:00'),
	('11','images/shoes-11.jpg','国庆狂欢购 折上8.8折','2016/10/16 24:00:00'),
	('12','images/shoes-12.jpg','国庆狂欢购 折上8.8折','2016/10/19 24:00:00'),
	('13','images/shoes-13.jpg','国庆狂欢购 折上8.8折','2016/10/28 24:00:00'),
	('14','images/shoes-14.jpg','国庆狂欢购 折上8.8折','2016/10/14 24:00:00'),
	('15','images/shoes-15.jpg','国庆狂欢购 折上8.8折','2016/10/24 24:00:00'),
	('16','images/shoes-16.jpg','国庆狂欢购 折上8.8折','2016/10/23 24:00:00');



#用户表f_vip_user

CREATE TABLE f_vip_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(64),
	upwd VARCHAR(16)
);

INSERT INTO f_vip_user VALUES
	('1','alice','123'),
	('2','balis','456');


