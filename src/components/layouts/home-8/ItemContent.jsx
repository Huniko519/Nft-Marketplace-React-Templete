import React , { useState , Fragment , useRef} from 'react'
import { Link } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import Countdown from "react-countdown";
import CardModal from '../CardModal';
import { Dropdown } from 'react-bootstrap';

import img1 from '../../../assets/images/box-item/image-box-47.jpg'
import imga1 from '../../../assets/images/avatar/author_rank.jpg'
import img2 from '../../../assets/images/box-item/image-box-48.jpg'
import imga2 from '../../../assets/images/avatar/avt-3.jpg'
import img3 from '../../../assets/images/box-item/image-box-34.jpg'
import imga3 from '../../../assets/images/avatar/avt-27.jpg'
import img4 from '../../../assets/images/box-item/image-box-35.jpg'
import imga4 from '../../../assets/images/avatar/avt-10.jpg'
import img5 from '../../../assets/images/box-item/image-box-36.jpg'
import imga5 from '../../../assets/images/avatar/avt-5.jpg'
import img6 from '../../../assets/images/box-item/image-box-32.jpg'
import img7 from '../../../assets/images/box-item/image-box-33.jpg'
import img8 from '../../../assets/images/box-item/image-box-52.jpg'
import img9 from '../../../assets/images/box-item/image-box-53.jpg'
import img10 from '../../../assets/images/box-item/image-box-49.jpg'
import img11 from '../../../assets/images/box-item/image-box-54.jpg'
import img12 from '../../../assets/images/box-item/image-box-55.jpg'
import img13 from '../../../assets/images/box-item/image-box-56.jpg'
import img14 from '../../../assets/images/box-item/image-box-50.jpg'
import img15 from '../../../assets/images/box-item/image-box-51.jpg'

const ItemContent = () => {
    const [dataTab] = useState(
        [
            {
                id: 1,
                title: "Live Auctions",
            },
            {
                id: 2,
                title: "Today's Picks",
            },
            {
                id: 3,
                title: "Land",
            },
            {
                id: 4,
                title: "Items",
            },
        ]
    )
    const [dataPanel] = useState(
        [
            {
                id: 1,
                dataContent: [
                    {
                        id: 1,
                        img: img1,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 2,
                        img: img2,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 3,
                        img: img3,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 4,
                        img: img4,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 5,
                        img: img5,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 6,
                        img: img6,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 7,
                        img: img7,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 8,
                        img: img8,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 9,
                        img: img9,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 10,
                        img: img10,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 11,
                        img: img11,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 12,
                        img: img12,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 13,
                        img: img13,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 14,
                        img: img14,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 15,
                        img: img15,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 16,
                        img: img1,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 17,
                        img: img2,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 18,
                        img: img3,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 19,
                        img: img4,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 20,
                        img: img5,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    
                ]
            },
            {
                id: 2,
                dataContent: [
                    {
                        id: 1,
                        img: img11,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 2,
                        img: img12,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 3,
                        img: img13,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 4,
                        img: img14,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 5,
                        img: img15,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 6,
                        img: img1,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 7,
                        img: img2,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 8,
                        img: img3,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 9,
                        img: img4,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 10,
                        img: img5,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                ]
            },
            {
                id: 3,
                dataContent: [
                    {
                        id: 1,
                        img: img1,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 2,
                        img: img2,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 3,
                        img: img3,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 4,
                        img: img4,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 5,
                        img: img5,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 6,
                        img: img6,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 7,
                        img: img7,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 8,
                        img: img8,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 9,
                        img: img9,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 10,
                        img: img10,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                ]
            },
            {
                id: 4,
                dataContent: [
                    {
                        id: 1,
                        img: img11,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 2,
                        img: img12,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 3,
                        img: img13,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 4,
                        img: img14,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 5,
                        img: img15,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 6,
                        img: img1,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga1,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 7,
                        img: img2,
                        title: "Hamlet Comtemplates... ",
                        tags: "bsc",
                        imgAuthor: imga2,
                        nameAuthor: "Freddie Carpeter",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 8,
                        img: img3,
                        title: "Loving Vase 01 by Lanza... ",
                        tags: "bsc",
                        imgAuthor: imga3,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 9,
                        img: img4,
                        title: "Triumphant awakening... ",
                        tags: "bsc",
                        imgAuthor: imga4,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                    {
                        id: 10,
                        img: img5,
                        title: "Flame Dress' by Balmain... ",
                        tags: "bsc",
                        imgAuthor: imga5,
                        nameAuthor: "Tyler Covington",
                        price: "4.89 ETH",
                        wishlist: "100",
                    },
                ]
            },
        ]
    )

    const [visible , setVisible] = useState(15);
    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 5);
    }

    const listBtn = useRef(null)
    const gridBtn = useRef(null)
    const listContent = useRef(null)
    const gridContent = useRef(null)

    const listToggle = () => {
        listBtn.current.classList.add('active');
        gridBtn.current.classList.remove('active');
        listContent.current.classList.add('open');
        gridContent.current.classList.remove('open');
    }
    const gridToggle = () => {
        gridBtn.current.classList.add('active');
        listBtn.current.classList.remove('active');
        gridContent.current.classList.add('open');
        listContent.current.classList.remove('open');
    }

    const [modalShow, setModalShow] = useState(false);
  return (
    <Fragment>
        <div className="flat-tabs items">
            <Tabs >
                <TabList>
                    {
                        dataTab.map(data=> (
                            <Tab key={data.id} >{data.title}</Tab>
                        ))
                    }
                </TabList>
                {
                    dataPanel.map(data =>(
                        <TabPanel key={data.id}>
                            <div className="option">
                                <h2 className="title">1,000 Items</h2>
                                <div className="view">
                                    <ul>
                                        <li onClick={listToggle} ref={listBtn} className="style1 grid active">
                                            <Link to="#">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22 8.52V3.98C22 2.57 21.36 2 19.77 2H15.73C14.14 2 13.5 2.57 13.5 3.98V8.51C13.5 9.93 14.14 10.49 15.73 10.49H19.77C21.36 10.5 22 9.93 22 8.52Z" fill="white"/>
                                                    <path d="M22 19.77V15.73C22 14.14 21.36 13.5 19.77 13.5H15.73C14.14 13.5 13.5 14.14 13.5 15.73V19.77C13.5 21.36 14.14 22 15.73 22H19.77C21.36 22 22 21.36 22 19.77Z" fill="white"/>
                                                    <path d="M10.5 8.52V3.98C10.5 2.57 9.86 2 8.27 2H4.23C2.64 2 2 2.57 2 3.98V8.51C2 9.93 2.64 10.49 4.23 10.49H8.27C9.86 10.5 10.5 9.93 10.5 8.52Z" fill="white"/>
                                                    <path d="M10.5 19.77V15.73C10.5 14.14 9.86 13.5 8.27 13.5H4.23C2.64 13.5 2 14.14 2 15.73V19.77C2 21.36 2.64 22 4.23 22H8.27C9.86 22 10.5 21.36 10.5 19.77Z" fill="white"/>
                                                </svg>
                                                <span>Grid</span>
                                            </Link>
                                        </li>
                                        <li onClick={gridToggle} ref={gridBtn} className="style2 list">
                                            <Link to="#">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M21 8H3C2.59 8 2.25 7.09333 2.25 6C2.25 4.90667 2.59 4 3 4H21C21.41 4 21.75 4.90667 21.75 6C21.75 7.09333 21.41 8 21 8Z" fill="#EBEBEB"/>
                                                    <path d="M21 14H3C2.59 14 2.25 13.0933 2.25 12C2.25 10.9067 2.59 10 3 10H21C21.41 10 21.75 10.9067 21.75 12C21.75 13.0933 21.41 14 21 14Z" fill="#EBEBEB"/>
                                                    <path d="M21 20H3C2.59 20 2.25 19.0933 2.25 18C2.25 16.9067 2.59 16 3 16H21C21.41 16 21.75 16.9067 21.75 18C21.75 19.0933 21.41 20 21 20Z" fill="#EBEBEB"/>
                                                </svg>
                                                <span>List</span>
                                            </Link>
                                        </li>
                                    </ul>

                                    <Dropdown>
                                        <Dropdown.Toggle id="dropdown-basic" className='btn-sort-by dropdown'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3 7H21" stroke="white" strokeWidth="1.5" strokeLinecap="round"></path>
                                                <path d="M6 12H18" stroke="white" strokeWidth="1.5" strokeLinecap="round"></path>
                                                <path d="M10 17H14" stroke="white" strokeWidth="1.5" strokeLinecap="round"></path>
                                            </svg>
                                            <span>Low To High</span>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{ margin: 0 }}>
                                        <Dropdown.Item href="#">
                                            Top rate
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            Mid rate
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#">
                                            Low rate
                                        </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    
                                </div>
                            </div>
                            
                            <div className="content-item open" ref={listContent}>
                                {
                                    data.dataContent.slice(0,visible).map ((item,key)=>(
                                        <div key={key} className="col-item">
                                            <div className="sc-card-product menu_card style-h7">
                                                <div className="meta-info style">
                                                    <div className="author">
                                                        <div className="avatar">
                                                            <img src={item.imgAuthor} alt="Axies" />
                                                        </div>
                                                        <div className="info">
                                                            <span>Creator</span>
                                                            <h6> <Link to="/author-02">{item.nameAuthor}</Link> </h6>
                                                        </div>
                                                    </div>
                                                    <button className="wishlist-button heart"><span className="number-like"> {item.wishlist}</span></button>
                                                </div>
                                                <div className="card-media">
                                                    <Link to="/item-details-01"><img src={item.img} alt="Axies" /></Link>
                                                    <div className="featured-countdown">
                                                        <span className="slogan"></span>
                                                        <Countdown date={Date.now() + 500000000}>
                                                            <span>You are good to go!</span>
                                                        </Countdown>
                                                    </div>
                                                    <div className="button-place-bid">
                                                        <button onClick={() => setModalShow(true)} data-toggle="modal" data-target="#popup_bid" className="sc-button style-place-bid style bag fl-button pri-3"><span>Place Bid</span></button>
                                                    </div>
                                                </div>
                                                <div className="card-title">
                                                    <h5><Link to="item-details.html">{item.title}</Link></h5>
                                                </div>
                                                <div className="meta-info">
                                                    <div className="author">
                                                        <div className="info">
                                                            <span>Current Bid</span>
                                                            <span className="pricing">{item.price}</span>
                                                        </div>
                                                    </div>
                                                    <div className="tags">{item.tags}</div>
                                                </div>
                                            </div>   
                                        </div>
                                    ))
                                }

                                {
                                    visible < data.dataContent.length && 
                                    <div className="col-md-12 wrap-inner load-more text-center btn-auction item center">
                                        <Link to="#" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                                    </div>
                                }
                            </div>
                            <div className="content-item2" ref={gridContent}>
                                {
                                    data.dataContent.slice(0,visible).map((item,index)=> (
                                    <div key={index} className="col-item">
                                        <div className="sc-card-product menu_card style-h7">
                                            <div className="wrap-media">
                                                <div className="card-media">
                                                    <Link to="/item-details-01"><img src={item.img} alt="Axies" /></Link>                                                                                                            
                                                </div>
                                            </div>
                                            <div className="card-title">
                                                <p>Item Name</p>
                                                <h4><Link to="/item-details-01">{item.title}</Link></h4>
                                            </div>
                                            <div className="meta-info style">
                                                <p>Creator</p>
                                                <div className="author">
                                                    <div className="avatar">
                                                        <img src={item.imgAuthor} alt="Axies" />
                                                    </div>
                                                    <div className="info">
                                                        <h4> <Link to="author02.html">{item.nameAuthor}</Link> </h4>
                                                    </div>
                                                </div>
                                            </div>     
                                            <div className="countdown">
                                                <p>Countdown</p>
                                                <div className="featured-countdown">
                                                    <span className="slogan"></span>
                                                    <Countdown date={Date.now() + 500000000}>
                                                        <span>You are good to go!</span>
                                                    </Countdown>
                                                </div>
                                            </div>
                                            <div className="wrap-hear">
                                                <button className="wishlist-button heart"><span className="number-like"> {item.wishlist}</span></button>
                                            </div>
                                            <div className="wrap-tag">
                                                <div className="tags">{item.tags}</div>
                                            </div>
                                            <div className="meta-info">
                                                <div className="author">
                                                    <div className="info">
                                                        <p>Current Bid</p>
                                                        <p className="pricing">{item.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="button-place-bid">
                                                <button onClick={() => setModalShow(true)} data-toggle="modal" data-target="#popup_bid" className="sc-button style-place-bid style bag fl-button pri-3"><span>Place Bid</span></button>
                                            </div>
                                        </div>   
                                    </div>
                                    ))
                                }
                                {
                                    visible < data.dataContent.length && 
                                    <div className="col-md-12 wrap-inner load-more text-center btn-auction item center">
                                        <Link to="#" className="sc-button loadmore fl-button pri-3" onClick={showMoreItems}><span>Load More</span></Link>
                                    </div>
                                }
                            </div>
                            
                        </TabPanel>
                    ))
                }
            </Tabs>
        </div>
        <CardModal
        show={modalShow}
        onHide={() => setModalShow(false)}
         />
        
    </Fragment>
  )
}

export default ItemContent