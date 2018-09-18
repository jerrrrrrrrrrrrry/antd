import React, {Component} from 'react'
import {Row, Col} from 'antd';
import { Card } from 'antd';
import { List } from 'antd';
import test from '@/image/20171109092807440.jpg';


const data = [
    <a href="javascript:;" className="buss">跨境业务</a>,
    <a href="javascript:;" className="buss">仓配网络</a>,
    <a href="javascript:;" className="buss">供应链金融</a>,
    <a href="javascript:;" className="buss">智能科技</a>,
];


const contentListNoTitle = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
};

export default class Bussness extends Component {

    state = {
        key: 'tab1',
        noTitleKey: 'app',
    }

    onTabChange = (key, type) => {
        console.log(key, type);
        this.setState({ [type]: key });
    }

    render() {
        return (
            <div>
                <div style={{ background: '#fff'}}>
                    <Row>
                    <Col span={1}></Col>
                    <Col span={6}>
                    <Card title="我们的业务" bordered={false} style={{ }}>
                        <p>上海现代物流投资发展有限公司为百联集团全资子公司，公司注册资本2.83亿元，总资产9.54亿元，年经营规模40多亿元。公司拥有丰富的物流资源和先进的运作技术，提供代理采购、加工、运输。包装、仓储、转运、配送、货代、国际货运等完整的供应链物流服务，以及供应链的咨询、规划、管理等服务。</p>
                        <a href="#">>了解更多</a>
                    </Card>
                        <List
                            className="buss"
                            /*size="small"*/
/*                            header={<div>Header</div>}
                            footer={<div>Footer</div>}*/
                            bordered={false}
                            dataSource={data}
                            renderItem={item => (<List.Item>{item}</List.Item>)}
                        />
                    </Col>
                        <Col span={13}>
                        <div>
                            <em><img src={test}/></em>
                        </div>
                    </Col>
                    </Row>
                </div>
            </div>
        );

    /*render() {
        return (
            <div className="yewu">
                <div className="us_bussness">
                    <h3>我们的业务</h3>
                    <p>
                        心怡科技股份有限公司成立于2004年，是优质的第三方供应链服务企业，阿里巴巴集团旗下天猫超市仓储管理服务的核心提供商，天猫国际跨境物流运营主体。经过14年的耕耘和努力，心怡科技已发展成为为多家世界500强及国内外知名企业提供仓配一体化服务的国家4A级物流企业…
                    </p>
                    <span><a href="">了解更多</a></span>
                </div>
                <dl className="bussness">
                    <dt>
                        <a href="javascript:;" className="ico_9 hover">跨境业务</a>
                        <a href="javascript:;" className="ico_10">仓配网络</a>
                        <a href="javascript:;" className="ico_11">供应链金融</a>
                        <a href="javascript:;" className="ico_12">智能科技</a>
                    </dt>
                    <dd style="display: block;">
                        <img src="http://www.alog.com/uploadfile/2017/1109/20171109092529902.jpg" alt="跨境业务">
                        <div>
                            <h3>跨境业务</h3>
                            <p>
                                2014年心怡科技开启全球化布局，目前已在美国、日本、韩国、澳洲、荷兰、英国、法国、德国、俄罗斯、意大利、印尼、新加坡、马来西亚、泰国、越南、香港、台湾等17个国家和地区建立全资控股子公司，为商家提供跨境物流服务、海外品牌直采等一体化服务。 </p>
                            <span><a
                                href="http://www.alog.com/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=2">了解更多</a></span>
                        </div>
                    </dd>
                    <dd style="display: none;">
                        <img src="http://www.alog.com/uploadfile/2017/1109/20171109092726437.jpg" alt="仓配网络">
                        <div>
                            <h3>仓配网络</h3>
                            <p>
                                我们不仅可以提供专属和共享的仓储及配送服务，还可满足您提出的各种定制化需求。加上一系列可选择的增值服务，能助您进一步提升供应链的效益。 </p>
                            <span><a
                                href="http://www.alog.com/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=6">了解更多</a></span>
                        </div>
                    </dd>
                    <dd style="display: none;">
                        <img src="http://www.alog.com/uploadfile/2017/1109/20171109092807440.jpg" alt="供应链金融">
                        <div>
                            <h3>供应链金融</h3>
                            <p>
                                心怡供应链金融，致力于服务全球物流供应链。我们基于物流服务技术及强大的信息化处理能力，依托完整的物流场景，为供应链参与者提供融资解决方案… </p>
                            <span><a
                                href="http://www.alog.com/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=7">了解更多</a></span>
                        </div>
                    </dd>
                    <dd style="display: none;">
                        <em><img src="http://www.alog.com/uploadfile/2017/1109/20171109092842560.jpg" alt="智能科技"></em>
                        <div>
                            <h3>智能科技</h3>
                            <p>
                                科技是心怡发展的驱动力，心怡是一家自主开发WMS、WCS、OMS、TMS系统、并实现产品化的物流科技公司，是国内研发机器人并投入实际应用的第三方物流公司，是投资大型自动化仓储以及分拣自动化的第三方物流公司。 </p>
                            <span><a
                                href="http://www.alog.com/index.php?m=content&amp;c=index&amp;a=lists&amp;catid=9">了解更多</a></span>
                        </div>
                    </dd>

                </dl>
            </div>

*/

    }
}



