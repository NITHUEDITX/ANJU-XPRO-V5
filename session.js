//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0F6K2l3eXBCa1Z2QWRkMEpZNWU3L2FMV3ljWGFBRlRrTDV4YU16TnYyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnNvMDBaa0c4NGtJbmpHdjBYOFY3YlNSY2JjYlRWYzBMdk5PbzNJSHRpST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRWNHQmpCSmd2V3RFZndoN0FCc1Zkb1hreXlPRFRJdTA5ejQ0bCtPM0dzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoQ1ZVK2xvT2JPMFRUTGRmMXNPYkdyTFZhcXZRMDlvZGVmczNZZm4xenhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNPYlZvdmw1S0I3MFQzRmVETTZKZjJpV2JFMkE4TzQ1S3NKWG5PdVRkSHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdzRDl6Y25qK1ZMSjltcGxjWUxUdWVGR1VpNG1mSlBTUWJNb2pFS0RlbTQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEtHajlvTVRoZ1BBa01XV0NCbnpoOWpFZjc1bWt6ditydEZmUnY4enMzdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2g4NE5rOWNHTE1sQ2JTOGN0a1RMc3JZbVZadzU5NG0yVG9ndHpXbnEzdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhpU2h0b1h2d1ZYbU5XWVNEeURjRkpRb2ZFV01hRDcvWEdlTHRNZSt3MDlSZFhFSkhJc1Y2UEtaK2VkdG96Y1RoMGFFbGY2RDFYODdWYkM4WjM5QUJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMxLCJhZHZTZWNyZXRLZXkiOiJnSjJ1ZnRUS1JtQkJYTUJTU1BhVVhGS0dYOGpFOE00UnF0QVV0N2JxU0k4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ4TXAxdldvUFN1U0VfaURWXzIyTFpnIiwicGhvbmVJZCI6ImU4NTc5Y2RjLWUxNjItNDAyYi05ZGJiLTU5ZTFmMmQ5ZmYxOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5SFNhRDA5d01xU1J0VG1RRWRobGYxbm55MlU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmk4Q1ZwbzBqd0l0SkxmUXB5b1JxZHN2UXpjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjczUExUVFNIIiwibWUiOnsiaWQiOiI5NDc3NDExNTUxMjoxMUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE2ODY3NjU1MjY2NzM2NDoxMUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ012ZHRxWURFS2FHeGNNR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im55S2hYMGV0YkFGQnNEeUxqdStVYURHbjBZQUpiZTB3M1Nnb2hpamN5SHM9IiwiYWNjb3VudFNpZ25hdHVyZSI6InZyYWNrZWpUNWthL242RXVHanhUNlJjYTY2US9adWVvZDVzbis1aEpvdkJVc0xSeWpoZzE1bTZscXVleWpKRXp0RlYyQzh6Q1c3ZHA3c1VmSGhMcERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3VU5wTW5OT0xHb2xJRURTVVhlRy9xTWdvNXIwUDNBU0YrVUdLcVdodjEzbFhKN2t0TlZIak1vOTdLVGZtWnh6UlV3c21QSHZBRk9DaHNFblBnQldEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc0MTE1NTEyOjExQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlo4aW9WOUhyV3dCUWJBOGk0N3ZsR2d4cDlHQUNXM3RNTjBvS0lZbzNNaDcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBSUlCUT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MjI1MzIzNSwibGFzdFByb3BIYXNoIjoiM1I5WjM5IiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBem0ifQ==",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "your account crated number",
  PASSWORD: 
    process.env.PASSWORD || "your password",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
