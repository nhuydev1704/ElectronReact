import { Badge, Button, Col, Form, Input, Row } from 'antd';
import NewPhotos from '../components/NewPhotos';
import ProjectWidget from '../components/ProjectWidget';
import ToolTheDay from '../components/ToolTheDay';
import Widget from '../components/Widget';

function WidgetPage() {
  return (
    <div className="gx-px-3">
      <Row>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          <ProjectWidget />
        </Col>
        <Col xl={6} lg={12} md={12} sm={12} xs={24}>
          {/* <RoadMap /> */}
        </Col>
        <Col xl={8} lg={12} md={12} sm={12} xs={24}>
          <NewPhotos />
        </Col>
        <Col xl={4} lg={12} md={12} sm={12} xs={24}>
          <ToolTheDay />
        </Col>

        <Col xl={4} lg={12} md={12} sm={12} xs={24}>
          <Widget styleName="gx-pink-purple-gradient gx-text-white gx-card-1367-p">
            <h2 className="gx-font-weight-semi-bold gx-text-white">523</h2>
            <p>+18 New Photos</p>
            <p className="gx-text-uppercase gx-fs-sm gx-mb-0">Photos</p>
          </Widget>
          <Widget styleName="gx-blue-cyan-gradient gx-text-white gx-card-1367-p">
            <div className="gx-flex-row gx-justify-content-between gx-mb-2">
              <i className="icon icon-mail-open gx-fs-xxl gx-mr-2" />
              <i className="icon icon-long-arrow-right gx-fs-xxl" />
            </div>
            <h2 className="gx-text-white">271</h2>
            <p className="gx-mb-0">New messages</p>
          </Widget>
        </Col>
        <Col xl={8} lg={12} md={12} sm={12} xs={24}>
          <Widget headStyle styleName="gx-card-full gx-dot-arrow-hover">
            <div className="gx-user-wid-row">
              <div className="gx-user-wid gx-mr-3">
                <img
                  alt="..."
                  src="https://wieldy.g-axon.work/assets/images/widget/slide-sm1.jpg"
                  className="gx-object-cover"
                />
              </div>
              <div className="gx-user-wid-body gx-py-3 gx-pr-3">
                <div className="ant-row-flex">
                  <h2 className="h4 gx-mr-1 gx-mb-1">Mila Alba</h2>
                </div>
                <p className="gx-mb-1 gx-text-grey gx-fs-sm">
                  Creative Head
                  <br /> @example
                </p>
                <div className="gx-dot-arrow">
                  <div className="gx-bg-primary gx-hover-arrow">
                    <i className="icon icon-long-arrow-right gx-text-white" />
                  </div>
                  <div className="gx-dot">
                    <i className="icon icon-ellipse-v gx-text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </Widget>
          <Widget headStyle styleName="gx-card-full gx-dot-arrow-hover">
            <div className="gx-media gx-align-items-center gx-flex-nowrap">
              <div className="gx-px-3 gx-build-box-lay">
                <img
                  alt="..."
                  src="https://wieldy.g-axon.work/assets/images/widget/building.png"
                  className=""
                />
              </div>
              <div className="gx-media-body gx-py-3 gx-pr-4 gx-build-box-lay-content">
                <Badge
                  className="gx-badge-radius-sm gx-mb-2"
                  count="34 New"
                  style={{ backgroundColor: '#52c41a' }}
                />
                <h2 className="h4 gx-text-truncate gx-mb-1">Home & Offices</h2>

                <p className="gx-mb-0 gx-text-grey gx-fs-sm">
                  Properties this week
                </p>
                <div className="gx-dot-arrow">
                  <div className="gx-bg-primary gx-hover-arrow">
                    <i className="icon icon-long-arrow-right gx-text-white" />
                  </div>
                  <div className="gx-dot">
                    <i className="icon icon-ellipse-v gx-text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </Widget>
          <Widget
            title={
              <h4 className="gx-text-primary gx-text-capitalize gx-mb-0">
                <i className="icon icon-mail-open gx-mr-3" />
                Newsletter Subscription
              </h4>
            }
          >
            <h2 className="gx-mb-3 gx-mb-xxl-4 gx-font-weight-light">
              Dont's miss our weekly news and updates
            </h2>
            <Form className="gx-signup-form gx-form-row0 gx-mb-0">
              <div className="gx-mb-3">
                <Input placeholder="Username" />
              </div>
              <Button type="primary" className="gx-mb-0" htmlType="submit">
                Subscribe
              </Button>
            </Form>
          </Widget>
        </Col>
        <Col span={12}>
          <Widget styleName="gx-p-lg-1">
            <Row>
              <Col xl={9} lg={10} md={10} sm={10} xs={24}>
                <img
                  className="gx-rounded-lg gx-w-100"
                  alt="..."
                  src="https://wieldy.g-axon.work/assets/images/widget/sarfing.png"
                />
              </Col>
              <Col xl={15} lg={14} md={14} sm={14} xs={24}>
                <div className="gx-fnd-content">
                  <p className="gx-text-grey">Outdoor Experience</p>
                  <h2 className="gx-text-uppercase gx-text-black gx-font-weight-bold gx-fnd-title">
                    A Friendship with high waves
                  </h2>
                  <p>Had a great time with family on beach this weekend.</p>
                  <ul className="gx-fnd-gallery-list">
                    <li>
                      <img
                        alt="..."
                        src="https://wieldy.g-axon.work/assets/images/widget/sager.jpg"
                        className="gx-rounded-lg gx-img-fluid"
                      />
                    </li>
                    <li>
                      <img
                        alt="..."
                        src="https://wieldy.g-axon.work/assets/images/widget/dil.jpg"
                        className="gx-rounded-lg gx-img-fluid"
                      />
                    </li>
                    <li>
                      <img
                        alt="..."
                        src="https://wieldy.g-axon.work/assets/images/widget/ships.jpg"
                        className="gx-rounded-lg gx-img-fluid"
                      />
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Widget>
        </Col>
      </Row>
    </div>
  );
}

export default WidgetPage;
