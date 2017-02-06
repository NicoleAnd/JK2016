-- phpMyAdmin SQL Dump
-- version 4.4.15.5
-- http://www.phpmyadmin.net
--
-- Host: localhost:8889
-- Generation Time: 2016-11-28 09:45:39
-- 服务器版本： 5.5.49-log
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `baidunews`
--
CREATE DATABASE IF NOT EXISTS `baidunews` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `baidunews`;

-- --------------------------------------------------------

--
-- 表的结构 `news`
--
-- 创建时间： 2016-11-21 02:46:09
--

DROP TABLE IF EXISTS `news`;
CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `newstype` char(200) NOT NULL,
  `newstitle` varchar(200) NOT NULL,
  `newsimg` varchar(200) NOT NULL,
  `newstime` datetime NOT NULL,
  `newssrc` char(100) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newstime`, `newssrc`) VALUES
(1, '精选', '第一个<script></script>', 'img/1.jpg', '2016-11-16 00:00:00', '极客学院'),
(19, '本地', '测试', 'img/2.jpg', '2016-02-01 00:00:00', '腾讯新闻'),
(22, '军事', '33', '33', '2016-01-01 00:00:00', '33'),
(24, '娱乐', '132', 'img/1.jpg', '2016-01-31 00:00:00', '13'),
(25, '精选', '从乌镇的窗户透视互联网', 'img/3.jpg', '2016-11-21 00:00:00', '热点'),
(26, '精选', '习近平会见美国总统奥巴马', 'img/4.jpg', '2016-11-22 00:00:00', '热点'),
(27, '精选', '谷歌工程师：杀毒软件并没有什么用', 'img/5.jpg', '2016-11-22 00:00:00', '搜狐要闻'),
(28, '精选', '中国股市不应该沦为圈钱垃圾场', 'img/6.jpg', '2016-11-22 00:00:00', '搜狐要闻'),
(29, '精选', '双十一后，阿里巴巴打出资本连环拳布局未来', 'img/7.jpg', '2016-11-22 00:00:00', '百家原创'),
(30, '百家', '微信更新逆天功能', 'img/b1.jpg', '2016-10-03 00:00:00', '百家原创'),
(31, '本地', '北京海淀学知桥因道路结冰致多车追尾', 'img/local1.jpg', '2016-10-09 00:00:00', '本地原创'),
(32, '娱乐', '纯爷们也有软肋！安吉泪奔不舍与妈妈分离', 'img/y1.jpg', '2016-10-16 00:00:00', '娱乐新闻'),
(35, '精选', '123', 'img/7.jpg', '2016-01-01 00:00:00', '123'),
(36, '精选', '123', 'img/7.jpg', '2016-01-01 00:00:00', '123'),
(37, '精选', '12<script>', 'img/7.jpg', '2016-01-01 00:00:00', '12');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=38;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
