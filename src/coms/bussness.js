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
                    <Col span={7}>
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
    }
}



