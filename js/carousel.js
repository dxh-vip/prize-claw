var Carousel = {
	data: {
		result: 1,
	},
	init: function () {
		Carousel.control();
	},
	stop: function () {
		$(".zhua").removeClass("zhuamove").addClass("zhuadown");
		$(".zhua-zhu").addClass("zhudown");
		var timer01 = setTimeout(function () {
			$(".zhua").removeClass("zhuadown").addClass("zhuashou");
			var timer03 = setTimeout(function () {
				$(".zhua").removeClass("zhuashou").addClass("zhuaup");
				$(".zhua-zhu").removeClass("zhudown").addClass("zhuup");
				//�ְֳ�ȥ
				$(".poster-list .lw" + (Carousel.data.result + 1)).addClass("img-slideUp");
        clearTimeout(timer03);
				timer03 = null;
			}, 800);
			var timer02 = setTimeout(function () {
				$(".zhua").removeClass("zhuaup").removeClass("zhuaup1");
				$(".zhua-zhu").removeClass("zhuup");
				$("#answer-box").show();
				clearTimeout(timer02);
        timer02 = null;
        alert("恭喜您抽中一等奖~");
        Carousel.start();
			}, 2500);
			clearTimeout(timer01);
			timer01 = null;
    }, 1000);
	},
	start: function () {
		$(".zhua").addClass("zhuamove");
		$(".zhua").removeClass("zhuadown").removeClass("zhuaup1").removeClass("zhuaup");
		$(".poster-list .item")
			.removeClass("img-slideUp")
			.removeClass("img-slideOutUp");
	},
	zhuaMove: function (num) {
		switch (num) {
			case 0:
				$(".zhua-top").animate(
					{
						left: -145,
					},
					300
				);
				break;
			case 1:
				$(".zhua-top").animate(
					{
						left: 0,
					},
					300
				);
				break;
			case 2:
				$(".zhua-top").animate(
					{
						left: 145,
					},
					300
				);
				break;
		}
	},
	control: function () {
		$("#left").on("click", function () {
			Carousel.data.result--;
			if (Carousel.data.result <= 0) {
				Carousel.data.result = 0;
			}
			Carousel.zhuaMove(Carousel.data.result);
    });
    $("#stop").click(Carousel.stop);  
		$("#right").on("click", function () {
			Carousel.data.result++;
			if (Carousel.data.result >= 2) {
				Carousel.data.result = 2;
			}
			Carousel.zhuaMove(Carousel.data.result);
		});
	},
};
