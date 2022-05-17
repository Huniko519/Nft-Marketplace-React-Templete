import React , { useState , Fragment } from 'react';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import CardModal from '../CardModal';

const TodayPicks = props => {
    const data = props.data;

    const [modalShow, setModalShow] = useState(false);
    return (
        <Fragment>
            <section className="tf-explore-2 tf-section live-auctions">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="tf-title-heading ct style-2 mg-bt-13">
                                NFTs Marketplace
                            </h2>
                            <p className="sub-title ct small mg-bt-20 pad-420">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                            </p>
                            {

                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    spaceBetween={30}

                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                        },
                                        767: {
                                        slidesPerView: 2,
                                        },
                                        991: {
                                        slidesPerView: 3,
                                        },
                                        1200: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                    navigation
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}
                                >
                                    {
                                        data.slice(0,7).map((item,index) => (
                                            <SwiperSlide key={index}>
                                                <div className="swiper-container show-shadow carousel auctions">
                                                    <div className="swiper-wrapper">
                                                        <div className="swiper-slide">
                                                            <div className="slider-item">										
                                                        <div className={`sc-card-product ${item.feature ? 'comingsoon' : '' } `}>
                                                        <div className="card-media">
                                                            <Link to="/item-details-01"><img src={item.img} alt="axies" /></Link>
                                                            <Link to="/login" className="wishlist-button heart"><span className="number-like">{item.wishlist}</span></Link>
                                                            <div className="coming-soon">{item.feature}</div>
                                                        </div>
                                                        <div className="card-title">
                                                            <h5 className="style2"><Link to="/item-details-01">"{item.title}"</Link></h5>
                                                            <div className="tags">{item.tags}</div>
                                                        </div>
                                                        <div className="meta-info">
                                                            <div className="author">
                                                                <div className="avatar">
                                                                    <img src={item.imgAuthor} alt="axies" />
                                                                </div>
                                                                <div className="info">
                                                                    <span>Owned By</span>
                                                                    <h6> <Link to="/authors-02">{item.nameAuthor}</Link> </h6>
                                                                </div>
                                                            </div>
                                                            <div className="price">
                                                                <span>Current Bid</span>
                                                                <h5> {item.price}</h5>
                                                            </div>
                                                        </div>
                                                        <div className="card-bottom">
                                                            <button onClick={() => setModalShow(true)} className="sc-button style bag fl-button pri-3 no-bg"><span>Place Bid</span></button>
                                                            <Link to="/activity-01" className="view-history reload">View History</Link>
                                                        </div>
                                                    </div>   	
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            }
                        </div>
                    </div>
                </div>
            </section>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Fragment>
    );
}

export default TodayPicks;
