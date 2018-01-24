//select下拉框
function select() {
    var component_select=$('.component_select');
    var lis=null;
    component_select.each(function(i,v){
        $(v).find('input').on('input',function () {
            $(v).find('ol').addClass('active');
            if($(this).val()==''){
                component_select.find('ol').removeClass('active');
            }
            // var inputLength = $(this).val().length;
            // if (parseInt(inputLength) % 2 == 0 && inputLength > 1) {
            //     $.ajax({
            //         type: "get",
            //         url: "/ajax/get-company-name",
            //         dataType: 'json',
            //         data: {
            //             'company': $(this).val()
            //         },
            //         cache: false,
            //         timeout: 10000,
            //         success: function (json) {
            //             var li = '';
            //             $.each(json.reason, function (v, k) {
            //                 li += '<li>' + k + '</li>';
            //             });
            //             component_select.find('ol').html(li);
            //             lis=component_select.find('ol').find('li');
            //                 $(lis).on('click',function () {
            //                     $(this).parents('.component_select').find('input').val($(this).text());
            //                     component_select.find('ol').removeClass('active');
            //                 });
            //             return false;
            //         },
            //         error: function (err) {
            //             webToast("请求超时，请重新操作", "bottom", 3000);
            //             return false;
            //         }
            //     });
            //
            // }
        })
    });



    component_select.find('ol li').on('click',function () {
        $(this).parents('.component_select').find('input').val($(this).text());
        component_select.find('ol').removeClass('active');
    });
    $('body').on('click',function (e) {
        if(e.target.className!='select'){
            component_select.find('ol').removeClass('active');
        }
    })
}






//模态款
function Module(num='1') {
    this.body=$('body');
    this.Attention=$('#Attention');
    this.box=this.Attention.find('.Attention');
    this.position_init=this.Attention.find('.position_init');
    this.xx=$(this.Attention).find('.btn_xx');
    this.h3=$(this.Attention).find('h3');
    this.foot_b=$(this.Attention).find('.foot_b');
    this.p_follow=$(this.Attention).find('.p_follow');
    this.app=$('#app');
    this.cancel=$(this.Attention).find('.confirm_delete .cancel');
    this.position_xx=$(this.Attention).find('.position_xx');
    this.num=num;
}
Module.prototype.init=function (act) {
    var That=this;
    this.xx.on('click',function () {
        That.disappear(act);
    });
    this.cancel.on('click',function () {
        That.disappear(act);
    });
    this.position_xx.on('click',function () {
        That.disappear(act);
    });
};

Module.prototype.Appear=function (act) {
    if(this.num=='3'){
        this.foot_b.addClass('active');
        this.box.css('height','10rem');
        this.h3.text('将好友名片存入名片夹');
    }else if(this.num=='1'){
        this.box.css('height','8.8rem');
        this.h3.text('扫码进入公众号查看名片夹');
    }else if(this.num=='2'){
        this.box.css({height:'9.1rem'});
        this.h3.text('免费无限次企业查询').css('marginTop','0.6rem');
        this.p_follow.css('display','block')
    }
    $(window).scrollTop(0);
    this.body.css({overflow:'hidden'});
    this.Attention.addClass(act);
};
Module.prototype.disappear=function (act) {
    this.Attention.removeClass(act);
    this.body.css('overflow','auto');
};
