CREATE TABLE `SHNETINFO` (
	`BILLTIME`	varchar(25) not NULL,
    `PROVINCE`  varchar(40) not null,
    `CITY`     varchar(50) ,
    `USENO`  varchar(100) ,
    `BUSINESSTYPE` varchar(100),
    `BILLTYPE` varchar(100),
    `HARDWARETYPE` varchar(100),
    `UNICOMTYPE`   varchar(100),
    `MADETYPE` varchar(100),
    `imei` varchar(200),
    `MOBILETYPE` varchar(500),
    `DEVICETYPE` varchar(200),
    `USENETWORKTYPE` varchar(200),
    `INCOME` varchar(200),
    `LTE_FLUX`  double,
    `WCDMA_FLUX` double,
    `GSM_FLUX` double,
    `UNKNOW_FLUX` double
	)
COMMENT = `账期、省份、地市、用户编码、业务类型、套餐类型、
硬件终端类型、联通终端类型、定制终端类型、imei、终端型号、
终端品牌、使用网络类型、出账收入、LTE网络上使用总流量、WCDMA网络上使用总流量、GSM网络上使用总流量、无法区分的流量`;

ALTER TABLE `SHNETINFO` ADD INDEX BUSITYPE (BUSINESSTYPE);
Alter table SHNETINFO_2 add primary key(USENO);


CREATE TABLE `tac_2` (
`TAC`  int not null,
`MODEL_ID` varchar(200),
`MODEL_NAME`  varchar(600),
`COMPANY_ID`  varchar(200),
`COMPANY_NAME` varchar(200),
`BAND_FREQUENCY` varchar(1000),
`NETWORK_TYPE`  varchar(200),
`UNICOM_4G`  int,
`UNICOM_3G` int,
`UNICOM_2G` int,
`U_MIZE` int,
`T_MIZE` int,
`M_MIZE` int,
`ALL_MIZE` int,
`MIIT4G` int,
`MIIT3G` int,
`MIIT2G` int,
`NEW_TYPE` varchar(200),
`CREATE_TIME` varchar(200),
`UPDATE_TIME` varchar(200),
`IS_DUAL` int,
`IS_PJ` int,
`IS_UP` int,
`IS_SPECIAL` int,
`TAC_SOURCE` varchar(200)
)

