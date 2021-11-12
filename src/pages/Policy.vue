<template>
  <main class="container p-6">
    <div class="bg-blue-main-dark text-white py-4 tracking-wider">
      <h3 class="font-bold text-lg">LiveTalk 線上授課學員公約暨上課須知</h3>
    </div>
    <div class="bg-white py-6 pl-16 pr-10 md:px-16 text-left">
      <ul class="list-decimal leading-9 font-bold">
        <li>為維繫教師上課品質，<span class="text-red-600">個人帳號與課程僅限學員本人使用，嚴禁將帳號借予他人或共同上課</span>，若有違規情形，授課老師將取消學員上課資格。</li>
        <li>全天24小時皆可線上預約選課，<span class="text-red-600">每堂課預約截止時間為開課前6小時</span>，課程預約成功後，系統將發送信件至學員註冊的 email 信箱並發送開課簡訊。<span class="text-red-600">取消預約的截止時間為開課前 12小時</span>，若未在規定時間內取消預約，該堂課之點數將照常列入計算。</li>
        <li>若遇颱風天，依人事行政局規定，凡臺灣本島任一地方發佈停班停課的訊息，當天所有線上課程將暫停一次，學員已預約課程之點數將全數退還。</li>
        <li>當授課老師因不可抗因素而無法到班，LiveABC有權安排其它具備相同專業的代課老師，而學員不得以此點而要求點數返還。</li>
        <li><span class="text-red-600">學員第一次使用LiveTalk前請務必備妥個人設備【含:電腦、攝影機、耳機、麥克風、網路】，並於LiveTalk首頁下方點選【軟體下載】進行【攝影機、麥克風、網路】測試，並安裝軟體Zoom。</span></li>
        <li><span class="text-red-600">上課前5分鐘</span>，老師會開啟教室，您即可進入教室等待上課，請留意自己的上課時間。<span class="text-red-600">若您於此時遇設備問題且技術人員無法及時排除，您可選擇取消上課，我們會退還扣除點數。</span></li>
        <li><span class="text-red-600">若您於開始上課時才進入教室且設備故障無法正常上課</span>，為了維護他人上課品質，<span class="text-red-600">老師有權將您的視訊及麥克風關閉，該堂課仍將照常列入點數計算且不予退費。</span></li>
        <li><span class="text-red-600">請務必於上課前完成設備測試，如無法正常使用請盡早與我們客服聯繫。</span></li>
        <li>學員如蓄意干擾線上教室網路系統正常運作，或於課堂散佈恐嚇、譭謗、侵犯他人隱私、色情其他違反公序良俗之文字、圖片或影像，將取消學員資格。</li>
        <li>課堂中惡意破壞上課秩序，或以言語、文字以及其他不當方式，侮辱或騷擾授課教師，經勸導後仍未改善者，將取消學員資格。</li>
        <li>為維護良好學習品質，請於安靜環境中進行線上課程，上課時請勿飲食，並關閉其他視窗與即時通訊軟體。<span class="text-red-600">若上課期間發現學生上課環境吵雜，老師有權禁止學生麥克風功能以維持上課品質。</span></li>
        <li>LiveTalk 線上課程之每位學員能於課程結束後<span class="text-red-600">20天內反覆觀看錄影回放</span>。學員應<span class="text-red-600">禁止下載、錄音、錄影用於不當之商業用途。</span></li>
        <li>LiveTalk 線上課程教材僅限 LiveABC 線上授課使用，<span class="text-red-600">禁止學員以任何形式公開播放</span>。</li>
        <li>預約線上課程必須使用 LiveTalk 學習卡，<span class="text-red-600">卡片一經開通後需於期限內使用完畢，逾期自動失效。請參閱卡片上註明之有效期限與注意事項</span>。若欲購買 LiveTalk 學習卡，請洽詢各分校主任。</li>
        <li>本公司嚴禁教師私下招生、授課，如有類似情形發生，請直接通報服務人員處理。</li>
        <li>LiveClass影片課程，効期自購買日算起一年。</li>
        <li>若對教學方式或課程內容有疑慮，請於上班時間來電，我們將立即派專人進行瞭解。※代表號 Tel: (02)7730-9567。</li>
      </ul>
      <div class="md:flex w-full justify-center px-3 mt-6">
        <router-link :to="{ name: 'register' }" @click.native="close" class="btn-main py-3 rounded text-sm whitespace-no-wrap mx-1 text-white w-full md:w-1/3 font-bold text-center"><span>我知道了</span></router-link>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'Policy',
    components: {
    },
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
    }
  }
</script>
<style>
</style>