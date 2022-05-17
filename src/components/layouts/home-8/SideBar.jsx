import React , { useState } from 'react';
import { Accordion } from 'react-bootstrap-accordion'

const SideBar = () => {
    const [dataCate] = useState(
        [
            {
                title: 'Categories',
                content: [
                    {
                        field: 'Art',
                        checked: 'checked'
                    },
                    {
                        field: 'Music',
                        checked: ''
                    },
                    {
                        field: 'Domain Names',
                        checked: ''
                    },
                    {
                        field: 'Virtual Worlds',
                        checked: ''
                    },
                    {
                        field: 'Trading Cards',
                        checked: ''
                    },
                    {
                        field: 'Collectibles',
                        checked: ''
                    },
                    {
                        field: 'Sports',
                        checked: ''
                    },
                    {
                        field: 'Utility',
                        checked: 'checked'
                    },
                ]
            },
            {
                title: 'File Types',
                content: [
                    {
                        field: 'Image',
                        checked: 'checked'
                    },
                    {
                        field: 'Video',
                        checked: ''
                    },
                    {
                        field: 'Audio',
                        checked: ''
                    },
                ]
            },
            {
                title: 'Currencies',
                content: [
                    {
                        field: 'BNB',
                        checked: 'checked'
                    },
                    {
                        field: 'BUSD',
                        checked: ''
                    },
                    {
                        field: 'ETH',
                        checked: ''
                    },
                ]
            },
        ]
    )
  return (
    <div id="side-bar" className="side-bar style-3 item">
        <div className="widget widget-filter style-1 mgbt-0">
            <div className="header-widget-filter">
                <h4 className="title-widget">Filter</h4>
            </div>
        </div>     
        <div className="divider"></div>    
        <div className="wrap-category">
            {
                dataCate.map((item,index)=> (
                    <div key={index} className="widget widget-category boder-bt">
                        <Accordion title={item.title} show={true}>
                            <form action="#">
                                {
                                    item.content.map((itemm , index) => (
                                        <div key={index}>
                                            <label>
                                                <span>{itemm.field}</span>
                                                <span className="pst-re">
                                                    <input type="checkbox" defaultChecked={itemm.checked} />
                                                    <span className="btn-checkbox"></span>
                                                </span>
                                            </label><br/>
                                        </div>
                                    ))
                                }                                            
                            </form>
                        </Accordion>
                    </div>
                ))
            }
            
        </div>
    </div>
  );
}

export default SideBar;