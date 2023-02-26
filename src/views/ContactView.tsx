import React from "react";
import {createStyles, makeStyles} from "@material-ui/core";
import Title from "../components/Title";

import email from "../assets/image/email.png";
import phone from "../assets/image/phone.png";
import location from "../assets/image/location.png";
import wechatQRcode from "../assets/image/wechat.png";
import dingtalkQRcode from "../assets/image/dingtalk.png";
import alipayQRcode from "../assets/image/alipay.png";
import qqQRcode from "../assets/image/qq.png";
import {BreakPoints} from "../utils/constants";

const {tablet} = BreakPoints;

const useStyles = makeStyles(theme => createStyles({
    ContactView: {
        fontFamily: "microsoft雅黑"
    },
    content: {
        [theme.breakpoints.down(tablet)]: {
            flexDirection: "column"
        },
        margin: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
    },
    contactItem: {
        display: "flex",
        alignItems: "center",
        marginBottom: 7
    },
    icon: {
        width: 30,
        height: 30,
    },
    verticalLine: {
        height: 30,
        width: 2,
        backgroundColor: "#b6b6b6",
        margin: "0 8px"
    },
    QRCodeList: {
        [theme.breakpoints.down(tablet)]: {
            flexWrap: "wrap",
            justifyContent: "center"
        },
        display: "flex"
    },
    QRCode: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center'
    },
    QRCodeImg: {
        width: 150,
        height: 150,
        margin: 5
    }
}));

const ContactView = () => {
    const classes = useStyles();
    return <div id={"Contact"} className={classes.ContactView}>
        <Title title={"Contact"} subTitle={"welcome to contact with me"}/>
        <div className={classes.content}>
            <div>
                <div className={classes.contactItem}>
                    <img className={classes.icon} src={email} alt={""}/>
                    <div className={classes.verticalLine}/>
                    <div>
                        <div style={{fontWeight: 500, fontSize: 16}}>Email Me</div>
                        <div>zhouyuhua@zju.edu.cn / Sizer533@163.com</div>
                    </div>
                </div>
                <div className={classes.contactItem}>
                    <img className={classes.icon} src={phone} alt={""}/>
                    <div className={classes.verticalLine}/>
                    <div>
                        <div style={{fontWeight: 500, fontSize: 16}}>Call Me</div>
                        <div>(+86)159-xxx-6183</div>
                    </div>
                </div>
                <div className={classes.contactItem}>
                    <img className={classes.icon} src={location} alt={""}/>
                    <div className={classes.verticalLine}/>
                    <div>
                        <div style={{fontWeight: 500, fontSize: 16}}>Find Me</div>
                        <div>Hangzhou Zhejiang, China</div>
                    </div>
                </div>
            </div>
            <div className={classes.QRCodeList}>
                <div className={classes.QRCode}>
                    <img className={classes.QRCodeImg} src={wechatQRcode} alt={""}/>
                    <div>WeChat</div>
                </div>
                <div className={classes.QRCode}>
                    <img className={classes.QRCodeImg} src={dingtalkQRcode} alt={""}/>
                    <div>DingTalk</div>
                </div>
                <div className={classes.QRCode}>
                    <img className={classes.QRCodeImg} src={qqQRcode} alt={""}/>
                    <div>QQ</div>
                </div>
                <div className={classes.QRCode}>
                    <img className={classes.QRCodeImg} src={alipayQRcode} alt={""}/>
                    <div>AliPay</div>
                </div>
            </div>
        </div>
    </div>
}

export default ContactView;
