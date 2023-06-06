import { Button } from 'antd';
import React from 'react';
import Widget from '../Widget';

const NewPhotos = () => {
    return (
        <Widget styleName="gx-widget-bg">
            <span className="gx-widget-badge">5 tỉ/tháng</span>
            <i className="icon icon-camera gx-fs-xlxl" />

            <h1 className="gx-fs-xxxl gx-font-weight-semi-bold gx-mb-3 gx-mb-sm-4">38,248 Hình ảnh</h1>
            <p>ẢNH MỚI ĐƯỢC THÊM TRONG TUẦN NÀY</p>
            <p>Bây giờ hãy bắt đầu với thiết kế tiếp theo của bạn. Đăng ký ngay hôm nay và tiết kiệm 5 tỉ/tháng</p>
            <Button className="gx-mb-1 gx-btn-warning" htmlType="submit">
                Đăng ký
            </Button>
        </Widget>
    );
};

export default NewPhotos;
