<?php
$con_html_str = <<< TEXT
        	<div class="form-group row border-bottom border-secondary">
                 <div class="col-sm-6">
                    <label for="f-name" class="small" >##key_f-name</label>
                    <input type="hidden" id="f-name" name="f-name" value="##val_f-name">
                    <p>##val_f-name</p>
				 </div>
                 <div class="col-sm-6">
                    <label for="s-name" class="small">##key_s-name</label>
                    <input type="hidden" id="s-name" name="s-name" value="##val_s-name">
                    <p>##val_s-name</p>
				  </div>
             </div>

        	<div class="form-group row border-bottom border-secondary">
                <div class="col-sm-6">
                   	<label for="f-kana" class="small">##key_f-kana</label>
                   	<input type="hidden" id="f-kana" name="f-kana" value="##val_f-kana">
                    <p>##val_f-kana</p>
				</div>
                <div class="col-sm-6">
                   	<label for="s-kana" class="small">##key_s-kana</label>
                   	<input type="hidden" id="s-kana" name="s-kana" value="##val_s-kana">
                    <p>##val_s-kana</p>
				</div>
			</div>

                <div class="form-group row border-bottom border-secondary">
                	<div class="col-12">
                    <label for="company" class="small">##key_company</label>
                    <input type="hidden" id="company" name="company" value="##val_company">
                    <p>##val_company</p>
					</div>
                </div>

                <div class="form-group row border-bottom border-secondary">
                	<div class="col-12">
                    	<label for="organ" class="small">##key_organ</label>
                    	<input type="hidden" id="organ" name="organ" value="##val_organ">
                    	<p>##val_organ</p>
					</div>
                </div>

                <div class="form-group row border-bottom border-secondary">
                	<div class="col-12">
	                    <label for="title" class="small">##key_title</label>
    	                <input type="hidden" id="title" name="title" value="##val_title">
    	                <p>##val_title</p>
					</div>
                </div>

                <div class="form-group row border-bottom border-secondary">
                	<div class="col-12">
	                    <label for="tel" class="small">##key_tel</label>
    	                <input type="hidden" id="tel" name="tel" value="##val_tel">
    	                <p>##val_tel</p>
					</div>
                </div>

                <div class="form-group row border-bottom border-secondary">
                	<div class="col-12">
	                    <label for="email" class="small">##key_email</label>
	                    <input type="hidden" id="email" name="email" value="##val_email">
	                    <p>##val_email</p>
					</div>
                </div>

                <div class="form-group row border-bottom border-secondary">
                	<div class="col-12">
	                    <label class="small">##key_know</label>
	                    <input type="hidden" id="know" name="know" value="##val_know">
	                    <p>##val_know
	                    </p>
                    </div>
                </div>
              
                
                <div class="form-group row border-bottom border-secondary">
                	<div class="col-12">
	                    <label for="inq-naiyo" class="small">##key_inq-naiyo</label>
	                    <input type="hidden" id="inq-naiyo" name="inq-naiyo" value="##val_inq-naiyo">
						<p>##val_inq-naiyo</p>
					</div>
				</div>

                <div class="form-group row">
                	<div class="col-12">
            	     <p>「個人情報のお取扱いに関する同意事項」に##val_privacy</p>
	                    <input type="hidden" id="privacy" name="privacy" value="##val_privacy">
            	     </div>
				</div>

				<div class="row text-center">
	                <div class="col-sm-12">
		                <button type="submit" class="btn btn-info">　送信する　</button>
	            	    <button type="button" value="戻る" class="btn btn-secondary" onclick="history.back()">　　戻る　　</button>
					</div>
				</div>
<input type="hidden" name="mail_set" value="confirm_submit">
<br>
TEXT;
?>

