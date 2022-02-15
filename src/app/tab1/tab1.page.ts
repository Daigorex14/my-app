import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  promotion = [
    {
      title : "White Album",
      subtitle: "40th Macross",
      image:"https://macross.jp/wp-content/uploads/Cybersecurity_header_0201-scaled.jpg",
      detail:"40周年イヤーに突入し、先月『MACROSS7 BASARA EXPLOSION 2022』、4月に『ワルキューレ LIVE 2022』を控え、勢いがとまらない「マクロス」と、サイバーセキュリティに対する取組を重点的に推進する国の「2022年サイバーセキュリティ月間」とのコラボレーションが決定！"
    },
    {
      title : "MACROSS DELTA",
      subtitle: "LIVE 2022 〜Walküre Reborn!〜 ",
      image:"https://macross.jp/wp-content/uploads/202110071809_27643_2.png",
      detail:"いよいよ明日2021年10月8日（金）に完全新作『劇場版マクロスΔ 絶対LIVE!!!!!!』（同時上映『劇場短編マクロスF ～時の迷宮～』）がＴＯＨＯシネマズ 池袋、ほか全国ロードショー、来週10月13日にはワルキューレ3rdアルバム「Walküre Reborn!」発売と勢いがとまらない「マクロス」シリーズ。"
    },
    {
      title : "M魂",
      subtitle: "SUPER DIMENSION FANCLUB",
      image:"https://macross.jp/wp-content/uploads/2021/12/bnr_fanclub_l-1.jpg",
      detail:"超時空ファンクラブ「M魂」では、シリーズ第一作「超時空要塞マクロス」から「マクロスΔ」までのシリーズ全てのファンの方々に向けたサービスを展開していきます。オリジナル会員証の発行と特典プレゼントはもちろん、イベントチケットの優先受付など会員ならではのサービスが楽しめる年額プランと、「M魂」のメールマガジンやオンラインストアをご利用いただける無料プランの2つがございます。"
    },
  ];

  constructor() {}


}
