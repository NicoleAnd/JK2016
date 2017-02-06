// 打开后台页面的时候，发送请求，刷新新闻列表
$(document).ready(function() {
    //location.href="../server/getnews.php";

    var $newsTable = $('#newstable tbody');

    refreshNews();

    //添加新闻
    $('#btnsubmit').click(function(e) {
        e.preventDefault();

        //输入判断
        if ($('#newstitle').val() === "" || $('#newsimg').val() === "" || $('#newstime').val() === "" || $('#newssrc').val() === "") {

            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error'); //为空变红色外框
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }

            if ($('#newsimg').val() === "") {
                $('#newsimg').parent().addClass('has-error'); //为空变红色外框
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }

            if ($('#newstime').val() === "") {
                $('#newstime').parent().addClass('has-error'); //为空变红色外框
            } else {
                $('#newstime').parent().removeClass('has-error');
            }

            if ($('#newssrc').val() === "") {
                $('#newssrc').parent().addClass('has-error'); //为空变红色外框
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }
        } else {
            var jsonNews = {
                newstitle: $('#newstitle').val(),
                newstype: $('#newstype').val(),
                newsimg: $('#newsimg').val(),
                newstime: $('#newstime').val(),
                newssrc: $('#newssrc').val()
            };
            //location.href="../server/insert.php";
            //提交添加
            $.ajax({

                url: '../server/insert.php',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                error: function(data) {
                    alert('insert Error loading XML document');
                },
                success: function(data) {
                    console.log(data);
                    // if (data == '添加数据重复') {}
                    //  $('#deleteModal').modal('show');
                    refreshNews();
                }
            });
        }
    });

    //删除新闻的功能
    var deleteId = null;
    $newsTable.on('click', '.btn-danger', function(e) {
        //console.log('clickdelete');
        $('#deleteModal').modal('show'); //弹出删除模态框
        deleteId = $(this).parent().prevAll().eq(3).html();
        // console.log($(this).parent().prevAll().eq(3).html());
    });
    $('#deleteModal #confirmDelete').click(function(e) {
        if (deleteId) {
            $.ajax({
                url: '../server/delete.php',
                type: 'post',
                data: { newsid: deleteId },
                success: function(data) {
                    console.log('删除成功');

                    $('#deleteModal').modal('hide'); //隐藏删除模态框
                    refreshNews();
                }
            });
        }
    });

    //修改新闻的功能
    var updateId = null;
    $newsTable.on('click', '.btn-primary', function(e) {
        //console.log('clickdelete');
        $('#updateModal').modal('show'); //弹出删除模态框
        updateId = $(this).parent().prevAll().eq(3).html();
        // console.log($(this).parent().prevAll().eq(3).html());
        $.ajax({
            url:'../server/curnews.php',
            type:'get',
            datatype:'json',
            data:{newsid:updateId},
            success:function(data){
                //console.log(data);
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(data[0].newssrc);
                var utime = data[0].newstime.split(' ')[0];
                $('#unewstime').val(utime);
                
            }
        })
    });
    $('#updateModal #confirmUpdate').click(function(e) {
        $.ajax({
            url:'../server/update.php',
            type:'post',
            data:{
                newstitle:$('#unewstitle').val(),
                newstype:$('#unewstype').val(),
                newsimg:$('#unewsimg').val(),
                newstime:$('#unewstime').val(),
                newssrc:$('#unewssrc').val(),
                id:updateId
            },
            success:function(data){
                $('#updateModal').modal('hide');
                refreshNews();  
            }
        })
    });






    function refreshNews() {
        //清空所有新闻 empty table

        $newsTable.empty();

        $.ajax({

            url: '../server/getnews.php',
            type: 'get',
            datatype: 'json',
            error: function() {
                alert('Error loading XML document');
            },
            success: function(data) {
                console.log(data);
                data.forEach(function(item, index, array) {
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdsrc = $('<td>').html(item.newssrc);
                    var $tdtime = $('<td>').html(item.newstime);
                    var $tdctrl = $('<td>');
                    var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnupdate, $btndelete);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdtime, $tdctrl);
                    $newsTable.append($tRow);
                })

            }

        });

    };
});
