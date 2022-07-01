$(window).on('load', function () {
  $.get('./csv/downloadfiles.csv',function(data){
    var iteminit_s = '<div class="row mb-4">';
    var iteminit_e = '</div>';
    var itemcard_s = ' <div class="col-4"> <div class="card card-item">';
    var itemcard_e = ' </div> </div>';
    var itemlink_s = '<a href="dlform.php?var=';
    var itemlink_e = '">';
    var itemimg_s = '<img src="images/';
    var itemimg_e = '" class="card-img-top">';
    var itemcardbody_s = '<div class="card-body">';
    var itemcardbody_e = '</div>';
    var itemtitle_s = '<h5 class="card-title">';
    var itemtitle_e = '</h5>';
    var target0 = '#itemlist0';
    var target1 = '#itemlist1';
    var csv = $.csv.toArrays(data);
    var itemlist0 = '';
    var itemlist1 = '';
	var item0cnt = 0;
	var item1cnt = 0;
	
    $(csv).each(function () {
      if (this[0].length > 0) {
        if (this[1] == '0') {
			item0cnt = item0cnt + 1;
			if( (item0cnt % 3 ) == 1 )
			{
				itemlist0 += iteminit_s + itemcard_s + itemlink_s + this[0] + itemlink_e + itemimg_s + this[5] + itemimg_e + itemcardbody_s + itemtitle_s + this[2] + itemtitle_e + '<p>' + this[3] + '<br>' + this[4] + '</p>' + itemcard_e + '</a>' + itemcardbody_e;
			}
			else
			{
				itemlist0 += itemcard_s + itemlink_s + this[0] + itemlink_e + itemimg_s + this[5] + itemimg_e + itemcardbody_s + itemtitle_s + this[2] + itemtitle_e + '<p>' + this[3] + '<br>' + this[4] + '</p>' + itemcard_e + '</a>' + itemcardbody_e;
			}
        } else if (this[1] == '1') {
        	item1cnt = item1cnt + 1;
			if( (item1cnt % 3 ) == 1 )
			{
				itemlist1 += iteminit_s + itemcard_s + itemlink_s + this[0] + itemlink_e + itemimg_s + this[5] + itemimg_e + itemcardbody_s + itemtitle_s + this[2] + itemtitle_e + '<p>' + this[3] + '<br>' + this[4] + '</p>' + itemcard_e + '</a>' + itemcardbody_e;
			}
			else
			{
				itemlist1 += itemcard_s + itemlink_s + this[0] + itemlink_e + itemimg_s + this[5] + itemimg_e + itemcardbody_s + itemtitle_s + this[2] + itemtitle_e + '<p>' + this[3] + '<br>' + this[4] + '</p>' + itemcard_e + '</a>' + itemcardbody_e;
			}
        }

		if( (item0cnt % 3 ) == 0 )
		{
			itemlist0 += iteminit_e;
		}
		if( (item1cnt % 3 ) == 0 )
		{
			itemlist1 += iteminit_e;
		
		}


      }
	  
	  
    });

	if( (item0cnt % 3 ) != 0 )
	{
		itemlist0 += iteminit_e;
	}
	if( (item1cnt % 3 ) != 0 )
	{
		itemlist1 += iteminit_e;
	}

    $("#itemlists0").append(itemlist0);
    $("#itemlists1").append(itemlist1);

  });
});

