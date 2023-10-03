import { useState } from 'react';

export function Products(props) {

   const [isLiked, setIsLiked] = useState(false);

 const toggleLike = () => {
   setIsLiked((prevState) => !prevState);
 };

    return(
        <div className='productList'>
            <div key={props.id} className='productCard'>

                <div className='displayimage'>
                    <p className='forRent'>For {props.rentsale? 'Rent':'Sale' }</p>
                    <i name="likebutton" className={`like fi ${isLiked ? 'fi-sr-heart' : 'fi-rs-heart'}`} onClick={toggleLike}></i>
                    <img src={props.image} alt='product-img' className='productImage'></img>
                </div>                

                <div className='productTime'>
                <i class="locationmarker fi fi-rs-marker"></i>{props.address}</div>

                <div className='productCard__content'>
                   <div className='productCard__content__top'>
                       <h3 className='name'>{props.name}</h3>
                   </div>
                       
                    
                    <div className='displayStack__1'>
                        <div className='room invalues'>
                            <i class="fi fi-rs-city"></i>
                            {props.room} Room
                        </div>
                        <div className='bed invalues'>
                            <i class="fi fi-rr-bed-alt"></i>
                            {props.bed} Bed
                        </div>
                        <div className='bath invalues'>
                        <i class="fi fi-rr-hot-tub"></i>    
                            {props.bath} Bath
                        </div>
                        <div className='area invalues'>
                            <i class="fi fi-ss-arrows"></i>
                            {props.area} sft
                        </div>
                    </div>
                    <hr></hr>
                    <div className='displayStack__3'>
                       <div className='rentAmount'>${props.price} / month</div>
                       <div className='rentLikeButtons'>        
                           <div className='rentButton'><button className='rentnow'>Read More</button></div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}   