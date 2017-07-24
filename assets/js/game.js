/* *********
    ****** Author:  Jay Zhao
    ****** Time:     2017/03/22
    ****** E-mail:   jayhowe2014@163.com
*/
(function($){
    var screenScale = new screen({
        width:640,
        height:1100,    
        object:'.pagination',
        standard:'orientation',
        alignment:'center',
        success:function(){
            $(".pagination").show();
        }
    });

    function loading(percent) {
        percent = (percent);
        var loadingColorBg=document.getElementById('loadPer');
        loadingColorBg.innerHTML="Loading..."+percent+"%";
    }
    function loadingEffect() {
        var le = function () {
            if (currentPercent <= loadPercent) {
                preloadImages();
                loading(currentPercent);
                currentPercent++;
            } 
            if(currentPercent > 100){
                clearInterval(intervalId);
                document.getElementById('loading').style.display = "none";
                playbksound();
                guessGame.init();
            }
        }
        intervalId = setInterval(le, 10);
    }
    //loading images
    function preloadImages() {
        if (imgsrc.length <= 0) {
        } else {
            var res = imgsrc[0];
            imgsrc.splice(0, 1);
            var Img = new Image();
            Img.src = res.src;
            Img.onload = function () {
                loadPercent = res.per;
            }
        }
    }

    var intervalId = false;
    var loadPercent = 0;
    var currentPercent = 0;
    var imgsrc = [
        {src: "assets/images/logo.png", id: "", per: "1"},
        {src: "assets/images/music-play.png", id: "", per: "3"},
        {src: "assets/images/music-stop.png", id: "", per: "5"},
        {src: "assets/images/page1-bg1.jpg", id: "", per: "7"},
        {src: "assets/images/page1-bg2.jpg", id: "", per: "9"},
        {src: "assets/images/page1-bg3.jpg", id: "", per: "11"},
        {src: "assets/images/page1-bg4.jpg", id: "", per: "13"},
        {src: "assets/images/page1-bg5.jpg", id: "", per: "15"},
        {src: "assets/images/page1-bg6.jpg", id: "", per: "17"},
        {src: "assets/images/page1-bg6.jpg", id: "", per: "19"},
        {src: "assets/images/page1-btn.png", id: "", per: "21"},
        {src: "assets/images/page1-cap1.png", id: "", per: "23"},
        {src: "assets/images/page1-cap2.png", id: "", per: "25"},
        {src: "assets/images/page1-cap3.png", id: "", per: "27"},
        {src: "assets/images/page1-cap4.png", id: "", per: "29"},
        {src: "assets/images/page1-cap5.png", id: "", per: "31"},
        {src: "assets/images/page1-cap6.png", id: "", per: "33"},
        {src: "assets/images/page1-colorful1.png", id: "", per: "35"},
        {src: "assets/images/page1-colorful2.png", id: "", per: "37"},
        {src: "assets/images/page1-txt.png", id: "", per: "39"},
        {src: "assets/images/page2-bg.jpg", id: "", per: "41"},
        {src: "assets/images/page2-btn1.png", id: "", per: "43"},
        {src: "assets/images/page2-btn2.png", id: "", per: "45"},
        {src: "assets/images/page2-error.png", id: "", per: "47"},
        {src: "assets/images/page2-inputbg.png", id: "", per: "49"},
        {src: "assets/images/page2-q01.png", id: "", per: "51"},
        {src: "assets/images/page2-q02.png", id: "", per: "53"},
        {src: "assets/images/page2-q03.png", id: "", per: "55"},
        {src: "assets/images/page2-q04.png", id: "", per: "57"},
        {src: "assets/images/page2-q05.png", id: "", per: "59"},
        {src: "assets/images/page2-q06.png", id: "", per: "61"},
        {src: "assets/images/page2-q07.png", id: "", per: "63"},
        {src: "assets/images/page2-q08.png", id: "", per: "67"},
        {src: "assets/images/page2-q09.png", id: "", per: "69"},
        {src: "assets/images/page2-q10.png", id: "", per: "71"},
        {src: "assets/images/page2-right1.png", id: "", per: "73"},
        {src: "assets/images/page2-right2.png", id: "", per: "75"},
        {src: "assets/images/page2-right3.png", id: "", per: "77"},
        {src: "assets/images/page2-right4.png", id: "", per: "79"},
        {src: "assets/images/page2-tbox1.png", id: "", per: "81"},
        {src: "assets/images/page2-tbox2.png", id: "", per: "83"},
        {src: "assets/images/page2-time.png", id: "", per: "85"},
        {src: "assets/images/page2-waterfall1.png", id: "", per: "87"},
        {src: "assets/images/page2-waterfall2.png", id: "", per: "89"},
        {src: "assets/images/page3-detailbtn.png", id: "", per: "91"},
        {src: "assets/images/page3-resetbtn.png", id: "", per: "92"},
        {src: "assets/images/page3-rotatebg.png", id: "", per: "93"},
        {src: "assets/images/page3-sharebtn.png", id: "", per: "94"},
        {src: "assets/images/page3-txt1.png", id: "", per: "95"},
        {src: "assets/images/page3-txt2.png", id: "", per: "96"},
        {src: "assets/images/page3-txt3.png", id: "", per: "97"},
        {src: "assets/images/page4-close.png", id: "", per: "99"},
        {src: "assets/images/page4-txt.png", id: "", per: "99"},
        {src: "assets/images/share-ball1.png", id: "", per: "99"},
        {src: "assets/images/share-ball2.png", id: "", per: "99"},

        {src: "assets/images/page0-bg.jpg", id: "", per: "99"},
        {src: "assets/images/page0-bottom.png", id: "", per: "99"},
        {src: "assets/images/page0-c1.png", id: "", per: "99"},
        {src: "assets/images/page0-c2.png", id: "", per: "99"},
        {src: "assets/images/page0-c3.png", id: "", per: "99"},
        {src: "assets/images/page0-c4.png", id: "", per: "99"},
        {src: "assets/images/page0-c5.png", id: "", per: "99"},
        {src: "assets/images/page0-c6.png", id: "", per: "99"},
        {src: "assets/images/page0-title.png", id: "", per: "99"},

        {src: "assets/images/share-txt.png", id: "", per: "100"}
    ];
    loadingEffect();

    var gSound = 'assets/music/bgm.mp3';
     function switchsound(){
        au = document.getElementById('bgsound');
        ai = document.getElementById('sound_image');
        if(au.paused){
          au.play();
          ai.src = "assets/images/music-play.png";
        }
        else{
          au.pause();
          ai.src = "assets/images/music-stop.png";
        }
      } 
  function playbksound(){
        var audiocontainer = document.getElementById('audiocontainer');
        audiocontainer.innerHTML = '<audio id="bgsound" loop="loop" autoplay="autoplay"> <source src="' + gSound + '" /> </audio>';
        var audio = document.getElementById('bgsound');
        audio.play();
        sound_div = document.createElement("div");
        sound_div.setAttribute("ID", "cardsound");
        sound_div.style.cssText = "position: absolute;right: 3%;top: 2%;width: 8%;z-index: 5000;background: none;";
        box_htm = "<div id='note_box' style='height:100px;width:44px;position:absolute;left:-20px;top:-80px'></div>";
        bg_htm = "<img id='sound_image' src='assets/images/music-play.png'>";
        txt_htm = "<div id='music_txt' style='color:white;position:absolute;left:-40px;top:30px;width:60px'></div>"
        sound_div.innerHTML = bg_htm;
        document.body.appendChild(sound_div);
        $("#cardsound").on("touchstart",function(){
            switchsound();
        });
    } 



    var timeSetTime;
    function timeCount(){
        var timeSec=0,
            timeMin=0;
        function runTime(){
            timeSec++;
            if(timeSec>=60) {
                timeSec=0;
                timeMin++;
            }
            $("#timeMin").html(timeTest(timeMin));
            $("#timeSec").html(timeTest(timeSec));
            timeSetTime=setTimeout(runTime,1000);
        }
        runTime();
        function timeTest(arg){
            return arg>=10 ? arg : "0" + arg;
        }
    }

    //游戏部分
    var guessGame={
        init:function(){
            var self=this;

            self.pageOneSetInter=null;
            self.answerList=[];
            self.questionIndex=null;
            self.score=0;
            self.isCopyQuestion=true;
            self.guessBtnClick=true;
            self.isFirstPlay=false;
            self.totalTime;
            clearTimeout(timeSetTime);

            self.ajaxUrl="";
            self.ajaxData={
                openId:''
            };

            self.shareTitle="";
            self.shareDesc="";
            self.shareImg=userImg;
            self.shareLink="";
            self.money=null;
            self.addEvent();
        },
        addEvent:function(){
            var self=this;
            // wx.ready(self.wxShare);
            //显示第一页动画
            $(".container0").removeClass("hide");
            setTimeout(function(){
                // 2s后播放换页动画  持续时间2s
                $(".changeToNext").show();
            },2000);
            setTimeout(function(){
                // 第三秒改变页面内容
                $(".container0").addClass("hide");
                $(".container1").removeClass("hide");
            },2750)
            setTimeout(function(){
                //换页完成0后播放动画
                self.pageOneAni();
                $(".changeToNext").hide();
            },3500)
            $(".timeLine").css({"width":0});
            $(".page2-waterfall").css({
                "left":0
            });
            $("#timeMin").html("00");
            $("#timeSec").html("00");
            $("#userInput").focus(function(){
                $(".inputShining").hide();
            }).blur(function(){
                if($(this).val() == "") {
                    $(".inputShining").show();
                }
            });

            $(".page2-waterfall").hide();

            $(".page1-btn").on("click",function(){
                clearInterval(self.pageOneSetInter);
                self.getQuestion();
                self.jumpPage("container1","container2");
                timeCount();
            });

            $(".page2-btn1").on("click",function(){
                self.getQuestion();
            });
            $(".page2-btn2").on("click",function(){
                if(self.guessBtnClick) {
                    self.guessBtnClick=false;
                    self.sumbitAnswer();
                }
            });

            $(".page3-btn1").on("click",function(){
               $(".container3").addClass("hide");
                fromLink=undefined;
                self.init();
            });

            $(".page3-btn2").on("click",function(){
                $(".share-page").show();
            });
             $(".share-page").on("click",function(){
                $(this).hide();
             });


            $('.donateData').hide();
            self.runPageThree();
            $(".container3").addClass('hide');


            $(".page3-detail").on("click",function(){
                $(".container4").removeClass("hide");
            });

            $(".page4-close").on("click",function(){
                $(".container4").addClass("hide");
            });
        },
       mess:function(arr){
            var _floor = Math.floor, _random = Math.random,
            len = arr.length, i, j, arri,
            n = _floor(len/2)+1;
            while( n-- ){
                i = _floor(_random()*len);
                j = _floor(_random()*len);
                if( i!==j ){
                    arri = arr[i];
                    arr[i] = arr[j];
                    arr[j] = arri;
                }
            }
            i = _floor(_random()*len);
            arr.push.apply(arr, arr.splice(0,i));
            return arr;
       },
        getQuestion:function(){
            var self=this,
                _ansContent="",
                _quesContent="";
            $("#userInput").val("");
            $(".inputShining").show();
            if(typeof fromLink != undefined && fromLink != '' && fromLink != null) {
                //指定链接进入
                if(self.isCopyQuestion){
                    //第一题开始
                    self.isCopyQuestion=false;
                    //复制原数组
                    self.answerList=self.questionArr.slice(0);
                    _ansContent=self.answerList[fromLink-1].result;
                    _quesContent=self.answerList[fromLink-1].src;
                    self.answerList.splice(fromLink-1,1);
                    self.mess(self.answerList);
                }else {
                    if(self.answerList.length>0) {
                          _ansContent=self.answerList[0].result;
                        _quesContent=self.answerList[0].src;
                        self.answerList.splice(0,1);
                    }else {
                        self.answerList=self.questionArr.slice(0);
                        _ansContent=self.answerList[fromLink-1].result;
                        _quesContent=self.answerList[fromLink-1].src;
                        self.answerList.splice(fromLink-1,1);
                        self.mess(self.answerList);
                    }
                }
            }else {
                //分享链接进入
                if(self.isCopyQuestion){
                    //第一题开始
                    self.isCopyQuestion=false;
                    //复制原数组
                    self.answerList=self.questionArr.slice(0);
                    //打乱数组
                    self.mess(self.answerList);
                     _ansContent=self.answerList[0].result;
                    _quesContent=self.answerList[0].src;
                    self.answerList.splice(0,1);
                }else {
                    if(self.answerList.length>0) {
                          _ansContent=self.answerList[0].result;
                        _quesContent=self.answerList[0].src;
                        self.answerList.splice(0,1);
                    }else {
                        self.answerList=self.questionArr.slice(0);
                        self.mess(self.answerList);
                        _ansContent=self.answerList[0].result;
                        _quesContent=self.answerList[0].src;
                        self.answerList.splice(0,1);
                    }
                }
            }
            self.guessBtnClick=true;
            $(".page2-question").attr("data-answer",_ansContent).
                                            children("img").attr("src",_quesContent);
        },
        pageOneAni:function(){
            var self=this;
            var bgArray=self.pageOneBg,
                len=self.pageOneBg.length,
                index=0;

                self.pageOneSetInter=setInterval(function(){
                    if(index < len) {
                        $(".page1-bg").attr("src",bgArray[index].bg);
                        $(".page1-cap img").attr("src",bgArray[index].cap);
                        index++;
                    }else {
                        index=1;
                        $(".page1-bg").attr("src",bgArray[0].bg);
                        $(".page1-cap img").attr("src",bgArray[0].cap);
                    }
                },230);
        },
        getRandomNumber:function(min,max){
            var _getNum=parseInt(Math.random()*max)+min;
            return _getNum;
        },
        jumpPage:function(hide,show){
            var _hide="."+hide,
                 _show="."+show;
                 $(_hide).addClass("hide");
                 $(_show).removeClass("hide");
        },
        
        sumbitAnswer:function(){
            var self=this;
            var _user=$("#userInput").val();
            var _answer=$(".page2-question").attr("data-answer");
            if(_user == _answer) {
                self.score+=1;
                self.timelineControl(self.score);
                $(".page2-waterfall").show();
                if(self.score>=4) {
                    self.pageTwoTip(self.score);
                    self.totalTime=parseInt($("#timeSec").html())+(parseInt($("#timeMin").html())*60);
                    clearTimeout(timeSetTime);
                    setTimeout(function(){
                        self.runPageThree();
                        self.jumpPage("container2","container3");
                    },1500)
                }else {
                    self.pageTwoTip(self.score);
                    setTimeout(function(){
                        self.getQuestion();
                    },800)
                }
            }else {
                self.pageTwoTip(0);
                setTimeout(function(){
                    self.guessBtnClick=true;
                },800)
            }
        },
        pageTwoTip:function(score){
            var self=this;
            var showTipSrc=null;
            switch(score) {
                case 0:
                    showTipSrc="assets/images/page2-error.png";
                    break;
                default:
                    showTipSrc="assets/images/page2-right"+score+".png";
            }
            $(".page2-tips img").attr("src",showTipSrc);
            $(".page2-tips").show();
            setTimeout(function(){
                $(".page2-tips").hide();
            },1500);
        },
        runPageThree:function(){
            var self=this,
                _circlePer;
            //需调用后端接口，返回公益捐款总额  是否已经参与
            // $.ajax({
            //     url : self.ajaxUrl,
            //     type: 'POST',
            //     data: self.ajaxData,
            //     success: function(data){
            //             alert("提交成功!");
            //     }
            // }) 
            var _timeAdd=0;
            var setScoreAni=setInterval(function(){
                if(_timeAdd<self.totalTime) {
                    _timeAdd++;
                    $(".timeResult").html(_timeAdd);
                }else {
                    clearInterval(setScoreAni);
                }
            },50);

            if(self.isFirstPlay) {
                $("#page3-txt").attr("src","assets/images/page3-txt1.png");
            }else {
                $("#page3-txt").attr("src","assets/images/page3-txt2.png");
            }
            self.money=75551;
            $("#donateNum").text(self.formatCurrency(self.money));
            _circlePer=self.money/100000 *0.9;
            _circlePer=_circlePer >=0.9 ? 0.9 : _circlePer;
            $('.page3-circle').circleProgress({
                startAngle: -Math.PI / 10 * 4.6,
                lineCap: 'round',
                thickness: 40,
                value: _circlePer,
                size:570,
                fill: {
                    gradient: ["#52A719", "#B6F300"]
                }
            });
            self.money > 60000 ?
                                $(".donateData").addClass('donateOld').removeClass('donateNew') :
                                $(".donateData").addClass('donateNew').removeClass('donateOld');
            $('.donateData').show().arctext({radius: 85, dir: -1});
        },
        formatCurrency:function(number){
            var str=number+'';
            var newStr = "";
            var count = 0;
            if(str.indexOf(".")==-1){
                for(var i=str.length-1;i>=0;i--){
                    if(count % 3 == 0 && count != 0){
                        newStr = str.charAt(i) + "," + newStr;
                    }else{
                        newStr = str.charAt(i) + newStr;
                    }
                count++;
                }
                str = newStr;
            }
            else{
                for(var i = str.indexOf(".")-1;i>=0;i--){
                    if(count % 3 == 0 && count != 0){
                    newStr = str.charAt(i) + "," + newStr;
                }else{
                    newStr = str.charAt(i) + newStr; //逐个字符相接起来
                }
                    count++;
                }
                str = newStr + (str + "00").substr((str + "00").indexOf("."),3);
            }
            return str;
        },
        timelineControl:function(score){
            var _per=score/4,
                _timeWidth=343*_per,
                _waterfallLeft=320*_per;
            $(".timeLine").css({
                "width":_timeWidth
            });
            $(".page2-waterfall").css({
                "left":_waterfallLeft
            });
        },
        pageOneBg:[
            {bg:"assets/images/page1-bg1.jpg",cap:"assets/images/page1-cap1.png"},
            {bg:"assets/images/page1-bg2.jpg",cap:"assets/images/page1-cap2.png"},
            {bg:"assets/images/page1-bg3.jpg",cap:"assets/images/page1-cap3.png"},
            {bg:"assets/images/page1-bg4.jpg",cap:"assets/images/page1-cap4.png"},
            {bg:"assets/images/page1-bg5.jpg",cap:"assets/images/page1-cap5.png"},
            {bg:"assets/images/page1-bg6.jpg",cap:"assets/images/page1-cap6.png"}
        ],
        questionArr:[
            {src:"assets/images/page2-q01.png",result:"吃"},
            {src:"assets/images/page2-q02.png",result:"喝"},
            {src:"assets/images/page2-q03.png",result:"躁"},
            {src:"assets/images/page2-q04.png",result:"野"},
            {src:"assets/images/page2-q05.png",result:"约"},
            {src:"assets/images/page2-q06.png",result:"唱"},
            {src:"assets/images/page2-q07.png",result:"拉"},
            {src:"assets/images/page2-q08.png",result:"开"},
            {src:"assets/images/page2-q09.png",result:"快"},
            {src:"assets/images/page2-q10.png",result:"乐"}
        ],
        shareTxt:[
            "怀疑长了一双假眼！",
            "眼力飞出银河系！",
            "小眼神逆天了！"
        ],
        wxShare:function(){
            wx.onMenuShareTimeline({
                title: self.shareTitle,
                link: self.shareLink,
                imgUrl: self.shareImg,
                success: function () {},
                cancel: function () {}
            });
            wx.onMenuShareAppMessage({
                title: self.shareTitle,
                desc: self.shareDesc,
                link: self.shareLink,
                imgUrl: self.shareImg,
                type: '',
                dataUrl: '',
                success: function () {},
                cancel: function () {}
            });
        }
    }
}(jQuery));
