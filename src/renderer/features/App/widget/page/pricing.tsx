import { Card, Col, Row } from 'antd';
import React from 'react';
import ItemFirst from '../components/Pricing/ItemFirst';
import ItemSecond from '../components/Pricing/ItemSecond';
import ItemThird from '../components/Pricing/ItemThird';
const PricingPage = () => {
    return (
        <Row>
            <Col span={24}>
                <div className="gx-page-heading">
                    <h2 className="gx-page-title">Bảng giá demo</h2>
                </div>
            </Col>

            <Col span={24}>
                <Card title="Mẫu cơ bản">
                    <div className="gx-price-tables gx-pt-default">
                        <Row>
                            <Col xl={8} lg={24} md={8} xs={24}>
                                <ItemFirst
                                    styleName="gx-package"
                                    headerStyle="gx-package-header gx-bg-primary gx-text-white"
                                    itemStyle="gx-package-body"
                                    footerStyle=""
                                />
                            </Col>

                            <Col xl={8} lg={24} md={8} xs={24}>
                                <ItemSecond
                                    styleName="gx-package gx-bg-primary-light gx-highlight gx-border-0"
                                    headerStyle="gx-package-header gx-bg-primary gx-text-white"
                                    itemStyle="gx-package-body gx-text-white"
                                    footerStyle="gx-btn-primary"
                                />
                            </Col>

                            <Col xl={8} lg={24} md={8} xs={24}>
                                <ItemThird
                                    styleName="gx-package"
                                    headerStyle="gx-package-header gx-bg-primary gx-text-white"
                                    itemStyle="gx-package-body"
                                    footerStyle=""
                                />
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Col>

            <Col span={24}>
                <Card title="Bo tròn">
                    <div className="gx-price-tables gx-pt-circle">
                        <Row>
                            <Col xl={8} lg={24} md={8} xs={24}>
                                <ItemFirst
                                    styleName="gx-package"
                                    headerStyle="gx-package-header gx-bg-yellow gx-text-black"
                                    itemStyle="gx-package-body"
                                    footerStyle="gx-btn-block"
                                />
                            </Col>

                            <Col xl={8} lg={24} md={8} xs={24}>
                                <ItemSecond
                                    styleName="gx-package gx-bg-primary-light gx-highlight gx-border-0"
                                    headerStyle="gx-package-header gx-bg-primary gx-text-white"
                                    itemStyle="gx-package-body gx-text-white"
                                    footerStyle="gx-btn-block gx-btn-yellow"
                                />
                            </Col>

                            <Col xl={8} lg={24} md={8} xs={24}>
                                <ItemThird
                                    styleName="gx-package"
                                    headerStyle="gx-package-header gx-bg-green gx-text-black"
                                    itemStyle="gx-package-body"
                                    footerStyle="gx-btn-block"
                                />
                            </Col>
                        </Row>
                    </div>
                </Card>
            </Col>
        </Row>
    );
};

export default PricingPage;
