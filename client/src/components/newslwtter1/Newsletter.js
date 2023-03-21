import './newsletter1.css'


const Newsletter = () => {
  return (
    <div>
      <div className="section-head style-1 text-white">
            <h6 className="sub-title bgl-light m-b20">Newsletter</h6>
            <h2 className="title m-b15">Subscribe To Our Newsletter For Late   Update Of Finanical Services 
            </h2>
            <p>Curabitur eleifend nibh sit amet ex posuere, vel malesuada turpis pretium. Quisque et tincidunt risus, a tempor massa. Cras tempor egestas libero, eu laoreet enim pharetra non.
            </p>
	   </div>

       <div className="dlab-subscribe style-2 max-w500">
			<form className="dzSubscribe">
				<div className="dzSubscribeMsg"></div>
					<div className="form-group">
						<div className="input-group">
						 <input name="dzEmail" required="required" type="email" className="form-control" placeholder="Email Address"/>
						   <div className="input-group-addon">
								<button name="submit" value="Submit" type="submit" className="btn rounded-xl shadow btn-primary">Subscribe Now</button>
						</div>
					</div>
				</div>
			</form>
	
    	</div>
    </div>
  )
}

export default Newsletter
