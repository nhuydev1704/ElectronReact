import React from 'react';
import { Button } from 'antd';

const PriceItem = ({ styleName, headerStyle, itemStyle, footerStyle }: any) => {
    return (
        <div className={`${styleName}`}>
            <div className={`${headerStyle}`}>
                <h2 className="gx-price">
                    <i className="icon icon-halfstar" />
                    99
                </h2>
                <p className="gx-letter-spacing-base gx-text-white gx-text-uppercase gx-mb-0">Kinh doanh</p>
            </div>

            <div className={`${itemStyle}`}>
                <ul className="gx-package-items">
                    <li>
                        <i className="icon icon-translation" />
                        <span>demo</span>
                    </li>
                    <li>
                        <i className="icon icon-font" />
                        <span>demo</span>
                    </li>
                    <li>
                        <i className="icon icon-hotel-booking" />
                        <span>demo</span>
                    </li>
                    <li>
                        <i className="icon icon-sent" />
                        <span>demo</span>
                    </li>
                    <li>
                        <i className="icon icon-location" />
                        <span>demo</span>
                    </li>
                </ul>

                <div className="gx-package-footer">
                    <Button type="primary" className={`${footerStyle}`}>
                        Mua ngay
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PriceItem;
